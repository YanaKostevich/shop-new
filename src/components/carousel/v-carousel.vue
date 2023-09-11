<template>
  <div class="v-carousel">
    <div
      class="v-carousel__container"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <vCarouselItem
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
        :imageSlide="false"
      />
    </div>
    <button @click="prevSlide">Prev</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script>
import vCarouselItem from "./v-carousel-item.vue";
export default {
  name: "vCarousel",
  components: {
    vCarouselItem,
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  computed: {},
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
    
  },
  watch: {},
  mounted() {
    if(this.interval >0){
      let vm = this;
      setInterval(function(){
        vm.nextSlide()
      }, vm.interval)
    }
  },
};
</script>

<style lang="scss">
@import "/src/assets/styles/style.scss";
.v-carousel {
  max-width: 80rem;
  overflow: hidden;
  border-radius: 2rem;
  margin: 0 auto;
  &__container {
    display: flex;
    transition: all ease 0.5s;
  }
}
</style>
