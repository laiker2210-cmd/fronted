"use strict";

// дз номер 49

//дз, todos на сайте. complited которые true

document.querySelector("#load").addEventListener("click", load);
async function load() {
    try {
        let url = "https://jsonplaceholder.typicode.com/todos";
        let response = await fetch(url);
        let data = await response.json()

        let html = data
            .filter(item => item.completed === true)
            .map(item => `<li>Пользоватедь: ${item.userId} выполнил задачу № ${item.id} (${item.title}) </li>`);

        //document.querySelector("#list").insertAdjacentHTML("afterbegin", html.join(" ")); - использовать при если есть фильтры, на разные выводы, без перезаписи
        document.querySelector("#list").innerHTML = html.join("");
    } catch (error) {
        console.log("Ошибка при загрузки", error);
    }
};