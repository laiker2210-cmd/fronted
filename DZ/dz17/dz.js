"use strict";


let date = new Date();

let months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

let nedels = [
    "Воскресенье", "Понедельник", "Вторник", "Среда",
    "Четверг", "Пятница", "Суббота"
];

let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();
let nedel = nedels[date.getDay()];

let result = `Сегодня: ${day} ${month} ${year}, ${nedel}`;
console.log(result);

document.writeln(result);