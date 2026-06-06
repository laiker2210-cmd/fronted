"use strict";

//==================== Лекция 19 от 25-26.04.2026 ====================
// работа с классами через js
// .classList.add() 

/* let div = document.querySelector("div");
div.className = "alert"; // присвоили диву класс

let activeDiv = document.querySelector(".active");
activeDiv.classList.add("hidden"); // к старому классу добавили второй класс
//activeDiv.classList.remove("hidden"); // удалили второй класс

// .toggle -  если класс есть, то удалит, если нет, то добавит
activeDiv.classList.toggle("hidden");
// .replace
activeDiv.classList.replace("active", "alert"); // заменил классы */

// выделение при нажатии
// при нажатии присвоили класс при нажатии на другое меню, с предыдущего забираем класс и присваиваем новому

/* let menu = document.querySelector(".menu");
let child = document.querySelectorAll(".menu li");

menu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        for (let item of child) {
            item.classList.remove("active");
        }
        event.target.classList.add("active");
    }
}) */

//
//

/* let menuElem = document.getElementById("sweeties");
let titleElem = menuElem.querySelector(".title");

titleElem.addEventListener("click", function(){
    menuElem.classList.toggle("open");
}) */


// рисуем в браузере
// редактор для рисования
// событие .buttons

/* let brush = document.createElement("div");
brush.classList.add("brush");

brush.hidden = true;

document.addEventListener("mouseover", function () {
    //console.log("Событие сработало");
    brush.hidden = false;
});

document.addEventListener("mouseout", function () {
    //console.log("Событие сработало");
    brush.hidden = true;
});

document.addEventListener("mousemove", function (event) {
    //console.log("Событие сработало", event.clientX, event.clientY);
    brush.style.left = `${event.clientX}px`;
    brush.style.top = `${event.clientY}px`;

    //console.log(event.buttons);
    if (event.buttons === 1) {
        let paint = document.createElement("div");
        paint.classList.add("paint")

        paint.style.left = `${event.clientX}px`;
        paint.style.top = `${event.clientY}px`;

        document.body.append(paint);
    }
})

document.addEventListener("mousedown", function () {
    //console.log("Событие сработало");
    brush.style.scale = "0.8";
})

document.addEventListener("mouseup", function () {
    //console.log("Событие сработало");
    brush.style.scale = "1";
})

document.body.append(brush); */


// пользовательские атрибуты через data в html
// .getAttribute / .getAttribute / 

/* let frogImg = document.getElementById("green-frog");

console.log(frogImg.id);
console.log(frogImg.className);
console.log(frogImg.alt);
console.log(frogImg.title);
console.log(frogImg.src);

console.log(frogImg.getAttribute("src"));

frogImg.title = "Новый текст подсказки";

frogImg.setAttribute("src", "4.jpg");
//frogImg.removeAttribute("src");
console.log(frogImg.hasAttribute("src"));

//console.log(frogImg.data-frog); // нельзя через - получение пользовательского атрибута

console.log(frogImg.getAttribute("data-frog")); // так можно / получение пользовательского атрибута


console.log(frogImg.dataset.frog); // получение пользовательского атрибута */

// Фильтрация и пагинация(страницы на сайте)
// карточки

let lengthPath = 5;
let pagination = document.querySelector(".pagination");

let product = document.querySelector(".product-cover");
let data = new Array(18);

let filter = document.querySelector(".buttons");//

for (let i = 0; i < data.length; i++) {
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if (i % 3) {
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node);
    product.append(data[i]);
}

let chunks = splitParts(data);
renderChunks(0);
renderPagination();

pagination.addEventListener("click", e => {
    let item = e.target.closest(".pagination-item");

    if (item) {
        let active = pagination.querySelector('.pagination-item.active'), part;

        if (item.classList.contains("item-prev") || item.classList.contains("item-next")) {
            if (item.classList.contains("disable")) {
                return false;
            }

            part = +active.dataset.part;
            part = item.classList.contains("item-prev") ? part - 1 : part + 1;
            renderChunks(part);

            active.classList.remove("active");

            pagination.querySelector(`.pagination-item[data-part="${part}"]`).classList.add("active");
        } else {
            active.classList.remove("active");
            item.classList.add("active");
            part = +item.dataset.part;
            renderChunks(part);
        }

        let prev = pagination.querySelector(".pagination-item.item-prev");
        let next = pagination.querySelector(".pagination-item.item-next");

        if (prev.classList.contains('disable')) {
            prev.classList.remove("disable");
        }
        if (next.classList.contains('disable')) {
            next.classList.remove("disable");
        }

        if (part === 0) {
            prev.classList.add("disable");
        }

        if (part === chunks.length - 1) {
            next.classList.add("disable");
        }
    }
})



function splitParts(arr) {
    if (arr.length > lengthPath) { // 18 > 5
        let chunks = [];

        for (let i = 0; i < arr.length; i += lengthPath) {
            chunks.push(arr.slice(i, i + lengthPath));
        }

        return chunks;
    } else {
        return arr;
    }
}

function renderChunks(part) {
    if (part >= 0 && part <= chunks.length) {
        product.innerHTML = "";
        chunks[part].map(elem => product.append(elem));
    } else {
        return false;
    }
}

function renderPagination() {

    if (chunks.length > 1) {
        chunks.map((elem, i) => pagination.insertAdjacentHTML("beforeend", `<li class='pagination-item${i === 0 ? " active" : ""}' data-part="${i}"> <a href="#">${i + 1}</a></li>`));

        pagination.insertAdjacentHTML("afterbegin", "<li class='pagination-item item-prev disable'><a href='#'>prev (Назад)</a></li>");

        pagination.insertAdjacentHTML("beforeend", "<li class='pagination-item item-next'><a href='#'>next (Вперед)</a></li>");
    }
}

//filter

filter.addEventListener("click", e => {
    let btn = e.target.closest(".btn");
    pagination.innerHTML = "";
    if (btn) {
        if (btn.dataset.filter !== "all") {
            chunks = splitParts(data.filter(elem => elem.classList.contains(btn.dataset.filter)));
        } else {
            chunks = splitParts(data);
        }
    }

    renderChunks(0);
    renderPagination();
})
