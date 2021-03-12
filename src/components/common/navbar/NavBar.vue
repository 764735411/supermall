<template>
<!-- 导航栏 -->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped lang="less">
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 0 3px 0 hsl(0deg 6% 58% / 20%);
}
.right,
.left {
  width: 60px;
}
.center {
  flex: 1;
}
</style>