/* let firstName = "Admin"; //var, let, const - Ctrl + / -- строчный
console.log(firstName); // блочный комментарий - Shift+Alt+A -- блочный
let age = 25;
console.log(age);

let = a_$30 = "Hello!"; //разрешено первым символом быть буквой, прочерком или символом, но не цифрой
console.log(a_$30);

let = lastName = "Hello!";
console.log(lastName);

let = LastName = "Hello!";
console.log(LastName); */

/* let a = "Hello";
console.log(a, typeof a);
console.log(a, typeof (a)); */

/* let b = 5; // инициализация
b = 10;
b = "Hello"
console.log(b); */

/* let b;
b = 10;
b = "Hello"
console.log(b); */

/* let str1 = "Двойные \
кавычки";
let str2 = 'Двойные \n кавычки'; // перенос на другую строчку
console.log(str1 + " " + str2); //конкатенация (это сложение строк) */

/* let str = "Данны для входа:\nВаш логин: \"Admin\""; // - Экранирование кавычек или тогоже блекслеша при пути папок
console.log(str); */

/* let str1 = "Новый\t текст";
console.log(str1); */

/* let a = 5;
let str = `Обратные ${a} ${a + 2}
кавычки`;// поддержка многострочного текста и сохранение его редактирвания. вожможность встроить другие переменные
console.log(str); */

/* let firstName = "Alexey";
alert("Hello, " + firstName);
alert(`Hello  ${firstName}`);
console.log(firstName); */

/* let days = 365;
let planet = "Земля";
let population = "7 млрд.";
let sun = "Солнца";
alert(`Мы живем на планете ${planet}, она делает один оборот вокруг ${sun} за ${days} дней. Население нашей планеты составляет примерно ${population} человек.`); */

/* const WEEK = 7;
WEEK = 9;
console.log(WEEK); //const - не изменяемая величина */

/* let res = confirm("знаешь ли ты HTML&");
console.log(res); // - выводит true или false
if (res) {
    alert ("Пора учить JS");
} else {
    alert("Нужно учить HTML");
} */


/*     //============ запрос у пользователя
let res = prompt("Ваше имя", "Виктор");
alert(`Привет ${res}!`);
console.log(res); */

// ======= Орефмитические операторы =======
//====== Ударные =====
/* let a = 12;
let b = 8;
console.log("+", a + b);
console.log("-", a - b);
console.log("*", a * b);
console.log("/", a / b);
console.log("**", a ** b);
console.log("%", a % b); // - показывает остаток от деления */


// ===== Задача =====
/* let num1 = +prompt("Введите первое число", 5);
let num2 = parseInt(prompt("Введите первое число", 7));
let num3 = Number(prompt("Введите первое число", 3));

let sum = num1 + num1 + num2 + num3;
console.log("Сумма: ", sum);
console.log("Произведение: ", num1 * num1 * num1);
console.log("Среднее: ", sum / 3); */

// - вариант 2
/* let num1 = promt("Введите первое число");
console.log(num1, typeof num1); */

/* console.log(parseInt(21.84)); // 21
console.log(parseFloat(21.84)); // 21.84
console.log(Number(21.84)); // 21.84
console.log(Number(21.84565665).toFixed(1)); // 21.8

console.log(+ "21.84");
console.log(+1 * "21.84"); */

/* let a = 23;
let b = +"6";
console.log(a + b); // - проблема оператора + складывает строки, так как одно значение цифры, а втрое строка. неявное преобразование типов
console.log("Результат: " + (a + b)); - правильно */



/* let zd = prompt("Введите число", 4)

console.log("Результат: ", zd ** 2)
console.log("Результат: ", zd ** 3)
console.log("Результат: ", zd ** 4) */



/* let num = 4321; // нужно показать 1234
let one, two, three, four;
console.log(num);

one = num % 10;
console.log(one);
num = parseInt(num / 10);
two = num % 10;
console.log(two);
num = parseInt(num / 10);
three = num % 10;
console.log(three);
num = parseInt(num / 10);
four = num % 10;
console.log(four);
console.log(one *1000 + two * 100 + three * 10 + four); */

// ===== самоделка =====
/* let userName = prompt("Данные пользователя:\nВаш логин:")
console.log(userName); */

