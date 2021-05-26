<template>
  <div class="rate" v-if="Object.keys(rateList).length !== 0">
    <div class="user-title clear-fix">
      <div class="left">用户评价</div>
      <div class="right">更多</div>
    </div>
    <div class="comments" v-for="(item, index) in rateList.list" :key="index">
      <div class="logo">
        <img :src="item.user.avatar" alt="" />
        {{ item.user.uname }}
      </div>
      <div class="info">
        <p>{{ item.content }}</p>
        <div class="clear-fix font-set">
          <div class="date">{{ item.created | dateFilter }}</div>
          <div class="rule">{{ item.style }}</div>
        </div>
        <div class="images">
          <img :src="img" v-for="(img, index) in item.images" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formartDate } from "common/utils/utils.js";
export default {
  name: "DetailRate",
  props: {
    rateList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    dateFilter(value) {
      let date = new Date(value * 1000);
      // console.log(date);
      return formartDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped lang="less">
.rate {
  padding: 10px 15px;
  width: 100%;
}
.user-title{
  font-size: 16px;
}
.logo {
  margin: 10px 0;
  width: 100%;
  height: 50px;
  font-size: 20px;
}
.logo img {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  vertical-align: middle;
}
.date {
  float: left;
}
.rule {
  float: left;
  margin-left: 10px;
}
.comments p {
  margin: 10px 0;
  font-size: 16px;
}
.font-set{
  font-size: 14px;
  color: rgba(156, 156, 156, 0.904);
}
.images{
  margin-top:10px ;
  display: flex;
  width: 100%;
  
}
.images img {
  width: 22%;
}
</style>