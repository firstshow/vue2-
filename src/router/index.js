import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import {pageRoutes} from './routes'

/**
 * 定义（路由）组件。
 * 从其他文件 引入 进来
 * 使用下面这种方式来加载组件,而不用import ，是因为 这样可以实现路由懒加载,分js打包,按需加载
 * 在build后 会有多个小js 文件
 * */

// 基础路由 有底部导航栏的入口
const App = resolve => require(['./../App.vue'], resolve)

/**
 * 加载路由插件
 * */
Vue.use(VueRouter);

// 去除加载条的转圈动画
NProgress.configure({ showSpinner: false });

/**
 * 定义路由 routes` 配置
 */
const routes = [
    {
        path: '/',
        name : 'index',
        component: App,
        redirect: '/home',
        children : pageRoutes
    },
]

/**
 * 创建 router 实例，然后传 `routes` 配置
 * */
const router = new VueRouter({
    mode: 'hash',
    routes ,// 注入路由
})

/**
 * 当用户信息中没有token时，则用户未登录
 * 跳转到登录页面
 * */
router.beforeEach(({meta, path}, from, next) => {
    // let { auth = true } = meta
    // let isLogin = Boolean(store.state.user.accesstoken) //true用户已登录， false用户未登录
    // if (auth && !isLogin && path !== '/login') {
    //     return next({ path: '/login' })
    // }
    NProgress.start(); // 页面切换，显示加载条
    next()
})

/**
 * 路由跳转成功之后
 * */
router.afterEach(({meta, path}, from, next) => {
    NProgress.done(); // 隐藏加载条
})

export default router
