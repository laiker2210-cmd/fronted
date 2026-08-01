"use strict";

//========= Лекция 38 05.07.2026. продолжаем лекция 39 от 18.07.2026 ===========

//!!!!!!!!! - Игра Тетрис- !!!!!!!!!

class Game {
    //игровое поле - высота и ширина
    // playfield = 
    //     [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
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
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]


    static points = {
        "1": 40,
        "2": 100,
        "3": 300,
        "4": 1200
    }

    constructor() {
        this.reset()
    }

    reset() {
        this.score = 0;
        this.lines = 0;

        this.topOut = false;

        this.playfield = this.creatPlayfield() //игровое поле - высота и ширина

        this.activePiece = this.createPiece()
        this.nextPiece = this.createPiece()
    }



    getLevel() {
        //return Math.floor(this.lines * 0.1)
        return Math.floor(this.lines / 10) + 1
    }

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
            score: this.score,
            level: this.getLevel(),
            lines: this.lines,
            nextPiece: this.nextPiece,
            playfield,
            isGameOver: this.topOut
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

    moveIsDown() {//перемщение фигуры в низ
        if (this.topOut) {
            return
        }

        this.activePiece.y++

        if (this.hasCollision()) {
            this.activePiece.y--
            this.lockPiece()
            const clearLines = this.clearLines()
            this.updateScore(clearLines)
            this.updatePiece()

        }
        if (this.hasCollision()) {
            this.topOut = true // ?????????????
        }
    }

    updateScore(clearedLines) {
        if (clearedLines > 0) {
            this.score += Game.points[clearedLines] //* (this.getLevel()) // + 1
            this.lines += clearedLines
            console.log(this.score, this.lines, this.getLevel());

        }
    }

    clearLines() {
        const rows = 20
        const colums = 10
        let lines = []

        for (let y = rows - 1; y >= 0; y--) {
            let numberOfBlocks = 0;

            for (let x = 0; x < colums; x++) {
                if (this.playfield[y][x]) {
                    numberOfBlocks++
                }
            }

            if (numberOfBlocks === 0) {
                break
            } else if (numberOfBlocks < colums) {
                continue
            } else { // numberOfBlocks === colums
                lines.unshift(y)
            }

        }

        for (let index of lines) {
            this.playfield.splice(index, 1)
            this.playfield.unshift(new Array(colums).fill(0))
        }

        return lines.length
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

    lockPiece() {
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
        const piece = {}

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
                    [2, 2, 2],
                    [2, 0, 0]
                ]
                break
            case "L":
                piece.blocks = [
                    [0, 0, 0],
                    [3, 3, 3],
                    [0, 0, 3]
                ]
                break
            case "O":
                piece.blocks = [
                    [0, 0, 0, 0],
                    [0, 4, 4, 0],
                    [0, 4, 4, 0],
                    [0, 0, 0, 0]
                ]
                break
            case "S":
                piece.blocks = [
                    [0, 0, 0],
                    [0, 5, 5],
                    [5, 5, 0]
                ]
                break
            case "T":
                piece.blocks = [
                    [0, 0, 0],
                    [6, 6, 6],
                    [0, 6, 0]
                ]
                break
            case "Z":
                piece.blocks = [
                    [0, 0, 0],
                    [7, 7, 0],
                    [0, 7, 7]
                ]
                break
            default:
                throw new Error("Неизыестный тип фигуры")
        }

        piece.x = Math.floor((10 - piece.blocks[0].length) / 2)

        piece.y = -1

        return piece
    }
}

class View {

    static colors = {

        "1": "cyan",
        "2": "blue",
        "3": "orange",
        "4": "yellow",
        "5": "green",
        "6": "purple",
        "7": "red"
    }

    constructor(element, width, height, rows, colums) {
        this.element = element
        this.width = width
        this.height = height

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.context = this.canvas.getContext("2d")

        this.playfieldBorderWidth = 4
        this.playfieldX = this.playfieldBorderWidth
        this.playfieldY = this.playfieldBorderWidth
        this.playfieldWidth = this.width * 2 / 3
        this.playfieldHeight = this.height
        this.playfieldInnerWidth = this.playfieldWidth - this.playfieldBorderWidth * 2
        this.playfieldInnerHeight = this.playfieldHeight - this.playfieldBorderWidth * 2

        this.blockWidth = this.playfieldInnerWidth / colums
        this.blockHeight = this.playfieldInnerHeight / rows

        this.panelX = this.playfieldWidth + 10
        this.panelY = 0
        this.panelWidth = this.width / 3
        this.panelHeigth = this.height

        this.element.append(this.canvas)
    }

    cleareScrean() {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    render(state) { // было{ playfield }
        this.cleareScrean()
        this.renderPlayfield(state)
        this.renderPanel(state)

    }

    renderPlayfield({ playfield }) {
        // Проходим по каждой строке (y)
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y]// текущая строка

            // Проходим по каждой ячейке в строке (x)
            for (let x = 0; x < line.length; x++) {
                const block = line[x]
                // Если блок ≠ 0 (заполнен)
                if (block) {
                    this.renderBlock(this.playfieldX + (x * this.blockWidth), this.playfieldY + (y * this.blockHeight), this.blockWidth, this.blockHeight, View.colors[block])
                    // this.context.fillStyle = View.colors[block]
                    // this.context.strokeStyle = "black"
                    // this.context.lineWidth = 2

                    // // Рисуем прямоугольник
                    // this.context.fillRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight)

                    // // Рисуем обводку
                    // this.context.strokeRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight)

                }

            }

        }

