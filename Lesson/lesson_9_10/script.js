// Строгий режим, не забывать!!!
"use strict";

//========== Лекция 9 ==========
//Функции / отдельная или обособленная программа к кторой можно обращаться постоянно и применять к чему либо

//пример, конец 8 лекции и начало 9
//сортировка числовых значений
/* let n = [1, 15, 55, 2, 10];
n.sort((a, b) => a - b);
console.log(n); */


// Function Declaration
/* 
function имя (аргументы){
          тело функции
}          
*/

/* function hello(name){
    document.writeln("Hello, " + name + "<br>");
}
hello();
hello("Irina"); //параметр */

// уровень заголовкоы через функцию

/* function caption(){
    for(let i = 1; i <= 6; i++){
        document.writeln("<h" + i + ">Заголовок " +i + "</h" + i + ">");
    }
}
caption(); */

//
/* function test(a, b ,c){ // плохой вариант
    alert(a + b + c);
}

let a = 10, b = 20, c = 30;
test(10, 20, 30);
test(1, 2, 3); */

/* function test(a, b ,c){ // хороший вариант
    alert(a + b + c);
}

let n1 = 10, n2 = 20, n3 = 30, m1 = 1, m2 = 2, m3 = 3;
test(n1, n2, n3);
test(m1, m2, m3);
//console.log(a); // нельзя вывести в глабольную область / неопределенное значение */

/* function test(a, b ,c){ // хороший вариант
    // alert(a + b + c);
    let res = a + b + c; 
    return res; // что то нужное
}

let n1 = 10, n2 = 20, n3 = 30, m1 = 1, m2 = 2, m3 = 3;
let sum = test(n1, n2, n3); // 60
console.log(sum); */


// задача
/* function test2(n, m) {
    if(m == 0){
        return "Делить на ноль нельзя";
    }
    console.log("Hello");
    return n / m;// все что заним, работать не будет
    console.log("Hello");
    
}
let a1 = test2(10, 2);
let a2 = test2(10, 0);

alert(a1);
alert(a2); */

// задачи на понимание материала
//

/* function result(n, m) {
    if(n > m){
        return n - m;
    }else{
        return n + m;
    }
}

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let res = result(a, b);
alert(res); */


//задача
//создать функцию для вычесление суммы элементов массива 

/* function sum(arr) {
    let res = 0;
    for (let i=0; i<arr.length; i++) {
        res += arr[i];
    }
    return res;
}

document.writeln(sum([3, 8, 9, 4, 1, 2, 5]) + "<br>");
document.writeln(sum([1, 2, 5]) + "<br>"); */

// функция для нахождения большего числа, числа могут быть равны

/* function max(n, m) {
    if (n > m) {
        document.writeln("большее число," + n + "<br>");
        return n;
    } else if (m > n) {
        document.writeln("большее число," + m + "<br>");
        return m;
    } else {
        document.writeln("числа равны");
        return n;
    }


}
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

max(a, b); */


// ---------- Лекия 10 от 22.03.2026 ----------
// задача. (памятка - повторить еще пару раз)

/* function showArrayContent(arrayToShow) {
    if (arrayToShow.length == 1) {
        return arrayToShow;
    }else{
        let last = arrayToShow.pop();
        console.log(last);
        let str = arrayToShow.join(", ");
        let res = str + " и " + last;
        return res;
    }
}

let a = new Array('Текст');
let b = new Array('день', 'ночь');
let c = new Array('зима', 'весна', 'лето', 'осень');
alert(showArrayContent(a));
alert(showArrayContent(b));
alert(showArrayContent(c)); */

//Функциональное выражение
//Function expression
/* let fun = function(аргументы) {
    // тело функции;
}
func(параметры); */

//практический показ
/* function sum1(a, b) { //старый метод
    return a + b;
}

let sum2 = function(a, b){ // менее старый метод
    return a + b;
}
alert(sum1(20, 30));
alert(sum2(2, 3)); */
// отличие вариантов function и let fdf = function
// в первом варианте можно вывод поставить до функции и он будет работать(глобально)
// во втором варианте, вызов функции строго в конце после функции

//-----------------------------------
// дан массив целых цисел. определить среднее арифметическое через функцию

/* let arerage = function(arr){
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
return (sum / arr.length).toFixed(2);
}
document.writeln(arerage([3,8,9,4,1,2,5]) + "<br>");
document.writeln(arerage([8,2,4]) + "<br>"); */

