<template>
  <div>
    <v-cart :cart_data="cartData" />
  </div>
</template>

<script>
import vCart from "../components/cart/v-cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartPage",
  components: {
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
