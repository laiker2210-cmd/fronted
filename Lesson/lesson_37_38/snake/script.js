"use strict";

//========= Лекция 40 25.07.2026. продолжаем лекция 38 от 18.07.2026 ===========

//!!!!!!!!! - Игра Змейка- !!!!!!!!!

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const startButton = document.getElementById("startButton");

const gridSize = 20;  // размер одного сегмента
let snake, direction, foot, score, gameSpeed, gameRunning;

function startGame() {
    snake = [{
        x: 200,
        y: 200
    }];

    direction = "RIGHT";
    score = 0;
    gameSpeed = 150;
    foot = getRandomFootPosition();
    gameRunning = true;

    scoreEl.textContent = "Счет: 0";
    startButton.style.display = "none";

    gameLoop();
}

function getRandomFootPosition() {
    return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
    }
}

function gameOver() {
    gameRunning = false;
    let result = document.createElement("p");
    result.innerHTML = `<span style="color: red">Игра окончена! Ваш счет: ${score}</span>`;
    scoreEl.prepend(result);
    startButton.style.display = "inline";
}

// квадратная змейка мне не нравиться, будет круглой)
function roundedRect(ctx, x, y, width, height, radius) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //еда
    // ctx.fillStyle = "purple";
    // ctx.fillRect(foot.x, foot.y, gridSize, gridSize);
    // ctx.fillStyle = "black";
    // ctx.strokeRect(foot.x, foot.y, gridSize, gridSize);

    // Еда
    roundedRect(ctx, foot.x, foot.y, gridSize, gridSize, 3); //радиус скругления
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();

    //змейка
    // snake.forEach(segment => {
    //     ctx.fillStyle = "green";
    //     ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    //     ctx.fillStyle = "black";
    //     ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    // });

    //змейка
    snake.forEach(segment => {
        roundedRect(ctx, segment.x, segment.y, gridSize, gridSize, 5);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
    });

    let head = { ...snake[0] };

    if (direction === "UP") {
        head.y -= gridSize;
    }
    if (direction === "DOWN") {
        head.y += gridSize;
    }
    if (direction === "LEFT") {
        head.x -= gridSize;
    }
    if (direction === "RIGHT") {
        head.x += gridSize;
    }

    if (head.x < 0 || head.x >= canvas.width || head.y >= canvas.height || head.y < 0) {
        gameOver();
        return;
    }

    for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);

    if (head.x === foot.x && head.y === foot.y) {
        foot = getRandomFootPosition();
        score++;
        scoreEl.textContent = `Счет: ${score}`;
        if (gameSpeed > 50) {
            gameSpeed -= 5;
        }
    } else {
        snake.pop();
    }

    if (snake.length > 0) {
        setTimeout(gameLoop, gameSpeed);
    }

    console.log(snake);
}


function changeDirection(event) {
    const key = event.key;

    if (key == "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if (key == "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    } else if (key == "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (key == "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }

    // console.log(direction);    
}

document.addEventListener("keydown", changeDirection);
startButton.addEventListener("click", startGame);