<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="9">
      {{ product.title }}<strong> ({{ product.balance }})</strong>
    </v-col>
    <v-col cols="6" sm="4" md="3" align="center" justify="space-around">
      <v-btn :color="color" width="100%" @click="addProductToCart(product)"
        ><v-icon dark left>mdi-cart-arrow-down</v-icon>
        {{ product.price.toFixed(2) }} ₽
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return { color: "primary" };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    addProductToCart(product) {
      this.$emit("addProductToCart", product);
    },
  },
  watch: {
    "product.price"(newPrice, oldPrice) {
      newPrice > oldPrice ? (this.color = "error") : (this.color = "success");
    },
  },
};
</script>
