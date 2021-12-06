<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="detail-content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentscroll"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="list"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="topIsShow"></back-top>
    <!-- 封装弹窗 -->
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";
// 封装弹窗
// import Toast from "components/common/toast/Toast.vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    GoodsList,
    BackTop,
    // Toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopY: [],
      currentindex: 0,
      topIsShow: false,
      //封装弹窗
      // message: "",
      // show: false,
    };
  },
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid;
    // 2. 根据iid请求数据
    getDetail(this.iid).then((res) => {
      //2.1 获取顶部轮播图数据
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //2.2 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //2.3 获取商家信息
      this.shop = new Shop(data.shopInfo);
      //2.4 获取商品详细信息
      this.detailInfo = data.detailInfo;
      //2.5 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //2.6 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 3.请求详情页的推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.list;
    });
  },
  updated() {},
  methods: {
    imageLoad() {
      //等待图片加载完毕，再计算每个小模块距离顶部的themeTopY值
      this.$refs.scroll.refresh();
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.list.$el.offsetTop);
      //push最大值
      this.themeTopY.push(Number.MAX_VALUE);
      console.log(this.themeTopY);
    },
    titleClick(index) {
      //点击顶部的模块，可以实现自动跳转
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 100);
    },
    contentscroll(position) {
      // 1.获取y值
      const positionY = -position.y;
      let length = this.themeTopY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentindex !== i &&
          positionY >= this.themeTopY[i] &&
          positionY < this.themeTopY[i + 1]
        ) {
          this.currentindex = i;
          // console.log(this.currentindex);
          this.$refs.nav.currentindex = this.currentindex;
        }
        //关于详情页顶部跳转的普通做法
        // if (
        //   this.currentindex !== i &&
        //   ((i < length - 1 &&
        //     positionY >= this.themeTopY[i] &&
        //     positionY < this.themeTopY[i + 1]) ||
        //     (i === length - 1 && positionY >= this.themeTopY[i]))
        // ) {
        //   this.currentindex = i;
        //   console.log(this.currentindex);
        //   this.$refs.nav.currentindex = this.currentindex;
        // }

        //3.是否需要返回顶部
        this.topIsShow = -position.y > 600;
      }
    },
    backClick() {
      // 点击返回顶部按钮,就返回顶部
      this.$refs.scroll.scrollTo(0, 0);
    },
    addToCart() {
      //添加购物车
      //1.先获取购物车要显示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //2.将商品添加到购物车里
      // this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product).then((res) => {
        //封装弹窗
        // this.message = res;
        // this.show = true;
        // setTimeout(() => {
        //   this.message = "";
        //   this.show = false;
        // }, 1500);
        this.$toast.show(res, 2000);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>