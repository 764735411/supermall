<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div class="info">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.recommend{
  display: flex;
  text-align: center;
  margin: 10px 0 0 0;
  padding-bottom: 20px;
  border-bottom: 8px solid #eee;
}
.recommend img {
  width: 70px;
  height: 70px;
}
.recommend-item{
  flex: 1;
}
.info{
  margin-top: 5px;
}
</style>