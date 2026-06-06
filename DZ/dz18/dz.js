"use strict";


// дз 18 от 18.04.2026

let but = document.querySelector("#cl");
but.addEventListener("click", myMove);
let flag;

function myMove() {

    let elem = document.getElementById("animate");
    let pos = 0;
    let id, id2;


    if (!flag) {
        id = setInterval(frame, 8);
    } else {
        id2 = setInterval(reverse, 8);
        pos = 350;
    }
    flag = !flag;

    function frame() {
        if (pos == 350) {
            clearInterval(id);
            but.addEventListener("click", myMove);
        } else {
            but.removeEventListener("click", myMove);
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }

    function reverse() {
        if (pos == 0) {
            clearInterval(id2);
        } else {
            pos--;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}