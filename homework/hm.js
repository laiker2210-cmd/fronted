// Строгий режим, не забывать!!!
"use strict";

//1.10
/* let a = +prompt("Первое число:");
let b = +prompt("Второе число:");
let c = prompt("Действие:");
let sum;

if (c === "+") {
    sum = a + b;
    alert(sum);
} else if (c === "-") {
    sum = a - b;
    alert(sum);
} else if (c === "*") {
    sum = a * b;
    alert(sum);
} else if (c === "/") {
    sum = a / b;
    alert(sum);
} else {
    alert("Неверное действие");
}

console.log(sum); */

// 1.8
/* let input1 = prompt("Введи любой текст:");
console.log("Ввод 1:", input1);
console.log("Тип 1:", typeof input1);

let input2 = prompt("Нажми ОК, ничего не вводя:");
console.log("Ввод 2:", input2);
console.log("Тип 2:", typeof input2);

let input3 = prompt("Нажми Отмену:");
console.log("Ввод 3:", input3);
console.log("Тип 3:", typeof input3);
 */
// 5 дополнительных задач по лекции 1
//1.11


// ==================== Занятия от 01.04.2026 ====================
// Задача 1.9 (СЛ): «Секундомер»

/* let sec = +prompt("Введите колличество секунд:");
let chas = Math.floor(sec / 3600);
let min = Math.floor((sec % 3600) / 60);
console.log(Math.floor(sec));
console.log(Math.floor(chas));
console.log(Math.floor(min));
console.log(chas + ":" + min + ":" + sec); */

// Задача 1.10 (СЛ): «Генератор пароля»

/* let names = prompt("Введите имя:");
let sum = Math.floor(Math.random() * 9999) + 1000;
let num = names.slice(0, 3).toUpperCase();
let pas = num + sum;
document.writeln("Ваш пароль: " + pas); */


// 10 Задач: 5 Сложных (СЛ) + 5 Экспертных (**)
// Задача 2.1 (СЛ): «Конвертер времени: Полный разбор»

/* let vvod = +prompt("Введите колличество минут:");
let day = Math.floor(vvod / 1440);
let ppp = vvod % 1440;
let chas = Math.floor(ppp / 60);
let min = ppp % 60;
alert(`${day} дн. ${chas} ч.  ${min} мин.`); */

// Задача 2.2 (СЛ): «Геометрия цилиндра»

/* let r = +prompt("Введите радиус в сантиметрах:");
let h = +prompt("Введите высоту в сантиметрах:");

let V = Math.PI * (r ** 2) * h;
let S = 2 * Math.PI * r * (r + h);
alert("Объем цилиндра равевн: " +  V.toFixed(2) + " см" + " а площадь поверхности равна: " + S.toFixed(2) + " см"); */

//  Задача 2.3 (СЛ): «Финансовый процент»

/* let prigod = +prompt("Введите сумму ежемесечного дохода:");
let rashod = +prompt("Введите сумму ежемесечного расхода:");

let chistaiSumma = prigod - rashod;
let prochent = (chistaiSumma / prigod) * 100;

alert(`Чистая сумма ежемесечного дохода равна ${chistaiSumma}\nЧистая сумма в процентном соотношении от дохода равна ${prochent.toFixed(2)}`); */

// Задача 2.4 (СЛ): «Трансформер текста»

/* let total = prompt("Введите любую фразу:");
let A = total.toUpperCase();
let a = total.slice(0,5);
let itog = a + total.length;
alert(itog); */

// Задача 2.5 (СЛ): «Средний балл с коэффициентами»

/* let a1 = +prompt("Оценка 1:");
let a2 = +prompt("Оценка 2:");
let a3 = +prompt("Оценка 3:");

let b1 = +prompt("Коэффициент 1:");
let b2 = +prompt("Коэффициент 2:");
let b3 = +prompt("Коэффициент 3:");
let ab = (a1 * b1) + (a2 * b2) + (a3 * b3);
let sumB = b1+b2+b3;
let average = ab / sumB;
alert("Средний балл: " + average.toFixed(1)); */

