"use strict";

//==================== Лекция 37-38 от 04.07.2026 и 05.07.2026 ====================
// продолжение прошлой лекции
//!!!!!!!!! - текстовая квестовая игра - !!!!!!!!!

// --Полиморфизм и Наследование

/* class Shape {
    constructor(name) {
        this.name = name
    }

    calculateArea() {//абсстрактный метод
        throw new Error("Мутод calculate должен быть реализован")
    }

    describe() {
        console.log(`Это ${this.name} с площадью ${this.calculateArea()}`)

    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name)
        this.radius = radius
    }

    calculateArea() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}

class Square extends Shape {
    constructor(name, side) {
        super(name)
        this.side = side
    }

    calculateArea() {
        return this.side ** 2
    }
}

//- продолжили на лекции 37
class Triangle extends Shape {
    constructor(name, base, height) {
        super(name)
        this.base = base
        this.height = height
    }
    calculateArea() {
        return this.base * this.height / 2
    }

}
//обычн=ный способ вывода
// const circle = new Circle("Круг", 5);
// circle.describe();

// const squeare = new Square("Квадрат", 4);
// squeare.describe();

// const triangle = new Triangle("Треугольник", 6, 3);
// triangle.describe();

// короче способ того что выше
const shapes = [
    new Circle("Круг", 5),
    new Square("Квадрат", 4),
    new Triangle("Треугольник", 6, 3)
]

shapes.forEach(shape => shape.describe()); */

//------------------------------------------------
//статические свойства и методы

/* class Animal {
    //статические свойства создается за пределами кокнструктора
    static count = 0

    constructor(name) {
        this.speed = 0
        this.name = name
        Animal.count++
    }

    static counter(){
        return Animal.count
    }

    run(speed) {
        this.speed = speed;
        document.writeln(`${this.name} бежит со скоростью ${this.speed} км/ч. <br>`)
    }

    stop() {
        this.speed = 0
        document.writeln(`${this.name} стоит. <br>`)
    }
}

let animal1 = new Animal("Мой питомец 1");
let animal2 = new Animal("Мой питомец 2");
let animal3 = new Animal("Мой питомец 3");
// console.log(animal1.name);
// console.log(animal2.name);
// console.log(Animal.name);
//статические свойства
//console.log(Animal.count);//получаем доступ через имя класса - подсчет экземпляров класса на основе одного
// console.log(animal1.count);
// console.log(animal2.count);
console.log(Animal.counter()); */

//-----------------------------------------------------------

/* class User {
    static takenNames = []

    static isNameTaken(name) {//и метод и статик - можно в начале или после конструктора
        return User.takenNames.includes(name)
    }

    constructor(name) {
        this.name = name
        User.takenNames.push(name)
    }
}

const user1 = new User("Сергей");
const user2 = new User("Марина");
console.log(User.takenNames);
console.log(User.isNameTaken("Сергей"));//есть - true
console.log(User.isNameTaken("Алексей"));//такого нет - false */

//----------------------------------------------------------
//математтческие действия(функции)
//console.log(Math.PI);
//.reduce - последовательно обрабатывает каждый элемент и постепенно «сворачивает» массив в одно итоговое значение.

//работа со статическими методами
/* class MathUtilis {
    static PI = 3.141592653589793

    static sum(...number) {
        return number.reduce((total, num) => total + num, 0)
    }

    static averange(...number) {
        return MathUtilis.sum(...number) / number.length
    }

}

console.log(MathUtilis.PI);
console.log(MathUtilis.sum(1, 2, 3, 4));
console.log(MathUtilis.averange(1, 2, 3, 4)); */

//--------------------
//задание - сделать планировщик задач

/* class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title
        this.done = false
        Task.count++
        //console.log("Происходит создание задачи")
    }

    static getDefaultTitle() {
        return "Задача"
    }

    get done() {
        return this._done === true ? "Задача выполнена" : "Задача не выполнена"
    }

    set done(value) {
        if (value !== undefined && typeof value == 'boolean') {
            this._done = value
        } else {
            console.error("Ошибка! Укажите значение true или false")
        }
    }

    complete() {
        this.done = true
        console.log(`Задача "${this.title}" выполнена`);

    }
}

Task.count = 0;//статические свойство созданное за пределами объекта

let task1 = new Task("Выучить JavaScript");
let task2 = new Task("Выучить frameworks");
let task3 = new Task();

console.log(task1.title);
console.log(task2.title);
console.log(task3.title);

console.log("Созданных задач: " + Task.count);//подсчет задач

task2.complete();
task3.complete();

console.log(task1.done);
console.log(task2.done);
console.log(task3.done); */


//----------------------------------------------------------------------
// <div id="header"></div>

