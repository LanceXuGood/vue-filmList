<template>
  <div class="home-page">
    <dy-loading :loading="loading"></dy-loading>
    <home-list></home-list>
  </div>
</template>

<script>
import HomeList from '../components/home-list.vue';
export default {
  name: 'Home',
  components: {
    HomeList,
  },
  data() {
    return {
      loading: true
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variable.scss';
.home-page {
  font-size: 16px;
  position: relative;
}
</style>
