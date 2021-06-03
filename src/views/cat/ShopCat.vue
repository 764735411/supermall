<template>
  <div id="shop-cart">
    <!-- 导航 -->
    <nav-bar class="home-nav-bar"
      ><div slot="center">购物车({{ shopCarLength }})</div></nav-bar
    >
    <scroll-component class="content" res="cartscroll">
      <shop-cart-item></shop-cart-item>
    </scroll-component>
    <shop-bottom-bar class="shop-bottom-bar"></shop-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ShopCartItem from "./childComponent/ShopCartItem.vue";
import ShopBottomBar from "./childComponent/ShopBottomBar.vue";
import ScrollComponent from "components/common/scroll/ScrollComponent.vue";

//导入getters
import { mapGetters } from "vuex";

export default {
  name: "ShopCat",
  components: {
    NavBar,
    ShopCartItem,
    ScrollComponent,
    ShopBottomBar,
  },
  computed: {
    //不改名用数组
    ...mapGetters(["shopCarLength"]),
    //改名用对象
    // ...mapGetters([{nowLength:'shopCarLength'}]),
  },
 
};
</script>

<style scoped lang="less">
#shop-cart {
  height: 100vh;
}
.home-nav-bar {
  background-color: rgb(45, 230, 230);
  color: #fff;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  // visibility: hidden;
}
.shop-bottom-bar{
  position: relative; 
  left: 0;
  z-index: 9;
}
</style>