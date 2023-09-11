<template>
  <div>
    <Header />
    <div>
      <Carousel />
      <vCatalog />
    </div>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import vCatalog from "@/components/catalog/v-catalog.vue";
import Carousel from "@/components/layouts/Carousel.vue";

export default {
  components: {
    Header,
    vCatalog,
    Carousel,
  },
};
</script>
