<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    document.querySelector('.init-loading-warpper').style.display = 'none';
  }
};
</script>
<style lang="scss">
@import './assets/scss/index.scss'
</style>

