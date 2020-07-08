<template>
	<div class="basket-block" v-show="$parent.showBasket"> <!--отображает содержимое дива при истинном значении свойства баскет-->
        <div class="basket-items">
            <!--Basket elems динамический тип, в кавычках можно писать любое выражение, условие, выисление и тд-->
			<item 
                :itemType="'basket'"
                v-for="item of items" 
                :item="item" 
                :key="item.id_product"
            />
        </div>
    </div>
</template>

<script>
	import item from './Item.vue'
	export default {
		components: {item},
		data() {
			return {
                items: [],
                url: '/api/basket', 
				// url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'
			}
		},
		methods: {
			add(item) {
                let find = this.items.find(el => el.id_product == item.id_product); // либо ссылка на объект с товаром, либо false если ничего не найдет
                if (find) {
                    this.$parent.put(`/api/basket/${item.id_product}`, { amount: 1 })
                    .then(res => {
                        if (res.status) {
                            find.quantity++;
                        } else {
                            console.log('ERR_ADD_ITEM:' + item.product_name);
                        }
                    })
                } else {
                    let newItem = Object.assign({}, item, {quantity: 1});
                    this.$parent.post(this.url, newItem)
                    .then(res => {
                        if (res.status) {
                            this.items.push(newItem);
                        } else {
                            console.log('ERR_ADD_ITEM:' + newItem.product_name);
                        }
                    })
                }
			},
			remove(item) {
                if (item.quantity != 1) {
                    this.$parent.put(`/api/basket/${item.id_product}`, { amount: -1 })
                    .then(res => {
                        if (res.status) {
                            find.quantity--;
                        } else {
                            console.log('ERR_REMOVE_ITEM:' + Item.product_name);
                        }
                    })
                } else {
                    this.$parent.delete(`/api/basket/${item.id_product}`)
                    .then(res => {
                        if (res.status) {
                            this.items.splice(this.items.indexOf(item), 1);
                        } else {
                            console.log('ERR_REMOVE_ITEM:' + Item.product_name);
                        }
                    })
                }
            },
        },
        mounted() {
			this.$parent._get(this.url).then(d => {
				this.items = d.contents;
			}) //берем из родительского shop.vue метод _get() и записываем данные в items[]
		}
	}
</script>

<style>

</style>