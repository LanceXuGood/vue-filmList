<template>
  <div class="home-page">
    <top-bar></top-bar>
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
      filmData: {}
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
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
</style>
