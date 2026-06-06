"use strict";

//==================== Лекция 25-26 от 23.05.2026 и 24.05.2026 ====================
// ползунок в html перехват события, отображение значения
// атрибут

/* document.getElementById("slider").addEventListener("input", function () {
    // change не отрабатывает?
    // this у => () работает иначе
    document.getElementById('slider-value').textContent = this.value;
}); */


// ------------------------------------
// <table> пишем текст кликая на ячейку таблицы когда поле теряет фокус
// .addEventListener("blur")

/* let tds = document.querySelectorAll("td");
for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener("click", function func() {
        let input = document.createElement("input");
        input.value = this.innerHTML;
        this.innerHTML = "";
        this.append(input);

        let td = this;
        input.addEventListener("blur", function () {
            td.innerHTML = this.value;
            td.addEventListener("click", func);
        })

        this.removeEventListener("click", func)
    })
} */


//----------------------------------
//ввод и вывод
//<label for="userInput">Введите имя</label>
// FormDate()  для упрощения работы с полями формы

/* let userInput = document.getElementById("userInput");
let name = document.getElementById("displayName");
userInput.addEventListener("input", function () {
    name.textContent = this.value || "Гость"; // можем указать - Гость - и тут и в html
}) */

// <form id="myForm">
// FormDate()  для упрощения работы с полями формы

/* let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
event.preventDefault();

    //let username = form.username.value;
    //let password = form.password.value;
    //console.log(username);
    //console.log(password);

    let formDate = new FormData(form);
    console.log(formDate.get("username"));
    console.log(formDate.get("password"));
    console.log(formDate);
}); */

// .checkValidity()

/* let form = document.getElementById("myForm2");


form.addEventListener("submit", function (event) {
    //if (!form.checkValidity()) {
    //event.preventDefault();
    //alert("Заполните все поля корректно")
    //}


    let username = form.username.value;
    let password = form.password.value;
    event.preventDefault();
    if (username.length < 3) {

        alert("Имя пользователя должно быть более 3 символов");
    }

    if (password.length < 6) {
        alert("Пароль должен быть более 6 символов");
    }

    console.log(typeof username);
    console.log(typeof password);
}); */


//------------------------------------------------------
//шаблоны регулярных выражений
/*  методы 
1 - search - возвращает позициюб на которой регулярное выражение совпадает с вызывающей строкой, ил "-1" если совпадений нет

2 - match - получает все совпадения с регулярными выражениями

3 - replace - поиск и замена

4 - split - делит строку на массив, разбивая ее по указанной подстроке

5 - twst - выполняет поиск совпадения регулярного выражения со строкойю возвращает true или false
*/

/* 
Синтаксис записи:
let regexp = new RegExp("Шаблон", "флаги");
let regexp = /Шаблон/флаги;
*/

let str = "Я ищу совпадения в 2026 ^ году 789525684668 Hello_Word ёЁ";
document.writeln(str + "<br>");
//let regexp = /[2026]/g; //ищетт первый символ когда в [] ? / при флаге g выдал все через скобку
//      document.writeln(str + "<br>");
// document.writeln(str.search(regexp) + "<br>");
// document.writeln(str.match(regexp) + "<br>");
// document.writeln(regexp.test(str) + "<br>");

/* Флаги
g (global) - ищет все совпадения с шаблоном поиска(глобальный поиск)
i (ignoreCase) - регистрозависимый поиск
u - включает поддержку юникод
m - (multiline) - работа с многострочным текстом
s - (dotAll) - позволяет сопоставить точку с любым сивволом (включает \n)
*/


/* 
\
\d - (digit) - любая цифра
\s - (space) - пробельный символ, включая табуляцию и перевод строки
\w - (word) - любая цифра, буква и символ подчеркивания
\b - граница слова
*/


/* Диапазон
[0-9] - любая цифра от 0 по 9, можно например так [5-9]
[а-я] - любая буква от а до я, можно например так [и-х]
*/

