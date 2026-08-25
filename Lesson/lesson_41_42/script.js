"use strict";

//==================== Лекция 41-42 от 22.08.2026 и 23.08.2026 ====================

// JSON - новая тема. Предоставление (нотации) объектов JS.
// "ключ" : значение
//методы
// JSON.stringify() - преобразует объект JS в объект JSON (сериализация)
// JSON.parse() - делает обратное действие (десериализация)

// let info = `{
//   "first_name": "Ivan",
//   "age": 36,
//   "mother": {
//     "name": "Olga",
//     "age": 58
//   },
//   "children": [
//     "Kate",
//     "Igor",
//     "Misha"
//   ],
//   "married": true,
//   "dog": null
// }`;

// console.log(info);

// let person = JSON.parse(info); // - десериализация
// console.log(person);

// person.first_name = "Petr";
// document.writeln(person.first_name + "<br>");

// delete person.age;

// for(let i in person){
//     document.writeln(i + ": " + person[i] + "<br>");
// }

// person.work = "programmer";
// document.writeln("<br>");

// for(let i in person){
//     document.writeln(i + ": " + person[i] + "<br>");
// }
// document.writeln("<br>");
// delete person.children[1]; //удалил элемент но не поменял позицию в массиве
// document.writeln(person.children + "<br><br>");

// //методы массива

// document.writeln("<br>");
// delete person.children.splice(1,1); // а тут сделал как нужно
// document.writeln(person.children + "<br><br>");


// person.children.push("Ira"); //в конец массива дрбаыили новое имя
// document.writeln(person.children + "<br><br>");


// // сериализация объекта

// let personString = JSON.stringify(person);
// console.log(personString);


//------------------------------------------------------------------

/* const user = {
    name: "Вадим",
    surname: "Ветров",
    age: 23,
    city: "Москва"
};

//const json = JSON.stringify(user);
//console.log(json);

const json = JSON.stringify(user, ["name", "age"], 2);//передать ключи для преобразования + формат данных(пробелы отступв) - передали 3 параметра вывода
console.log(json); */

//---

// function parseJSON(jsonString, value = {}) {
//     try{
//         return JSON.parse(jsonString)
//     }catch(error){
//         console.log("Failed to pase JSON:", error.message);
//         return value;

//     }
// }

// const validJSON = '{"name": "Igor", "age": 30}';
// const invalidJSON = '{"name": "Igor", age: "30"}';

// console.log(parseJSON(validJSON));
// console.log(parseJSON(invalidJSON));


//----------------------------------------------------------------
// cookie (куки)

//проверка включены куки или нет

/* if(navigator.cookieEnabled === false){
    alert("Cookies отключены")
}else{
    alert("Cookies включены")
} */

/* document.cookie = "user=Сергей";
alert(document.cookie); */


//--------------------------------------------------//
//хранилище данных
//localStorage

//localStorage.setItem("data", 1);//задали
//alert(localStorage.getItem("data"));//вывели

// localStorage.test = 2;
// alert(localStorage.test);
// delete localStorage.test;
// delete localStorage.data;
// delete localStorage.stagnationUser;
// delete localStorage.droneCounterData;

//localStorage.setItem("userName", "Марина");
//localStorage.setItem("surName", "Ветрова");
//alert(localStorage.length)
//вариант 1
// for (let i = 0; i < localStorage.length; i++) {
//     let k = localStorage.key(i);
//     console.log(k + ": " + localStorage.getItem(k));

// };
//вариант 2
//console.log("\n");

// let keys = Object.keys(localStorage); // Попадает ["userName", "data", "surName"]
// for (let key of keys) {
//     console.log(key + ": " + localStorage.getItem(key));
// }
//преобразует в строки(может быть проблемой с объектами)
// let keys = Object.keys(localStorage); // Попадает ["userName", "data", "surName"]
// for (let key of keys) {
//     console.log(key + ": " + localStorage.getItem(key) + ", тип: " + typeof localStorage.getItem(key));
// }

//объект, решение через JSON
// localStorage.user = {name: "Сергей"}
// console.log(localStorage.user);
//преобразовываем в объект в Json
// localStorage.user = JSON.stringify({name: "Сергей"});
// //парсим в js объект (десериализация)
// let user = JSON.parse(localStorage.user)
// //получаем что хотели
// console.log(localStorage.user);


//удалить данные
// localStorage.removeItem("userName");
// //очистить полностью localStorage
// localStorage.clear();

//примеры применения localStorage
//например сохранение прогресса в иге
// подсчет кликов мыши...