// Экспертные задачи (**) — 5 штук
// Задача 2.6 (**): «Генератор RGB цвета»

/* let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
alert(`rgb(${r}, ${g}, ${b})`); */

// Задача 2.7 (**): «Сумма цифр трехзначного числа»

/* let num = +prompt("Введите трехзначное число:");

let a = Math.floor(num % 10);
let b = Math.floor((num / 10) % 10);
let c = Math.floor(num / 100);
let sum = a + b + c;
alert(`Цифры: ${c} ${b} ${a}\nСумма: ${sum}`) */

// Задача 2.8 (**): «Возраст в секундах»

/* let age = +prompt("Введите ваш год рождения:");
let a = 2026;
let b = a - age;
let sec = b * 365.25 * 24 * 60 * 60;
alert(`Ваш возвраст ${b} г. или ${sec} секунд`); */

// Задача 2.9 (**): «Перестановка половин строки»

/* let text0 = prompt("Введите фразу:");
let text1 = text0.length;
let texttt = Math.round(text1 / 2);

let ch1 = text0.slice(0, texttt);
let ch2 = text0.slice(texttt);
let sum = ch2 + ch1;
console.log(sum); */

// Задача 2.10 (**): «Конвертер температур (3 шкалы)»

/* let c = +prompt("Введите температуру по цельсию:");

let f = c * 9 / 5 + 32;
let k = c + 273.15;
let r = (c + 273.15) * 9 / 5;
alert(`${c} градусов по Цельсию будет равно по Фаренгейту ${f.toFixed(2)}, по Кёльвину ${k.toFixed(2)} и по шкале Ранкина ${r.toFixed(2)}`); */

// повтор лекций 1 и 2

// переменные и индекс

/* let arr = new Array("365", "Земля", "7 миллиардов", "Солнца");

console.log("Мы живем на планете " + arr[1] + ",", 'она делает один оборот вокруг ' + arr[3], "за " + arr[0] + " дней"); */

/* let a = 23;
let b = +"6";
console.log("Res ", a + b); */

// обратное число

/* let num = 4321;
let one, two, three, four;

one = num % 10;
two = parseInt(num / 10 % 10);
three = parseInt(num / 100 % 10);
four = parseInt(num / 1000 % 10);

console.log(one,two,three,four);

console.log(one * 1000 + two * 100 + three *10 + four); */

//---------------------------------------
// задача

/* let nuum = +prompt("Введите пятизначное число:", 39671);

let a1 = nuum % 10;
let a2 = parseInt(nuum / 10 % 10);
let a3 = parseInt(nuum / 100 % 10);
let a4 = parseInt(nuum / 1000% 10);
let a5 = parseInt(nuum / 10000 % 10);

let pr = a1*a2*a3*a4*a5;

console.log(pr);

let sum = (a1+a2+a3+a4+a5) / 5;
console.log(sum);


console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5); */

// ---------------------------------

/* let text = "Первая строка\nВторая строка";  // \n — перенос строки
console.log(text);

let tabs = "Колонка1\tКолонка2";  // \t — табуляция
console.log(tabs);

let quote = "Он сказал: \"Привет!\"";  // \" — экранирование кавычки
console.log(quote); */


/* let age = prompt("Сколько вам лет?", "25");
console.log(typeof age);  // "string"!

// Если нужно число — преобразуем:
let ageNumber = Number(age);      // способ 1
let ageNumber2 = +age;            // способ 2 (короткий)
let ageNumber3 = parseInt(age);   // способ 3 (только целое)

console.log(ageNumber + 10);  // теперь работает как число
*/

//--------------

