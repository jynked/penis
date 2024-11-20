<template>
    <div class="product-card">
        <button  v-if="isInWishlist" class="toggle-wishlist" @click="wishlistToggle">
            <img src='../assets/img/favourite.png' alt="" style="width: 25px; height: auto; margin-right: 5px;">
        </button>
        <button v-if="!isInWishlist" class="toggle-wishlist" @click="wishlistToggle">
            <img src="../assets/img/not-favourite.png" alt="" style="width: 35px; height: auto;">
        </button>
        <div class="image">
            <img :src="imageSrc" alt="">
            <button class="view-button" @click="openPopup">QUICK VIEW</button>
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
            <button class="add-to-cart">
                <img src="../assets/img/cart.png" alt="">
            </button>
        </div>

        <QuickView v-if="showPopup" v-bind="productDetails" @update-quantity="updateQuantity"
            @close-popup="showPopup = false" @wishlist="wishlistToggle()" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import QuickView from '../components/quickView.vue';

export default {
    components: { QuickView },
    props: {
        image: { type: String, required: true },
        type: { type: String, required: true },
        name: { type: String, required: true },
        sellerStars:  { type: Number, required: true },
        price: { type: Number, required: true },
        maxItems: { type: Number, required: true },
        reviews: { type: Number, required: true },
        starsProduct: { type: Number, required: true },
        article: { type: String, required: true },
        id: { type: Number, required: true },
        detail: { type: String, required: true },
    },
    data() {
        return {
            showPopup: false,
            localQuantity: 1,
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
                sellerStars:  this.sellerStars,
                starsProduct: this.starsProduct,
                maxItems: this.maxItems,
                quantity: this.localQuantity,
                wishlist: this.isInWishlist, // Убедитесь, что это значение обновляется
            };
        },
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
        openPopup() {
            this.showPopup = true;
        },
        wishlistToggle() {
            this.$emit('wishlist', { id: this.id, wishlist: !this.isInWishlist });
        },
    },
};
</script>
