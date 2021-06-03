<template>
  <div class="bottom-bar">
    <div class="bar">
      <div class="item">
        <img src="~assets/imges/detail/service.svg" alt="" />
        <div class="info">客服</div>
      </div>
      <div class="item">
        <img src="~assets/imges/detail/shop.svg" alt="" />
        <div class="info">店铺</div>
      </div>
      <div class="item">
        <img src="~assets/imges/detail/star.svg" alt="" />
        <div class="info"><span>收藏</span></div>
      </div>
    </div>
    <div class="shop-car">
      <div class="car" @click="addCar"><span>加入购物车</span></div>
      <div class="shop"><span>购买</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCar(){
      // console.log('addCar');
     this.$emit('addToCar');
    }
  },
};
</script>

<style lang="less" scoped>
.bottom-bar {
  display: flex;
  width: 100%;
  height: 49px;
  background-color: rgb(255, 255, 255);
}
.bar {
  display: flex;
  width: 50%;
  height: 100%;
}
.shop-car {
  display: flex;
  text-align: center;
  width: 50%;
  height: 100%;
  // background-color: rgb(12, 220, 247);
}
.item {
  flex: 1;
  height: 100%;
  text-align: center;
  background-color: rgb(255, 255, 255);
}
.item .info {
  font-size: 12px;
}
.item img {
  width: 26px;
  height: 26px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 3px;
}

.car,.shop {
  flex: 1;
  height: 49px;
  text-align: center;
  line-height: 49px;
}
.car{
  background-color: rgb(50, 173, 255);
  color: rgb(255, 255, 255);
}
.shop{
  background-color: rgb(238, 67, 67);
  color: rgb(255, 255, 255);
}
</style>