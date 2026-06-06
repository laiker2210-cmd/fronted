"use strict";


// дз номер 23 от 10.05.2026

let btn = document.querySelector("#selectBtn");

btn.addEventListener("click", function () {
    let selected = document.querySelector('input[name="choice"]:checked');

    if (selected) {
        alert("Выбран: " + selected.value);
    } 
});