<template>
    <!-- 选项栏主体 -->
    <div id="tabbar" class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Tabbar'
}
</script>

<style scpoed lang="less">
     #tabbar {
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 0px;
        box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
        height: 49px;
    }
</style>