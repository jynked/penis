<template>
    <div class="main-catalog">
        <div class="container">
            <div class="filters">
                <div class="links">
                    <router-link to="mainPage" class="home-link">HOME</router-link>
                    <span>/</span>
                    <p>CATALOG</p>
                </div>
                <div class="categories">
                    <p>КАТЕГОРИИ</p>
                    <span></span>
                    <select v-model="selectedCategory" @change="handleCategoryChange">
                        <option value="" disabled checked>Выберите категорию</option>
                        <option v-for="(category, index) in categories" :key="index" :value="category">
                            {{ category }}
                        </option>
                    </select>
                </div>
                <div class="price-filter">
                    <p>ФИЛЬТРОВАТЬ ПО ЦЕНЕ</p>
                    <span></span>
                    <div class="slider-container">
                        <div class="slider">
                            <div class="progress"
                                :style="{ left: minPercentage + '%', right: (100 - maxPercentage) + '%' }"></div>
                        </div>
                        <div class="range-input">
                            <input type="range" class="range-min" min="0" max="6000" v-model="minPrice"
                                @input="handleRangeInput">
                            <input type="range" class="range-max" min="0" max="6000" v-model="maxPrice"
                                @input="handleRangeInput">
                        </div>
                    </div>
                    <div class="price-range">
                        Price: {{ minPrice }}₽ - {{ maxPrice }}₽
                    </div>
                </div>
                <div class="status">
                    <p>СТАТУС ПРОДУКТА</p>
                    <span></span>
                    <label v-for="status in productStatuses" :key="status.id" class="status-checkbox">
                        <input type="checkbox" v-model="status.model">
                        <p>{{ status.label }}</p>
                    </label>
                </div>
                <div class="status">
                    <p>ГОРОД ДОСТАВКИ</p>
                    <span></span>
                    <label v-for="city in cities" :key="city.id" class="status-checkbox">
                        <input type="checkbox" v-model="city.model">
                        <p>{{ city.label }}</p>
                    </label>
                </div>
                <div class="status">
                    <p>СТРАНА ПРОИЗВОДИТЕЛЬ</p>
                    <span></span>
                    <label v-for="country in countries" :key="country.id" class="status-checkbox">
                        <input type="checkbox" v-model="country.model">
                        <p>{{ country.label }}</p>
                    </label>
                </div>
                <div class="status">
                    <p>БРЕНД</p>
                    <span></span>
                    <label v-for="brand in brands" :key="brand.id" class="status-checkbox">
                        <input type="checkbox" v-model="brand.model">
                        <p>{{ brand.label }}</p>
                    </label>
                </div>
                <div class="status">
                    <p>БЕСПЛАТНАЯ ДОСТАВКА</p>
                    <span></span>
                    <label v-for="option in delivery" :key="option.id" class="status-checkbox">
                        <input type="checkbox" v-model="option.model">
                        <p>{{ option.label }}</p>
                    </label>
                </div>
                <div class="status">
                    <p>ВЕС ТОВАРА</p>
                    <span></span>
                    <label v-for="weight in weights" :key="weight.id" class="status-checkbox">
                        <input type="checkbox" v-model="weight.model">
                        <p>{{ weight.label }}</p>
                    </label>
                </div>
                <div class="status">
                    <p>АТРИБУТ ТОВАРА</p>
                    <span></span>
                    <label v-for="attr in attributes" :key="attr.id" class="status-checkbox">
                        <input type="checkbox" v-model="attr.model">
                        <p>{{ attr.label }}</p>
                    </label>
                </div>
            </div>
            <div class="catalog">
                <div class="free-delivery">
                    <p class="heading">Бесплатная доставка на сумму $299</p>
                    <p>Сделайте свой интернет-магазин проще с помощью нашего мобильного приложения</p>
                    <a href="#">ЧИТАТЬ БОЛЬШЕ <img src="../assets/img/buttonLink.jpg" alt=""></a>
                </div>
                <div class="products">
                    <ProductCard v-for="product in catalog" :key="product.id" v-bind="product"
                        @wishlist="updateWishlist" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/productCard.vue';
