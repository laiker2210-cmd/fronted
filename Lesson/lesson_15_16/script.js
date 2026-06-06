// Строгий режим, не забывать!!!
"use strict";

/* const { links } = require("express/lib/response"); */

// ==================== Лекция 15 от 11.04.2026 ====================
// тема События, картинка есть в папке JS6

// функция для события onLoad в HTML

/* function loadStr() {
    alert("Страница была загружена");
}

let m = document.getElementById("mes");
function over() {
    m.style.color = "red";
}

function out() {
    m.style.color = "yellow";
}

function change() {
    let id = document.querySelector("h2");
    id.style.color = "blue";
}

function randomeBg() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.background = `rgb(${r},${g},${b})`;
}

let newImg = document.getElementById("newImg");

function on() {
    newImg.src = "night.png";
}

function off() {
    newImg.src = "day.png";
} */

//--------------
//второй способ
// событие нужно писать в нижнем регистре onClick = onclick <- вот так

//let but = document.getElementById("but");
// полчучение доступа напрчмую по id, можно но не применяется
/* but.onclick = function(){
    alert("Спасибо");
} */

// аналог

/* function hello() {
    alert("Спасибо");
}
but.onclick = hello;//() скобки ставить в функцию при событии ненужно, будет автоматический вызов иначе */


//---------------
// .container

/* let hex = "0123456789ABCDEF".split("");
console.log(hex);

let button = document.getElementById("btn");
let color = document.querySelector(".color");

button.onclick = function () {
    let hexColor = generateHex();
    console.log(hexColor);
    color.textContent = hexColor;
    document.body.style.background = hexColor;
}

function generateHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
} */

//-------------------
// применение в html - this

/* function chahge(id) {
    id.innerHTML = "Новый текст";
    id.style.color = "red";
} */

/* function setColor(color){
    document.body.style.background = color.className;
} */

//==================== Лекция 16 ====================
// новый способ применения событий
// элемент .addEventListener("тип событий", "функция")

/* let el = document.querySelector("#elem");

el.addEventListener("click", function () {
    el.innerHTML = "Новый текст";
});

el.addEventListener("contextmenu", function(){
    el.style.color = "green";
    el.style.background = "yellow";
}) */

// -------------------------
// div class="container" 55 строка

/* let searchInput = document.querySelector("#searchInput");
let list = document.querySelectorAll("#list li");
searchInput.addEventListener("input", function () {

    let searcTerm = this.value.toLowerCase();// this = searchInput
    // console.log(searcTerm);
    // console.log(list.length);

    for (let i = 0; i < list.length; i++) {
        let item = list[i];

        if (item.textContent.toLowerCase().indexOf(searcTerm) !== -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    }
}) */

// event объект функции содержащий события

//  button стр 73

/* let but = document.querySelector("button");
but.addEventListener("click", function (event) {
console.log(event);

}) */

// input стр в html 73
// event.target.value

/* let buttons = document.querySelectorAll("input");

let handleClick = function (event) {
console.log("Кликнули по:", event.target.value);

}

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleClick)
} */

// координаты курсора мышки

/* document.addEventListener("mousemove", function (event) {
    let c = document.querySelector("#ev");
    let x = event.clientX;
    let y = event.clientY;
    console.log(event);

    c.textContent = "X = " + x + ", Y = " + y;

    c.addEventListener("dblclick", function(event){
        event.target.style.background = "red";
    })
}); */


// стр 83
// всплывающие события / от наиболее вложенного к родительскому
// 3 фазы - фаза захвата(сверху вниз) - фаза цели(на каком элементе произошло событие) - фаза всплытия(событие идет обратно снизу вверх)
// метод .stopPropagation - останавливает поток всплытия события

/* let section = document.querySelector("section");
let div = document.querySelector("div");
let p = document.querySelector("p");

section.addEventListener("click", function () {
    section.style.background = "red";
})

div.addEventListener("click", function (event) {
    div.style.background = "orange";
    event.stopPropagation();
})

p.addEventListener("click", function () {
    p.style.background = "yellow";
}) */

// работа с сылкой/ формой
// .preventDefault

/* let link = document.querySelector("a");

link.addEventListener("clock", function (event) {
    event.preventDefault();
    console.log("Переход по ссылке отменен");

}) */

//
// .removeEventListener

/* let input = document.querySelector("#but");
input.addEventListener("click", handle);

function handle() {
    alert("Спасибо");
    input.removeEventListener("click", handle);
} */

// встроенные функции
// действия с задержкой
//  setTimeout(функция, задержка)

//setTimeout("alert('Текст')", 3000); // 3000 миллисекунд = 3сек

/* setTimeout(hello, 3000, 'Привет', 'друг'); // вписывать вызов функции без () или в ""

function hello(){
    alert('Текст');
} */

