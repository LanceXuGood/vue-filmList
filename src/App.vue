<template>
    <div id="app">
        <transition name='slide'>
            <SlideBar v-show="show" @slideHide="Hide"></SlideBar>
        </transition>

        <div class="container-scroll">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import SlideBar from './components/SlideBar.vue';
import Bus from './bus';
    export default {
        name: 'app',
        data(){
            return {
                show:false
            }
        },
        components:{
            SlideBar
        },
       mounted() {
          Bus.$on('slideShow',this.slideValue);
       },
        methods:{
            slideValue(){
                 this.show = !this.shoe;
            },
            Hide(){
                this.show = false;
            }
        },


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

        .container-scroll{
            flex: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
    }

     .slide-enter-active ,.slide-leave-active,.slide-enter-active .slidebar_con ,.slide-leave-active .slidebar_con, {
          transition: all .5s ease;
        }
      .slide-enter,.slide-leave{
         opacity: 0;
      }
      .slide-enter .slidebar_con , .slide-leave-active .slidebar_con{
          transform: translateX(-100%);
          opacity: 0;
        }
</style>

