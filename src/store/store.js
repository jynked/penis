import { createStore } from 'vuex';

export default createStore({
    state: {
        wishlist: [],
        showQuickView: false,
        quickViewContent: null,
    },
    mutations: {
        toggleWishlist(state, product) {
            const index = state.wishlist.findIndex(item => item.id === product.id);
            if (index === -1) {
                state.wishlist.push(product);
            } else {
                state.wishlist.splice(index, 1);
            }
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
            console.log('Wishlist saved:', state.wishlist); // Вывод состояния wishlist
        },
        openQuickView({ commit }, content) {
            commit('OPEN_QUICK_VIEW', content);
        },
        closeQuickView({ commit }) {
            commit('CLOSE_QUICK_VIEW');
        }
    },
});
