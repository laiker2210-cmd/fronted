"use strict";

// дз номер 48

//сортировка данных и получечние
let request = new XMLHttpRequest();
request.open("GET", "goods.json");
request.send();

let res = document.querySelector(".result");
let items;
//чтобы небыло повторов на общей странице, такихэ как рублкей рублей или отзывов отзывов
const chena = ["рублей", "рубль", "рубля"];
const otziv = ["отзывов", "отзыв", "отзыва"];

request.addEventListener("load", function () {
    if (request.status == 200) {
        items = JSON.parse(request.response);
        renderItems(items);
        
        document.querySelector(".feet").addEventListener("click", () => {
            let sorted = sortByFeetbacks(items);
            renderItems(sorted);
        });
        
        document.querySelector(".price").addEventListener("click", () => {
            let sorted = sortByPrice(items);
            renderItems(sorted);
        });
    }
});

//выводм
function renderItems(arr) {
    res.innerHTML = "";
    
    arr.forEach(item => {
        let rawPrice = typeof item.price === "string" 
            ? item.price 
            : item.price.new;
        
        let priceNum = +String(rawPrice).replace(/\D/g, "");
        let reviewsNum = +String(item.ratingRevievs).replace(/\D/g, "");
        
        res.innerHTML += `
            <h3>${item.name}</h3>
            <div>Цена: ${priceNum} ${countItems(priceNum)(chena)}</div>
            <div>Отзывы: ${reviewsNum} ${countItems(reviewsNum)(otziv)}</div>
            <hr>
        `;
        //console.log(priceNum);
        //console.log(reviewsNum);
        
    });
}

//сорт цена
function sortByPrice(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    
    temp.forEach(item => {
        let rawPrice = typeof item.price === "string" 
            ? item.price 
            : item.price.new;
        //.....
        item.sortPrice = +String(rawPrice).replace(/\D/g, "");
    });
    
    temp.sort((a, b) => a.sortPrice - b.sortPrice);
    return temp;
}

//сорт отзывы
function sortByFeetbacks(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    
    temp.forEach(item => {
        //как и выше
        item.sortReviews = +String(item.ratingRevievs).replace(/\D/g, "");
    });
    
    temp.sort((a, b) => a.sortReviews - b.sortReviews);
    return temp;
}

//скдоняем
function countItems(num) {
    let n = num % 10;
    let m = num % 100;
    let chislo = n == 1 && m != 11
        ? 1
        : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 : 0;
    return arr => arr[chislo];
}