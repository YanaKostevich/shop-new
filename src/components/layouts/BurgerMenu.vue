<template>
  <Slide>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </Slide>
</template>
<script>
import { Slide } from "vue3-burger-menu";
export default {
  components: {
    Slide, // Register your component
  },
};
</script>

<style lang="scss">
.cross-style {
  position: absolute;
  top: 20px;
  left: 25px;

  cursor: pointer;
}

.bm-burger-button {
  width: 36px;
  right: 36px;
  left: auto;
  height: 30px;
  cursor: pointer;
  .bm-burger-bars {
    background-color: red;
  }
}
.bm-item-list {
  a {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
    font-family: "Quicksand";
    font-size: 20px;
    color: red;
  }
}
</style>
