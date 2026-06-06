"use strict";


// дз 12 от 29.03ю2026
// поместить в массив 12 месяцев, через цикл вывезти каждый отдельно через документ врайтлн поместив в div, у каждого div рандомный фон, при обновлении меняется

let month = ["Январь", "Февраль", "Март", "Апрель", "Маф", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let createColor = () => Math.floor(Math.random() * 256);

for (let i = 0; i < month.length; i++) {
    document.writeln(`<div style="background:rgb(${createColor()},${createColor()},${createColor()});padding:15px;margin:1px;font-size: 24px;font-weight:bold;text-align: center; color:black">${month[i]}</div>`);
}