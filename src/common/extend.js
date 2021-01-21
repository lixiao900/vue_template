
    /**
     * 当前文件在Vue的原型上添加一些项目中常用方法
     */
    import Vue from "vue";
    import { Message } from 'element-ui';

    /**
     * 警告提示
     * @param { String } message 
     */
    Vue.prototype.$warn = function(message) {
        Message({
            type: "warning",
            message: message
        });
    };

    /**
     * 成功提示
     * @param { String } message 
     */
    Vue.prototype.$success = function(message) {
        Message({
            type: "success",
            message: message
        });
    };

    /**
     * 错误提示
     * @param { String } message 
     */
    Vue.prototype.$error = function(message) {
        Message({
            type: "error",
            message: message
        });
    };

    /**
     * 处理请求错误
     * @param { Array } err 
     * @param { String } tip 
     * 
     * 使用案例: 
     * this.$dealRequestError(err:直接扔catch捕获到的异常对象, {
     *  router: "接口路径",
     *  operation: `当前具体操作`
     * });
     */
    Vue.prototype.$dealRequestError = function(err, tip) {
        if ( Array.isArray(err) ) {
            // 服务器错误
            Message({
                type: "error",
                dangerouslyUseHTMLString: true,
                message: `<span style="line-height: 25px;">错误类型: 服务端错误</span></br>
                          <span style="line-height: 25px;">错误路由: ${tip.router}</span></br>
                          <span style="line-height: 25px;">错误信息: ${err}</span></br>`
            });
        }else {
            // 客户端错误
            Message({
                type: "error",
                dangerouslyUseHTMLString: true,
                message: `<span style="line-height: 25px;">错误类型: 客户端错误</span></br>
                          <span style="line-height: 25px;">当前操作: ${tip.operation}</span></br>
                          <span style="line-height: 25px;">错误信息: ${err}</span></br>`
            });
        };  
    };

    export default Vue;