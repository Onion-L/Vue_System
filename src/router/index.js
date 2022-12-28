//引入路由
import VueRouter from 'vue-router'
import Vue from 'vue';


Vue.use(VueRouter);

//配置路由路径
export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: () => import('../components/Login')
        },
        {
            path: '/',
            component: () => import('../layout'),
            redirectL: '/home'
        },
        {
            path: '/home',
            component: () => import('../layout'),
            children: [
                {
                    path: 'data',
                    component: () => import('../components/Datacenter')

                },
                {
                    path: 'menu',
                    component: () => import('../components/Menu')

                },
                {
                    path: 'document',
                    component: () => import('../components/Document')

                },
                {
                    path: 'calender',
                    component: () => import('../components/Calender')

                },

            ]
        },

    ]
})