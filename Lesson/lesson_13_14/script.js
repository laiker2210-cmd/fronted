// Строгий режим, не забывать!!!
"use strict";

// ==================== Лекция 13 от 04.04.2026 ====================
// разбор дз

/* let mas = ["копеек", "копейка", "копейки", "- число в не диапазона"];

let first = 1;
let last = 99;
let ch = +prompt("Введите колличество копеек:", 5);
console.log(ch, count(first, last, ch)(mas));

function count(start, end, num) {
    let n = num % 10;
    let m = num % 100;
//let chislo;
  //         if (start <= num && num <= end) {
   //           chislo = n == 1 && m != 11 ? 1
   //               : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
    //                  : 0
     //     } else {
     //         chislo = 3;
      //    } 
    let chislo = !(start <= num && num <= end) ? 3
        : n == 1 && m != 11 ? 1
            : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
                : 0

    return arr arr[chislo];
} */

// строки и их возможности

let str = "I\'m a JawaScript \"programmer\"";
//console.log(str.length);

//document.writeln(str + "<br>"); // "I'm a JawaScript "programmer"
//document.writeln(str[2] + "<br>"); // y

//str = str[2] + "y"
//document.writeln(str + "<br>"); // my
//str[2] = "y"; // нельзя изменить(но строку можно перезаписать) строку по индексу, read only - только для чтения
//document.writeln(str[2] + "<br>");
//document.writeln(str.length + "<br>");

//document.writeln(str[6] + "<br>");
//document.writeln(str.at(6) + "<br>");// говый метод, поддержка отрицательного индекса
//document.writeln(str.at(-2) + "<br>"); // = r / считает с конца

//конкатенация
let str1 = "Я учу JawaScript. Мне нравиться JawaScript";
//let a = "Hello";
//let b = "World";
str = str.concat(". ", str1); // (". ", str1, ". ", a, ". ", b); / метод
document.writeln(str + "<br>");

let message = "*";
document.writeln(message.repeat(30) + "<br>"); // метод, можно применить для отделения блока
//document.writeln(str.indexOf("JawaScript", 7) + "<br>"); // возвращает индекс, на котором находится строка ил -1 если ничего нет
//document.writeln(str.lastIndexOf("JawaScript", 7) + "<br>"); // тоже самое но сконца | последнее совпадение | чувствительны к регистру

// пример применеия
// проверка корректности вода эл почты
/* let email;
 do {
    email = prompt("Введите ваш email:", "test");
    if (email.indexOf("@") == -1) {
        alert("повторите операцию");

    } else {
        break;
    }
} while (true);
alert("Спасибо за сотрудничество"); */

/* do {
    email = prompt("Введите ваш email:", "test");
    if (email.indexOf("@") == -1) {
        alert("повторите операцию");
        continue;
    } 
    break;
} while (true);
alert("Спасибо за сотрудничество"); */

//проверка строки на подстроку
// методы -  .includes | true || false
//document.writeln(str.includes("JawaScript", 63) + "<br>");
//.startsWith - проверяет с начала или от диапазона
//document.writeln(str.startsWith("JawaScript", 6) + "<br>");
//.endsWith - проверяет с конца или от диапазона
//document.writeln(str.endsWith("JawaScript", 47) + "<br>");


/* for(let ch of str){
    console.log(ch);

} */
//document.writeln(str.toUpperCase() + "<br>");
//document.writeln(str.toLowerCase() + "<br>");
//задачка
/* let n = prompt("введите имя:", "игорь")
alert(first(n));
function first(st) {
    let newStr = st.at(0).toUpperCase();

    for (let i = 1; i < st.length; i++) {
        newStr += st.at(i).toLowerCase();
    }

    return newStr;
} */

// задача, посчитать колличкство каждой буквы

/* let s = "абббабввбабвбвббабвббабв";
counLetters(s);

function counLetters(st) { //"абббабввбабвбвббабвббабв"
    let letters = ["а", "б", "в"]; // проверяет по порядку индекса
    for (let i = 0; i < letters.length; i++) { // ["а", "б", "в"]
        let count = 0; // 0
        for (let j = 0; j < st.length; j++) { // "абббабввбабвбвббабвббабв";
            if (st[j] == letters[i]) { // a == a // б == a? нет, проверяет дальше
                count++; // был 0 стал +1
            }
        }
        document.writeln("Символ '" + letters[i] + "' встретился " + count + " раз<br>");
    }
} */

/* let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте";
counLetters(s);

function counLetters(st) {
    let letters = ["а", "б", "в"];
    for (let i = 0; i < letters.length; i++) {
        let count = 0;
        for (let j = 0; j < st.length; j++) {
            if (st[j] == letters[i]) {
                count++;
            }
        }
        document.writeln("Символ '" + letters[i] + "' встретился " + count + " раз<br>");
    }
} */


// ==================== Лекция 14 от 05.04.2026 ====================
// продолжение вчерашней лекции

//console.log(str.split(" ", 5)); // пробел(разделили строки по индексу), второе значение через , Number( сколько вывести индексов)
//console.log(str.split(". ")); 
//console.log("05-04-2026".split("-")); // убрали -

/* let arr  = str.split("JawaScript"); //убрали из массива строк JawaScript
console.log(arr);
let st = arr.join("C++"); // добавили С++
document.writeln(st + "<br>");

// сделать проще
// метод .replace // заменил первое вхождение

//let text = st.replace("C++","JawaScript");
//document.writeln(text + "<br>")
// или
// метод .replaceAll - замена всех вхождений
let text = st.replaceAll("C++","JawaScript");
document.writeln(text + "<br>") */

