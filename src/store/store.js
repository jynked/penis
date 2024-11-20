import { createStore } from 'vuex';

export default createStore({
    state: {
        wishlist: [],
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
        }
    },
});
