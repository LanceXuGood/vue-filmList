<template>
  <div class="top-bar">
    <i @click="showSlide" class="iconfont">&#xe60b;</i>
    <p>电影咨询网</p>
    <i class="iconfont">&#xe611;</i>
  </div>
</template>

<script>
import Bus from '../bus';
// 头部导航组件
export default {
  name: 'TopBar',
  data() {
    return {};
  },
  methods: {
    showSlide() {
      Bus.$emit('slideShow');
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped >
@import '../assets/less/index.less';
@import '../assets/less/variable.less';
.top-bar {
  padding: 0 10px;
  height: 40px;
  overflow: hidden;
  background: @primary-color;
  line-height: 40px;
  color: #999;
  font-size: 16px;
  display: flex;
  .iconfont {
    font-size: 16px;
    color: #fff;
  }
  p {
    flex: 1;
    color: #fff;
    font-size: 16px;
  }
}
</style>
