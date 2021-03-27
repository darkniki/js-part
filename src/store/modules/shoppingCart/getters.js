export default {
  cartProducts(state, getters, rootState) {
    return state.cart.map(({ id, quantity }) => {
      const product = rootState.products.allProducts.find(
        (product) => product.id === id
      );
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        balance: product.balance,
        quantity,
      };
    });
  },
  cartTotalPrice(state, getters, rootState) {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },
  isWarning(state) {
    return state.warning;
  },
};
