
    import { home } from "./menus";
  
    let routes = [

        // 主页路由
        home,

        // 一级路由登录页面
        {
            name: "Login",
            path: "/login",
            meta: {
                name: "登录页"
            },
            component: () => import("$root/Login.vue")
        },

        // 根路由重定向
        {
            path: "/",
            redirect: {
                name: "Home"
            }
        },

        // 错误路由重定向
        {
            path: '*',
            redirect: {
                name: "Home"
            }
        }
    ]

    export default routes;