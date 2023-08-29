import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      products: [],
      cart: [],
    };
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    },
    
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
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
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
  },
  modules: {},
});

export default store;
