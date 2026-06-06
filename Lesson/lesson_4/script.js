"use strict"; // - современный режим

// ============================ Занятие 28.02.2026 ============================
// =====задача=====


/* let sum = 0;
let count = -1;
let n;

let max = 0;
do{
    n = +prompt("Введите число"); // 4 9 3 0
    sum += n;    
    count++;
    if(max < n){ // -- 0 < 4 // -- 4 < 9 // -- 9 < 3 нет //
        max = n; // 4 // 9
    }
}while(n != 0);
document.writeln("Среднее арифмитичесое:" + sum / count);
console.log("sum:", sum);
console.log("count:", count);
document.writeln("MAX" + max); */


// =====задача=====


/* let n = +prompt("Введите число:"); // 4 9 3 11 0
let max = n; // 4 
let min = n; // 4
let sum = n;
let count = 0;

while(n != 0){
    n = +prompt("Введите число:"); // 9 3 11 0
    sum += n;
    count++;
    if(max < n && n != 0){ // 
        max = n; // 
    }
    if(n < min && n != 0){
        min = n;
    }
}
document.writeln("MAX: " + max + "<br>");
document.writeln("MIN: " + min + "<br>");
console.log("sum:", sum);
console.log("count:", count);
document.writeln("Среднее арифмитичесое:" + (sum / count).toFixed(2) + "<br>"); */


// =====задача=====
// выход при ду вайле, напротив задачи выше когда был только вайл

/* let sum = 0;

do {
    let n = +prompt("Введите число:");

    if (n < 0) {
        break;
    }

    sum += n;
} while (true);

console.log("sum:", sum); */



/* let res = 1;

do {
    let n = +prompt("Введите число:");

    if (n < 0) {
        break;
    }
    if(n == 0){
        continue;
    }

    res *= n;
} while (true);

console.log("Произведение:", res); */



// задача со счетчиком чисел при использовании: ----- continue и break -----

/* let i = 0;

do {
    if (i == 6) {
        break; // заканчивает цикл
    }
    if (i == 3) {
        i++; // увеличивает на 1 потому что пропуск цикла
        continue; // continue - прерывает текущую итерацию цикла и пропускает
    }
    document.writeln(i + "<br>");
    i++;
} while (i < 10); */


// ===== задача =====


/* let res = 1;

do {
    let num = prompt("Введите число:");
    if(num == 0){
        break;
    }else{
        res *= num;
    }
} while (true);
console.log("Произведение:", res); */


/* let res = 1;
let num;
do {
    num = prompt("Введите число:");
    if (num != 0) {
        continue;
    }
} while (num != 0);
console.log("Произведение:", res); */


// ==================== Цикл со счетчиком --- for --- ====================
// for(Инициализация переменной; проверка условия; изменение переменной) 


/* for( let i = 1; i < 6; i++){ //справа на лево счет
    document.writeln(i + "<br>");
}
// document.writeln("<br>");

let i = 1; // сдева на право счет
while(i < 6){
    document.writeln(i + "<br>");
    i++;
} */


/* for (let i = 1; i < 12; i++) {
    if (i == 3) {
        continue;
    }
    if(i == 6){
        break;
    }
    document.writeln(i + "<br>");
}  */


/* let n = prompt("n = ");
let sum = 0;
let count = 0;

for(let i = 0; i < n; i++){
    let num = +prompt("-> ");
    document.writeln(i + "<br>");
    sum += num;
    if(num != 0){
        count++;
    }
}
console.log(sum);
document.writeln("Среднее арифмитичесое:" + (sum / count).toFixed(2) + "<br>"); */

/* i = 1;  // имитация while
for(; ; ){       // i < 7
    if(i == 7){
        break;
    }
    document.writeln(i + "<br>");
    i++
} */


/* for (let i = 1; i < 6; i++) {
    document.writeln(i + "<br>");
}
console.log(i); // будет работать только с переменной var или если вынести локальную переменную let в глобальную; */


// ===== задача =====
// - вычислить сумму четных чисел и произведение нечетных чисел в заданном диапазоне.

/* let start = 5;
let end = 10;
let sum = 0;
let product = 1;


for(let i = start; i <= end; i++){
    if(i % 2 == 0){
        sum += i;
    } else{
        product = product * i;
    }
}
console.log("Сумма чётных чисел:", sum);
console.log("Произведение нечётных чисел:", product); */


// ===== задача =====
// разбить введенное число на отдельные цифры и вывести в обратном порядке

/* let ch = prompt("Введите число: ");
document.writeln("Исходное число: " + ch + "<br>");

for (let i = 1; ; i *= 10) {
    let res = parseInt(ch / i); // 321 / 1 = 321; 321 / 10 = 32; 32 / 10 = 3;
    if (res == 0) {
        break;
    }
    document.writeln(res % 10);
} */


// ===== задача =====   
// найти сумму целых положительных чисел больших 5, меньших 30 и кратных 3

/* let sum = 0;

for (let i = 5; i <= 30; i++) {
    
    if (i % 3 === 0) {
        console.log(i);
        sum = sum + i;
        document.writeln("Шаг:", sum + "<br>");
    }
}
document.writeln("Сумма:", sum + "<br>");
console.log("Сумма:", sum); */