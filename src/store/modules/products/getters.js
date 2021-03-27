export default {
  allProductsByCat(state) {
    const itemsGroupedByCategories = _.chain(state.allProducts) // Групировка по категориям для вывода на экран
      .groupBy("catTitle")
      .map((value, key) => ({ title: key, items: value }))
      .value();
    return itemsGroupedByCategories;
  },
};
