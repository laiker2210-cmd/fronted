"use strict";

//==================== Лекция 35-36 от 27.06.2026 и 28.06.2026 ====================
// Browser Object Model - продолжение


/* let win = null;

let open = document.querySelector("#show")
open.addEventListener("click", function () {
    //window.open("https://yandex.com");
    win = window.open("str.html",
        "new_window",
        "width=420,height=220,left=200,top=200,resizable=yes"

    );//вторым параметром даем имя новому окно
    console.log(win);

});
//можем в этом же окне закрыть открытую вкладку или окно
let cls = document.querySelector("#close");
cls.addEventListener("click", function () {
    if (typeof win == "object") {
        win.close();
    }

}); */


//----------------------------------------
//window.location - знакомство и работа с location
//служебная информация

//console.log(window.location);
//console.log(location);
//console.log(document.location);
//document.writeln(location);
//alert(location);

//location.href = 'https://pikabu.ru';

/* let open = document.querySelector("#show");
open.addEventListener("click", function(){
    //window.location.assign("https://htmlbook.ru");
    window.location.assign("str.html");
}) */


//-------------------------------------
// <input type="url" id="url">
//.assign
//.replace
//.reload


/* let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let url = document.getElementById("url").value;
    //location.assign(url); //есть возврат полсе перехода
    //location.replace(url); // нет перехода назад, только вперед
    location.reload(url);// перезагрузка вроде, я не понял
}) */
//-----------------------------------------------------------


//-----------------------------------------------------------
//history - хранит историю. управляет историей. перенаправить пользователя

// console.log("В истории " + history.length + " страниц");
// history.back(); //метод возврат
// history.forward(); //метод перейти дальше
// history.go(-1); // перемещение назад
//-----------------------------------------------------------

//-----------------------------------------------------------
//Navigator
//window.navigator.нужноеИмя - свойства того имени...
//console.log(window.navigator);
//-----------------------------------------------------------

//-----------------------------------------------------------
//Screen - характеристики данных экрана и тд
//console.log(window.screen);



//-----------------------------------------------------------
//BOM - закончен
// Обработка исключений

//try, catch, finally
/* try {
    //код, где может произойти ошибка
} catch (error - имя) {
    //выполняется если произошла ошибка
} finally {
    //выполниться в любом случае
} */
//--------------

//перехват ошибок
//SyntaxError - синтактическая ошибка
//console.log("hello);
//-----------------------------

// ReferenceError
/* let a = 5;
//console.log(b);// ReferenceError

try {
    console.log(b);
} catch (error) {
    console.error("Ошибка:", error.message);
}
console.log(a); */
//-----------------------------

//TypeError
//let num = 16;
//console.log(num()); //=TypeError

/* try {
    let num = 16;
    console.log(num());
} catch (e) {
    console.error(e.name); //название ошибки
    console.error(e.message); // сообщение об ошибке
    console.error(e.stack); // вся информации
} */
//-------------------------

//RangeError
//let arr = new Array(-5); //=RangeError

/* try {
    let arr = new Array(-5);
} catch (err) {
    let text = err.name + "<br>" + err.message + "<br>" + err.stack;
    document.getElementById("demo").innerHTML = text;
} */

/* setTimeout(function(){
alert(x);
alert(2 + 2);
}, 10) */


//отказ вывода при setTimeout
/* try {
    setTimeout(function () {
        alert(x);
        alert(2 + 2);
    }, 10)
} catch (e) {
    alert(e.name + ": " + e.message);
} */

//а так работает
/* setTimeout(function () {
    try {
        alert(x);
        alert(2 + 2);
    } catch (e) {
        alert(e.name + ": " + e.message);
    }
}, 10) */
//--------------------------

/* try {
    //alert(x);
    alert(2 + 2);
} catch (e) {
    alert(e.name + ": " + e.message);
} finally {//отработает всегда
    alert("Код в блоке finally");
} */

//----------------------
//<button>Start/Stop</button>

/* let flag = false;
let but = document.querySelector("button");

but.addEventListener("click", function () {
    try {
        if (!flag) {
            document.body.style.background = "yellow";
        } else {
            document.body.style.background = "greenyellow";
        }
    } catch (e) {
        alert(e);
    } finally {
        flag = !flag;
    }
}) */

//--------------------------------
//throw - генерация исключений (выбросить)

/* function divide(a, b) {
    if (b == 0) {
        throw new Error("Делить на 0 нельзя");
    }
    return a / b;
}

let res;
try {
    res = divide(5, 0); //если (5 ,2)  - работать будет
    console.log(res);
} catch (error) {
    //console.log(error.name + ": " + error.message);
    console.log(error.name + ": " + error.message + ", stack: " + error.stack);
} */

//---------------------------------
//<p>Введите число от 5 до 10</p>

/* let but = document.querySelector("button");
but.addEventListener("click", myFunction);

function myFunction() {
    let message = document.getElementById("txt");
    let x = document.getElementById("demo").value;
    message.innerHTML = "";
    try {
        if (x == "") {
            throw "пусто";
        } if (isNaN(x)) {
            throw "не число";
        }
        if (x < 5) {
            throw "слишком мало";
        }
        if (x > 10) {
            throw "слишком много";
        }

    } catch (err) {
        message.innerHTML = "Вы ввели " + err;
    }
} */

//-------------------------------
/* function calculate(a, b) {
    if (typeof a != "number") {
        throw "a - не число";
    }
    return a + (b ** 2) / 3;
}

console.log(calculate(5, 3));
console.log(calculate("5", 3)); */


//--------------------------------------------------
// Новая тема - работа с классами
// Классы

/* function Person(name, age) {
    this.name = name;
    this.age = age;

}

const person1 = new Person("Андрей", 23)
console.log(person1);

// визуальное сравление функции конструктора с классом

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    
    }

    sayHi(){ // метод
        document.writeln("Привет, " + this.name + "!")
    }

}

const person2 = new Person2("Андрей", 23)
console.log(person2);
person2.sayHi();
// alert(typeof Person)
// alert(typeof Person2) */

// еще вариант записи класса

// let User = class {
//     sayHi() {
//         //alert("Привет");
//         alert("Привет");
//     }
// }

// let user = new User();
// user.sayHi();
// alert(MyClass);

//-----------------------------
/* //динамический(класс по запросу)
//малоиспользуемый вариант
function makeClass(text) {
    return class {
        sayHi() {
            alert(text);
        }
    }
}

let User = makeClass("Привет");
new User().sayHi(); */

//----------------------------------
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {// а тут хорошо
        return this.height * this.width;
    }

}
const rectangle = new Rectangle(10, 20);
rectangle.color = "red";
console.log(rectangle);
/* rectangle.hello(){ //метод за пределлами класа это плохо
    console.log("hello");
    
} */
console.log(`Площадь прямоугольника равна: ${rectangle.area()}`);
const rectangle1 = new Rectangle(40, 30);
console.log(rectangle1);


//дома(дз) - создать 2 класса круг и треугольник. нужно найти площадь и периметр двух фигур. круг - земля. треугольник - пачка молока ссср. так же объем и массу попробовать найти





