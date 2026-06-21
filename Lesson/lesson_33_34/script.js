"use strict";

//==================== Лекция 33-34 от 20.06.2026 и 21.06.2026 ====================
// Browser Object Model

//window.alert("Hello")
//window.document.querySelector("h1").style.color = "red";


//<button id="btn">Open</button>...
/* let modal = document.querySelector("#modal");

document.querySelector("#btn").addEventListener("click", function () {
    modal.style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}); */


//---------------------------
// <p id="window"></p>
//методы window: clientWidth и clientHeight - высота и ширина окна без учета прокрутки, без учета padding и margin (размер содержимого окна)
// let w = document.documentElement.clientWidth;
// let h = document.documentElement.clientHeight;

// document.querySelector("#window").innerHTML = "Ширина окна: " + w + ", Высота окна: " + h;
// //короткий вариает
// console.log("Ширина окна:", window.innerWidth);
// console.log("Высота окна:", window.innerHeight);

//------------------------------
//<div class="box">
//search

/* let box = document.querySelector(".box");
// let width = box.clientWidth; // с учетом отступа прокрутки
// let height = box.clientHeight; // с учетом отступа прокрутки
// let width = box.offsetWidth; // без учета прокрутки
// let height = box.offsetHeight; // без учета прокрутки
let width = box.scrollWidth; // с учетом прокрутки
let height = box.scrollHeight; // высота с учетом прокрутки

console.log(width, height);

let hh = box.offsetHeight;
let flag;

document.querySelector("button").addEventListener("click", function () {
    // if (!flag) {
    //     box.style.height = box.scrollHeight + "px"; //hh как вариант
    //     flag = 0;
    // }else {
    //     box.style.height = hh + "px";

    // }
    // flag = !flag;
    //console.log(box.scrollTop);
    // .getBoundingClientRect() - DOMRect - показал все координаты окна
    //console.log(box.getBoundingClientRect().top); // строгое значение координат
    // console.log(box.getBoundingClientRect());
    // console.log("offetTop", box.offetTop);

    
    if(!flag){
        box.style.overflow = "hidden";
    }else{
        box.style.overflow = "";
    }
    flag = !flag;


}) */

//console.log(box.scrollHeight, box.offsetHeight);

//------------
//   <div class="header">

/* window.addEventListener("scroll", myFunction)

function myFunction() {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = winScroll / height * 100;

    document.querySelector("#myBar").style.width = scrolled + "%";

    document.querySelector("img").style.transform = "translate("+ (document.documentElement.clientWidth - 94) * scrolled / 100 +"px, 0px)"
} */


//-------------------------
// Лекция 34 продолжение
// <button id="show">Показать окно</button>
//влияние на документы и окна в другом окне

let win = null;

let open = document.querySelector("#show")
open.addEventListener("click", function () {
    //window.open("https://yandex.com");
    win = window.open("str.html",
        "new_window",
        "width=420,height=220,left=200,top=200,resizable=yes"

    );//вторым параметром даем имя новому окно
    console.log(win);

});
//можем в этом же окне закрыть открытую вкладку или окно
let cls = document.querySelector("#close");
cls.addEventListener("click", function () {
    if (typeof win == "object") {
        win.close();
    }

});



















