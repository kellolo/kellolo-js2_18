'use strict';

let form = document.querySelector ('#uForm');
let btn = document.querySelector ('#okBtn');
let totalPriceSpan = document.querySelector ('#totalPrice');
let totalCalSpan = document.querySelector ('#totalCal');

btn.addEventListener ('click', calculate)

function calculate () {
   let calc = new Calc ('Size', 'stuffing')
   let totalPrice = +calc.size.price + calc.stuffing.price;
   let totalCal = +calc.size.cal + calc.stuffing.cal;
   totalPriceSpan.textContent = totalPrice;
   totalCalSpan.textContent = totalCal;
   }

class Calc {
   constructor (size, stuffing) {
      this.size = this._check (size)
      this.stuffing = this._getArray (stuffing)
   };

   _check (attrName) {
      let obj = document.querySelector (`input[name=${attrName}]:checked`)
         return {
            price: obj.dataset.price,
            cal: obj.dataset.cal
            }
	};
		
   _getArray (attrName) {
      let objArr = [...document.querySelectorAll (`input[name=${attrName}]:checked`)]
      let total = {
         price: 0,
         cal: 0
		};

      objArr.forEach (el => {
         total.price += +el.dataset.price;
      	total.cal += +el.dataset.cal;
         })
         return total;
      };

    };