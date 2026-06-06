// Строгий режим, не забывать!!!
"use strict";

// переменная of
// Выводит по очереди каждый элемент массива

/* let arr = [1, 2, 3, 4, 3, 5];
let flag = false;

for(let element of arr){
    if(element == 3){
        //console.log("+++");
        flag = true;
        break
    }
}

console.log(flag);

if(flag){
    console.log("+++");
}else{
    console.log("---");
} */

// универсальный способ, можно манипулировать значениями
/* for(let i = 0; i < arr.length; i++){
    document.writeln(arr[i] + "<br>");
} */

/* let arr = [7, 55, 9, 33, 2];

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

// или

let arrr = [7, 55, 9, 33, 2];
let maxx = arrr[0];

for (let num of arrr) {
    if (num > maxx){

    }
}
console.log(maxx); */

/* let arr = [7, 55, 9, 33, 2];
let sum = 0;
for (let num of arr){
    sum += num;
}
console.log(sum); */



// ---------------интеграция JS с html-----------------



/* let text1 = document.getElementById("text_1");
console.log(text1);
console.log(text1.textContent);
text1.textContent = "Поменял содержимое параграфа с ид 1"; // меняет только текст
console.log(text1.textContent);

let text2 = document.getElementById("text_2");
console.log(text2);
console.log(text2.textContent);
text2.innerHTML = "Новое содержимое с <b>HTML разметкой </b>"; //обрабатывается html и css выводит на экран


// ===== практика =====


let res = +prompt("выберите изображение", "1 = собака, 2 = кот, 3 = птица, 4 = рыба");
document.writeln("<div id='image'> </div>");
let img = document.getElementById("image");

switch (res) {
    case 1:
        img.innerHTML = "<img src = 'img/dog.jpg'>";
        break;
    case 2:
        img.innerHTML = "<img src = 'img/cat.jpg'>";
        break;
    case 3:
        img.innerHTML = "<img src = 'img/bird.jpeg'>";
        break;
    case 4:
        img.innerHTML = "<img src = 'img/fish.jpeg'>";
        break;
    default:
        alert("Такого изображения нет");
} */


// ОБРАЩЕНИЕ К ПУСТОМУ ТЕГУ В HTML РАЗМЕТКЕ
/* let tag = document.getElementsByTagName("p")[2];
console.log(tag);
tag.innerHTML = "Заполнили пустой <u>тег</u>"
tag.style.color = "blue";
tag.style.fontWeight = "bold"; 
// list-style-type => listStyleType
tag.style.background = "silver";
tag.style.padding = "10px 20px";

tag.id = "test";
tag.className = "x"; */

//let tag = document.getElementsByTagName("p");
//tag[2].innerHTML = "Заполнили пустой <u>тег</u>"
//tag[2].style.color = "blue";
//tag[1].style.color = "orange";


//let q = document.getElementsByClassName("two");
//console.log(q);
//q[1].style.color = "red";

//document.querySelector("CSS"); // поиск до первого элемента
//document.querySelectorAll("CSS"); // массив всех элементов

//Пример на оба варианта

/* let id = document.querySelector("#text_1");
console.log(id);
id.style.color = "red" */;

/* let id = document.querySelectorAll("#text_1")[0];
console.log(id);
id.style.color = "red"; */


//================ список фрукты в html=====
//let id = document.querySelectorAll(".two")[1];
//console.log(id);
//id.style.color = "red";

/* let el = document.querySelector("h2");
el.style.color = "red";

//let ol = document.querySelectorAll("h2")[1];
//ol.style.color = "purple";

let ol = document.querySelector("h1 + h2");
ol.style.color = "purple";

let list = document.querySelectorAll("li");
//console.log(list.length);
for(let i = 0; i < list.length; i++){
    list[i].innerHTML += "!!!";
}

let purple = document.querySelectorAll(".purple li");
for(let i = 0; i < purple.length; i++){
    purple[i].style.color = "purple";
    purple[i].innerHTML += "???";
}

//let m = document.querySelectorAll(".red li");  // вариант 1 новый метод
let m = document.getElementsByClassName("red")[0]; // вариант 2 старый метод
m.style.color = "orange"; */



//================ Лекция 8 от 15.03.2026 ===============
// пример дз от 14.03.2026
/* document.writeln("<div id='divSample'></div>");
//let div = document.getElementById("divSample"); // вариант 1
let div = document.querySelector("#divSample"); // вариант 2
console.log(div);
div.textContent =  `Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на
стене, на потолке или на полу в помещении или под открытым небом в различных материалах
(бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С
некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно
целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных
величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым
отверстием), измеренным в миллиметрах..`; // текст в обратных ковычках для простоты редактирования текста
div.style.background = "#f0f";
div.style.color = "#99ffff";
div.style.width = "50%";
div.style.outline = "10px dotted black";
div.className = "resetFont";

let cl = document.querySelector(".resetFont");
cl.style.fontSize = "12px";
cl.style.fontWeight = "bold";
cl.style.textDecoration = "line-through"; */


