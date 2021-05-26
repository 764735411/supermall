<template>
  <div class="detail">
    <!-- 导航栏 -->
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll-component class="content">
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-goods class="detail-goods" :goodsInfo="goods"></detail-goods>
    <detail-shop class="detail-shop" :shopInfo="shop"></detail-shop>
    <detail-image-info :image-info="detailImage"></detail-image-info>
    <detail-param :param-info="detailParam"></detail-param>
    </scroll-component>
  </div>
</template>

<script>
import { getDetailData, GoodsInfo } from "network/detail.js";


import ScrollComponent from 'components/common/scroll/ScrollComponent.vue'
import DetailNavBar from "./child-components/DetailNavBar";
import DetailSwiper from "./child-components/DetailSwiper.vue";
import DetailGoods from "./child-components/DetailGoods.vue";
import DetailShop from "./child-components/DetailShop.vue";
import DetailImageInfo from "./child-components/DetailImageInfo.vue";
import DetailParam from "./child-components/DetailParam.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoods,
    ScrollComponent,
    DetailShop,
    DetailImageInfo,
    DetailParam,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop:{},
      detailImage:[],
      detailParam:{},
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
          let data = res.result;
          this.topImages = data.itemInfo.topImages;
          this.goods = new GoodsInfo(
            data.columns,
            data.itemInfo,
            data.shopInfo
          );
          //商店信息
          this.shop = data.shopInfo;
          //详情图片
          this.detailImage = data.detailInfo.detailImage;
          //商品参数
          this.detailParam = data.itemParams;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.detail{
  position: relative;
  background-color: #fff;
  height: 100vh;
  z-index: 1;
}
.content{
  height: calc(100% - 44px);
}
.detail-goods{
  margin-top: 16px;
  margin-bottom:20px ;
}
.detail-nav-bar{
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.detail-shop{
  padding: 10px;
}
</style>