'use strict';

let cardButton = document.querySelector('.cart-list__button-one');
//переход на страницу корзины
cardButton.addEventListener("click", function (event){
	document.location.href = "shoppingCart.html";
}); 

let shopCardButton1 = document.querySelector('.header__cart');
//переход на страницу корзины
shopCardButton1.addEventListener("click", function (event){
	document.location.href = "shoppingCart.html";
}); 


/**
 * Функция создает  корзину.
 */

	let basketBtns = document.querySelectorAll('.AddToCart');

	basketBtns.forEach(function (btn) {
		btn.addEventListener('click', function (event) {
			let id = event.currentTarget.dataset.id;
			let price = event.currentTarget.dataset.price;
			let name = event.currentTarget.dataset.name;
			let src = event.currentTarget.dataset.src;
			basket.addProduct({ id: id, price: price, name: name, src: src })
		})
	});

let basket = {

	products: {},

	addProduct(product) {
		this.addProductToObject(product);
		this.renderProductInBasket(product);
		this.renderTotalSum();
		this.addRemoveBtnsListeners();
 	},


	 addProductToObject(product) {
		if (this.products[product.id] == undefined) {
			 this.products[product.id] = {
				  price: product.price,
				  name: product.name,
				  count: 1
			 }
		} else {
			 this.products[product.id].count++;
		}
  },

	renderProductInBasket(product) {
		let productExist = document.querySelector(`.product-count[data-id="${product.id}"]`);
		if (productExist) {
			 productExist.textContent++;
			 return;
		}
		let productRow = `
				<div class="cart-list__product">
					<a href="product.html" class="cart-list__product_image"><img src="${product.src}" alt="tee-shirt"></a>
						<div class="cart-list__product_data">
							<a href="product.html"><h3>${product.name}</h3></a>
								<div class="star-rating">
									<img src="../src/Layout/img/promo/star-rating.png" alt="star-rating">    
								</div>
								<span><span class="product-count" data-id="${product.id}">1 </span>x $ ${product.price}</span>
				</div>
				<input class="product-remove-btn" data-id="${product.id}" type="image" src="../src/Layout/img/promo/arrow_cancel.png" alt="arrow_cancel">
			</div>
		`;
		
		let tbody = document.querySelector('.cart-list');
		tbody.insertAdjacentHTML("afterBegin", productRow);
  },

    getTotalSum() {
		let sum = 0;
		for (let key in this.products) {
			 sum += this.products[key].price * this.products[key].count;
		}
		return sum;
  },

    renderTotalSum() {
		document.querySelector('.cart-list__total-span').textContent = this.getTotalSum();
  },

    removeProductListener(event) {
		basket.removeProduct(event);
		basket.renderTotalSum();
  },

    addRemoveBtnsListeners() {
		let btns = document.querySelectorAll('.product-remove-btn');
		for (let i = 0; i < btns.length; i++) {
			 btns[i].addEventListener('click', this.removeProductListener);
		}
  },

    removeProduct(event) {
		let id = event.srcElement.dataset.id;
		this.removeProductFromObject(id);
		this.removeProductFromBasket(id);
  },

    removeProductFromBasket(id) {
		let countTd = document.querySelector(`.product-count[data-id="${id}"]`);
		if (countTd.textContent == 1) {
			 countTd.closest('.cart-list__product').remove();
		} else {
			 countTd.textContent--;
		}
  },

 
    removeProductFromObject(id) {
		if (this.products[id].count == 1) {
			 delete this.products[id];
		} else {
			 this.products[id].count--;
		}
  }
 	 
	};  

export default ()=>{
	basket();
};