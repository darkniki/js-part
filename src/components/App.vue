<template>
  <v-app>
    <the-header />
    <br />
    <v-container grid-list-xs>
      <product-list />
      <shopping-cart />
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

export default {
  components: { ProductList, ShoppingCart, TheHeader, TheFooter },
};
</script>
