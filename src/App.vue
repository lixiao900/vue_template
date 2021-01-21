<template>
    <!-- 根组件 -->
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
    // 清除浮动
    .clear::after {
        content: "";
        display: block;
        clear: both;
    }
    // 必填项
    .required::after {
        content: "*";
        color: red;
    }
    // 文本超出省略号
    .over {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    // 全局样式
    #app {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        font-family: "Microsoft YaHei";
        font-size: 12px;
        color: #333333;
    }
</style>
