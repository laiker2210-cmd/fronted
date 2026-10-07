const https = require('https');
const fs = require('fs');
const path = require('path');

const MEALS_FILE = './src/data/meals.json';
const IMAGES_DIR = './public/images';

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

const mealsData = JSON.parse(fs.readFileSync(MEALS_FILE, 'utf-8'));
const meals = mealsData.meals || [];

console.log(`📖 Рецептов: ${meals.length}\n`);

// Проверка, что файл — настоящий JPEG
function isValidJpeg(filepath) {
  try {
    const buf = Buffer.alloc(2);
    const fd = fs.openSync(filepath, 'r');
    fs.readSync(fd, buf, 0, 2, 0);
    fs.closeSync(fd);
    return buf[0] === 0xff && buf[1] === 0xd8;
  } catch (e) {
    return false;
  }
}

// Скачивание с таймаутом 10 сек — не зависает
function tryDownload(url, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const request = (currentUrl, redirects = 0) => {
      let timer = null;

      const req = https.get(currentUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
          clearTimeout(timer);
          request(res.headers.location, redirects + 1);
          return;
        }
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

      timer = setTimeout(() => {
        req.destroy();
        reject(new Error('таймаут 10 сек'));
      }, timeoutMs);

      req.on('error', (e) => {
        clearTimeout(timer);
        reject(e);
      });
    };
    request(url);
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function makePlaceholderSvg(meal) {
  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#16a085'];
  const color = colors[Number(meal.idMeal) % colors.length];
  const name = meal.strMeal
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <rect width="300" height="200" fill="${color}"/>
  <text x="150" y="95" font-family="Arial, sans-serif" font-size="40" text-anchor="middle">🍽️</text>
  <text x="150" y="135" font-family="Arial, sans-serif" font-size="16" fill="#ffffff" text-anchor="middle">${name}</text>
</svg>`;
}

async function main() {
  let ok = 0;               // уже с нормальной картинкой
  let replaced = 0;         // заглушка заменена на фото
  let newPlaceholders = 0;  // создано новых заглушек
  let stillPlaceholder = 0; // заглушка осталась

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const jpgPath = path.join(IMAGES_DIR, `${meal.idMeal}.jpg`);
    const svgPath = path.join(IMAGES_DIR, `${meal.idMeal}.svg`);

    // Валидный JPEG уже есть — пропускаем
    if (fs.existsSync(jpgPath) && isValidJpeg(jpgPath)) {
      console.log(`[${i + 1}/${meals.length}] ${meal.strMeal} - уже скачано ⏭️`);
      ok++;
      continue;
    }

    // Битый jpg — удаляем
    if (fs.existsSync(jpgPath)) {
      console.log(`[${i + 1}/${meals.length}] ${meal.strMeal} - файл битый, удаляю 🗑️`);
      fs.unlinkSync(jpgPath);
    }

    const hadPlaceholder = fs.existsSync(svgPath);

    if (hadPlaceholder) {
      console.log(`[${i + 1}/${meals.length}] ${meal.strMeal} - стоит заглушка 🎨, пробую скачать фото...`);
    }

    const sources = [
      meal.strMealThumb,
      `https://web.archive.org/web/2024id_/${meal.strMealThumb}`,
    ];

    let saved = false;

    for (let s = 0; s < sources.length; s++) {
      console.log(`   пробую источник ${s + 1}/2...`);
      try {
        const buffer = await tryDownload(sources[s]);
        if (buffer.length > 1000 && buffer[0] === 0xff && buffer[1] === 0xd8) {
          fs.writeFileSync(jpgPath, buffer);
          saved = true;
          console.log(`   ✅ сохранено (${s === 0 ? 'напрямую' : 'из архива'})`);
          break;
        } else {
          console.log('   ⚠️ вернулась не картинка');
        }
      } catch (e) {
        console.log(`   ❌ ${e.message}`);
      }
      await sleep(300);
    }

    if (saved) {
      // Фото скачалось — убираем заглушку, если она была
      if (hadPlaceholder) {
        fs.unlinkSync(svgPath);
        console.log('   🗑️ заглушка удалена');
        replaced++;
      }
    } else {
      if (!hadPlaceholder) {
        fs.writeFileSync(svgPath, makePlaceholderSvg(meal));
        console.log('   🎨 создана заглушка');
        newPlaceholders++;
      } else {
        console.log('   🎨 заглушка остаётся');
        stillPlaceholder++;
      }
    }

    await sleep(200);
  }

  console.log('\n========================================');
  console.log('✅ ГОТОВО!');
  console.log(`⏭️ Уже с фото: ${ok}`);
  console.log(`🔄 Заглушек заменено на фото: ${replaced}`);
  console.log(`🎨 Создано новых заглушек: ${newPlaceholders}`);
  console.log(`🎨 Осталось заглушек: ${stillPlaceholder}`);
  console.log('========================================\n');
}

main();