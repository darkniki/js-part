import random from "lodash/random";
export default {
  UPDATE_PRODUCTS(state, { names, goods }) {
    state.allProducts = [];
    goods.forEach((item) => {
      const dollar = random(20, 80); // Обновление "доллара" для каждого продукта, чтобы цены менялись в разную сторону
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
