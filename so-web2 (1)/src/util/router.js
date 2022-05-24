// vue-4.x：
import { createRouter,createWebHistory } from 'vue-router';


// 配置路由规则
const routes = [
    {
        path: "",
        name: "homePage",
        component: import("../components/index/HomePage"),
    },
    {
        path: "/nav",
        name: "nav",
        component: import("../components/nav/NavIndex"),
    },
    {
        path: "/second",
        name: "second",
        component: import("../components/second/SecondIndex"),
    },
    {
        path: "/content",
        name: "content",
        component: import("../components/content/ContentIndex"),
        children: [
            {
                path: "list",
                name: "contentList",
                component: import("../components/content/ContentList"),
            },
            {
                path: "detail",
                name: "contentDetail",
                component: import("../components/content/ContentDetail"),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

// 创建路由对象
const router = createRouter({
    mode: "hash",
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// 导出路由对象
export default router;