let form = document.querySelector('#select');
let btn = document.querySelector('#complette');

btn.addEventListener('click', () => {
    burger.setGamburger();
});


class Component {
    constructor () {
        this.ingredients = [
            {enName: 'potato', cost: 15, cal: 10},
            {enName: 'salad', cost: 20, cal: 5},
            {enName: 'cheese', cost: 10, cal: 20}
        ]
        this.sizes = [
			{enName: 'big', cost: 100, cal: 40},
			{enName: 'small', cost: 50, cal: 20}
        ]
        this.toppings = [
            {enName: 'spiceTop', cost: 15, cal: 0},
			{enName: 'mayoTop', cost: 20, cal: 5}
        ]
    }
}

class Burger {
    constructor (component) {
        this.size = '';
        this.ingredient = '';
        this.topping = [];
        this.component = component;
    }

    _calcParam() {

		let result = { cost: 0, cal: 0 };

		this.component.sizes.forEach(el => {
			if (el.enName === this.size) {
				result.cost += el.cost;
				result.cal += el.cal;
			}
		});
		this.component.ingredients.forEach(el => {
			if (el.enName === this.ingredient) {
				result.cost += el.cost;
				result.cal += el.cal;
			}
		});
		this.component.toppings.forEach(el => {
			this.topings.forEach(item => {
				if (el.enName === item) {
					result.cost += el.cost;
					result.cal += el.cal;
				}				
			})

		});

		return result;
	}


    _desk() {

		const myBurger = this._calcParam();
		document.getElementById('burger-cost').innerHTML = myBurger.cost;
		document.getElementById('burger-cal').innerHTML = myBurger.cal;
	}

    setGamburger () {
        this.size = document.querySelector(`input[name="size"]:checked`).value
        this.ingredient = document.querySelector(`input[name="ingredients"]:checked`).value

        let inputTop = [];
		let toppingForm = document.querySelector('.addition__input');
		let toppingInputs = toppingForm.querySelectorAll(`input[name="topping"]`);

		toppingInputs.forEach(el => {
			if (el.checked) inputTop.push(el.id);
		});

        this.topings = inputTop;
        
        this._desk ();
    }
}

let component = new Component ();
let burger = new Burger (component);

burger.setGamburger();
