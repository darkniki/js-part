export default {
  CLEAR_PRODUCTS(state) {
    state.allProducts = [];
  },
  PUSH_PRODUCT(state, product) {
    state.allProducts.push(product);
  },
};
