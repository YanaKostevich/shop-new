<template>
  <div>
    <header>
      <div class="header">
        <div class="logo">MusicMosaic</div>
        <div class="menu-btn">
          <BurgerMenu right />
        </div>
        <div class="cart">
          <vCart/>
        </div>
      </div>
      <!-- <video
        class="bg-video"
        loop=""
        autoplay="true"
        muted
        src="@/assets/video.mp4"
        type="video/mp4"
      ></video> -->
    </header>
  </div>
</template>

<script>
import BurgerMenu from "./BurgerMenu.vue";
import vCart from "../v-cart.vue";
export default {
  name: "Header",
  components: {
    BurgerMenu,
    vCart
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
header {
  padding-top: 50px;
  width: 80%;
  margin: 0 auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-family: "Quicksand";
      font-size: 30px;
      color: antiquewhite;
    }
    .menu-btn {
    }
  }
}
.bg-video {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0%;
  z-index: -1;
  object-fit: cover;
  filter: brightness(50%) blur(2px);
}
</style>
