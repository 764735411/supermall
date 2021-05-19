<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt=""  @load="imgLoad"/>
    <div class="item-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">单价:{{ goodsItem.price }}</span>
      <span class="cfav">收藏:{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad(){
      // console.log('imgLoad');
      this.$bus.$emit('imgLoad');
    }
  },
};
</script>

<style scoped lang="less">
.goods-list-item {
  width: 46%;
  position: relative;
}
.goods-list-item img {
  padding-bottom: 40px;
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
.item-info {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40px;
  width: 100%;
  text-align: center;
}
.item-info p {
  width: 100%;
  height: 20px;
  line-height: 20px;
  /* 1. 先强制一行内显示文本 */
  white-space: nowrap;
  /* 2. 超出部分隐藏 */
  overflow: hidden;
  /* 3. 文字用省略号代替 */
  text-overflow: ellipsis;
}
.cfav {
  margin-left: 10px;
}
</style>                        