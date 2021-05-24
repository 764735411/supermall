<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left" @click="goBack">
        <img
          src="~assets/imges/detail/arrow-left-bold.svg"
          class="arrow-left-bold"
        />
      </div>
      <div slot="center" class="center">
        <div class="item" v-for="(item, index) in titles" 
        :key="index"
        :class="{active:index===currtIndex}"
        @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currtIndex:0
    };
  },
  methods: {
    itemClick(index){
      this.currtIndex = index;
    },
    goBack(){
      this.$router.go(-1);
    }
  },
};
</script>

<style scoped lang="less">
.left {
  height: 44px;
}
.arrow-left-bold {
  width: 30px;
  height: 30px;
  background-color: #fff;
  margin-top: 6px;
}
.item {
  flex: 1;
}
.center {
  display: flex;
}
.active{
  color: rgb(14, 192, 216);
}
</style>