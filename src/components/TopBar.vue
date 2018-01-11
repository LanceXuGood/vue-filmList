<template>
    <div class="TopBar">
        <i @click="showSlide" class="iconfont icon-nav"></i>
        <p>精虫网</p>
        <i class="iconfont icon-wo"></i>
    </div>
</template>

<script>
    import Bus from '../bus';
    // 头部导航组件
    export default {
        name: 'TopBar',
        props: {},
        data() {
            return {};
        },
        methods: {
            showSlide() {
                Bus.$emit('slideShow');
            }
        },
        mounted() {}
    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/index.scss';
    @import '../assets/scss/variable.scss';
    .TopBar {
        // position: fixed;
        // z-index: 500;
        // top: 0;
        // right: 0;
        // left: 0;
        // width: 100%;
        padding: 0px 30px;
        height: 80px;
        overflow: hidden;
        background: $primary-color;
        line-height: 80px;
        color: #999;
        @include font-dpr(16PX);
        display: flex;
        .iconfont {
            @include font-dpr(16PX);
        }
        p {
            flex: 1;
            color: #fff;
        }
    }
</style>
