"use strict";

//==================== Лекция 29-30 от 06.06.2026 и 07.06.2026 ====================

// шаблоны регулярных выражений, продолжение лекций 27-28
// работа с гит и регулярными вырвжениями

// форма регистрации

/* let registrationForm = document.getElementById("registrationForm");
let errorMessages = document.getElementById("errorMessages");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //деструктуризация элементов
    let [username, email, password] = registrationForm.elements;

    errorMessages.innerHTML = "";

    if (!username.value.trim()) {
        displayError("Имя пользователя должно быть обязательно");
        return;
    }

    //if (!email.value.trim() || !isValidEmail(email.value)) {
    //    displayError("Введите адрес электронной почты");
    //    return;
    //}

    if (!password.value.trim() || !isStrongPassword(password.value)) {
        displayError("Пароль должен состоять как минимум из 8 символов и должен содердать как минимум одну заглавную букву, одну строчную, одну цифру и один специальный символ");
        return;
    }

    alert("Register successfull!");
    registrationForm.reset();
})

registrationForm.addEventListener("input", function (event) {
    if (!email.value.trim() || !isValidEmail(email.value)) {
        displayError("Введите адрес электронной почты");
        return;
    }
})

function displayError(message) {
    errorMessages.innerHTML += `<div class='error'>${message}</div>`;
}

function isValidEmail(email) {
    return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}

function isStrongPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);

    // !!!!!!!!!!!!!!!!!!!!!!тут ДЗ!!!!!!!!!!!!!!!!!!!!!!!!!!!!
} */


//-----------------------------------------------------------------
// знакомство и работа с объектами

// let obj = {one: 1, two: 2};
// console.log(obj.one); // obj["one"]

//let car = new Object();
//let car1 = {};
//console.log(car);
//console.log(car1);

// let car = new Object();
// car["type-brand"] = "BMW";
// car["color"] = "white";
// console.log(car);
// document.writeln(car["type-brand"] + " " + car["color"]);

// let car1 = new Object();
// car1.type = "BMW";
// car1.color = "Black";
// console.log(car1);
// document.writeln(car1.type + " " + car1.color);

// let menu1 = {};
// menu1.width = 300;
// menu1.heigth = 200;
// menu1.title = "Menu";
// console.log(menu1);
// document.writeln(menu1.title + ": " + menu1.width + " x " + menu1.heigth + "<br>");

// let menu = {
//     width: 300,
//     heigth: 200,
//     title: "Menu"
// }
// console.log(menu);
// document.writeln(menu.title + ": " + menu.width + " x " + menu.heigth + "<br>");
// document.writeln(`${menu.title}: ${menu.width} x ${menu.heigth} ${"<br>"}`);

// delete menu.width;
// //delete(menu.width);
// document.writeln(`${menu.title}: ${menu.width} x ${menu.heigth} ${"<br>"}`);
// console.log("width" in menu);
// console.log("heigth" in menu);

// menu.age = 25;

// let couter = 0;
// for (let key in menu) {
//     document.writeln("<br>Ключ = " + key + ", значение = " + menu[key]);
//     couter++;
// }

// document.writeln("<br><br>Всего свойств (ключей): " + couter + "<br>");

// ключи через length
// document.writeln("<br><br>Имена свойств (ключей): " + Object.keys(menu) + "<br>");
// document.writeln("<br><br>Всего свойств (ключей): " + Object.keys(menu).length + "<br>");
// console.log(Object.keys(menu));

// Object.keys(menu).forEach(function (key) {
//     document.writeln("<br>" + key + ": " +  menu[key]);
// })
// console.log(Object.keys(menu));

// Object.values(menu).forEach(function (v) {
//     document.writeln("<br>" + v );
// })
// console.log(Object.values(menu));
// console.log(Object.entries(menu));

/* for (let el of Object.entries(menu)) {
    console.log(el);
    document.writeln("<br>" + el);

} */

/* for (let el of Object.entries(menu)) {
    console.log(el[0], [1]);
    document.writeln("<br>" + el);

} */

//игра крестики нолики










