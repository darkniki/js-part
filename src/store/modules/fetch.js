export default {
  namespaced: true,
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
        .then((productsData) => {
          const names = productsData[1];
          const goods = productsData[0].Value.Goods;
          dispatch("products/getProducts", { names, goods }, { root: true });
        })
        .catch((err) => {
          commit("SET_LOADING", true, { root: true });
          console.log(err);
        });
    },
  },
};
