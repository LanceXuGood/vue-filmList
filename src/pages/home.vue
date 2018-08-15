<template>
    <div class="home-page">
        <TopBar></TopBar>
        <HomeListItem></HomeListItem>
    </div>
</template>

<script>
import HomeListItem from '../components/HomeListItem.vue';
import TopBar from '../components/TopBar.vue';
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

<style scoped lang="postcss">
@import "../assets/scss/variable.css";
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
