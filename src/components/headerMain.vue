<template>
    <header>
        <div class="header-top">
            <div class="locale">
                <select name="currency" id="currency">
                    <option value="rub">RUB</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="amd">AMD</option>
                </select>
                <span></span>
                <select id="language">
                    <option value="rus">Russian</option>
                    <option value="arm">Armenian</option>
                    <option value="eng">English</option>
                </select>

                <span></span>
                <div class="city">
                    <button @click="toggleDropdown">{{ choosed }}</button>
                    <div class="popup" v-if="isDropdownOpen">
                        <div class="popup-header">
                            <button @click="toggleDropdown">
                                <img src="../assets/img/close.png" alt="">
                            </button>
                        </div>
                        <div class="popup-main">
                            <input type="text" name="city" id="city" placeholder="Поиск города..."
                                v-model="citySearch" />
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
            </div>
            <div class="social-media">
                <router-link to="/faq">Вопросы-ответы</router-link>
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
            <div class="container">
                <div class="shop">
                    <a href="/">
                        <img src="../assets/img/logo.png" alt="">
                    </a>
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
                    <button class="log">
                        <img src="../assets/img/inst.png" alt="">
                        <p>ВОЙТИ</p>
                    </button>
                    <button class="favourite">
                        <img src="../assets/img/inst.png" alt="">
                        <p>ИЗБРАННОЕ</p>
                    </button>
                    <button class="cart">
                        <img src="../assets/img/inst.png" alt="">
                        <p>КОРЗИНА</p>
                        <div class="total">
                            <p>0</p>
                            <p>AMD</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
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
    }
}
</script>
