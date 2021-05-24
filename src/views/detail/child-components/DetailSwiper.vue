<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import SwiperItem from 'components/common/swiper/SwiperItem';
import Swiper from 'components/common/swiper/Swiper';
export default {
  name:'DetailSweiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      defualt(){
        return [];
      }
    }
  }
}
</script>

<style scoped lang="less">
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>