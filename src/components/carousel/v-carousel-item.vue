<template>
  <div class="v-carousel-item">
    <img :src="require('../../assets/img/carousel/' + item_data.img)" alt="" />
    <div class="v-carousel-item__content">
      <p class="name">{{ item_data.name }}</p>
      <p class="price">{{ item_data.price }}</p>
      <button class="btn-view">View Product</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-carousel-item",
  components: {},
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
@import "/src/assets/styles/style.scss";
.v-carousel-item {
  min-width: 81.2rem;
  position: relative;
  img {
    border-radius: 2rem;
    width: 100%;
  }
  &__content {
    position: absolute;
    bottom: 0;
    top: 50%;
    left: 4%;
  transform: translateY(-30%);
    .name,
    .price,
    .btn-view {
      font-family:  var(--font-family);
      color: $third-color;
      font-style: normal;
      text-align: left;
    }
    .name {
      font-size: 33px;
      font-weight: 500;
      padding-bottom: 1rem;
    }
    .price {
      font-size: 26px;
      font-weight: var(--font-weight);
      padding-bottom: 3rem;
    }
    .btn-view {
      font-size: 20px;
      font-weight: 700;
      padding: 13px 32px;
      border: 2px solid $third-color;
      background-color: transparent;
      border-radius: 6px;
    }
  }
}
</style>
