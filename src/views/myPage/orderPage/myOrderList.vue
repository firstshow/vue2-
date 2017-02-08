<template>
    <x-content v-scroll-record title="订单列表">
        <!-- 我的买单列表 start -->
        <x-group title="本月">
            <x-simple-item
                class="no-margin-bottom"
                v-for="n of 10"
                title="-22.00"
                sub-title="淘气包（古墩店）"
            >
                <div class="x-my-order-item" slot="beforeContent">
                    <h3>今天</h3>
                    <p>12:00</p>
                </div>
            </x-simple-item>
        </x-group>
        <!-- 我的买单列表 end -->
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
    @import "./../../../assets/css/modules/myOrderList.less";
</style>
