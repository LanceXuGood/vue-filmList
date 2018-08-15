<template>
    <div id="app">
        <transition name='slide'>
            <SlideBar v-show="show" @slideHide="Hide"></SlideBar>
        </transition>
        <div class="container-scroll">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SlideBar from './components/SlideBar.vue';
import Bus from './bus';
export default {
  name: 'app',
  components: {
    SlideBar
  },
  data() {
    return {
      show: false
    };
  },
  computed: mapGetters({
    getTestState: 'getTestState'
  }),
  methods: {
    ...mapActions(['setTestState']),
    slideValue() {
      this.show = !this.shoe;
    },
    Hide() {
      this.show = false;
    }
  },
  mounted() {
    this.setTestState({
      msg: '2'
    })
    Bus.$on('slideShow', this.slideValue);
  }
};
</script>

<style lang="postcss">
@import url("./assets/scss/normalize.css");
@import url("./assets/scss/index.css");
@import url("./assets/scss/variable.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
  & .container-scroll {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>

