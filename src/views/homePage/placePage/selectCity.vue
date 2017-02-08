<template>
    <x-content v-scroll-record title="选择城市">
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
            <x-cell-item title="上海" :hasArrow=false @on-click="goStoreList()"></x-cell-item>
            <x-cell-item title="杭州" :hasArrow=false @on-click="goStoreList()"></x-cell-item>
            <x-cell-item title="广州" :hasArrow=false @on-click="goStoreList()"></x-cell-item>
            <x-cell-item title="北京" :hasArrow=false @on-click="goStoreList()"></x-cell-item>
            <x-cell-item title="深圳" :hasArrow=false @on-click="goStoreList()"></x-cell-item>
        </x-group>
        <!-- 热门城市 end -->
    </x-content>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            /**
             * 点击其中一个城市，按该搜索条件，搜索对应的门店
             * 选择城市
             * */
            goStoreList(){
                this.$router.push({ name : 'storeList'});
            }
        }
    }
</script>
