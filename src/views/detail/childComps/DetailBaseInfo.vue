<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ goods.newPrice }}</span>
      <span class="low-price">￥{{ goods.lowPrice }}</span>
      <span v-if="goods.discountDesc" class="discount">{{
        goods.discountDesc
      }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 4px solid rgba(100, 100, 100, 0.2);
}
.info-title {
  color: #000;
}
.info-price {
  margin-top: 10px;
}
.info-price .new-price {
  font-size: 20px;
  color: var(--color-high-text);
  font-weight: 700;
}
.info-price .low-price {
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 5px;
}
.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 10px;
  margin-left: 5px;
}
.info-other {
  font-size: 12px;
  margin-top: 15px;
  line-height: 30px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
  display: flex;
  justify-content: space-between;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service .info-service-item img {
  height: 14px;
  width: 14px;
  position: relative;
  top: 2px;
}
.info-service .info-service-item span {
  font-size: 12px;
  color: #333;
}
</style>