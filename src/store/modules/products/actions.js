export default {
  getAllProductsArray({ state, commit, dispatch }, data) {
    commit("CLEAR_PRODUCTS");
    const names = data[1];
    const goods = data[0].Value.Goods;
    goods.forEach((item) => {
      const dollar = _.random(20, 80); // Обновление "доллара" для каждого продукта, чтобы цены менялись в разную сторону
      const product = {
        catId: item.G,
        catTitle: names[item.G].G,
        id: item.T,
        title: names[item.G].B[item.T].N,
        price: item.C * dollar,
        balance: item.P,
      };
      commit("PUSH_PRODUCT", product);
    });
    commit("fetch/UPDATE_LOADING_STATUS", false, { root: true });
  },
};
