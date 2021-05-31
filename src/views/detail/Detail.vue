<template>
  <div class="detail">
    <!-- 导航栏 -->
    <detail-nav-bar
      class="detail-nav-bar"
      @navBarClick="navBarClick"
      ref="navbar"
    ></detail-nav-bar>
    <!-- 滚动栏 -->
    <scroll-component
      class="content"
      ref="scroll"
      @backTopScroll="detailScroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-goods class="detail-goods" :goodsInfo="goods"></detail-goods>
      <detail-shop class="detail-shop" :shopInfo="shop"></detail-shop>
      <detail-image-info
        :image-info="detailImage"
        @detailImgLoad="detailImgLoad"
      ></detail-image-info>
      <detail-param ref="params" :param-info="detailParam"></detail-param>
      <detail-rate ref="comment" :rate-list="rate"></detail-rate>
      <goods-list ref="recommend" :goodsList="recommnendImages"></goods-list>
    </scroll-component>
    <!-- 底部 -->
    <detail-bottom-bar class="detail-bottom-bar"></detail-bottom-bar>
  </div>
</template>

<script>
import { getDetailData, GoodsInfo, getRecommend } from "network/detail.js";

import ScrollComponent from "components/common/scroll/ScrollComponent.vue";
import DetailNavBar from "./child-components/DetailNavBar";
import DetailSwiper from "./child-components/DetailSwiper.vue";
import DetailGoods from "./child-components/DetailGoods.vue";
import DetailShop from "./child-components/DetailShop.vue";
import DetailImageInfo from "./child-components/DetailImageInfo.vue";
import DetailParam from "./child-components/DetailParam.vue";
import DetailRate from "./child-components/DetailRate.vue";

import DetailBottomBar from './child-components/DetailBottomBar.vue';

import GoodsList from "components/content/goods/GoodsList.vue";
import { imgItemListenter } from "common/mixin/mixin.js";
import { debounce } from "common/utils/utils.js";

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
    DetailRate,
    GoodsList,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImage: [],
      detailParam: {},
      rate: {},
      recommnendImages: [],
      detailScrollToY: [],
      detailRefresh: null,
      getDetailScrollToY: null,
      currentIndex: 0,
    };
  },
  mixins: [imgItemListenter],
  created() {
    // 1.获取到goodsItem的iid
    this.iid = this.$route.params.iid;
    // 2.请求数据
    this.detailGetData(this.iid);
    // 3.请求推荐数据
    this.detailGetRecommend();
    // 4. 获取getDetailScrollToY
    this.getDetailScrollToY = debounce(() => {
      this.detailScrollToY = [];
      this.detailScrollToY.push(0);
      this.detailScrollToY.push(this.$refs.params.$el.offsetTop);
      this.detailScrollToY.push(this.$refs.comment.$el.offsetTop);
      this.detailScrollToY.push(this.$refs.recommend.$el.offsetTop);
      this.detailScrollToY.push(Number.MAX_VALUE);
      console.log(this.detailScrollToY);
    }, 200);
    //5. 刷新
    this.detailRefresh = debounce(() => {
      // console.log("detailRefresh");
      this.$refs.scroll.refresh();
    }, 200);

    // console.log(this.detailRefresh);
    // console.log(this.detailRefresh1);
  },
  methods: {
    detailImgLoad() {
      this.detailRefresh();
      this.getDetailScrollToY();
    },
    //待求解
    // detailRefresh1() {
    //   debounce(() => {
    //     console.log("detailRefresh");
    //     this.$refs.scroll.refresh();
    //   }, 200);
    // },
    //跳转
    navBarClick(index) {
      this.$refs.scroll.scrollTo(0, -(this.detailScrollToY[index] - 44), 200);
    },
    /* 滚动到位置切换标签 */
    detailScroll(position) {
      let y = -position.y + 44;
      for (let i = 0; i < this.detailScrollToY.length - 1; i++) {
        if (y >= this.detailScrollToY[i] && y < this.detailScrollToY[i + 1]) {
          if(this.currentIndex!== i){
            this.currentIndex = i;
            // console.log( this.currentIndex);
          }
        }
      }
      this.$refs.navbar.currentIndex = this.currentIndex;
    },
    /* 获取数据 */
    detailGetData(iid) {
      getDetailData(iid)
        .then((res) => {
          // console.log(res);
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
          //评论
          this.rate = data.rate;
          // console.log("rate",this.rate);
        })
        .catch((res) => {
          console.log(res);
        });
    },
    detailGetRecommend() {
      getRecommend()
        .then((res) => {
          // console.log(res);
          this.recommnendImages = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  background-color: #fff;
  height: 100vh;
  z-index: 1;
}
.content {
  height: calc(100% - 44px - 49px);
}
.detail-goods {
  margin-top: 16px;
  margin-bottom: 20px;
}
.detail-nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.detail-shop {
  padding: 10px;
}
.detail-bottom-bar{
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 9;
}
</style>