<template>
  <div>
    <Header />
    <div>
      <vCatalog />
    </div>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import vCatalog from "@/components/catalog/v-catalog.vue";

export default {
  components: {
    Header,
    vCatalog,
  },
};
</script>