// ===== ударные - инкре(и)мент 15.02.2026 =====

/* let a = 0, b = 0;
let c = ++a; // a = a + 1;
console.log(a); // 1
console.log(c); // 1
let d = b++; //b = b + 1;
console.log(b);  // 1
console.log(d); // 0 */

/* let a = 0, b = 0;
let c = a++ + 2; //c = 0 + 2 a = 1
let d = ++b +2; // d = 1 + 2 b = 1
console.log(a);
console.log(b);
console.log(c);
console.log(d); */

/* let a = 1;
b = a++;
let c = b + 5 + a; // c = 1 + 5 + 2
console.log(c) */

/* let a = 1;
b = ++a;
let c = b + 5 + a; // c = 1 + 5 + 2
console.log(c) */

// ===== сокращение арифмитических функций =====
/* let a = 3;
a += 5; // a = a + 5
console.log(a);  // 8

a -= 3; // a = a - 3
console.log(a); // 5

a **= 2; // a = a ** 2
console.log(a); // 25 */

/* let sum = +prompt("Введите 1 число: ", 5) + +prompt("Введите 2 число: ", 4) + +prompt("Введите 3 число: ", 6);
console.log(sum); */

// ===== Операторы сравнения =====
/* console.log(5 == 5); // - равно - сравление значений
console.log(5 === "5"); // - сравление значений и типов данных

console.log(5 != "5"); // - != не равно
console.log(5 !== "5"); // -

console.log(5 > 3); // - больше
console.log(5 < 3); // меньше

console.log(5 >= 3); // -
console.log(5 <= 3); // -

console.log(+true);
console.log(+false);

let a = 5 + true;
console.log(a);

let b = 5 + false;
console.log(b); */

// ===== Тернарные операнды =====
/* 7 > 3 ? alert("7") : alert("3"); // выводит значение да или нет */

/* let age = prompt("Ведите возвраст");
age >= 18 ? alert("Совершеннолетний") : alert("Несовершеннолетний"); */

/* let ch = prompt("Угадайте число от 1 до 10");
let num = 7;
// ch == num ? alert("Угадали") : alert("Неугадали");
ch == num ? alert("Угадали") : ch < num ? alert("Загаданное число больше") : alert("Загаданное число менььше"); */

/* let temp = prompt("Введите температуру");

let res = temp > 30 ? "Очень жарко"
: temp > 20 ? "Тепло"
: temp > 10 ? "Прохладно"
: temp > 0 ? "Холодно"
: "Холодно";
alert(res); */


// - условный оператор
// if (условие) {
//     истина(TRUE)
// } else { FALSE };

/* let a = 12;
let b = 6;

if(b != 0){
    let res = a / b;
    alert("Результат: " + res);
} else{
    alert("Делить на \"0\" нельзя");
} */

/* let value = prompt("введите число");

if (value % 2 == 0) {
    alert("Четное число");
    alert("Молодец");
} else {
    alert("Нечетное число");
    alert("Иди учись");
} */

/* let a = 12;
let b = 6;
if (a > b) {
    alert(a + " > " + b);
}
if (a == b) {
    alert(a + " == " + b);
}
if (a < b) {
    alert(a + " < " + b);
} */

/* let a = 12;
let b = 6;
if (a > b) {
    alert(a + " > " + b);
} else if (a == b) {
    alert(a + " == " + b);
} else {
    alert(a + " < " + b);
} */


/*    let day = prompt("Введите день недели (цифрами):");

    if(day == 1){
        alert("День недели - Понедельник");
    }
    else  if(day == 2){
        alert("День недели - Вторник");
    }
    else  if(day == 3){
        alert("День недели - Среда");
    }
    else if(day == 4){
        alert("День недели - Четверг");
    }
    else if(day == 5){
        alert("День недели - Рятница");
    }
    else if(day == 6){
        alert("День недели - Суббота");
    }
    if(day == 7){
        alert("День недели - Воскресенье");
    } else{
        alert("Такого дня не существует")
    }
*/
// =======================================================
// false => "", 0, null, undefined, NaN
// =======================================================


/* let a = 5 < 3;

if (a) {
    console.log(TRUE);
} else {
    console.log(FALSE);
}
console.log(a); */

