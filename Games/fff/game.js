"use strict";

//-как пример больших классов!!!
//-посмотреть структуру кода для примера работы

// ===================================================
// КЛАСС 1: ПРЕДМЕТ (Item)
// ===================================================
class Item {
    constructor(name, description, type = 'common') {
        this._name = name;
        this._description = description;
        this._type = type;
    }

    get name() { return this._name; }
    get description() { return this._description; }
    get type() { return this._type; }

    get info() {
        const icons = {
            weapon: '⚔️',
            key: '🔑',
            potion: '🧪',
            common: '💎',
            monster: '👹'
        };
        return `${icons[this._type] || '📦'} ${this._name}`;
    }
}

// ===================================================
// КЛАСС 2: МОНСТР
// ===================================================
class Monster extends Item {
    constructor(name, description, health, damage) {
        super(name, description, 'monster');
        this._health = health;
        this._maxHealth = health;
        this._damage = damage;
    }

    get health() { return this._health; }
    get damage() { return this._damage; }
    get maxHealth() { return this._maxHealth; }

    set health(value) {
        this._health = value < 0 ? 0 : value;
    }

    get isAlive() {
        return this._health > 0;
    }

    takeDamage(amount) {
        this.health -= amount;
        return this._health;
    }
}

// ===================================================
// КЛАСС 3: ИГРОК
// ===================================================
class Player {
    constructor(name) {
        this._name = name;
        this._health = 100;
        this._maxHealth = 100;
        this._attack = 10;
        this._inventory = [];
        this._location = 'start';
    }

    get name() { return this._name; }
    get health() { return this._health; }
    get maxHealth() { return this._maxHealth; }
    get attack() { return this._attack; }
    get inventory() { return [...this._inventory]; }
    get location() { return this._location; }

    set location(value) {
        this._location = value;
    }

    get isAlive() {
        return this._health > 0;
    }

    takeDamage(amount) {
        this._health = Math.max(0, this._health - amount);
        return this._health;
    }

    heal(amount) {
        this._health = Math.min(this._maxHealth, this._health + amount);
    }

    addItem(item) {
        this._inventory.push(item);
    }

    hasItem(itemName) {
        return this._inventory.some(item => item.name === itemName);
    }

    removeItem(itemName) {
        this._inventory = this._inventory.filter(item => item.name !== itemName);
    }

    getInventoryInfo() {
        if (this._inventory.length === 0) return 'Пусто 🎒';
        return this._inventory.map(item => item.info).join(', ');
    }
}

// ===================================================
// КЛАСС 4: ЛОКАЦИЯ
// ===================================================
class Location {
    constructor(id, name, description) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._exits = {};
        this._items = [];
        this._monster = null;
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get description() { return this._description; }
    get exits() { return { ...this._exits }; }
    get items() { return [...this._items]; }
    get monster() { return this._monster; }

    addExit(direction, locationId) {
        this._exits[direction] = locationId;
    }

    addItem(item) {
        this._items.push(item);
    }

    setMonster(monster) {
        this._monster = monster;
    }

    removeItem(itemName) {
        this._items = this._items.filter(item => item.name !== itemName);
    }

    get fullDescription() {
        let desc = `<strong>${this._name}</strong>\n\n${this._description}`;

        if (this._monster && this._monster.isAlive) {
            desc += `\n\n⚠️ <span style="color: #e94560">Здесь находится ${this._monster.name} (HP: ${this._monster.health}/${this._monster.maxHealth})!</span>`;
        }

        if (this._items.length > 0) {
            desc += `\n\n📦 Вы видите: ${this._items.map(i => i.info).join(', ')}`;
        }

        return desc;
    }
}

// ===================================================
// КЛАСС 5: СЕКРЕТНАЯ ЛОКАЦИЯ
// ===================================================
class SecretLocation extends Location {
    constructor(id, name, description, secretItem) {
        super(id, name, description);
        this._secretItem = secretItem;
        this._isRevealed = false;
    }

    get isRevealed() { return this._isRevealed; }

    reveal() {
        if (!this._isRevealed) {
            this._isRevealed = true;
            this.addItem(this._secretItem);
            return `🎉 <span style="color: gold">Вы нашли тайник! Получено: ${this._secretItem.info}</span>`;
        }
        return 'Тайник уже пуст.';
    }
}

