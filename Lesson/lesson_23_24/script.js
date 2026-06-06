"use strict";

//==================== Лекция 23-24 от 17.05.2026 и 23.05.2026 ====================
// продолжаем формы прошлых лекций

//вариант 1 
/* let choose = document.querySelector("input[type='button']");

choose.addEventListener("click", chooseColor);

function chooseColor() {
    let f = document.form3;

    //console.log(f.length); // отмечает больше
    //console.log(f.radio2.length); // отметил нужное

    for (let i = 0; i < f.radio2.length; i++) {
        if (f.radio2[i].checked) {
            document.body.style.background = f.radio2[i].value;
        }
    }
}*/

//вариант 2
/* let choose = document.querySelector("input[type='button']");
choose.addEventListener("click", chooseColor);

function chooseColor() {
    let f = document.form3;
    document.body.style.background = f.radio2.value;
} */

//вариант 3
// событие 'change'
/* let f = document.form3;
for (let i = 0; i < f.radio2.length; i++) {
    f.radio2[i].addEventListener('change', chooseColor)
}

function chooseColor(event) {
    document.body.style.background = event.target.value;
}  */


//----------------

/* let language = document.querySelector("#language");
let languageOptions = ["Python", "JavaScript", "C++", "Java"];

language.innerHTML = languageOptions.map(language => `
    <div>
       <input type="radio" name="language" value="${language}" id="${language}">
       <label for="${language}">${language}</label>
    </div>
`).join(" ");

let radioButtons = document.querySelectorAll('input[name="language"]');
for (let radioButton of radioButtons) {
    radioButton.addEventListener("change", showLestedLanguage);
}

function showLestedLanguage() {
    if (this.checked) {
        document.querySelector("#languageOutput").textContent = `Вы выбрали: ${this.value}`;
    }
} */

//---------------------------
// <!--  <select id="city"> выпадающий список
// для выпадающего списко подходит лучше change чем click
//свойство select
//1 select.options - коллекция из подэлементов <option>
//2 select.value - значение выбранного в данный момент <option>
//3 select.selectedIndex - номер (индекс) выбранного <option>
/* let city = document.querySelector("#city");

city.addEventListener("change", setImage);


function setImage() {
    let cities = city.selectedIndex; // возвращает номер (индекс)
    let options = city.options; //возвращает псевдомассив, не подходит для метода .map
    let code = options[cities].value; // возвращает номер
    console.log(code);

    let div = document.querySelector("#image");
    div.innerHTML = "<img src='img/"+code+".png'>"
} */


// --------------------------
// <select multiple>

/* let select = document.querySelector("select");
let output = document.querySelector("#output")

select.addEventListener("change", function () {
    let number = 0;
    for (let i = 0; i < select.options.length; i++) {
        let option = select.options[i];
        if (option.selected) {
            number += Number(option.value);
        }
    }

    output.textContent = number;
}) */

//----------------------------
// <select id="countries">

/* let countries = document.querySelector("#countries");
let ruCities = document.querySelector("#ru");
let byCities = document.querySelector("#by");


countries.addEventListener("change", function () {
    document.querySelector(".cities.active").classList.remove("active");

    if(this.value == 'ru'){
        ruCities.classList.add('active');
    }
    if(this.value == 'by'){
        byCities.classList.add('active');
    }
}) */


//-------------------------
// new Option()
//selected

/* let option = new Option("Текст", "value", true, true) // true true = selected
console.log(option); */


//--------------------------
// <div id="container">

/* let btnAdd = document.querySelector("#btnAdd");
let btnRemove = document.querySelector("#btnRemove");
let taskInput = document.querySelector("#task");
let taskList = document.querySelector("#taskList");

btnAdd.addEventListener("click", e => {
    e.preventDefault();

    if (taskInput.value.trim() == "") {
        alert("Введите название задачи")
        return;
    }

    let option = new Option(taskInput.value, taskInput.value);
    taskList.add(option, undefined);
    taskInput.value = "";
    taskInput.focus();
})

btnRemove.addEventListener("click", e => {
    e.preventDefault();

    let selectedTask = [];

    for (let i = 0; i < taskList.options.length; i++) {
        selectedTask[i] = taskList.options[i].selected;
    }

    let index = taskList.options.length;
    while (index--) {
        if (selectedTask[index]) {
            taskList.remove(index)
        }
    }
}) */


//-----------------------------
//  <input type="file">

/* let input = document.querySelector("input");
input.addEventListener("change",function(){
    if(input.files.length > 0){
        let file = input.files[0];
        console.log("Вы выбрали:", file.name);
        if(file.type){
            console.log("Тип файла", file.type);
            
        }
        
    }
}) */


//----------------------
//небольшой калькулятор

let gas = document.querySelector(".gallon");
let petrol = document.querySelectorAll(".petrol");
let res = 1;

for (let i = 0; i < petrol.length; i++) {
    petrol[i].addEventListener("click", function () {
        let gallons = gas.value;
        let amount = this.getAttribute("data-pet");
        
        res = gallons * amount;
        let sum = document.querySelector(".sum");
        sum.innerHTML = res;
    })
}

//дз. сделать калькулятор на свободную тему(калькулятор стоимости мебели с выпадающими списками(каталог товаров - студья и тд))










