/**
 * 定义（路由）组件。
 * 从其他文件 引入 进来
 * 使用下面这种方式来加载组件,而不用import ，是因为 这样可以实现路由懒加载,分js打包,按需加载
 * 在build后 会有多个小js 文件
 * */

// 引入首页路由
const home = resolve => require(['./../views/homePage/home'], resolve)
const scanCode = resolve => require(['./../views/homePage/storePage/scanCode'], resolve) // 扫码页面
const storeList = resolve => require(['./../views/homePage/storePage/storeList'], resolve) // 商家列表
const storeDetail = resolve => require(['./../views/homePage/storePage/storeDetail'], resolve) // 商家详情
const selectProvince = resolve => require(['../views/homePage/placePage/selectProvince'], resolve) // 选择省份
const selectCity = resolve => require(['./../views/homePage/placePage/selectCity'], resolve)  // 选择城市
const pay = resolve => require(['./../views/homePage/payPage/pay'], resolve)  // 支付
const payDetail = resolve => require(['./../views/homePage/payPage/payDetail'], resolve)  // 支付成功详情


// 引入会员卡路由
const vip = resolve => require(['../views/vipPage/vip'], resolve)
const vipCardDetail = resolve => require(['./../views/vipPage/vipCardDetail'], resolve) // 会员卡详情
const vipUseDirection = resolve => require(['./../views/vipPage/vipUseDirection'], resolve) // 会员卡使用说明
const vipRecharge = resolve => require(['./../views/vipPage/vipRecharge/vipRecharge'], resolve) // 会员充值
const vipRechargeList = resolve => require(['./../views/vipPage/vipRecharge/vipRechargeList'], resolve) // 会员充值记录列表
const vipRechargeDetail = resolve => require(['./../views/vipPage/vipRecharge/vipRechargeDetail'], resolve) // 会员充值详情
const vipPayList = resolve => require(['./../views/vipPage/vipPay/vipPayList'], resolve) // 会员消费记录列表
const vipPayDetail = resolve => require(['./../views/vipPage/vipPay/vipPayDetail'], resolve) // 会员消费详情
const vipActivation = resolve => require(['./../views/vipPage/vipActivation/vipActivation'], resolve) // 会员激活

// 引入我的路由
const my = resolve => require(['./../views/myPage/my'], resolve)
const myInfo = resolve => require(['./../views/myPage/infoPage/myInfo'], resolve) // 我的个人信息
const myRedBagList = resolve => require(['./../views/myPage/redBagPage/myRedBagList'], resolve) // 我的红包列表
const myHistoryRedBagList = resolve => require(['./../views/myPage/redBagPage/myHistoryRedBagList'], resolve) // 我的历史红包列表
const myQrCode = resolve => require(['./../views/myPage/myQrCode'], resolve) // 我的二维码
const vipSeckillList = resolve => require(['./../views/myPage/seckillPage/vipSeckillList'], resolve) // 会员秒杀列表
const myOrderList = resolve => require(['./../views/myPage/orderPage/myOrderList'], resolve) // 我的订单列表

/**
 * 我的红包列表
 * @type {{path: string, component: Function, children: *[]}}
 */
export const pageRoutes = [
    /**
     * 首页
     * */
    {
        path: '/home',
        name : 'home',
        component: home,
    },
    {
        path: '/home/selectProvince',
        name : 'selectProvince',
        component: selectProvince,
    },
    {
        path: '/home/selectProvince/selectCity',
        name : 'selectCity',
        component: selectCity,
    },
    {
        path: '/home/scanCode',
        name : 'scanCode',
        component: scanCode,
    },
    {
        path: '/home/storeList',
        name : 'storeList',
        component: storeList,
    },
    {
        path: '/home/storeList/storeDetail/:storeId',
        name : 'storeDetail',
        component: storeDetail,
    },
    {
        path: '/home/pay',
        name : 'pay',
        component: pay,
    },
    {
        path: '/home/pay/payDetail',
        name : 'payDetail',
        component: payDetail,
    },
    /**
     * 会员卡
     * */
    {
        path: '/vip',
        name : 'vip',
        component: vip
    },
    {
        path: '/vip/vipCardDetail/:vipCardId',
        name : 'vipCardDetail',
        component: vipCardDetail,
    },
    {
        path: '/vip/vipUseDirection',
        name : 'vipUseDirection',
        component: vipUseDirection,
    },
    {
        path: '/vip/vipRecharge',
        name : 'vipRecharge',
        component: vipRecharge,
    },
    {
        path: '/vip/vipRechargeList',
        name : 'vipRechargeList',
        component: vipRechargeList,
    },
    {
        path: '/vip/vipRechargeList/vipRechargeDetail',
        name : 'vipRechargeDetail',
        component: vipRechargeDetail,
    },
    {
        path: '/vip/vipPayList',
        name : 'vipPayList',
        component: vipPayList,
    },
    {
        path: '/vip/vipPayList/vipPayDetail',
        name : 'vipPayDetail',
        component: vipPayDetail,
    },
    {
        path: '/vip/vipActivation',
        name : 'vipActivation',
        component: vipActivation,
    },
    /**
     * 我的
     * */
    {
        path: '/my',
        name : 'my',
        component: my,
    },
    {
        path: '/my/myInfo',
        name : 'myInfo',
        component: myInfo,
    },
    {
        path: '/my/myRedBagList',
        name : 'myRedBagList',
        component: myRedBagList,
    },
    {
        path: '/my/myRedBagList/myHistoryRedBagList',
        name : 'myHistoryRedBagList',
        component: myHistoryRedBagList,
    },
    {
        path: '/my/myQrCode',
        name : 'myQrCode',
        component: myQrCode,
    },
    {
        path: '/my/vipSeckillList',
        name : 'vipSeckillList',
        component: vipSeckillList,
    },
    {
        path: '/my/myOrderList',
        name : 'myOrderList',
        component: myOrderList,
    },
]
