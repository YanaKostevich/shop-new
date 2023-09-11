<template>

    <div class="carousel">
        <vCarousel 
        :carousel_data="slideItems"
        />
   
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
  data(){
    return{
      slideItems:[
        {id: 1, name: 'img1', img:'../../assets/img/1-b.png'},
        {id: 2, name: 'img2', img:'../../assets/img/1-b.png'},
        {id: 3, name: 'img3', img:'../../assets/img/1-b.png'},
        {id: 4, name: 'img4', img:'../../assets/img/1-b.png'},
      ]
    }
  }
};
</script>


<style lang="scss">

</style>
