<template>
    <div>
        <x-content v-scroll-record title="首页" style="bottom:50px">
            <!-- 搜索 start -->
            <div class="x-home-search-box" flex="main:left cross:top box:first">
                <router-link class="x-address" :to="{ name : 'selectProvince' }">
                    <span>杭州</span>
                </router-link>
                <div class="x-search-input">
                    <input type="text" placeholder="输入商家和品类" />
                </div>
            </div>
            <!-- 搜索 end -->

            <!-- 商品分类 start -->
            <x-flex-box class="x-home-category-box">
                <x-flex-item :span="1/4" @on-click="goStoreList('美食')">
                    <i class="x-category-icon food-icon"></i>
                    <p class="margin-top-10">美食</p>
                </x-flex-item>
                <x-flex-item :span="1/4"  @on-click="goStoreList('中餐')">
                    <i class="x-category-icon chinese-food-icon"></i>
                    <p class="margin-top-10">中餐</p>
                </x-flex-item>
                <x-flex-item :span="1/4"  @on-click="goStoreList('休闲食品')">
                    <i class="x-category-icon fun-food-icon"></i>
                    <p class="margin-top-10">休闲食品</p>
                </x-flex-item>
                <x-flex-item :span="1/4"  @on-click="goStoreList('快餐')">
                    <i class="x-category-icon fast-food-icon"></i>
                    <p class="margin-top-10">快餐</p>
                </x-flex-item>
            </x-flex-box>
            <!-- 商品分类 end -->

            <!-- 红包轮播 start -->
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- 幻灯内容 -->
                <swiper-slide v-for="n in 5">
                    <div class="x-home-redbag-box">
                        <div class="x-home-redbag" flex="main:left cross:center">
                            <img src="./../../assets/images/demo/demo_logo.png" alt="" height="60%">
                            <div class="x-title">
                                <h3>大世面面馆{{n}}</h3>
                                <p class="margin-top-5">给你发了一个红包</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <!-- 红包轮播 end -->

            <!-- 选项卡 start -->
            <x-flex-box class="x-home-tab-box margin-top-10">
                <x-flex-item :span="1/2">
                    <div class="x-vip-tab color-skin">会员门店</div>
                </x-flex-item>
                <x-flex-item :span="1/2">
                    <div class="x-around-tab">发现周边</div>
                </x-flex-item>
            </x-flex-box>
            <!-- 选项卡 end -->

            <!-- 会员门店列表 start -->
            <div class="x-home-store-box">
                <x-store-item
                    v-for="n in 5"
                    title="大二哥"
                    :key="n"
                    money="100"
                    :has-random-cut=true
                    :has-redbag=true
                    @on-click="goStoreDetail"
                ></x-store-item>
            </div>
            <!-- 会员门店列表 end -->
        </x-content>
        <x-footer></x-footer>
    </div>
</template>

<script>
    import swiper from './../../mixins/swiper' // 引入混合的swiper
    import { mapGetters , mapActions } from 'vuex'
    export default {
        mixins: [swiper],
        data () {
            return {

            }
        },
        computed : {
            ...mapGetters([
                'userInfo'
            ]),
        },
        methods : {
            ...mapActions([
                'uploadUserInfo'
            ]),
            /**
             * 点击商家分类，
             * 跳转到对应分类的商家列表
             * @param  name 商家分类名称
             * */
            goStoreList(name){
                this.$router.push({ name : 'storeList' , query : {categoryName : name}});
            },
            /**
             * 点击单个门店，跳转到该门店的详情
             * @param  id  门店id
             * */
            goStoreDetail(id){
                this.$router.push({ name : 'storeDetail' , params: { storeId: 123 } });
            },
            getUser(){
                this.uploadUserInfo({
                    // 需要传的参数
                    username : ''
                }).then(function(){
                    alert("通过接口拿到数据OK");
                })
            }
        },
        /**
         * 自定义指令
         * 页面加载后，自动获得焦点
         * */
        directives:{
            focus:{
                // 当绑定元素插入到 DOM 中。
                inserted: function (el) {
                    // 聚焦元素
                    el.focus()
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/css/modules/home.less";
</style>
