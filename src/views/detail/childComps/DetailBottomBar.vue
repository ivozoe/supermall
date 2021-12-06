<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text" @click="itemClick">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text" @click="itemClick">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text" @click="itemClick">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="itemClick">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
    itemClick() {
      this.$toast.show("该功能待完善", 2000);
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.bar-left .text {
  font-size: 14px;
}
.bar-left .icon {
  display: block;
  font-style: normal;
  width: 22px;
  height: 22px;
  font-size: 20px;
  margin-left: 15px;
  margin-top: 5px;
}
.bar-right {
  font-size: 15px;
  line-height: 52px;
}
.bar-right .cart {
  background-color: #ffe817;
  font-size: 14px;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
  color: #fff;
}
@font-face {
  font-family: "icomoon";
  src: url("~assets/img/common/fonts/icomoon.eot?94j1oo");
  src: url("~assets/img/common/fonts/icomoon.eot?94j1oo#iefix")
      format("embedded-opentype"),
    url("~assets/img/common/fonts/icomoon.ttf?94j1oo") format("truetype"),
    url("~assets/img/common/fonts/icomoon.woff?94j1oo") format("woff"),
    url("~assets/img/common/fonts/icomoon.svg?94j1oo#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.icon {
  font-family: "icomoon";
  /* font-size: 12px; */
  /* color: var(--color-tint); */
  cursor: pointer;
}
</style>