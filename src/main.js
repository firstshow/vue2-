import Vue from 'vue'
import vueTap from 'v-tap';
import zepto from 'webpack-zepto'
import store from './vuex/store'
import * as filters from './filters/' // 自定义过滤器
import * as globalFun from './util/globalFun' // 全局方法
import components from './components/' //加载公共组件
import { scrollRecord } from './lib/route-data/scroll-record'
import router from './router'
import App from './App'

/**
 * 引入flex.css
 * 引入nprogress.css
 * 引入所有样式
 * */
import 'nprogress/nprogress.css'
import 'flex.css'
import "./assets/css/reset.less"
import "./assets/css/tool.less"
import "./assets/css/icon.less"
import "./assets/css/public.less"
import "./assets/css/animation.less"
import "./assets/css/base.less"


/**
 * 使用vue-tap，解决移动端click事件延迟300ms
 * */
Vue.use(vueTap);

/**
 * 定义全局函数
 * */
Vue.prototype.setTitle = globalFun.setTitle; // 设置页面标

/**
 * 开启vueDebug模式
 * */
Vue.config.debug = true;

/**
 * 全部引入mint-ui UI 框架
 * */
// import 'mint-ui/lib/style.css';
// import MintUI from 'mint-ui'
// Vue.use(MintUI );

/**
 * 注册过滤器
 * */
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

/**
 * 全局引入自定义公共组件
 * 不用在页面中单个引入
 * */
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()); //首字母大写
    Vue.component(`x${name}`, components[key])
})

/**
 * 需要记录滚动条位置的指令
 */
Vue.directive('scroll-record', scrollRecord);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

// 全局引入zepto
window.$ = zepto;


