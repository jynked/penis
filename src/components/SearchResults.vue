<template>
    <div v-if="isVisible" class="search-results">
        <div class="search-count" v-if="searchQuery.length >= 3">
            <p v-if="isLoadingCount">Поиск...</p>
            <p v-else>Найдено {{ filteredProducts.length }} {{ getProductWord(filteredProducts.length) }} по запросу "{{ searchQuery }}"</p>
        </div>
        <div class="results-container" v-if="!isLoading && searchQuery.length >= 3">
            <button 
                v-for="product in filteredProducts" 
                :key="product.id"
                class="product-card"
                @click="goToProduct(product)"
            >
                <img 
                    :src="require(`@/assets/img/${product.image}`)" 
                    :alt="product.name"
                >
                <div class="product-info">
                    <p class="product-type">{{ product.type }}</p>
                    <h3 class="product-name">{{ product.name }}</h3>
                    <div class="product-rating">
                        <img 
                            v-for="star in product.starsProduct" 
                            :key="star" 
                            src="@/assets/img/star.png" 
                            alt="star"
                        >
                    </div>
                    <p class="product-price">{{ product.price }}₽</p>
                </div>
            </button>
        </div>
        <div v-if="isLoading" class="loading">
            <div class="spinner"></div>
            <p>Поиск товаров...</p>
        </div>
    </div>
</template>

<script>
import { catalogData } from '@/components/productInfo.vue';

export default {
    name: 'SearchResults',
    props: {
        searchQuery: {
            type: String,
            required: true
        },
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            isLoading: false,
            isLoadingCount: false,
            searchTimeout: null,
            countTimeout: null
        }
    },
    computed: {
        filteredProducts() {
            if (this.searchQuery.length < 3) return [];
            
            const query = this.searchQuery.toLowerCase();
            return catalogData.filter(product => {
                return (
                    product.name.toLowerCase().includes(query) ||
                    product.type.toLowerCase().includes(query) ||
                    product.article.toLowerCase().includes(query) ||
                    product.detail.toLowerCase().includes(query)
                );
            });
        }
    },
    methods: {
        getProductWord(count) {
            if (count === 1) return 'товар';
            if (count >= 2 && count <= 4) return 'товара';
            return 'товаров';
        },
        goToProduct(product) {
            this.$store.dispatch('setSelectedProduct', product);
            this.$router.push({ name: 'data' });
            this.$emit('close-search');
        }
    },
    watch: {
        searchQuery() {
            if (this.searchQuery.length >= 3) {
                clearTimeout(this.searchTimeout);
                clearTimeout(this.countTimeout);
                
                this.isLoading = true;
                this.isLoadingCount = true;
                
                this.countTimeout = setTimeout(() => {
                    this.isLoadingCount = false;
                }, 300);
                
                this.searchTimeout = setTimeout(() => {
                    this.isLoading = false;
                }, 300);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.search-results {
    position: absolute;
    top: 100%;
    width: 650px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    .search-count {
        padding: 15px;
        border-bottom: 1px solid #eee;
        p {
            margin: 0;
            font-weight: 500;
            color: #666;
        }
    }

    .results-container {
        max-height: 350px;
        overflow-y: auto;
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: flex-start;

        .product-card {
            width: 100%;
            border: 1px solid #eee;
            border-radius: 8px;
            padding: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            display: flex;
            flex-direction: row;
            gap: 50px;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }

            img {
                width: 30%;
                object-fit: contain;
                transform: matrix(1, 0, 0, 1, 0, 0);
            }

            .product-info {
                padding: 10px 0;

                .product-type {
                    color: #666;
                    font-size: 12px;
                    margin: 0;
                }

                .product-name {
                    margin: 5px 0;
                    font-size: 14px;
                    font-weight: 600;
                }

                .product-rating {
                    display: flex;
                    gap: 2px;
                    margin: 5px 0;

                    img {
                        width: 12px;
                        height: 12px;
                    }
                }

                .product-price {
                    font-weight: 600;
                    color: #2f2f8c;
                    margin: 5px 0 0;
                }
            }
        }
    }

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;

        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #2f2f8c;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }

        p {
            color: #666;
            margin: 0;
        }
    }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style> 