<template>
    <div>
        <div class="x-store-choose-box" flex="main:left cross:center">
            <div class="x-item border-right" flex="main:center cross:center" :class="{'active' : categoryType == 0}" v-tap.stop="{methods : openCategoryList , id : 0 }">
                <span class="x-title">全部分类</span>
                <i class="x-icon x-arrow"></i>
            </div>
            <div class="x-item border-right" flex="main:center cross:center" :class="{'active' : categoryType == 1}" v-tap.stop="{methods : openCategoryList , id : 1 }">
                <span class="x-title">全城</span>
                <i class="x-icon x-arrow"></i>
            </div>
            <div class="x-item" flex="main:center cross:center" :class="{'active' : categoryType == 2}" v-tap.stop="{methods : openCategoryList , id : 2 }">
                <span class="x-title">智能排序</span>
                <i class="x-icon x-arrow"></i>
            </div>
        </div>

        <!-- 商家类型分类 start -->
        <x-choose-category
                :show.sync="typeCategoryShow"
                :id.sync="categoryType"
                :list=2
                @close-mask="closeMask"
        >
            <ul class="x-area-list" slot="categoryList">
                <li v-for="n in 30">全部</li>
            </ul>

            <ul class="x-area-list" slot="subCategoryList">
                <li v-for="n in 30">全部</li>
            </ul>
        </x-choose-category>
        <!-- 商家类型分类 end -->

        <!-- 商家城市分类 start -->
        <x-choose-category
                :show.sync="cityCategoryShow"
                :id.sync="categoryType"
                :list=2
                @close-mask="closeMask"
        >
            <ul class="x-area-list" slot="categoryList">
                <li v-for="n in 30">全部</li>
            </ul>

            <ul class="x-area-list" slot="subCategoryList">
                <li v-for="n in 30">全部</li>
            </ul>
        </x-choose-category>
        <!-- 商家类型分类 end -->

        <!-- 商家智能分类 start -->
        <x-choose-category
                :show.sync="znCategoryShow"
                :id.sync="categoryType"
                @close-mask="closeMask"
        >
            <ul class="x-area-list" slot="categoryList">
                <li v-for="n in 30">全部</li>
            </ul>
        </x-choose-category>
        <!-- 商家智能分类 end -->

        <x-content v-scroll-record title="门店列表" style="top: 3.6rem;">
            <!-- 门店列表 start -->
            <div class="x-store-box">
                <x-store-item
                        v-for="n in 5"
                        title="大二哥"
                        money="100"
                        :has-random-cut=true
                        :has-redbag=true
                ></x-store-item>
            </div>
            <!-- 门店列表 end -->
        </x-content>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                typeCategoryShow : false, // 商家分类
                cityCategoryShow : false, // 城市分类
                znCategoryShow : false, // 智能分类
                categoryType : -1, // 筛选类型，0：商家类型筛选 ； 1： 区域筛选 ; -1 : 关闭筛选
            }
        },
        methods:{
            /**
             * 打开筛选弹出列表
             * 再点击当前已选的，则关闭筛选列表
             * @param id 选择的类型 0：全城分类 ； 1： 全城 ； 2 : 智能排序 ；-1 ：无
             * */
            openCategoryList(params){
                if(params.id == this.categoryType){
                    this.categoryType = -1;
                    this.typeCategoryShow = false;
                    this.cityCategoryShow = false;
                    this.znCategoryShow = false;
                }else{
                    switch (params.id){
                        case 0 :
                            this.categoryType = 0;
                            this.typeCategoryShow = true;
                            this.cityCategoryShow = false;
                            this.znCategoryShow = false;
                            break;
                        case 1 :
                            this.categoryType = 1;
                            this.typeCategoryShow = false;
                            this.cityCategoryShow = true;
                            this.znCategoryShow = false;
                            break;
                        case 2 :
                            this.categoryType = 2;
                            this.typeCategoryShow = false;
                            this.cityCategoryShow = false;
                            this.znCategoryShow = true;
                            break;
                    }
                }
            },
            closeMask(){
                this.typeCategoryShow = false;
                this.cityCategoryShow = false;
                this.znCategoryShow = false;
                this.categoryType = -1;
            },
        },
    }
</script>
<style lang="less" scoped>
    @import "./../../../assets/css/modules/storeList.less";
</style>
