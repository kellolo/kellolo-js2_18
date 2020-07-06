<template>
    <div class="container">
        <div class="catalog-items">
            <item itemtype="catalog" v-for="item of items" :item="item" :key="item.id_product"/>
        </div>
    </div>
</template>

<script>
    import item from "./Item.vue";

    export default {
        components: {item},
        data() {
            return {
                items: [],
                url: "/api/catalog"
            };
        },
        mounted() {
            this.$parent.get(this.url).then(d => {
                this.items = d;
            });
        }
    };
</script>

<style>
</style>