//1

// let board = document.querySelector("div");
// let value = document.querySelector("span");
// //let btn = document.getElementById("btn")
// let counter;

// if (localStorage.getItem("count") > 0) {
//     counter = localStorage.getItem("count");
// } else {
//     counter = 0;
// }

// board.addEventListener("click", function () {
//     counter++;
//     value.textContent = counter;
//     localStorage.setItem("count", counter);

// })

// btn.addEventListener("click", function () {
//     localStorage.clear()
//     counter = 0;
//     value.textContent = counter;
// })

//2
//сохранение данных формы и очистка
//получае досту к форме
// const form = document.getElementById("form1");
// const formFilds = form.elements;
// const submitBtn = form.querySelector("[type='submit']");

// function attachEvents() {
//     for (let i = 0; i < formFilds.length; i++) {
//         formFilds[i].addEventListener("change", changeHandle);
//     }
// }



// function changeHandle() {
//     if (this.type != "checkbox") {
//         console.log(this.name, this.value);
//         localStorage.setItem(this.name, this.value);
//     } else {
//         console.log(this.name, this.checked);
//         localStorage.setItem(this.name, this.checked);
//     }
// }


// checkedStorage();

// function checkedStorage() {
//     for (let i = 0; i < formFilds.length; i++) {
//         if (formFilds[i].type !== "submit") {
//             if (formFilds[i].type === "checkbox") {
//                 formFilds[i].checked = localStorage.getItem(formFilds[i].name)
//             } else {
//                 formFilds[i].value = localStorage.getItem(formFilds[i].name)
//             }
//         }
//     }
//     attachEvents();
// }

// submitBtn.addEventListener("click", clearStorage);

// function clearStorage() {
//     localStorage.clear();
// }

//3
//Заметки

/* let list = document.querySelector("#list");
let but = document.querySelector("button");

but.addEventListener("click", addNote);

function addNote() {
    let name = prompt("Новая заметка", "");

    notes[name] = "";
    addToList(name);
    saveToStorage();
    list.value = name;
    current.value = notes[name];
}

function addToList(name) {
    let option = document.createElement("option");
    option.textContent = name;
    list.append(option);
}

function saveToStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

let notes = JSON.parse(localStorage.getItem("notes")) || { "Что купить": "" };

for (let name in notes) {
    addNote(name);
}

//localStorage.clear()

let current = document.querySelector("#currentnote");
current.value = notes[list.value];

list.addEventListener("change", function () {
    current.value = notes[list.value];
})

current.addEventListener("change", function () {
    notes[list.value] = current.value;
    saveToStorage();
}) */

/* let list = document.querySelector("#list");
let but = document.querySelector("button");
 
but.addEventListener("click", addNote);
 
function addNote(){
    let name = prompt("Имя записи", "");
 
    notes[name] = "";
    addToList(name);
    saveToStorage();
    list.value = name;
    current.value = notes[name];
}
 
function addToList(name){
    let option = document.createElement("option");
    option.textContent = name;
    list.append(option);
}
 
function saveToStorage(){
    localStorage.setItem("notes", JSON.stringify(notes));
}
 
let notes = JSON.parse(localStorage.getItem("notes")) || {"что купить": ""}
 
for(let name in notes){
    addToList(name);
}
 
let current = document.querySelector("#currentnote");
current.value = notes[list.value];
 
list.addEventListener("change", function(){
    current.value = notes[list.value];
});
 
current.addEventListener("change", function(){
    notes[list.value] = current.value;
    saveToStorage();
}) */

//------------------------------------------------
// sessionStorage

// sessionStorage.setItem("test", 1);
// console.log(sessionStorage.getItem("test", 1));

// сохраниди данные
// sessionStorage.setItem(
//     "user",
//     JSON.stringify({
//         name: "Igor",
//         age: 23,
//         isDevoloper: true
//     })
// )

// // считываем данные

// console.log(sessionStorage.getItem("user"));
// console.log("user", JSON.parse(sessionStorage.getItem("user")));

// //удалили данные точечено
// sessionStorage.removeItem("test");
// //удалили данные полностью
// sessionStorage.clear();


//-------------------------------------------
//смена темы на сайте

