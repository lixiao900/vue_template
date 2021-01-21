    
    // 引入主模块
    import Vue from "vue";
    import echarts from "echarts/lib/echarts";

    // 引入子模块(项目中需要用的图表)
    import "echarts/lib/chart/bar";
    import "echarts/lib/chart/line";

    Vue.prototype.Echarts = echarts;