"use strict";


// дз номер 31

//Свойства объекта

const lotery = {
    //Свойства объекта
    name: "Алексей", //Имя пользователя
    colors: ["красный", "синий", "желтый", "зеленый", "черный", "белый"], //Массив цветов
    brand: "Шевроле",//Марка
    marka: "Камаро",

    //Метод объекта
    play: function () {
        //Генератор цвета
        let randomIndex = Math.floor(Math.random() * this.colors.length);

        //Цвет по индексу
        let winningColor = this.colors[randomIndex];

        //Вывод сообщения
        //Ненавистные шаблонные строки для удобства

        if (randomIndex === 2) {
            console.log(`${this.name} ты выиграл "Бамблби" - ${winningColor} ${this.brand} ${this.marka}!`);
            
        } else {
            console.log(`${this.name} выиграл ${winningColor} ${this.brand} ${this.marka}!`);
        }
    }
};

//Вызов функции. Не забывать!!!
lotery.play();
