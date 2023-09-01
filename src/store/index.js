import { createStore } from "vuex";
import commonActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = { ...apiRequests, ...commonActions };

const store = createStore({
  state() {
    return {
      products: [],
      cart: [],
    };
  },
  getters,
  mutations,
  actions,
  modules: {},
});

export default store;
