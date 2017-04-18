/**
 * 应用级的状态集中放在 store 中
 * create by ZC 2016/10/16
 * */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '../vuex/actions'
import * as getters from '../vuex/getters'
import * as modules from './modules'

/**
 * 注册Vuex插件
 * */
Vue.use(Vuex)
export default new Vuex.Store({
    modules,
    actions,
    getters,
    strict: process.env.NODE_ENV !== 'production' // 当开发模式时候，启用严格模式
})
