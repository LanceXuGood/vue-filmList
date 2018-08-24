<template>
  <div class="search-page">
      <search-bar/>
  </div>
</template>

<script>
import SearchBar from '@/components/search-bar.vue'
export default {
  name: 'Search',
  props: {},
  components: {
    SearchBar,
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
.search-page{
  //  @include flex-center;
}
</style>
