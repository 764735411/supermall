<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="logo">
      <img :src="shopInfo.shopLogo" alt="" />
      {{ shopInfo.name }}
    </div>
    <div class="info">
      <div class="sale">
        <div class="all-sale">
          <div>{{ shopInfo.cSells | cellFilter }}</div>
          <div>总销量</div>
        </div>
        <div class="all-cGoods">
          <div>{{ shopInfo.cGoods }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="evaluation">
        <div v-for="(item, index) in shopInfo.score" :key="index" class="table">
          <span>{{ item.name }}</span>
          <span class="better" :class="{ 'no-better': item.isBetter }">{{
            item.score
          }}</span>
          <span class="better" :class="{ 'no-better': item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="go">
      <span >进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    cellFilter(value) {
      let cell = value;
      if (cell > 10000) {
        return (cell / 10000).toFixed(1) + "万";
      }
      return cell;
    },
  },
};
</script>

<style lang="less" scoped>
.shop-info {
  width: 100%;
}
.logo {
  margin: 10px 0;
  width: 100%;
  height: 50px;
  font-size: 26px;
}
.logo img {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  vertical-align: middle;
}

.info {
  display: flex;
  height: 100px;
}
.sale {
  display: flex;
  justify-content: space-around;
  width: 50%;
  font-size: 20px;
  border-right: 2px solid #e7e7e7;
}
.all-sale,
.all-cGoods {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.all-sale div,
.all-cGoods div {
  margin: 10px 0;
  text-align: center;
}
.evaluation {
  padding-left: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
  height: 100%;
  width: 50%;
}
.better {
  color: red;
}
.no-better {
  color: rgb(41, 145, 46);
}
.table {
  display: flex;
  justify-content: space-between;
}
.go{
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
}
.go span{
  padding: 0 20px;
  background-color: rgb(53, 240, 247);
  border-radius: 10px;
}
</style>