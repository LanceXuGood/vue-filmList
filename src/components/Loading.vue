<template>
  <div class="loading-warpper" v-if="loading">
    <div class="loading">
      <div class="loader-inner ball-scale-multiple">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>

</template>

<script>
// 头部导航组件
export default {
  name: 'Loading',
  props: {
    loading: {
      default: true
    }
  }
};
</script>

<style lang="scss" scoped >
.loading-warpper {
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.loading {
  position: absolute;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  transform: translate3d(-50%, -50%, 0);
}
.ball-scale-multiple {
  position: relative;
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
}
.ball-scale-multiple > div:nth-child(2) {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.ball-scale-multiple > div:nth-child(3) {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.ball-scale-multiple > div {
  background-color: #4f946e;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  left: -30px;
  top: 0px;
  opacity: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
  animation: ball-scale-multiple 1s 0s linear infinite;
}

@-webkit-keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
