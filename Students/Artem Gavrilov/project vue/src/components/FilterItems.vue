<template>
    <form action="#" class="search-form">
        <input type="text" class="search-field" id="search-field">
        <button class="btn-search" @click="filterItems()">
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
    methods: {
        filterItems() {
            let inputValue = document.querySelector('#search-field').value;
            let itemsFound = this.$parent.$refs.catalog.items.filter((el) =>
                el.product_name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
            );
            if (itemsFound.length) {
                this.$parent.$refs.catalog.items = itemsFound;
            } else {
                this.$parent.get(this.$parent.$refs.catalog.url)
                    .then( d => this.$parent.$refs.catalog.items = d )
            }
        }
    }
}
</script>

<style>

</style>