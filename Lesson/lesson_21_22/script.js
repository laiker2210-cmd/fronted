"use strict";

//==================== Лекция 21-22 от 10.05.2026 ====================
//формы и работа с ними

//let form = document.querySelector("form");
// onsole.log(form.length); //посмотрели сколько элементов внутри формы
//console.log(form.elements); // массив значений данных внутри формы
/*console.log(form.name); // получили значение атрибута
console.log(form.action); // получили путь
console.log(form.method); // получили метод */


// document.form1.style.background = "silver";

// document.forms[0].style.margin = "20px"; // массив форм(псевдомассив) / значение по индексу
// document.forms["form1"].style.padding = "16px"; // значение по атрибуту 
// document.forms.form1.style.border = "2px dotted gray";

//let key = form.elements[0];
//console.log(key);

//let key2 = form.elements["name1"];
//console.log(key2);

/* document.form1.name1.style.color = "blue";
document.form1["name1"].style.background = "aqua";

let txt = document.querySelector("#text1");
let but = document.querySelector("button");

but.addEventListener("click", content);

function content(){
    alert(txt.value);
} */

//
// событие input

/* let text = document.querySelector("input");
let output = document.querySelector("#length");

text.addEventListener("input", function () {
    output.textContent = text.value.length + " / 100";
}) */


// ----- событие submit и .preventDefault() -----
//отображение введенных данных в консоле без перехода

/* let form = document.querySelector("form");
form.addEventListener("submit", function(){
    console.log("Сохраненные данные: " + form.elements.value.value);
    event.preventDefault();
}) */

//сделать проверку введенного логина, пароля и проверка пароля на идентичность с повторным вводом. простой вывод через alert. проверка- поле не заполнено, короткий пароль, пароли совпадают

// Лекция 22 от 16.05.2026
// продолжение работ с прошлой лекции

/* let reg = document.querySelector(".register");
let h2 = document.querySelector("h2");
let win = document.createElement("p");
h2.after(win);

reg.addEventListener("submit", function (event) {
    event.preventDefault();

    let login = reg.login.value;
    let password = reg.psw.value;
    let password2 = reg.psw2.value;
    let errors = "";

    if (login == "" || password == "" || password2 == "") {
        win.className = "red";
        win.innerHTML = "Заполните все поля";
        return;
    }

    if (password != password2) {
        errors += "Пароли не совпадают!<br>";
    }

    if (password.length < 6) {
        errors += "Слишком короткий пароль";
    }

    if (errors == "") {
        win.className = "green";
        win.innerHTML = "Регистрашия прошла успешна";
        reg.login.value = "";
        reg.psw.value = "";
        reg.psw2.value = "";
    } else {
        win.className = "red";
        win.innerHTML = errors;
    }
    console.log(login);
}) */


//---------------
//<div class="wrapper">

/* let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener('keypress', function (event) {

    if (event.key == 'Enter') {
        let li = document.createElement("li");
        let task = document.createElement("span");
        task.classList.add('task');
        task.textContent = input.value;
        task.addEventListener("dblclick", function () {
            let text = this.textContent;
            console.log(text);
            this.textContent = "";
            let edit = document.createElement("input");
            edit.value = text;
            this.append(edit);
            let self = this;
            edit.addEventListener("keypress", function (event) {
                if (event.key == "Enter") {
                    self.textContent = edit.value;

                }
            })
        })

        li.append(task);

        let remove = document.createElement("span");
        remove.textContent = "удалить";
        remove.classList.add('remove');
        remove.addEventListener("click", function () {
            remove.parentNode.remove();
        })

        li.append(remove);

        let mark = document.createElement("span");
        mark.textContent = "Выполнено";
        mark.classList.add("mark");
        mark.addEventListener("click", function () {
            mark.parentNode.classList.add("done"); // можно добавить toggle
            // mark.addEventListener("dblclick", function () {
            //    mark.parentNode.classList.remove("done");
            //})
        })
        li.append(mark);

        list.append(li);
        input.value = "";
    }

}) */

// -----------------------
// <input type="checkbox" id="purple">

/* let checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", function () {
    document.body.style.background = checkbox.checked ? "mediumpurple" : "";
}) */


// ------------------
// <p>Какие языки программирования вы знаете</p>
// метод Array.from

/* let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let checkboxs = document.querySelectorAll("input[name='language']:checked");
    let selected = Array.from(checkboxs).map(checkbox => checkbox.value)
    // преобразовали в массив
    //еслии получаем информацию на подобии массива и другие методы не работают, применяем Array.from
    console.log(checkboxs); // получаем псевдомассив NodeList
    alert("Выбранные языки: " + selected.join(", "));
    console.log(selected.join(", "));
}) */


//-----------------------
// <h3>Выберите три варианта...</h3>

let input = document.querySelectorAll("input[type='checkbox']");// вариант 2
let form1 = document.forms.form1; //для первого варианта (input[i].checked) тип / чекбокс и тд

console.log(input);

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', checkAll);
}


let numChecked;
function checkAll() {
    numChecked = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            numChecked++;
        }
    }


    if (numChecked == 3) {
        for (let i = 0; i < input.length; i++) {
            if (!input[i].checked) {
                input[i].disabled = true;
            }
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = false;
        }
    }

    console.log(numChecked);
}


//---------------------------------
// дз - добавить атрибут value
//---------------------------------
