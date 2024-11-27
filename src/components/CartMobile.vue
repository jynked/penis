<template>
    <div class="container-cart" :class="{ active: isCartOpen }">
        <div class="content-cart">
            <button class="back" @click="closeCart">
                <img src="../assets/img/close.png" alt="">
            </button>
            <div class="content" @click.stop>
                <div class="heading">
                    <div class="cart-counter">
                        <img src="../assets/img/cart.png" alt="">
                        <p>{{ cartItemsCount }}</p>
                    </div>
                    <p>MY CART</p>
                </div>
                <div class="catalog">
                    <div v-if="cart.length === 0" class="empty-cart">
                        <p>Корзина пуста</p>
                    </div>
                    <div v-else class="cart-items">
                        <div v-for="item in cart" 
                             :key="item.id" 
                             class="product">
                            <img :src="getImageUrl(item.image)" 
                                 :alt="item.name" 
                                 @click="goToProductPageFromList(item)">
                            <div class="info" @click="goToProductPageFromList(item)">
                                <p>{{ item.name }}</p>
                                <p>{{ item.quantity }} x {{ item.price }}₽</p>
                                <p class="total">Итого: {{ item.quantity * item.price }}₽</p>
                            </div>
                            <div class="action-buttons">
                                <div v-if="isItemInWishlist(item.id)" class="browse-wishlist">
                                    <button @click="toggleItemWishlist(item)">
                                        <img src="@/assets/img/favourite.png" alt="">
                                    </button>
                                </div>
                                <div v-else class="add-wishlist">
                                    <button @click="toggleItemWishlist(item)">
                                        <img src="@/assets/img/not-favourite.png" alt="" style="width: 25px; margin-right: -3px;">
                                    </button>
                                </div>
                                <button class="remove-cart" @click="removeFromCart(item.id)">
                                    <img src="../assets/img/close.png" alt="Remove">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="cart-total" v-if="cart.length > 0">
                        <p>Общая сумма: {{ cartTotal }}₽</p>
                        <button class="checkout">ОФОРМИТЬ ЗАКАЗ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'CartMobile',
    props: {
        isCartOpen: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        ...mapState(['cart', 'wishlist']),
        ...mapGetters(['cartTotal', 'cartItemsCount'])
    },
    methods: {
        closeCart() {
            document.body.style.overflow = '';
            this.$emit('close-cart');
        },
        getImageUrl(imageName) {
            try {
                return require(`@/assets/img/${imageName}`);
            } catch (e) {
                return require('@/assets/img/orange.jpg');
            }
        },
        removeFromCart(productId) {
            this.$store.dispatch('removeFromCart', productId);
        },
        isItemInWishlist(itemId) {
            return this.wishlist.some(item => item.id === itemId);
        },
        toggleItemWishlist(item) {
            this.$store.dispatch('toggleWishlist', item);
        },
        goToProductPageFromList(item) {
            const fullProductData = this.$store.state.catalog.find(p => p.id === item.id) || item;
            
            const productData = {
                name: fullProductData.name,
                price: fullProductData.price,
                image: fullProductData.image,
                starsProduct: fullProductData.starsProduct || 5,
                reviews: fullProductData.reviews || 0,
                article: fullProductData.article || '',
                sellerStars: fullProductData.sellerStars || 5,
                maxItems: fullProductData.maxItems || 100,
                isInWishlist: this.isItemInWishlist(fullProductData.id),
                id: fullProductData.id,
                detail: fullProductData.detail || ''
            };
            
            this.$store.dispatch('setSelectedProduct', productData);
            this.$router.push({ name: 'data' });
            this.closeCart();
        }
    }
}
</script>

<style lang="scss" scoped>
.container-cart {
    opacity: 0;
    visibility: hidden;
    height: 0px;
    transition: opacity 0.3s ease,
    visibility 0.3s ease;

    &.active {
        opacity: 1;
        visibility: visible;
        background: rgba(0, 0, 0, 0.3);
        z-index: 101;
        height: 100%;
        width: 100%;
        max-width: 800px;
        top: 0;
        position: fixed;
        right: 0;

        .content-cart {
            margin-right: 0;
        }
    }

    .content-cart {
        width: 100%;
        background: #2f2f8c;
        height: 100%;
        margin-right: -750px;
        max-width: none;
        transition: margin-right 0.3s ease;
        overflow-y: auto;
        position: relative;
        padding: 50px 20px;

        .back {
            width: fit-content;
            position: absolute;
            left: 20px;
            top: 20px;
            border: 0px;
            width: 50px;
            height: 50px;
            background: #FFF;
            border-radius: 30px;
            z-index: 1000;

            img {
                width: 20px;
            }
        }

        .content {
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 20px;
            position: relative;

            .heading {
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 20px;

                .cart-counter {
                    position: relative;

                    img {
                        width: 50px;
                        height: auto;
                    }

                    p {
                        position: absolute;
                        top: -5px;
                        right: -5px;
                        background: #000;
                        color: #FFF;
                        border-radius: 30px;
                        font-size: 8px;
                        display: flex !important;
                        align-items: center;
                        justify-content: center;
                        width: 20px;
                        height: 20px;
                    }
                }
            }

            .catalog {
                flex-grow: 1;
                overflow-y: auto;
                padding: 10px;
                padding-bottom: 120px;

                .empty-cart {
                    text-align: center;
                    padding: 20px;
                    user-select: none;
                    color: #666;
                }

                .product {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #eee;
                    border-radius: 5px;
                    background: none;
                    transition: background-color 0.2s ease;
                    cursor: pointer;

                    &:hover {
                        background-color: #f5f5f5;
                    }

                    > img {
                        width: 60px;
                        height: 60px;
                        object-fit: cover;
                        margin-right: 15px;
                    }

                    .info {
                        flex-grow: 1;
                        text-align: left;

                        p {
                            margin: 0;
                        }

                        p:first-child {
                            font-weight: bold;
                            margin-bottom: 5px;
                        }

                        p:last-child {
                            color: #666;
                        }
                    }

                    .action-buttons {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-left: auto;
                        margin-right: 10px;

                        button {
                            background: none;
                            border: none;
                            cursor: pointer;
                            padding: 0;

                            img {
                                width: 20px;
                                height: 20px;
                                transition: opacity 0.2s ease;

                                &:hover {
                                    opacity: 0.7;
                                }
                            }
                        }
                    }
                }
            }

            .cart-total {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 20px;
                border-top: 1px solid #eee;
                background: #FFF;
                text-align: start;
                z-index: 1;

                .checkout {
                    margin-top: 10px;
                    padding: 10px 20px;
                    background: #eea76a;
                    color: white;
                    border: none;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                    width: 100%;
                    transition: ease .2s;

                    &:hover {
                        background:#F69946;
                        transition: ease .2s;
                    }
                }
            }
        }
    }
}
</style> 