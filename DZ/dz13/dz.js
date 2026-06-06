"use strict";


let mas = ["копеек", "копейка", "копейки", "- число меньше 1 или больше 99"];

let first = 1;
let last = 99;
let ch = +prompt("Введите колличество копеек:", 5);
console.log(ch, count(first, last, ch)(mas));

function count(start, end, num) {
    let n = num % 10;
    let m = num % 100;
    let chislo = !(start <= num && num <= end) ? 3
        : n == 1 && m != 11 ? 1
            : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
                : 0

    return arr => arr[chislo];
}