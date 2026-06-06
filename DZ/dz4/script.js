"use strict";
// ========== Задача №1 ==========
// Вычислить произведение нечетных чисел от в диапазоне от 10 до 30

let num1 = 10;
let num2 = 30;
let sum = 1;


for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
        sum = sum * i;
    }
}
document.writeln("Произведение нечетных чисел: " + sum + "<br><br>");



// ========== Задача №2 ==========
// найти среднее арифметическое значение четных и нечетных чисел

alert("Введите любое колличество чисел кроме 0 для для вывода среднего арифметического значения четных или нечетных чисел")

let a = +prompt("Введите любое число:")

let sumPlus = 0;
let coutPlus = 0;
let sumMinus = 0;
let countMinus = 0;

while (a != 0) {
    if (a % 2 === 0) {
        sumPlus += a;
        coutPlus++;
    } else {
        sumMinus += a;
        countMinus++;
    }
    a = +prompt("Введите любое число:");
}
document.writeln("Среднее арифметическое четное: " + sumPlus / coutPlus  + "<br><br>");
document.writeln("Среднее арифметическое нечетное: " + sumMinus / countMinus + "<br>");
console.log("Среднее арифметическое четное: " + sumPlus / coutPlus);
console.log("Среднее арифметическое нечетное: " + sumMinus / countMinus);