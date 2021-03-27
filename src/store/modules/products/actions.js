export default {
  getAllProductsArray({ commit }, data) {
    commit("CLEAR_PRODUCTS");
    const goods = data[0].Value.Goods;
    goods.forEach((item) => {
      commit("PUSH_PRODUCT", { item, data });
    });
  },
};
