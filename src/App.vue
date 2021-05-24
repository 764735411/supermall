<template>
  <div id="app">
     <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>


<script>
import mainTabbar from "components/content/mainTabbar/mainTabbar";
export default {
  name: "app",
  components: {
    mainTabbar,
  },
};
</script>

<style lang="less">
//导入全局css
@import "./assets/css/base.css";
</style>