/* class Header {
    constructor(image, h1, h2) {
        this.src = image
        this.h1 = h1
        this.h2 = h2
        this.out = "";
    }

    render(id) {
        this.out = `
        <img src='${this.src}' alt="Изображение">
        <h1>${this.h1}</h1>
        <h2>${this.h2}</h2>
        `
        document.querySelector(`#${id}`).innerHTML = this.out
    }
};

class HeaderExt extends Header {
    constructor(image, h1, h2, tel) {
        super(image, h1, h2)
        this.tel = tel
    }

    get tel() {
        return this._tel
    }

    set tel(value) {
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if (reg.test(value)) {
            this._tel = value
        } else {
            alert("Некорректный номер телефона")
        }
    }

    render(id) {
        super.render(id)

        this.out += `<h3>${this.tel}</h3>`;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }

}

let img = "https://images.icon-icons.com/2667/PNG/96/folder_js_icon_161291.png";
let header1 = new Header(img, "Заголовок", "Описание");
header1.render("header");

let img2 = "https://images.icon-icons.com/2148/PNG/96/config_js_icon_132475.png";
let header2 = new Header(img2, "Второй заголовок", "Другое описание");
header2.render("header2");

let img3 = "https://images.icon-icons.com/2530/PNG/96/js_button_icon_151927.png";
let header3 = new HeaderExt(img3, "Название", "Описание", "+7 950 123-45-67");

header3.tel = "+7 950 555-55-55"

header3.render("header-ext"); */
// дз по примеру выше


//-----------------------------------
//работа с новым тегом
//<canvas></canvas>

//метод - .fillRect()

/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

//цвет заливки
c.fillStyle = "rgb(83, 56, 2)";
//цвет обводки (border)
c.strokeStyle = "rgb(169, 115, 8)";

//толщина линии
c.lineWidth = 2;

//стеллаж
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

//рыбки
c.fillStyle = "rgb(151, 15, 108)";
c.fillRect(216, 200, 3, 1);
c.fillRect(200, 200, 3, 1);
c.fillRect(150, 180, 3, 1);
c.fillRect(180, 170, 3, 1);
c.fillRect(240, 170, 3, 1);
c.fillRect(230, 180, 3, 1);

c.fillStyle = "rgb(225, 170, 21)";
c.fillRect(220, 180, 3, 1);
c.fillRect(190, 165, 3, 1);
c.fillRect(199, 175, 3, 1);

c.fillStyle = "rgb(113, 225, 21)";
c.fillRect(205, 195, 5, 2);
c.fillRect(170, 185, 5, 2);
c.fillRect(240, 195, 5, 2);

c.fillStyle = "rgb(0, 0, 0)";
c.fillRect(155, 206, 9, 2);

//тут когданибудь будет анимация плавающих рыбок


//телевизор на стене(спросить можно ли воткнуть сюда видео)

//кресло */

//лекция 38

/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

//цвет заливки
c.fillStyle = "rgb(83, 56, 2)";

c.fillRect(10, 10, 60, 50); //10/10 - отступ по краям - 60/50 = ширина/высота

c.fillStyle = "#f60"
c.fillRect(40, 50, 100, 90);

c.setLineDash([15,5]); //пунктирный контур - длинна и растояние
c.lineWidth = 4.5;//толшина контура
c.strokeStyle = "#369"
c.strokeRect(5, 5, 140, 140); //контур

c.clearRect(30, 30, 50, 50);//вырезали квадрат */

/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

c.fillStyle = "rgb(0, 0, 0)"; // черный цвет по умолчанию, можно убрать
c.fillRect(20, 20, 160, 160);

c.clearRect(50, 50, 100, 100);

c.lineWidth = 4.5;
c.strokeStyle = "rgb(0, 0, 0)"; // черный цвет по умолчанию, можно убрать
c.strokeRect(60, 60, 80, 80); */

//-----------------

/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

c.beginPath();//открыли
c.rect(30,180,100,90);//нужно открыть и закрыть
c.closePath();// закрыли

c.fillStyle = "yellow";// перекрасили
c.strokeStyle = "brown";// цвет контура
c.fill();//написали и появился в видимой части c.rect()
c.stroke();// добавили контур

c.clip();//обрезаои часть видимой области - проявился как маска по размерам первой фигуры и закрыл эту фигуру c.rect(10,200,140,90);
//все что после невидно

c.beginPath()
c.rect(10,200,140,90);
c.closePath();
c.stroke(); */

//-----------
//треугольник
/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

c.beginPath();
c.moveTo(80,50);//х/у - начальная точка линии от края
c.lineTo(100,80);//х/у - конечная точка
c.lineTo(100,30);

c.closePath();
c.stroke();
c.fillStyle = "yellow";
c.fill(); */

//-----------
//окружности
// const canvas = document.getElementById("test");//получили холст для рисования
// const c = canvas.getContext("2d");

// /* c.beginPath();
// c.arc(200, 80, 40, 0, Math.PI * 2); // длинна от карая до центра, от верха до центра, радиус, начальный и конечный угол до арки

// c.closePath();
// c.fill(); */

