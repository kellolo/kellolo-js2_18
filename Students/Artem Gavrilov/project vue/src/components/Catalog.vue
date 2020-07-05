<template>
    <div class="catalog-items">
        <!--Catalog elems-->
        <item 
            itemType="catalog"
            v-for="item of items"
            :item="item"
            :key="item.id_product"
            @add-item="addItem"
        />
    </div>
</template>

<script>
import item from './Item.vue'
export default {
    components: { item },
    data() {
        return {
            url: '/api/catalog',
            items: []
        }
    },
    mounted() {
        this.$parent.get(this.url)
            .then( d => this.items = d )
    },
    methods: {
        addItem(item) {
            console.log(item)
            this.$emit('add', item)
        }
    }
}
</script>

<style>

</style>