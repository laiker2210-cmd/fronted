"use strict";

//==================== Лекция 39-40 от 01.08.2026 и 02.08.2026 ====================

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

class ThemeSwitcher {
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

new ThemeSwitcher();




