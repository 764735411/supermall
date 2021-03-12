<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./homechildren/HomeSwiper";

import { getHomeMultidata } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata()
      .then((res) => {
        //console.log(res);
        this.banners = res.data.banner.list;
        console.log(this.banners);
        this.recommends = res.data.recommend;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped lang="less">
.home-nav-bar {
  background-color: rgb(45, 230, 230);
  color: #fff;
}
</style>