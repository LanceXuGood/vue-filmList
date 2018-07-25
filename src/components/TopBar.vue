<template>
    <div class="TopBar">
        <i @click="showSlide" class="iconfont icon-nav"></i>
        <p>Lance测试网站</p>
        <i class="iconfont icon-wo"></i>
    </div>
</template>

<script>
import Bus from '../bus';
// 头部导航组件
export default {
  name: 'TopBar',
  props: {},
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

<style  scoped lang="postcss">
@import "../assets/scss/index.css";
@import "../assets/scss/variable.css";
.TopBar {
  padding: 0px 30px;
  height: 80px;
  overflow: hidden;
  background: var(--primary-color);
  line-height: 80px;
  color: #999;
  font-size: 16px;
  display: flex;
  & .iconfont {
    font-size: 16px;
  }
  & p {
    flex: 1;
    color: #fff;
    font-size: 36px;
  }
}
</style>
