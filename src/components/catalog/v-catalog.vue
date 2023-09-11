<template>
  <div class="v-catalog">
    <h3>Shop The Latest</h3>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCCart="addToCCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
    'GET_PRODUCTS_FROM_API',
    'ADD_TO_CART'
    ]),
    addToCCart(data){
      this.ADD_TO_CART(data)
    }
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem 3rem;
  }
}
</style>
