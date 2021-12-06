<template>
  <div id="home">
    <!-- 首页最上面nav部分 -->
    <nav-bar class="nav-home">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 当滚动到一定位置,(流行 精选 新款)部分要有吸顶效果 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="taboffset1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="conentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 首页轮播图 -->
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <!-- 首页主要展示部分 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 首页img一张图部分 -->
      <feature-view></feature-view>
      <!-- 首页流行 精品 精选部分 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="taboffset2"
      ></tab-control>
      <!-- 首页最下面商品展示部分 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 首页返回顶部按钮 -->
    <back-top @click.native="backClick" v-show="topIsShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
      // 保存goods的数据结构
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      topIsShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //保存离开首页时的Y值
    this.saveY = this.$refs.scroll.getScrollY();
  },
  created() {
    //1.请求首页banner/recommend的数据
    this.getHomeMultidata();
    //2.请求首页下面列表数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /*
      事件监听相关
    */
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.taboffset1.currentindex = index;
      this.$refs.taboffset2.currentindex = index;
    },
    backClick() {
      // 点击返回顶部按钮,就返回顶部
      this.$refs.scroll.scrollTo(0, 0);
    },
    conentScroll(position) {
      // 1.滚动到某位置就把返回顶部按钮显示出来
      this.topIsShow = -position.y > 600;
      // 2.当tab-control滚动到一定位置时,将isTabFixed改成true
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      //获取tabcontrol的offsetTop
      //不可以直接获取组件的offsetTop,要通过$el
      this.tabOffsetTop = this.$refs.taboffset2.$el.offsetTop;
    },
    /*
      网络请求相关
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //先设置一个变量，记录“将要”请求的type的页码，（不是指type现在显示的页码），所以要+1
      const page = this.goods[type].page + 1;
      //这里的res随着type和page的变化而变化
      getHomeGoods(type, page).then((res) => {
        //请求新页码的list，并push到原list的后面，不是覆盖
        this.goods[type].list.push(...res.data.list);
        //原来type保存的页码要发生变化，+1
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-home {
  background-color: var(--color-tint);
  color: white;
  text-align: center;
  font-weight: 700;

  /* 这个fixed属性在better-scroll里面已经不起作用了,这个属性是针对浏览器原生滚动的时候 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>