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
                    <button @click="setActiveTab('description')" :class="{ active: activeTab === 'description' }">
                        Описание
                    </button>
                    <button @click="setActiveTab('deliver')" :class="{ active: activeTab === 'deliver' }">
                        Доставка
                    </button>
                    <button @click="setActiveTab('additional')" :class="{ active: activeTab === 'additional' }">
                        Дополнительная информация
                    </button>
                    <button @click="setActiveTab('reviews')" :class="{ active: activeTab === 'reviews' }">
                        Отзывы
                    </button>
                    <button @click="setActiveTab('about')" :class="{ active: activeTab === 'about' }">
                        О продавце
                    </button>
                    <button @click="setActiveTab('other')" :class="{ active: activeTab === 'other' }">
                        Другие товары
                    </button>
                    <button @click="setActiveTab('send')" :class="{ active: activeTab === 'send' }">
                        Задать вопрос
                    </button>
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
                                <p style="color: rgba(255, 255, 255, 0.5);">At purus consectetur ligula odio faucibus
                                    orcin.</p>
                            </div>
                        </div>
                        <div class="table">
                            <img src="../assets/img/package.png" alt="">
                            <div class="text">
                                <p>FRESH PRODUCTS</p>
                                <p style="color: rgba(255, 255, 255, 0.5);">Feugiat vel sodales ultric ies aliquam
                                    suspen.</p>
                            </div>
                        </div>
                        <div class="table">
                            <img src="../assets/img/search.png" alt="">
                            <div class="text">
                                <p>BEST DISCOUNT</p>
                                <p style="color: rgba(255, 255, 255, 0.5);">Dignissim lectus fermen tum, pulvinar nulla.
                                </p>
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
                                    Un eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod
                                    quis viverra nibh cras pulvinar mattis
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
                                    Un eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod
                                    quis viverra nibh cras pulvinar mattis
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <p>Оставить отзыв могут только зарегистрированные клиенты, которые приобрели данный продукт.</p>
                    </div>
                </div>
                <div class="about" v-show="activeTab === 'about'">
                    <p>Информация о продавце</p>
                    <div class="info">
                        <p>Название магазина: <span>Sunkissed</span></p>
                        <p>Продавец: <span>Sunkissed</span></p>
                        <p>Рейтинг: <span>{{ productData.sellerStars ? `${productData.sellerStars} звезд` : 'отсутствует' }}</span></p>
                    </div>
                </div>
                <div class="other" v-show="activeTab === 'other'">
                    <div class="catalog">
                        <div v-if="similarProducts.length === 0" class="no-products">
                            Похожих товаров не найдено
                        </div>
                        <ProductCard v-else
                                    v-for="product in similarProducts" 
                                    :key="product.id"
                                    :image="product.image"
                                    :type="product.type"
                                    :name="product.name"
                                    :sellerStars="product.sellerStars"
                                    :price="product.price"
                                    :maxItems="product.maxItems"
                                    :reviews="product.reviews"
                                    :starsProduct="product.starsProduct"
                                    :article="product.article"
                                    :id="product.id"
                                    :detail="product.detail"
                                    @wishlist="updateWishlist" />
                    </div>
                </div>
                <div class="send" v-show="activeTab === 'send'">
                    <p>Вопрос по товару</p>
                    <form class="text">
                        <div class="info">
                            <input type="text" placeholder="Ваше имя" required>
                            <input type="email" placeholder="you@example.com" required>
                        </div>
                        <div class="message">
                            <textarea name="message" id="message" placeholder="Мой вопрос..." required></textarea>
                        </div>
                        <button type="submit">ОТПРАВИТЬ ВОПРОС</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '@/components/productCard.vue';
import { catalogData } from '@/components/productInfo.vue';

export default {
    components: {
        ProductCard
    },
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
        },
        similarProducts() {
            
            const sameTypeProducts = catalogData.filter(product => 
                product.type === this.productData.type && 
                product.id !== this.productData.id
            );
            
            const shuffled = [...sameTypeProducts].sort(() => 0.5 - Math.random());
            const result = shuffled.slice(0, 8);

            return result;
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
        },
        updateWishlist({ id }) {
            const product = catalogData.find(product => product.id === id);
            if (product) {
                this.$store.dispatch('toggleWishlist', product);
            }
        }
    }
}
</script>