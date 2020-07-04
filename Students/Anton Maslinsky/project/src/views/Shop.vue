<template>
    <div>
        <header class="header center">
            <div class="header__left">
                <a class="logo" href="index.html">
                    <img class="logo__img" src="img/logo.png" alt="logo">
                    BRAN<span class="text_color_red">D</span>
                </a>
                <form class="header__form" action="#">
                    <details class="header__form__button">
                        <summary>Browse</summary>
                        <div class="drop-menu header-drop">
                            <div class="drop-menu__box">
                                <h2>Women</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                    <li><a class="drop-menu__link" href="#">Blazers</a></li>
                                    <li><a class="drop-menu__link" href="#">Denim</a></li>
                                </ul>
                                <h2>Man</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </div>
                        </div>
                    </details>
                    <input class="header__form__input" type="text" placeholder="Search for Item...">
                    <a class="header__form__search" href="#"><i class="fas fa-search"></i></a>
                </form>
            </div>
            <div class="header__right">
                <a href="#" @click="showBasket = !showBasket"><img class="header__cart" src="img/cart.svg" alt="cart">
                </a>
                <basket v-show="showBasket" ref="basket" />
                <details class="header__right__details">
                    <summary class="button account-details">My Account</summary>
                    <div class="drop-menu header-drop cart-drop">    
                        <div class="drop-menu__box cart-drop__box cart-button">
                            <a class="cart-button-red" href="checkout.html">checkout</a>
                        </div>
                        <div class="drop-menu__box cart-drop__box cart-button">
                            <a class="cart-button-blue" href="index.html">go to start</a>
                        </div>
                    </div>
                </details>
            </div>
        </header>
        <nav class="nav">
            <ul class="menu center">
                <li class="menu__list"><a href="index.html" class="menu__link">Home</a></li>
                <li class="menu__list menu__man"><a href="product.html" class="menu__link menu__link_active">Man</a>
                    <div class="drop-menu">
                        <div class="drop-menu__box">
                            <h2>Man</h2>
                            <ul>
                                <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                <li><a class="drop-menu__link" href="#">Blazers</a></li>
                                <li><a class="drop-menu__link" href="#">Denim</a></li>
                                <li><a class="drop-menu__link" href="#">Leggings/Pants</a></li>
                                <li><a class="drop-menu__link" href="#">Skirts/Shorts</a></li>
                                <li><a class="drop-menu__link" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Man</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <section>
                                <h2>Man</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                </ul>
                            </section>

                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Man</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <div class="drop-menu__box__promo">
                                <p>
                                    Super<br>sale!
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu__list menu__women"><a href="#" class="menu__link">Women</a>
                    <div class="drop-menu">
                        <div class="drop-menu__box">
                            <h2>Women</h2>
                            <ul>
                                <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                <li><a class="drop-menu__link" href="#">Tops</a></li>
                                <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                <li><a class="drop-menu__link" href="#">Blazers</a></li>
                                <li><a class="drop-menu__link" href="#">Denim</a></li>
                                <li><a class="drop-menu__link" href="#">Leggings/Pants</a></li>
                                <li><a class="drop-menu__link" href="#">Skirts/Shorts</a></li>
                                <li><a class="drop-menu__link" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Women</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <section>
                                <h2>Women</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                </ul>
                            </section>

                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Women</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <div class="drop-menu__box__promo">
                                <p>
                                    Super<br>sale!
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu__list menu__kids"><a href="#" class="menu__link">Kids</a>
                    <div class="drop-menu">
                        <div class="drop-menu__box">
                            <h2>Kids</h2>
                            <ul>
                                <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                <li><a class="drop-menu__link" href="#">Tops</a></li>
                                <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                <li><a class="drop-menu__link" href="#">Blazers</a></li>
                                <li><a class="drop-menu__link" href="#">Denim</a></li>
                                <li><a class="drop-menu__link" href="#">Leggings/Pants</a></li>
                                <li><a class="drop-menu__link" href="#">Skirts/Shorts</a></li>
                                <li><a class="drop-menu__link" href="#">Accessories</a></li>
                                <li><a class="drop-menu__link" href="#">Blazers</a></li>
                                <li><a class="drop-menu__link" href="#">Denim</a></li>
                                <li><a class="drop-menu__link" href="#">Leggings/Pants</a></li>
                                <li><a class="drop-menu__link" href="#">Skirts/Shorts</a></li>
                                <li><a class="drop-menu__link" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Kids</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <section>
                                <h2>Kids</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                </ul>
                            </section>

                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Kids</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <div class="drop-menu__box__promo">
                                <p>
                                    Super<br>sale!
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu__list menu__Accoseriese"><a href="#" class="menu__link">Accoseriese</a>
                    <div class="drop-menu">
                        <div class="drop-menu__box">
                            <h2>Accoseriese</h2>
                            <ul>
                                <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                <li><a class="drop-menu__link" href="#">Tops</a></li>
                                <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                <li><a class="drop-menu__link" href="#">Blazers</a></li>
                                <li><a class="drop-menu__link" href="#">Denim</a></li>
                                <li><a class="drop-menu__link" href="#">Leggings/Pants</a></li>
                                <li><a class="drop-menu__link" href="#">Skirts/Shorts</a></li>
                                <li><a class="drop-menu__link" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Accoseriese</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <section>
                                <h2>Accoseriese</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                </ul>
                            </section>

                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Accoseriese</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <div class="drop-menu__box__promo">
                                <p>
                                    Super<br>sale!
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu__list menu__product"><a href="product.html" class="menu__link">product</a>
                    <div class="drop-menu">
                        <div class="drop-menu__box">
                            <h2>Product</h2>
                            <ul>
                                <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                <li><a class="drop-menu__link" href="#">Tops</a></li>
                                <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                <li><a class="drop-menu__link" href="#">Blazers</a></li>
                                <li><a class="drop-menu__link" href="#">Denim</a></li>
                                <li><a class="drop-menu__link" href="#">Leggings/Pants</a></li>
                                <li><a class="drop-menu__link" href="#">Skirts/Shorts</a></li>
                                <li><a class="drop-menu__link" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Product</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <section>
                                <h2>Product</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                </ul>
                            </section>

                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>Product</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                    <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                                    <li><a class="drop-menu__link" href="#">Jackets/Coats</a></li>
                                </ul>
                            </section>
                            <div class="drop-menu__box__promo">
                                <p>
                                    Super<br>sale!
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu__list menu__hot__deals"><a href="#" class="menu__link">Hot Deals</a>
                    <div class="drop-menu">
                        <div class="drop-menu__box">
                            <h2>hot__deals</h2>
                            <ul>
                                <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                <li><a class="drop-menu__link" href="#">Tops</a></li>
                                <li><a class="drop-menu__link" href="#">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>hot__deals</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                    <li><a class="drop-menu__link" href="#">Tops</a></li>
                                </ul>
                            </section>
                        </div>
                        <div class="drop-menu__box">
                            <section>
                                <h2>hot__deals</h2>
                                <ul>
                                    <li><a class="drop-menu__link" href="#">Dresses</a></li>
                                </ul>
                            </section>
                            <div class="drop-menu__box__promo">
                                <p>
                                    Super<br>sale!
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <nav class="breadcrumbs center" aria-label="breadcrumb">
            <h2 class="breadcrumbs-title">New Arrivals </h2>
            <ol class="breadcrumbs-ol">
                <li class="breadcrumb-ol__item"><a href="index.html">home</a></li>
                <li class="breadcrumb-ol__item"><a href="#">man</a></li>
                <li class="breadcrumb-ol__item breadcrumb-ol__item__active" aria-current="page">New Arrivals</li>
            </ol>
        </nav>
        <main class="center">
            <aside>
                <details class="side-menu">
                    <summary>category</summary>
                    <ul>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Accessories</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Bags</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Denim</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Hoodies & Sweatshirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Jackets & Coats</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Pants</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Polos</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shoes</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shorts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Sweaters & Knits</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">T-Shirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Tanks</a></li>
                    </ul>
                </details>
                <details class="side-menu">
                    <summary>brand</summary>
                    <ul>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Accessories</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Bags</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Denim</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Hoodies & Sweatshirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Jackets & Coats</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Pants</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Polos</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shoes</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shorts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Sweaters & Knits</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">T-Shirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Tanks</a></li>
                    </ul>
                </details>
                <details class="side-menu">
                    <summary>designer</summary>
                    <ul>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Accessories</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Bags</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Denim</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Hoodies & Sweatshirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Jackets & Coats</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Pants</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Polos</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shoes</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Shorts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Sweaters & Knits</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">T-Shirts</a></li>
                        <li class="side-menu__list"><a href="#" class="side-menu__link">Tanks</a></li>
                    </ul>
                </details>

            </aside>
            <div class="main-content">
                <div class="main-content__filter">
                    <div class="filter__top">
                        <div class="trending">
                            <h2 class="filter__top__title">trending now</h2>
                            <ul>
                                <li class="filter__list"><a href="#" class="filter__link">Bohemian</a></li>
                                <li class="filter__list"><a href="#" class="filter__link">Floral</a></li>
                                <li class="filter__list"><a href="#" class="filter__link">Lace</a></li>
                                <li class="filter__list"><a href="#" class="filter__link">Floral</a></li>
                                <li class="filter__list"><a href="#" class="filter__link">Lace</a></li>
                                <li class="filter__list"><a href="#" class="filter__link">Bohemian</a></li>
                            </ul>
                        </div>
                        <div class="size">
                            <h2 class="filter__top__title">size</h2>
                            <div class="filter__checkbox">
                                <label><input type="checkbox"> XXS</label>
                                <label><input type="checkbox"> XS</label>
                                <label><input type="checkbox"> S</label>
                                <label><input type="checkbox"> M</label>
                                <label><input type="checkbox"> L</label>
                                <label><input type="checkbox"> xl</label>
                                <label><input type="checkbox"> XXL</label>
                            </div>
                        </div>
                        <div class="price">
                            <h2 class="filter__top__title">price</h2>
                            <div class="price-selector"></div>
                            <div class="price-value">
                                <span>$52</span>
                                <span>$400</span>
                            </div>
                        </div>
                    </div>
                    <div class="filter__bottom">
                        <div class="sort">
                            <span>Sort By</span>
                            <details>
                                <summary>Name</summary>
                                <ul class="filter-drop">
                                    <li><a href="#">T-SHIRT</a></li>
                                    <li><a href="#">T-SHIRT</a></li>
                                    <li><a href="#">T-SHIRT</a></li>
                                </ul>
                            </details>
                        </div>
                        <div class="show">
                            <span>Show</span>
                            <details>
                                <summary>09</summary>
                                <ul class="filter-drop">
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">6</a></li>
                                    <li><a href="#">9</a></li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
                <div class="product-box center">
                <catalog @add="addItem"/>
                </div>
                <div class="main-content__pagination">
                    <div class="pagination__page">
                        <ul class="pagination-list">
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link"><i class="fas fa-angle-left"></i></a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link">1</a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link">2</a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link">3</a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link">4</a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link">5</a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link">6</a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link">...</a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link">20</a></li>
                            <li class="pagination__page__list"><a href="#" class="pagination__page__link"><i class="fas fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                    <div class="pagination-button">
                        <a href="#">View All</a>
                    </div>
                </div>
            </div>

        </main>
        <div class="product-feature center">
            <div class="feature__box product-feature__box">
                <div class="feature__box__content">
                    <img src="img/icons/Forma_1.png" alt="icon">
                    <h2>Free Delivery</h2>
                    <p>Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>

            </div>
            <div class="feature__box product-feature__box">
                <div class="feature__box__content">
                    <img src="img/icons/Forma_2.png" alt="icon">
                    <h2>Sales & discounts</h2>
                    <p>Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
            <div class="feature__box product-feature__box">
                <div class="feature__box__content">
                    <img src="img/icons/Forma_3.png" alt="icon">
                    <h2>Quality assurance</h2>
                    <p>Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
        </div>
        <div class="subscribe center">
            <div class="subscribe__left">
                <img src="img/subscribe__img.png" alt="img">
                <div class="subscribe__text">
                    <p>&laquo;Vestibulum quis porttitor dui! Quisque viverra nunc mi, a&nbsp;pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium&raquo;</p>
                    <span class="subscribe__text__span text_color_red">Bin Burhan</span>
                    <br>
                    <h3>Dhaka, Bd</h3>
                    <div class="subscribe__border">
                        <a class="subscribe__border__grey" href="#"></a>
                        <a class="subscribe__border__red" href="#"></a>
                        <a class="subscribe__border__grey" href="#"></a>
                    </div>
                </div>
            </div>
            <div class="subscribe__right">
                <div class="subscribe__right__text">
                    <h2>Subscribe</h2>
                    <span>FOR OUR NEWLETTER AND PROMOTION</span>
                </div>
                <div class="scroll">
                    <div class="scroll__line"><input placeholder="Enter Your Email" type="text"></div>
                    <a class="scroll__button" href="#">Subscribe</a>
                </div>
            </div>
        </div>
        <div class="clr"></div>
        <footer class="footer">
            <div class="footer__top center">
                <div class="footer__top__left">
                    <a class="logo" href="index.html">
                        <img class="logo__img" src="img/logo.png" alt="logo">
                        BRAN<span class="text_color_red">D</span>
                    </a>
                    <p class="footer__text">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits. Intrinsicly syndicate an&nbsp;expanded array of&nbsp;processes and&nbsp;cross-unit partnerships.
                        <br>
                        <br>
                        Efficiently plagiarize 24/365 action items and&nbsp;focused infomediaries.
                        Distinctively seize superior initiatives for&nbsp;wireless technologies. Dynamically optimize.

                        Objectively strategize seamless relationships via&nbsp;resource sucking testing procedures. Proactively cultivate next-generation results for&nbsp;value-added methodologies. Dynamically plagiarize unique methodologies after performance based methodologies. Monotonectally empower stand-alone mindshare rather than ubiquitous opportunities. Dynamically orchestrate resource sucking scenarios after alternative synergy.

                        Compellingly envisioneer corporate methods of&nbsp;empowerment before standards compliant technologies. Objectively facilitate progressive.</p>
                </div>
                <div class="footer__top__right">
                    <div class="footer__top__right__menu">
                        <ul>
                            <li class="footer__right__menu__list  footer__right__menu__title"><a class="text_color_red" href="#">COMPANY</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="index.html">Home</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="product.html">Shop</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">About</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">How It Works</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer__top__right__menu">
                        <ul>
                            <li class="footer__right__menu__list footer__right__menu__title"><a class="text_color_red" href="#">INFORMATION</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">Tearms & Condition</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">Privacy Policy</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">How to Buy</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">How to Sell</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">Promotion</a></li>
                        </ul>
                    </div>
                    <div class="footer__top__right__menu">
                        <ul>
                            <li class="footer__right__menu__list footer__right__menu__title"><a class="text_color_red" href="#">SHOP CATEGORY</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="product.html">Men</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">Women</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">Child</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">Apparel</a></li>
                            <li class="footer__right__menu__list"><a class="footer__right__menu__link" href="#">Brows All</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__bottom center">
                <p>&copy; 2017 Brand All Rights Reserved.</p>
                <div class="social-box">
                    <a class="social" target="_blank" href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                    <a class="social" target="_blank" href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
                    <a class="social" target="_blank" href="https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></a>
                    <a class="social" target="_blank" href="https://www.pinterest.com"><i class="fab fa-pinterest-p"></i></a>
                    <a class="social" target="_blank" href="https://www.google.com"><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
        </footer>
    </div>
<!-- ------------------------------------------- -->
  <!-- <div>
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
  </div> -->
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

