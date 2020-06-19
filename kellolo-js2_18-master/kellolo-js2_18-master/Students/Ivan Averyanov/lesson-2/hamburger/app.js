'use strict';

let sumTotal = document.querySelector ('#totalPrice');
let totalСalories = document.querySelector ('#totalCal');
let formInputData = document.querySelectorAll('input');

formInputData.forEach((inp)=>{
	inp.addEventListener('change', (event)=>{
		let name = event.currentTarget.getAttribute('name');
		let price = event.currentTarget.dataset.price;
		let cal = event.currentTarget.dataset.cal;
		calculate.addProduct({name: name, price: price,  cal: cal })
	});
});

let calculate = {

	products: {},

	addProduct(product){
		//this.addProductToObject(product);
		//this.renderTotal();
		this.verificationTotals();
	},

/* 	addProductToObject(product) {
			 this.products = {
					name: product.name,
				  price: product.price,
				  cal: product.cal,
			 }
  	},

	renderTotal() {
		sumTotal.textContent = this.getTotalSum(sumTotal.textContent);
		totalСalories.textContent = this.getTotalCal(totalСalories.textContent);
  	},

  getTotalSum(sm) {
	let sum = +sm
	if ('price' in this.products) {
		sum += Number(this.products.price);
	}
	return sum
	},

  getTotalCal(cl) {
	  let cal = +cl
	if ('cal' in this.products) {
		cal += Number(this.products.cal);
	}
	return cal
	},
 */

	//Проверко пунктов сумм
	verificationTotals(){
		if(sumTotal.textContent !== '0' & totalСalories.textContent !== '0' ){
			sumTotal.textContent = 0;
			totalСalories.textContent = 0;
		} 
		this.getTotal();
	},

	//Функция находит все нажатые пункты меню
	getTotal(){
		let menu = document.querySelectorAll('input:checked');
		this.calculatePrise(menu);
	},

	//Функция переберает все нажатые пункты меню и берет у каждого из них стоимость и калории. Затем подставляет в поля суммы и колорийности гамбургера.
	calculatePrise(event){
		event.forEach((pt)=>{
			let price = pt.dataset.price;
			let cal = pt.dataset.cal;
			sumTotal.textContent = this.getTotalSum(+(sumTotal.textContent) ,+(price));
			totalСalories.textContent = this.getTotalCal(+(totalСalories.textContent) ,+(cal));

		});
	},

	//Функция считает общую суммы
	getTotalSum(sumPrice,sum){
		sumPrice += sum;
		return sumPrice;
	},

	//Функция считае общую калорийность
	getTotalCal(sumCall,cl){
		sumCall += cl;
		return sumCall;
	},
};