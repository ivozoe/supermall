<template>
  <div class="bottom-bar">
    <!-- 全选按钮 -->
    <div class="check-content">
      <check-botton
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      ></check-botton>
      <span>全选</span>
    </div>
    <!-- 合计部分 -->
    <div class="total-price">合计：{{ totalPrice }}</div>
    <!-- 结算部分 -->
    <div class="calculate" @click="calcClick">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckBotton from "components/content/checkButton/CheckBotton.vue";
export default {
  name: "CartBottomBar",
  components: {
    CheckBotton,
  },
  computed: {
    totalPrice() {
      //计算总价
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      //去结算后面的商品个数
      return this.$store.state.cartList.filter((item) => item.check).length;
    },
    isSelectAll() {
      // 判断如果有一个  没有选中的cartlist,那么直接返回false
      if (this.$store.state.cartList.length === 0) return false;
      //如果cartlist里面find到有一个check为false(没有选中),那么就返回false(取反!)
      return !this.$store.state.cartList.find((item) => !item.check);
      //方法二: return !this.$store.state.cartList.filter((item) => !item.check).length;
    },
  },
  methods: {
    checkClick() {
      //   先做判断:①如果一开始全选中,那么就变成全不选
      //           ②如果一开始只有某些选中,那么就是变成全选
      if (this.isSelectAll) {
        //isSelectAll本身就是判断按钮是否全选
        this.$store.state.cartList.forEach((item) => (item.check = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.check = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品", 2000);
      } else {
        this.$toast.show("该功能待完善", 2000);
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  display: flex;
  font-size: 12px;
}
.check-content {
  width: 60px;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 17px;
  margin-right: 5px;
}
.total-price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 80px;
  background-color: rgb(236, 91, 115);
  color: #fff;
  text-align: center;
}
</style>