/* const user = "laiker";
const fract = "polis";
const HP = 100;

let hp = 100;
let level = 5;

let isAlive = hp > 0;


console.log(`
    Имя: ${user}
    Фракция: ${fract}
    HP: ${hp}/${HP}
    Уровень персонажа: ${level}
    `);
console.log(typeof user);
console.log(typeof fract);
console.log(typeof HP);
console.log(typeof hp);
console.log(typeof level);
console.log(typeof isAlive);

console.log("0 == false:", 0 == false);   // true  (JS приводит типы: 0 → false)
console.log("0 === false:", 0 === false); // false (разные типы: number !== boolean) */

//----------------

/* let a = 10;
let b = "10";

console.log(a == b);
console.log(a === b);

let c = null;
console.log(typeof null); */

//---------------

/* let a = 0;
let b = "";
let c = false;
let d = null;
let e = undefined;


console.log("0 == '':", a == b);
console.log("0 === '':", a === b);
console.log("false == 0:", c == a);
console.log("false === 0:", c === a);
console.log("null == undefined:", d == e);
console.log("null === undefined:", d === e);
console.log("'' == false:", b == c);
console.log("'' === false:", b === c);
console.log("---------------------");

console.log("0 == '':", a === Number(b));
console.log("false == 0:", c === Boolean(a));
console.log("null == undefined:", Boolean(d) === Boolean(e));
console.log("'' == false:", Boolean(b) === c); */

/* console.log("Start init...");


const maxHP = 100;
let currentHP = maxHP - 20;

let playerConfig = { name: "Laiker", role: "Tank" };
playerConfig.role = "Healer"; // ?
playerConfig = { name: "NewName", role: "DPS" }; // ?

let inventory = ["sword", "potion"];
inventory.push("shield"); // ?
inventory = ["bow"]; // ?

console.log(`HP: ${currentHP}`);
console.log("Config:", playerConfig);
console.log("Inv:", inventory); */


// "use strict"; - Включает строгий режим: ловит многие ошибки на старте

/* // 1. ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
const GAME_TITLE = "Империя Кода"; // Не меняется
let playerName = "Странник";       // Можно менять
let playerLevel = 1;

// 2. РАБОТА С ТИПАМИ
console.log(`Название игры: ${GAME_TITLE} (${typeof GAME_TITLE})`);
console.log(`Имя игрока: ${playerName} (${typeof playerName})`);
console.log(`Уровень: ${playerLevel} (${typeof playerLevel})`);

// 3. ШАБЛОННЫЕ СТРОКИ
let statusMessage = `Добро пожаловать в "${GAME_TITLE}"!
Ваш ник: ${playerName}
Стартовый уровень: ${playerLevel}`;
console.log(statusMessage);

// 4. ДИАЛОГИ
alert("Миссия активирована. Нажмите OK для продолжения.");
let newLevel = prompt("Введите желаемый уровень (по умолчанию 5):", "5");
// Пока просто выводим. С числами работать будем на следующем уроке.
console.log(`Вы выбрали уровень: ${newLevel} (тип: ${typeof newLevel})`);

let isReady = confirm("Готов принять вызов?");
console.log(`Пользователь подтвердил готовность: ${isReady}`);
alert(`Статус: ${isReady ? "В бою" : "Наблюдатель"}`); // Демонстрация, разберём позже */

/* let heroName = "laiker";
let heroAge = 16;
let hasWeapon = "АК74";
let inventory = true;

console.log(`Имя героя: ${heroName}. тип данных: ${typeof heroName}`);
console.log(`Возраст героя: ${heroAge}. тип данных: ${typeof heroAge}`);
console.log(`Оружие героя: ${hasWeapon}. тип данных: ${typeof hasWeapon}`);
console.log(`Наличие инвентаря: ${inventory}. тип данных: ${typeof inventory}`); */

/* let city = "Москва";
let pop = "15 миллионов"
console.log(`Город ${city}, население ${pop} человек.`); */

/* let a = prompt();
let b = prompt();
alert(a+b);// конкатенация строк (сложение строк) */

