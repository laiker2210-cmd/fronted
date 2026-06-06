// Строгий режим, не забывать!!!
"use strict";

/* let n = +prompt("Введите колличество элементов массива:");
let mas = new Array(n);

for (let i = 0; i < mas.length; i++) {
    mas[i] = prompt("Введите элементы массива");
}
console.log(mas); // mas[0] = 9

for (let i = 0; i < mas.length; i++) {
    if (mas[i] > mas[i - 1])
        document.writeln(mas[i] + ' ');
} */



// задача
// В массиве на 20 элементов (от 10 до 50) посчитать колличество четных элементов и найти сумму нечетных элементов.

/* const n = 20;
let mas = new Array(n);
let sumPlus = 0;
let sumMinus = 0;

for (let i = 0; i < n; i++) {
    mas[i] = +prompt("Введите элементы массива");
    if (mas[i] % 2 == 0) {
        sumPlus++;
    } else {
        sumMinus += mas[i];
    }
}
document.writeln("Колличество четных элементов:" + sumPlus + "<br>");
document.writeln("Сумма нечетных элементов:" + sumMinus + "<br>");
console.log(sumPlus);
console.log(sumMinus); */


// 
/* let arr =[2, 6, 7, Игорь, true, 1.5];
console.log(arr);

for(let i = 0; i < arr.length; i++){
    document.writeln(arr[i] * 5 + "<br>");
} */


// вложенные массивы
/* let mas = [[2, 1, 1], [6, 3, 7, 7, 9], [8, 5, 6]];
console.log(mas);
console.table(mas);
// document.writeln(mas[1][2]);
// document.writeln(mas[0][3]);
for(let i = 0; i < mas.length; i++){
    for(let j = 0; j < mas[i].length; j++){
        document.writeln(mas[i][j] + " ");
    }
    document.writeln("<br>");
} */


// задача
// Возвести каждый элементв квадрат

/* let mas = [[1, 2, 3, 4], [5, 6, 7, 8], [3, 10, 11, 12]];

for (let i = 0; i < mas.length; i++) {
    for (let j = 0; j < mas[i].length; j++) {
        document.writeln(mas[i][j] + "- - -");
    }
    document.writeln("<br>");
}


for (let i = 0; i < mas.length; i++) {
    for (let j = 0; j < mas[i].length; j++) {
        document.writeln(mas[i][j] ** 2 + "- - -");
    }
    document.writeln("<br>");
} */

// задача
// Написать программу, предлагающую пользователю подсчитывать сумму постоянно увеличивающихся чисел:

/* let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2×2 будет 8?", "Дельфины - это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];
let answers = [false, true, false, false, false, false, false];
let sum = 0;
let res = new Array(); // []

for (let i = 0; i < questions.length; i++) {
    let answer = confirm(questions[i]);
    if (answer == answers[i]) {
        res[i] = 10;
        sum += res[i];
    } else {
        res[i] = 0;
    }
}
console.log(res); 
console.log(sum); 

document.writeln("<table border= '1' width='500'>");
document.writeln("<tr>");
document.writeln("<th>Вопрос</th>");
document.writeln("<th>Баллы</th>");
document.writeln("</tr>");

for(let i=0; i<questions.length; i++){
    document.writeln("<tr>");
    document.writeln("<td>" + questions[i] + "</td>");
    document.writeln("<td>" + res[i] + "</td>");
    document.writeln("</tr>");
}

document.writeln("<tr>");
document.writeln("<th>Итог</th>");
document.writeln("<th>"+ sum +"</th>");
document.writeln("</tr>");

document.writeln("</table>"); */


