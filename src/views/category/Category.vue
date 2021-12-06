<template>
  <div class="wrapper">
    <!-- 商品分类最上面 -->
    <nav-bar class="nav-cartgory">
      <template #center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <h2>待开发...</h2>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "Category",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.nav-cartgory {
  background-color: var(--color-tint);
  color: white;
  text-align: center;
  font-weight: 700;
}
</style>