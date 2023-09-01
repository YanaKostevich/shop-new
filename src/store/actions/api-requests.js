import axios from "axios";
export default{
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
}