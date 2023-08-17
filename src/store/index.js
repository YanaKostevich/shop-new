import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      products: [],
    };
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/products");
        commit("SET_PRODUCTS_TO_STATE", response.data);
        return response;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  modules: {},
});

export default store;
