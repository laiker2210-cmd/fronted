"use strict"

// Игра 3 в ряд

let start = document.querySelector("#start");
let game = document.querySelector("#game");
let currentBox = null; // текущий падающий квадрат
let speed = document.querySelector("#game-time"); //скорость падения
let fallSpeed = +speed.value * 100; //скорость в сек
let gameSize = game.getBoundingClientRect(); //положение квадрата

start.addEventListener("click", startGame);

//старт
function startGame() {
    //console.log(start); //проверка запуска
    start.classList.add("hide");
    game.style.background = "#FFF";

    renderBox();
}

//свойства и значения квадрата
function renderBox() {
    let box = document.createElement("div");
    let boxSize = 25;
    let maxTop = gameSize.height - boxSize;
    let maxleft = gameSize.width - boxSize;
    let colors = ["red", "blue", "green", "orange"]
    let randomIndex = Math.floor(Math.random() * colors.length);
    //let randomColor = colors[randomIndex];
    let maxCols = Math.floor(gameSize.width / boxSize);
    let randomCol = Math.floor(Math.random() * maxCols);
    let leftPos = randomCol * boxSize;


    box.style.width = box.style.height = boxSize + "px";
    box.style.width = box.style.height = "25px";
    box.style.background = colors[randomIndex]; //randomColor
    //console.log(colors[randomIndex]); //проверка цвета
    box.style.position = "absolute";
    box.style.left = leftPos + "px";
    box.style.top = "0px";
    box.style.cursor = "pointer";

    //сохрание данные для логики
    box.dataset.color = colors[randomIndex];
    box.dataset.x = randomCol;
    box.dataset.y = 0;
    box.dataset.fixed = "false";

    game.appendChild(box);


    game.insertAdjacentElement("afterbegin", box);
    startFalling(box);
    return box;
}

//падение квадрата
function startFalling(box) {
    currentBox = box;
    let fallInterval = setInterval(() => {
        let top = parseInt(box.style.top) || 0;
        let newTop = top + 25; //отступ

        //проверка: дно или столкновение
        if (newTop + 0 >= gameSize.height) {
            clearInterval(fallInterval);
            box.dataset.fixed = "true"; //помечаем как зафиксированный
            //Пока просто создаём новый квадрат
            setTimeout(renderBox, 500);
            return;
        }

        box.style.top = newTop + "px";
        box.dataset.y = Math.floor(newTop / 25); // обновляем ряд
    }, fallSpeed); //fallSpeed из input
}

function isCollision() {

}

function fixBox() {

}

function checkMatches() {

}

function spawnNewBox() {

}






