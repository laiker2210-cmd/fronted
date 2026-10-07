const https = require('https');
const fs = require('fs');
const path = require('path');

const MEALS_FILE = './src/data/meals.json';
const IMAGES_DIR = './public/images';

if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Универсальный GET с таймаутом
function httpGet(url, timeoutMs = 15000) {
    return new Promise((resolve, reject) => {
        let timer = null;
        const req = https.get(url, (res) => {
            if (res.statusCode !== 200) {
                clearTimeout(timer);
                res.resume();
                reject(new Error('HTTP ' + res.statusCode));
                return;
            }
            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end', () => {
                clearTimeout(timer);
                resolve(Buffer.concat(chunks));
            });
            res.on('error', (e) => {
                clearTimeout(timer);
                reject(e);
            });
        });
        timer = setTimeout(() => { req.destroy(); reject(new Error('таймаут')); }, timeoutMs);
        req.on('error', (e) => { clearTimeout(timer); reject(e); });
    });
}

async function fetchJson(url) {
    const buffer = await httpGet(url);
    return JSON.parse(buffer.toString('utf-8'));
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function isValidJpeg(filepath) {
    try {
        const buf = Buffer.alloc(2);
        const fd = fs.openSync(filepath, 'r');
        fs.readSync(fd, buf, 0, 2, 0);
        fs.closeSync(fd);
        return buf[0] === 0xff && buf[1] === 0xd8;
    } catch { return false; }
}

function makePlaceholderSvg(meal) {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#16a085'];
    const color = colors[Number(meal.idMeal) % colors.length];
    const name = (meal.strMeal || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <rect width="300" height="200" fill="${color}"/>
  <text x="150" y="95" font-family="Arial, sans-serif" font-size="40" text-anchor="middle">🍽️</text>
  <text x="150" y="135" font-family="Arial, sans-serif" font-size="14" fill="#ffffff" text-anchor="middle">${name}</text>
</svg>`;
}

async function main() {
    // 1. Получаем все категории
    console.log('📋 Получаем список категорий...');
    const catData = await fetchJson('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = catData.categories;
    console.log(`   найдено категорий: ${categories.length}\n`);

    // 2. Для каждой категории — получаем ID рецептов
    const allIds = new Set();
    for (let i = 0; i < categories.length; i++) {
        const cat = categories[i];
        process.stdout.write(`📂 [${i + 1}/${categories.length}] ${cat.strCategory}... `);
        try {
            const data = await fetchJson(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(cat.strCategory)}`
            );
            const count = data.meals ? data.meals.length : 0;
            data.meals && data.meals.forEach(m => allIds.add(m.idMeal));
            console.log(`${count} рецептов (всего уникальных: ${allIds.size})`);
        } catch (e) {
            console.log(`ошибка: ${e.message}`);
        }
        await sleep(200);
    }

    console.log(`\n✅ Уникальных рецептов: ${allIds.size}\n`);

    // 3. Загружаем полные данные по каждому рецепту
    console.log('🔄 Загружаем полные данные рецептов...\n');
    const allMeals = [];
    const ids = Array.from(allIds);

    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        process.stdout.write(`[${i + 1}/${ids.length}] `);
        try {
            const data = await fetchJson(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            if (data.meals && data.meals[0]) {
                allMeals.push(data.meals[0]);
                console.log(`✅ ${data.meals[0].strMeal}`);
            } else {
                console.log('❌ пустой ответ');
            }
        } catch (e) {
            console.log(`❌ ${e.message}`);
        }
        await sleep(200);
    }

    console.log(`\n💾 Сохраняем ${allMeals.length} рецептов в meals.json...`);
    fs.writeFileSync(
        MEALS_FILE,
        JSON.stringify({ meals: allMeals }, null, 2),
        'utf-8'
    );
    console.log('✅ JSON сохранён\n');

    // 4. Скачиваем/обновляем картинки
    console.log('🖼️ Скачиваем картинки...\n');
    let ok = 0, replaced = 0, newPlaceholder = 0, stillPlaceholder = 0;

    for (let i = 0; i < allMeals.length; i++) {
        const meal = allMeals[i];
        const jpgPath = path.join(IMAGES_DIR, `${meal.idMeal}.jpg`);
        const svgPath = path.join(IMAGES_DIR, `${meal.idMeal}.svg`);

        if (fs.existsSync(jpgPath) && isValidJpeg(jpgPath)) {
            process.stdout.write(`[${i + 1}/${allMeals.length}] ⏭️\n`);
            ok++;
            continue;
        }

        if (fs.existsSync(jpgPath)) fs.unlinkSync(jpgPath);

        const hadPlaceholder = fs.existsSync(svgPath);
        if (hadPlaceholder) {
            process.stdout.write(`[${i + 1}/${allMeals.length}] 🎨→📷 `);
        } else {
            process.stdout.write(`[${i + 1}/${allMeals.length}] 📷 `);
        }

        let saved = false;
        try {
            const buffer = await httpGet(meal.strMealThumb);
            if (buffer.length > 1000 && buffer[0] === 0xff && buffer[1] === 0xd8) {
                fs.writeFileSync(jpgPath, buffer);
                saved = true;
                console.log('✅');
            } else {
                console.log('⚠️ не JPEG');
            }
        } catch (e) {
            console.log(`❌ ${e.message}`);
        }

        if (saved) {
            if (hadPlaceholder) { fs.unlinkSync(svgPath); replaced++; }
        } else {
            if (!hadPlaceholder) {
                fs.writeFileSync(svgPath, makePlaceholderSvg(meal));
                newPlaceholder++;
            } else {
                stillPlaceholder++;
            }
        }
        await sleep(150);
    }

    console.log('\n========================================');
    console.log('✅ ВСЁ ГОТОВО!');
    console.log(`📖 Рецептов всего: ${allMeals.length}`);
    console.log(`📸 Картинки готовы: ${ok + replaced}`);
    console.log(`🔄 Заглушек заменено на фото: ${replaced}`);
    console.log(`🎨 Создано заглушек: ${newPlaceholder}`);
    console.log(`🎨 Заглушек осталось: ${stillPlaceholder}`);
    console.log('========================================');
}

main().catch(e => {
    console.error('Фатальная ошибка:', e);
});