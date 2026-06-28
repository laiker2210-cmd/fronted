"use strict";

// дз номер 36

// классы
// задание - наследование 

class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get getFullName() {
        return this._surname + " " + this._name;
    }

    get name() {
        return this._name
    }

    get surname() {
        return this._surname
    }

    get rate() {
        return this._rate
    }

    get days() {
        return this._days
    }

    getSalary() {
        return this.rate * this.days
    }
}

const worker = new Worker("Иван", "Иванов", 10, 31)
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());