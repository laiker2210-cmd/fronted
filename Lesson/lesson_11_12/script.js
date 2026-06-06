// Строгий режим, не забывать!!!
"use strict";

//========== Лекция 11 от 28.03.2026 ==========

// функция колбек (callback) - функция обратного вызова

/* function isOdd(number) { // функция обратного вызова
    return number % 2; // 0 или 1
}

function isEven(number) { // функция обратного вызова
    return number % 2 == 0; // 0 или 1
}


function filter(numbers, fn) { // основная функия / функция высокого порядка
    let results = [];
    for (let number of numbers) {
        if (fn(number)) {
            results.push(number);
        }
    }
    return results;
}

let num = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(num, isOdd)); // [1,7,3,5]
console.log(filter(num, isEven)); // [2,4,6] */


// 
// нужно разобраться, не понял, тут и выше

/* function filter(numbers, calback) {
    let results = [];
    for (let number of numbers) {
        if (calback(number)) {
            results.push(number);
        }
    }
    return results;
}

let num = [1, 2, 4, 7, 3, 5, 6];
let arr = [8, 9, 8, 7, 1, 2, 3]; */

/* let oddNumbers = filter(num, function (number){
    return number % 2;
}); */
/* let oddNumbers = filter(num, number => number % 2);
let oddNumbers2 = filter(num, number => number % 2 == 0);

let oddNumbers3 = filter(arr, number => number % 2);
let oddNumbers4 = filter(num, number => number % 2 == 0);


console.log(oddNumbers); // [1,7,3,5]
console.log(oddNumbers2); // [2,4,6]
console.log(oddNumbers3);
console.log(oddNumbers4); */
// на основе колбек функций существуют методы массива. памятка

//
// forEach() - цикл / один из разновидностец цикла

//let numbers = [1, 2, 3, 4, 5, 6];
//(method) Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
/* numbers.forEach(function (n) { // 
    document.writeln("квадрат числа " + n + " равен: " + n * n + "<br>");
}); */

//numbers.forEach(n => document.writeln("квадрат числа " + n + " равен: " + n * n + "<br>")); // пример решения выше в одну строку


//

/* ["Hello", "Word"].forEach(alert); // вариает 1
// пример через цикл строки выше
let textArray = ["Hello", "Word"]; // вариает 2
for(let i=0; i < textArray.length; i++){ 
    alert(textArray[i]);
} */

//
//

/* ["Hello", "Word"].forEach((item, index, array) => { // item - итерация, index - индекс, array - сам массив
    alert(`У ${item} индекс ${index} в ${array}`)
}); */


// метод массива .map
/* let numbers = [1, 2, 3, 4, 5, 6, 33, 512];

let scuares = numbers.map(n => n ** 3);
console.log(scuares);

let lengths = ["Hello", "World", "!"].map(item => item.length);
console.log(lengths); */

//.filter - метод массива / совмещенный метод с условиями
//принимает от 1 до 3 параметров

/* let number = [1,-12,8,-4,25,42];

let passed = number.filter(n => n > 0);
console.log(passed);
//примкр через цикл
let mas = [];
for(let i = 0; i < number.length; i++){ // аналог .filter
    if(number[i] > 0){
        mas.push(number[i]);
    }
}
console.log(mas);
*/

/* let colord = ["red","orange","green","yellow"]; //если добавить пустые "" = 0
let newColors = colord.filter(colord => colord.length > 5); //а тут убрать >5 то выведет 4
console.log(newColors);
*/


//менее применяемые методы / булевые
// .every - проверяет все ли элементы соответствуют определенному условию

/* let number = [1,-12,8,-4,25,42];

let passed = number.every(n => n > 0); // false - не все элементы больше 0
console.log(passed); */


// .some проверяет на соответствие хотя быодин элемент

/* let number = [1,-12,8,-4,25,42];

let passed = number.some(n => n > 0); // true - хотя бы 1 элемент больше 0
console.log(passed); */

// метод используется дл вычисления единого значения на основе массива
// .reduce и .reduceRight - reduce слева на права / reduceRight справа на лева

