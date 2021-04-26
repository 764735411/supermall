<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in cbanners" :key="item.background">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    cbanners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped lang="less">
.home-swiper img {
  border-radius: 10px;
}
.home-swiper {
  margin: 10px;
}
</style>