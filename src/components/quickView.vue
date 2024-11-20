<template>
    <div class="quick-view" @click="handleClickOutside">
        <div class="container">
            <div class="main">
                <button class="back" @click="closePopup"><img src="../assets/img/close.png" alt=""></button>
                <div class="content">
                    <div class="fruit-image">
                        <img :src="image" alt="">
                    </div>
                    <div class="info">
                        <a href="#" class="name">{{ name }}</a>
                        <p class="price">{{ price }}₽</p>
                        <div class="opinion">
                            <img v-for="star in starArrayProduct" :key="star" src="../assets/img/star.png" alt="">
                            <a href="#" style="color: #000;">({{ reviews }} customer reviews)</a>
                        </div>
                        <div class="items-locker">
                            <img src="../assets/img/correct.png" alt="">
                            <p>{{ maxItems }} in stock</p>
                        </div>
                        <div class="calc">
                            <button @click="decreaseQuantity">-</button>
                            <input type="number" min="1" :max="maxItems" v-model="localQuantity" @input="checkQuantity">
                            <button @click="increaseQuantity">+</button>
                            <button class="add-to-cart">
                                <img src="../assets/img/cart.png" alt="">
                                <p>ADD TO CART</p>
                            </button>
                        </div>
                        <div class="or">
                            <span></span>
                            <p>OR</p>
                            <span></span>
                        </div>
                        <a href="#" class="buy-now"><img src="../assets/img/cart.png" alt="">BUY NOW</a>
                        <div class="add-wishlist" v-if="!wishlist">
                            <button @click="wishlistToggle"><img src="../assets/img/not-favourite.png" alt=""></button>
                            Add to wishlist
                        </div>
                        <a @click="wishlistToggle" class="browse-wishlist" v-if="wishlist">
                            <img src="../assets/img/favourite.png" alt="" style="width: 20px; height: auto; margin: 0px">
                            Browse wishlist
                        </a>
                        <div class="article">
                            <p>SKU:&#160;</p>
                            <p id="article">{{ article }}</p>
                        </div>
                        <div class="user">
                            <img src="../assets/img/inst.png" alt="">
                            <div class="stars">
                                <img v-for="star in starArraySeller " :key="star" src="../assets/img/star.png" alt="">
                            </div>
                        </div>
                        <div class="links">
                            <p>Share:</p>
                            <a href="#"><img src="../assets/img/facebook.png" alt=""></a>
                            <a href="#"><img src="../assets/img/vk.png" alt=""></a>
                            <a href="#"><img src="../assets/img/inst.png" alt=""></a>
                        </div>
                        <button class="more btn btn-primary" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#' + id" aria-expanded="false">
                            More Details <img src="../assets/img/arrow.png" alt="">
                        </button>
                        <div class="collapse" :id="id">
                            <div class="card card-body">
                                <div data-bs-toggle="collapse" :data-bs-target="'#' + id">
                                    <p>{{ detail }}</p>
                                    <a href="/dfgfdsgsdgs" style="color: #000;">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: { type: String, required: true },
        name: { type: String, required: true },
        starsProduct: { type: Number, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, default: 1 },
        maxItems: { type: Number, required: true },
        reviews: { type: Number, required: true },
        sellerStars: { type: Number, required: true },
        article: { type: String, required: true },
        id: { type: Number, required: true },
        detail: { type: String, required: true },
        wishlist: { type: Boolean, required: true },
    },
    data() {
        return {
            localQuantity: this.quantity,
        };
    },
    methods: {
        increaseQuantity() {
            if (this.localQuantity < this.maxItems) {
                this.localQuantity++;
                this.$emit('update-quantity', this.localQuantity);
            }
        },
        decreaseQuantity() {
            if (this.localQuantity > 1) {
                this.localQuantity--;
                this.$emit('update-quantity', this.localQuantity);
            }
        },
        checkQuantity() {
            this.localQuantity = Math.max(1, Math.min(this.localQuantity, this.maxItems));
            this.$emit('update-quantity', this.localQuantity);
        },
        closePopup() {
            this.$emit('close-popup');
        },
        wishlistToggle() {
            this.$emit('wishlist', { id: this.id, wishlist: !this.isInWishlist });
        },
        handleClickOutside(event) {
            const content = this.$el.querySelector('.content');
            if (content && !content.contains(event.target)) {
                this.closePopup();
            }
        },
    },
    computed: {
        starArraySeller() {
            return Array.from({ length: this.sellerStars }, (_, i) => i + 1);
        },
        starArrayProduct() {
            return Array.from({ length: this.starsProduct }, (_, j) => j + 1);
        },
    },
    watch: {
        quantity(newQuantity) {
            this.localQuantity = newQuantity;
        }
    }
}
</script>