/* let a_$30 = "Hello!";
console.log(typeof a_$30); */

// Задачи

/* const name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");
let color = prompt("Введите ваш любимый цвет");
console.log(`
    Добро пожаловать в игру Game

    Имя персонажа: ${name}
    Возраст персонажа: ${age}
    Любимый цвет: ${color}
    `);
alert(`
    Добро пожаловать в игру Game

    Имя персонажа: ${name}
    Возраст персонажа: ${age}
    Любимый цвет: ${color}
    `);
confirm("Сохранить профиль?"); */

/* const project = "Стагнация";
let vers = 0.1;
console.log(`Проект: ${project} | Тип: ${typeof project} Версия: ${vers} | Тип: ${typeof vers}`); */

/* let hero = "Странник";
let level = 1;
alert(`Персонаж: ${hero}, Уровень: ${level}. Миссия активирована.`) */

/* let a = confirm("Подтвердить данные?");
console.log(`Подтверждено: ${a}`); */

/* let a;
let b = null;
let c = 42;
const d = "test";
console.log(`Переменная a → значение: ${a}, тип: ${typeof a}`);
console.log(`Переменная b → значение: ${b}, тип: ${typeof b}`);
console.log(`Переменная c → значение: ${c}, тип: ${typeof c}`);
console.log(`Переменная d → значение: ${d}, тип: ${typeof d}`); */

/* let score = 100; 
let userName = prompt("Имя:");
let health = 100;
health = 50;
let status = "Active";
console.log(typeof null); // ожидает "object" старая ошибка
alert(`Игрок: ${userName}, Статус: ${status}`); */

/* let mission = prompt("Введите название миссии:");
alert("Миссия: " + (mission || "Отменено пользователем")) */

/* const nameServer = "Server";
let ping = "текущий пинг";
let playersOline = "количество игроков онлайн";
const securety = "статус защиты";
let resrvCopy;
const maxSlot = 100;
console.log(typeof nameServer);
console.log(typeof ping);
console.log(typeof playersOline);
console.log(typeof securety);
console.log(typeof resrvCopy);
console.log(typeof maxSlot);

// 1. Название сервера (никогда не меняется) → const, string
const serverName = "MainServer";
// 2. Текущий пинг (будет обновляться) → let, number
let ping = 42;
// 3. Количество игроков (динамическое) → let, number
let playersOnline = 0;
// 4. Статус защиты (вкл/выкл) → let, boolean
let isProtected = true;
// 5. Резервная копия (пока пуста) → let, null
let backup = null;
// 6. Максимальный слот (фиксированное число) → const, number
const maxSlots = 100;
// Вывод таблицы типов и обоснований
console.table([
    { переменная: "serverName", значение: serverName, тип: typeof serverName, почему: "const: не меняется" },
    { переменная: "ping", значение: ping, тип: typeof ping, почему: "let: обновляется" },
    { переменная: "playersOnline", значение: playersOnline, тип: typeof playersOnline, почему: "let: динамическое" },
    { переменная: "isProtected", значение: isProtected, тип: typeof isProtected, почему: "let: вкл/выкл" },
    { переменная: "backup", значение: backup, тип: typeof backup, почему: "let: будет присвоено" },
    { переменная: "maxSlots", значение: maxSlots, тип: typeof maxSlots, почему: "const: фиксировано" }
]); */
/* "use strict";
let one1 = prompt("Введите строку");
let one2 = prompt("Введите строку");
let one3 = prompt("Введите строку");
let one4 = prompt("Введите число");
const confirmed = confirm("Подтвердите введение");
let oneNumber
if (confirmed) {
    oneNumber = +one4;

}
console.log(`Введенные данные: ${one1}, ${one2}, ${one3}, ${one4}. Типы данных: ${typeof one1}, ${typeof one2}, ${typeof one3}, ${typeof one4}. преобразование строки one4 в число ${oneNumber} и тип ${typeof oneNumber}`);
alert("Данные сохранены. Типы проверены."); */



