import { debounce } from "common/utils/utils.js";

//图片全局加载
export const imgItemListenter = {
  data() {
    return {
      imgListenter: null,
    }
  },
  mounted() {
    let newRefresh = debounce(() => {
      this.$refs.scroll.refresh();
    }, 200);
    //保存监听事件
    this.imgListenter = () => { newRefresh() };
    // 事件总线的使用 监听全局事件
    this.$bus.$on(
      "imgesLoad",
      newRefresh
    );
  },
  deactivated() {
    //取消监听全局事件
    this.$bus.$off("imgesLoad", this.imgListenter);
    console.log('deactivated');
  },
  destroyed() {
    //取消监听全局事件
    this.$bus.$off("imgesLoad", this.imgListenter);
    console.log('destroyed');
  },

}