<template>
  <v-row justify="center" align="center" class="mb-3 mt-1">
    <v-col cols="12" sm="7">
      <p>
        {{ item.title }}
        <strong>
          ({{ item.balance }}) Цена:
          <v-chip :color="color" text-color="white">
            {{ item.price.toFixed(2) }} ₽
          </v-chip>
        </strong>
        / шт.
      </p>
      <v-alert
        v-if="item.balance === item.quantity"
        dense
        outlined
        border="left"
        type="warning"
      >
        Ограниченное количество
      </v-alert>
    </v-col>
    <v-col cols="12" sm="3">
      <p>
        <v-btn
          color="error"
          x-small
          dark
          v-on:click="decrementProductFromCart(item)"
          class="mr-2"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        {{ item.quantity }} шт.
        <v-btn
          color="success"
          x-small
          dark
          v-on:click="addProductToCart(item)"
          class="ml-2"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </p>
    </v-col>
    <v-col cols="12" sm="2" align="center" justify="space-around">
      <v-btn
        color="error"
        close-icon="mdi-delete"
        class="white--text"
        @click="deleteProductFromCart(item)"
        >Удалить
        <v-icon right>mdi-delete</v-icon>
      </v-btn>
    </v-col>
    <v-divider class="ml-4 mr-4"></v-divider>
  </v-row>
</template>

<script>
export default {
  data() {
    return { color: "primary" };
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    decrementProductFromCart(item) {
      this.$emit("decrementProductFromCart", item);
    },
    addProductToCart(item) {
      this.$emit("addProductToCart", item);
    },
    deleteProductFromCart(item) {
      this.$emit("deleteProductFromCart", item);
    },
  },
  watch: {
    "item.price"(newPrice, oldPrice) {
      this.color = newPrice > oldPrice ? "error" : "success";
    },
  },
};
</script>
