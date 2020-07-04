
<template>
    <div>
        <template class="product-box__list" v-if="itemType == 'catalog'">
            <div class="product">
                <a href="#" class="product__img"><img src="img/product/man/man_1.png" alt="img"></a>
                <div class="product__content">
                    <a href="#" class="product__name">{{item.product_name}}</a>
                    <p class="product__price">${{item.price}}<span class="product__star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                    </p>
                </div>
                <a class="product__add" href="#" @click="add(item)">Add to Cart</a>
            </div>
        </template>
        <template v-else-if="itemType == 'basket'">
                        <div class="drop-menu__box cart-drop__box">
                            <a href="#"><img src="img/cart-product-1.png" alt="img" class="cart-drop__img"></a>
                            <div class="cart-drop__box__content">
                                <span>Rebox Zane</span>
                                <span>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </span>
                                <span>{{item.quantity}} x ${{item.price * item.quantity}}</span>
                            </div>
                            <div class="cross">
                                <a href="#" @click="$parent.remove(item)"><i class="fas fa-times-circle"></i></a>
                            </div>
                        </div>
                        

        </template>
    </div>
</template>

<!-- <div :class="computedClass">
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
                    <p class="product-amount">{{item.quantity}}</p>
                    <p class="product-single-price">{{item.price}}</p>
                </div>
                <div class="right-block">
                    <p class="product-price">{{item.price * item.quantity}}</p>
                    <button class="del-btn" name="remove" @click="$parent.remove(item)">&times;</button>
                </div>
        </template>
    </div>   -->


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
    methods: {
        add(item) {
            this.$parent.$emit('add', item);
        }
    },
    computed: {
        computedClass() {
            return this.itemType == 'basket' ? "basket-item" : 'catalog-item';
        },
        computedSize() {
            return `http://placehold.it/${this.itemType == 'basket' ? '100x80' : '300x200'}`;
        }
    }

}

//this.$parent.$parent.refs.bskt.add(item)
</script>

<style>

</style>