"use strict";


// дз номер 28

let but = document.querySelector("#but");
but.addEventListener("click", smsUser);

function smsUser() {
    let name = document.querySelector("#your_name").value;
    let text = document.querySelector("#text").value;
    let regExpBBMail = /(.*?)<(b|u|i|s|h1|p|span)>(.*?)<(\/\2)>(.*?)/ig;

    text = text.replace(regExpBBMail, "$1\<br>\ <span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt;$4&gt;\<br>\</span> $5")
    document.writeln(`
    <fieldset>
    <legend>${name}</legend>
    <div>${text}</div>
    </fieldset>`) 
}