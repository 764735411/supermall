<template>
  <div class="detail">
    <!-- 导航栏 -->
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "./child-components/DetailNavBar";
import { getDetailData } from "network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
  },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    // 1.获取到goodsItem的iid
    this.iid = this.$route.params.iid;
    // 2.请求数据
    this.detailGetData(this.iid);
  },
  methods: {
    detailGetData(iid) {
      getDetailData(iid)
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>