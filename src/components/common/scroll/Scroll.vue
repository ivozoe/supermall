<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      //   eventPassthrough: "vertical",
      //   useTransition: false,
      //   mouseWheel: true,
    });
    //2.监听滚动事件
    this.scroll.on("scroll", (position) => {
      //因为在别的组件里有时不想实时监听，而在首页里需要实时监听，所以不好在这里直接写死
      //发出去一个事件，让别的组件来确定要不要实时监听我们这个scroll组件
      this.$emit("scroll", position);
    });
    //3.监听上拉加载更多事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  //   updated() {
  //     this.scroll.refresh();
  //   },
};
</script>

<style>
</style>