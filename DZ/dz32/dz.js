"use strict";


// дз номер 32

//задача 1
//Конструктор, который создает объекты
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.who = function () {
        document.writeln(`Я ${this.name} мне ${this.age} лет. Я работаю ${this.job}. <br>`);

    };
}

//Создание объектов
let person1 = new Person("Дмитрий", 26, "Дизайнером");
let person2 = new Person("Станислав", 29, "Программистом");
let person3 = new Person("Сергей", 35, "Менеджером");

//Вызов метода
person1.who();
person2.who();
person3.who();
document.writeln(`<hr>`);

//---------------------------------------------------------
//задача 2
//Конструктор Automobile
//* - проверка выводв
function Automobile(color, model, year, manufact) {
    this.color = color;
    this.model = model;
    this.year = year;
    this.manufact = manufact;

    //Возвращает цвет
    this.whatColor = function () {
        //console.log(`Цвет машины: ${this.color}.`); //* 
    };

    //Возвращает информацию об автомобиле
    this.autoInfo = function () {
        document.writeln(`<br> Цвет машины: ${this.color}.<br>
            Модель машины: ${this.model}.<br>
            Год выпуска: ${this.year}.<br>
            Производитель автомобиля: ${this.manufact}.
             <br>`);
        //console.log(`Модель машины: ${this.model}`); //* 
        //console.log(`Год выпуска: ${this.year}`); //* 
        //console.log(`Производитель автомобиля: ${this.manufact}`); //* 
    };
}

//Создание объектов
let car1 = new Automobile("Красный", "Nissan Skyline", 2007, "Nissan");
let car2 = new Automobile("Черный", "Toyota Corolla", 2009, "Toyota");
let car3 = new Automobile("Синий", "Volkswagen Golf", 2009, "Volkswagen");

//Вызов для первого автомобиля
car1.whatColor(), car1.autoInfo();

//Вызов второго автомобиля
car2.whatColor(), car2.autoInfo();

//Вызов третьего автомобиля
car3.whatColor(), car3.autoInfo();
