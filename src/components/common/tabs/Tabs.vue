<template>
  <div class="tabs">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabs-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      // console.log('itemClick');
      // console.log(index);
      this.currentIndex= index;
      this.$emit('tabClick',index);

    },
  },
};
</script>

<style scoped lang="less">
.tabs {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
}
.active {
  color: #66ccff;
}
.tabs-item {
  flex: 1;
}
.active span {
  border-bottom: 2px solid #66ccff;
  padding-bottom: 6px;
}
</style>