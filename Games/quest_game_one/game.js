"use strict"

//Искры главного меню - из другого проекта
const sparksContainer = document.getElementById('sparks');
const sparkCount = 60;
for (let i = 0; i < sparkCount; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    const size = Math.random() * 5 + 1;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 6;
    const delay = Math.random() * 5;
    const dx = (Math.random() - 0.5) * 200;
    spark.style.setProperty('--w', `${size}px`);
    spark.style.setProperty('--h', `${size}px`);
    spark.style.left = `${left}%`;
    spark.style.animationDuration = `${duration}s`;
    spark.style.animationDelay = `${delay}s`;
    spark.style.setProperty('--dx', dx);
    const hue = 15 + Math.random() * 25;
    spark.style.background = `hsl(${hue}, 80%, 50%)`;
    sparksContainer.appendChild(spark);
    if (i % 8 === 0) {
        spark.style.animationName = 'flashFloat';
    }
}

// Цитаты
const quotes = [
    "В мире, застывшем между эпохами, где время гниёт, а надежда — роскошь для мёртвых, выжившие бродят по руинам прогресса. Это — Стагнация.",
    "Метро не умерло в 2050-м. Оно просто перестало быть метро.",
    "Здесь нет солнца. Здесь нет будущего. Здесь есть только ты и твой следующий вдох.",
    "Торговцы говорят: всё имеет цену. Перевозчики добавляют: цена — всегда твоя жизнь.",
    "Мы не выживаем. Мы просто откладываем смерть на чуть-чуть дольше.",
    "Аномалии не убивают сразу. Они напоминают, что ты уже мёртв.",
    "В 2085 году в Новосибирске осталось только три вещи, которые ещё работают: рельсы, жадность и надежда умереть не сегодня.",
    "Каждый, кто выходит на поверхность, возвращается либо героем, либо трупом.",
    "Стагнация — это когда ты уже не боишься смерти. Ты боишься, что она придёт слишком быстро.",
    "Под землёй мы все равны. Пока не откроем рот."
];
let qi = 0;
const quoteEl = document.getElementById('quote');
function nextQuote() {
    if (!quoteEl) return;
    quoteEl.style.opacity = 0;
    setTimeout(() => {
        quoteEl.textContent = quotes[qi];
        quoteEl.style.opacity = 1;
        qi = (qi + 1) % quotes.length;
    }, 500);
}
nextQuote();
setInterval(nextQuote, 12000);

//-----------------

//МОДАЛКА ОСНОВНАЯ (История, Обновления, Соглашение)
const mainModal = document.getElementById('modal');
if (mainModal) {
    document.querySelectorAll('.tab-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const tab = link.dataset.tab;

            if (mainModal.style.display === 'block') {
                const activeTab = document.querySelector('.modal-tab.active');
                if (activeTab && activeTab.dataset.tab === tab) {
                    mainModal.style.display = 'none';
                    return;
                }
            }

            mainModal.style.display = 'block';

            document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.modal-panel').forEach(p => p.classList.remove('active'));

            const tabBtn = document.querySelector(`.modal-tab[data-tab="${tab}"]`);
            const tabPanel = document.getElementById(`modal-${tab}`);

            if (tabBtn) tabBtn.classList.add('active');
            if (tabPanel) tabPanel.classList.add('active');
        });
    });

    const closeBtn = mainModal.querySelector('.close');
    if (closeBtn) closeBtn.addEventListener('click', () => mainModal.style.display = 'none');

    window.addEventListener('click', (e) => {
        if (e.target === mainModal) {
            mainModal.style.display = 'none';
        }
    });
}

// === КНОПКА "ВОЙТИ В МИР СТАГНАЦИИ" ===
const enterWorldBtn = document.getElementById('enterWorldBtn');
const loginModal = document.getElementById('loginModal');
const closeLoginBtn = document.getElementById('closeLogin');
const loginForm = document.getElementById('loginForm');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const goToRegisterLink = document.getElementById('goToRegister');
const recoverModal = document.getElementById('recoverModal');
const closeRecoverBtn = document.getElementById('closeRecover');
const recoverForm = document.getElementById('recoverForm');
const backToLoginLink = document.getElementById('backToLogin');

// Открытие окна входа
if (enterWorldBtn) {
    enterWorldBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });
}

// Закрытие окна входа
if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
}

