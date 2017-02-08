/**
 * 改变状态的唯一方式， 根据指令来更新数据，这是个同步的事务。
 * create by ZC 2016/10/16
 * */

import * as types from '../mutationTypes'
import {saveToSession , saveToLocal} from '../dataHandle'

// 当页面刷新后，首先从本地获取数据
const state = JSON.parse(window.localStorage.getItem("userInfo")) ||  {
    username : '111',
    password : '***'
    }

const mutations = {
    /**
     * 更新用户基本信息
     * */
    [types.UPLOAD_USER_INFO] (state, data) {
        try {
            Object.assign(state, data);
            console.log(state);
            // 更新后的数据存储到本地
            saveToSession('userInfo',state);
        } catch (err) {
            console.log("存储错误："+err)
        }
    },
}

export default {
    state,
    mutations
}
