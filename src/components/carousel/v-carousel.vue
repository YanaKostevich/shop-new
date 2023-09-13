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
    <div class="navigation">
      <button class="prev btn" @click="prevSlide">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="next btn" @click="nextSlide">
      <i class="fas fa-chevron-right"></i>
    </button>
    </div>
    
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
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide();
      }, vm.interval);
    }
  },
};
</script>

<style lang="scss">
@import "/src/assets/styles/style.scss";
.v-carousel {
  position: relative;
  width: 81.2rem;
  overflow: hidden;
  border-radius: 2rem;
  margin: 0 auto;
  &__container {
    display: flex;
    transition: all ease 0.5s;
  }
  .navigation{
    position: absolute;
    bottom: 30px;
    left: 45.5%;
    display: flex;
    gap: 5rem;
    .btn{
    background-color: transparent;
    cursor: pointer;
  
  }
  .fa-chevron-left,
.fa-chevron-right {
  color: white; 
  font-size: 24px; 
}
  }
  
}
</style>
