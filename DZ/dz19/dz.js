"use strict";



let but = document.querySelector("#btn");
but.addEventListener("click", onChange);

function onChange(){
    let ch = document.getElementById("change").value;
    let on = document.getElementById("on").value;

    //let temp = document.getElementById
    let a = document.getElementById("image" + ch); //image1
    let b = document.getElementById("image" + on); //image3

    let temp = a.src;
    a.src = b.src;
    b.src = temp;
}