/* class ThemeSwitcher {
    constructor() {
        this.selectors = { switcherThemeButton: '[data-switcher]' }
        this.thems = {
            dark: "dark",
            light: "light"
        }

        this.stateClasses = { isDarkTheme: 'is-dark-theme' }

        this.storageKey = "theme"

        this.switcherThemeButtonElement = document.querySelector(this.selectors.switcherThemeButton)

        this.setInitialTheme()
        this.binEvents()
    }

    get isDarkThemeCached() {
        return localStorage.getItem(this.storageKey) === this.thems.dark
    }

    setInitialTheme() {
        document.documentElement.classList.toggle(this.stateClasses.isDarkTheme, this.isDarkThemeCached)
    }

    onClick = () => {
        localStorage.setItem(
            this.storageKey,
            this.isDarkThemeCached ? this.thems.light : this.thems.dark
        )

        document.documentElement.classList.toggle(this.stateClasses.isDarkTheme)
    }

    binEvents(){
        this.switcherThemeButtonElement.addEventListener("click", this.onClick)
    }
}

new ThemeSwitcher(); */

//продолженеи прошлых тем
// Метод локализации оформления графического элемента .toLocaleString()

// const sum1 = 120323;
// const sum2 = 100200200;
// const sum3 = 1600.33;

// const num = 0.1;

// document.writeln(`
//     ${sum1.toLocaleString()} <br>
//     ${sum2.toLocaleString("ru")} <br>
//     ${sum3.toLocaleString("en")} <br>`)

//---------

// document.writeln(`<div>
//     ${sum1.toLocaleString({
//     style: 'decimal' // целое
// })}<br>
// ${num.toLocaleString("ru", {
//     style: "percent" // процент
// })}<br>
// ${sum2.toLocaleString("ru", {
//     style: "currency", // денежные еденицы
//     currency: "rub"
// })}<br>
// ${sum3.toLocaleString("en", { //локальность
//     style: "currency", // денежные еденицы
//     currency: "USD",
//     currencyDisplay: "name"
// })}<br>
// ${sum3.toLocaleString("ru", { //локальность
//     style: "currency", // денежные еденицы
//     currency: "EUR",
//     currencyDisplay: "name" // имя
// })}<br>
// </div>`)

//-----------------------------
// Intl.NumberFormat

/* document.writeln(`<div>
    ${new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "name",
    minimumFractionDigits: 0 // убрали 0 полсе запятой
}).format(sum2)}<br>
</div>`);


//сделаеем один раз и можем применять постоянно
const toEuro = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "name",
    minimumFractionDigits: 0
});

document.writeln(`<div>${toEuro.format(sum2)}</div>`);
document.writeln(`<div>${toEuro.format(sum1)}</div>`);
document.writeln(`<div>${toEuro.format(sum3)}</div>`); */

//------------------------
// Intl -  класс джава скрип 
//локальные даты

/* const now = new Date();

const locale = navigator.language; // локализация пользователя

//настройки элемента
const dateOptions = {
    day: "numeric", // "2-digit"
    month: "2-digit", //добавили  0 в формат вывода даты. было 8/22/2026 стало 08/22/2026
    //month: "short" // или long - название месяца сокращенное или полное
    year: "numeric", // "2-digit"
    era: "long", // от Рождества Христова - "short" - н.э.
    weekday: "long", // или "short"
    timeZoneName: "long", // время. привязывается к часовому поясу
    hour: "2-digit", // часы || "numeric"
    //hour12: true // время в  PM
    minute: "2-digit",
    second: "2-digit"

}

const UserDate = new Intl.DateTimeFormat("locale", dateOptions);
const RuDate = new Intl.DateTimeFormat("ru", dateOptions);
const USDate = new Intl.DateTimeFormat("en-US", dateOptions);
const UKDate = new Intl.DateTimeFormat("en-UK", dateOptions);


document.writeln(`<ul>
    <li> ${RuDate.format(now)}</li>
    <li> ${USDate.format(now)}</li>
    <li> ${UKDate.format(now)}</li>
    <li> ${UserDate.format(now)}</li>
</ul>`) */

//----------------------------------------
// Intl.RelativeTimeFormat

/* const rtf = new Intl.RelativeTimeFormat("ru", {
    numeric: "always", // "auto" / "always"
    style: "long", // "short"
    localeMatcher: "best fit"
});

console.log(rtf.format(1, "day")); // = завтра
console.log(rtf.format(1, "minute")); // = завтра
console.log(rtf.format(-1, "month")); // 
console.log(rtf.format(2,"day")); // 
console.log(rtf.format(-2, "second")); //
console.log(rtf.format(20, "day")); // 
console.log(rtf.format(-20, "years")); //  */

//----------------------------------