// - Блок схема - вариант для дз
/* let login = prompt("Введите логин:", "admin");

if (login) {
    if (login == "admin") {
        let pas = prompt("Введите пароль:", "password");
        if (pas) {
            if (pas == "password") {
                alert("Добро пожаловать");
            } else {
                alert("Неверный пароль");
            }
        }
    } else {
        alert("Я вас не знаю");
    }
} else {
    alert("Вход отменен");
} */

// - Светофор


// ============================== Занятие 3 ==============================
/*     // - Значение И &&
if(5==5 && 5> 2){  // - true && true => true
    console.log("TRUE"); // - false && true => false
} else{                  // - true && false => false
    console.log("FALSE"); // -false && false => false
}

// - Значение ИЛИ ||
if(5==5 || 5> 2){  // - true && true => true
    console.log("TRUE"); // - false && true => true
} else{                  // - true && false => true
    console.log("FALSE"); // -false && false => false
}       */

// ==================== Задача ====================
/* // - &&
let age = prompt("Введите возвраст:");
if (age > 17 || age < 69) {
    alert("Вы можете получать права");
} else{
    alert("Права не давать");
}
// - ||
let agee = prompt("Введите возвраст:");
if (agee < 18 || agee > 69) {
    alert("Права не давать");
} else{
    alert("Вы можете получать права");
} */

// ========== Задача ==========
/* let a = +prompt("Ведите сторону треугольника для проверки:");
let b = +prompt("Ведите сторону треугольника для проверки:");
let c = +prompt("Ведите сторону треугольника для проверки:");

if (a == b && b == c && c == a) {
    alert("равносторонний");
} else if (a == b || b == c || c == a) {
    alert("равнобедренный");
} else if(a != b || b != c || a != c){
    alert("разносторонний");
} */

// ========== Задача ==========
// - Введите колличество ворон от 0 до 9 с учетом склонение падежа вороны
/* let vo = +prompt("Введите колличество ворон от 0 до 9:");

if (vo >= 0 && vo <= 9) {
    if (vo == 1) {
        alert(`На ветке ${vo} ворона`);
    }  if (vo >= 1 && vo <= 4) {
        alert(`На ветке ${vo} вороны`);
    }  if( vo >= 5 && vo <= 9 || vo == 0){
        alert(`На ветке ${vo} ворон`);
    }
} else {
    alert("Недопустимое значение");
} */

// ====================  Материал ====================
// Строгое сравнение
/* let a = +prompt("Введите число");
switch (a){
    case 1:
        alert("Код 1");
    break;
    case 2:
        alert("Код 2");
    break;
    case 3:
        alert("Код 3");
    break;
    default:
        alert("Такого значения нет");
} */

// ------------------
/* let a = +prompt("Введите результат 2 + 2");
switch (a){
    case 4:
        alert("Верно");
    break;
    case 3:
    case 5:
        alert("Не верно");
    break;
    default:
        alert("Такого значения нет");
} */

// ------------------
//  - пример
/* let error = 404;

switch (error) {
    case 404:
        console.log("Страницы не существует");
        break;
    case 200:
        console.log("Запрос успкшно обработан");
        break;
    case 500:
        console.log("Ошибка сервера");
        break;
    default:
        console.log("Неизвестная ошибка");
} */

/* let season = +prompt("Введите номер месяца (1-12), чтобы узнать сезон года");
// let month
switch (season) {
    case 12:
    case 1:
    case 2:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осень");
        break;
    default:
        alert("такого месяца не существует");
} */

 // ----- Простой калькулятор -----

/* let operator = prompt("Действие +, -, *, /, %:");
let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");

switch (operator) {
    case "+":
        alert("Сумма сложения: " + (num1 + num2));
        break;
    case "-":
        alert("Сумма вычитания: " + (num1 - num2));
        break;
    case "*":
        alert("Сумма умножения: " + (num1 * num2));
        break;
    case "/":
        if (num2 == 0) {
            alert("делить на ноль нельзя")
        } else {
            alert("Сумма деления: " + (num1 / num2));
        }
        break;
    case "%":
        if (num2 == 0) {
            alert("Нет остатка 0")
        } else {
            alert("Остаток от деления: " + num1 % num2);
        }
        break;
    default:
        alert("Я такого операторп не знаю");
} */