// let regexp = /[я]/gi;
// let regexp = /[0-9]/gi;// диапазон
//let regexp = /[а-я]/gi;// диапазон
//let regexp = /[А-яЁё]/gi;// диапазон
//let regexp = /[А-Яа-я]/g;// диапазон
//let regexp = /[A-z]/g;// диапазон
//let regexp = /[A-Za-z]/g; //в англ алфавите только такой поиск без сокращения

//document.writeln(str.match(regexp) + "<br>");

//console.log("Ё", "Ё".codePointAt(0)); //1025
//console.log("А", "А".codePointAt(0)); //1040
//console.log("Я", "Я".codePointAt(0)); //1071
//console.log("а", "а".codePointAt(0)); //1072
//console.log("я", "я".codePointAt(0)); //1103
//console.log("ё", "ё".codePointAt(0)); //1105

// function lowerCase(str){
//     return str.replace(/[А-Я]/g, u => u.toLowerCase());
// }
// console.log(lowerCase("Несколько слов"));

// let regexp = /[^0-9]/g; // ^abc если стоит в начале делает отрицание всего что стоит в диапазоне

/* 
{3} - колличество символов идущих подряд
{1,} - от 1 до бесконечного колличества повторений
{2, 5} - от 2 до 5 повторений - не ставим пробел
*/

//let regexp = /[0-9]{3}/g;
//let regexp = /[0-9]{3,}/g; 
// let regexp = /[0-9]{2,5}/g; 
// document.writeln(str.match(regexp) + "<br>");


// найти 16ричные коды цветов
/* let html = `
<table>
   <tr>
      <td bgcolor="#CCC">
           <img src="222.png">
      </td>
      <td bgcolor="#003399">
           <img src="af3.png">
      </td>
      <td bgcolor="#00ccdd">
           <img src="fff.png">
      </td>
   </tr>
</table>
`;
let exp = /#([0-9a-f]{3}){1,2}/ig;
console.log(html.match(exp)); */

//let regexp = /\w/g;
//document.writeln(str.match(regexp) + "<br>");


//----------------------------------------------------------------------
// дз. создать любую строку, написать шаблон регулярного выражения. на выходе получить
// сделать дома

//let = "Это пример строки с нескольким пробелами";
//let reg = "шаблон";
//let result = ...;
//console.log(result);// это_строка_выводилась_через_символ_подчеркиваия

//---------------------------------------------------------------------------


//-----------------------
// продолжение занятий лекция 26
// поиск номера телефона
/* let string = "Мой номер телефона: +7 (999) 123-45-67. Номер телефона моего друга: +7 (987) 684-32-10.";
let ex = /\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
let phoneNumbers = string.match(ex);

console.log(phoneNumbers); */
//---------------
// поиск и или [-:]
//let regex = /\d{2}[-:]\d{2}/g;
//document.writeln("Завтрак будет в 09:00. Ужин в 21-30".match(regex));

//-------------------------------------------
/* 
\D - Все кроме цифр
\S - Все кроме пребелов, переноса и табуляции
\W - Все кроме букв латинского языка, цифр и символов подчеркивания
*/

/* let regexp = /\w/g;
document.writeln(str.match(regexp) + "<br>"); */

// \b
/* document.writeln("Hello, Java !".match(/\bJava\b/) + "<br>");
document.writeln("Hello, Java!".match(/\bJava!/) + "<br>");
document.writeln("Hello, JavaScript!".match(/\bJavaScript\b/) + "<br>"); */

// document.writeln("1 23 456 78".match(/\b\d{2}\b/g) + "<br>");
// document.writeln("12-,34,56".match(/\b\d{2}\b/g) + "<br>");
// document.writeln("1 23 456 78".match(/\d{2}/g) + "<br>");

//document.writeln("Завтрак в 09:00 в комнате 123:456.".match(/\d{2}:\d{2}/g) + "<br>"); // no
//document.writeln("Завтрак в 09:00 в комнате 123:456.".match(/\b\d{2}:\d{2}\b/g) + "<br>"); // yes


