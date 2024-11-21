<template>
    <div class="main-cont">
        <div class="container">
            <div class="shop-container">
                <div class="shop">
                    <p>Маркетплейс</p>
                    <div class="words">
                        <div v-for="(word, wordIndex) in words" :key="wordIndex" class="word"
                            v-show="currentWordIndex === wordIndex">
                            <span v-for="(letter, letterIndex) in visibleLetters[wordIndex]" :key="letterIndex">
                                {{ letter }}
                            </span>
                        </div>
                    </div>
                    <p class="promo">
                        Подготовьтесь к весне уже сегодня, заплатив <br>
                        $0 за доставку при регистрации у нас…
                    </p>
                    <a href="/shop">В МАГАЗИН <img src="../assets/img/buttonLink.jpg" alt=""></a>
                </div>
            </div>
            <div class="favourites-container" id="favourites">
                <p>ЛЮБИМОЕ</p>
                <div class="heading">
                    <span></span>
                    <p>САМЫЕ ПРОДАВАЕМЫЕ ПРОДУКТЫ</p>
                    <span></span>
                </div>
                <div class="catalog">
                    <ProductCard v-for="product in catalog.slice(0, visibleCountBestsellers)" :key="product.id"
                        :image="product.image" :type="product.type" :name="product.name"
                        :starsProduct="product.starsProduct" :reviews="product.reviews" :sellerStars="product.sellerStars"
                        :price="product.price" :max-items="product.maxItems" :article="product.article"
                        :detail="product.detail" :id="product.id" :wishlist="product.wishlist"
                        @wishlist="updateWishlist" />
                </div>
                <div class="buttons-visible">
                    <a href="#favourites" v-if="visibleCountBestsellers > 8" @click="loadLessBestsellers" class="load-less">Hide
                        everything</a>
                    <button v-if="catalog.length > visibleCountBestsellers" @click="loadMoreBestsellers"
                        class="load-more">Load
                        more</button>
                </div>
            </div>
            <div class="popular-container" id="popular">
                <div class="heading">
                    <span></span>
                    <p>Популярные</p>
                    <span></span>
                </div>
                <div class="catalog" id="popular">
                    <ProductCard v-for="product in catalog.slice(0, visibleCountPopular)" :key="product.id"
                        :image="product.image" :type="product.type" :name="product.name"
                        :starsProduct="product.starsProduct" :reviews="product.reviews" :sellerStars="product.sellerStars"
                        :price="product.price" :max-items="product.maxItems" :article="product.article"
                        :detail="product.detail" :id="product.id" :wishlist="product.wishlist"
                        @wishlist="updateWishlist" />
                </div>
                <div class="buttons-visible">
                    <a href="#popular" v-if="visibleCountPopular > 8" @click="loadLessPopular" class="load-less">Hide
                        everything</a>
                    <button v-if="catalog.length > visibleCountPopular" @click="loadMorePopular" class="load-more">Load
                        more</button>
                </div>
            </div>
            <div class="start-day">
                <div class="container">
                    <p>Начните свой день с вкусных <br> органических овощей</p>
                    <a href="/shop">ПЕРЕЙТИ<img src="../assets/img/buttonLink.jpg" alt=""></a>
                </div>
            </div>
            <div class="catalog-container" id="catalog">
                <div class="heading">
                    <p>Все товары</p>
                </div>
                <div class="catalog" id="popular">
                    <ProductCard v-for="product in catalog.slice(0, visibleCountCatalog)" :key="product.id"
                        :image="product.image" :type="product.type" :name="product.name"
                        :starsProduct="product.starsProduct" :reviews="product.reviews" :sellerStars="product.sellerStars"
                        :price="product.price" :max-items="product.maxItems" :article="product.article"
                        :detail="product.detail" :id="product.id" :wishlist="product.wishlist"
                        @wishlist="updateWishlist" />
                </div>
                <div class="buttons-visible">
                    <a href="#catalog" v-if="visibleCountCatalog > 8" @click="loadLessCatalog" class="load-less">Hide
                        everything</a>
                    <button v-if="catalog.length > visibleCountCatalog" @click="loadMoreCatalog" class="load-more">Load
                        more</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductCard from '@/components/productCard.vue';
import { catalogData } from '@/components/productInfo.vue';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            catalog: [],
            visibleCountBestsellers: 8,
            visibleCountPopular: 8,
            visibleCountCatalog: 8,
            words: [
                ['л', 'е', 'г', 'ч', 'е'],
                ['л', 'е', 'г', 'к', 'о', 'г', 'о'],
                ['з', 'д', 'о', 'р', 'о', 'в', 'ы', 'й'],
            ],
            isVisible: [],
            delayBetweenLetters: 200,
            delayBetweenWords: 1000,
            currentWordIndex: 0,
        };
    },
    created() {
        this.catalog = catalogData;
        this.$store.dispatch('loadWishlist');
        this.loadWishlist();
    },
    computed: {
        visibleLetters() {
            return this.words.map((word, wordIndex) => {
                if (!this.isVisible[wordIndex]) return [];
                return word.filter((_, letterIndex) => this.isVisible[wordIndex][letterIndex]);
            });
        },
        ...mapState(['wishlist']),
    },
    methods: {

        loadMoreBestsellers() {
            this.visibleCountBestsellers += 8;
        },
        loadLessBestsellers() {
            if (this.visibleCountBestsellers > 8) {
                this.visibleCountBestsellers = 8;
            }
        },

        loadMorePopular() {
            this.visibleCountPopular += 8;
        },
        loadLessPopular() {
            if (this.visibleCountPopular > 8) {
                this.visibleCountPopular = 8;
            }
        },

        loadMoreCatalog() {
            this.visibleCountCatalog += 8;
        },
        loadLessCatalog() {
            if (this.visibleCountCatalog > 8) {
                this.visibleCountCatalog = 8;
            }
        },


        startTypingEffect() {
            this.isVisible = this.words.map(word => Array(word.length).fill(false));
            this.typeWord(this.currentWordIndex, this.words[this.currentWordIndex]);
        },
        typeWord(wordIndex, word) {
            word.forEach((_, letterIndex) => {
                setTimeout(() => {
                    this.isVisible[wordIndex][letterIndex] = true;
                    if (letterIndex === word.length - 1) {
                        setTimeout(() => {
                            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
                            this.resetVisibility();
                            this.typeWord(this.currentWordIndex, this.words[this.currentWordIndex]);
                        }, this.delayBetweenWords);
                    }
                }, this.delayBetweenLetters * letterIndex);
            });
        },
        resetVisibility() {
            this.isVisible[this.currentWordIndex] = Array(this.words[this.currentWordIndex].length).fill(false);
        },

        ...mapActions(['loadWishlist', 'toggleWishlist']),

        updateWishlist({ id, wishlist }) {
            const productBestsellers = this.catalog.find(product => product.id === id);
            if (productBestsellers) {
                this.toggleWishlist(productBestsellers);
                productBestsellers.wishlist = wishlist;
            }
        },
    },
    watch: {
        wishlist: {
            handler() {
                this.$store.dispatch('saveWishlist');
            },
            deep: true,
        },
    },
};
</script>
