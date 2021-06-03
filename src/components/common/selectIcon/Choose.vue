<template>
  <div class="choose">
    <img
      :class="{ active: isActive }"
      src="~assets/imges/cart/select.svg"
      alt="是否选择"
    />
  </div>
</template>

<script>
export default {
  name: "Chooose",
  props: {
    isActive: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.choose {
  width: 20px;
  height: 20px;
}
.choose img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: rgb(204, 204, 204);
  vertical-align: top;
}
.choose .active {
  background-color: rgb(235, 25, 25);
}
</style>