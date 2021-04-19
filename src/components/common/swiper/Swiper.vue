<!-- 轮播图 -->
<template>
  <div id="hy-swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <!-- 插入slide -->
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{ active: indexStyle(index) }"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000,
    },
    animDuration: {
      type: Number,
      default: 300,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      slideCount: 0, //元素个数
      /**
       * wiper的宽度
       */
      totalWidth: 0,
      swiperStyle: {}, //swiper的样式
      currentIndex: 1, //轮播图当前的index
      scrolling: false, //是否正在滚动
      iconIndex: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      //console.log("Swiper mounted");
      // 1.操作DOM, 在前后添加Slide
      this.handleDom();
      // 2.开启定时器
      this.startTimer();
    }, 300);
  },
  methods: {
    /**
     * 显示样式
     */
    indexStyle(index) {
      return index === this.iconIndex;
    },
    // indexStyle(index){
    //   return index === this.currentIndex - 1;
    // },
    
    /**
     * 定时器操作
     */
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.iconIndex++;
        this.iconIndex = this.iconIndex % this.slideCount;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
      //console.log(this.playTimer);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },

    /**
     * 初始化 操作Dom,在Dom后添加slide
     */
    handleDom() {
      //console.log("swiper handleDom");
      //1.获取操作对象
      let swiperEl = document.querySelector(".swiper");
      let slideEls = swiperEl.getElementsByClassName("slide");

      //2.保存个数
      this.slideCount = slideEls.length;

      //3.如果大于1个，那么在前后分别添加一个slide
      if (this.slideCount > 1) {
        let cloneFrist = slideEls[0].cloneNode(true);
        let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slideEls[0]);
        swiperEl.appendChild(cloneFrist);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
        //console.log(swiperEl);
      }

      //4.让swiper元素，显示第一个（目前是显示前面添加的最后一个元素）
      this.setTransform(-this.totalWidth);
    },

    /**
     * 滚动到正确位置
     */
    scrollContent(currentPosition) {
      //0.设置正在滚动
      this.scrolling = true;

      //1.开始滚动动画
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      //console.log(this.swiperStyle.transition);
      this.setTransform(currentPosition);

      //2.判断滚动到的位置
      this.checkPosition();
      //3.滚动完成
      this.scrolling = false;
    },

    /**
     * 校验正确的位置
     */
    checkPosition() {
      window.setTimeout(() => {
        //0.校验正确位置
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        //1.结束移动后的回调
        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },

    /**
     * 设置滚动的位置
     */
    setTransform(position) {
      //console.log('setTransform');
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      //console.log(this.swiperStyle);
      this.swiperStyle["-webkit-transform"] = `translate3d(${position}px),0,0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px),0,0`;
    },

    /**
     * 拖动事件处理
     */
    touchStart(e) {
      console.log("touchStart");
      //1.如果正在滚动不可以拖动
      if (this.scrolling) return;
      //2.停止计时器
      this.stopTimer();
      //3.保存开始滚动的位置
      this.startX = e.touches[0].pageX;
      // console.log(this.startX, "touchStart");
    },

    /**
     *
     */
    touchMove(e) {
      // console.log("touchMove");
      //1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      // console.log(this.currentX, "currentX");
      this.distance = this.currentX - this.startX;
      // console.log(this.startX, "startX");
      // console.log(this.distance, "distance");
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      // 2.设置当前的位置
      this.setTransform(moveDistance);
      Systom;
    },

    /**
     *
     */
    touchEnd(e) {
      console.log("touchEnd");
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance);
      //console.log(this.distance);
      // 2.判断最终的距离
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }

      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 4.移动完成后重新开启定时器
      this.startTimer();
    },

    /**
     * 控制上一个, 下一个
     */
    previous() {
      this.changeItem(-1);
    },
    next() {
      this.changeItem(1);
    },
    changeItem(num) {
      // 1.移除定时器
      this.stopTimer();
      // 2.修改index和位置
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 3.添加定时器
      this.startTimer();
    },
  },
};
</script>


<style scoped lang="less">
#hy-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}
.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>