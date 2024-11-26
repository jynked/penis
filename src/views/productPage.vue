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
                        <img v-for="star in productData.starsProduct" :key="star" src="../assets/img/star.png" alt="">
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
                    <img src="../assets/img/userLogo.png" alt="">
                    <div class="stars">
                        <img v-for="star in productData.sellerStars" :key="star" src="../assets/img/star.png" alt="">
                    </div>
                </div>
            </div>
            <div class="product-info">
                <img src="../assets/img/orange.jpg" alt="">
                <div class="product-price">
                    <p class="price">{{ productData.price }}₽</p>
                    <p>GET IT TODAY</p>
                    <div class="deliver">
                        <img src="../assets/img/pickup.png" alt="">
                        <p><span>Pickup: </span> Preston Inglewood, Maine 98380</p>
                    </div>
                    <div class="deliver">
                        <img src="../assets/img/shipping.png" alt="">
                        <p><span>Shipping: </span> Unavailable in Your Area</p>
                    </div>
                    <div class="product-stock">
                        <img src="../assets/img/correct.png" alt="">
                        {{ productData.maxItems }} in stock
                    </div>
                    <div class="product-pay">
                        <div class="calc">
                            <button @click="decreaseQuantity">-</button>
                            <input type="number" min="1" :max="productData.maxItems" v-model="localQuantity"
                                @input="checkQuantity">
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
            <div class="specifications">
                <div class="points">
                    <button @click="setActiveTab('description')" 
                            :class="{ active: activeTab === 'description' }">
                        Description
                    </button>
                    <button @click="setActiveTab('deliver')"
                            :class="{ active: activeTab === 'deliver' }">
                        Deliver
                    </button>
                    <button @click="setActiveTab('additional')"
                            :class="{ active: activeTab === 'additional' }">
                        Additional information
                    </button>
                    <button @click="setActiveTab('reviews')"
                            :class="{ active: activeTab === 'reviews' }">
                        Reviews
                    </button>
                    <button>About the seller</button>
                    <button>Other products</button>
                    <button>Send question</button>
                </div>
                <div class="description" v-show="activeTab === 'description'">
                    <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus
                        malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                        fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque
                        lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu
                        accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                    <div class="tables">
                        <div class="table">
                            <img src="../assets/img/drone.png" alt="">
                            <div class="text">
                                <p>DELIVER BY DRONES</p>
                                <p style="color: rgba(255, 255, 255, 0.5);">At purus consectetur ligula odio faucibus orcin.</p>
                            </div>
                        </div>
                        <div class="table">
                            <img src="../assets/img/package.png" alt="">
                            <div class="text">
                                <p>FRESH PRODUCTS</p>
                                <p style="color: rgba(255, 255, 255, 0.5);">Feugiat vel sodales ultric ies aliquam suspen.</p>
                            </div>
                        </div>
                        <div class="table">
                            <img src="../assets/img/search.png" alt="">
                            <div class="text">
                                <p>BEST DISCOUNT</p>
                                <p style="color: rgba(255, 255, 255, 0.5);">Dignissim lectus fermen tum, pulvinar nulla.</p>
                            </div>
                        </div>
                    </div>
                    <p>Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis
                        neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
                        maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus
                        ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu
                        pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci
                        convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
                        egestas purus commodo vel.</p>
                </div>
                <div class="deliver" v-show="activeTab === 'deliver'">
                    <p>Города доставки: {{ productData.deliveryCities ? productData.deliveryCities.join(', ') : 'Нет информации' }}</p>
                </div>
                <div class="additional" v-show="activeTab === 'additional'">
                    <div class="info">
                        <p class="parameter">Вес (в граммах)</p>
                        <p>{{ productData.weight ? productData.weight.join(', ') : 'Нет информации' }}</p>
                    </div>
                    <div class="info">
                        <p class="parameter">Цвет</p>
                        <p>{{ productData.color || 'Нет информации' }}</p>
                    </div>
                </div>
                <div class="reviews" v-show="activeTab === 'reviews'">
                    <div class="left">
                        <p>{{ productData.reviews || 0 }} REVIEWS FOR {{ productData.name || 'Product' }}</p>
                        <div class="review">
                            <img src="../assets/img/userLogo.png" alt="">
                            <div class="text">
                                <div class="name">
                                    <p>Rose Tyler</p>
                                    <div class="stars">
                                        <img src="../assets/img/star.png" alt="">
                                        <img src="../assets/img/star.png" alt="">
                                        <img src="../assets/img/star.png" alt="">
                                        <img src="../assets/img/star.png" alt="">
                                        <img src="../assets/img/star.png" alt="">
                                    </div>
                                </div>
                                <div class="date">
                                    <p>23.02.2022</p>
                                </div>
                                <div class="message">
                                    Un eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis
                                </div>
                            </div>
                        </div>
                        <div class="review">
                            <img src="../assets/img/userLogo.png" alt="">
                            <div class="text">
                                <div class="name">
                                    <p>Rose Tyler</p>
                                    <div class="stars">
                                        <img src="../assets/img/star.png" alt="">
                                        <img src="../assets/img/star.png" alt="">
                                        <img src="../assets/img/star.png" alt="">
                                        <img src="../assets/img/star.png" alt="">
                                    </div>
                                </div>
                                <div class="date">
                                    <p>23.02.2022</p>
                                </div>
                                <div class="message">
                                    Un eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <p>Only logged in customers who have purchased this product may leave a review.</p>
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
            cartError: null,
            activeTab: 'description'
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
                isInWishlist: false,
                deliveryCities: [],
                weight: []
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
                maxItems: this.productData.maxItems,
                deliveryCities: this.productData.deliveryCities,
                weight: this.productData.weight
            });
        },
        setActiveTab(tab) {
            this.activeTab = tab;
        }
    }
}
</script>