/* function getRelativeTimeString(date, lang = navigator.language) {
    const timeMs = typeof date === 'number' ? date : date.getTime();

    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]; //массив секунд

    const units = ["second", "minute", "hour", "day", "week", "month", "year"];

    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));

    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

    const rtf = new Intl.RelativeTimeFormat(lang, {numeric: "auto"});


    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}

console.log(getRelativeTimeString(new Date("2026-08-23T00:55:04"), "ru"));
console.log(getRelativeTimeString(new Date("2026-09-23"), "ru"));
console.log(getRelativeTimeString(new Date("2026-08-18"), "ru")); */

//-----------------------
//возможности склонений на выводе
/* const fotmatter = new Intl.NumberFormat("ru", {
    style: "unit", // готовый набор элементов
    unit: "meter-per-second", // || meter-per-second или liter-per-megabyte.
    unitDisplay: "long" //"short" || "narrow"
});

document.writeln(`<ul>
    <li>${fotmatter.format(100)}</li>
    <li>${fotmatter.format(101)}</li>
    <li>${fotmatter.format(102)}</li>
    <li>${fotmatter.format(105)}</li>
    <li>${fotmatter.format(108)}</li>
    <li>${fotmatter.format(111)}</li>
    <li>${fotmatter.format(121)}</li>
</ul>`) */


////////////////////////////////////////////////////////////////////
//--------------------!!!!!!!!!!!!!!!!!!!!--------------------------
//коллекции массивов
//Map Set - коллекция уникальных значений
// ! - ключи всегда строки

/* let obj = {
    "name": "Ivan",
    20: "age",
    true: "boolean"
}

console.log(obj);
console.log(!obj); */

//--
//перезаписал объект, нужно быть всегда внимательно
/* let obj = {}

obj[{id:1}] = "first";
obj[{id:2}] = "second";

console.log(obj); */


//----------
//смотрим длинну объекта
/* let obj = {40: "Число", true: "ollean"};
console.log(Object.keys(obj).length); // 2 ключча */

//опять перезаписалось
/* let obj = {1: "один", 1: "one"};

console.log(obj); */


//ЧЕРЕЗ Map
//выводит но тоже перезаписывает одинаковый ключ
//видим все элементы в коллекции Map
// let map = new Map();
// let obj = {7: "семь"};
// let mas = [3,4];
// map.set(5, "число");
// map.set("5", "строка");
// map.set("5", "пять");
// map.set(mas, "массив");
// map.set(obj, "объект");

// console.log(map); //полный вывод
// console.log(map.get(5)); // вывод по ключу
// console.log(map.get("5")); // вывод по ключу
// console.log(map.get(mas)); // вывод по значению
// console.log(map.get(obj)); // вывод по значению

// console.log(map.size); // сколько коллекций

// //console.log(map.has(mas1)); // поиск
// console.log(map.has(6)); // поиск

// map.delete(mas); // удалить ключ
// console.log(map);

// map.clear(); // - очистить коллекцию
// console.log(map);


//---
/* for(let elem of map){
    document.writeln(elem + "<br>");
    console.log(elem);
}

for(let [key, elem] of map){
    document.writeln("************************<br>");
    document.writeln(key + "<br>");
    document.writeln(elem + "<br>");
} */

/* let values = map.values(); //вывод значений
console.log(values);

let keys = map.keys(); // вывод ключей
console.log(keys);

let entries = map.entries();
console.log(entries); // тоже самое что и console.log(map);

for(let el of map.values()){
console.log(el);
}

for(let el of map.keys()){
console.log(el);
} */

//---
//цепочка вызовов

//let maps = new Map();

// maps.set("1", "one")
//     .set(1, "first")
//     .set(true, "boll");

//массив в массиве
/* let maps = new Map([
    ["1", "one"],
    [1, "first"],
    [true, "boll"]
]);

console.log(maps);

maps.forEach((value, key) => {
    document.writeln(`${key}: ${value} <br>`);
}); */


//------
//группировка данных
//делаем массив объектов
//.groupBy

/* const users = [
    { name: "Alex", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Kristina", age: 25 },
    { name: "Jon", age: 30 },
    { name: "Julia", age: 35 }
];

const byAge = Map.groupBy(users, user => user.age);
console.log(byAge);

const age25 = byAge.get(25);
console.log(age25); */


/* let items = [1,2,3,4,5,6];

const enumerate = Map.groupBy(items, n => n %2 === 0 ? "even" : "odd")
console.log(enumerate); */

//сделать массив строк и эдементов, и разделить по ключам, строки и числв(объекты)


/* let item = [1,"2",3,"4",5,"6"];

const mas = Map.groupBy(item, n => typeof n === "string" ? "string" : "number")
console.log(mas); */


