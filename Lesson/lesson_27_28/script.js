"use strict";

//==================== Лекция 27-28 от 30.05.2026 и 31.05.2026 ====================

// шаблоны регулярных выражений, продолжение лекций 25-26
// особенности метода .replace
// 

//document.writeln("aaa".replace("a", "b") + "<br>");
//document.writeln("aaa".replace(/a/g, "b") + "<br>");

// let text = "I kill you black dog";
// document.writeln(text + "<br>")
// let exp = /book|kill|black/ig;
// text = text.replace(exp, "****");
// document.writeln("<p>" + text + "<p>");


// жадные или ленивые квантификаторы
// до /<.+>/g; - ;жадный/ после /<.+?>/g; - Ленивый
/* let st = "<p>Hello world<p>";
let reg = /<.+?>/g;
console.log(st.match(reg));; */

/* let st = "1231555884";
let reg = /\d{2,4}?/g; //без ? берет по максимуму с ? по минимуму
console.log(st.match(reg));; */
/* 
*?, +?, ??
{2,4}?, {2,}?, {2}?
*/

/* //тоже вариант поиска
let st = "<p>Hello world<p>";
let reg = /<[^>]+>/g;
console.log(st.match(reg));; */

/* let st = "... <!-- My coment text --> .. <!----> ..";
let reg = /<[^>]+>/g;
alert(st.match(reg));;  */

/* //найти 3 тега без пустого
let st = "<> <a href='#'> <input type='radio' checked> <b>";
//let reg = /<[^>]+>/g;
let reg = /<[^>]+>/g;
alert(st.match(reg));;  */

// ()
//let html ="Дмитрий Васильев";
//let exp = /(Дмитрий) Васильев/
//document.writeln(html.match(exp) + "<br>");


// let html ="site.com my.site.com";
// let exp = /(\w+\.)+\w+/g
// document.writeln(html.match(exp) + "<br>");

/* let st = "<h1> Hello word! </h1>";
let tag = st.match(/<(.*?)>/); // = <h1>,h1
alert(tag[0]);
alert(tag[1]); */


/* //
let date = "2026-05-30";
let reg = /^(\d{4})-(\d{2})-(\d{2})$/;
let match = date.match(reg);
let format = match[3] + "." + match[2] + "." + match[1];
console.log(format); //30.05.2026 */


/* // вложенные группы
let st = "<span class='my'>";
let exp = /<(([a-z]+)\s*([^>]*))>/;
let res = st.match(exp);
console.log(res[0]);
alert(res[0]); */

// именованные группы
/* let date = "2026-05-30";
let reg = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/;
let match = date.match(reg).groups;
let format = match[3] + "." + match[2] + "." + match[1];
console.log(format); //undefined
console.log(match.day + "." + match.month + "." + match.year);//30.05.2026 */

/* let date = "2026-05-30 2026-10-15";
let reg = /(?<year>[0-9]{4}])-(?<month>\d{2})-(?<day>\d{2})/g;
//let match = date.match(reg).groups;

let res = date.matchAll(reg);
console.log(res);

for (let result of res) {
    let {year, month, day} = result.groups;

    document.writeln(`${day}.${month}.${month}`);
} */


/* //------------------------------------------------
// дз

let st = "-1.5 0 2 -123.4";
let reg = /-?\d+(\.\d+)?/g;
document.writeln(st.match(reg)); //должны получить -  -1.5,0,2,-123.4
//ищет любые числа, с тосчкой, отрицательные и положительные
//------------------------------------------------ */


// ----------------------------------------------------
// вывод местами
/* let st = "John Smith";
let re = /(\w+)\s(\w+)/;
document.writeln(st.replace(re, "$2 $1")); */


// Пробел перед каждой большой буквы
/* function add(str) {
    return str.replace(/([A-Z])/g, " $1")
}
console.log(add("camelCase")); // camel Case
console.log(add("helloWorldItIsMe")); // hello World It Is Me */


// выбрали цвет с текста и передали в код
/* let text = "red color: #F00 and green: #090";
let ex = /(#[a-f0-9]{3})/ig;
text = text.replace(ex, "<span style='color:$1'>$1</span>")
document.writeln("<p>" + text + "</p>"); */

// работа с ссылками, пример
/* let text = "I like google.com and yandex.com.ru";
let ex = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/ig;
text = text.replace(ex, "<a href='https://$1'>$1</a>")
document.writeln("<p>" + text + "</p>"); */


