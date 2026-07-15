"use strict";

// дз номер 38

// канвас
// задание - смалик (внизу)

const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

//цвет заливки
c.fillStyle = "rgb(83, 56, 2)";
//цвет обводки (border)
c.strokeStyle = "rgb(169, 115, 8)";

//толщина линии
c.lineWidth = 2;

//стеллаж для книг
//заливка + контур поверх
//левое окно - верх
c.fillRect(10, 10, 60, 50); //10/10 - отступ по краям - 60/50 = ширина/высота
c.strokeRect(10, 10, 60, 50);

//правое окно - верх
c.fillRect(70, 10, 60, 50);
c.strokeRect(70, 10, 60, 50);

//левое окно - второй ряд
c.fillRect(10, 60, 60, 50);
c.strokeRect(10, 60, 60, 50);

//правое окно - второй ряд
c.fillRect(70, 60, 60, 50);
c.strokeRect(70, 60, 60, 50);

//левое окно - третий ряд
c.fillRect(10, 110, 60, 50)
c.strokeRect(10, 110, 60, 50)

//правое окно - третий ряд
c.fillRect(70, 110, 60, 50);
c.strokeRect(70, 110, 60, 50);

//левое окно - четвертый ряд
c.fillRect(10, 160, 60, 50)
c.strokeRect(10, 160, 60, 50)

//правое окно - четвертый ряд
c.fillRect(70, 160, 60, 50);
c.strokeRect(70, 160, 60, 50);

//левое окно - пятый ряд
c.fillRect(10, 210, 60, 50)
c.strokeRect(10, 210, 60, 50)

//правое окно - пятый ряд
c.fillRect(70, 210, 60, 50);
c.strokeRect(70, 210, 60, 50);

//пол
c.fillStyle = "rgb(109, 101, 9)";
c.fillRect(0, 261, 520, 60);

//плитка на полу
const X = 0;
const Y = 261;
const Width = 520;
const Height = 60;

//сама плитка
const plitW = 40; //ширина
const plitH = 30; //высота

//цвет
c.fillStyle = "rgb(109, 101, 9)";
c.strokeStyle = "rgb(192, 178, 32)";
c.lineWidth = 1;

//считаем плитки
const W = Math.floor(Width / plitW); //520/40 = 13
const H = Math.floor(Height / plitH); //60/30 = 2

//рисуем в цикле, в ручную это издевательсвобудет
for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        let x = X + j * plitW;
        let y = Y + i * plitH;

        //рисуем плитку
        c.fillRect(x, y, plitW, plitH);
        //затирка шва
        c.strokeRect(x, y, plitW, plitH);
    }
}

//аквариум
c.fillStyle = "rgb(153, 153, 212)";
c.strokeStyle = "rgb(131, 131, 214)";
c.fillRect(150, 160, 120, 50);
c.strokeRect(150, 160, 120, 50);

//тумба под аквариум
c.fillStyle = "rgb(220, 158, 34)";
c.strokeStyle = "rgb(169, 115, 8)";
c.fillRect(150, 210, 120, 50);
c.strokeRect(150, 210, 120, 50);

//фасады на тумбе и ручки
c.fillStyle = "rgb(220, 158, 34)";
c.strokeStyle = "rgb(169, 115, 8)";
c.fillRect(208, 210, 2, 50);
c.strokeRect(208, 210, 2, 50);

//и ручки
//левая
c.fillStyle = "rgb(220, 158, 34)";
c.strokeStyle = "rgb(169, 115, 8)";
c.fillRect(200, 220, 2, 5);
c.strokeRect(200, 220, 2, 5);

//правая
c.fillStyle = "rgb(220, 158, 34)";
c.strokeStyle = "rgb(169, 115, 8)";
c.fillRect(216, 220, 2, 5);
c.strokeRect(216, 220, 2, 5);

//рыбки - неонки
c.fillStyle = "rgb(151, 15, 108)";
c.fillRect(216, 200, 3, 1);
c.fillRect(200, 200, 3, 1);
c.fillRect(150, 180, 3, 1);
c.fillRect(180, 170, 3, 1);
c.fillRect(240, 170, 3, 1);
c.fillRect(230, 180, 3, 1);
//тут тоже неонки
c.fillStyle = "rgb(225, 170, 21)";
c.fillRect(220, 180, 3, 1);
c.fillRect(190, 165, 3, 1);
c.fillRect(199, 175, 3, 1);

//это будут, ну брабусы
c.fillStyle = "rgb(113, 225, 21)";
c.fillRect(205, 195, 5, 2);
c.fillRect(170, 185, 5, 2);
c.fillRect(240, 195, 5, 2);

//сом)
c.fillStyle = "rgb(0, 0, 0)";
c.fillRect(155, 206, 9, 2);

//тут когданибудь будет анимация плавающих рыбок


//телевизор на стене(спросить можно ли воткнуть сюда видео. можно, но как то сложно. лучше картинку вставить)

//кресло

//-----------------------------------

//смайлик
//толщина линии
c.lineWidth = 3;
c.fillStyle = "rgb(0, 0, 0)";
c.strokeStyle = "rgb(0, 0, 0)";

//круг
c.beginPath();
c.arc(350, 100, 80, 0, 2 * Math.PI);
c.stroke();
c.closePath();

//глаза
c.beginPath();
c.arc(320, 80, 10, 0, 2 * Math.PI, false);
c.stroke();
c.closePath();

c.beginPath();
c.arc(380, 80, 10, 0, 2 * Math.PI, false);
c.stroke();
c.closePath();

//улыбка
c.beginPath();
c.arc(350, 110, 50, 0, Math.PI, false);
c.stroke();
c.closePath();