/* setTimeout("hello('Привет', 'друг')", 3000);
function hello(h, n){
    alert(h + ", " + n + "!");
} */

/* setTimeout(hello);
function hello(){
    alert('Привет');
} */


//вывод анимированного текста
// .substring(0,0)


/* document.writeln("<div id='dt'>Создание анимированного текста</div>");

let tag = document.querySelector("#dt");
let text = document.querySelector("#dt").innerHTML;
let i = 0;

window.addEventListener("load", animText);

function animText(){
tag.innerHTML = text.substring(0, i);
i++;
console.log(i);
if(i > text.length){
    i = 0;
}
setTimeout(animText, 200);
} */

// дата и вреия
//

/* let d = new Date();
document.writeln(d + "<br>");
document.writeln(d.toDateString() + "<br>");
document.writeln(d.getFullYear() + "<br>");
document.writeln(d.getMonth() + 1 + "<br>");// от 0 до 11
document.writeln(d.getDate() + "<br>");
document.writeln(d.getDay() + "<br>"); // 0 - Воскресенье / 1 - понедельник / 6-суб */


// .getTime() - от начала цыфровой эпохи в мс

/* let d = new Date(2026, 11, 18, 10, 0, 0).getTime(); // или другие
console.log(d); */


//дз. вывести в браузер 12 апреля 2026 года. Воскресенье через массив например

// --------------- продолжение лекции 16 на лекции 17 от 18.04.2026
//setInterval(setColor, 1000)

/* setInterval(setColor, 1000);

function setColor(){
    let x = document.body;
    x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
} */

//действия при нажатии одной кнопки
/* document.writeln("<input type='button' value='Start/Stop'>");
document.querySelector("input").addEventListener("click", st);

function setColor() {
    let x = document.body;
    x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
}

let act, run; //run = undefind - true
function st() {
    if (!run) { // false => true
        act = setInterval(setColor, 1000);
        //run = true;
    } else {
        clearInterval(act);
        //run = false;
    }
    run = !run;
} */

// ниже пример задачи выше

/* document.writeln("<input type='button' value='Start'>");
document.writeln("<input type='button' value='Stop'>");
document.querySelector("input").addEventListener("click", st);
document.querySelectorAll("input")[1].addEventListener("click", st2);

function setColor() {
    let x = document.body;
    x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
}

let act;
function st() {
    act = setInterval(setColor, 1000);
    console.log(act);

}

function st2() {
    clearInterval(act);
} */

// методы дат
// .getHours

/* document.writeln("<div id='text'>Время</div>");

window.addEventListener("load", () => setInterval(time, 1000));

function time() {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }

    let t = hour + ":" + min + ":" + sec;
    document.querySelector("#text").innerHTML = t;
} */

//секундомер

/* document.writeln(
    `<input type="text" id="timer" value="0.0" size="4">
    <input type="button" value="Start/Stop">
    <input type="button" value="Clear">`
);

document.querySelector("input[value='Start/Stop']").addEventListener("click", startTimer);

document.querySelector("input[value='Clear']").addEventListener("click", resetTimer);

let act, run;
function startTimer() {
    if (!run) {
        act = setInterval(incTimer, 1000);
    } else {
        clearInterval(act);
    }
    run = !run;
}

let tsec = 0;
function incTimer() {
    tsec++;
    let t = tsec / 10.0;
    if (tsec % 10 == 0) {
        t += ".0";
    }
    document.getElementById("timer").value = t;
}

function resetTimer() {
    document.getElementById("timer").value = "0.0";
    tsec = 0;
} */


// до конца акции осталось...

/* let countdownElement = document.querySelector(".countdown");
let items = document.querySelectorAll(".countdown-item > h4");

let countdownDate = new Date(2026, 3, 18, 22, 30, 0).getTime();
//console.log(countdownDate);

function getContTime() {
    let now = new Date().getTime();

    let distance = countdownDate - now;

    
    //1sec = 1000ms
    //1min = 60 sec
    //1hour = 60min
    //1day = 20hour
    
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor(distance % oneDay / oneHour);
    let minutes = Math.floor(distance % oneHour / oneMinute);
    let seconds = Math.floor(distance % oneMinute / 1000);

    let values = [days, hours, minutes, seconds];

    items.forEach(function (item, index) {
        item.textContent = values[index];
    })
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Время вышло!</h4>";
    }
}

let countdown = setInterval(getContTime, 1000);

getContTime(); */

//
// квадрат в квадрате, перемещение

let but = document.querySelector("#cl");
but.addEventListener("click", myMove);

function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 50);

    function frame() {
        if(pos == 350){
            clearInterval(id);
        }else{
             pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
        }
       
    }

}

// к задаче. сделать так, чтобы нельзя было запустить второй раз, пока первый квадрат не дошел до конца
// вариант 1 либо через css, прятать кнопку
// вариант 2 через removeElementListen