//
//let regexp = /[\p{Alpha}\p{Nd}]/gu; // юникод
//let regexp = /[\p{L}\p{N}]/gu; // юникод и цифры
//document.writeln(str.match(regexp) + "<br>");


/* 
[^] - отрицание
^ - начало строки (перед последовательностью ничего недолжно быть)
$ - конец строки (после последовательности ничего недолжно быть)
*/

// let html = "909";
// let exp = /^\d{3}$/;
// document.writeln(html.match(exp) + "<br>")

//function capitalize (st){
//    return st.replace(/^[а-я]/, u => u.toUpperCase());
//    //return st.replace("н", "Н");
//}
//console.log(capitalize("несколько слов"));

//-------------

/* Колличество повторений
+ => от 1 повторения до бесконечности {1,}
? => от 0 до 1 {0,1}
* => от 0 до бесконечности повторений {0,}
*/

//let st = "+7(903)-123-45-67";
//document.writeln(st.match(/\d+/g) + "<br>")
//document.writeln("100 10 1".match(/\d0*/g) + "<br>")
//document.writeln("10, +23, -8, 5".match(/[+-]?\d+/g) + "<br>")
//document.writeln("0 1 12.345 7890".match(/\d+\.\d+/g) + "<br>")

//document.writeln("..Привет!... Как дела?.....".match(/\.{3,}/g) + "<br>");


//поиск ссылки
//function extractLinks(text) {
//    //let regex = /https?:\/\/[^\s]+/g
//    let regex = /https?:\/\/[\w.]+/g
//    return text.match(regex) || [];
//}
//console.log(extractLinks("<a href='https://htmlbook.ru'> и <a href='http://webref/ru'>"));


//проверка емейла

//function validateEmail(email){
//let regexx = /^[a-z0-9%_+.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i; // требует //соблюдение порядка расположения символов ASCII(- дефис либо в самом начале, //либо в самом конце)
//    let regexx = /^[^\s]+@[^\s]+\.[^\s]{2,}$/i; // менее точный шаблон
//    return regexx.test(email);
//}
//console.log(validateEmail("user@example.com"));


//------------

//let st = `JavaScript
//javascripr
//JAVASCRIPT`;
//console.log(st.match(/^\w+/gm)); //m работает либо в начале с ^ либо в конце с $

/* let mas = st.match(/^\w+/gm);
console.log(mas);
mas.map((el) => console.log(el)); */

//------------------

// let re = /CS.3/;
// document.writeln("Стандарт CSS3".match(re) + "<br>");
// document.writeln("Сталь CSS3".match(re) + "<br>");
// document.writeln("CS 3".match(re) + "<br>");

// let st = "Hello\nworld";
// console.log(st);
// let exp = /Hello.world/;
// console.log(exp.test(st));

//-----------------------

// let rexexpx = /html|css|java(script)?/gi;// |-или // (либо есть, либо нет)- // ?-повторения
// let sttr = "Сначала появился язык Java, зачем HTML, потом JavaScript";
// document.writeln(sttr.match(rexexpx));

/* let html = `
<b>my text</b>
<img src="222.jpg">
<span>else</span>
<img src="dfsd222.png">
<img src="img.png">
<img src="uio.gif">
`;
let ex = /\w+\.(jpg|jpeg|png|bmp||gif)/ig;
document.writeln(html.match(ex)); */

//----------------
// проверка номера телефона в системе регистрации

/* function validatePhoneNumber(phoneNumber) {
    let pnoneRegex = /^(\+7|8)?\d{10}$/;
    return pnoneRegex.test(phoneNumber)
}
let phone = "+79123456789";
//let phone = "89123456789";
//let phone = "9123456789";
if (validatePhoneNumber(phone)) {
    console.log("найден");
} else {
    console.log("не найден");
} */

//-------------
// сделать получить на выходе языки

//let regg = /java(script)?|php|c(\+{2})?/gi;
//let regg = /\w+(\+{0,})?/gi;
let regg = /[A-z]+(\+{0,})?/gi;
let sttr = "Java, JavaScript, PHP, C, C++";
document.writeln(sttr.match(regg));