/* // номер телефона, форматировнаие по нашему шаблону 7 (ХХХ) ХХх-ХХ-ХХ
function formatPhoneNumber(phone) {
    let cleaned = phone.replace(/\D/g, "");
    return cleaned.replace(/(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
}
console.log(formatPhoneNumber("+7 999 1234567"));
console.log(formatPhoneNumber("8 999 1234567"));
console.log(formatPhoneNumber("999 1234567"));
console.log(formatPhoneNumber("79991234567"));
console.log(formatPhoneNumber("7(999) 123 45 67")); */

//$&
// нашли ключевое значени и добавили к нему текст
//document.writeln("Люблю HTML".replace(/HTML/, "$& и JavaScript"));

// какая кавычка ["'] открылась, такая и закрылась
// обратная ссылка в шаблоне по номеру
/* let st = `Он сказал: "I'm at home".`;
//let re = /(["'])(.*)\1/g;
let re = /(?<quote>["'](.*))\k<quote>/g;
document.writeln(st.match(re) + "<br>"); // "I'm at home" */


//------------------------------
// опережающие и ретроспективные проверки
// позитивная опережающая проверка
// X(?=Y) х, если за ним следует y
//let st = "1 курс стоит 30 руб";
//document.writeln(st.match(/\d+(?= руб)/g) + "<br>");
// негативная опережающая проверка
//X(?!Y) х, если за ним НЕ следует y
//document.writeln(st.match(/\d+(?! руб)/g) + "<br>");


// позитивная ретроспективная 
// (?<=Y)X x, если следует за y
//let st = "1 курс стоит $30 руб";
//document.writeln(st.match(/(?<=\$)\d+/g) + "<br>");
// негативная ретроспективная
// (?<!Y)X x, если НЕ следует за y
//document.writeln(st.match(/(?<!\$)\d+/g) + "<br>");

//- примеры
// опережающая проверка
//.* - любое колличество симаолов перед ним
//(?=.*... - шаблон)
//document.writeln("Hello, Error".match(/^(?=.*[eE][rR][rR][oO][rR]).{1,50}$/))
//проверка пароля на разнообразие
/* function validPassword(psw) {
    let pswEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    return pswEx.test(psw);
}
console.log(validPassword("QWer23!#"));
console.log(validPassword("qwer23!#")); */
//------------------------------------------
//

//практическое применение
/* 
Задача:
Написать приложение подсвечивающее e-mail адреса в тексте.
Требования:
- Возможность добавлять сообщения с email-адресами как в гостевой книге
- Сообщения могут содержать адреса электронной почты
- Все e-mail подсвечиваются синим цветом
* Замену текста по регулярному выражению можно производить при помощи метода строки replace:
*/
/* let but = document.querySelector("#but");
but.addEventListener("click", smsUser);

function smsUser() {
    let name = document.querySelector("#your_name").value;
    let text = document.querySelector("#text").value;
    let regExpBBMail = /([\w.]+@[0-9a-z_^.]+\.[a-z]{2,3})/ig;

    text = text.replace(regExpBBMail, "<span style='color:red'>$1</span>")

    //document.writeln(`
        //<fieldset>
            //<legend>${name}</legend>
            //<div>${text}</div>
       // </fieldset>`) 
        
    
    let form = document.querySelector("form")
    form.insertAdjacentHTML("afterend", `
        <fieldset>
            <legend><b>${name}</b></legend>
            <div>${text}</div>
        </fieldset>`);
} */

//

/* let st = "  текст строки первой   ";
st = st.replace(/^\s+|\s+$/g, "");
console.log(">" + st + "<"); */


/* let date = "25-10-2026, 14/09/2025, 10.03.2022, 12:02:2014";
let re = date.split(/[-\/,.:]/);
console.log(re); */


//<!-- ------------пример------------- -->

/* let but = document.querySelector("#but");
but.addEventListener("click", smsUser);

function smsUser() {
    let name = document.querySelector("#your_name").value;
    let text = document.querySelector("#text").value;
    //let regExpBBMail = /([\w.]+@[0-9a-z_^.]+\.[a-z]{2,3})/ig;
    let regExpBBMail = /(.*?)<(b|u|i|s|h1|p)>(.*?)<(\/\2)>(.*?)/ig;

    //text = text.replace(regExpBBMail, "<span style='color:red'>$1</span>")
    text = text.replace(regExpBBMail, "$1 <span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt;$4&gt;</span> $5")
    document.writeln(`
    <fieldset>
    <legend>${name}</legend>
    <div>${text}</div>
    </fieldset>`) 


   //let form = document.querySelector("form")
    //form.insertAdjacentHTML("afterend", `
      //  <fieldset>
       //     <legend><b>${name}</b></legend>
        //    <div>${text}</div>
        //</fieldset>`);
} */

//-------------------------------------------------------------------------------
//работа с githab
console.log("Вносим изменения");


console.log("работа на другом пк");