import { catalogData } from '@/components/productInfo.vue';

export default {
    components: {
        ProductCard
    },
    data() {
        return {
            selectedCategory: '',
            categories: [
                'Абрикосовая косточка',
                'Экзотика',
                'Овощи',
                'Ягоды',
                'Кофе и чай',
                'Орехи',
                'Сладости',
                'Травы и специи',
                'Чипсы - слайсы',
                'Фрукты',
                'Сухофрукты'
            ],
            minPrice: 0,
            maxPrice: 6000,


            productStatuses: [
                { id: 'isAvailable', label: 'В наличии', model: false },
                { id: 'isOutOfStock', label: 'Нет в наличии', model: false },
                { id: 'isOnSale', label: 'В продаже', model: false }
            ],

            cities: [
                { id: 'cityVoronezh', label: 'Воронеж', model: false },
                { id: 'cityKazan', label: 'Казань', model: false },
                { id: 'cityKrasnodar', label: 'Краснодар', model: false }
            ],

            countries: [
                { id: 'countryArmenia', label: 'Армения', model: false },
                { id: 'countryKazakhstan', label: 'Казахстан', model: false },
                { id: 'countryRussia', label: 'Россия', model: false }
            ],

            brands: [
                { id: 'brandGainzo', label: 'Gainzo', model: false },
                { id: 'brandMartstore', label: 'Martstore', model: false },
                { id: 'brandRawshop', label: 'Rawshop', model: false },
                { id: 'brandXBekery', label: 'XBekery', model: false }
            ],

            delivery: [
                { id: 'freeDeliveryYes', label: 'Да', model: false },
                { id: 'freeDeliveryNo', label: 'Нет', model: false }
            ],

            weights: [
                { id: 'weight200', label: '200г', model: false },
                { id: 'weight300', label: '300г', model: false },
                { id: 'weight400', label: '400г', model: false },
                { id: 'weight500', label: '500г', model: false },
                { id: 'weight600', label: '600г', model: false }
            ],

            attributes: [
                { id: 'attributeNoSeed', label: 'Без косточки', model: false },
                { id: 'attributeFried', label: 'Жареный', model: false },
                { id: 'attributeSpicy', label: 'Со специями', model: false }
            ],
            catalog: catalogData
        }
    },
    computed: {
        minPercentage() {
            return (this.minPrice / 6000) * 100;
        },
        maxPercentage() {
            return (this.maxPrice / 6000) * 100;
        }
    },
    methods: {
        handleRangeInput() {
            if (Number(this.minPrice) > Number(this.maxPrice)) {
                if (this.maxPrice === 6000) {
                    this.minPrice = 6000;
                } else {
                    this.maxPrice = this.minPrice;
                }
            }
        },
        updateWishlist({ id }) {
            const product = this.catalog.find(product => product.id === id);
            if (product) {
                this.$store.dispatch('toggleWishlist', product);
            }
        }
    }
}
</script>

<style scoped>
.price-filter {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.slider-container {
    position: relative;
    width: 100%;
    height: 50px;
}

.slider {
    position: relative;
    height: 5px;
    width: 100%;
    background: #ddd;
    border-radius: 5px;
}

.slider .progress {
    position: absolute;
    height: 5px;
    background: #2f2f8c;
    border-radius: 5px;
    left: 0%;
    right: 0%;
}

.range-input {
    position: relative;
    width: 100%;
}

.range-input input {
    position: absolute;
    width: 100%;
    height: 5px;
    top: -5px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background: #2f2f8c;
    pointer-events: auto;
    -webkit-appearance: none;
    cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border: none;
    border-radius: 50%;
    background: #2f2f8c;
    pointer-events: auto;
    -moz-appearance: none;
    cursor: pointer;
}

.range-input input:nth-child(1) {
    z-index: 2;
}

.range-input input:nth-child(2) {
    z-index: 1;
}

.price-range {
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
}
</style>