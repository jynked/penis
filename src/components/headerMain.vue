<template>
    <header>
        <div class="header-top">
            <div class="locale">
                <select>
                    <option value="RUB">RUB</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="AMD">AMD</option>
                </select>
                <span></span>
                <select>
                    <option value="ru">Russian</option>
                    <option value="en">English</option>
                    <option value="ar">Armenian</option>
                </select>

                <span></span>
                <div class="city">
                    <button @click="toggleDropdown">{{ choosed }}</button>
                </div>
            </div>
            <div class="social-media">
                <router-link :to="{ name: 'faq' }">Вопрос-ответ</router-link>
                <a href="https://www.facebook.com/harvunity">
                    <img src="../assets/img/facebook.png" alt="">
                </a>
                <a href="https://www.instagram.com/harvunity">
                    <img src="../assets/img/inst.png" alt="">
                </a>
                <a href="https://vk.com/harvunity">
                    <img src="../assets/img/vk.png" alt="">
                </a>
            </div>
        </div>
        <div :class="['header-main', { 'fixed': isFixed }]">
            <div class="container container-land">
                <div class="shop">
                    <router-link :to="{ name: 'main' }"><img src="../assets/img/logo.png" alt=""></router-link>
                    <div class="catalog">
                        <div class="bars">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p>КАТАЛОГ</p>
                        <img src="../assets/img/arrow.png" alt="">
                    </div>
                </div>
                <div class="search">
                    <input type="text" name="search" id="search" placeholder="Ищите..." v-model="searchQuery"
                        @focus="handleSearchFocus">
                    <button><img src="../assets/img/loop.png" alt=""></button>

                    <SearchResults :searchQuery="searchQuery" :isVisible="showResults"
                        @close-search="showResults = false" />
                </div>
                <div class="user-logs">
                    <button class="log" @click="openLoginPopup">
                        <img src="../assets/img/log.png" alt="">
                        <p>ВОЙТИ</p>
                    </button>
                    <button class="favourite" @click="openFavouritesPopup">
                        <img src="../assets/img/favourites.png" alt="">
                        <p>ИЗБРАННОЕ</p>
                    </button>
                    <button class="cart" @click="openCartPopup">
                        <img src="../assets/img/cart.png" alt="">
                        <p>КОРЗИНА</p>
                        <div class="total">
                            <p>{{ cartTotal }}</p>
                            <p>₽</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="search mobile">
                <input type="text" name="search" id="search-mobile" placeholder="Ищите..." v-model="searchQuery"
                    @focus="handleSearchFocus">
                <button><img src="../assets/img/loop.png" alt=""></button>

                <SearchResults :searchQuery="searchQuery" :isVisible="showResults"
                    @close-search="showResults = false" />
            </div>
            <div class="container mobile">
                <button @click="openMenuPopup">
                    <img src="../assets/img/headerMenu.png" alt="">
                </button>
                <a href="/">
                    <router-link :to="{ name: 'main' }"><img src="../assets/img/logo.png" alt=""></router-link>
                </a>
                <button @click="openCartPopup">
                    <img src="../assets/img/headerCart.png" alt="">
                </button>
            </div>
        </div>
        <CartMobile 
            v-if="showCartPopup && isMobile" 
            :isCartOpen="showCartPopup"
            @close-cart="showCartPopup = false"
        />
        
        <QuickView v-if="showCartPopup && !isMobile" 
                  :view-type="'cart'" 
                  data-view-type="cart"
                  @close-popup="showCartPopup = false" />
    </header>
    <div class="container-menu" :class="{ active: showMenuPopup }">
        <div class="content-menu">
            <button @click="openMenuPopup" class="back">
                <img src="../assets/img/close.png" alt="">
            </button>
            <div class="content">
                <router-link :to="{ name: 'main' }"  @click="openMenuPopup"><img src="../assets/img/logo.png" alt=""></router-link>
                <div class="options">
                    <select>
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="AMD">AMD</option>
                    </select>
                    <select>
                        <option value="ru">Russian</option>
                        <option value="en">English</option>
                        <option value="ar">Armenian</option>
                    </select>
                    <div class="city">
                        <button @click="toggleDropdown">{{ choosed }}</button>
                    </div>
                </div>
                <div class="categories-container">
                    <div class="buttons">
                        <button @click="showMenu" :class="{ active: isActive }">MENU</button>
                        <button @click="showCategory" :class="{ active: !isActive }">КАТЕГОРИИ</button>
                    </div>
                    <div class="hrefs">
                        <div class="categories" v-if="isActive === true">
                            <a href="">Мои заказы</a>
                            <router-link :to="{ name: 'products' }" @click="openMenuPopup">Все товары</router-link>
                            <a href="">О компании</a>
                            <a href="">Блог</a>
                            <a href="">Связаться с нами</a>
                        </div>
                        <div class="categories" v-if="isActive === false">
                            <a href="">Экзотика</a>
                            <a href="">Овощи</a>
                            <a href="">Ягоды</a>
                            <a href="">Кофе и чай</a>
                            <a href="">Орехи</a>
                            <a href="">Сладости</a>
                            <a href="">Травы и специи</a>
                            <a href="">Чипсы - слайсы</a>
                            <a href="">Фрукты</a>
                            <a href="">Сухофрукты</a>
                        </div>
                        <router-link :to="{ name: 'faq' }" class="faq" @click="openMenuPopup">Вопрос-ответ</router-link>
                        <div class="media">
                            <a href="https://www.facebook.com/harvunity">
                                <img src="../assets/img/facebook.png" alt="">
                            </a>
                            <a href="https://www.instagram.com/harvunity">
                                <img src="../assets/img/inst.png" alt="">
                            </a>
                            <a href="https://vk.com/harvunity">
                                <img src="../assets/img/vk.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <QuickView v-if="showLoginPopup" :view-type="'login'" @close-popup="showLoginPopup = false" />
    <QuickView v-if="showFavouritesPopup" :view-type="'favourites'" @close-popup="showFavouritesPopup = false" />
    <QuickView v-if="showCartPopup" :view-type="'cart'" @close-popup="showCartPopup = false" />

    <div class="city-popup-overlay" v-if="isDropdownOpen" @click="handleOutsideClick">
        <div class="city-popup" @click.stop>
            <div class="popup-header">
                <button @click="toggleDropdown">
                    <img src="../assets/img/close.png" alt="">
                </button>
            </div>
            <div class="popup-main">
                <input type="text" name="city" id="city" placeholder="Поиск города..." v-model="citySearch" />
                <p>Выберите из списка:</p>
                <div class="cities">
                    <ul class="cities-list">
                        <li v-for="city in filteredCities" :key="city.code" @click="selectCity(city)">
                            {{ city.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="without-city">
                <a href="#" @click.prevent="continueWithoutCity">Продолжить без города</a>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import QuickView from './quickView.vue';
import { mapGetters } from 'vuex';
import SearchResults from '@/components/SearchResults.vue';
import CartMobile from './CartMobile.vue';

export default {
    components: {
        QuickView,
        SearchResults,
        CartMobile
    },
    setup() {
        const isDropdownOpen = ref(false);
        const citySearch = ref('');
        const choosed = ref("Выберите город");
        const isFixed = ref(false);
        const headerTopHeight = ref(0);
        const searchQuery = ref('');
        const showResults = ref(false);

        const cities = [
            { name: "Пермь", code: 'PERM' },
            { name: "Чебоксары", code: 'CHEBOKSARY' },
            { name: "Берлин", code: 'BERLIN' },
            { name: "Ереван", code: 'BERLIN' },
            { name: "Чикаго", code: 'CHIKAGO' },
            { name: "Токио", code: 'TOKYO' },
        ];

        const filteredCities = computed(() => {
            return cities.filter(city =>
                city.name.toLowerCase().includes(citySearch.value.toLowerCase())
            );
        });

        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };

        const selectCity = (city) => {
            choosed.value = city.name;
            citySearch.value = '';
            isDropdownOpen.value = false;
        };

        const continueWithoutCity = () => {
            choosed.value = "Не определено";
            isDropdownOpen.value = false;
        };

        const handleClickOutside = (event) => {
            const searchContainers = document.querySelectorAll('.search');
            const isClickInside = Array.from(searchContainers).some(container => 
                container && container.contains(event.target)
            );
            
            if (!isClickInside) {
                showResults.value = false;
            }
        };

        const handleSearchFocus = () => {
            showResults.value = true;
        };

        const handleScroll = () => {
            if (window.scrollY > headerTopHeight.value) {
                isFixed.value = true;
            } else {
                isFixed.value = false;
            }
        };

        onMounted(() => {
            headerTopHeight.value = document.querySelector('.header-top').offsetHeight;
            window.addEventListener('scroll', handleScroll);
            document.addEventListener('click', handleClickOutside);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        });

        return {
            citySearch,
            filteredCities,
            toggleDropdown,
            selectCity,
            choosed,
            isDropdownOpen,
            continueWithoutCity,
            isFixed,
            searchQuery,
            showResults,
            handleSearchFocus
        };
    },
    data() {
        return {
            isActive: true,
            showLoginPopup: false,
            showFavouritesPopup: false,
            showMenuPopup: false,
            showCartPopup: false,
            isMobile: false
        }
    },
    computed: {
        ...mapGetters('localization', ['convertPrice', 'currencySymbol']),
        ...mapGetters(['cartTotal']),
        formattedCartTotal() {
            return `${this.convertPrice(this.cartTotal)} ${this.currencySymbol}`;
        }
    },
    methods: {
        openCartPopup() {
            this.showCartPopup = true;
            this.showFavouritesPopup = false;
            this.showLoginPopup = false;
            this.showMenuPopup = false;
            if (this.isMobile) {
                document.body.style.overflow = 'hidden';
            }
        },
        openFavouritesPopup() {
            this.showFavouritesPopup = true;
            this.showCartPopup = false;
            this.showLoginPopup = false;
            this.showMenuPopup = false;
        },
        openLoginPopup() {
            this.showLoginPopup = true;
            this.showCartPopup = false;
            this.showFavouritesPopup = false;
            this.showMenuPopup = false;
        },
        openMenuPopup() {
            this.showMenuPopup = !this.showMenuPopup;
            if (this.showMenuPopup) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },
        showMenu() {
            this.isActive = true;
        },
        showCategory() {
            this.isActive = false;
        },
        handleOutsideClick(event) {
            if (event.target.classList.contains('city-popup-overlay')) {
                this.isDropdownOpen = false;
            }
        },
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        }
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
        document.body.style.overflow = '';
        window.removeEventListener('resize', this.checkMobile);
    }
}
</script>

<style lang="scss">
.search {
    position: relative;
    .search-results {
        position: absolute;
        top: calc(100% + 5px);
        z-index: 1000;
    }
}
</style>
