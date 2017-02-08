<template>
    <x-content class="bg-skin" title="我的二维码" v-scroll-record>
        <div class="x-qrcode-box">
            <div class="x-qrcode-content">
                <!-- 提示文字 start -->
                <div class="x-dex-word">
                    <p>二维码出示给商家或者将核销码告知商家</p>
                    <p class="margin-top-10">您的所以订单，都可以通过该二维码核销</p>
                </div>
                <!-- 提示文字 end -->

                <!-- 二维码 start -->
                <div class="x-qrcode">
                    <img src="./../../assets/images/demo/demo_qrcode.jpg" alt="二维码">
                    <p class="margin-top-30">有效期2分钟</p>
                </div>
                <!-- 二维码 end -->
            </div>
            <p class="margin-top-30 text-center color-white">用户核销码：21421435435243124313</p>
        </div>
    </x-content>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/css/modules/my.less";
</style>
