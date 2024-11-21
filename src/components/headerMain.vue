<template>
    <header>
        <div class="header-top">
            <div class="locale">
                <select name="currency" id="currency">
                    <option value="RUB">RUB</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="AMD">AMD</option>
                </select>
                <span></span>
                <select id="language">
                    <option value="ru">Russian</option>
                    <option value="en">English</option>
                    <option value="am">Armenian</option>
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
                    <input type="text" name="search" id="search" placeholder="Search for...">
                    <button><img src="../assets/img/loop.png" alt=""></button>
                </div>
                <div class="user-logs">
                    <button class="log" @click="openLoginPopup">
                        <img src="../assets/img/inst.png" alt="">
                        <p>ВОЙТИ</p>
                    </button>
                    <button class="favourite" @click="openFavouritesPopup">
                        <img src="../assets/img/inst.png" alt="">
                        <p>ИЗБРАННОЕ</p>
                    </button>
                    <button class="cart" @click="openCartPopup">
                        <img src="../assets/img/inst.png" alt="">
                        <p>КОРЗИНА</p>
                        <div class="total">
                            <p>{{ cartTotal }}</p>
                            <p>RUB</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="search mobile">
                <input type="text" name="search" id="search" placeholder="Search for...">
                <button><img src="../assets/img/loop.png" alt=""></button>
            </div>
            <div class="container mobile">
                <button @click="openMenuPopup">
                    <img src="../assets/img/headerMenu.png" alt="">
                </button>
                <a href="/">
                    <router-link :to="{ name: 'main' }"><img src="../assets/img/logo.png" alt=""></router-link>
                </a>
                <button>
                    <img src="../assets/img/headerCart.png" alt="">
                </button>
            </div>
        </div>
    </header>
    <div class="container-menu" :class="{ active: showMenuPopup }">
        <div class="content-menu">
            <button @click="openMenuPopup" class="back">
                <img src="../assets/img/close.png" alt="">
            </button>
            <div class="content">
                <router-link :to="{ name: 'main' }"><img src="../assets/img/logo.png" alt=""></router-link>
                <div class="options">
                    <select name="currency" id="currency">
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="AMD">AMD</option>
                    </select>
                    <select id="language">
                        <option value="ru">Russian</option>
                        <option value="en">English</option>
                        <option value="am">Armenian</option>
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
                            <a href="">Все товары</a>
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

export default {
    components: {
        QuickView
    },
    setup() {
        const isDropdownOpen = ref(false);
        const citySearch = ref('');
        const choosed = ref("Выберите страну");
        const isFixed = ref(false); // состояние для фиксированного заголовка
        const headerTopHeight = ref(0); // высота header-top

        const cities = [
            { name: "Албания", code: 'AL' },
            { name: "Алжир", code: 'DZ' },
            { name: "Австралия", code: 'AU' },
            { name: "Албания", code: 'AL' },
            { name: "Алжир", code: 'DZ' },
            { name: "Австралия", code: 'AU' },
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

        const handleScroll = () => {
            if (window.scrollY > headerTopHeight.value) {
                isFixed.value = true;
            } else {
                isFixed.value = false;
            }
        };

        // Получаем высоту header-top после монтирования компонента
        onMounted(() => {
            headerTopHeight.value = document.querySelector('.header-top').offsetHeight;
            window.addEventListener('scroll', handleScroll);
        });

        // Удаляем обработчик события перед размонтированием
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            citySearch,
            filteredCities,
            toggleDropdown,
            selectCity,
            choosed,
            isDropdownOpen,
            continueWithoutCity,
            isFixed
        };
    },
    data() {
        return {
            isActive: true,
            showLoginPopup: false,
            showFavouritesPopup: false,
            showMenuPopup: false,
            showCartPopup: false,
        }
    },
    computed: {
        ...mapGetters(['cartTotal'])
    },
    methods: {
        openLoginPopup() {
            this.showLoginPopup = true;
        },
        openMenuPopup() {
            this.showMenuPopup = !this.showMenuPopup;
            if (this.showMenuPopup) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },
        openFavouritesPopup() {
            this.showFavouritesPopup = true;
        },
        showMenu() {
            this.isActive = true;
        },
        showCategory() {
            this.isActive = false;
        },
        openCartPopup() {
            this.showCartPopup = true;
        },
        handleOutsideClick(event) {
            if (event.target.classList.contains('city-popup-overlay')) {
                this.isDropdownOpen = false;
            }
        }
    },
    beforeUnmount() {
        document.body.style.overflow = '';
    }
}
</script>
