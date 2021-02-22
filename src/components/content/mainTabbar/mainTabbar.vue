<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 使用组件 -->
    <tabbar>
      <tabbar-item link="/home">
        <img slot="item-icon" src="~assets/imges/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/imges/tabbar/home-active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item link="/classify">
        <img slot="item-icon" src="~assets/imges/tabbar/integral.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/imges/tabbar/integral-active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item link="/cat">
        <img slot="item-icon" src="~assets/imges/tabbar/cart-Empty.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/imges/tabbar/cart-Empty-active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item link="/profile">
        <img slot="item-icon" src="~assets/imges/tabbar/user.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/imges/tabbar/user-active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/TabbarComponents/Tabbar";
import TabbarItem from "components/common/TabbarComponents/TabbarItem";
export default {
  name: "mainTabbar",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style scoped lang="less">
</style>