//продолжение
//Map объектов

/* let obj = {
    name: "Сергей",
    age: 30
}

console.log(Object.entries(obj));

let map = new Map(Object.entries(obj))
document.writeln(map.get("name"));
console.log(map);

//.fromEntries -
let obj1 = Object.fromEntries(map) // - получаем объект
console.log(obj1);  */

// срвнение время работы объекта и Map

/* const myObj = {};

let start1 = new Date().getTime();
for (let i = 0; i <= 10000000; i++) {
    myObj[i] = i;
    delete myObj[i]
}
console.log(new Date().getTime() - start1);

//работает почти в 2.5 раза быстрее чем при работе с Object по дополнению и удалению данных
const myMap = new Map();
let start2 = new Date().getTime();
for (let i = 0; i <= 10000000; i++) {
    myMap.set(i, i);
    myMap.delete(i)
}
console.log(new Date().getTime() - start2); */


//----------------------------
// new Set();
// обращение по индекчу не работает. есть тользко значение, и родобие индексов. хранит набор только уникальных значений, отбрасывает повторяющие элементы
/* const set = new Set();
set.add(5);
set.add(9);
console.log(set);
console.log(set.size); */

//---

//const set = new Set([1, 2, 3, 4, 4, 5, 5, 6, 6]);
//console.log(set); //Set избавился от дубликатов, оставил толко уникальные значение.
//console.log(set.has(7)); //булиевый ответ
//console.log(set.has(4));
//set.delete(4); //удалили 4
//console.log(set); // проверили удаление
//set.clear(); //очистили
//console.log(set); // проверили

// проверка цикла для Set

// for (let elem of set) {
//     console.log(elem);
// }

// forEach - работает тоже, как и forOf
//set.forEach(value => document.writeln(value + "<br>"));

//-----------

//let arr = [...set];//получили масив, перенеся set в массив через деструктуризацию
///console.log(arr);

//let arr1 = Array.from(set); //получили масив, перенеся set в массив через метод Array.from
//console.log(arr1);

//обратное преобразование массива в set

// let mas = [5,9,8,6,5,9,6,8];
// let set = new Set(mas)
// console.log(set);
// // пример, чтобы не искать дубликаты в массиве, можем преобразовать в сет и обратно.
// let mas1 = [...set];
// console.log(mas1);

// но можно быстрее это сделать, одной строкой
// let mas = [5,9,8,6,5,9,6,8];
// console.log(mas);
// let mas1 = [...new Set(mas)];
// console.log(mas1);

//----------------------------------------------
//теперь пример применения, отслеживание уникальных посетителей на сайте за 1 день

/* class VisitorTrecker {
    constructor() {
        this.visitors = new Set()
        this.totatVisits = 0
    }

    registerVisit(userId) {
        this.totatVisits++
        this.visitors.add(userId)
    }

    getUniqueCount() {
        return this.visitors.size
    }

    getNewVisitorPercent() {
        if (this.totatVisits === 0) {
            return 0
        }
        return (this.visitors.size / this.totatVisits) * 100
    }
}

const tracker = new VisitorTrecker();

tracker.registerVisit("user_1");
tracker.registerVisit("user_2");
tracker.registerVisit("user_1");
tracker.registerVisit("user_3");
tracker.registerVisit("user_2");

console.log(`
    Всего визитов: ${tracker.totatVisits}. 
    Всего уникальных посетителей: ${tracker.getUniqueCount()}.
    Процент новых посетителей: ${tracker.getNewVisitorPercent()}%.
`); */

//-----------------------------
//множества

/* const one = new Set(["first", "second", "third", "fourth"]);
const two = new Set(["second", "fifth", "fourth", "sixth"]);

//объеденямим несколько сетов
const uni = one.union(two);//объеденили 2 Set
//console.log(uni);
console.log(...[uni]);//объеденили 2 Set и выведи одним массивом

//.intersection
const both = one.intersection(two);
console.log(both); //вывели исключения
console.log(...[both]); //вывели исключения в массиве

//вычитает их первого сета второй сет,
const onlyOne = one.difference(two);
const onlyTwo = two.difference(one);
console.log(onlyOne); // можно вывести как массив
console.log(onlyTwo); // можно вывести как массив

// не переносит в новый сет повторяющие элеименты
const unique = one.symmetricDifference(two);
console.log(unique);
console.log(...[unique]); */


//----------------------------------------------------------
//НОВАЯ ТЕМА
//AJAX - Asynchronous JavaScript And XML(JSON)
















