<template>
  <div class="test-page">
    <Button>
      <div slot="buttons">
        <button>3</button>
        <button>4</button>
      </div>
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
.test-page{
  //  @include flex-center;
}
</style>
