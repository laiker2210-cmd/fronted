"use strict";

// дз номер 46

//сделать массив строк и эдементов, и разделить по ключам, строки и числв(объекты)

let item = [1,"2",3,"4",5,"6"];

const mas = Map.groupBy(item, n => typeof n === "string" ? "string" : "number")
console.log(mas);