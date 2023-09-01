<template>
    <div class="v-quantity-cart">
     <div class="test"><img src="../../assets/cart.svg" alt="Cart" /> {{ CART.length }}</div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  export default {
    name: "v-quantity-cart",
    components: {},
    props: {
      
    },
    data() {
      return {};
    },
    computed: {
        ...mapGetters([
      'CART'
    ]),
    },
    methods: {
      
    },
    watch: {},
    mounted() {},
  };
  </script>
  
  <style lang="scss">
  @import "/src/assets/styles/style.scss";
 
  </style>
  