// //часть круга
// c.beginPath();
// c.moveTo(300, 80);// и тут важно
// c.arc(300, 80, 40, 0, Math.PI / 2, true); //без true будет 1/4, с true 3/4
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(310, 90);// а тут важно
// c.arc(310, 90, 40, 0, Math.PI / 2, false); //без true будет 1/4, с true 3/4
// c.closePath();
// c.stroke();

// //пол круга
// c.beginPath();
// c.moveTo(410, 90);//тут неважно, есть или нет 
// c.arc(410, 90, 40, 0, Math.PI, false);//усли true то отзеркалит (или вторая половинка)
// c.closePath();
// c.stroke();

// //кривые
// c.beginPath();
// c.moveTo(180, 220);//от и до по х
// c.quadraticCurveTo(230, 160, 290, 220);// от х до у верх и от у вниз до клнечной точки х
// //вытягивается по значениям выше, т.е. загругляется
// c.closePath();
// c.strokeStyle = "red";
// c.stroke();

// c.beginPath();
// c.moveTo(180, 260);//длинна (от и до)
// c.bezierCurveTo(240, 200, 220, 320, 290, 260); //вверх(2), вниз(2), вверх(2) до конечной точки moveTo - закруглило
// c.strokeStyle = "red";
// c.stroke();

// //----------------------

// c.fillStyle = "blue";//color
// c.font = "30px Arial";//size and font-stail
// c.fillText("Hello World", 160, 30); //text
// c.strokeText("Hello World", 320, 30)// text contur

// c.font = "30px Verdana";
// c.fillStyle = "orange";
// c.textAlign = "center";//центр типо

// c.shadowOffsetX = 3;//в пикселях толщина тени / в право / можно -3, уйдет в лево
// c.shadowOffsetY = 3;//в пикселях толщина тени / в низ / можно -3, уйдет в верх
// c.shadowBlur = 3; //размытие тени на 3 пикселя
// c.shadowColor = "#AAA";//цвет тени


// //c.fillText("Hello World", 320, 60); //центр отностительно чегото
// c.fillText("Hello World", canvas.width / 2, canvas.height / 2); //текст, ищем центр по длинне, отступ ро высоте(центр)

//-----------------------------
/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

let pic = new Image();
pic.src = "https://images.icon-icons.com/2530/PNG/96/js_button_icon_151927.png";
pic.addEventListener("load", function(){
    c.drawImage(pic, 80, 100);

    c.drawImage(pic, 180, 0, 300, 130)//[x,y,w,h]
}) */

// градиенты - динейный

/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

//цвет градиента
let gr = c.createLinearGradient(320, 0, 470, 0);
gr.addColorStop(0, "red");
gr.addColorStop(0.5, "blue");
gr.addColorStop(1, "white");
c.fillStyle = gr;

c.fillRect(320, 170, 150, 60);
//контур градиента
let st = c.createLinearGradient(320, 0, 470, 0);
st.addColorStop(0, "yellow");
st.addColorStop(1, "orange");
c.strokeStyle = st;
c.lineWidth = 10;
c.strokeRect(320, 170, 150, 60) */

//гражиенты - радиальный

/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

//прямоугольник
let grd = c.createRadialGradient(400, 280, 5, 400, 270, 60); //x,y, радиус первой точки, координата, радиус второй точки
grd.addColorStop(0, "red");
grd.addColorStop(1, "orange");
c.fillStyle = grd;
c.fillRect(320, 240, 150, 60); //фигура

//тень
c.shadowOffsetX = 10;
c.shadowOffsetY = 10;
c.shadowColor ="#0F0";
c.shadowBlur = 10;

// круг
let gr = c.createRadialGradient(60, 60, 15, 75, 75, 75);
gr.addColorStop(0, "#0F0");
gr.addColorStop(1, "#0DA805");
c.fillStyle = gr;

c.beginPath();
c.arc(75, 75, 75, 0, Math.PI * 2);
c.closePath();
c.fill(); */

//-----------------------------------------------------

/* const canvas = document.getElementById("test");//получили холст для рисования
const c = canvas.getContext("2d");

c.fillStyle = "brown";
c.fillRect(50, 50, 100, 100);

c.fillStyle = "orange";
c.globalAlpha = 0.5;//прозрачность
//c.translate(50, 50);//смещение
//c.rotate(.52);//поворот
c.scale(1.5, 1.5); //увеличили в полтора раза

c.fillRect(50, 50, 100, 100); */

//рисование мышью

/* const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

const w = canvas.width;
const h = canvas.height;

const mouse = { x: 0, y: 0 };
let draw = false;

//нажатие кнопки мыши
canvas.addEventListener("mousedown", function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;

    draw = true;
    c.beginPath();
    c.moveTo(mouse.x, mouse.y)
});

//перемещение мыши
canvas.addEventListener("mousemove", function (e) {
    if (draw) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
    }
});

//разжатие кнопки мыши
canvas.addEventListener("mouseup", function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    c.lineTo(mouse.x, mouse.y);
    c.stroke();
    c.closePath();
    draw = false;
}); */





