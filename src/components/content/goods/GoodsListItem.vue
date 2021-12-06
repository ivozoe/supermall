<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">
        <span class="collect-item"></span>
        {{ goodsItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    // 这里的goodsItem就是每一个要展示的商品,不是合集
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */
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
.collect-item {
  font-family: "icomoon";
  font-size: 12px;
  color: var(--color-tint);
  cursor: pointer;
}
</style>