// ===================================================
// КЛАСС 6: ИГРА
// ===================================================
class Game {
    constructor() {
        this._player = null;
        this._locations = {};
        this._gameOver = false;
        this._turnCount = 0;

        // Проверяем, загрузился ли DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    get player() { return this._player; }
    get gameOver() { return this._gameOver; }

    init() {
        console.log('🎮 Инициализация игры...');

        // Создаём предметы
        const key = new Item('Ржавый ключ', 'Старый ключ от двери', 'key');
        const sword = new Item('Меч студента', 'Обычный меч', 'weapon');
        const potion = new Item('Зелье здоровья', 'Восстанавливает 30 HP', 'potion');
        const secretGem = new Item('Алмаз ЗабГУ', 'Редкий артефакт', 'common');

        // Создаём монстра
        const dragon = new Monster('Дракон-преподаватель', 'Грозный дракон', 50, 15);

        // Создаём локации
        const start = new Location('start', 'Тёмная камера',
            'Вы просыпаетесь в холодной каменной камере. Вокруг темно.');

        const corridor = new Location('corridor', 'Коридор',
            'Длинный коридор с факелами на стенах.');

        const armory = new Location('armory', 'Оружейная',
            'Комната со старым оружием. На стене висит меч.');

        const treasure = new SecretLocation('treasure', 'Тайная комната',
            'За скрытым рычагом открывается тайная комната!', secretGem);

        const bossRoom = new Location('boss', 'Зал Дракона',
            'Огромный зал. В центре сокровище, но его охраняет дракон!');

        const exit = new Location('exit', 'Выход',
            '🎉 <span style="color: gold; font-size: 1.5em">СВОБОДА! Вы выбрались!</span>');

        // Настраиваем выходы
        start.addExit('north', 'corridor');
        corridor.addExit('south', 'start');
        corridor.addExit('east', 'armory');
        corridor.addExit('west', 'treasure');
        corridor.addExit('north', 'boss');
        armory.addExit('west', 'corridor');
        treasure.addExit('east', 'corridor');
        bossRoom.addExit('south', 'corridor');
        bossRoom.addExit('north', 'exit');
        exit.addExit('south', 'boss');

        // Добавляем предметы
        armory.addItem(sword);
        start.addItem(potion);
        bossRoom.setMonster(dragon);

        // Сохраняем локации
        this._locations = { start, corridor, armory, treasure, boss: bossRoom, exit };

        // Создаём игрока
        this._player = new Player('Студент ЗабГУ');
        this._player.location = 'start';

        console.log('✅ Игра готова!');
        this.render();
    }

    makeChoice(choice) {
        if (this._gameOver) return;

        this._turnCount++;
        const player = this._player;
        const currentLocation = this._locations[player.location];

        console.log('Выбор:', choice);

        switch (choice) {
            case 'look':
                this.showStory(currentLocation.fullDescription);
                break;

            case 'inventory':
                this.showStory(`🎒 <strong>Инвентарь:</strong> ${player.getInventoryInfo()}`);
                break;

            case 'north':
            case 'south':
            case 'east':
            case 'west':
                this.move(choice);
                break;

            case 'take':
                this.takeItem();
                break;

            case 'attack':
                this.attack();
                break;

            case 'use_potion':
                this.usePotion();
                break;

            case 'search':
                this.search();
                break;
        }

        this.render();
        this.checkGameOver();
    }

    move(direction) {
        const player = this._player;
        const currentLocation = this._locations[player.location];
        const exits = currentLocation.exits;

        if (exits[direction]) {
            player.location = exits[direction];
            const newLocation = this._locations[player.location];
            const directions = { north: 'север', south: 'юг', east: 'восток', west: 'запад' };
            this.showStory(`🚶 Вы идёте на ${directions[direction]}...\n\n${newLocation.fullDescription}`);
        } else {
            this.showStory('❌ Туда нельзя пройти!');
        }
    }

    takeItem() {
        const player = this._player;
        const location = this._locations[player.location];
        const items = location.items;

        if (items.length > 0) {
            const item = items[0];
            player.addItem(item);
            location.removeItem(item.name);
            this.showStory(`✅ <span style="color: #4ade80">Вы взяли: ${item.info}</span>\n${item.description}`);
        } else {
            this.showStory('❌ Здесь нечего брать!');
        }
    }

    attack() {
        const player = this._player;
        const location = this._locations[player.location];
        const monster = location.monster;

        if (!monster || !monster.isAlive) {
            this.showStory('❌ Здесь некого атаковать!');
            return;
        }

        const playerDamage = player.attack + (player.hasItem('Меч студента') ? 15 : 0);
        monster.takeDamage(playerDamage);

        let story = `⚔️ Вы атакуете ${monster.name} и наносите ${playerDamage} урона!\n`;
        story += `HP монстра: ${monster.health}/${monster.maxHealth}\n`;

        if (!monster.isAlive) {
            story += `\n🎉 <span style="color: #4ade80">${monster.name} повержен!</span>`;
        } else {
            const monsterDamage = monster.damage;
            player.takeDamage(monsterDamage);
            story += `\n💥 ${monster.name} контратакует! Вы получаете ${monsterDamage} урона.\n`;
            story += `Ваше HP: ${player.health}/${player.maxHealth}`;
        }

        this.showStory(story);
    }

    usePotion() {
        const player = this._player;

        if (player.hasItem('Зелье здоровья')) {
            player.removeItem('Зелье здоровья');
            player.heal(30);
            this.showStory(`🧪 <span style="color: #4ade80">Вы выпили зелье! HP: ${player.health}/${player.maxHealth}</span>`);
        } else {
            this.showStory('❌ У вас нет зелья!');
        }
    }

    search() {
        const location = this._locations[this._player.location];

        if (location instanceof SecretLocation && !location.isRevealed) {
            const message = location.reveal();
            this.showStory(message);
        } else {
            this.showStory('🔍 Вы ничего не нашли.');
        }
    }

    checkGameOver() {
        const player = this._player;

        if (!player.isAlive) {
            this._gameOver = true;
            this.showStory('💀 <span style="color: #e94560; font-size: 1.3em">ВЫ ПОГИБЛИ...</span>\n\nИгра окончена.');
        } else if (player.location === 'exit') {
            this._gameOver = true;
            this.showStory(`🏆 <span style="color: gold; font-size: 1.5em">ПОБЕДА!</span>\n\nВы выбрались из подземелья!\nХодов: ${this._turnCount}`);
        }
    }

    showStory(text) {
        const storyDiv = document.getElementById('story');
        if (storyDiv) {
            storyDiv.innerHTML = text;
        }
    }

    render() {
        const player = this._player;
        const location = this._locations[player.location];

        // Обновляем статистику
        const statsDiv = document.getElementById('stats');
        if (statsDiv) {
            statsDiv.innerHTML = `
                <div class="stat">
                    <div class="stat-label">❤️ Здоровье</div>
                    <div class="stat-value">${player.health}/${player.maxHealth}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">⚔️ Атака</div>
                    <div class="stat-value">${player.attack}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">📍 Локация</div>
                    <div class="stat-value">${location.name}</div>
                </div>
            `;
        }

        // Обновляем инвентарь
        const invDiv = document.getElementById('inventory');
        if (invDiv) {
            invDiv.innerHTML = `<h3>🎒 Инвентарь</h3><div>${player.getInventoryInfo()}</div>`;
        }

        // Обновляем историю
        this.showStory(location.fullDescription);

        // Создаём кнопки
        const choicesDiv = document.getElementById('choices');
        if (!choicesDiv) {
            console.error('❌ Элемент choices не найден!');
            return;
        }

        choicesDiv.innerHTML = ''; // Очищаем старые кнопки

        if (this._gameOver) {
            console.log('Игра окончена');
            return;
        }

        // Создаём кнопки действий
        const actions = [
            { text: '👀 Осмотреться', action: 'look' },
            { text: '🎒 Инвентарь', action: 'inventory' }
        ];

        // Кнопки направлений
        const exits = location.exits;
        const directions = {
            north: '⬆️ Север',
            south: '⬇️ Юг',
            east: '➡️ Восток',
            west: '⬅️ Запад'
        };

        for (const [dir, label] of Object.entries(directions)) {
            if (exits[dir]) {
                actions.push({ text: label, action: dir });
            }
        }

        // Кнопки взаимодействия
        if (location.items.length > 0) {
            actions.push({ text: '📦 Взять предмет', action: 'take' });
        }

        if (location.monster && location.monster.isAlive) {
            actions.push({ text: '⚔️ Атаковать!', action: 'attack' });
        }

        if (player.hasItem('Зелье здоровья')) {
            actions.push({ text: '🧪 Использовать зелье', action: 'use_potion' });
        }

        if (location instanceof SecretLocation && !location.isRevealed) {
            actions.push({ text: '🔍 Искать тайник', action: 'search' });
        }

        // Создаём кнопки
        actions.forEach(({ text, action }) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = text;
            btn.onclick = () => this.makeChoice(action);
            choicesDiv.appendChild(btn);
        });

        console.log(`✅ Создано кнопок: ${actions.length}`);
    }

    restart() {
        console.log('🔄 Перезапуск игры...');
        this._gameOver = false;
        this._turnCount = 0;
        this.init();
    }
}

// Запуск игры
console.log('🎮 Загрузка игры...');
const game = new Game();