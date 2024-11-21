<template>
    <div class="quick-view" @click="handleClickOutside">
        <div class="container">
            <div class="main-product" v-if="viewType === 'product'" style="display: block;">
                <button class="back" @click="closePopup"><img src="../assets/img/close.png" alt=""></button>
                <div class="content" @click.stop>
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
                            <button @click.stop="wishlistToggle"><img src="../assets/img/not-favourite.png"
                                    alt=""></button>
                            Add to wishlist
                        </div>
                        <div class="browse-wishlist" v-if="wishlist">
                            <button>
                                <img src="../assets/img/favourite.png" alt=""
                                    style="width: 20px; height: auto; margin-left: 4px; margin-right: 4px;"
                                    @click.stop="wishlistToggle">
                            </button>
                            <a href="#">Browse wishlist</a>
                        </div>
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
                                <div>
                                    <p>{{ detail }}</p>
                                    <router-link to="/log" style="color: #000;" @click.stop>
                                        Learn more
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-log" v-if="viewType === 'login'" style="display: block;">
                <button class="back" @click="closePopup"><img src="../assets/img/close.png" alt=""></button>
                <div class="content" @click.stop>
                    <div class="title">
                        <img src="../assets/img/inst.png" alt="">
                        <p>MY ACCOUNT</p>
                    </div>
                    <div class="log-and-reg">
                        <div class="log-buttons">
                            <button @click="showLogin" :class="{ active: isLogin }">LOGIN</button>
                            <button @click="showRegister" :class="{ active: !isLogin }">REGISTER</button>
                        </div>
                        <form id="login-form" v-if="isLogin === true">
                            <div class="data">
                                <p>Username or email address *</p>
                                <input type="text" name="email-log" id="email-log" required>
                            </div>
                            <div class="data">
                                <p>Password *</p>
                                <input type="password" name="password-log" id="password-log" required>
                            </div>
                            <div class="remember-forget">
                                <div class="remember">
                                    <input type="checkbox" id="remember" name="remember">
                                    <label for="remember">Remember me</label>
                                </div>
                                <a href="#">Lost your password?</a>
                            </div>
                            <button type="submit">LOG IN</button>
                        </form>
                        <form id="register-form"  v-if="isLogin === false">
                            <div class="data">
                                <p>Email address *</p>
                                <input type="email" name="email-reg" id="email-reg" required>
                            </div>
                            <div class="data">
                                <p>Password *</p>
                                <input type="password" name="password" id="password" required>
                            </div>
                            <div class="for-seller" v-if="role === 'seller'">
                                <div class="data-block">
                                    <div class="data">
                                        <p>Имя *</p>
                                        <input type="text" name="name" id="name" required>
                                    </div>
                                    <div class="data">
                                        <p>Фамилия *</p>
                                        <input type="text" name="lastname" id="lastname" required>
                                    </div>
                                </div>
                                <div class="data">
                                    <p>Название магазина *</p>
                                    <input type="text" name="shop-name" id="shop-name" required>
                                </div>
                                <div class="data">
                                    <p>URL магазина *</p>
                                    <input type="text" name="shop-url" id="shop-url" required>
                                    <p class="url">https://harvunity.com/store/</p>
                                </div>
                                <div class="data-block">
                                    <div class="data">
                                        <p>Company Name</p>
                                        <input type="text" name="company-name" id="company-name" required>
                                    </div>
                                    <div class="data">
                                        <p>Name of Bank</p>
                                        <input type="text" name="bank" id="bank" required>
                                    </div>
                                </div>
                                <div class="data">
                                    <p>Номер телефона *</p>
                                    <input type="tel" name="number" id="number" required>
                                </div>
                            </div>
                            <div class="who-are-you">
                                <div class="person">
                                    <input type="radio" name="role" id="client" value="client" v-model="role" required
                                        checked>
                                    <label for="client">
                                        <p>Я покупатель</p>
                                    </label>
                                </div>
                                <div class="person">
                                    <input type="radio" name="role" id="seller" value="seller" v-model="role" required>
                                    <label for="seller">
                                        <p>Я продавец</p>
                                    </label>
                                </div>
                            </div>
                            <p class="private-policy">Ваши личные данные будут использоваться для упрощения вашего
                                дальнейшего
                                взаимодействия с сайтом,
                                управления доступом к вашему аккаунту и других целей, описанных в документе
                                <a href="#">privacy policy</a>.
                            </p>
                            <button type="submit">REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['update-quantity', 'close-popup', 'wishlist'],
    props: {
        image: { type: String, required: false, default: '' },
        name: { type: String, required: false, default: '' },
        starsProduct: { type: Number, required: false, default: 0 },
        price: { type: Number, required: false, default: 0 },
        quantity: { type: Number, required: false, default: 1 },
        maxItems: { type: Number, required: false, default: 0 },
        reviews: { type: Number, required: false, default: 0 },
        sellerStars: { type: Number, required: false, default: 0 },
        article: { type: String, required: false, default: '' },
        id: { type: Number, required: false, default: 0 },
        detail: { type: String, required: false, default: '' },
        wishlist: { type: Boolean, required: false, default: false },
        viewType: {
            type: String,
            required: true,
            validator: value => ['product', 'login'].includes(value)
        },
    },
    data() {
        return {
            isLogin: true,
            role: 'client',
            localQuantity: this.quantity,
        };
    },
    methods: {
        showLogin() {
            this.isLogin = true;
        },
        showRegister() {
            this.isLogin = false;
        },
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
        wishlistToggle(event) {
            event.stopPropagation();
            this.$emit('wishlist', { id: this.id, wishlist: !this.wishlist });
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
    },
}
</script>
