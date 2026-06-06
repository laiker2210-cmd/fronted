"use strict"; // - современный режим

// ============================ Занятие 01.03.2026 ============================
// ===== Вложенные циклы =====
// - порядок действий в примере ниже, выпполняется наружний цикл, переходит во внутренний, выполняется полный цикл внутри и выходит на ружу и так по кругу пока не выполниться условие

/* let i = 0; // цикл в цикле
while (i < 4) {
    document.writeln("+++<br>");

    let j = 0;
    while (j < 2) {
        document.writeln("--<br>");
        j++;
    }

    i++;
}
document.writeln("<br>"); */

// ------------------------------------------------------------------
// Вложенный цикл на примере for
/* for (let i = 0; i < 4; i++) {
    document.writeln("+++<br>");
    for (let j = 0; j < 2; j++)
        document.writeln("--<br>");
} */


// ------------------------------------------------------------------
// - таблица на js table/3tr - 3 строки и /2td - 2 колонки

/* let symbol = prompt("Введите символ: ", "*");
let tr = prompt("Введите колличество строк: ");
let td = prompt("Введите колличество столцбов: ");

document.writeln("<table border='1' width='150'>");
for (let i = 0; i < tr; i++) {
    document.writeln("<tr align='center'>");
    for (let j = 0; j < td; j++) {
        document.writeln("<td>" + symbol + "</td>");
    }
document.writeln("</tr>");
}
document.writeln("</table>"); */


// - таблица умножения через таблицу на js
// - дз, оазукрасить эту таблицу как шахматную доску


/* document.writeln("<table border='1' width='150' align='center'>");
for (let i = 1; i < 11; i++) {
    document.writeln("<tr align='center'>");
    for (let j = 1; j < 11; j++) {
        if((j+i)%2 == 0){
           document.writeln("<td bgcolor='red'>" + i * j + "</td>"); 
        }else{
            document.writeln("<td bgcolor='yellow'>" + i * j + "</td>"); 
        }
        
    }
document.writeln("</tr>");
}
document.writeln("</table>"); */


// ------------------------------------------------------------------
// ===== Массивы =====

/* let a = 2;
let b = 6;
let c = 8;
 */
/* let mas = [2, 6, 8]; 
document.writeln(mas[2]);// вывести нужное число можно по индексу - индексация массива идет от ноля, вывод  mas[2] - получим 1
console.log(mas);

let mas1 = [5]; // массив на 1 эллемент его длинна 1, его значение 5
console.log(mas1);

let mass = new Array(2,6,8);
console.log(mass);

let mass1 = new Array(5); // массив на 5 эллемент его длинна 5 но без значений
console.log(mass1);

// пустые массивы
let mass4 = new Array();
console.log(mass4);
let mass5 = new Array(); // массив на 5 эллемент его длинна 5 но пустых
console.log(mass5); */

/* let mas = [2, 6, 8]; 
document.writeln(mas + "<br>");
console.log(mas);
document.writeln(mas.length); */

/* let mas = [1, 2, 3, 4, 5, 6]; 
document.writeln(mas + "<br>");
console.log(mas);
document.writeln(mas.length+ "<br>");
mas.length = 3;
document.writeln(mas + "<br>");
console.log(mas);
document.writeln(mas.length+ "<br>");
mas.length = 6;
document.writeln(mas + "<br>");
console.log(mas);
document.writeln(mas.length+ "<br>"); */

//--------------------------------------------------------------------------
// - последний эллемент массива равен  - длинна массива -1
// length = последний эллемент массива + 1
/* let arr = [1, 2, 3, 4, 5, 6];
document.writeln(arr + "<br>");
document.writeln(arr[arr.length - 1] + "<br>");
console.log(arr); */
//--------------------------------------------------------------------------


/* let arr = [5, 9, -3, -1, 4, -8, -7, 2, -6, 8]; // можно добавлять сколько угодно
for(let i = 0; i < arr.length; i++){ // колличество операций равно длинне строк массива
    document.writeln(arr[i] ** 2 + "<br>");
} */


// ===== задача =====
// заменить все отрицательные значения элементов массива их модулями
/* let arr = [5, 9, -3, -1, 4, -8, -7, 2, -6, 8];
for(let i = 0; i < arr.length; i++){ 
    if(arr[i] < 0){
        arr[i] *= -1; // arr[i] = arr[i] * -1
    }
    document.writeln(arr[i] ** 2 + "<br>");
}
console.table(arr); */

/* // сложить все отрицательные эллементы
let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
let sum = 0;
for(let i = 0; i < arr.length; i++){ 
    if(arr[i] < 0){ // обратились ко всем отрицательным эллементам
        sum += arr[i];
         document.writeln(arr[i] + "<br>");
    }
   
}
document.writeln(sum + "<br>");
console.table(arr); */

//-------------------------------------------------------------------
// можно хранить любые данные в массивве
/* let arr = new Array();
arr[0] = 15;
arr[1] = 6;
arr[2] = 9;
arr[3] = 4;
arr[6] = 59;
arr[7] = "String";

console.log(arr); */


//-------------------------------------------------------------------
// задача введите числа и выведите в обрвтном порядке
/* let arr = new Array(5); // []

for( let i = 0; i < arr.length; i++){
    arr[i] = prompt("Введите" + (i + 1) + " элемент массива: ");
}
document.writeln(arr + "<br>");
console.log(arr);
console.table(arr);

for(let i = arr.length - 1; i >= 0; i--){
    document.writeln(arr[i] + " ");
} */


//-------------------------------------------------------------------
//

/* let arr = ['a', 'b', 'c',]
arr[0] = arr[0] + "!";
arr[1] = arr[1] + "!!";
arr[2] = arr[2] + "!!!";
console.log(arr); */


//-------------------------------------------------------------------
// ===== задача =====
// предложите пользователю ввести колличество эдементов в массиве. если введенное число больше 5 заполни его значение 0, а если введенное число меньше 5, то наполните к=его любым числовым значением с клавиатуры.

let mas = prompt("Введите колличество элементов в массиве");
let arr = new Array(mas);

for(let i = 0; i < arr.length; i++){
    if(mas > 5){
        arr[i] = 0;
    } else if(mas < 5){
        let num = prompt('Введите число:')
        arr[i] = num;
        alert("Массив заполнен вашими числами:");
    }else{
        alert("Вы ввели 5 — массив остался пустым");}
}
// брррр, можно же, ведь можно

