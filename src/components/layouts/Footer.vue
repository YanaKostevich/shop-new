<template>
  <footer>
    <div class="footer">
      <div class="top-block">
        <div class="menu-footer">
          <ul>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
            <li>
              <router-link to="/terms-of-services"
                >Terms of Services</router-link
              >
            </li>
            <li>
              <router-link to="/shipping-and-returns"
                >Shipping and Returns</router-link
              >
            </li>
          </ul>
        </div>
        <div class="give-an-email">
          <p>Give an email, get the newsletter.</p>
          <p class="arrow"></p>
        </div>
      </div>
      <div class="bottom-block">
        <div class="copyright">
          <p>
            © 2021 Shelly. <span
              ><router-link to="/terms-of-use">Terms of Use</router-link></span
            >
            and
            <span
              ><router-link to="/privacy-policy"
                >Privacy Policy</router-link
              ></span
            >
          </p>
        </div>
        <div class="social-icons">
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/styles/style";
footer {
  border-top: 1px solid #d8d8d8;
  .footer {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 3.25rem 0 5.5rem;
    .top-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
      .menu-footer {
        display: flex;
        ul {
          display: flex;
          justify-content: space-between;
          gap: 2.5rem;

          li {
            a {
              font-family: var(--font-family);
              font-size: var(--font-size);
              font-style: var(--font-style);
              font-weight: var(--font-weight);
              line-height: var(--line-height);
              color: #707070;
            }
          }
        }
      }
      .give-an-email {
        display: flex;
        gap: 8rem;
        justify-content: space-between;
        border-bottom: 1px solid $first-color;
        p {
          font-family: var(--font-family);
          font-size: var(--font-size);
          font-style: var(--font-style);
          font-weight: var(--font-weight);
          line-height: var(--line-height);
          color: #707070;
          padding-bottom: 0.8rem;
          display: flex;

        }
        .arrow{
            &::after{
            content: '\2192';
           
    font-size: 30px;
          }
        }
      }
    }
    .bottom-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .copyright{
            p{
                font-family: var(--font-family);
          font-size: var(--font-size);
          font-style: var(--font-style);
          font-weight: var(--font-weight);
          line-height: var(--line-height);
          color: $first-color;
                span{
                    a{
color: #707070;
                    }
                }
            }
        }
        .social-icons{
            display: flex;
            gap: 2rem;
            i{
                color: #707070;
                font-size: 20px;
                &:nth-child(2){
                    font-size: 17px;
                }
            }
        }
    }
  }
}
</style>
