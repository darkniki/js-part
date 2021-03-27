import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
export default {
  namespaced: true,
  state: {
    cart: [],
    warning: false,
  },
  mutations,
  actions,
  getters,
};
