<template>
  <div id="app">
    <main-tabbar></main-tabbar>
  </div>
</template>


<script>
import mainTabbar from 'components/content/mainTabbar/mainTabbar'
export default {
  name:'app',
  components:{
    mainTabbar
  }
}
</script>

<style lang="less">
  //导入全局css
  @import './assets/css/base.css';
</style>
