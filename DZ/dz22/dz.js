"use strict";


// дз номер 22 от 10.05.2026

let reg = document.querySelector(".register");

reg.addEventListener("submit", function (event) {
    event.preventDefault();

    let login = reg.login.value;
    let password = reg.psw.value;
    let password2 = reg.psw2.value;"";

    if (login == "" || password == "" || password2 == "") {
        alert("Заполните все поля!");
        return;
    }

    if (password != password2) {
         alert("Пароли не совпадают!");
        return;
    }

    if (password.length < 8) {
        alert("Пароль слишком короткий! Минимум 6 символов.");
        return;
    }

    alert("Регистрация прошла успешно! Добро пожаловать, " + login);
})