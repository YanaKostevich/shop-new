<template>
  <div>
    <Header />
    <div>
      <vMainWrapper />
    </div>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import vMainWrapper from "@/components/v-main-wrapper.vue";

export default {
  components: {
    Header,
    vMainWrapper,
  },
};
</script>
