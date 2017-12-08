<template>
    <div id="app">
        <header class="top-bar">电影网</header>
        <div class="container-scroll">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app'
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
        }
    }
</style>

