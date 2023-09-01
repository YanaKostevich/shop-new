<template>
  <div>
    <Header />
    <v-cart 
      :cart_data="cartData" 
      />
  </div>
</template>

<script>
import vCart from "../components/cart/v-cart.vue";
import Header from "@/components/layouts/Header.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartPage",
  components: {
    Header,
    vCart,

  },
  computed: {
    ...mapGetters(["CART"]),
    cartData() {
      return this.CART;
    },
  },
};
</script>
