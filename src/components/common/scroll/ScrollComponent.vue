<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Pullup from "@better-scroll/pull-up";

//使用上拉插件
BScroll.use(Pullup);

export default {
  name: "ScrollComponent",
  data() {
    return {
      betterScroll: null,
    };
  },
  mounted() {
    //获取better-scroll
    this.betterScroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: 3,
      pullUpLoad: true,
    });
    //监听滚动
    this.betterScroll.on("scroll", (position) => {
      this.$emit("backTopScroll", position);
    });
    //监听上拉到底
    this.betterScroll.on("pullingUp", () => {
      this.$emit("scrollPullingUp");
    });
  },
  methods: {
    scrollTo(x, y, delay) {
      this.betterScroll && this.betterScroll.scrollTo(x, y, delay);
    },
    finishPullUp() {
      this.betterScroll && this.betterScroll.finishPullUp();
    },
    refresh() {
      this.betterScroll && this.betterScroll.refresh();
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper{
  width: 100%;
}
</style>