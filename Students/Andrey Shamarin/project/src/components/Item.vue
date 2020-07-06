<template>
	<div :class="computedClass">
	<img :src="computedSize" alt="item.product_name">
		<template v-if="itemType == 'catalog'">
                <div class="desc">
                    <h3>{{item.product_name}}</h3>
                    <p>{{item.price}} $</p>
                    <button 
                        class="buy-btn" 
                        name="buy"
                        @click="add(item)"
                    >Buy</button>
                </div>
		</template>

		<template v-else-if="itemType == 'basket'">
					<div class="product-desc">
						<p class="product-title">{{item.product_name}}</p>
						<p class="product-quantity">{{item.quantity}}</p>
						<p class="product-single-price">{{item.price}}</p>
					</div>
					<div class="right-block">
						<p class="product-price">{{item.price * item.quantity}}</p>
						<button class="del-btn" name="remove" @click="$parent.remove(item)">&times;</button>
					</div>
		</template>
	</div>	
</template>

<script>
export default {
	props: {
		itemType: {
			type: String
		},
		item: {
			type: Object
		}
	},
	computed:{
		computedClass() {
			return this.itemType == 'basket' ? 'basket-item' : 'catalog-item'
		},
		computedSize() {
			return `http://placehold.it/${this.itemType == 'basket' ? '100x80' : '300x200'}`
		}
	},
	methods: {
		add(item) {
			// эмитирование пользовательского события
			this.$parent.$emit('add', item);
		}
	}
}
//this.$parent.$parent.refs.basketComp.add(item) - обращение к методу от "дяди"
</script>

<style>

</style>