
<template>
  <div class="v-cart-item">
 
    <div class="v-cart-item__image">
      <img :src="require('../assets/img/' + cart_item_data.image)" alt="" />
    </div>
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Quantity</p>
      {{ cart_item_data.quantity }}
    </div>
    <button 
    @click="deleteFromCart(cart_item_data.article)">
    Delete</button>

  </div>
</template>


<script>
export default {
  name: "v-cart-item",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
  watch: {},
  mounted() {
    const cartItemData = this.cart_item_data;
    cartItemData.quantity = 1;
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  &__image {
    max-width: 100px;
  }
}
</style>


