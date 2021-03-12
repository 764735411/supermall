<template>
  <div>
    <nav-bar class="home-nav-bar"><div slot="center">购物车</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "ShopCat",
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="less">
.home-nav-bar {
  background-color: rgb(45, 230, 230);
  color: #fff;
}
</style>