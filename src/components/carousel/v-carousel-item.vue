<template>
    <div class="v-carousel-item">
        <img :src="require('../../assets/img/' + item_data.img)" alt="" />
    </div>
  </template>
  
  <script>
  export default {
    name: "v-carousel-item",
    components: {},
    props: {
     item_data: {
        type: Object,
        default: () => {}
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
  