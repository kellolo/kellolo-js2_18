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
    
    methods: {
        add(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (!find) {
                let newItem = Object.assign({}, item, {quantity: 1})
                this.$parent.post(this.url, newItem)
                .then(res => {
                    if (res.status) {
                        this.items.push(newItem);
                    } else {
                        console.log('Error_add_item: ' + newItem.product_name);
                    }
                })
            } else {
                console.log('Увеличиваем количество продукта ' + item.product_name);
                this.$parent.put(`/api/basket/${item.id_product}`, { amount: 1})
                .then(res => {
                    if (res.status) {
                        find.quantity++;
                    } else {
                        console.log('Error_add_item: ' + item.product_name);
                    }
                })
            }
        },
        remove(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                this.$parent.put(`/api/basket/${item.id_product}`, { amount: -1})
                .then(res => {
                    if (res.status) {
                        find.quantity--;
                    } else {
                        console.log('Error_remove_item: ' + item.product_name);
                    }
                }) 
            } else {
                this.$parent.delete(`/api/basket/${item.id_product}`)
                .then(res => {
                    if (res.status) {
                        this.items.splice(this.items.indexOf(find), 1);
                    } else {
                        console.log('Error_remove_item: ' + item.product_name);
                    }
                }) 
                
            }
            
        }
    },

    mounted() {
        this.$parent.get(this.url).then(data => {
            this.items = data.contents;
        })
    }
}    
</script>

<style>
</style>