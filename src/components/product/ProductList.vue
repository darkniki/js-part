<template>
  <div>
    <v-overlay :opacity="1" v-if="isLoading">
      <v-progress-circular indeterminate size="82">
        Загрузка
      </v-progress-circular>
    </v-overlay>
    <v-row justify="center">
      <v-expansion-panels multiple focusable inset v-model="panel">
        <v-expansion-panel
          v-for="(items, category) in allProductsByCat"
          :key="items[0].catId"
        >
          <v-expansion-panel-header>
            {{ category }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <product-list-item
                v-for="product in items"
                :key="product.id"
                :product="product"
                @addProductToCart="addProductToCart"
              />
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <br /><br />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductListItem from "./ProductListItem";

export default {
  data() {
    return { panel: [0, 1, 2, 3, 4] }; // Открытые expansion-panels по умолчанию
  },
  components: { ProductListItem },
  mounted() {
    setTimeout(this.fetchProducts, 1 * 1000); // Имитация задержки запроса к API
    setInterval(this.fetchProducts, 15 * 1000); // Интервал обновления
  },
  computed: {
    ...mapGetters({
      allProductsByCat: "products/allProductsByCat",
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetch/fetchProducts",
      addProductToCart: "shoppingCart/addProductToCart",
    }),
  },
};
</script>