// написать функцию нахождения максимального числа из массива
/* let max = function(arr){
    let maXX = arr [0];
    console.log(max);
    console.log(maXX);
    

    for(let i = 1; i < arr.length; i++){
        if (arr[i] > maXX) {
            maXX = arr[i];
        }
    }return maXX;
}
document.writeln(max([3,8,9,4,1,2,5]) + "<br>");
document.writeln(max([8,2,4]) + "<br>"); */ //!!!!!!!

//Immediately Invoked Function Expression (IIFE) - самовызывающая (автономная функция)
/* (function () {
    alert("Привет мир");
})(4); */

/* (function (n) {
    alert(n * n);
})(4); */

//Arrow Function - стрелочная функция
/* function test (a, b, c){
    let res = a + b + c;
    return res;
}

alert(test(10, 20, 30));

//сравнение старой и стролочной функции (выше и ниже)
let test2 =(a, b, c) => a + b + c;
alert(test(1, 2, 3)); */

/* let hello = () => alert("Hello"); // при отстуствии аргумента круглые скобки () обязательны
hello(); */

/* let double = n => n ** 2; // при одном аргументе можно без круглых скобок (n) = n

let arr = [5, 3, 8, 2];
let res = [];
for (let i =0; i < arr.length; i++){
    res[i] = double(arr[i]);
}
console.log(res); */

/* let symbol = (count, a, b) => {
    for(let i=0;i< count; i++){
        document.writeln(i % 2 ? b : a);
    }
     document.writeln("<br>");
}

symbol(9, "+", "-");
symbol(7, "X", "0"); */


//-------------------------------
// задача (вариаеты)

/* let change = lst => { // при одной строке return не обязателен
    let a = lst[lst.length - 1]; // a = 3
    lst[lst.length - 1] = lst[0]; // lst[2] = 1
    lst[0] = a; // lst[0] = 3
    return lst;
}

document.writeln(change([1, 2, 3]) + "<br>");
document.writeln(change([9, 22, 33, 54, 105]) + "<br>");
document.writeln(change(["с", "л", "о", "н"]) + "<br>"); */

// или

/* let change = lst => { 
    let last = lst.pop();
    let first = lst.shift();
    lst.push(first);
    lst.unshift(last);
    return lst;
}

document.writeln(change([1, 2, 3]) + "<br>");
document.writeln(change([9, 22, 33, 54, 105]) + "<br>");
document.writeln(change(["с", "л", "о", "н"]) + "<br>"); */

//разбор первого варианта задачи выше
/* let a = 5;
let b = 7;
console.log("a =",  a, "b =",  b);

let temp = a;
a = b;
b = temp;

console.log("a =",  a, "b =",  b); */


//------------------------------------------------
// пример для задач

/* let isGreator = (x, y) => x > y ? true : false;
document.writeln(isGreator(10, 5) + "<br>");
document.writeln(isGreator(5, 10) + "<br>"); */

// зада проверки сложности пароля. сложный или нет

/* let checkPassword = password => {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;

    for (let ch of password) {
        console.log(ch);
        if ("A" <= ch && ch <= "Z") {
            hasUpper = true;
        }
        if ("a" <= ch && ch <= "z") {
            hasLower = true;
        }
        if (0 <= ch && ch <= 9) { // сработает как "0" / "9" так и 0 / 9
            hasNum = true;
        }
    }

    if (password.length >= 8 && hasUpper && hasLower && hasNum) {
        return true;
    }
    return false
}

let psw = prompt("Введите пароль:");
if (checkPassword(psw)) {
    document.writeln("Это надежный пароль:")
} else {
    document.writeln("Это ненадежный пароль:")
} */


// найти факториал числа 120 (!5 = 1 * 2 * 3 * 4 * 5 => 120)
// задача
/* let factorial = n => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
document.writeln(factorial(7)); */

//----------------------------------------------

function getNames(){
    let firstName = "Irina", LastName = "Vetrova";
    return [firstName, LastName];
}
let names = getNames();
console.log(names);
// let surname = names[1];
// console.log(surname);
// применим деструктуризацию
let [name1, surname] = getNames(); //деструктуризацию
console.log(name1);
console.log(surname);

// + к дз разными синтаксическими способами (каждым их 3 видов функций кроме анонимных)