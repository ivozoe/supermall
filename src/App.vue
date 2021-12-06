<template>
  <div id="app">
    <!-- Detail不需要缓存，每点击一个list都要重新请求一次数据 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/mainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import url(assets/css/base.css);
</style>
