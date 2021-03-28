<template>
  <div v-if="cartProducts.length" class="pb-5 mb-10">
    <h2>Корзина:</h2>
    <shopping-cart-item
      v-for="(item, i) in cartProducts"
      :key="i"
      :item="item"
      @decrementProductFromCart="decrementProductFromCart"
      @addProductToCart="addProductToCart"
      @deleteProductFromCart="deleteProductFromCart"
    />
    <v-row align="center" justify="center">
      <strong>Общая стоимость: </strong>
      <v-chip class="ma-2" :color="color" text-color="white">
        {{ cartTotalPrice.toFixed(2) }} ₽
      </v-chip>
    </v-row>
    <v-snackbar timeout="2500" v-model="warning" color="error" outlined>
      Количество товара ограничено
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ShoppingCartItem from "./ShoppingCartItem";
export default {
  data() {
    return { color: "primary" };
  },
  components: { ShoppingCartItem },
  computed: {
    ...mapGetters("shoppingCart", {
      cartProducts: "cartProducts",
      cartTotalPrice: "cartTotalPrice",
      isWarning: "isWarning",
    }),
    warning: {
      get() {
        return this.isWarning;
      },
      set(value) {
        this.updateWarning(value);
      },
    },
  },
  methods: {
    ...mapActions("shoppingCart", {
      addProductToCart: "addProductToCart",
      decrementProductFromCart: "decrementProductFromCart",
    }),
    ...mapMutations("shoppingCart", {
      updateWarning: "UPDATE_WARNING",
      deleteProductFromCart: "DELETE_PRODUCT_FROM_CART",
    }),
  },
  watch: {
    cartTotalPrice(newPrice, oldPrice) {
      this.color = newPrice > oldPrice ? "error" : "success";
    },
  },
};
</script>
