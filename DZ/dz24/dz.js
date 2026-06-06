"use strict";


// дз номер 24

let peopleInput = document.querySelector(".people");
let teaButtons = document.querySelectorAll(".tea");
let result = document.querySelector(".result");

for (let btn of teaButtons) {
    btn.addEventListener("click", function () {
        let people = Number(peopleInput.value);
        let tea = Number(this.dataset.tea);

        if (!people || people <= 0) {
            result.textContent = "";
            alert("Введите количество человек бльше 0");
            return;
        }

        let res = people * tea;
        result.textContent = res.toFixed(1);
    });
}