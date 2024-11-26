import { createStore } from 'vuex';
import { catalogData } from '@/components/productInfo.vue';

export default createStore({
    state: {
        wishlist: [],
        cart: [],
        showQuickView: false,
        quickViewContent: null,
        selectedProduct: null,
        catalog: catalogData
    },
    mutations: {
        toggleWishlist(state, product) {
            const index = state.wishlist.findIndex(item => item.id === product.id);
            if (index === -1) {
                state.wishlist.push(product);
            } else {
                state.wishlist.splice(index, 1);
            }
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
        setWishlist(state, wishlist) {
            state.wishlist = wishlist;
        },
        OPEN_QUICK_VIEW(state, content) {
            state.showQuickView = true;
            state.quickViewContent = content;
        },
        CLOSE_QUICK_VIEW(state) {
            state.showQuickView = false;
            state.quickViewContent = null;
        },
        ADD_TO_CART(state, { product, quantity }) {
            const existingItem = state.cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cart.push({
                    ...product,
                    quantity: quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        REMOVE_FROM_CART(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        SET_CART(state, cart) {
            state.cart = cart;
        },
        UPDATE_CART_QUANTITY(state, { productId, quantity }) {
            const item = state.cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        SET_SELECTED_PRODUCT(state, product) {
            state.selectedProduct = product;
        }
    },
    actions: {
        toggleWishlist({ commit }, product) {
            commit('toggleWishlist', product);
        },
        loadWishlist({ commit }) {
            const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            commit('setWishlist', wishlist);
        },
        saveWishlist({ state }) {
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
        openQuickView({ commit }, content) {
            commit('OPEN_QUICK_VIEW', content);
        },
        closeQuickView({ commit }) {
            commit('CLOSE_QUICK_VIEW');
        },
        addToCart({ state, commit }, { product, quantity }) {
            const existingItem = state.cart.find(item => item.id === product.id);
            if (existingItem) {
                return { error: 'Товар уже в корзине' };
            } else {
                commit('ADD_TO_CART', { product, quantity });
                return { success: true };
            }
        },
        removeFromCart({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId);
        },
        loadCart({ commit }) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            commit('SET_CART', cart);
        },
        updateCartQuantity({ commit }, { productId, quantity }) {
            commit('UPDATE_CART_QUANTITY', { productId, quantity });
        },
        setSelectedProduct({ commit }, product) {
            const fullProductData = catalogData.find(p => p.id === product.id) || product;
            
            const productWithFullData = {
                ...product,
                deliveryCities: fullProductData.deliveryCities || [],
                weight: fullProductData.weight || []
            };
            
            commit('SET_SELECTED_PRODUCT', productWithFullData);
        }
    },
    getters: {
        cartTotal: state => {
            return state.cart.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        },
        cartItemsCount: state => {
            return state.cart.length;
        }
    }
});
