<template>
   <div class="heade">
       <header>
           <i class="iconfont icon-menu" @click='slideShow'></i>
           电影列表
           <i class="iconfont icon-wo"></i>
        </header>
   </div>
</template>
<script>
import Bus from '../bus.js'
// 头部导航组件
export default {
    name: '',
    props: {},
    data() {
        return {};
    },
    methods: {
       slideShow(){
          Bus.$emit('showSlidebar');
       }
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>
    @import '../assets/scss/index.scss';
    @import '../assets/scss/variable.scss';
   .heade{
       position: fixed;
       top:0;
       width: 100%;
       height: 1.2rem;
       line-height: 1.2rem;
       background-color:$primary-color;
       color:#fff;
       font-size: 28px;
       text-align: left;
       padding:0px  20px;
       .iconfont{
           font-size: 28px;
       }
       .icon-menu{
           margin-right: 20px;
       }
       .icon-wo{
           float: right;
       }
   }
</style>
