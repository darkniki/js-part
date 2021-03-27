import Vue from "vue";
import Vuex from "vuex";
import fetch from "./modules/fetch";
import shoppingCart from "./modules/shoppingCart";
import products from "./modules/products";

// LocalStorage
import VuexPersist from "vuex-persist";
const vuexPersist = new VuexPersist({
  storage: window.localStorage,
  reducer: (state) => ({
    shoppingCart: state.shoppingCart,
    products: state.products,
  }),
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { fetch, products, shoppingCart },
  plugins: [vuexPersist.plugin], // LocalStorage
});
