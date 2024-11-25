<template>
    <div class="product-page">
        <div class="container">
            <div class="links">
                <router-link to="mainPage" class="home-link">HOME</router-link>
                <span>/</span>
                <p>PRODUCT</p>
            </div>
            <div class="data">
                <p class="heading">{{ productData.name }}</p>
                <div class="rate">
                    <div class="stars">
                        <img v-for="star in productData.starsProduct" 
                             :key="star" 
                             src="../assets/img/star.png" 
                             alt="">
                        <a href="#">({{ productData.reviews }} customer reviews)</a>
                    </div>
                    <span></span>
                    <div class="favourites-link">
                        <div v-if="isInWishlist" class="favourite">
                            <button @click="toggleWishlist"><img src="../assets/img/favourite.png" alt=""></button>
                            <a href="#">Browse wishlist</a>
                        </div>
                        <div v-else class="not-favourite">
                            <button @click="toggleWishlist"><img src="../assets/img/not-favourite.png" alt=""></button>
                            <p>Add to wishlist</p>
                        </div>
                    </div>
                </div>
                <div class="article">
                    <p>SKU: <span>{{ productData.article }}</span></p>
                </div>
                <div class="user-profile">
                    <img src="../assets/img/inst.png" alt="">
                    <div class="stars">
                        <img v-for="star in productData.sellerStars" 
                             :key="star" 
                             src="../assets/img/star.png" 
                             alt="">
                    </div>
                </div>
            </div>
            <div class="product-info">
                <img src="../assets/img/orange.jpg" alt="">
                <div class="product-price">
                    <p class="price">{{ productData.price }}₽</p>
                    <p>GET IT TODAY</p>
                    <div class="deliver">
                        <img src="../assets/img/inst.png" alt="">
                        <p><span>Pickup: </span> Preston Inglewood, Maine 98380</p>
                    </div>
                    <div class="deliver">
                        <img src="../assets/img/inst.png" alt="">
                        <p><span>Shipping: </span> Unavailable in Your Area</p>
                    </div>
                    <div class="product-stock">
                        <img src="../assets/img/correct.png" alt="">
                        {{ productData.maxItems }} in stock
                    </div>
                    <div class="product-pay">
                        <div class="calc">
                            <button @click="decreaseQuantity">-</button>
                            <input type="number" min="1" :max="productData.maxItems" v-model="localQuantity" @input="checkQuantity">
                            <button @click="increaseQuantity">+</button>
                            <button class="add-to-cart" @click="addToCart">
                                <img src="../assets/img/cart.png" alt="">
                                <p>ADD TO CART</p>
                            </button>
                            <p v-if="cartError" class="cart-error" style="margin-bottom: -17px;">{{ cartError }}
                            </p>
                        </div>
                        <div class="or">
                            <span></span>
                            <p>OR</p>
                            <span></span>
                        </div>
                        <a href="#" class="buy-now"><img src="../assets/img/cart.png" alt="">BUY NOW</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            localQuantity: 1,
            cartError: null
        }
    },
    computed: {
        ...mapState(['selectedProduct', 'wishlist']),
        productData() {
            return this.selectedProduct || {
                name: '',
                price: 0,
                image: '',
                starsProduct: 0,
                reviews: 0,
                article: '',
                sellerStars: 0,
                maxItems: 0,
                isInWishlist: false
            };
        },
        isInWishlist() {
            return this.wishlist.some(item => item.id === this.productData.id);
        }
    },
    created() {
        if (!this.selectedProduct) {
            this.$router.push({ name: 'main' }); // Редирект на главную, если нет данных
        }
    },
    watch: {
        selectedProduct: {
            immediate: true,
            handler() {
                // Сбрасываем количество при смене товара
                this.localQuantity = 1;
            }
        },
        'productData.maxItems': {
            immediate: true,
            handler(newMaxItems) {
                // Проверяем и корректируем количество при изменении maxItems
                if (this.localQuantity > newMaxItems) {
                    this.localQuantity = 1;
                }
            }
        }
    },
    methods: {
        decreaseQuantity() {
            if (this.localQuantity > 1) {
                this.localQuantity--;
            }
        },
        increaseQuantity() {
            if (this.localQuantity < this.productData.maxItems) {
                this.localQuantity++;
            }
        },
        checkQuantity() {
            // Убедимся, что количество не превышает максимальное
            this.localQuantity = Math.max(1, Math.min(this.localQuantity, this.productData.maxItems));
        },
        async addToCart() {
            const result = await this.$store.dispatch('addToCart', {
                product: {
                    id: this.productData.id,
                    name: this.productData.name,
                    price: this.productData.price,
                    image: this.productData.image
                },
                quantity: this.localQuantity
            });
            
            if (result.error) {
                this.cartError = result.error;
                setTimeout(() => {
                    this.cartError = null;
                }, 3000);
            }
        },
        toggleWishlist() {
            this.$store.dispatch('toggleWishlist', {
                id: this.productData.id,
                name: this.productData.name,
                price: this.productData.price,
                image: this.productData.image,
                starsProduct: this.productData.starsProduct,
                reviews: this.productData.reviews,
                article: this.productData.article,
                sellerStars: this.productData.sellerStars,
                maxItems: this.productData.maxItems
            });
        }
    }
}
</script>