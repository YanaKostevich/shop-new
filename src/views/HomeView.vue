<template>
  <div>
    <div>
      <Carousel />
      <vCatalog />
    </div>
  </div>
</template>

<script>
import vCatalog from "@/components/catalog/v-catalog.vue";
import Carousel from "@/components/layouts/Carousel.vue";

export default {
  components: {
    vCatalog,
    Carousel,
  },
};
</script>
