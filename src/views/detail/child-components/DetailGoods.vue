<template>
  <div class="detail-goods">
    <div v-if="Object.keys(goodsInfo).length !== 0">
      <h2>{{ goodsInfo.title }}</h2>
      <div class="price">
        <span class="new-price">{{ goodsInfo.price }}</span>
        <span class="old-price">{{ goodsInfo.oldPrice }}</span>
        <div class="discount">{{ goodsInfo.discount }}</div>
      </div>
      <div class="detail-columns">
        <div>{{ this.goodsInfo.columns[0] }}</div>
        <div>{{ this.goodsInfo.columns[1] }}</div>
        <div v-if="goodsInfo.serveices[4]">{{ goodsInfo.serveices[4].name }}</div>
      </div>
      <div class="run">
        <span>
          <img :src="goodsInfo.serveices[0]" alt="">
          {{goodsInfo.serveices[0].name}}
        </span>
        <span>
          <img :src="goodsInfo.serveices[1].icon" alt="">
          {{goodsInfo.serveices[1].name}}
        </span>
        <span>
          <img :src="goodsInfo.serveices[2].icon" alt="">
          {{goodsInfo.serveices[2].name}}
        </span>
        <span v-if="goodsInfo.serveices[3]">
          <img :src="goodsInfo.serveices[3].icon" alt="">
          {{goodsInfo.serveices[3].name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoods",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.detail-goods {
  padding: 0 18px;
}
h2 {
  font-size: 18px;
}
.price {
  position: relative;
  height: 30px;
  width: 100%;
  line-height: 30px;
}
.new-price {
  font-size: 20px;
  font-weight: 600;
  color: rgb(255, 98, 98);
}
.old-price {
  text-decoration: line-through;
}
.discount {
  position: absolute;
  display: inline-block;
  height: 20px;
  padding: 0 10px;
  line-height: 20px;
  background-color: rgb(255, 98, 98);
  border-radius: 10px;
}
.detail-columns {
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  margin-top:10px ;
  font-size: 14px;
  color: rgb(158, 158, 158);
  border-bottom: 1px solid ;
  border-bottom-color: rgb(236, 236, 236);
}
.run{
  margin-top: 5px;
  display: flex;
  font-size: 10px;
  justify-content: space-between;
}
.run img{
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
</style>