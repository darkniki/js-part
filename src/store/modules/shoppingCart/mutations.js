export default {
  PUSH_PRODUCT_TO_CART(state, { id }) {
    state.cart.push({ id, quantity: 1 });
  },
  INCREMENT_PRODUCT_QUANTITY(state, { id }) {
    const cartItem = state.cart.find((item) => item.id === id);
    cartItem.quantity++;
  },
  DECREMENT_PRODUCT_QUANTITY(state, { id }) {
    const cartItem = state.cart.find((item) => item.id === id);
    cartItem.quantity--;
  },
  DELETE_PRODUCT_FROM_CART(state, { id }) {
    state.cart = state.cart.filter((item) => item.id !== id);
  },
  UPDATE_WARNING(state, value) {
    state.warning = value;
  },
};
