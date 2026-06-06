"use strict";

// дз. пользователь с клаваиатуры вводит набор чисел. необходимо проверить кратное ли число трем, если да, то сохранить в массив
let arr = new Array(9);
let res = [];
console.log(res);
console.log(arr);


function mas() {
    for (let i = 0; i < arr.length; i++) {
        let num = +prompt("Введите числа: " + (i + 1));
        arr[i] = num;
        if (num % 3 === 0) {
            res.push(num);
        }
        else{

        }
    }
    document.writeln(res);
    console.log(res[1] + res[2]); //проверял работает ли массив
    
}

mas();
document.writeln("<br>" + "Числа кратные 3 " + res);