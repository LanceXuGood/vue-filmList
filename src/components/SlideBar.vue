<template>
    <div class="SlideBar">
        <div class="SlideOver">
             <div class="SlideCon">

             </div>
        </div>
    </div>
</template>
<script>
// 头部导航组件
export default {
    name: '',
    props: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {}
};
</script>
<style lang="scss" scoped>
     .SlideBar{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: #9a9a9a;
        z-index: 501;
        .SlideOver{
            position: absolute;
            top: 80px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background: rgba(0,0,0,0.5);

            .SlideCon{
                border-top: 1px solid #222;
                box-shadow: 0 1px 1px #363636 inset;
                background: #282828;
                position: absolute;
                display: block;
                top: 0;
                right: 180px;
                bottom: 0;
                left: 0;
            }

        }
     }
</style>
