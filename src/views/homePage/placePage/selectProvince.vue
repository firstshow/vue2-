<template>
    <x-content v-scroll-record title="选择省份">
        <!-- 当前城市 start -->
        <x-group title="当前城市">
            <x-cell-item :hasArrow=false>
                <label>
                    <i class="x-location-icon"></i>
                    <span class="ver-align-m">杭州</span>
                </label>
            </x-cell-item>
        </x-group>
        <!-- 当前城市 end -->

        <!-- 热门城市 start -->
        <x-group title="热门城市">
            <x-cell-item title="浙江省" :hasArrow=false @on-click="goSelectCity()"></x-cell-item>
            <x-cell-item title="四川省" :hasArrow=false @on-click="goSelectCity()"></x-cell-item>
            <x-cell-item title="上海" :hasArrow=false @on-click="goSelectCity()"></x-cell-item>
            <x-cell-item title="北京" :hasArrow=false @on-click="goSelectCity()"></x-cell-item>
            <x-cell-item title="深圳" :hasArrow=false @on-click="goSelectCity()"></x-cell-item>
        </x-group>
        <!-- 热门城市 end -->
    </x-content>
</template>

<script>
    export default {
        data () {
            return {
                searchValue : ''
            }
        },
        methods:{
            /**
             * 点击其中一个省份，跳转到对应的城市列表
             * 选择省份
             * */
            goSelectCity(){
                this.$router.push({ name : 'selectCity'});
            }
        }
    }
</script>
