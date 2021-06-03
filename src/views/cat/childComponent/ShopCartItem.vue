<template>
  <div class="cart">
    <div class="cart-item" v-for="(item, index) in cartItemList" :key="index">
      <div class="choose" @click="chooseShop(item)">
        <choose :is-active="item.checked"></choose>
      </div>
      <div class="describe-block">
        <div class="imges">
          <img :src="item.image" />
        </div>
        <div class="info">
          <div class="info-desc">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <div class="info-price">
            <div class="price">价格:{{ item.price }}</div>
            <div class="count">
              <span class="sub">-</span><span>{{ item.count }}</span
              ><span class="add">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Choose from "components/common/selectIcon/Choose.vue";
export default {
  name: "ShopCartItem",
  components: {
    Choose,
  },
  data() {
    return {
      cartItemList: [],
    };
  },
  methods: {
    chooseShop(item){
      this.$store.dispatch('changeIsChooseShop',item); 
    }
  },
  mounted() {
    this.cartItemList = this.$store.state.carList;
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 100%;
}
.choose{
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin-right: 10px;
}
.cart-item {
  display: flex;
  width: 100%;
  height: 170px;
  padding: 10px;
}
.describe-block {
  display: flex;
}
.describe-block .imges img {
  height: 150px;
  width: 100px;
  border-radius: 10px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
}
.info h3 {
  font-size: 18px;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-line-clamp: 2;
  /* 设置或检索伸缩盒兑现的子元素的排列方式 */
  -webkit-box-orient: vertical;
}
.info p {
  font-size: 12px;
  line-height: 20px;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-line-clamp: 3;
  /* 设置或检索伸缩盒兑现的子元素的排列方式 */
  -webkit-box-orient: vertical;
}
.info-price {
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  justify-content: space-between;
}
.info-price .price {
  color: rgb(255, 0, 0);
}
.count {
  text-align: center;
  padding: 0 10px;
}
.sub {
  height: 20px;
  width: 20px;
  font-size: 20px;
  margin: 0 10px;
  color: aqua;
}
.add {
  height: 20px;
  width: 20px;
  font-size: 20px;
  margin-left: 10px;
  color: aqua;
}
</style>