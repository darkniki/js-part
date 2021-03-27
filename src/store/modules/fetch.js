export default {
  namespaced: true,
  state: { isLoading: true },
  mutations: {
    UPDATE_LOADING_STATUS(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    fetchProducts({ commit, dispatch }) {
      Promise.all([
        fetch("./api/data.json").then(
          (res) => (res.ok && res.json()) || Promise.reject(res)
        ),
        fetch("./api/names.json").then(
          (res) => (res.ok && res.json()) || Promise.reject(res)
        ),
      ])
        .then((data) => {
          dispatch("products/getAllProductsArray", data, { root: true });
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
