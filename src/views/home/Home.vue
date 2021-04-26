<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>
    <recommend-view :recommend="recommends" />
    <future-view></future-view>
    <tabs :titles="tabsTitles"></tabs>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./homechildren/HomeSwiper";
import RecommendView from "./homechildren/HomeRecommendView";
import FutureView from "./homechildren/FutureView";

import NavBar from "components/common/navbar/NavBar";
import Tabs from "components/common/tabs/Tabs";

import { getHomeMultidata, getGoodsList } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FutureView,
    Tabs,
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
    };
  },
  created() {
    //获取展示数据
    this.homeGetMultidata();
    //获取goods数据
    this.homeGetGoodsList('pop');
    this.homeGetGoodsList('new');
    this.homeGetGoodsList('sell');
  },
  methods: {
    homeGetGoodsList(type) {
      let page = this.goods[type].page+1;
      getGoodsList(type, page)
      .then((res) => {
        let goodsData = res.data.list;
        console.log(res.data);
        this.goods[type].list.push(...goodsData);
        this.goods[type].page = res.data.page;
      })
      .catch(res=>{
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
  padding-top: 44px;
}

.home-nav-bar {
  background-color: rgb(45, 230, 230);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 5;
}
</style>