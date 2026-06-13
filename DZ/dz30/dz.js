"use strict";


// дз номер 30

// форма регистрации

let registrationForm = document.getElementById("registrationForm");
let errorMessages = document.getElementById("errorMessages");
let emailField = registrationForm.elements[1]; //поле email

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //деструктуризация элементов
    let [username, email, password] = registrationForm.elements;

    errorMessages.innerHTML = "";

    if (!username.value.trim()) {
        displayError("Имя пользователя должно быть обязательно");
        return;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
        displayError("Введите корректный адрес электронной почты");
        emailField.style.border = "2px solid red"; //подсветка при отправке
        return;
    }

    if (!password.value.trim() || !isStrongPassword(password.value)) {
        displayError("Пароль должен состоять как минимум из 8 символов и должен содержать как минимум одну заглавную букву, одну строчную, одну цифру и один специальный символ");
        return;
    }

    alert("Register successfull!");
    registrationForm.reset();
    emailField.style.border = ""; //сброс красной рамки
})

//подсветка рамки
emailField.addEventListener("input", function () {
    if (emailField.value.trim() === "") {
        emailField.style.border = "";
    } else if (!isValidEmail(emailField.value)) {
        emailField.style.border = "2px solid red"; // красная рамка при ошибке
    } else {
        emailField.style.border = "2px solid green"; // ил = ""
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
}