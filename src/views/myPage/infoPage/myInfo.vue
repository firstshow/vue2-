<template>
    <x-content v-scroll-record title="我的信息">
        <x-cell-item title="头像" :hasArrow=false>
            <img src="./../../../assets/images/demo/demo_logo.png" alt="头像" width="60px">
        </x-cell-item>
        <x-cell-item title="昵称" sub-title="玲珑" :hasArrow=false></x-cell-item>
        <x-cell-item title="登录账号" sub-title="123456" :hasArrow=false></x-cell-item>
        <x-cell-item title="修改密码"></x-cell-item>
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

