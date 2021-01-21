    
    import axios from "axios";
        
    // 创建接口文档axios实例
    var loginServer = axios.create({
        timeout: 3 * 1000,
        baseURL: ""
    }); 

    // 当前实例请求拦截
    loginServer.interceptors.request.use(
        config => {
            // 请求请请求头拦截
            return config;
        },
        error => {
            // 请求前错误拦截
            return Promise.reject(error);
        }
    );

    // 当前实例响应拦截
    loginServer.interceptors.response.use(
        response => {
            // 响应内容统一拦截
            return response.data;
        },
        error => {
            // 响应错误统一拦截
            return Promise.reject([
                error
            ]);
        }
    );

    export default loginServer;