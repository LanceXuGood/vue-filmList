<template>
  <div class="dy-content">
    <router-view class="dy-nav-view"></router-view>
    <div class="dy-nav-wrapper">
      <router-link class="dy-nav" to="home">
        <i class="iconfont">&#xe602;</i>
        <br/>
        电影
      </router-link>
      <router-link class="dy-nav" to="search">
        <i class="iconfont">&#xe6d6;</i>
        <br/>
        搜索
      </router-link>
      <router-link class="dy-nav" to="personal">
        <i class="iconfont">&#xe60e;</i>
        <br/>
        个人
      </router-link>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style lang="less" scoped>
@import '../assets/less/variable.less';
.dy-content {
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
}
.dy-nav-view {
  position: relative;
  z-index: 0;
  flex: 1;
  overflow: hidden;
}
.dy-nav-wrapper {
  position: relative;
  z-index: 1;
  height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px -1px 8px rgba(28, 84, 95, 0.24);
  display: flex;
  align-items: center
}
.dy-nav {
  flex: 1;
  text-align: center;
  color: #777;
  font-size: 12px;
  .iconfont{
    font-size: 24px
  }
}
.dy-nav.router-link-active{
  color: @primary-color
}
</style>
