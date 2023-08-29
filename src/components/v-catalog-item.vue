<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../assets/img/' + product_data.image)"
      alt=""
    />
    <h4 class="v-catalog-item__name">{{ product_data.name }}</h4>
    <p class="v-catalog-item__nprice">Price: {{ product_data.price }}</p>
    <button class="v-catalog-item__add_to_cart btn" @click="addToCCart(product_data)">
      Add to cart
    </button>
   
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  components: {},
  props: {
    product_data: {
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
    addToCCart(){
      this.$emit('addToCCart', this.product_data);
    }
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
@import "/src/assets/styles/style.scss";
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding;
  margin-bottom: 1rem;

  img {
    max-width: 80px;
  }
}
</style>