//=====методы доступа к классам в html
//let el = document.querySelector(".elem");

//console.log(el.closest(".content"));

//el.style.color = "green";

//let blue = el.closest("ul");
//el.style.color = "blue";
//console.log(el.closest(".container"));
//console.log(el.closest("h1"));

//let all = document.querySelectorAll("*"); //обращение к всем тегам и классам, вплоть до скрипта. полный массив данных о странице /[]
//let all = document.querySelectorAll("[class]");// получение доступа по имени атрибута /[]
//console.log(all); 

//let all = document.querySelectorAll("[class = 'two']"); // точный поиск
//let all = document.querySelectorAll("[class ~= 'two']"); // поиск всех похожих элементов
//let all = document.querySelectorAll("[class ^= 'cont']"); // поиск по началу значения селектора
//let all = document.querySelectorAll("[class $= 'ner']"); // по концу значения селектора
//let all = document.querySelectorAll(":empty"); // поиск тегов без вложенных элементов. поиск пустых тегов
//console.log(all); 


// defer на стринице html. и async <script src="script.js" defer или async></script>
//let title= document.querySelector("h1");
//title.style.color = "red";



//=-==================-= Методы массива =-==================-= 
//

/* let js = ["нужно", "учить", "JavaScript"];
document.writeln(js + "<br>");
console.log(js);

let last = js.pop;
console.log(last);

console.log(js.pop()); // удаляет последний элемент из массива и возвращает удаленный элемент, при этом урезает сам массив
console.log(js);

js.push("JavaScript", "!"); // добавляет элеент в конец массива
console.log(js);

console.log(js.shift()); // удаляет первый элемент массива и возвращает удаленный элемент
console.log(js);

js.unshift("почему", "нужно"); // добавляет элемент в начало массива
console.log(js); */


//----- задача -----
/* let mas = ["апельсин", "банан", "груша"];
document.writeln(mas + "<br>");
document.writeln(mas.length + "<br>");
console.log(mas);
mas.push("яблоко", "ананас");
mas.unshift("грейпфрут");
document.writeln(mas + "<br>");
document.writeln(mas.length + "<br>");
console.log(mas);
console.log(mas.pop()); 
console.log(mas.shift());
document.writeln(mas + "<br>");
document.writeln(mas.length + "<br>");
console.log(mas); */


// пишем небольшую программу

/* let mas = [];
let n = prompt("Введите количество элементов массива:"); // 5
for(let i = 0; i < n; i++){
    let x = prompt("Введите число");
    // mas.push(x); // 1 2 3 4 5
    // mas.unshift(x); // 5 4 3 2 1
    // mas[i] = x;
}
for(let i = 0; i < n; i++){
    document.writeln(mas[i] + " ");
} */

// пишем небольшую программу на 2 массива

/* let masFirst = [1, 2, 3];
let masSecond = [11, 22, 33];
let masEnd = [];
for(let i = 0; i<masFirst.length; i++){
    masEnd.push(masFirst[i]);
    masEnd.push(masSecond[i]);
}
document.writeln(masEnd); */


// ************************************************************************************************************************************************************************************************************************************************************
//slice и splice
/* let arr = js.slice(1, 2); // slice(bigin, end) - копирует участок массива от bigin до end
console.log(arr);

console.log(js.slice(1)); // если end не указан продолжает копировать до конца
console.log(js);

let range = js.toSpliced(1, 2); // получение элементов в не диапазона. все кроме (1, 2)
console.log(range);

// оператор delete
delete js[1];
console.log(js); // удалил элемент по заданному индексу но осталась length

js.splice(1, 1); // splice(start, length) удаляет из массива указанное колличество элементом от start, а length - указывает колличество для удаления
console.log(js);

// добавления через splice
js.splice(0, 2, "Мы", "изучаем"); // удаляем и добавляем элементы
console.log(js);

js.splice(2, 0, "сложный", "язык"); // удаляем 0 и добавляем 2 элемента. что бы не удалять элементы, вторым параметром указываем 0 и после него с третьего параметра указываем добавляемые элементы
console.log(js);

js.splice(-3, 0, "но", "очень", "интересный"); // работаетс отрицательными индексами, отчет ведется с конца
console.log(js);
document.writeln("<br>" + js + "<br>"); */

// --------------задача--------------

