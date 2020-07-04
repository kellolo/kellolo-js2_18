<template>
        <div class="drop-menu header-drop cart-drop">
            <item 
            v-for="item of items"
            itemType="basket" 
            :item="item"
            :key="item.id_product"  
            />
                       
        </div>
</template>

<script>
import item from './Item.vue';
export default {
    components: {
        item
    },
    data() {
        return {
            items: [],
            url: '/api/basket',
        }
    },
    mounted() {
        this.$parent.get(this.url).then(data => {
            this.items = data.contents;
        })
    },
    methods: {
        add(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (!find) {
                console.log('Добавляем новый продукт ' + item.product_name)
                this.items.push(Object.assign({}, item, {quantity: 1}));
            } else {
                console.log('Увеличиваем количество продукта ' + item.product_name)
                find.quantity++;
            }
        },
        remove(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                find.quantity--;
            } else {
                this.items.splice(this.items.indexOf(find), 1)
                
            } 
        }
    }
}    
</script>

<style>
</style>