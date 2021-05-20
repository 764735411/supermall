<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goodsItem = "item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  name: "GoodsList",
  components:{
    GoodsListItem
  },
  props:{
    goodsList:{
      type:Array,
      default(){
        return [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 14px;
  width: 100%;
}
</style>