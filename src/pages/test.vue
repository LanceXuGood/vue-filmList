<template>
  <div class="test-page">
    <div>这里是使用自己的button组</div>
    <Button>
      <div slot="buttons">
        <button>3</button>
        <button>4</button>
      </div>
    </Button>
    <hr/>
    <div>这是使用默认的按钮组</div>
    <Button>

    </Button>
    我是徐😀
  </div>
</template>

<script>
import Button from '../components/button';
export default {
  name: 'Test',
  props: {},
  components: {
    Button
  },

  data() {
    return {
      filmData: {}
    };
  },
  methods: {

  },
  beforeMount() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variable.scss';
</style>
