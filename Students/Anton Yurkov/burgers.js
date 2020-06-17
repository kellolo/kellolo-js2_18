'use strict';

let sumTotal = document.querySelector ('#totalPrice');
let totalСalories = document.querySelector ('#totalCal');
let selectedOptions = document.querySelectorAll('input');

// для всех найденных инпутов 
selectedOptions.forEach((input)=>{
    // добавляем слушателя событий "изменение"
	input.addEventListener('change', (event)=>{
		let name = event.currentTarget.getAttribute('name'); // получаем имя
		let price = event.currentTarget.dataset.price; // получаем дата-цену
		let kkal = event.currentTarget.dataset.kkal; // получаем дата-калории
		calculate.addProduct({name: name, price: price,  kkal: kkal }) // обращаемся к методу addProduct объекта calculate
	});
});

let calculate = {

    products: {},

    addProduct () {
        this.getTotal()
    },

    // Функция находит все нажатые пункты меню, затем передает их массив в следующий метод
	getTotal(){
		let menu = document.querySelectorAll('input:checked');
		this.calculatePrise(menu);
    },
    
    // Функция переберает все нажатые пункты меню и берет у каждого из них стоимость и калории. 
    // Затем подставляет в поля суммы и колорийности гамбургера.
	calculatePrise(event){
		event.forEach((data)=>{
			let price = data.dataset.price;
			let kkal = data.dataset.kkal;
			sumTotal.textContent = this.getTotalSum(+(sumTotal.textContent) ,+(price));
			totalСalories.textContent = this.getTotalCal(+(totalСalories.textContent) ,+(kkal));
		});
	},

    //Функция считает общую суммы
	getTotalSum(sumPrice, sum){
		sumPrice += sum;
		return sumPrice;
	},

	//Функция считае общую калорийность
	getTotalCal(sumKkal, kkal){
		sumKkal += kkal;
		return sumKkal;
	},
}
