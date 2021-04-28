<template>
  <div class="back-top" >
    <img src="~assets/imges/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
}
</script>

<style lang="less" scoped>
.back-top img{
  position: fixed;
  right: 8px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  z-index: 9999;
}
</style>