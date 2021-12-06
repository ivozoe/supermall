<template>
  <nav-bar>
    <template #left>
      <div class="backItem" @click="backClick"></div>
    </template>
    <template #center>
      <div class="nav-title">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="titleList"
          @click="titleClick(index)"
          :class="{ active: currentindex === index }"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentindex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.nav-title {
  display: flex;
  font-size: 14px;
  text-align: center;
}
.titleList {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
@font-face {
  font-family: "icomoon";
  src: url("~assets/img/common/fonts/icomoon.eot?hmzwsv");
  src: url("~assets/img/common/fonts/icomoon.eot?hmzwsv#iefix")
      format("embedded-opentype"),
    url("~assets/img/common/fonts/icomoon.ttf?hmzwsv") format("truetype"),
    url("~assets/img/common/fonts/icomoon.woff?hmzwsv") format("woff"),
    url("~assets/img/common/fonts/icomoon.svg?hmzwsv#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.backItem {
  font-family: "icomoon";
  font-size: 25px;
  color: var(--color-text);
  cursor: pointer;
  text-align: center;
}
</style>