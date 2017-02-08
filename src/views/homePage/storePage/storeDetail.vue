<template>
    <div>
        <x-content v-scroll-record title="门店详情" style="padding-bottom:50px;">
            <!-- 头部轮播组件 start -->
            <div class="x-store-head-box">
                <!-- 轮播图 start -->
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="n in 5">
                        <img src="./../../../assets/images/demo/demo-goods.png" alt="轮播图" width="100%" style="height: 12rem;">
                    </swiper-slide>
                </swiper>

                <!-- 轮播图 end -->

                <!-- 关注按钮 -->
                <div class="x-store-follow-btn" flex="main:center cross:center" v-tap="{ methods : storeFollow }">
                    <i class="x-follow-icon" :class="{'active' : isFollow}"></i>
                    <span class="margin-left-5">已关注</span>
                </div>

                <!-- 相册数量 -->
                <div class="x-store-photo" flex="cross:center">
                    <i class="x-photo-icon"></i>
                    <span>相册(5)张</span>
                </div>
            </div>
            <!-- 头部轮播组件 end -->

            <!-- 是否是会员日 start -->
            <div class="x-store-vip-banner" flex="cross:center">
                <span>周四会员日补贴充50送10元</span>
                <i class="x-question-icon">?</i>
            </div>
            <!-- 是否是会员日 end -->

            <!-- 非会员显示页面 start -->
            <div v-if="false">
                <!-- 门店信息 start -->
                <div class="x-store-info-box">
                    <div class="border-bottom padding-bottom-10" flex="dir:top main:center cross:center">
                        <h3 class="x-title">小二哥面馆</h3>
                        <!-- 星级评分 -->
                        <x-star-box class="margin-top-5 margin-bottom-5" :num=3.6></x-star-box>
                        <p class="x-class">面食/杂食</p>
                    </div>

                    <!-- 地址与电话 start -->
                    <div class="default-padding" flex="main:justify cross:center box:last">
                        <div class="x-address" flex="main:justify cross:center box:last">
                            <div class="x-location" flex="cross:center">
                                <i class="x-store-location-icon margin-right-5"></i>
                                <span class="color-gray small-font">中兴路234号中兴路234号中兴路234号中兴路234号中兴路234号</span>
                            </div>
                            <span class="color-gray small-font margin-right-5">167km</span>
                        </div>
                        <div class="x-phone" flex="cross:center">
                            <i class="x-phone-icon"></i>
                        </div>
                    </div>
                    <!-- 地址与电话 end -->
                </div>
                <!-- 门店信息 end -->

                <!-- 门店活动信息 start -->
                <div class="x-store-activity-box">
                    <!-- 消费减 -->
                    <x-cell-item :hasArrow=false>
                        <div flex="main:left cross:top">
                            <div class="margin-right-20">
                                <i class="x-discount-icon x-random-cut-icon ver-align-m"></i>
                            </div>
                            <div>
                                <p>消费满10元享受随机减</p>
                                <p class="color-gray margin-top-5 small-font">已享234</p>
                            </div>
                        </div>
                    </x-cell-item>

                    <!-- 红包 -->
                    <x-cell-item :hasArrow=false :hasBottomBorder=false>
                        <div flex="main:left cross:top">
                            <div class="margin-right-20">
                                <i class="x-discount-icon x-redbag-icon ver-align-m"></i>
                            </div>
                            <div>
                                <p>1元</p>
                                <p class="color-gray margin-top-5 small-font">1.0元红包，满15元可用</p>
                            </div>
                        </div>
                    </x-cell-item>
                </div>
                <!-- 门店活动信息 end -->

                <!-- 门店评价信息 start -->
                <div class="x-store-evaluate-box">
                    <x-cell-item title="商家评价(9)"></x-cell-item>

                    <!-- 评价内容 start -->
                    <x-store-evaluate-item></x-store-evaluate-item>
                    <!-- 评价内容 end -->

                    <x-cell-item :hasArrow=false :hasBottomBorder=false>
                        <div style="width: 100%;text-align: center">
                            <span>查看全部评论</span>
                        </div>
                    </x-cell-item>
                </div>
                <!-- 门店评价信息 end -->

                <!-- 猜你喜欢 start -->
                <div class="x-store-guess-box">
                    <x-cell-item title="猜你喜欢" :hasArrow=false :hasActive=false></x-cell-item>
                    <x-store-item
                        v-for="n in 2"
                        title="大二哥"
                        :key="n"
                        money="100"
                        :has-random-cut=true
                        :has-redbag=true
                    ></x-store-item>
                </div>
                <!-- 猜你喜欢 end -->
            </div>
            <!-- 非会员显示页面 end -->


            <!-- 会员显示页面 start -->
            <div v-else>
                <!-- 会员充值提示信息 start -->
                <div class="x-store-slider-banner">
                    <div class="x-text slider-right-to-left">
                        <span>充100送200，充100送200，充100送200</span>
                    </div>
                </div>
                <!-- 会员充值提示信息 end -->

                <!-- 门店信息 start -->
                <div class="x-store-vip-info-box">
                    <x-simple-item
                        class="x-store-vip-info"
                        :hasBottomBorder=false
                        title="小二哥面馆"
                        sub-title="5元 已使用"
                    >
                        <div class="x-bottom-text">641米门店可用</div>
                    </x-simple-item>
                </div>

                <div class="x-store-vip-info-box no-padding-top">
                    <div class="x-store-recommend-info" flex="dir:top main:center">
                        <div flex="main:justify cross:center">
                            <div>
                                <i class="x-give-icon"></i>
                                <span class="ver-align-m">推荐朋友</span>
                            </div>
                            <strong class="color-skin">送5元</strong>
                        </div>
                        <div class="margin-top-10">
                            <span>首次充值</span>
                        </div>
                    </div>
                </div>
                <!-- 门店信息 end -->

                <!-- 会员服务 start -->
                <div class="x-store-vip-server-box">
                    <h3>会员服务</h3>
                    <!-- 我的中栏目分类 start -->
                    <x-flex-box wrap="wrap">
                        <x-flex-item class="margin-bottom-20" :span="1/3">
                            <i class="x-store-vip-icon store-Recharge-icon"></i>
                            <p class="margin-top-10">充值</p>
                        </x-flex-item>
                        <x-flex-item class="margin-bottom-20" :span="1/3">
                            <i class="x-store-vip-icon store-useStore-icon"></i>
                            <p class="margin-top-10">使用门店</p>
                        </x-flex-item>
                        <x-flex-item class="margin-bottom-20" :span="1/3">
                            <i class="x-store-vip-icon store-member-icon"></i>
                            <p class="margin-top-10">会员专享</p>
                        </x-flex-item>
                        <x-flex-item :span="1/3">
                            <i class="x-store-vip-icon store-instruct-icon"></i>
                            <p class="margin-top-10">使用说明</p>
                        </x-flex-item>
                        <x-flex-item :span="1/3">
                            <i class="x-store-vip-icon store-telephonlogo-icon"></i>
                            <p class="margin-top-10">联系商家</p>
                        </x-flex-item>
                    </x-flex-box>
                    <!-- 我的中栏目分类 end -->
                </div>
                <!-- 会员服务 end -->
            </div>
            <!-- 会员显示页面 end -->
        </x-content>

        <!-- 底部买单按钮 与 激活会员 start -->
        <div class="x-store-btn-box" flex="main:justify cross:center box:last">
            <div class="default-padding" flex="main:justify cross:center" v-if="$route.query.type === 1">
                <span class="x-text small-font slider-right-to-left">激活我的会员卡，激活即送5元,激活即送5元,激活即送5元</span>
                <i class="x-circle-arrow-icon"></i>
            </div>
            <x-button class="x-btn" title="买单" radius='0px' v-tap="{ methods : goPay }" :style="{width : $route.query.type === 1 ? '25%' : '100%'}"></x-button>
        </div>
        <!-- 底部买单按钮 与 激活会员 end -->
    </div>
</template>

<script>
    import swiper from './../../../mixins/swiper' // 引入混合的swiper
    export default {
        mixins: [swiper],
        data () {
            return {
                isFollow : true
            }
        },
        methods:{
            /**
             * 点击右上家关注按钮进行门店的取关操作
             * */
            storeFollow(){
                this.isFollow = !this.isFollow;
            },
            /**
            * 点击跳转到门店买单页面
            * */
            goPay(){
                this.$router.push({ name : 'pay'});
            }
        },
    }
</script>
<style lang="less" scoped>
    @import "./../../../assets/css/modules/storeDetail.less";
</style>
