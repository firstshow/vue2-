<template>
    <div id="app">
        <!--<transition :name="transitionName">-->
            <!--&lt;!&ndash; 路由匹配到的组件将渲染在这里 &ndash;&gt;-->
            <!--<router-view></router-view>-->
        <!--</transition>-->

        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
        <x-footer></x-footer>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                transitionName : 'rightSlider',
            }
        },
        // 接着在父组件内
        // watch $route 决定使用哪种过渡
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth > fromDepth ? 'rightSlider' : 'leftSlider'
                console.log()
            }
        }
    }
</script>
