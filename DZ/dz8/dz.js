"use strict";

document.writeln('<div id="thermostat"></div>');
let box = document.querySelector("#thermostat");

box.innerHTML = "Термостат — прибор для поддержания постоянной температуры. Поддержание температуры обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная температура. Другим примером термостата, широко используемого в быту, является холодильник.";

box.style.backgroundColor = "yellow";
box.style.color = "black";
box.style.width = "256px";
box.style.height = "256px";
box.style.overflow = "scroll";
box.style.outline = "1px dashed red";

box.className = "resetFont";

