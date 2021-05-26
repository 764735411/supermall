<template>
  <div class="image-info" v-if="Object.keys(imageInfo).length !== 0">
    <div>

    </div>
    <div class="show" v-for="(item, index) in imageInfo" :key="index">
      <h2 class="title">{{item.key}}</h2>
      <div class="image-list" v-for="(image, index) in item.list" :key="index">
        <img :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailImageInfo',
  props:{
    imageInfo:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.show{
  margin-bottom: 10px;
}
.title{
  font-size: 20px;
  margin: 10px 0;
}
.show img{
  width: 100%;
}
</style>