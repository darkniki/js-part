export default {
  PUSH_PRODUCTS(state, data) {
    state.allProducts = [];
    const names = data[1];
    const goods = data[0].Value.Goods;
    goods.forEach((item) => {
      const dollar = _.random(20, 80); // Обновление "доллара" для каждого продукта, чтобы цены менялись в разную сторону
      state.allProducts.push({
        catId: item.G,
        catTitle: names[item.G].G,
        id: item.T,
        title: names[item.G].B[item.T].N,
        price: item.C * dollar,
        balance: item.P,
      });
    });
  },
};
