<template>
    <div id="app">
        <transition name='slide'>
           <Slidebar v-show='show' @hideSlidebar='Hide' ></Slidebar>
        </transition>
        <div class="container-scroll">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Slidebar from './components/Slidebar.vue';
import Bus from './bus.js'
    export default {
        name: 'app',
        components:{
            Slidebar
        },
        data(){
            return{
                show : false
            }
        },
         mounted() {
            Bus.$on('showSlidebar',this.slideValue)
         },
         methods:{
             slideValue(){
                 this.show = !this.show;
             },
             Hide(){
                 this.show = false
             }
         }
    };
</script>
<style lang="scss">
@import './assets/scss/index.scss';
@import './assets/scss/variable.scss';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 12px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .top-bar{
            height: 80px;
            background: $primary-color;
            line-height: 80px;
            color: #ffffff;
            text-align: center;
             @include font-dpr(20px);
        }
        .container-scroll{
            flex: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            margin-top: 100px;
        }
    }
        .slide-enter-active ,.slide-leave-active,.slide-enter-active .slidebar_con ,.slide-leave-active .slidebar_con, {
          transition: all .3s ease;
        }
        .slide-enter,.slide-leave-active{
            opacity: 0;
        }
        .slide-enter .slidebar_con , .slide-leave-active .slidebar_con{
          transform: translateX(-100%);
          opacity: 0;
        }
</style>