/* let arr = [1,2,3,4,5];
// РАЗБОР - при первом запуске sum = 0, current = первым значением массива и по кругу - 0+1=1 1+2=3 3+3=6 6+4=10 10+5=15 массив заверщен
let result = arr.reduce((sum, current) => sum + current, 0); 
document.writeln(result);// = 15 */

// ---------------------------------------------------------
// объект Math - математический

/* document.writeln(Math.floor(7.9) + "<br>") // округление до целого числа в нижнюю сторону
document.writeln(Math.ceil(7.9) + "<br>") // округление до целого числа в большую сторону
document.writeln(Math.round(7.9) + "<br>") // округление до целого числа по законам математики 7,5=8 7,4 =7 */


// генерация случайного значения - .random от 0 до 1( 1 не включается)

/* (function(){
    document.writeln((Math.random()) + "<br>");
})(); */

/* (function(min, max){
    document.writeln(Math.floor(Math.random() * (max - min) + min) + "<br>");
})(2,9); // случайное число из диапазона от 2 до 8

document.writeln(Math.floor(Math.random() * 9) + "<br>"); //от 0 до 9(не включается)
document.writeln(Math.floor(Math.random() * 7 + 2) + "<br>"); //от 2 до 9(не включается)

// задача от 6 до 14
document.writeln(Math.floor(Math.random() * 8 + 6) + "<br>"); //от 6 до 14(не включается)
document.writeln(parseInt(Math.random() * 8 + 6) + "<br>"); */


// генерация слов из массива
/* let randomWorld = ["Цикл", "Массив", "Условие", "Функция"];

let pickRandom = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let word = pickRandom(randomWorld);
document.writeln(word); */


// задание
//создать квалрат в окне браузера и закрашивать случайными цветами
/* document.writeln("<div id='block'></div>");
let id = document.getElementById("block");
id.style.height = "100px";
id.style.width = "100px";
id.style.background = `rgb(${createColor()}, ${createColor()}, ${createColor()})`; // еще проще вариает

//createColor();
function createColor(){
    return Math.floor(Math.random() * 256);
   // let r = Math.floor(Math.random() * 256);
    //let g = Math.floor(Math.random() * 256);
    //let b = Math.floor(Math.random() * 256);
    //id.style.background = "rgb("+ r + ", " + g + ", " + b + ")";



    //id.style.background = `rgb(${r}, ${g}, ${b})`; // так проще, нет путаницы
} */


// домпшнее задание 
// поместить в массив 12 месяцев, через цикл вывезти каждый отдельно через div, у каждого div рандомный фон, при обновлении меняется
/* let month = ["Январь", "Февраль", "Март", "Апрель", "Маф", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let createColor = () => Math.floor(Math.random() * 256);

for (let i = 0; i < month.length; i++) {
    document.writeln(`<div style="background:rgb(${createColor()},${createColor()},${createColor()}); padding:15px; margin:1px; font-size:24px; font-weight:bold; text-align: center; color:black">${month[i]}</div>`);
} */


// варианты вызовов
// ========== Лекция 12 от 29.03.2026 ==========

/* function fn (a, b, ...args){// ...остаточный аргумент / должен быть только один
    console.log("a = ", a, " , b = ", b,"args = ", args);
    
}
fn(1);
//fn(1, 2);
fn(1, 2, 3, "A", "B", "C"); */

// ------------
//

/* function sum(...args) {
    let total = 0;
    for(let a of args){
        total += a;
    }
    return total;
}
console.log(sum(10, "hi", null, undefined, 20));
//console.log(sum(5, 7, 9, 6, 8, 2, 3)); */


// variant 1
/* function sum(...args) {
    return args
        .filter(function(e){
            return typeof e === `number`
        })
            .reduce(function(prev, curr){
                return prev + curr
            }
} */

// variant 2
/* function sum(...args) {
    return args.filter(e => typeof e === `number`).reduce((prev, curr) => prev + curr);
}

console.log(sum(10, "hi", null, undefined, 20)); */

//конкатенация строк через метод функции

