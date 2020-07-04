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
            <button class="btn-basket" @click="showBasket = !showBasket">Корзина</button>
            <basket v-show="showBasket" ref="basket" />
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
import Item from '../components/Item.vue'
import Search from '../components/Search.vue'

export default {
    components: {
        'catalog': Catalog,
        'basket': Basket,
        'search': Search
    },

    data() {
        return {
            showBasket: false
        }
    },
    
    methods: {
        addItem(item) {
            this.$refs.basket.add(item);
        },

        get(url) {
            return fetch(url).then(data => data.json());
        }
    },

    mounted() {
        this.$refs.bskt
    }
}
</script>

<style>

</style>

