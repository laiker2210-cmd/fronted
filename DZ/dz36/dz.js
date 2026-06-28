"use strict";

// дз номер 36

// классы
// задание - наследование 

//родительский
class Worker {
    constructor(name, surname, rate, days) {
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
    }

    get getFullName() {
        return this._surname + " " + this._name
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

const worker = new Worker("Василий", "Степанов", 10, 31)
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

//дочерний

class Boss extends Worker {
    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days)
        this.workers = workers
    }

    getSalary() {//переназначим
        return (this.rate * this.days) * this.workers
    }
}

const boss = new Boss("Иван", "Иванов", 10, 31, 10);
console.log(boss.name);
console.log(boss.surname);
console.log(boss.getFullName);
console.log(boss.rate);
console.log(boss.days);
console.log(boss.workers);
console.log(boss.getSalary());







