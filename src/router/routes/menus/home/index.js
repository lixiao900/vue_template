

    let home = {
        name: "Home",
        path: "/home",
        meta: {
            name: "主页"
        },
        component: () => import("$root/Home.vue"),
        // redirect: {
         
        // },

        children: [
           
        ]
    };

    export default home;