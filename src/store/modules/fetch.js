export default {
  namespaced: true,
  state: { isLoading: true },
  mutations: {
    UPDATE_LOADING_STATUS(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      Promise.all([
        fetch("./api/data.json").then(
          (res) => (res.ok && res.json()) || Promise.reject(res)
        ),
        fetch("./api/names.json").then(
          (res) => (res.ok && res.json()) || Promise.reject(res)
        ),
      ])
        .then((productsData) => {
          const names = productsData[1];
          const goods = productsData[0].Value.Goods;
          commit("products/UPDATE_PRODUCTS", { names, goods }, { root: true });
          commit("UPDATE_LOADING_STATUS", false);
        })
        .catch((err) => {
          commit("UPDATE_LOADING_STATUS", true);
          console.log(err);
        });
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
};
