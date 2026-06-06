"use strict";


// дз номер 20 от 25.04.2026

let removeButtons = document.querySelectorAll(".remove-button");

for (let button of removeButtons) {
    button.addEventListener("click", function() {
        this.parentNode.remove();
    });
}