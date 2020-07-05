<template>
    <div>
        <header>
            <div class="logo">GeekShop</div>
            <div class="basket">
                <filterItems />
                <button class="btn-basket" @click="showBasket = !showBasket">Корзина</button>
                <basket v-show="showBasket" ref="basket" />
            </div>
        </header>
        <main>
            <catalog ref="catalog" @add="addItem" />
        </main>
    </div>
</template>

<script>
import Basket from '../components/Basket.vue';
import Catalog from '../components/Catalog.vue';
import FilterItems from '../components/FilterItems.vue';

export default {
    data() {
        return {
            showBasket: false
        }
    },
    components: {
        "basket": Basket,
        "catalog": Catalog,
        "filterItems": FilterItems
    },
    methods: {
        get(url) {
            return fetch(url).then(data => data.json());
        },
        addItem(item) {
            this.$refs.basket.add(item)
        }
    }
}
</script>

<style>

</style>