"use strict";

// дз 11 от 22.03.2026
// ========== ЗАДАНИЕ 1 ==========
// найти большее из двух чисел

// вариант 1

function max(n, m) {
    if (n > m) {
        document.writeln("большее число," + n + "<br>");
        return n;
    } else if (m > n) {
        document.writeln("большее число," + m + "<br>");
        return m;
    } else {
        document.writeln("числа равны" + "<br>");
        return n;
    }


}

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
max(a, b);


// вариант 2

let max1 = function (n, m) {
    if (n > m) {
        document.writeln("большее число: " + n + "<br>");
        return n;
    } else if (m > n) {
        document.writeln("большее число: " + m + "<br>");
        return m;
    } else {
        document.writeln("числа равны: " + n + "<br>");
        return n;
    }
}

let a2 = +prompt("Введите первое число:");
let b2 = +prompt("Введите второе число:");
max1(a2, b2);

// вариант 3

let max2 = (n, m) => { // хотел через тернарные операторы, немного запутался(
    if (n > m) {
        document.writeln("большее число: " + n + "<br>");
        return n;
    } else if (m > n) {
        document.writeln("большее число: " + m + "<br>");
        return m;
    } else {
        document.writeln("числа равны: " + n + "<br>");
        return n;
    }
}

let a3 = +prompt("Введите первое число:");
let b3 = +prompt("Введите второе число:");
max2(a3, b3);


// ========== ЗАДАНИЕ 2 ==========


function max4(arr) {
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    document.writeln("массив: [" + arr + "]<br>");
    document.writeln("максимальное число: " + maxValue + "<br>");
    return maxValue;
}


let size = +prompt("сколько элементов будет в массиве?");
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = +prompt("введите элемент номер" + (i + 1) + ":");
}

max4(arr);

// вариант 2

let max5 = function (arr) {
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    document.writeln("массив: [" + arr + "]<br>");
    document.writeln("максимальное число: " + maxValue + "<br>");
    return maxValue;
}

let size2 = +prompt("сколько элементов в массиве?");
let arr2 = [];
for (let i = 0; i < size2; i++) {
    arr2[i] = +prompt("введите элемент номер" + (i + 1) + ":");
}
max5(arr2);

// вариант 3

let max6 = (arr) => {
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    document.writeln("массив: [" + arr + "]<br>");
    document.writeln("максимальное число: " + maxValue + "<br>");
    return maxValue;
}

let size3 = +prompt("сколько элементов в массиве?");
let arr3 = [];
for (let i = 0; i < size3; i++) {
    arr3[i] = +prompt("введите элемент №" + (i + 1) + ":");
}
max6(arr3);