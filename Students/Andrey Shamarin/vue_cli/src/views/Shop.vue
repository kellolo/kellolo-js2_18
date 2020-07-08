<template> 
    <div>
		<header>
            <div class="logo">GeekShop</div>
            <div class="basket">
                <form action="#" class="search-form">
                    <input type="text" class="search-field">
                    <button class="btn-search">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-basket" @click="showBasket = !showBasket">Корзина</button> <!--при клике на кноку, свойство баскет поменяется на противоположное-->
                <basket ref="basketComp" />
            </div>
        </header>
        <main>
			<catalog @add="addItem"/>
        </main>
    </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import Basket from '../components/Basket.vue'

export default {
	
	components: {
		// блок для регистрации дочерних компонентов
		'catalog': Catalog,
		'basket': Basket
	},
	data() {
		return {
			showBasket: false
		}
	},
	methods: {
		_get(url) {
			return fetch(url).then(d => d.json());
		},
		addItem(item) {
			this.$refs.basketComp.add(item);
		},
		post(url, obj) {
			return fetch(url, {
				method: 'POST',
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify(obj)
			}).then(d => d.json());
		},
		put(url, obj) {
			return fetch(url, {
				method: 'PUT',
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify(obj)
			}).then(d => d.json());
		},
		delete(url) {
			return fetch(url, {
				method: 'DELETE',
				headers: { "Content-Type": "application/json"},
			}).then(d => d.json());
		}
	},
}
</script>

<style>

</style>