// ==================== Задачи по Лекции номер 2 ====================

/* let age = 20;
let hasLicense = false;
let isStudent = true;

console.log((age >= 18 && hasLicense) || isStudent); */


/* // 🔹 Проверяем разные способы преобразования
const test1 = Number("10px");
const test2 = parseInt("10px");
const test3 = parseFloat("px10");

// 🔹 Функция для проверки и вывода
function checkValue(value, description) {
    if (isNaN(value)) {
        console.log(`${description}: Это не число`);
    } else {
        console.log(`${description}: Валидное число → ${value}`);
    }
}

// 🔹 Проверяем каждое значение
checkValue(test1, 'Number("10px")');      // Это не число
checkValue(test2, 'parseInt("10px")');    // Валидное число → 10
checkValue(test3, 'parseFloat("px10")');  // Это не число

// 🔹 Бонус: наглядная таблица в консоль
console.table([
    { выражение: 'Number("10px")', результат: test1, тип: typeof test1, валидно: !isNaN(test1) },
    { выражение: 'parseInt("10px")', результат: test2, тип: typeof test2, валидно: !isNaN(test2) },
    { выражение: 'parseFloat("px10")', результат: test3, тип: typeof test3, валидно: !isNaN(test3) }
]); */

/* console.log(5 == "5");   // true (преобразовало строку в число)
console.log(5 === "5");  // false (разные типы)
console.log(0 == false); // true (приведение типов)
console.log(0 === false);// false (строгое сравнение)
console.log(null == undefined); // true (историческое правило JS)
console.log(null === undefined);// false

let name = "Алексей";
let age = 0;
let hasItem = false;

console.log(Boolean(name));   // true (строка не пустая)
console.log(Boolean(age));    // false (0 - falsy)
console.log(Boolean("0"));    // true (строка "0" - truthy!)

console.log(name && !hasItem);        // true (true && true)
console.log(age || hasItem);          // false (false || false)
console.log(!name || age > 18);       // false (false || false)

//  Boolean
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean([])); // true */

/* let a = prompt("Введите первое число:");
let b = prompt("Введите второе число:");

let sum1 = +a + +b;
let sum2 = a + b;
if (sum1 === sum2) {
    alert("Результаты совпали: " + sum2);
} else {
    alert("Типы не совпали!\n" + 
          "Как строки: " + sum2 + " (" + typeof sum2 + ")\n" + 
          "Как числа: " + sum1 + " (" + typeof sum1 + ")");
} */

/* let a = prompt("Введите целое число:");
let b = prompt("Введите дробное число:");
let c = prompt("Введите число с текстом в конце:");

let a1 = +a;
let b1 = parseFloat(b);
let c1 = parseInt(c, 10)

if (isNaN(a1) || isNaN(b1) || isNaN(c1)) {
    console.error("Ошибка ввода: проверьте, что ввели корректные числа.");
} else {
    console.log(`Вывод введенных пользователем трех хначений: a = ${a1} тип ${typeof a1}, b = ${b1} тип ${typeof b1}, c = ${c1} тип ${typeof c1}.
    Вычисляем среднее арифметическое (округлённое до 2 знаков) = ${(a1 + b1 + c1).toFixed(2)}.
    Вычисляем сумму квадратов ${(a1 ** 2 + b1 ** 2 + c1 ** 2).toFixed(2)}.
    Вычисляем остаток от деления первого на второе ${a1 % c1}.
    Сравнивает первое и третье число через === и ==. Выводит оба результата. ${a1 == c1} и ${a1 === c1}.
    Проверяет логическое выражение: (первое > 0 && второе !== 0) || третье > 100. ${a1 > 0 && b1 !== 0 || c1 > 100}
    Все выведено аккуратно в консольно строке.`);
} */

