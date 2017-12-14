<template>
    <div id="app">
        <SlideBar><SlideBar>
        <div class="container-scroll">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import SlideBar from './components/SlideBar.vue';
    export default {
        name: 'app',
        components:{
            SlideBar
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

        .container-scroll{
            flex: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
    }
</style>

