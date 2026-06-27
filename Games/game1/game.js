"use strict"

// игра + дз
//<div class="app">

let start = document.querySelector("#start");
let game = document.querySelector("#game");
let time = document.querySelector("#time");
let timeHeader = document.querySelector("#time-header");
let resultHeader = document.querySelector("#result-header");
let result = document.querySelector("#result");
let gameTime = document.querySelector("#game-time");
let score = 0;
let isGameStart = false;

start.addEventListener("click", startGame);
game.addEventListener("click", handelBoxClick);
gameTime.addEventListener("input", setGameTime);


function startGame() {
    score = 0;
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
    setGameTime();
    gameTime.setAttribute("disabled", "true");

    start.classList.add("hide");
    game.style.background = "#FFF";
    //game.style.background = "rgb(254, 254, 254)";//Проверка оттенка
    isGameStart = true;

    let interval = setInterval(function () {
        let t = time.textContent;
        if (t <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (t - 0.1).toFixed(1);
        }
    }, 100);

    renderBox();
}

function setGameTime() {
    let tm = +gameTime.value;
    time.textContent = tm.toFixed(1);
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");

}

function endGame() {
    isGameStart = false;
    result.textContent = score;
    gameTime.removeAttribute("disabled");
    start.classList.remove("hide");
    game.innerHTML = "";
    game.style.background = "#9be8fb";
    timeHeader.classList.add("hide");
    resultHeader.classList.remove("hide");
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//у меня есть начала кода, где была игра, там в случайном поле появлялся квадрат и нужно было на время нажимать на квадраты. хочу сделать другую игру по типу три в ряд. падают квадраты 

function renderBox() {
    game.innerHTML = "";
    let box = document.createElement("div");
    let boxSize = getRandom(30, 100);
    let gameSize = game.getBoundingClientRect();//! повторить
    let maxTop = gameSize.height - boxSize;
    let maxleft = gameSize.width - boxSize;
    let rgb = [];//хранение цвета

    for (let i = 0; i < 3; i++) {//генератор цвета чеоез цикл
        rgb.push(Math.floor(Math.random() * 256));
    }

    if (rgb[0] === 255 && rgb[1] === 255 && rgb[2] === 255) {
        rgb[0] = 254;// проверка на белый цвет игрового поля
    }

    box.style.width = box.style.height = boxSize + "px";
    box.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    //box.style.background = "#000" //базовый цвет квадрата
    box.style.position = "absolute";
    box.style.left = getRandom(0, maxleft) + "px";
    box.style.top = getRandom(0, maxTop) + "px";
    box.style.cursor = "pointer";
    box.setAttribute("data-box", "true")

    game.insertAdjacentElement("afterbegin", box)
    console.log(gameSize);
}

function handelBoxClick(event) {
    if (!isGameStart) {
        return;
    }
    if (event.target.dataset.box) {
        score++;
        renderBox();
        //console.log(score);
    }
}


//дз. доделать. при пояявлении нового квадрата, он генерировался случайным цветом
