"use strict";

// дз номер 46

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