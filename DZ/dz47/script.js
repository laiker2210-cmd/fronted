"use strict";

// дз номер 47

//конвертор валют в реальном времени

let inputRub = document.querySelector("#rub");
let inputUsd = document.querySelector("#usd");
let inputEur = document.querySelector("#eur");

inputRub.addEventListener("input", () => {
    let rubValue = parseFloat(inputRub.value);// преобразование в чило для проверки в ифе на нечисло и что бы НАН не выводился в поле

    if (isNaN(rubValue) || rubValue === "") {
        inputUsd.value = "";
        inputEur.value = "";
        return;
    }

    let request = new XMLHttpRequest();
    request.open("GET", "current.json")
    request.send();

    request.addEventListener("load", () => {
        if (request.status == 200) {
            console.log(request.response);
            let data = JSON.parse(request.response);
            inputUsd.value = (rubValue / data.current.usd).toFixed(2);
            inputEur.value = (rubValue / data.current.eur).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
            inputEur.value = "Что-то пошло не так";
        }
    })
})