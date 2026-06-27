"use strict";

// дз номер 35

// классы
// задание 1 - площадь круга(площадь земли)

class Earth {
    constructor(name, radius) {
        this.name = name;
        this.radius = radius;
    }

    area() {
        return 4 * Math.PI * (this.radius ** 2);
    }

    areaFormat() {
        let area = this.area();
        let res = Math.round(area / 1000000);
        return res;
    }
}
const earth = new Earth("Земля", 6371);
document.body.innerHTML += `<h2 style='color:orange'>Площадь третий планеты солнечной системы</h2>
<p style='color: darkblue';>${earth.name} имеет радиус ${earth.radius} км. и площадь ${earth.areaFormat()} млн квадратных киллометров</p>`;//тут красивое число для текста :(
console.log("Точные числы");

console.log("Площадь круга(площадь земли ): " + earth.area().toFixed(2));

// задание 2 - треугольник(скучно, появилась ассоциация с треуголной пачкой молока, тот же треугольник, но имеет объем и массу)

class Milk {
    constructor(name, a, b, c, h, plot) {//имя, стороны, высота, плотность материала для вычисления массы
        this.name = name;
        this.a = a;
        this.b = b;
        this.c = c;
        this.h = h;
        this.plot = plot;
    }

    perim() {
        return this.a + this.b + this.c;//перимитре
    }

    poluPerim() {
        return (this.a + this.b + this.c) / 2;//половигка перимитра для вычисления объема
    }

    surfaceArea() {
        let s = this.poluPerim(); //Площадь по формуле S = √(p(p-a)(p-b)(p-c))
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));//пришлось подсмотреть метод sqrt
    }

    oB() {//объём
        return this.surfaceArea() * this.h;
    }

    massa() {
        return this.plot * this.oB();
    }


}

const milk = new Milk("Пачка молока СССР", 15, 15, 15, 20, 2)
document.body.innerHTML += `<h2 style='color:orange'>${milk.name}</h2>
<p style='color: rgb(128, 107, 0)'> Параметры упаковки: </p>
<p style='color: darkblue';>периметр упаковки ${milk.perim()} см.</p>
<p style='color: darkblue';>высоту упаковки ${milk.h} см.</p>
<p style='color: darkblue';> площадь упаковки равна ${Math.round(milk.surfaceArea())} см.</p>
<p style='color: darkblue';>При заданных парамнтрах получаем объем равный ${Math.round(milk.oB())} мл. и массу равную ${Math.floor(milk.massa())} грамм. </p>`;
console.log("Перимитр треугольника: " + milk.perim());
console.log("Площадь треугольника: " + milk.surfaceArea());
console.log("Объем треугольника: " + milk.oB());
console.log("Масса треугольника: " + milk.massa());


