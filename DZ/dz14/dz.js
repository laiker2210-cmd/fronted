"use strict";


let num = 12345622245632;
let last = num % 10;
let count = 0;
let temp = num;

while (temp > 0) {
    let d = temp % 10;
    if (d === last) {
        count++;
    }
    temp = Math.floor(temp / 10);
}

console.log(`Последняя цифра: ${last}`);
console.log(`Встречается раз: ${count}`);