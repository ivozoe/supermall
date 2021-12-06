<template>
  <div class="profile">
    <!-- 我的页面的最上面部分 -->
    <nav-bar class="nav-profile">
      <template #center>
        <div>我的档案</div>
      </template>
    </nav-bar>
    <h2>待开发...</h2>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.nav-profile {
  background-color: var(--color-tint);
  color: white;
  text-align: center;
  font-weight: 700;
}
</style>