<template>
  <div class="home-page">
    <dy-loading :loading="loading"></dy-loading>
    <home-list-item></home-list-item>
  </div>
</template>

<script>
import HomeListItem from '../components/home-list-item.vue';
import TopBar from '../components/top-bar.vue';
export default {
  name: '',
  props: {},
  components: {
    HomeListItem,
    TopBar
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {},
  beforeMount() {},
  mounted() {}
};
</script>

<style scoped>
@import '../assets/less/variable.less';
.home-page {
  font-size: 16px;
  position: relative;
}
</style>
