<template>
    <div class="product-card">
        <button v-if="isInWishlist" class="toggle-wishlist" @click="wishlistToggle">
            <img src='../assets/img/favourite.png' alt="" style="margin-right: 2px">
        </button>
        <button v-if="!isInWishlist" class="toggle-wishlist" @click="wishlistToggle">
            <img src="../assets/img/not-favourite.png" alt="" style="width: 25px;">
        </button>
        <div class="image">
            <img :src="imageSrc" alt="">
            <button class="view-button" @click="openProductPopup">QUICK VIEW</button>
            <a class="view-button mobile" @click.prevent="goToProductPage">QUICK VIEW</a>
        </div>
        <p class="type">{{ type }}</p>
        <p class="name">{{ name }}</p>
        <div class="stars">
            <img v-for="star in starArrayProduct" :key="star" src="../assets/img/star.png" alt="">
        </div>
        <p class="price">{{ price }}₽</p>
        <div class="calc">
            <button @click="decreaseQuantity">-</button>
            <input type="number" v-model="localQuantity" min="1" :max="maxItems" @input="checkQuantity">
            <button @click="increaseQuantity">+</button>
            <button class="add-to-cart" @click="addToCart">
                ADD
            </button>
        </div>
        <p v-if="cartError" class="cart-error">Товар уже в корзине</p>

        <QuickView v-if="showProductPopup" 
                  :view-type="'product'" 
                  v-bind="productDetails"
                  @update-quantity="updateQuantity" 
                  @close-popup="showProductPopup = false" 
                  @wishlist="wishlistToggle" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import QuickView from './quickView.vue';

export default {
    components: {
        QuickView
    },
    props: {
        image: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        sellerStars: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        maxItems: {
            type: Number,
            required: true
        },
        reviews: {
            type: Number,
            required: true
        },
        starsProduct: {
            type: Number,
            required: true
        },
        article: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        detail: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            showProductPopup: false,
            localQuantity: 1,
            cartError: null
        };
    },
    computed: {
        ...mapState(['wishlist']),
        isInWishlist() {
            return this.wishlist.some(item => item.id === this.id);
        },
        imageSrc() {
            return require(`@/assets/img/${this.image}`);
        },
        starArrayProduct() {
            return Array.from({ length: this.starsProduct }, (_, i) => i + 1);
        },
        productDetails() {
            return {
                image: this.imageSrc,
                name: this.name,
                price: this.price,
                reviews: this.reviews,
                article: this.article,
                id: this.id,
                detail: this.detail,
                sellerStars: this.sellerStars,
                starsProduct: this.starsProduct,
                maxItems: this.maxItems,
                quantity: this.localQuantity
            };
        }
    },
    methods: {
        decreaseQuantity() {
            if (this.localQuantity > 1) {
                this.localQuantity--;
                this.$emit('update-quantity', this.localQuantity);
            }
        },
        increaseQuantity() {
            if (this.localQuantity < this.maxItems) {
                this.localQuantity++;
                this.$emit('update-quantity', this.localQuantity);
            }
        },
        checkQuantity() {
            this.localQuantity = Math.max(1, Math.min(this.localQuantity, this.maxItems));
            this.$emit('update-quantity', this.localQuantity);
        },
        openProductPopup() {
            this.showProductPopup = true;
            this.localQuantity = 1;
        },
        wishlistToggle() {
            this.$emit('wishlist', { id: this.id, wishlist: !this.isInWishlist });
        },
        async addToCart() {
            const result = await this.$store.dispatch('addToCart', {
                product: {
                    id: this.id,
                    name: this.name,
                    price: this.price,
                    image: this.image
                },
                quantity: this.localQuantity
            });

            if (result.error) {
                this.cartError = result.error;
                setTimeout(() => {
                    this.cartError = null;
                }, 3000); // Сообщение исчезнет через 3 секунды
            }
        },
        goToProductPage() {
            const productData = {
                name: this.name,
                price: this.price,
                image: this.image,
                starsProduct: this.starsProduct,
                reviews: this.reviews,
                article: this.article,
                sellerStars: this.sellerStars,
                maxItems: this.maxItems,
                isInWishlist: this.isInWishlist,
                id: this.id,
                detail: this.detail
            };
            
            this.$store.dispatch('setSelectedProduct', productData);
            this.$router.push({ name: 'data' });
        }
    },
    watch: {
        maxItems: {
            immediate: true,
            handler(newMaxItems) {
                if (this.localQuantity > newMaxItems) {
                    this.localQuantity = 1;
                }
            }
        }
    }
};
</script>

<style scoped>
.cart-error {
    color: #ff0000;
    font-size: 12px;
    margin-top: 5px;
    text-align: center;
}
</style>