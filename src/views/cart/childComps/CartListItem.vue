<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-botton
        :is-checked="product.check"
        @click.native="checkClick"
      ></check-botton>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">商品描述：{{ product.desc }}</div>
      <div class="item-bottem">
        <div class="item-price left">￥{{ product.price }}</div>
        <div class="item-count right">×{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBotton from "components/content/checkButton/CheckBotton.vue";
export default {
  name: "CartListItem",
  components: {
    CheckBotton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      return (this.product.check = !this.product.check);
    },
  },
};
</script>

<style scoped>
.shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
  position: relative;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .item-desc {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}
.item-bottem {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.item-info .item-bottem .item-price {
  color: orangered;
}
</style>