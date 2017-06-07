<template>
    <div id="app">
        <section class='sec'>
        </section>
        <section class='sec1'>
        </section>
        <img src="./assets/logo.png">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">活动管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/card' }">活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'app'
    };
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 120px;
    }
    .sec{
        width: 600px;
        height: 90px;
        background: #000;
        margin:0 auto;
    }
</style>
