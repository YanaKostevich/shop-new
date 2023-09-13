<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../../assets/img/' + product_data.image)"
      alt=""
    />
    <h4 class="v-catalog-item__name">{{ product_data.name }}</h4>
    <div class="v-catalog-item__info">
      <p class="price">Price: $ {{ product_data.price }}</p>
    <button
      class="add_to_cart"
      @click="addToCCart(product_data)"
      :disabled="isAddingToCart"
    >
      <!-- {{ isAddingToCart ? 'Додано' : 'Add to cart' }} -->
      <img
        v-if="!isAddingToCart"
        src="../../assets/cart.svg"
        alt="Add to cart"
      />
      <p v-else>😉</p>
    </button>
    </div>
    
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
    return { isAddingToCart: false };
  },
  computed: {},
  methods: {
    addToCCart() {
      this.isAddingToCart = true;
      this.$emit("addToCCart", this.product_data);
      setTimeout(() => {
        this.isAddingToCart = false;
        // this.buttonText = "Додано";
      }, 5000);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
@import "/src/assets/styles/style.scss";
.v-catalog-item {
  // flex-basis: 25%;
  // box-shadow: 0 0 8px 0 #e0e0e0;
  // padding: $padding;
  // margin-bottom: 1rem;
  &__name {
    font-family: var(--font-family);
    font-size: 20px;
    font-style: normal;
    font-weight: var(--font-weight);
    line-height: 26px;
    text-align: left;
    color: $first-color;
    padding: 1.5rem 0.3rem 0;
  }
  &__info{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem 0 0.5rem;
    .price, .add_to_cart {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 130% */
    text-transform: capitalize;
    color: $second-color;
    text-align: left;
    cursor: pointer;
    background-color: transparent;
  }
  }
  

  img {
    max-width: 100%;
    width: 100%;
  }
}
</style>
