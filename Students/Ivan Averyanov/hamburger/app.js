'use strict';

let sumTotal = document.querySelector ('#totalPrice');
let totalСalories = document.querySelector ('#totalCal');
let formInputData = document.querySelectorAll('input');

formInputData.forEach((inp)=>{
	inp.addEventListener('change', (event)=>{
		let name = event.currentTarget.getAttribute('name');
		let price = event.currentTarget.dataset.price;
		let cal = event.currentTarget.dataset.cal;
		let hamburger = new Calculate(name, price, cal);
		hamburger.verificationTotals();

	});
}); 

class Calculate {
	constructor(size, price, cal){
		this.size = size,
		this.price = price,
		this.cal = cal
	}
	verificationTotals(){
		if(sumTotal.textContent !== '0' && totalСalories.textContent !== '0' ){
			sumTotal.textContent = 0;
			totalСalories.textContent = 0;
		} 
		this._getTotal();
	}
	_getTotal(){
		let menu = document.querySelectorAll('input:checked');
		this._calculatePrise(menu);
	}
	_calculatePrise(event){
		event.forEach((pt)=>{
			let price = pt.dataset.price;
			let cal = pt.dataset.cal;
			sumTotal.textContent = this._getTotalSum(+(sumTotal.textContent) ,+(price));
			totalСalories.textContent = this._getTotalCal(+(totalСalories.textContent) ,+(cal));

		});
	}
	_getTotalSum(sumPrice,sum){
		sumPrice += sum;
		return sumPrice;
	}
	_getTotalCal(sumCall,cl){
		sumCall += cl;
		return sumCall;
	}
};