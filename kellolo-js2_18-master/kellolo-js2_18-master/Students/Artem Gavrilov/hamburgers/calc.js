'use strict';

class Calculate {
    constructor() {
        const inputs = document.querySelectorAll(`input[id="input"]:checked`);
        this.price = this._calcPrice(inputs);
        this.cal = this._calcCal(inputs);
    }

    _calcPrice(inputs) {
        let price = 0;
        for (let i = 0; i < inputs.length; i++) {
            price += +inputs[i].dataset.price;
        }
        return price;
    }

    _calcCal(inputs) {
        let cal = 0;
        for (let i = 0; i < inputs.length; i++) {
            cal += +inputs[i].dataset.cal;
        }
        return cal;
    }
}

let block = document.querySelector('#block');
let btn = document.querySelector('#act');
btn.addEventListener('click', () => {
    let orderInfo = new Calculate();
    const info = `<div class="info">
                    <p class="info__p">Стоимость гамбургера <span class="number">${orderInfo.price}</span> рублей</p>
                    <p class="info__p">Калорийность гамбургера <span class="number">${orderInfo.cal}</span> калорий</p>
                  </div>`
    if (document.querySelector('.info')) {
        let number = document.querySelectorAll('.number');
        number[0].innerText = orderInfo.price;
        number[1].innerText = orderInfo.cal;
    } else {
        block.insertAdjacentHTML('beforeend', info);
    }
    
});