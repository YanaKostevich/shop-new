<template>
    <div class="v-carousel-item">
        <img :src="require('../../assets/img/carousel/' + item_data.img)" alt="" />
        <div class="item__content">
           <p>{{ item_data.name }}</p>
           <p>{{ item_data.id }}</p>
           <p>{{ item_data.price }}</p>
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
        default: () => {}
     },
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
  .v-carousel-item{
    min-width:80rem;
    img{
      border-radius: 2rem;
    }
 
  }
  </style>
  