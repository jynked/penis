<template>
    <div class="main-catalog">
        <div class="container">
            <div class="filters">
                <div class="links">
                    <router-link to="mainPage" class="home-link">HOME</router-link>
                    <span>/</span>
                    <p>CATALOG</p>
                </div>
                <button class="reset-filters" @click="resetAllFilters" style="margin: 0;">
                    Сбросить все фильтры
                </button>
                <div class="categories">
                    <p>КАТЕГОРИИ</p>
                    <span></span>
                    <select v-model="selectedCategory">
                        <option value="">Все вместе</option>
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
                        <div class="price-field">
                            <p>Price:</p>
                            <input type="number" v-model="minPrice" min="0" max="6000" @input="handlePriceInput">
                            <p>₽</p>
                            <p>-</p>
                            <input type="number" v-model="maxPrice" min="0" max="6000" @input="handlePriceInput">
                            <p>₽</p>
                        </div>
                    </div>
                </div>
                <div class="status">
                    <div class="status-header">
                        <p>СТАТУС ПРОДУКТА</p>
                        <button class="reset-group" @click="resetProductStatuses">Сбросить</button>
                    </div>
                    <span></span>
                    <label v-for="status in productStatuses" :key="status.id" class="status-checkbox">
                        <input type="checkbox" v-model="status.model">
                        <p>{{ status.label }} ({{ getStatusCount(status.id) }})</p>
                    </label>
                </div>
                <div class="status">
                    <div class="status-header">
                        <p>ГОРОД ДОСТАВКИ</p>
                        <button class="reset-group" @click="resetCities">Сбросить</button>
                    </div>
                    <span></span>
                    <label v-for="city in cities" :key="city.id" class="status-checkbox">
                        <input type="checkbox" v-model="city.model">
                        <p>{{ city.label }} ({{ getCityCount(city.id) }})</p>
                    </label>
                </div>
                <div class="status">
                    <div class="status-header">
                        <p>СТРАНА ПРОИЗВОДИТЕЛЬ</p>
                        <button class="reset-group" @click="resetCountries">Сбросить</button>
                    </div>
                    <span></span>
                    <label v-for="country in countries" :key="country.id" class="status-checkbox">
                        <input type="checkbox" v-model="country.model">
                        <p>{{ country.label }} ({{ getCountryCount(country.id) }})</p>
                    </label>
                </div>
                <div class="status">
                    <div class="status-header">
                        <p>БРЕНД</p>
                        <button class="reset-group" @click="resetBrands">Сбросить</button>
                    </div>
                    <span></span>
                    <label v-for="brand in brands" :key="brand.id" class="status-checkbox">
                        <input type="checkbox" v-model="brand.model">
                        <p>{{ brand.label }} ({{ getBrandCount(brand.id) }})</p>
                    </label>
                </div>
                <div class="status">
                    <div class="status-header">
                        <p>БЕСПЛАТНАЯ ДОСТАВКА</p>
                        <button class="reset-group" @click="resetDelivery">Сбросить</button>
                    </div>
                    <span></span>
                    <label v-for="option in delivery" :key="option.id" class="status-checkbox">
                        <input type="checkbox" v-model="option.model">
                        <p>{{ option.label }} ({{ getDeliveryCount(option.id) }})</p>
                    </label>
                </div>
                <div class="status">
                    <div class="status-header">
                        <p>ВЕС ТОВАРА</p>
                        <button class="reset-group" @click="resetWeights">Сбросить</button>
                    </div>
                    <span></span>
                    <label v-for="weight in weights" :key="weight.id" class="status-checkbox">
                        <input type="checkbox" v-model="weight.model">
                        <p>{{ weight.label }} ({{ getWeightCount(weight.id) }})</p>
                    </label>
                </div>
                <div class="status">
                    <div class="status-header">
                        <p>АТРИБУТ ТОВАРА</p>
                        <button class="reset-group" @click="resetAttributes">Сбросить</button>
                    </div>
                    <span></span>
                    <label v-for="attr in attributes" :key="attr.id" class="status-checkbox">
                        <input type="checkbox" v-model="attr.model">
                        <p>{{ attr.label }} ({{ getAttributeCount(attr.id) }})</p>
                    </label>
                </div>
            </div>
            <div class="catalog">
                <div class="free-delivery">
                    <p class="heading">Бесплатная доставка на сумму $299</p>
                    <p>Сделайте свой интернет-магазин проще с помощью нашего мобильного приложения</p>
                    <a href="#">ЧИТАТЬ БОЛЬШЕ <img src="../assets/img/buttonLink.jpg" alt=""></a>
                </div>
                <div v-if="filteredProducts.length === 0" class="no-products">
                    <p>Товары по заданным фильтрам не найдены</p>
                </div>
                <div v-else class="products">
                    <ProductCard v-for="product in paginatedProducts" :key="product.id" v-bind="product"
                        @wishlist="updateWishlist" />
                </div>
                <div v-if="filteredProducts.length > 0" class="pagination">
                    <button class="arrow" @click="prevPage" :disabled="currentPage === 1">
                        ←
                    </button>

                    <button :class="['page-number', { active: 1 === currentPage }]" 
                            @click="goToPage(1)">
                        1
                    </button>

                    <span v-if="showStartDots">...</span>

                    <button v-for="page in middlePages" 
                            :key="page"
                            :class="['page-number', { active: page === currentPage }]" 
                            @click="goToPage(page)">
                        {{ page }}
                    </button>

                    <span v-if="showEndDots">...</span>

                    <button v-if="totalPages > 1"
                            :class="['page-number', { active: totalPages === currentPage }]"
                            @click="goToPage(totalPages)">
                        {{ totalPages }}
                    </button>

                    <button class="arrow" @click="nextPage" :disabled="currentPage === totalPages">
                        →
                    </button>
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
                { id: 'available', label: 'В наличии', model: false },
                { id: 'outOfStock', label: 'Нет в наличии', model: false },
                { id: 'onSale', label: 'В продаже', model: false }
            ],

            cities: [
                { id: 'Voronezh', label: 'Воронеж', model: false },
                { id: 'Kazan', label: 'Казань', model: false },
                { id: 'Krasnodar', label: 'Краснодар', model: false }
            ],

            countries: [
                { id: 'Armenia', label: 'Армения', model: false },
                { id: 'Kazakhstan', label: 'Казахстан', model: false },
                { id: 'Russia', label: 'Россия', model: false }
            ],

            brands: [
                { id: 'Gainzo', label: 'Gainzo', model: false },
                { id: 'Martstore', label: 'Martstore', model: false },
                { id: 'Rawshop', label: 'Rawshop', model: false },
                { id: 'XBekery', label: 'XBekery', model: false }
            ],

            delivery: [
                { id: 'freeDeliveryYes', label: 'Да', model: false },
                { id: 'freeDeliveryNo', label: 'Нет', model: false }
            ],

            weights: [
                { id: '200', label: '200г', model: false },
                { id: '300', label: '300г', model: false },
                { id: '400', label: '400г', model: false },
                { id: '500', label: '500г', model: false },
                { id: '600', label: '600г', model: false }
            ],

            attributes: [
                { id: 'noSeed', label: 'Без косточки', model: false },
                { id: 'fried', label: 'Жареный', model: false },
                { id: 'spicy', label: 'Со специями', model: false }
            ],
            catalog: catalogData,
            selectedCountry: '',
            selectedBrand: '',
            currentPage: 1,
            itemsPerPage: 9,
            selectedDelivery: '',
            lastChanged: 'min'
        }
    },
    computed: {
        minPercentage() {
            return (this.minPrice / 6000) * 100;
        },
        maxPercentage() {
            return (this.maxPrice / 6000) * 100;
        },
        filteredProducts() {
            return this.catalog.filter(product => {
                // Фильтрация по цене
                const price = Number(product.price);
                const priceMatch = price >= this.minPrice && price <= this.maxPrice;

                // Фильтрация по категории
                const categoryMatch = !this.selectedCategory || product.type === this.selectedCategory;

                // Фильтрация по статусу продукта (ИЛИ)
                const statusFilters = this.productStatuses.filter(s => s.model).map(s => s.id);
                const statusMatch = statusFilters.length === 0 ||
                    statusFilters.some(status => product.status.includes(status));

                // Фильтрация по городам доставки (ИЛИ)
                const cityFilters = this.cities.filter(c => c.model).map(c => c.id);
                const cityMatch = cityFilters.length === 0 ||
                    cityFilters.some(city => product.deliveryCities.includes(city));

                // Фильтрация по стране производителя (ИЛИ)
                const countryFilters = this.countries.filter(c => c.model).map(c => c.id);
                const countryMatch = countryFilters.length === 0 ||
                    countryFilters.some(country => product.country === country);

                // Фильтрация по бренду (ИЛИ)
                const brandFilters = this.brands.filter(b => b.model).map(b => b.id);
                const brandMatch = brandFilters.length === 0 ||
                    brandFilters.some(brand => product.brand === brand);

                // Фильтрация по бесплатной доставке (ИЛИ)
                const deliveryFilters = this.delivery.filter(d => d.model).map(d => d.id);
                const deliveryMatch = deliveryFilters.length === 0 ||
                    (deliveryFilters.includes('freeDeliveryYes') && product.freeDelivery) ||
                    (deliveryFilters.includes('freeDeliveryNo') && !product.freeDelivery);

                // Фильтрация по весу (ИЛИ)
                const weightFilters = this.weights.filter(w => w.model).map(w => w.id);
                const weightMatch = weightFilters.length === 0 ||
                    weightFilters.some(weight => product.weight.includes(weight));

                // Фильтрация по атрибутам (ИЛИ)
                const attributeFilters = this.attributes.filter(a => a.model).map(a => a.id);
                const attributeMatch = attributeFilters.length === 0 ||
                    attributeFilters.some(attr => product.attributes.includes(attr));

                // Возвращаем true если товар соответствует всем условиям
                return priceMatch &&
                    categoryMatch &&
                    statusMatch &&
                    cityMatch &&
                    countryMatch &&
                    brandMatch &&
                    deliveryMatch &&
                    weightMatch &&
                    attributeMatch;
            });
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredProducts.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
        },
        middlePages() {
            let pages = [];
            
            if (this.totalPages <= 5) {
                // Если всего 5 или меньше страниц, показываем их все
                for (let i = 2; i < this.totalPages; i++) {
                    pages.push(i);
                }
                return pages;
            }

            if (this.currentPage <= 3) {
                // Если текущая страница близко к началу
                return [2, 3, 4];
            }

            if (this.currentPage >= this.totalPages - 2) {
                // Если текущая страница близко к концу
                return [this.totalPages - 3, this.totalPages - 2, this.totalPages - 1];
            }

            // В остальных случаях показываем текущую страницу и по одной странице с каждой стороны
            return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
        },
        showStartDots() {
            return this.currentPage > 3 && this.totalPages > 4;
        },
        showEndDots() {
            return this.currentPage < this.totalPages - 2 && this.totalPages > 4;
        }
    },
    methods: {
        handleRangeInput(event) {
            const isMinSlider = event.target.classList.contains('range-min');
            this.lastChanged = isMinSlider ? 'min' : 'max';

            let min = Number(this.minPrice);
            let max = Number(this.maxPrice);

            if (isMinSlider) {
                min = Math.min(min, max - 100);
                this.minPrice = min;
            } else {
                max = Math.max(max, min + 100);
                this.maxPrice = max;
            }
        },
        updateWishlist({ id }) {
            const product = this.catalog.find(product => product.id === id);
            if (product) {
                this.$store.dispatch('toggleWishlist', product);
            }
        },
        resetAllFilters() {
            this.selectedCategory = '';
            this.minPrice = 0;
            this.maxPrice = 6000;
            this.productStatuses.forEach(status => status.model = false);
            this.cities.forEach(city => city.model = false);
            this.countries.forEach(country => country.model = false);
            this.brands.forEach(brand => brand.model = false);
            this.delivery.forEach(option => option.model = false);
            this.weights.forEach(weight => weight.model = false);
            this.attributes.forEach(attr => attr.model = false);
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                window.scrollTo(0, 0);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                window.scrollTo(0, 0);
            }
        },
        goToPage(page) {
            this.currentPage = page;
            window.scrollTo(0, 0);
        },
        resetProductStatuses() {
            this.productStatuses.forEach(status => status.model = false);
        },
        resetCities() {
            this.cities.forEach(city => city.model = false);
        },
        resetCountries() {
            this.countries.forEach(country => country.model = false);
        },
        resetBrands() {
            this.brands.forEach(brand => brand.model = false);
        },
        resetDelivery() {
            this.delivery.forEach(option => option.model = false);
        },
        resetWeights() {
            this.weights.forEach(weight => weight.model = false);
        },
        resetAttributes() {
            this.attributes.forEach(attr => attr.model = false);
        },
        handlePriceInput() {
            // Преоразуем значения в числа
            let min = Number(this.minPrice);
            let max = Number(this.maxPrice);

            // Ограничиваем значения
            min = Math.max(0, Math.min(min, 5900)); // Максимальное значение для минимальной цены
            max = Math.max(100, Math.min(max, 6000)); // Минимальное значение для максимальной цены

            // Проверяем минимальный диапазон
            if (min > max - 100) {
                if (this.lastChanged === 'min') {
                    // Если изменяли минимальную цену
                    min = max - 100;
                } else {
                    // Если изменяли максимальную цену
                    max = min + 100;
                }
            }

            // Обновляем значения
            this.minPrice = min;
            this.maxPrice = max;
        },
        getStatusCount(statusId) {
            return this.catalog.filter(product => product.status.includes(statusId)).length;
        },
        getCityCount(cityId) {
            return this.catalog.filter(product => product.deliveryCities.includes(cityId)).length;
        },
        getCountryCount(countryId) {
            return this.catalog.filter(product => product.country === countryId).length;
        },
        getBrandCount(brandId) {
            return this.catalog.filter(product => product.brand === brandId).length;
        },
        getWeightCount(weightId) {
            return this.catalog.filter(product => product.weight.includes(weightId)).length;
        },
        getAttributeCount(attrId) {
            return this.catalog.filter(product => product.attributes.includes(attrId)).length;
        },
        getDeliveryCount(deliveryId) {
            return this.catalog.filter(product => 
                (deliveryId === 'freeDeliveryYes' && product.freeDelivery) ||
                (deliveryId === 'freeDeliveryNo' && !product.freeDelivery)
            ).length;
        }
    },
    watch: {
        filteredProducts() {
            this.currentPage = 1;
        }
    }
}
</script>