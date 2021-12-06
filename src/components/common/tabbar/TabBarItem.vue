<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <!-- 不活跃时图片 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <!-- 活跃时图片 -->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 文字 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "pink",
    },
  },
  data() {
    return {
      // 这个方法是写死了
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      // 判断活跃时候的路径是否有取过来的那个路径
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // console.log("----");
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    tabBarClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>