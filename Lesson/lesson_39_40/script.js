"use strict";

//==================== Лекция 39-40 от 01.08.2026 и 02.08.2026 ====================

// JSON - новая тема. Предоставление (нотации) объектов JS.
// "ключ" : значение
//методы
// JSON.stringify() - преобразует объект JS в объект JSON (сериализация)
// JSON.parse() - делает обратное действие (десериализация)

// let info = `{
//   "first_name": "Ivan",
//   "age": 36,
//   "mother": {
//     "name": "Olga",
//     "age": 58
//   },
//   "children": [
//     "Kate",
//     "Igor",
//     "Misha"
//   ],
//   "married": true,
//   "dog": null
// }`;

// console.log(info);

// let person = JSON.parse(info); // - десериализация
// console.log(person);

// person.first_name = "Petr";
// document.writeln(person.first_name + "<br>");

// delete person.age;

// for(let i in person){
//     document.writeln(i + ": " + person[i] + "<br>");
// }

// person.work = "programmer";
// document.writeln("<br>");

// for(let i in person){
//     document.writeln(i + ": " + person[i] + "<br>");
// }
// document.writeln("<br>");
// delete person.children[1]; //удалил элемент но не поменял позицию в массиве
// document.writeln(person.children + "<br><br>");

// //методы массива

// document.writeln("<br>");
// delete person.children.splice(1,1); // а тут сделал как нужно
// document.writeln(person.children + "<br><br>");


// person.children.push("Ira"); //в конец массива дрбаыили новое имя
// document.writeln(person.children + "<br><br>");


// // сериализация объекта

// let personString = JSON.stringify(person);
// console.log(personString);


//------------------------------------------------------------------

/* const user = {
    name: "Вадим",
    surname: "Ветров",
    age: 23,
    city: "Москва"
};

//const json = JSON.stringify(user);
//console.log(json);

const json = JSON.stringify(user, ["name", "age"], 2);//передать ключи для преобразования + формат данных(пробелы отступв) - передали 3 параметра вывода
console.log(json); */

//---

// function parseJSON(jsonString, value = {}) {
//     try{
//         return JSON.parse(jsonString)
//     }catch(error){
//         console.log("Failed to pase JSON:", error.message);
//         return value;
        
//     }
// }

// const validJSON = '{"name": "Igor", "age": 30}';
// const invalidJSON = '{"name": "Igor", age: "30"}';

// console.log(parseJSON(validJSON));
// console.log(parseJSON(invalidJSON));


//----------------------------------------------------------------
// cookie (куки)

//проверка включены куки или нет

/* if(navigator.cookieEnabled === false){
    alert("Cookies отключены")
}else{
    alert("Cookies включены")
} */

document.cookie = "user=Сергей";
alert(document.cookie);


















