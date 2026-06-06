"use strict";

//const { createElement } = require("react");

//==================== Лекция 18 от 18.04.2026 ====================
// работа с изображениями

/* document.image.border = "1";
document.writeln("<br>ширина изображения: " + document.image.width);
document.writeln("<br>ширина изображения: " + document.image.height);

document.image.width = 200+5;
document.image.height = 200;

document.writeln("<br>**********************")
document.writeln("<br>ширина изображения: " + document.image.width);
document.writeln("<br>ширина изображения: " + document.image.height);

document.image.src = "blue_star.png"; */

// смена изображения при клике

/* document.image.addEventListener("click", cnangeImage);

let flag = "golden"; //0
function cnangeImage(){
    if(flag == "golden"){ //0
        document.image.src = "blue_star.png";
        flag = "blue"; //1
    }else{
        document.image.src = "golden_star.png";
        flag = "golden"; //0
    }
    console.log(flag);
    
} */

// слайдер 
// атрибут name // .getElementDyId //.getElementsByName

/* let array = new Array("2.jpg", "3.jpg", "4.jpg");

document.writeln("<input type='button' value='<' name='left'>");
document.writeln("<img id='sl' src='"+ array[0] +"'>");
document.writeln("<input type='button' value='>' name='right'>");

// правая кнопка через .getElementsByName
document.getElementsByName("right")[0].addEventListener("click", setRight);
document.getElementsByName("left")[0].addEventListener("click", setLeft);
//document.left.addEventListener("click", setLeft); // не всегда работает по имени атрибута

//let mas = ("  Hello  ");
//mas.trim()

let i = 0;
let image = document.getElementById("sl");

function setRight(){
    i++;
    if(i == array.length){
        i = 0;
    }
    image.src = array[i];
}

function setLeft(){
    i--;
    if(i < 0){
        i = array.length - 1;
    }
    image.src = array[i];
} */


//--------------------------------
// часы из картинок

/* let imgTime = ["time/c0.gif", "time/c1.gif", "time/c2.gif", "time/c3.gif", "time/c4.gif", "time/c5.gif", "time/c6.gif", "time/c7.gif", "time/c8.gif", "time/c9.gif"];
let masImg = document.querySelectorAll("#block img");
clock();

function clock() {
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    getImg(hours, min, sec);
    setTimeout(clock, 1000);
}

function getImg(h, m, s) {
    masImg[0].src = imgTime[parseInt(h / 10)];
    masImg[1].src = imgTime[h % 10];

    masImg[3].src = imgTime[Math.floor(m / 10)];
    masImg[4].src = imgTime[m % 10];

    if (s < 10) {
        masImg[6].src = imgTime[0];
        masImg[7].src = imgTime[String(s)[0]];
    } else {
        masImg[6].src = imgTime[String(s)[0]];
        masImg[7].src = imgTime[String(s)[1]];
    }

} */

// -----------------------------------------------

/*// дз, при введении числа в окна поменять картинки местами
 document.querySelector("button").addEventListener("click", function () {
console.log(document.querySelector("input").value);
})
// через промежуточную переменную поменять картинки */


// окончание материала по прошлым 2 или 3 лекциям
// -----------------------------------------------
// объектная модель документов
// DOM
// обращение к основным тегам

//alert(document.documentElement.innerHTML);
//alert(document.head.innerHTML);
//alert(document.body.innerHTML);

//let myTitle = document.querySelector("h1").innerHTML;
//console.log(myTitle);

// .firstChild / .lastChild / .childNodes / .nodeValue / .nodeName / 

//let title3 = document.querySelector("h3").firstChild.nodeValue;
//let title3 = document.querySelector("h3").lastChild.nodeValue;
//let title3 = document.querySelector("h3").childNodes[0].nodeValue;
//console.log(title3);

//document.querySelector("h1").innerHTML = document.querySelector("h3").innerHTML;

//let myTitle = document.querySelector("h1").firstChild;
//alert(myTitle.nodeName); // возврат тега <h1> в верхнем регистре
//alert(myTitle.nodeType); // 1


// добавление новых тегов
// рассмотрим 4 метода более свежих 
// .createElement / .createTextNode / .append / .prepend / .replaceWith
/* 
let elem = document.querySelector("#root");

let tag = document.createElement("p"); // <p></p>
let node = document.createTextNode("Новый текст!!!"); // Новый текст!!!
tag.append(node); // <p>Новый текст!!!</p>

elem.append(tag); // добавляет новый элемент последним дочерним внутри родительского

elem.prepend(tag); // добавляет новый элемент первым дочерним внутри родительского

elem.before(tag); // добавляет новый элемент до выбранного ID тега

elem.after (tag); // добавляет новый элемент после выбранного ID тега

elem.replaceWith(tag); // заменяет новым элементом выбранный ID
*/


// вложенные пункты меню (свернуть/развернуть)
// .nextSibling / .previousSibling


