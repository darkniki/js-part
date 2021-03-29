<template>
  <v-app>
    <the-header />
    <br />
    <v-container grid-list-xs>
      <product-list />
      <shopping-cart v-if="!isLoading" />
      <br />
    </v-container>
    <the-footer />
  </v-app>
</template>

<script>
import ProductList from "./product/ProductList";
import ShoppingCart from "./cart/ShoppingCart";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
    }),
  },
  components: { ProductList, ShoppingCart, TheHeader, TheFooter },
};
</script>
