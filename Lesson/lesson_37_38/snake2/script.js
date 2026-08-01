"use strict";

//========= Лекция 40 25.07.2026. продолжаем лекция 38 от 18.07.2026 ===========

//!!!!!!!!! - Игра Змейка 2 через класс !!!!!!!!!

class Game {
    constructor(element, gameBoard, size) {
        this.element = element
        this.width = gameBoard
        this.height = gameBoard
        //или this.width = this.height = gameBoard = gameBoard
        this.gridSize = size

        this.canvas = document.createElement("canvas")
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.ctx = this.canvas.getContext("2d")

        this.element.append(this.canvas)

        this.scoreEl = document.getElementById("score")
        this.startButton = document.getElementById("startButton")

        this.snake = []


        this.direction = "RIGHT"
        this.gameSpeed = 200
        this.foot = {}
        this.score = 0
        this.gameRunning = false

    }

    startGame(event) {
        this.foot = this.getRandomFootPosition()
        this.gameRunning = true;    
        this.snake = [{
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        }]

        this.scoreEl.textContent = "Счет: 0"
        this.startButton.style.display = "none"

        this.gameLoop()
    }

    getRandomFootPosition() {
        return {
            x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)) * this.gridSize,
            y: Math.floor(Math.random() * (this.canvas.height / this.gridSize)) * this.gridSize
        }
    }

    gameLoop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(this.foot.x, this.foot.y, this.gridSize, this.gridSize);
        this.ctx.fillStyle = "black";
        this.ctx.strokeRect(this.foot.x, this.foot.y, this.gridSize, this.gridSize);

        this.snake.forEach(segment => {
            this.ctx.fillStyle = "green";
            this.ctx.fillRect(segment.x, segment.y, this.gridSize, this.gridSize);
            this.ctx.fillStyle = "black";
            this.ctx.strokeRect(segment.x, segment.y, this.gridSize, this.gridSize);
        });


        let head = { ...this.snake[0] };

        if (this.direction === "UP") {
            head.y -= this.gridSize;
        }
        if (this.direction === "DOWN") {
            head.y += this.gridSize;
        }
        if (this.direction === "LEFT") {
            head.x -= this.gridSize;
        }
        if (this.direction === "RIGHT") {
            head.x += this.gridSize;
        }

        if (head.x < 0 || head.x >= this.canvas.width || head.y >= this.canvas.height || head.y < 0) {
            this.gameOver(); this.
                return;
        }

        for (let i = 0; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                this.gameOver();
                return;
            }
        }

        this.snake.unshift(head);

        if (head.x === this.foot.x && head.y === this.foot.y) {
            this.foot = this.getRandomFootPosition();
            this.score++;
            this.scoreEl.textContent = `Счет: ${this.score}`;
            if (this.gameSpeed > 50) {
                this.gameSpeed -= 5;
            }
        } else {
            this.snake.pop();
        }

        if (this.gameRunning && this.snake.length > 0) {
            setTimeout(() => this.gameLoop(), this.gameSpeed);
        }
    }

    changeDirection(event) {
        const key = event.key;

        if (key == "ArrowUp" && this.direction !== "DOWN") {
            this.direction = "UP";
        } else if (key == "ArrowDown" && this.direction !== "UP") {
            this.direction = "DOWN";
        } else if (key == "ArrowLeft" && this.direction !== "RIGHT") {
            this.direction = "LEFT";
        } else if (key == "ArrowRight" && this.direction !== "LEFT") {
            this.direction = "RIGHT";
        }

    }

    gameOver() {
        this.gameRunning = false;
        let result = document.createElement("p");
        result.innerHTML = `<span style="color: red">Игра окончена! Ваш счет: ${this.score}</span>`;
        this.scoreEl.prepend(result);
        this.startButton.style.display = "inline";
        console.log(result);
    }


}




const root = document.getElementById("root");
const game = new Game(root, 400, 20);
//не может вызвать клик без () => или function({game.startGame()})
document.addEventListener("keydown", (event) => game.changeDirection(event));
game.startButton.addEventListener("click", () => game.startGame());