/* let tree = document.querySelector(".tree");
for (let li of tree.querySelectorAll("li")) {
    let span = document.createElement("span"); // <span></span>
    li.prepend(span); // <li><span></span>...</li>
    span.append(span.nextSibling); // 
}

tree.addEventListener("click", function (event) {
    if (event.target.tagName != "SPAN") {
        return;
    }

    let childrenContainer = event.target.parentNode.querySelector("ul");
    if (!childrenContainer) {
        return;
    }

    childrenContainer.hidden = !childrenContainer.hidden;
}) 
*/


//dz
//-----------------------------------------

/* let but = document.querySelector("#btn");
but.addEventListener("click", onChange);

function onChange(){
    let ch = document.getElementById("cgange").value;
    let on = document.getElementById("on").value;

    //let temp = document.getElementById
    let a = document.getElementById("image" + ch); //image1
    let b = document.getElementById("image" + on); //image3

    let temp = a.src;
    a.src = b.src;
    b.src = temp;
} */

//-----------------------------------------

//продолжение работ с текстом, лекция 19 от 25.04.2026
//

/* let list = document.querySelector("ul");

let newItem = document.createElement("li");
newItem.textContent = "Новый элемент списка"; // .textContent работает быстрее без новой разметки html то тогда лучшу innerHTML - "Новый <i>элемент списка</i>"

list.append(newItem); */

// список с добавлением
/* let i = 1;
document.querySelector("#func1").addEventListener("click", chande);
document.querySelector("#func2").addEventListener("click", add);

function chande() {
    let elem = document.querySelector("#list2").lastChild;
    document.querySelector("#list1").append(elem);
}

function add() {
    let elem = document.createElement("li");
    elem.innerHTML = "Water" + i;
    document.querySelector("#list2").append(elem);
    i++;
} */

// ---------------------------
// календарь

/* let calendar = document.getElementById("calendar");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1; // 4

createCalendar(calendar, year, month);


function createCalendar(elem, year, month) {

    let curDate = new Date(year, month - 1,); // 3
    let findDate = new Date(year, month, 0); // 4

    while (curDate.getDay() != 1) {
        curDate.setDate(curDate.getDate() - 1);
    }

    let currentMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let current = document.createElement("h2");
    current.textContent = `${currentMonth[month - 1]} ${year}`;
    elem.append(current);

    let table = document.createElement("table");
    table.innerHTML = `
    <tr>
        <th>пн</th>
        <th>вт</th>
        <th>ср</th>
        <th>чт</th>
        <th>пт</th>
        <th>сб</th>
        <th>вс</th>
    </tr>
    `;
    while (curDate <= findDate) {
        let tr = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            let td = document.createElement("td");
            if (curDate.getMonth() == month - 1) {
                td.textContent = curDate.getDate();
            }
            tr.append(td);
            curDate.setDate(curDate.getDate() + 1);
        }
        table.append(tr);
    }


    elem.append(table);
} */

//---------------------------------------------------------------------
// метод .insertAdjacentHTML(параметры = beforebegin, afterend, afterbegin, beforeend)

/*let div = document.querySelector("#root");
div.insertAdjacentHTML("beforebegin", "<p>До выбранного элемента</p>");
div.insertAdjacentHTML("afterend", "<p>После выбранного элемента</p>");
div.insertAdjacentHTML("afterbegin", "<p>Первым внутри выбранного элемента</p>");
div.insertAdjacentHTML("beforeend", "<p>Последним внутри выбранного элемента</p>");

let child = document.querySelector("#p1");
//child.remove(); // удалил первыйэлемент
let second = document.querySelector("#p2");

second.after(child);// поменяли первичность элементов */


//---------------------------------
//клонирование узлов
// .cloneNode()

/* let ul = document.querySelector("ul");
let li = ul.cloneNode(true); // true по умолчанию false

li.querySelector("li").innerHTML = "Начало клонируемых элементов";
ul.after(li); */


//планеты
// метод .insertAdjacentText(где, текст) - добавляет текст но не теги
// метод insertAdjacentElement(ггде, тип)

let list = document.querySelector(".list"); // ul
list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>")
let listInner = document.querySelector("h2");
listInner.insertAdjacentText("beforeend", "планет"); // добавили слово в конец h2
//list.insertAdjacentHTML("afterend", "<h4>Список </h4>")


list.insertAdjacentHTML("afterbegin", "<li>Солнце</li>");
list.insertAdjacentHTML("beforeend", "<li>Марс</li>");
list.insertAdjacentHTML("afterend", "<hr>");

let hr = document.querySelectorAll("hr")[1];
let h4 = document.createElement("h4");
h4.innerHTML = "Конец списка";
hr.insertAdjacentElement("afterend", h4);

// очищаем список
let idRemove = setInterval(function () {
    let li = document.querySelector("li:last-child");
    if (li === null) {
        clearInterval(idRemove);
        //alert("Список удален");
        list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>")
    } else {
        li.remove();
    }

}, 500);