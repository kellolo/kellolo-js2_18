<template>
    <div>
        <header>
            <div class="logo">GeekSho
                <span class="logo-p">p</span>
            </div>
            <div class="basket">

                <form action="#" class="search-form">
                    <div class="button-browse">
                        <a href="#" class="button-browse-link">Browse
                            <span class="fa fa-sort-desc browse-list"></span>
                        </a>
                        <div class="drop-down">
                            <div class="drop-down-flex">
                                <h3 class="drop-h3 down-color-h3">Women</h3>
                                <ul class="drop-ul">
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color"> Dresses</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color"> Tops</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color">Sweaters/Knits</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color">Jackets/Coats</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color"> Blazers</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color"> Denim</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color">Leggins/Pants</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color">Skirts/Shorts</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color">Accersories</a>
                                    </li>
                                </ul>
                                <h3 class="drop-h3 down-color-h3">Men</h3>
                                <ul class="drop-ul"><li class="drop-list">
                                    <a href="#" class="drop-link down-color"> Tees/Tank tops</a>
                                </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color">Shirts/Polos</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color"> Sweaters</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color">Sweatshirts/Hoodies</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color"> Blazers</a>
                                    </li>
                                    <li class="drop-list">
                                        <a href="#" class="drop-link down-color">Jackets/Vests</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="Search for item..." class="search-field">
                    <button class="btn-search">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-basket">Корзина</button>
                <basket ref="basket" />

            </div>
        </header>
        <main>
            <nav class="nav">
                <ul class="menu center">
                    <li class="menu__list"><a href="#" class="menu__link">Home</a>

                    </li>
                    <li class="menu__list"><a href="#" class="menu__link">Man</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="product.html" class="drop__a">Dresses </a></li>
                                    <li><a href="product.html" class="drop__a">Blazers </a></li>
                                    <li><a href="product.html" class="drop__a">Denim </a></li>
                                    <li><a href="product.html" class="drop__a">Leggings/Pants </a></li>
                                    <li><a href="product.html" class="drop__a">Skirts/Shorts </a></li>
                                    <li><a href="product.html" class="drop__a">Accessories</a></li>
                                </ul>

                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="product.html" class="drop__a">Dresses </a></li>
                                    <li><a href="product.html" class="drop__a">Tops </a></li>
                                    <li><a href="product.html" class="drop__a">Sweaters/Knits </a></li>
                                </ul>
                            </div>
                            <div class="drop-flex">
                                <h3 class="drop-h3">Men</h3>
                                <ul class="drop-ul">
                                    <li><a href="product.html" class="drop-link"> Dresses</a></li>
                                    <li><a href="product.html" class="drop-link"> Tops</a></li>
                                    <li><a href="product.html" class="drop-link"> Sweaters/Knits</a></li>
                                    <li><a href="product.html" class="drop-link"> Jackets/Coats</a></li>
                                </ul>
                                <a href="#">
                                    <div class="super-sale-link"></div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="menu__list"><a href="#" class="menu__link">Women</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="product.html" class="drop__a">Dresses </a></li>
                                    <li><a href="product.html" class="drop__a">Blazers </a></li>
                                    <li><a href="product.html" class="drop__a">Denim </a></li>
                                    <li><a href="product.html" class="drop__a">Leggings/Pants </a></li>
                                    <li><a href="product.html" class="drop__a">Skirts/Shorts </a></li>
                                    <li><a href="product.html" class="drop__a">Accessories</a></li>
                                </ul>

                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="product.html" class="drop__a">Dresses </a></li>
                                    <li><a href="product.html" class="drop__a">Tops </a></li>
                                    <li><a href="product.html" class="drop__a">Sweaters/Knits </a></li>
                                </ul>
                            </div>
                            <div class="drop-flex">
                                <h3 class="drop-h3">Men</h3>
                                <ul class="drop-ul">
                                    <li><a href="product.html" class="drop-link"> Dresses</a></li>
                                    <li><a href="product.html" class="drop-link"> Tops</a></li>
                                    <li><a href="product.html" class="drop-link"> Sweaters/Knits</a></li>
                                    <li><a href="product.html" class="drop-link"> Jackets/Coats</a></li>
                                </ul>
                                <a href="#">
                                    <div class="super-sale-link"></div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="menu__list"><a href="product.html" class="menu__link">Kids</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="product.html" class="drop__a">Dresses </a></li>
                                    <li><a href="product.html" class="drop__a">Blazers </a></li>
                                    <li><a href="product.html" class="drop__a">Denim </a></li>
                                    <li><a href="product.html" class="drop__a">Leggings/Pants </a></li>
                                    <li><a href="product.html" class="drop__a">Skirts/Shorts </a></li>
                                    <li><a href="product.html" class="drop__a">Accessories</a></li>
                                </ul>

                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="product.html" class="drop__a">Dresses </a></li>
                                    <li><a href="product.html" class="drop__a">Tops </a></li>
                                    <li><a href="product.html" class="drop__a">Sweaters/Knits </a></li>
                                </ul>
                            </div>
                            <div class="drop-flex">
                                <h3 class="drop-h3">Men</h3>
                                <ul class="drop-ul">
                                    <li><a href="product.html" class="drop-link"> Dresses</a></li>
                                    <li><a href="product.html" class="drop-link"> Tops</a></li>
                                    <li><a href="product.html" class="drop-link"> Sweaters/Knits</a></li>
                                    <li><a href="product.html" class="drop-link"> Jackets/Coats</a></li>
                                </ul>
                                <a href="#">
                                    <div class="super-sale-link"></div>
                                </a>
                            </div>
                        </div>

                    </li>
                    <li class="menu__list"><a href="product.html" class="menu__link">Accoseriese</a>
                    </li>
                    <li class="menu__list"><a href="product.html" class="menu__link">Featured</a>
                    </li>
                    <li class="menu__list"><a href="product.html" class="menu__link">Hot Deals</a>
                        <div class="drop drop_last">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="product.html" class="drop__a">Dresses </a></li>
                                    <li><a href="product.html" class="drop__a">Blazers </a></li>
                                    <li><a href="product.html" class="drop__a">Denim </a></li>
                                    <li><a href="product.html" class="drop__a">Leggings/Pants </a></li>
                                    <li><a href="product.html" class="drop__a">Skirts/Shorts </a></li>
                                    <li><a href="product.html" class="drop__a">Accessories</a></li>
                                </ul>

                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="product.html" class="drop__a">Dresses </a></li>
                                    <li><a href="product.html" class="drop__a">Tops </a></li>
                                    <li><a href="product.html" class="drop__a">Sweaters/Knits </a></li>
                                </ul>
                            </div>
                            <div class="drop-flex">
                                <h3 class="drop-h3">Men</h3>
                                <ul class="drop-ul">
                                    <li><a href="product.html" class="drop-link"> Dresses</a></li>
                                    <li><a href="product.html" class="drop-link"> Tops</a></li>
                                    <li><a href="product.html" class="drop-link"> Sweaters/Knits</a></li>
                                    <li><a href="product.html" class="drop-link"> Jackets/Coats</a></li>
                                </ul>
                                <a href="#">
                                    <div class="super-sale-link"></div>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="center">
                <catalog @add="addItem"/>
            </div>
        </main>
        <div class="banner_f">
            <div class="banner_box" :style="{backgroundImage:`url(../../img/1314.png})`}">
                <div class="banner_box_pic" >
                    <div class="banner_box-text">
                        <div class="banner_box-left">
                            <h3 class="banner_h3">30%
                                <span class="pink">OFFER</span>
                            </h3>
                            <h4 class="banner_h4">FOR WOMEN</h4>
                        </div>
                    </div>
                </div>
                <div class="banner_box-right">
                    <div class="icons-with-texts">
                        <div class="feature-icons">
                            <a href="#">
                                <div class="feature-text-icon-truck"></div>
                            </a>
                            <a href="#">
                                <div class="feature-text-icon-discount"></div>
                            </a>
                            <a href="#">
                                <div class="feature-text-icon-croun"></div>
                            </a>
                        </div>
                        <div class="feature-texts">
                            <div>
                                <a href="#">
                                    <h3 class="feature-text-h3 ">Free Delivery</h3>
                                </a>
                                <p class="feature-text-p">Worldwide delivery on all. Authorit tively morph next-generation innov
                                    tion with extensive models.</p>
                            </div>
                            <div>
                                <a href="#">
                                    <h3 class="feature-text-h3 feature-text-h3_sales">Sales&nbsp;&amp;&nbsp;discounts</h3>
                                </a>
                                <p class="feature-text-p feature-text-p_sales">Worldwide delivery on all. Authorit tively morph next-generation innov
                                    tion with extensive models.</p>
                            </div>
                            <div>
                                <a href="#">
                                    <h3 class="feature-text-h3 feature-text-h3_quality">Quality assurance</h3>
                                </a>
                                <p class="feature-text-p feature-text-p_quality">Worldwide delivery on all. Authorit tively morph next-generation innov
                                    tion with extensive models.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="subscribe" :sryle="{background: 'url(img/sub-back-op.png), url(img/sub-back.png) no-repeat center'}">
            <div class="max-container">
                <div class="subscribe-slider-img">
                    <figure class="feedback-block">
                        <div class="feedback">
                            <div class="feedback-img-block">
                                <img src="img/Burhan.png" alt="Bin Burhan" class="feedback-user-img">
                            </div>
                            <div class="feedback-text">
                                <q class="user-feedback-quote">Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar pursus condimentum a. Aliquam condumentum mattis neque sed pretium</q>
                                <div class="user-quote">
                                    <h3 class="user-quote-h3">Bin Burhan</h3>
                                    <p class="user-quote-p">Dhaka, Bd</p>
                                </div>
                                <div class="feedback-nav">
                                    <div class="nav-block nav-edge">
                                    </div>
                                    <div class="nav-block nav-center">
                                    </div>
                                    <div class="nav-block nav-edge">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <div class="subscribe-block">
                        <form action="#" class="subscribe-form">
                            <div class="subscribe-caption">
                                <h3 class="subscribe-h3">Subscribe</h3>
                                <p class="subscribe-p">For our newletter and promotion</p>
                            </div>
                            <div class="edit-button">
                                <input type="email" placeholder="Enter Your Email" class="email-for-subscribe">
                                <button type="submit" class="button-for-subscribe">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="footer_maps center">
                <div class="max_box max_box_left">
                    <a class="logo" href="">
                        <img class="logo__img" src="img/18.png" alt="logo">BRAN
                        <span class="logo-d">D</span>
                    </a>
                    <div class="footer_text">
                        <div class="footer_text_top">
                            Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
                        </div>
                        <div class="footer_text_bot">
                            Efficiently plagiarize 24/365 action items and focused infomediaries.
                            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                        </div>
                    </div>
                </div>
                <div class="link_box">
                    <div class="maps_box">
                        <h3 class="maps__h3">COMPANY</h3>
                        <ul class="maps__ul">
                            <li class="likn_mass">
                                <a href="#" class="maps__a">Home</a>
                            </li>
                            <li class="likn_mass">
                                <a href="#" class="maps__a">Shop</a>
                            </li>
                            <li class="likn_mass">
                                <a href="#" class="maps__a">About</a>
                            </li>
                            <li class="likn_mass">
                                <a href="#" class="maps__a">How It Work</a>
                            </li>
                            <li class="likn_mass">
                                <a href="#" class="maps__a">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="maps_box">
                        <h3 class="maps__h3">INFORMATION</h3>
                        <ul class="maps__ul">
                            <li class="likn_mass"><a href="#" class="maps__a">Privacy Policy</a></li>
                            <li class="likn_mass"><a href="#" class="maps__a">Tearms & Condition</a></li>
                            <li class="likn_mass"><a href="#" class="maps__a">How to Buy</a></li>
                            <li class="likn_mass"><a href="#" class="maps__a">How to Sell</a></li>
                            <li class="likn_mass"><a href="#" class="maps__a">Promotion</a></li>
                        </ul>
                    </div>
                    <div class="maps_box">
                        <h3 class="maps__h3">SHOP CATEGORY</h3>
                        <ul class="maps__ul">
                            <li class="likn_mass"><a href="#" class="maps__a">Men</a></li>
                            <li class="likn_mass"><a href="#" class="maps__a">Women</a></li>
                            <li class="likn_mass"><a href="#" class="maps__a">Child</a></li>
                            <li class="likn_mass"><a href="#" class="maps__a">Apparel</a></li>
                            <li class="likn_mass"><a href="#" class="maps__a">Brows All</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer_copyright center">
                <div class="copyright">© 2017  Brand  All Rights Reserved.
                </div>
                <div class="social-network">
                    <a href="https://www.facebook.com">
                        <div class="symbol-net">
                            <div class="symbol-f">
                                <span class="fab fa-facebook-f"></span>
                            </div>
                        </div>
                    </a>
                    <a href="https://twitter.com">
                        <div class="symbol-net twitter">
                            <div class="symbol-tw">
                                <span class="fab fa-twitter"></span>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="symbol-net-brocken">
                            <div class="symbol-en">
                                <span class="fab fa-linkedin-in"></span>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.pinterest.ru/">
                        <div class="symbol-net">
                            <div class="symbol-p">
                                <span class="fab fa-pinterest-p"></span>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.google.com">
                        <div class="symbol-net">
                            <div class="symbol-g">
                                <span class="fab fa-google-plus-g"></span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import Basket from '../components/Basket.vue'
// import catalogItem from '../components/Item'

export default {
    components: {
        //блок для регистрации дочерних компонентов
        // Catalog, Basket, catalogItem
        'catalog': Catalog,
        'basket': Basket
    },
    data() {
        //дата из объекта превратилась в функцию, возвращающую объект
        return {

        }
    },
    props: {
        //пробрасываемые извне данные, которые не изменяются внутри компонента
    },
    methods: {
        addItem(item) {
            this.$refs.basket.add(item);
        },
        get(url) {
            return fetch(url).then(data => data.json());
        },
        post(url, obj) {
            return fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj)
            }).then(data => data.json());
        },
        put(url, obj) {
            return fetch(url, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj)
            }).then(data => data.json());
        },
        delete(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            }).then(data => data.json());
        }
    },
    mounted() {
        // this.$children[0] // >>> [{1}, {2}] >>> [{3}, {1}, {2}]
        // this.$refs.kolya //>>> comp Basket { kolya: {/Basket.vue/} }
    }
}
</script>

<style>

</style>