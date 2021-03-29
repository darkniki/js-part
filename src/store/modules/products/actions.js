export default {
  getProducts({ commit }, { names, goods }) {
    commit("UPDATE_PRODUCTS", { names, goods });
    commit("SET_LOADING", false, { root: true });
  },
};
