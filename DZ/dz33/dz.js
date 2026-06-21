"use strict";

// дз номер 33
//Консультация

//Элементы
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");
let notification = document.getElementById("notification");
let consultBtn = document.getElementById("consultBtn");
let closeBtn = document.getElementById("closeBtn");
let submitBtn = document.getElementById("submitBtn");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");

//Обработчики событий
consultBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
submitBtn.addEventListener("click", submitForm);

//Открытие модального окна
function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
    //Очистка полей и стилей при открытии
    nameInput.value = "";
    emailInput.value = "";
    document.getElementById("question").value = "";
    nameInput.classList.remove("error", "success");
    emailInput.classList.remove("error", "success");
    nameError.textContent = "";
    emailError.textContent = "";
}

//Закрытие модального окна
function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
    //Очистка стилей при закрытии
    nameInput.classList.remove("error", "success");
    emailInput.classList.remove("error", "success");
    nameError.textContent = "";
    emailError.textContent = "";
}

//Проверка
function submitForm() {
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let isNameValid = true;
    let isEmailValid = true;

    //Имя
    if (name === "") {
        nameInput.classList.remove("success");
        nameInput.classList.add("error");
        nameError.textContent = "Имя обязательно к заполнению";
        isNameValid = false;
    } else if (name.length < 3) {
        nameInput.classList.remove("success");
        nameInput.classList.add("error");
        nameError.textContent = "Минимум 3 символа";
        isNameValid = false;
    } else {
        nameInput.classList.remove("error");
        nameInput.classList.add("success");
        nameError.textContent = "";
    }

    //Почта
    if (email === "") {
        emailInput.classList.remove("success");
        emailInput.classList.add("error");
        emailError.textContent = "Email обязателен к заполнению";
        isEmailValid = false;
    } else if (!isValidEmail(email)) {
        emailInput.classList.remove("success");
        emailInput.classList.add("error");
        emailError.textContent = "Пример: name@example.com/ru";
        isEmailValid = false;
    } else {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
        emailError.textContent = "";
    }

    //Отправка формы когда все норм
    if (isNameValid && isEmailValid) {
        closeModal();

        //Уведомление
        notification.style.display = "block";

        //Скрыть уведомление
        setTimeout(function () {
            notification.style.display = "none";
        }, 3000);
    }
}

//Проверка почты
function isValidEmail(email) {
    let reg = /^[\w.#$%&*+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return reg.test(email);
}