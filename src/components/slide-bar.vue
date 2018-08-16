<template>
  <div class="SlideBar" @click="hideSlide">
    <div class="SlideOver">
      <div class="SlideCon">
        <ul>
          <li>
            <a href="">首页
              <i class="iconfont icon-arrR"></i>
            </a>
          </li>
          <li>
            <a href="">影片
              <i class="iconfont icon-arrR"></i>
            </a>
          </li>
          <li>
            <a href="">商城
              <i class="iconfont icon-arrR"></i>
            </a>
          </li>
          <li>
            <a href="">我
              <i class="iconfont icon-arrR"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 头部导航组件
export default {
  name: '',
  props: {},
  data() {
    return {};
  },
  methods: {
    hideSlide() {
      this.$emit('slideHide');
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped >
@import '../assets/less/variable.less';
.SlideBar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #9a9a9a;
  z-index: 501;
  .SlideOver {
    position: absolute;
    top: 80px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
    .SlideCon {
      border-top: 1px solid #222;
      box-shadow: 0 1px 1px #363636 inset;
      background: #282828;
      position: absolute;
      display: block;
      top: 0;
      right: 220px;
      bottom: 0;
      left: 0;
      li {
        line-height: 80px;
        a {
          display: block;
          width: 100%;
          padding: 10px 28px;
          color: #9a9a9a;
          text-align: left;
          border-bottom: 1px dotted #333;
          font-size: 16px;
          .icon-arrR {
            float: right;
          }
        }
      }
    }
  }
}
</style>
