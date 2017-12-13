<template>
    <div class="slidebar" @click="slidebarHide">
        <div class="slidebar_over">
            <div class="slidebar_con">
                <ul>
                    <li><a href="">首页<i class="iconfont icon-left"></i></a></li>
                    <li><a href="">影片<i class="iconfont icon-left"></i></a></li>
                    <li><a href="">影院<i class="iconfont icon-left"></i></a></li>
                    <li><a href="">商城<i class="iconfont icon-left"></i></a></li>
                    <li><a href="">我的<i class="iconfont icon-left"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
// 头部导航组件
export default {
    name: 'Slidebar',
    props: {},
    data() {
        return {};
    },
    methods: {
       slidebarHide(){
           this.$emit('hideSlidebar')
       }
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/variable.scss';
 .slidebar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #9a9a9a;
    z-index: 501;
    .slidebar_over{
        background: rgba(0,0,0,0.5);
        position: absolute;
        top: 1.2rem;
        right: 0;
        bottom: 0;
        left: 0;
        .slidebar_con{
            background: $primary-color;
            position: absolute;
            display: block;
            top: 0;
            right: 200px;
            bottom: 0;
            left: 0;
             box-shadow: 0 1px 1px #363636 inset;
         ul li{
             line-height: 80px;
             a{
                display: block;
                width: 100%;
                padding: 10px 28px;
                border-bottom: 1px dotted #333;
                color:#9a9a9a;
                font-size: 28px;
                text-align: left;
                .icon-left{
                    float: right;
                }
             }
         }
        }
    }

 }

</style>
