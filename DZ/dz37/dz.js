"use strict";

// дз номер 37

// классы
// задание - карточки

class Header{
    constructor(image, p){
        this.src = image
        this.p = p
        this.out = ""
    }

    render(id) {
        this.out = `
        <img src='${this.src}' alt="Изображение">
        <p>${this.p}</p>
    
        `
        document.querySelector(`#${id}`).innerHTML = this.out
    }
}

let img = "https://images.icon-icons.com/1627/PNG/96/3792025-halloween-horror-owl-witch_109008.png";
let header1 = new Header(img, "Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году");
header1.render("header1");

let img2 = "https://images.icon-icons.com/3553/PNG/96/earth_location_globus_world_web_globe_ecommerce_icon_224946.png";
let header2 = new Header(img2, "Нет геграфических границ");
header2.render("header2");

let img3 = "https://images.icon-icons.com/1771/PNG/96/4124850-confirm-hand-sign-like-ok-thumbs-up_114129.png";
let header3 = new Header(img3, "Ассортимент");
header3.render("header3");

let img4 = "https://images.icon-icons.com/3247/PNG/96/helmet_safety_icon_199082.png";
let header4 = new Header(img4, "Безопасность");
header4.render("header4");

let img5 = "https://image.shutterstock.com/image-vector/black-white-vector-icon-anonymous-260nw-2744592841.jpg";
let header5 = new Header(img5, "Сокращение расходов на аренду и персонал");
header5.render("header5");

let img6 = "https://images.icon-icons.com/3197/PNG/96/hands_handshake_icon_194812.png";
let header6 = new Header(img6, "Партнерские отношения");
header6.render("header6");

let img7 = "https://images.icon-icons.com/607/PNG/96/mobile-phone-2_icon-icons.com_56265.png";
let header7 = new Header(img7, "Покупатель всегда на связи");
header7.render("header7");

let img8 = "https://images.icon-icons.com/2024/PNG/96/conversation_speech_balloon_chat_message_icon_123856.png";
let header8 = new Header(img8, "Комортный выбор");
header8.render("header8");

let img9 = "https://images.icon-icons.com/606/PNG/96/credit-card-with-check-symbol_icon-icons.com_56181.png";
let header9 = new Header(img9, "Удобство оплаты");
header9.render("header9");

let img10 = "https://img-webcalypt.ru/uploads/admin/images/meme-templates/3WhNcKC1bUwxSZNUVLPD7pP3Puicy6Eo.jpg";
let header10 = new Header(img10, "Служба подержки всегда на связи");
header10.render("header10");