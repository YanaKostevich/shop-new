<template>
  <ul>
    <li><router-link to="/shop">Shop</router-link></li>
    <li><router-link to="/blog">Blog</router-link></li>
    <li><router-link to="/our-story">Our Story</router-link></li>
  </ul>
  <router-link to="/cart" class="cart-icons">
      <img src="../assets/cart.svg" alt="Cart" />
    </router-link>
</template>
<script>
export default {
  components: {},
  methods: {},
};
</script>

<style lang="scss">
@import "../assets/styles/style";
ul {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 4rem;
  li {
    padding: 0;
    list-style: none;
    a {
      font-family: var(--font-family);
      font-size: var(--font-size);
      font-style: var(--font-style);
      font-weight: var(--font-weight);
      line-height: var(--line-height);
      color: $first-color;
      &:hover{
        color: $second-color;
        text-decoration: none;
      }
    }
  }
}
</style>