// взять часть строк
// метод .slice
/* document.writeln(str.slice(0, 3) + "<br>"); // от 0 до 2 по индексу
document.writeln(str.slice(6) + "<br>"); // вывели с 6 индекса
document.writeln(str.slice(-23) + "<br>"); // вывели с конца -23
document.writeln(str.slice(-23, -10) + "<br>"); // вывели с конца от -23 до -10
document.writeln(message.repeat(30) + "<br>");
// метод .substring | не работает с отрицательными индексами
document.writeln(str.substring(0, 3) + "<br>");
document.writeln(str.substring(6) + "<br>");
document.writeln(str.substring(-23) + "<br>"); */

//------------------------------------------------------------------------
// задача
//background-color => backgroundСolor - пример

/* let style = prompt("Введите свойство CSS", "background-color");
alert(def(style));

function def(st) {
    let arr = st.split("-");
    console.log(arr);
    for (let i = 1; i < arr.length; i++){
        arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
} */

// .trim  - метод для удаления пробелов слева и справа
/* let hello = "  Hello  ";
console.log(">"+ hello + "<");
let beforeLength = hello.length;
console.log(beforeLength);

hello = hello.trim();
console.log(">"+ hello + "<");
let afterLength = hello.length;
console.log(afterLength);

// обратное действие
// до строки .padStart
// первым параметром колличество, вторым параметром символ
let add = hello.padStart(15, "-"); // добавил слева 15 пробелов
console.log(">"+ add + "<");
// после строки .padEnd
add = hello.padEnd(15, "-");
console.log(">"+ add + "<"); */


// .codePointAt
// метод запроса кодировки
/* document.writeln("hello" > "Hello"); //104 > 72
document.writeln("hello".codePointAt(0));
document.writeln("Hello".codePointAt(0));
document.writeln("А".codePointAt(0)); // 1040
document.writeln("Я".codePointAt(0)); // 1071
document.writeln("а".codePointAt(0)); // 1072
document.writeln("я".codePointAt(0)); // 1103
document.writeln("Ё".codePointAt(0)); // 1071
document.writeln("ё".codePointAt(0)); // 1103 */
// Ё..А-Яа-Я..ё

// .fromCodePoint
// метод получения символа по коду

//document.writeln(String.fromCodePoint(104));
//document.writeln(String.fromCodePoint(1025));

// задача
// вывести символы по коду где a 122 а b 97

/* let a = 122;
let b = 97;

if (a > b) {
    for (let i = b; i <= a; i++) {
        document.writeln(String.fromCharCode(i));
    }
} else {
    for (let i = a; i <= b; i++) {
        document.writeln(String.fromCharCode(i));
    }
} */

// задача
// генерация пароля

/* let shortest = 12;
let longest = 18;
let minASCII = 33;
let maxASCII = 126;

function randomPassword() {

    let randomLength = rand(shortest, longest)
    let res = "";
    for (let i = 0; i < randomLength; i++) {
        let randomChar = String.fromCodePoint(rand(minASCII, maxASCII));
        res = res + randomChar;
    }

    return res;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.writeln("Ваш случайный пароль: " + randomPassword());
randomPassword(); */


// ========== Рекурсивная функция ==========
// пример
/* function elevator(n) {
    if (n == 0) {
        document.writeln("Вы в подвале<br>");
        return; // базовый случай / условия выхода
    }
    console.log(n);

    elevator(n - 1);
    document.writeln(n + " ");
}

let n1 = prompt("На каком вы этаже: ", 5);
elevator(n1); */

// пример
// вычислить сумму чисел от 1 до n с помощью рекурсии

/* function sum(n) { // приходит 5 / 4 / 3 / 2 / 1 / return
    if (n <= 1) {
        return n; // 1 = выход
    }
    console.log(n);
    
    return n + sum(n - 1); // 5 + 4 + 3 + 2 + 1
}

document.writeln(sum(5)); // 1+2+3+4+5=15 */

// пример
// возведение чисел в степень через рекурсию

/* let chislo = +prompt("Число:", 2);
let stepen = +prompt("Степень:", 4);
document.writeln(chislo, " в степени ", stepen, " = ", degree(chislo, stepen));

function degree(ch, st) { // ch 4 / 3 / 2 / 1 / 0
    if (st) {
        return ch * degree(ch, st - 1); // 2 / 4 / 8 / 16 или 2 * 2 * 2 * 2 * 1
    }
    return 1;
} */

//дз с помощью рекупсии найти факториал числа / пример - 1*2*3*4*5

/* function factorial(n) { 
    if (n <= 1) {
        return 1; 
    }
    console.log(n);
    
    return n * factorial(n - 1); 
}

document.writeln(factorial(5));  */

// ================ лекция 15 продолжение тему рекурсии ================
// проработать задачу много раз
// в комментариях отмечены условия задачи при document.writeln(toStr(254, 10)); 
/* function toStr(n, base) { // 25.4 = 25 /2.5=2
    let convert = "0123456789ABCDEF"; //служебная строка
    if (n < base) { // n = 254 < 10 = else / 25<10=else / 2<10=if
        return convert[n];
    } else {
        return toStr(parseInt(n / base), base) + convert[n % base];// 254 % 10=convert[4] = 4 / = 5 / = 2
    }
}
document.writeln(toStr(254, 10));  */

// задача в 16 ричной системе
/* function toStr(n, base) { // 254/16=15.8=15
    let convert = "0123456789ABCDEF"; //служебная строка
    if (n < base) {//254<16=else / 15<16=if
        return convert[n]; // = F
    } else {
        return toStr(parseInt(n / base), base) + convert[n % base];//convert[254 %16=14=E]
        // return FE;
    }
}
document.writeln(toStr(254, 16));  */