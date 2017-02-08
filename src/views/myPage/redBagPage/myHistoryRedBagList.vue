<template>
    <x-content v-scroll-record title="历史红包列表">
        <!-- 历史红包列表 start -->
        <div class="default-padding">
            <x-simple-item
                class="x-history-redbag-item"
                :hasBottomBorder=false
                v-for="n of 10"
                title="小二哥面馆"
                sub-title="5元 已使用"
            ></x-simple-item>
        </div>
        <!-- 历史红包列表 end -->
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

<style lang="less">
    @import "./../../../assets/css/modules/myRedList.less";
</style>
