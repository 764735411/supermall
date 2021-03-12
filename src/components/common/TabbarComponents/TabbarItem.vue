<template>
    <!-- 选项栏元素  -->
    <div id="tabbar-item" class="tabbar-item" @click="itemClick()">
        <!-- 添加div包裹 属性写在div中避免替换时出错 -->
       <div v-if="!isActive"><slot name="item-icon"></slot></div> 
       <div v-else><slot name="item-icon-active"></slot></div> 
       <div :style="colorStyle"><slot name="item-text"></slot></div> 
    </div>
</template>

<script>
export default {
    name:'TabbarItem',
    props:{
        link:String,
        itemColor:{
            type:String,
            default:'rgb(74, 107, 255)'
        }
    },
    data() {
        return {
          
        }
    },
    methods: {
        itemClick(){
            // console.log('itemClick');
            this.$router.push(this.link).catch(err=>err);
        },
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.link) !== -1;
        },
        //传入颜色
        colorStyle(){
            return  this.isActive?{color:this.itemColor}:{}
        }

    }
}
</script>

<style scoped lang="less"> 
    .tabbar-item {
        flex: 1px;
        text-align: center;
        height: 49px; 
        font-size: 14px;
    }
    .tabbar-item img {
         width: 26px;
         height: 26px;
         margin-top: 3px;
         vertical-align: middle;//去除图片下方的3px
         margin-bottom: 1px;
     }

</style>