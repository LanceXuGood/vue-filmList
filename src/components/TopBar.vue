<template>
    <div class="TopBar">
        <i class="iconfont icon-nav"></i>
        <p>在线影片</p>
        <i class="iconfont icon-wo"></i>
    </div>
</template>
<script>
// 头部导航组件
export default {
    name: 'TopBar',
    props: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {}
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/index.scss';
@import '../assets/scss/variable.scss';
 .TopBar{
        position: fixed;
        z-index: 500;
        top: 0;
        right: 0;
        left: 0;
        // width: 100%;
        padding: 0px 30px;
        height: 80px;
        overflow: hidden;
        background: $primary-color;
        line-height: 80px;
        color: #999;
        font-size: 26px;
        // @include font-dpr(18PX);
        .iconfont{
            font-size: 34px;
        }
        .icon-nav{
            float: left;
            margin-right: 40px;
        }
        p{
            float: left;
            color: #fff;
        }
        .icon-wo{
            float: right;;
        }

 }


</style>
