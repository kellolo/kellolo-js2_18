'use strict';
class Human {
    constructor(name, age) {
        this.humanName = name;
        this.humanAge = age;
        this.salary = Math.round(10 + Math.random() * 10);
        this.money = 0;
    }
    
    greet(pers = 'you') {
    }

    goWork() {
        this.money += this.salary * 8;
    }

    tieKnot() {
        if (oleg.fishes > 1) {
            olga.money += Math.round(oleg.money * 0.05); 
            oleg.money -= Math.round(oleg.money * 0.05);
            oleg.fishes -= 2
        } else {
        }
    }
}

class Male extends Human {
    constructor(name, age) {
        super(name, age);
        this.fishes = 0;
    }
    goFishing() {
        let fishes = Math.round(Math.random() * 10);
        this.fishes += fishes;
    }
}

class Female extends Human {
    constructor(name, age) {
        super(name, age);
        this.money = 100;
    }

    goShopping(spendMoney) {
        if (olga.money > 0) {
            this.money -= spendMoney;
            if (olga.money < 0) {
            }
        } else { 
            return 
        }
    }
}

class NewCharacter {
    constructor() {
        this.name = this._getInputText();
        this.gen = this._getHumanGen();
        this.hobby = this._getHumanHobby();
        this.age = 0;
        this._greet();
    }

    _getInputText() {
        let text = document.querySelector(`input[type="text"]`);
        return text.value;
    }

    _getHumanGen() {
        let gen = document.querySelector(`input[name="gen"]:checked`);
        return gen.value;
    }

    _getHumanHobby() {
        let arr = document.querySelectorAll(`input[name="hobby"]:checked`);
        let hobbies = [];
        arr.forEach((item) => {
            hobbies.push(item.value);
        });
        return hobbies;
    }

    _greet() {
        form.insertAdjacentHTML('beforeend', `<p>${this.name} greets the world!</p>`)
    }

}

let oleg = new Male('Oleg', 28);
let olga = new Female('Olga', 25);
const createChar = document.getElementById('button');
let form = document.querySelector('#form');
let characters = [];
createChar.addEventListener('click', function () {
    if (characters.length < 3) {
        const newChar = new NewCharacter();
        characters.push(newChar)
    } else {
        form.insertAdjacentHTML('beforeend', `<p id="message">Детей не может быть больше 3</p>`);
        function removeMessage() {
            document.querySelector('#message').remove();
        }
        setTimeout(removeMessage, 3000);

    }
});

let act = {
    olegGoWorkBtn: document.querySelector('#olegGoWork'),
    olegMoney: document.querySelector('#olegMoney'),
    olgaGoWorkBtn: document.querySelector('#olgaGoWork'),
    olgaMoney: document.querySelector('#olgaMoney'),
    goFishingBtn: document.querySelector('#goFishing'),
    fishes: document.querySelector('#fishes'),
    goShoppingBtn: document.querySelector('#goShopping'),
    olgaSpend: document.querySelector('#olgaSpend'),
    tieKnot: document.querySelector('#tieKnot'),

    initBtns() {
        this.olegGoWorkBtn.addEventListener('click', () => {
            oleg.goWork();
            this.olegMoney.innerHTML = oleg.money;
        });

        this.olgaGoWorkBtn.addEventListener('click', () => {
            olga.goWork();
            this.olgaMoney.innerText = olga.money;
        });

        this.goFishingBtn.addEventListener('click', () => {
            oleg.goFishing();
            this.fishes.innerText = oleg.fishes;
        });

        this.goShoppingBtn.addEventListener('click', () => {
            if (olga.money > 0) {
                let spendMoney = Math.round(Math.random() * 1000);
                olga.goShopping(spendMoney);
                this.olgaMoney.innerText = olga.money;
                if (document.querySelector('#hasNoMoney')) {
                    document.querySelector('#hasNoMoney').remove();
                }
            } else {
                if (!document.querySelector('#hasNoMoney')) {
                    this.goShoppingBtn.insertAdjacentHTML('beforebegin', `<p id="hasNoMoney">У ольги нет денег</p>`)
                }
            }
        });

        this.tieKnot.addEventListener('click', () => {
            let trueMessage = `<p id="message">Ольга и Олег связали узел (что бы это ни значило)</p>`;
            let falseMessage = `<p id="message">Нужна энергия</p>`;
            if (oleg.fishes > 1) {
                oleg.tieKnot();
                this.tieKnot.insertAdjacentHTML('afterend', trueMessage);
            } else {
                this.tieKnot.insertAdjacentHTML('afterend', falseMessage);
            }
            this.fishes.innerText = oleg.fishes;
            this.olegMoney.innerHTML = oleg.money;
            this.olgaMoney.innerText = olga.money;
            
            function removeMessage() {
                document.querySelector('#message').remove();
            }
            setTimeout(removeMessage, 3000);
        });
        
    }
    
}

act.initBtns();