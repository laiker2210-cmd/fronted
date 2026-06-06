"use strict";


// дз номер 21 от 26.04.2026

let lengthPath = 5;
let pagination = document.querySelector(".pagination");

let product = document.querySelector(".product-cover");
let data = new Array(18);


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