<template>
    <div>
        <x-content class="x-scan-code-bg" title="扫码页面">
            <div class="x-scan-code-scroll" @touchstart="popDownStart" @touchmove="popDownMove" @touchend="popDownEnd" @touchcancel="popDownEnd" :style="contentPosition">
                <div id="scrollBox">
                    <!-- 快速买单 -->
                    <div class="x-scan-code-item" flex="main:justify cross:center" v-tap="{methods : goPay}">
                        <div>
                            <img class="x-img" src="./../../../assets/images/home/icon/scan_code_icon5.png" alt="快速买单">
                            <p class="small-font margin-top-5">8.7折</p>
                        </div>
                        <i class="x-scan-code-bag-icon"></i>
                    </div>

                    <!-- 成为会员 -->
                    <div class="x-scan-code-item" flex="main:justify cross:center" v-tap="{methods : goVipActivation}">
                        <!-- 老板尚未开通会员服务 -->
                        <!--<img class="x-img margin-top-10 margin-bottom-10" src="./../../../assets/images/home/icon/scan_code_icon6.png" alt="老板尚未开通会员服务">-->

                        <!-- 开通后，可以成为会员 -->
                        <div>
                            <img class="x-img" src="./../../../assets/images/home/icon/scan_code_icon4.png" alt="成为会员">
                            <p class="small-font margin-top-5">成功后即送5元余额</p>
                        </div>
                        <i class="x-scan-code-king-icon"></i>
                    </div>

                    <!-- 会员优惠 start -->
                    <div class="x-scan-code-vip-box">
                        <img class="x-img" src="./../../../assets/images/home/icon/scan_code_icon3.png" alt="快速买单">
                    </div>

                    <!-- 会员优惠项 -->
                    <x-flex-box class="color-white bg-transparent" wrap="wrap" v-if="true">
                        <x-flex-item class="margin-top-30" flex="main:center cross:center" :span="1/2">
                            <i class="x-scan-code-activation-icon"></i>
                            <span class="margin-left-10">激活有送~</span>
                        </x-flex-item>
                        <x-flex-item class="margin-top-30" flex="main:center cross:center" :span="1/2">
                            <i class="x-scan-code-pay-icon"></i>
                            <span class="margin-left-10">消费有送~</span>
                        </x-flex-item>
                        <x-flex-item class="margin-top-30" flex="main:center cross:center" :span="1/2">
                            <i class="x-scan-code-recharge-icon"></i>
                            <span class="margin-left-10">充值有送~</span>
                        </x-flex-item>
                        <x-flex-item class="margin-top-30" flex="main:center cross:center" :span="1/2">
                            <i class="x-scan-code-recommend-icon"></i>
                            <span class="margin-left-10">推荐有送~</span>
                        </x-flex-item>
                    </x-flex-box>

                    <!-- 商家没有设置优惠 -->
                    <div class="x-scan-code-nodiscount" flex="dir:top main:left" v-else>
                        <i class="x-pain-monkey-icon"></i>
                        <p class="color-white x-des-word">
                            商家忘记设置会员优惠啦~<br>
                            询问一下商家是否有对会员的优惠吧？
                        </p>

                    </div>
                    <!-- 会员优惠 start -->

                    <!-- 上拉见商家详情 -->
                    <div class=" margin-top-20 padding-bottom-10 color-white jump-top-to-bottom" flex="dir:top main:center cross:center">
                        <span>上拉见商家详情</span>
                        <i class="x-down-db-arrow"></i>
                    </div>
                </div>
            </div>
        </x-content>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                touchInfo: {
                    startY: 0, // 触摸开始Y值
                    moveY: 0, // 触摸移动距离
                }
            }
        },
        methods:{
            /**
             * 点击快速买单，跳转到买单页面
             * */
            goPay(){
                this.$router.push({ name : 'pay'});
            },
            /**
             * 点击成为会员，跳转到激活会员页面
             * */
            goVipActivation(){
                this.$router.push({ name : 'vipActivation' });
            },
            /**
             * 跳转到门店详情
             * @param  storeId  门店id
             * */
            goStoreDetail(){
                this.$router.push({ name : 'storeDetail' , params: { storeId: 123 }});
            },

            /**
             * 开始触摸屏幕
             * 记录开始的Y值
             * */
            popDownStart(even){
                let _ = this;
                _.touchInfo.startY = even.touches[0].pageY;
                return false;
            },
            /**
             * 触摸并移动
             * 计算移动的距离
             * */
            popDownMove(even){
                let _ = this,
                    el = even.currentTarget,
                    moveY = even.touches[0].pageY - _.touchInfo.startY,
                    boxHeight = el.offsetHeight,
                    scrollTop = el.scrollTop,
                    scrollBoxHeight = $(el).find("#scrollBox").height();

                // 当滑到底部时候，进行拖动
                if (scrollTop + boxHeight + 2 >= scrollBoxHeight && moveY < 0) {
                    even.preventDefault();
                    _.touchInfo.moveY = moveY / 2;
                    if (_.touchInfo.moveY < -200) {
                        _.goStoreDetail();
                    }
                }
                return false;
            },
            /**
             * 结束触摸
             * 当移动的距离大于200，则跳转到门店详情页面
             * 不然则恢复初始状态
             * */
            popDownEnd(){
                let _ = this;
                if (_.touchInfo.moveY > -200) {
                    _.touchInfo.moveY = 0;
                }
                return false;
            },
        },
        computed: {
            /**
             * 计算偏移量
             * 改变css 实现上拉跳转
             * */
            contentPosition(){
                let _ = this ,
                    opacityVal = 1 - (-1*_.touchInfo.moveY/200); // 透明度
                _.touchInfo.moveY = _.touchInfo.moveY ? _.touchInfo.moveY : 0;
                return {
                    opacity: opacityVal,
                    transform: 'translate3d(0,' + _.touchInfo.moveY + 'px,0)',
                    webkitTransform: 'translate3d(0,' + _.touchInfo.moveY + 'px,0)',
                    mozTransform: 'translate3d(0,' + _.touchInfo.moveY + 'px,0)',
                }
            }
        },
    }
</script>
<style lang="less" scoped>
    @import "./../../../assets/css/modules/scanCode.less";

</style>
