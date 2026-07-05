"use strict";

//========= Лекция 37-38 от 04.07.2026 и 05.07.2026 ===========

//!!!!!!!!! - Игра Тетрис- !!!!!!!!!

class Game {
    playfield = [
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

class Viem {
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

    renderPlayfield(playfield) {
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y]

            for (let x = 0; x < line.length; x++){
                const block = line[x]
                if(block){
                    this.context.fillStyle = "red"
                    this.context.strokeStyle = "black"
                    this.context.lineWidth = 2

                    this.context.fillRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight)
                    this.context.strokeRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight)

                }
                
            }
            
        }
    }
}

const game = new Game();
const root = document.querySelector("#root");
const viem = new Viem(root, 320, 640, 20, 10);

viem.renderPlayfield(game.playfield);

