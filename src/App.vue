<template>
  <Header />
  <div class="wrapper">
    

    <router-view />
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
};
</script>
<style lang="scss">

@import "./assets/styles/style.scss";
@import "./assets/styles/zero.scss";
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
