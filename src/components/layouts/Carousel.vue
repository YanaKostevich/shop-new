<template>
  <div class="carousel">
    <vCarousel :carousel_data="sliderItems" :interval="5000" />
  </div>
</template>

<script>
import vCarousel from "../carousel/v-carousel.vue";

export default {
  name: "carousel",
  components: {
    vCarousel,
  },
  computed: {},
  data() {
    return {
      sliderItems: [
        { id: 1, name: "Gold big hoops", price: "$ 68,00", img: "1.png" },
        { id: 2, name: "Gold watch", price: "$ 65 00", img: "2.png" },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
