<template>
    <div class="v-carousel">
        <vCarouselItem
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
        />
    </div>
  </template>
  
  <script>
  import vCarouselItem from './v-carousel-item.vue';
  export default {
    name: "v-carousel",
    components: {
        vCarouselItem
    },
    props: {
        carousel_data: {
            type: Array,
            default: () => []
        }
     
    },
    data() {
      return {};
    },
    computed: {},
    methods: {
   
    },
    watch: {},
    mounted() {},
  };
  </script>
  
  <style lang="scss">
  @import "/src/assets/styles/style.scss";
 
  </style>
  