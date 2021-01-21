    
    import Vue from "vue";
    import VueRouter from "vue-router";
    import routes from "./routes";
    import { Message } from 'element-ui';

    Vue.use(VueRouter);

    // 初始化的路由
    let router = new VueRouter({
        routes
    });

    // 全局路由权限控制
    router.beforeEach((to, from, next) => {
        var projectRouter = ["AddUser", "UpdateUser", "AddRole", "UpdateRole"]; 
        
        // 以上路由只有管理员才可以访问    
        for (let i=0,l=projectRouter.length; i<l; i++) {
            if (to.name === projectRouter[i]) {
                // 获取用户角色的位置
                let user = localStorage.getItem("user");
                // 依据角色进行不同处理的位置
                if (user) {
                    if (JSON.parse(user).role !== "ADMIN") {
                        // 错误提醒
                        Message({
                            type: "warning",
                            message: `您是${JSON.parse(user).role},没有权限!`
                        });
                        // 路由回滚
                        router.back();
                        return;
                    };
                };
            };
        };

        // 路由放行
        next();
    });

    // 利用代码在执行过程中重置路由
    const resetRouter = function() {
        // 重置路由
        let initRouter = new VueRouter({
            routes: []
        });
        router.matcher = initRouter.matcher;
        
        // 添加路由
        router.addRoutes(routes);
    };

    // 暴露重置路由的方法至每一个实例上
    Vue.prototype.$resetRouter = resetRouter;

    export default router;
