"use strict";

//==================== Лекция 31-32 от 13.06.2026 и 14.06.2026 ====================

// продолжение лекций 29-30
// работа с объектами

// let car = {
//     name: "Volvo",
//     year: 2019,
//     colors: {
//         first: "yellow",
//         second: "blue"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"
//     ],
//     hello: function(){
//         document.writeln("Привет"  + "<br>");
//     }
// }

// console.log(car);
// document.writeln(car.name + "<br>");
// document.writeln(car.name + " " + car.color[1] + " " + car.colors.second + "<br>"); // - это свойство!!!
// car.hello(); // - это метод!!!


// функции(методы) объектов
// .filter, .map и другие

// let fill = car.color.filter(function(elem){
//     return elem.length < 5;
// })
// document.writeln(fill + "<br>");

//let mas = car.color.map(function(elem, index, all){
//return "color: " + elem;
//return index + ") " + elem + "<br>";
//    return index + ") " + elem + " массив: " + all +  "<br>";
//})
/* document.writeln("<br>" + mas + "<br>");

let mas1 = car.color.map(elem => elem.toUpperCase());
document.writeln("<br>" + mas1 + "<br>"); */

//let mas2 = car.color.map(function(elem){ // методом .map обратиься к colors не получиться напрямую
// let mas2 = Object.keys(car.colors).map(function(elem){ //получили доступ черех Object.keys
//     return elem + ": " + car.colors[elem] + "<br>";
// })
// document.writeln("<br>" + mas2 + "<br>");

// let calc = {
//     num1: 5,
//     num2: 6,
//     calculate: function(){
//         //console.log(num1);
//         //console.log(calc.num1); - так не принято
//         this.res = this.num1 * this.num2;// - вот так принято (this)

//     }
// }

// calc.calculate();
// document.writeln(calc.res);

//-----------------------


//let x = 15, y = 10;

// старый подход
// let coords = {
//     x: x,
//     y: y,
//     calcSq: function () {
//         document.writeln(this.x * this.y);
//     }
// }

// новый стандарт
// let coords = {
//     x, y,
//     calcSq() {
//         document.writeln(this.x * this.y);
//     }
// }
// coords.calcSq();

// деструктуризация

// let user = {
//     //login: "client",
//     login: {
//         firstName: "Kate",
//         lastName: "Pavlova"
//     },
//     psw: "qwerty",
//     role: "guest"
// }

//длиннее способ
//let log = user.login.firstName;
//console.log(log);

// короче способ
//let { login, psw, role } = user;
//document.writeln(login + " " + psw + " " + role);
//let { login:{firstName, lastName}, psw, role } = user;
//document.writeln(firstName + " " + lastName + " " + psw + " " + role);

//let { login:{firstName: f, lastName: l}, psw, role } = user; // псевдонимы
//document.writeln(f + " " + l + " " + psw + " " + role);

//let { login:{firstName: f, lastName: l}, ...rest } = user; //сокращение ненужного
//document.writeln(f + " " + l + " " + rest.psw + " " + rest.role);

/* //ДЗ - сделать объект, который будет выводить на экран имя пользователя, который выиграл какойто автомобиль с рандомным цветом(из массива).
// получаем - (Имя) выиграл желтый Шевроле
//вывод информации будет в методе
const obj = {
    имя пользователя
    массив цветов
    марка автомобиля
    функция викторина с выводом
}
вызов функции */
//------------------------------------------------------------------------------

// функция-конструктор (инициализация приходящих переменных)
// ООП

/* //старый метод
function Car(name, year) { //имя функции и объекта - Car
    this.name = name; //this.name = n; - тоже работает
    this.year = year;
}

Car.prototype.getAge = function(){
    return new Date().getFullYear() - this.year;
}

Car.prototype.color = "black";

let ford = new Car("Ford", 2019);
console.log(ford);
console.log(ford.getAge());
ford.color = "red";
console.log(ford.color);


let bmw = new Car("BMW", 2017)
console.log(bmw);
console.log(bmw.getAge());
console.log(bmw.color); */

//более новый способ

/* function User(pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.dasplayInfo = function(){
        document.writeln("Имя: " + this.name + "; возраст: " + this.age + "<br>")
    }
}

let tom = new User("Tom", 26);
tom.dasplayInfo(); */

//прмер использования практический
//form name="form1">

/* let form = document.form1;
form.addEventListener("submit", event => {
    event.preventDefault();

    let title = form.title.value;
    let text = form.text.value;
    let description = form.description.value;
    //console.log(title, text);
    saveForm({ title, text, description}); //{ title: title, text: text }
})

//function saveForm(obj){ //{title, text, description} 
function saveForm(obj){
let {title, text, description} = obj; //деструктуризация

    let formData = {
        data: new Date().toLocaleDateString(), //...obj
        title, //title: obj.title,
        text, // text: text, 
        description
    }

    console.log("Form Data: ", formData);

} */

//практика, небольшая игра - одинаковые картинки
// ------------------- ИГРА -------------------
//<div class="game-board"></div>

