<template>
    <!-- 商家分类组件 start -->
    <div>
        <div class="x-mask-bg" v-show="show" @click="close()"></div>
        <div class=" x-category-pop-box" :class="{'popDown' : show}">
            <div class="x-category-list-box">
                <div class="x-left-box" :style="{width : list == 1 ? '100%' : '35%'}">
                    <slot name="categoryList"></slot>
                </div>
                <div class="x-right-box" v-if="list == 2">
                    <slot name="subCategoryList"></slot>
                </div>
            </div>
        </div>
    </div>
    <!-- 商家分类组件 end -->
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        list:{
            type: Number,
            default: 1,
        }
    },
    methods:{
        close(){
            this.$emit("close-mask");
        }
    }
}
</script>

<style lang="less">
    @import "index.less";
</style>