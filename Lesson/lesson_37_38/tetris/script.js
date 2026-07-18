"use strict";

//========= Лекция 38 05.07.2026. продолжаем лекция 39 от 18.07.2026 ===========

//!!!!!!!!! - Игра Тетрис- !!!!!!!!!

class Game {
    //игровое поле - высота и ширина
    // playfield = [
    //     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // ]

    playfield = this.creatPlayfield() //игровое поле - высота и ширина

    activePiece = this.createPiece()
    //{
    // x: 0,
    // y: 0,
    // blocks: [
    //     [0, 1, 0],
    //     [1, 1, 1],
    //     [0, 0, 0]
    // ]
    //}

    nextPiece = this.createPiece()

    getState() {//копия игрового поля
        const playfield = this.creatPlayfield()
        const { y: pieceY, x: pieceX, blocks } = this.activePiece

        for (let y = 0; y < this.playfield.length; y++) {
            playfield[y] = []
            for (let x = 0; x < this.playfield[y].length; x++) {
                playfield[y][x] = this.playfield[y][x]
            }
        }

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x]) {
                    playfield[pieceY + y][pieceX + x] = blocks[y][x]
                }
            }


        }
        return {
            playfield
        }

    }

    moveIsLeft() {//перемщение фигуры в лево
        this.activePiece.x--
        if (this.hasCollision()) {
            this.activePiece.x++
        }
    }

    moveIsRight() {//перемщение фигуры в право
        this.activePiece.x++
        if (this.hasCollision()) {
            this.activePiece.x--
        }
    }

    moveIsDawn() {//перемщение фигуры в низ
        this.activePiece.y++

        if (this.hasCollision()) {
            this.activePiece.y--
            this.lockPiace()
            this.updatePiece()
        }
    }

    hasCollision() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x] && ((this.playfield[pieceY + y] === undefined || this.playfield[pieceY + y][pieceX + x] === undefined || this.playfield[pieceY + y][pieceX + x]))) {
                    return true
                }
            }
        }
        return false
    }

    lockPiace() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x]) {
                    this.playfield[pieceY + y][pieceX + x] = blocks[y][x]
                }
            }
        }
    }


    creatPlayfield() { //игровое поле
        const playfield = []

        for (let y = 0; y < 20; y++) {
            playfield[y] = [];  // пока не получим 20

            for (let x = 0; x < 10; x++) {
                playfield[y][x] = 0; // пока не будет 10
            }
        }
        return playfield
    }

    rotationPiece() {
        const blocks = this.activePiece.blocks
        const length = blocks.length

        const temp = []
        for (let i = 0; i < length; i++) {
            temp[i] = new Array(length).fill(0);// [0,0,0],[0,0,0],[0,0,0]
        }

        for (let y = 0; y < length; y++) {//меняем строки и столбцы местами
            for (let x = 0; x < length; x++) {
                temp[x][y] = blocks[length - 1 - y][x]
            }
        }

        this.activePiece.blocks = temp

        if (this.hasCollision()) {
            this.activePiece.blocks = blocks
        }
    }

    updatePiece() {
        this.activePiece = this.nextPiece
        this.nextPiece = this.createPiece()
    }

    createPiece() {

        const index = Math.floor(Math.random() * 7)
        const type = "IJLOSTZ"[index]
        const piece = { x: 0, y: 0 }

        switch (type) {
            case "I":
                piece.blocks = [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ]
                break
            case "J":
                piece.blocks = [
                    [0, 0, 0],
                    [1, 1, 1],
                    [0, 0, 1]

                ]
                break
            case "L":
                piece.blocks = [
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 0, 0]

                ]
                break
            case "O":
                piece.blocks = [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]

                ]
                break
            case "S":
                piece.blocks = [
                    [0, 0, 0],
                    [0, 1, 1],
                    [1, 1, 0]

                ]
                break
            case "T":
                piece.blocks = [
                    [0, 0, 0],
                    [1, 1, 1],
                    [0, 1, 0]

                ]
                break
            case "Z":
                piece.blocks = [
                    [0, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1]

                ]
                break
            default:
                throw new Error("Неизыестный тип фигуры")
        }

        return piece
    }
}

class View {
    constructor(element, width, height, rows, colums) {
        this.element = element
        this.width = width
        this.height = height

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.context = this.canvas.getContext("2d")

        this.blockWidth = this.width / colums
        this.blockHeight = this.height / rows

        this.element.append(this.canvas)
    }

    cleareScrean() {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    render({ playfield }) {
        this.cleareScrean()
        this.renderPlayfield(playfield)
    }

    renderPlayfield(playfield) {
        // Проходим по каждой строке (y)
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y]// текущая строка

            // Проходим по каждой ячейке в строке (x)
            for (let x = 0; x < line.length; x++) {
                const block = line[x]
                // Если блок ≠ 0 (заполнен)
                if (block) {
                    this.context.fillStyle = "red"
                    this.context.strokeStyle = "black"
                    this.context.lineWidth = 2

                    // Рисуем прямоугольник
                    this.context.fillRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight)

                    // Рисуем обводку
                    this.context.strokeRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight)

                }

            }

        }
    }
}

const game = new Game(); //игровое поле
const root = document.querySelector("#root");
const view = new View(root, 320, 640, 20, 10);

//view.renderPlayfield(game.playfield);
//console.log(game.playfield);

document.addEventListener("keydown", event => {
    switch (event.which) { // keyCode или which - оба устарели и оба работают - альтернативы незнаю
        case 37:
            game.moveIsLeft();
            view.render(game.getState())
            break
        case 38:
            game.rotationPiece();
            view.render(game.getState())
            break
        case 39:
            game.moveIsRight();
            view.render(game.getState())
            break
        case 40:
            game.moveIsDawn();
            view.render(game.getState())
            break
    }
})

//дз игра змейка по похожему принципц в canvas