<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
     <tabs
        class="tab-item tabs-hide"
        :titles="tabsTitles"
        @tabClick="tabClick"
        ref="topsControlHide"
        v-show="tobsHideIsShow"
      ></tabs>
    <scroll-component
      class="content"
      ref="scroll"
      @backTopScroll="contentScroll"
      @scrollPullingUp="scrollPullingUp"
    >
      <home-swiper
        :cbanners="banners"
        class="home-swiper"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommend="recommends"></recommend-view>
      <future-view></future-view>
      <tabs
        class="tab-item"
        :titles="tabsTitles"
        @tabClick="tabClick"
        ref="topsControl"
      ></tabs>
      <goods-list :goodsList="goods[goodsType].list"></goods-list>
    </scroll-component>
    <!-- vue2.x组件要监听事件需要加上.native vue3.x移除.native -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./homechildren/HomeSwiper";
import RecommendView from "./homechildren/HomeRecommendView";
import FutureView from "./homechildren/FutureView";

import ScrollComponent from "components/common/scroll/ScrollComponent";
import NavBar from "components/common/navbar/NavBar";
import Tabs from "components/common/tabs/Tabs";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getGoodsList } from "network/home.js";
import { debounce } from "common/eventService/eventService.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FutureView,
    Tabs,
    GoodsList,
    ScrollComponent,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      tabsTitles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsType: "pop",
      isShowBackTop: false,
      topsOffsetTop: 300,
      tobsHideIsShow:false,
    };
  },
  created() {
    //获取展示数据
    this.homeGetMultidata();
    //获取goods数据
    this.homeGetGoodsList("pop");
    this.homeGetGoodsList("new");
    this.homeGetGoodsList("sell");
  },
  mounted() {
    // 事件总线的使用
    this.$bus.$on(
      "imgLoad",
      debounce(() => {
        console.log("-----");
        this.$refs.scroll.refresh();
      }),
      200
    );
  },
  methods: {
    /* 事件 */
    //切换goods显示类型
    tabClick(index) {
      switch (index) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
          break;
        default:
          break;
      }
      //使用子组件的属性
      this.$refs.topsControlHide.currentIndex = index;
      this.$refs.topsControl.currentIndex = index;
    },
    //backTop点击事件
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    //显示返回顶部按钮
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000;
      this.tobsHideIsShow = (-position.y) > this.topsOffsetTop;
    },
    //上拉事件
    scrollPullingUp() {
      // console.log("上拉加载");
      this.homeGetGoodsList(this.goodsType);
      this.$refs.scroll.finishPullUp();
    },
    //轮播图图片加载
    swiperImageLoad() {
      // 组件中的$el属性可以获取组件中的元素
      this.topsOffsetTop = this.$refs.topsControl.$el.offsetTop;
    },
    /* 网络请求方法 */
    homeGetGoodsList(type) {
      let page = this.goods[type].page + 1;
      getGoodsList(type, page)
        .then((res) => {
          let goodsData = res.data.list;
          this.goods[type].list.push(...goodsData);
          this.goods[type].page = res.data.page;
        })
        .catch((res) => {
          console.log(res);
        });
    },
    homeGetMultidata() {
      getHomeMultidata()
        .then((res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="less">
#home {
  position: relative;
  height: 100vh;
}
.home-nav-bar {
  background-color: rgb(45, 230, 230);
  color: #fff;
  //固定定位 在原生滚动中有用
  // position: fixed;
  // left: 0;
  // top: 0;
  // right: 0;
  // z-index: 9;
}
/* better-scroll 设置高度 */
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  left: 0;
  bottom: 49px;
}
.tab-item {
  margin-bottom: 10px;
}
.tabs-hide{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>