/* let mas = [];
let n;
do {
    n = prompt("Введите элемент массива: ");
    if (n >= 0) {
        mas.push(n);
    } else {
        break;
    }
} while (true)
document.writeln(mas + "<br>");

let k = prompt("Введите индекс для удаления от 0 до " + (mas.length - 1));
//delete mas[k];

if(k >= 0 && k < mas.length){
    mas.splice(k, 1);
}else{
    alert("Недопустимое значение");
}

for(let el of mas){
    document.writeln(el + " ");
} */


// оазбор задачи домашнего задания
/* let mas = [];
let n;

for (let i = 0; i < 10; i++) {   // i = 0; 0 < 10
    n = +prompt("Введите элемент массива!"); // n = 8
    mas.push(n);

    document.writeln(mas[i] + " ");


}

let max = mas[0]
for  (let i = 0; i < 10; i++) {   // i = 0; 0 < 10
    if (max < mas[i]) {  // 44 < 100
        max = mas[i];   // 44 = 100     max = 100
    }

}

document.writeln("<br>");
document.writeln("Максимальное значение  ", max);

let ind = mas.indexOf(max);
console.log(max);

//
mas.splice(ind, 1);
mas.unshift(max);
document.writeln("Массив: " + mas); */

/* let index = js.indexOf("сложный"); // возвращает первый индекс по которому данный элемент может быть найден в массиве, или значение -1 если элемент не найден
console.log(index);

js.push("сложный");
console.log(js);

let index1 = js.indexOf("сложный", index + 1);// второй параметр указывает начальный индекс поиска
console.log(index1);

let index2 = js.lastIndexOf("сложный");
console.log(index2);

//ПРОВЕРКА МАССИВА НА ОПРЕДЕЛЕННОЕ ЗНАЯЕНИЕ

let inValue = js.includes("интересный"); // метот можно передать в условие
console.log(inValue); */

// Найти угикалтные элементы массива
//--------------------------------------------------------------------------
/* let array = [7, 4, 1, 4, 7, 6, 4, 6, 1, 4 ,7, 7, 1, 4, 5, 8, 8, 2, 1, 3, 4]; //выести без повторов, только уникальные элементы
let res = [];
for(let el of array){
    if(!res.includes(el)){
        res.push(el);
    }
        
}
for(let el of res){
    document.writeln(el + " ");
} */

//----------------------------------------------------------
//
/* let str = js.join(" | ");// объеденяет все элементы через символ разделитель (объеденитель)
console.log(str); */

// пример использования join
// запросить у пользователя по очереди фио и вевести через разделение (массив одной строкой с пробелами между строками)
/* let st = ["Фамилия", "Имя", "Отчество"]
let fio = new Array(3);
for(let i = 0; i < fio.length; i++){
    fio[i] = prompt("Введите данные:\n" + st[i]);
}
alert(fio.join(" ")); */

//reverse
/* js.reverse(); // меняет порядок следования элементов в массиве на обратный
console.log(js); */

//==============================================================================

/* let people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]]; //достает по вложенности элементы из массива
let arr = people.flat(2); // упрощает массив с учетом указанной вложенности элементов
console.log(arr);
console.log(arr.length);
document.writeln(arr); */

// добавление в конец массива / сложение массивов в один
/* let a =[1, 2];
let b = a.concat(3, 4); // создает новый массив, который объеденяет несколько массивов, либо в массим добавляются элементы
console.log(b);
let c = ["a", ["b", ["c"]]];
let num = a.concat(b, c);
console.log(num); */

// метод .with
/* let users = ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"];

// let modifate = users.with(0, "Tomas"); // изменяет элемент массива, но при этом сохраняет исходное состояние массива
console.log(users);
// console.log(modifate);

console.log(users.sort()); */

// ========== Задача ==========
// спросить имя пользователя, затем попросить пользователя ввести любимые именя . потом вывестии имена и добавить свое. вконце отсортировать, покрасить и подчеркнуть имя пользователя

/* let firstName = prompt("Как вас зовут?", "fgfgfg");
console.log(firstName);

let favorite = ""; // если без = "" то будет undefined
let arr = [];

while(favorite != null){ //undefined != null
    favorite = prompt("Введите любимое имя:");
    arr.push(favorite);
}

arr[arr.length - 1] = firstName
arr.sort();

console.log(arr);
let index = arr.indexOf(firstName)
console.log(index);

for(let i = 0; i<arr.length; i++){
    if(i == index){
        document.writeln("<span style='color: blue; text-decoration: underline;'>" + arr[i] + "</span>");
    }
    document.writeln(arr[i] + " ");
} */

//сортировка числовых значений
/* let n = [1, 15, 55, 2, 10];
n.sort((a, b) => a - b);
console.log(n); */
