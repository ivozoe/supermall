<template>
  <div class="cart">
    <!-- 购物车最上面 -->
    <nav-bar class="nav-cart">
      <template #center>
        <div>购物车（{{ cartLength }}）</div>
      </template>
    </nav-bar>
    <!-- 商品的列表 -->
    <cart-list></cart-list>
    <!-- 购物车底部的汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    //方法一
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
    //方法二
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-cart {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  text-align: center;
}
</style>