/* let login = prompt(" dfd", "admin");
let password = prompt("fdf ", "swordfish");

function accessThrone(login, password) {
    if (!login) {
        console.log("Логин не введён");
        return;
    }
    if (login !== "admin") {
        console.log("Нет прав");
        return;
    }
    if (!password) {
        console.log("Пароль пуст");
        return;
    }
    if (password !== "swordfish") {
        console.log("Неверный пароль");
        return;
    }
    console.log("Добро пожаловать на трон.");
}
accessThrone(login, password); */

/* const day = 3;

switch (day) {
    case 1:
        console.log("Понедельник. Начало похода.");
        break;
    case 2:
        console.log("Вторник. Разведка.");
        break;
    case 3:
    case 4:
        console.log("Среда или Четверг. Битва за ресурсы."); // Fall-through (провал)
        break;
    default:
        console.log("День отдыха или неизвестная дата.");
} */

/* let age = +prompt("Введите ваш возраст: ");
if (age >= 21) {
    alert("Доступ разрешён")
} else {
    alert("Отказ");
}

let age = +prompt("Введите ваш возраст: ");
alert(age >= 21 ? ("Угадал") : ("Меньше")); */

/* const score = +prompt("Очки:");
let rank = "Мастер";
if (score > 90) {
    alert("Поздравляю, ваш титул: " + rank);
}else{
    alert("Вам нужно еще набрать опыта, ваш титул: Ученик")
}

let rank = score > 90 ? "Поздравляю, ваш титул: Мастер" : "Вам нужно еще набрать опыта, ваш титул: Ученик";
console.log(rank); */

/* let num = +prompt("Введите число от 1 до 4");
switch (num) {
    case 1:
        alert("Огонь")
        break;
    case 2:
        alert("Вода")
        break;
    case 3:
        alert("Земля")
        break;
    case 4:
        alert("Воздух")
        break;
    default:
        alert("Значение в не диапазона");
} */

/* let month = +prompt("Введите мясяц:");

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;
    default:
        console.log("Такого месяца нет");
        break;
} */

/* let num1 = +prompt("Введите первое число");
let operator = prompt("Введите оператор (+, -, *, /)");
let num2 = +prompt("Введите второе число");

if (isNaN(num1) || isNaN(num2)) {
    alert("Ошибка: введите числа, а не текст!");
} else {
    switch (operator) {
        case "+":
            alert(num1 + num2);
            break;
        case "-":
            alert(num1 - num2);
            break;
        case "*":
            alert(num1 * num2);
            break;
        case "/":
            if (num2 === 0) {
                alert("Ошибка: деление на ноль!")
            } else {
                alert(num1 / num2);
            }
            break;
        default:
            alert("Неверное значение");
            break;
    }
} */

/* // Перепиши этот код через guard clauses и ===:
if (user) {
    if (user.role == "admin") {
        if (isActive == true) {
            console.log("Access granted");
        }
    }
}

function checkAccess(user, isActive) {
    if (!user) {
        return;
    }
    if (user.role !== "admin") {
        return;
    }
    if (!isActive) {
        return;
    }

    console.log("Access granted");
} */

// Сложные (Архитектура, edge-cases, склонение)

/* let a = +prompt("сторона 1");
let b = +prompt(" сторона 2");
let c = +prompt(" сторона 3");

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Введите положительные числа!");
} else {
    if (a > b + c || b > a + c || c > a + b) {
        alert("Это не треугольник (одна сторона > суммы двух других)");
    }

    else if (a === b && b === c) {
        alert("Равносторонний треугольник");
    }

    else if (a === b || b === c || a === c) {
        alert("Равнобедренный треугольник");
    }
    else {
        alert("Разносторонний треугольник");
    }
} */

let student = +prompt("Введите число от 0 до 99");

if (isNaN(student) || student < 0 || student > 99) {
    alert("Введите числа в диапазоне. Вы ввели: " + student);
} else {
    if (student === 1) {
        alert("1 студент");
    }
    else if (student % 10) {
        alert(student + "студентов")
    }
}














