const state = {
  currentLanguage: 'ru',
  currentCurrency: 'RUB',
  exchangeRates: {
    RUB: 1,
    USD: 0.011,  // примерный курс
    EUR: 0.0095, // примерный курс
    AMD: 4.5     // примерный курс
  }
};

const mutations = {
  SET_LANGUAGE(state, language) {
    state.currentLanguage = language;
    localStorage.setItem('language', language);
  },
  SET_CURRENCY(state, currency) {
    state.currentCurrency = currency;
    localStorage.setItem('currency', currency);
  },
  UPDATE_EXCHANGE_RATES(state, rates) {
    state.exchangeRates = rates;
  }
};

const actions = {
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language);
  },
  setCurrency({ commit }, currency) {
    commit('SET_CURRENCY', currency);
  },
  async fetchExchangeRates({ commit }) {
    try {
      // Здесь можно добавить реальный API для получения курсов валют
      const rates = {
        RUB: 1,
        USD: 0.011,
        EUR: 0.0095,
        AMD: 4.5
      };
      commit('UPDATE_EXCHANGE_RATES', rates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  }
};

const getters = {
  convertPrice: (state) => (priceInRUB) => {
    const rate = state.exchangeRates[state.currentCurrency];
    return (priceInRUB * rate).toFixed(2);
  },
  currencySymbol: (state) => {
    const symbols = {
      RUB: '₽',
      USD: '$',
      EUR: '€',
      AMD: '֏'
    };
    return symbols[state.currentCurrency];
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}; 