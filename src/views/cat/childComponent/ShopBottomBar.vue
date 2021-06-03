<template>
  <div class="shop-bottom-bar">
    <div class="all-checked-icon">
      <choose
        :is-active="isSelectAll"
        class="choose-cpn"
        @click.native="bottomClick"
      ></choose>
      <span class="font">全选</span>
    </div>
    <div>总价格:{{nowAllPrice}}</div>
    <button @click="goSettlement" class="settlement">
      <span class="font">去结算</span>
    </button>
  </div>
</template>

<script>
import Choose from "components/common/selectIcon/Choose.vue";
export default {
  name: "ShopBottomBar",
  components: {
    Choose,
  },
  data() {
    return {
      allIconActive: false,
      bottomCarList: [],
    };
  },

  methods: {
    bottomClick() {
      if (this.allIconActive) {
        this.$store.commit("noAllChoose");
      } else {
        this.$store.commit("allChoose");
      }
    },
    goSettlement() {
      console.log("goSettlement");
    },
  },
  computed: {
    isSelectAll() {
      if(this.bottomCarList.length===0){
        return false;
      }
      //直接返回  this.allIconActive的状态就不会变了
      //需要在这里改变this.allIconActive的状态
      this.allIconActive =
        this.bottomCarList.length ===
        this.bottomCarList.filter((item) => {
          return item.checked;
        }).length;
      return this.allIconActive;
    },
    nowAllPrice() {
    return  this.bottomCarList
        .filter((item) => {
          return item.checked;
        })
        .reduce((prePrice, item) => {
          return prePrice + item.price * item.count;
        }, 0).toFixed(2);
    },
  },
  mounted() {
    this.bottomCarList = this.$store.state.carList;
  },
};
</script>

<style lang="less" scoped>
.shop-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: rgb(235, 233, 233);
}
.all-checked-icon {
  display: flex;
  margin-left: 20px;
  height: 20px;
}
.font {
  font-size: 16px;
  line-height: 20px;
}
.settlement {
  text-align: center;
  width: 80px;
  height: 40px;
  color: rgb(255, 255, 255);
  background-color: rgb(252, 38, 38);
  border-radius: 20px;
  padding: 10px;
  margin: auto 10px;
  border-style: none;
}
</style>