/* let combine = (...arg) => arg.reduce((prev, curr) => prev + " " + curr);
console.log(combine("Hello", "World", "!"));
console.log(test); */

//приветствие пользователя если он не оставил имя
//старый способ

/* function hello(name){
    name = name || "незнакомец"; 
    document.writeln("Привет, " + name + "!<br>");
}

hello("Сергей");
hello(); */

//современный способ

/* function hello(name="незнакомец"){
    document.writeln("Привет, " + name + "!<br>");
}

hello("Сергей");
hello();  */

//тот же самый пример но по другому
//function fn(a?: number, b?: number): void

/* function fn (a=0, b=0){// резервный параметр или параметр по умолчанию
console.log(a+b);

}
fn(1,2);
fn(1);
fn(); */

//функция принимает параметры квадрата

/* function rectangle(w=200, h=100, fon=`gold`) {
    document.writeln("<div id='shape'></div>");
    let id = document.getElementById("shape");

    id.style.width = w + "px";
    id.style.height = h + "px";
    id.style.background = fon;
}

//rectangle(200, 100, "green");
//rectangle(200, 100);
rectangle(50, 50, "red"); */


//
//

/* let j = 2; // глобальная переменная

function ch(){
    let j = 3; / локальная переменная
}

ch();
console.log(j); // = 2 */


/* let j = 2;

function ch(){
 j = 3;
}

ch();
console.log(j); // = 3  */


// -------------------
// вложение функции в функцию

/* function square(num){
    return num * num;
} */

/* function func(num1, num2) { // глобальная
    function square(num) { //обратиться к функции неполучиться / локальная
        return num * num;
    }
    //return num1 * num1 + num2 * num2;
    return square(num1) + square(num2);
}


console.log(func(2, 3)); */


//область видимочти вложенных функций

//let num = 5; 

/* function test(num1, num2) { // 5, 2
    //let num = 5; 

    function func() {
        console.log(num1 + num2); // 2, 2
        num1 = 2;
    }
    //num1 = 2; // = 2, тогда выше останется 5
    func();
}
//console.log(num1 + num2); //невидит аргументы
test(5, 2); */

//------

/* function test(num) {  // 5
    function func(localNum) { // 7
        console.log(localNum);  // 7
    }
    func(num + 2); // 5+2=7
}

test(5); */

//------

/* function func(num1){
    return function(num2){ //возврщаем функцию
        return function(num3){
            return function(num4){
                return function(){
                    return [num1, num2, num3, num4,];
                }
            }
        }
    }
}

console.log(func(2)(3)(4)(5)()); //возврщаем функцию
// сделать так - func()()()()()() => [2,3,4,5] */

//

/* function hello(){
    console.log("Привет");
    
}


console.log(hello); //если внутри поставить hello() получим undefined */

// замыкание функции

/* function test(){
    let num = 5;

    return function(){ //положили в переменную func
        console.log(num);
    }
}

let func = test();
//console.log(func);
func(); */


/* function outer(n){
    return function(x){
        return n + x;
    }
}

let add5 = outer(5);
console.log(add5(10));

let add6 = outer(6);
console.log(add6(10)); */


//---------- ---------- ----------
//задача

/* function test(city) {
    let num = 0;

    return function () {
        num++;
        console.log(city, num);
    }
}

let func1 = test("Москва");
let func2 = test("Сочи");
func1();
func1();
func1();
func2();
func2();
func1(); */

// пример, фильрация данных их массива и проверка...

function isBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    }
}

function isArray(arr) {F
    return function (x) {
        return arr.includes(x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(isBetween(3, 6)));
console.log(arr.filter(isArray([1, 2, 10])));

// написать функцию которая будет выбирать только значения между 3 и 6 включительно
// написать функцию которая будет выбирать только элементы совпадающие с одним из элементов массива [1, 2, 10];

//дз, задача с копейками, сделать ее через функцию(вложенную или замыкающую) и оптимизировать функцию от 1-9 вторую от 10-99. в функции должен передаваться диапазон и колличество копеек 