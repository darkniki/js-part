import mutations from "./mutations";
import getters from "./getters";
export default {
  namespaced: true,
  state: {
    allProducts: [],
  },
  mutations,
  getters,
};
