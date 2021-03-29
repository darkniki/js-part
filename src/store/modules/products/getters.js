import groupBy from "lodash/groupBy";
export default {
  allProductsByCat(state) {
    return groupBy(state.allProducts, "catTitle");
  },
};
