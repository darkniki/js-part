export default {
  addProductToCart({ state, commit }, product) {
    const cartItem = state.cart.find((item) => item.id === product.id);
    if (!cartItem) {
      commit("PUSH_PRODUCT_TO_CART", { id: product.id });
    } else if (cartItem.quantity < product.balance) {
      commit("INCREMENT_PRODUCT_QUANTITY", cartItem);
    } else {
      commit("UPDATE_WARNING", true);
    }
  },
  deleteProductFromCart({ state, commit }, product) {
    const cartItem = state.cart.find((item) => item.id === product.id);
    commit("DELETE_PRODUCT_FROM_CART", cartItem);
  },
  decrementProductFromCart({ state, commit }, product) {
    const cartItem = state.cart.find((item) => item.id === product.id);
    if (cartItem.quantity > 1) {
      commit("DECREMENT_PRODUCT_QUANTITY", cartItem);
    } else {
      commit("DELETE_PRODUCT_FROM_CART", cartItem);
    }
  },
};
