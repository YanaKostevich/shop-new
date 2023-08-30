<template>
  <div class="v-main-wrapper">
    <h2>{{ title }}</h2>

    <v-catalog />
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
  },
  props: {},
  data() {
    return {
      title: "Main wrap",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.v-main-wrapper {
  max-width: 55rem;
  margin: 0 auto;
}
</style>