/* let cardArray = [
    { name: 'card1', img: 'c0.gif' },
    { name: 'card2', img: 'c1.gif' },
    { name: 'card3', img: 'c2.gif' },
    { name: 'card4', img: 'c3.gif' },
    { name: 'card5', img: 'c4.gif' },
    { name: 'card6', img: 'c5.gif' },
    { name: 'card7', img: 'c6.gif' },
    { name: 'card8', img: 'c7.gif' },
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createBoard() {
    let gameBoard = document.querySelector(".game-board");
    let shuffledCadrs = [...cardArray, ...cardArray].sort(() => 0.5 - Math.random());
    console.log(shuffledCadrs);

    shuffledCadrs.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name = card.name;

        let cardImage = document.createElement("img");
        cardImage.src = card.img
        cardElement.append(cardImage);

        cardElement.addEventListener("click", flipCard)

        gameBoard.append(cardElement);
    })
}

function flipCard() {
    if (lockBoard) {
        return;
    }

    if (this === firstCard) {
        return;
    }
    this.classList.add("flipper");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disabledCard();
    } else {
        unplipCards();
    }
}

function disabledCard() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoar();
}

function unplipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipper");
        secondCard.classList.remove("flipper");
        resetBoar();
    }, 1000);
}

function resetBoar() {
    [firstCard, secondCard, lockBoard] = [null, null, false]
}

createBoard(); */
// ------------------- ИГРА ------------------- //


//значение const при работе с массивами и объектами
//const week = 7;
// week = 9; нельзя
/* const week = {
    one1: 1,
    one2: 2,
    one3: 3,
    one4: 4
};
week.one4 = 5; //можно
console.log(week); */

//ссылочные данные
/* //метод .assign - создает копию объекта но уже подругим именем
const book = {title: "Дюна"};
//const anotherBook = {title: "Дюна"}; //false
//const anotherBook = book; // true, а после исрользования метода .assign будет false
const edition = {published: 2025, title: "Вьюга"};
const anotherBook = Object.assign({}, book, edition); // 
console.log(book == anotherBook);// а вот так уже добавили только в один объект

anotherBook["price"] = 315; // добавилось в оба объекта
console.log(book);
console.log(edition);
console.log(anotherBook); */



// let a = 5;
// let b = 5;
// console.log(a == b);


//продолжение работы с объектами - Лекция 33 от 20.06.2026
// способы
// ключ и значение
// .fromEntries

/* const personData = [["name", "Сергей"], ["age", 37]]; // массив массивов
console.log(personData);
const person = Object.fromEntries(personData); // объект

console.log(person);
*/

//----

/* const first = null;
const second = {name: "Bob"};
function printName(person){
    //console.log(person.name); // ощибка  - null
    console.log(person?.name); // ? может быть, может не быть - получим undefined
}
printName(second);
printName(first); */

//----------

/* const first = null;
const second = {
    name: "Bob",
    sayHi() {
        console.log(`Hi! I am ${this.name}`);
    }
};

function printName(person) {
    console.log(person?.name);
}

printName(second);
printName(first);
second.sayHi();
first?.sayHi(); // ? может быть, может не быть - и нет ошибки при вызове */

//-------
// запрет на расширение объекта(key) - .preventExtensions
/* const obj = {name: "Ирина"};
Object.preventExtensions(obj);
//obj.age = 25; // TypeError
console.log(obj); */

// запрет на изменеие свойства(значение ключа(key)) - .freeze
/* const obj = {name: "Ирина"};
Object.freeze(obj); 
obj.name = "Марина"; // TypeError
obj.age = 25; // TypeError - .freeze не дает делать вобще никакие изменения
console.log(obj); */


//----------------------------------------------------------------------------
// Контекст

/* let person = {
    age: 24,
    name: "Irina",
    job: "Programmer",
    dispayInfo: function (ms) {
        setTimeout(() => { // стрелочная функция не создает отдельную зону видимости
            console.log(this);
            
            console.log("name", this.name);
            console.log("age", this.age);
            console.log("job", this.job);
        }, ms)

    }
}

person.dispayInfo(2000); */

//---
// .bind - позволяет достать информацию из области видимости выше
/* let person = {//это одна зона видимости
    age: 24,
    name: "Irina",
    job: "Programmer",
    dispayInfo: function (ms) {
        console.log(this);
        //let self = this; // для видимости ниже в локальной зоне видимости

        setTimeout(function () {//другая облась видмости и this уже не видит прошлую
            //console.log(self);
            console.log(this);
            console.log("name", this.name);
            //console.log("name", self.name);
            console.log("age", this.age);
            //console.log("age", self.age);
            console.log("job", this.job);
            //console.log("job", self.job);
        }.bind(this), ms); // взяли контекс с зоны видимости выше
    }
}
//console.log(this); // window
person.dispayInfo(2000); //window */

//----------------------
// через стрелочную функцию .this не србатает, так как у неё нет своего контекста
/* let h = document.querySelector("h1");
h.addEventListener("click", function(){
    this.style.color = "red";
}) */






