        this.context.strokeStyle = "white"
        this.context.lineWidth = this.playfieldBorderWidth
        this.context.strokeRect(0, 0, this.playfieldWidth, this.playfieldHeight)
    }

    renderBlock(x, y, width, height, color) {
        this.context.fillStyle = color
        this.context.strokeStyle = "black"
        this.context.lineWidth = 2

        // Рисуем прямоугольник - копия
        this.context.fillRect(x, y, width, height)
        // Рисуем обводку - копия
        this.context.strokeRect(x, y, width, height)
    }

    renderPanel({ level, score, lines, nextPiece }) {

        this.context.fillStyle = "white"
        this.context.textBaseline = "top"
        this.context.textAlign = "start"
        this.context.font = "16px Verdana"

        this.context.fillText(`Score: ${score}`, this.panelX, this.panelY + 0)
        this.context.fillText(`Lines: ${lines}`, this.panelX, this.panelY + 24)
        this.context.fillText(`Level: ${level}`, this.panelX, this.panelY + 48)
        this.context.fillText(`Next:`, this.panelX, this.panelY + 96)

        for (let y = 0; y < nextPiece.blocks.length; y++) {
            for (let x = 0; x < nextPiece.blocks[y].length; x++) {
                const block = nextPiece.blocks[y][x]

                if (block) {
                    this.renderBlock(
                        this.panelX + (x * this.blockWidth * 0.5),
                        this.panelY + 100 + (y * this.blockHeight * 0.5),
                        this.blockWidth * 0.5,
                        this.blockHeight * 0.5,
                        View.colors[block]
                    )
                }
            }

        }

    }

    renderStartScreen() {//стартовый экран
        this.context.fillStyle = "white"
        this.context.font = "18px Verdana"
        this.context.textAlign = "center"
        this.context.textBaseline = "middle"
        this.context.fillText("Press Enter to Start", this.width / 2, this.height / 2)

    }

    renderPauseScreen() {
        this.context.fillStyle = "rgba(0,0,0,0.75"
        this.context.fillRect(0, 0, this.width, this.height)

        this.context.fillStyle = "white"
        this.context.font = "18px Verdana"
        this.context.textAlign = "center"
        this.context.textBaseline = "middle"
        this.context.fillText("Press Enter to Resume", this.width / 2, this.height / 2)

    }

    renderEndScreen({ score }) {
        this.cleareScrean()

        this.context.fillStyle = "white"
        this.context.font = "18px Verdana"
        this.context.textAlign = "center"
        this.context.textBaseline = "middle"


        this.context.fillText("Game Over", this.width / 2, this.height / 2 - 48)
        this.context.fillText(`Score: ${score}`, this.width / 2, this.height / 2)

    }

}

class Controller {
    constructor(game, view) {
        this.game = game
        this.view = view
        this.intevalId = null
        this.isPlaying = false



        //document.addEventListener("keydown", event => this.handleKeyDown())
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        this.view.renderStartScreen()
    }

    play() {
        this.isPlaying = true
        this.startTimer()
        this.updateView()
    }

    pause() {
        this.isPlaying = false
        this.stopTimer()
        this.updateView()
    }

    reset() {
        this.game.reset()
        this.play()
    }


    updateView() {
        const state = this.game.getState()

        if (state.isGameOver) {
            this.view.renderEndScreen(state)
        } else if (!this.isPlaying) {
            this.view.renderPauseScreen()
        } else {
            this.view.render(state)
        }


    }

    startTimer() {
        const speed = 1000 - this.game.getState().level * 100

        if (!this.intevalId) {
            this.intevalId = setInterval(() => {
                this.update()
            }, speed > 0 ? speed : 1000)

        }
    }

    stopTimer() {


        if (this.intevalId) {
            clearInterval(this.intevalId)
            this.intevalId = null
        }
    }

    update() {
        this.game.moveIsDown()
        this.updateView()
    }

    handleKeyDown(event) {
        const state = this.game.getState()
        switch (event.which) { // keyCode или which - оба устарели и оба работают - альтернативы незнаю
            case 13:
                if (state.isGameOver) {
                    this.reset()
                } else if (this.isPlaying) {
                    this.pause()
                } else {
                    this.play()
                }
                break

            case 37:
                this.game.moveIsLeft();
                this.updateView()
                break
            case 38:
                this.game.rotationPiece();
                this.updateView()
                break
            case 39:
                this.game.moveIsRight();
                this.updateView()
                break
            case 40:
                this.game.moveIsDown();
                this.updateView()
                break
        }
    }
}


const game = new Game(); //игровое поле
const root = document.querySelector("#root");
const view = new View(root, 480, 640, 20, 10);
const controller = new Controller(game, view)

//view.renderPlayfield(game.playfield);
//console.log(game.playfield);

//document.addEventListener("keydown", event => {
// switch (event.which) { // keyCode или which - оба устарели и оба работают - альтернативы незнаю
//     case 13:
//         view.render(game.getState())
//         break
//     case 37:
//         game.moveIsLeft();
//         view.render(game.getState())
//         break
//     case 38:
//         game.rotationPiece();
//         view.render(game.getState())
//         break
//     case 39:
//         game.moveIsRight();
//         view.render(game.getState())
//         break
//     case 40:
//         game.moveIsDown();
//         view.render(game.getState())
//         break
// }
//})

//view.render(game.getState())
// view.renderStartScreen(game.getState())
// view.renderPauseScreen(game.getState())
// view.renderEndScreen(game.getState())
//раличие классов в игре, в ндном игрвое поле и событие, во втором, в основном внешний вид. можно жто сделать и в одном классе. будет еще один класс