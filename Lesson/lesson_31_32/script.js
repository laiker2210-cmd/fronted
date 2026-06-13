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

//ДЗ - сделать объект, который будет выводить на экран имя пользователя, который выиграл какойто автомобиль с рандомным цветом(из массива).
// получаем - (Имя) выиграл желтый Шевроле
//вывод информации будет в методе
const obj = {
    имя пользователя
    массив цветов
    марка автомобиля
    функция викторина с выводом
}

вызов функции











