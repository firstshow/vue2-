/**
 * 异步逻辑封装在action 中 ， 发送指令 ， 改变状态
 * create by ZC 2016/10/16
 * */
import * as types from '../mutationTypes'
import xAjax from '../../util/xAjax'

/**
 * 修改个人信息
 * */
export const uploadUserInfo = ({ commit },data ) => {
    alert("我是action，我拿到的数据是："+data.username);
    return new Promise((resolve, reject) => {
        // xAjax('/member/my-card', 'GET', data, (res) => {
            commit(types.UPLOAD_USER_INFO, data); // 发送指令，存储数据



            resolve(); // 将接收到的数据，传回给页面
        // })
    })
}
