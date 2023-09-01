<template>
  <header>
    <div class="header">
      <Logo />
      <div class="menu-cart">
        <div class="menu-btn">
          <Menu />
        </div>
        <div class="separator"></div>
        <div class="cart-search">
          <div class="search">
            <vSearch />
          </div>
        
            <router-link to="/cart" class="cart-icons">
            <vQuantityCart />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "../logo.vue";
import Menu from "../menu.vue";
import vSearch from "../v-search.vue";
import vQuantityCart from "../cart/v-quantity-cart.vue";
export default {
  name: "Header",
  components: {
    Logo,
    Menu,
    vSearch,
    vQuantityCart
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
header {
  margin: 0 auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    padding: 5rem 0;
    .logo {
      text-align: left;
    }
    .menu-cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 3rem;
      .cart-search {
        display: flex;
        justify-content: space-between;
        gap: 2.5rem;
      }
      .separator {
        border: 0.5px solid #707070;
        width: 1px;
        &::before {
          content: "|";
          height: 100%;
          color: transparent;
        }
      }
    }
  }
}
</style>
