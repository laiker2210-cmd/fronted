"use strict";

let arr = [];
console.log(arr);


for (let i = 0; i < 10; i++) {
    arr[i] = +prompt("Введите значение " + (i + 1) + ":");
}
console.log(arr);

document.writeln("Введенные значения: " + arr + "<br>");

let max = arr[0];
let maxIndex = 0;


for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

document.writeln("Масимальное значение: " + max + "<br>");

arr.splice(maxIndex, 1);
arr.unshift(max);

document.writeln("Результат: " + arr);