// Переход от входа к регистрации
if (goToRegisterLink) {
    goToRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        const registerModal = document.getElementById('registerModal');
        if (registerModal) registerModal.style.display = 'block';
    });
}

// Переход к восстановлению пароля
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        recoverModal.style.display = 'block';
    });
}

// Возврат от восстановления ко входу
if (backToLoginLink) {
    backToLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        recoverModal.style.display = 'none';
        loginModal.style.display = 'block';
    });
}

// Закрытие модалки восстановления
if (closeRecoverBtn) {
    closeRecoverBtn.addEventListener('click', () => {
        recoverModal.style.display = 'none';
    });
}

// Закрытие по клику вне модалок
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === recoverModal) recoverModal.style.display = 'none';
});

// === ОБРАБОТКА ВХОДА ===
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            alert('Заполните все поля');
            return;
        }

        // Проверка сохранённого пользователя (в реальном проекте — запрос на сервер)
        const savedUser = localStorage.getItem('stagnationUser');
        if (!savedUser) {
            alert('Аккаунт не найден. Сначала зарегистрируйтесь.');
            return;
        }

        const user = JSON.parse(savedUser);

        // В реальном проекте здесь будет запрос на сервер для проверки хеша пароля
        if (user.email !== email || user.password !== password) {
            alert('Неверный логин или пароль');
            return;
        }

        // Успешный вход
        alert(`Добро пожаловать обратно, ${user.nickname}!`);
        loginModal.style.display = 'none';

        // Здесь можно добавить переход в игру
        // window.location.href = 'game.html';
    });
}

// === ОБРАБОТКА ВОССТАНОВЛЕНИЯ ПАРОЛЯ ===
if (recoverForm) {
    recoverForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('recoverEmail').value.trim();
        if (!email) {
            alert('Введите адрес электронной почты');
            return;
        }

        // В реальном проекте — отправка запроса на сервер
        // Здесь имитация
        alert(`Инструкции по восстановлению пароля отправлены на ${email}.\n\n(В демо-версии функция восстановления не активна)`);
        recoverModal.style.display = 'none';
        loginModal.style.display = 'block';
    });
}

// === МОДАЛКА РЕГИСТРАЦИИ ===
const registerModal = document.getElementById('registerModal');
const openRegisterBtn = document.getElementById('openRegisterBtn');
const closeRegisterBtn = document.getElementById('closeRegister');

if (openRegisterBtn) {
    openRegisterBtn.addEventListener('click', () => {
        registerModal.style.display = 'block';
    });
}

if (closeRegisterBtn) {
    closeRegisterBtn.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Ссылка на соглашение внутри формы
const showAgreementLink = document.querySelector('.show-agreement');
if (showAgreementLink) {
    showAgreementLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'none';
        const agreementTab = document.querySelector('.modal-tab[data-tab="agreement"]');
        if (agreementTab) agreementTab.click();
    });
}

// === ОБРАБОТКА РЕГИСТРАЦИИ ===
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const day = document.getElementById('day').value;
        const month = document.getElementById('month').value;
        const year = document.getElementById('year').value;
        const nickname = document.getElementById('nickname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!nickname || !email || !password || !confirmPassword) {
            alert('Заполните все обязательные поля');
            return;
        }
        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        if (!day || !month || !year) {
            alert('Укажите полную дату рождения');
            return;
        }
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert('Дата должна содержать только цифры');
            return;
        }
        if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2026) {
            alert('Некорректная дата рождения');
            return;
        }

        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 16) {
            alert('Игра предназначена для лиц старше 16 лет');
            return;
        }

        const userData = {
            nickname: nickname,
            email: email,
            password: password,
            birthDate: `${day}.${month}.${year}`,
            registrationDate: new Date().toISOString(),
            currentLocation: 'teatralnaya'
        };

        localStorage.setItem('stagnationUser', JSON.stringify(userData));

        alert(`Добро пожаловать в Стагнацию, ${nickname}!\nРегистрация успешна.`);
        registerModal.style.display = 'none';
    });
}

// === СЧЁТЧИК ОНЛАЙНА ===
function updateOnlineCounter() {
    const onlineEl = document.getElementById('onlineCount');
    if (onlineEl) {
        const baseOnline = 120 + Math.floor(Math.random() * 30);
        onlineEl.textContent = baseOnline;
    }
}
updateOnlineCounter();
setInterval(updateOnlineCounter, 30000);