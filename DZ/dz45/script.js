"use strict";

// дз номер 45

//------------------------------------

let modal = document.getElementById("modal");
let cookieBanner = document.getElementById("cookieBanner");
let termsLink = document.getElementById("termsLink");
let acceptLink = document.getElementById("acceptLink");
let closeBtn = document.getElementById("closeBtn");
let acceptBtn = document.getElementById("acceptBtn");

if (localStorage.getItem("termsAccepted")) {
    cookieBanner.style.display = "none";
}

termsLink.addEventListener("click", function () {
    modal.style.display = "block";
});

acceptLink.addEventListener("click", function () {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

acceptBtn.addEventListener("click", function () {
    localStorage.setItem("termsAccepted", "true");
    modal.style.display = "none";
    cookieBanner.style.display = "none";
});

// форма ===
let noteTextarea = document.getElementById("noteTextarea");
let savedInfo = document.getElementById("savedInfo");

let savedText = localStorage.getItem("noteText");
if (savedText) {
    noteTextarea.value = savedText;
}

noteTextarea.addEventListener("input", function () {
    localStorage.setItem("noteText", noteTextarea.value);

    savedInfo.textContent = "Сохранено";
    setTimeout(function () {
        savedInfo.textContent = "";
    }, 1000);
});