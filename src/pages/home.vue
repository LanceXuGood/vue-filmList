<template>
    <div class="home-page">
        <h1>{{filmData.title}}</h1>
        <div v-for="(item,index) in filmData.subjects" :key="index">
            <p>{{item.title}}</p>
            <img :src="item.images.medium" alt="">
        </div>
    </div>
</template>
<script>
import { getZhiHuNewsList } from "../common/api/home";

export default {
  name: "",
  props: {},
  data() {
    return {
      filmData: {}
    };
  },
  methods: {},
  async mounted() {
    const data = await getZhiHuNewsList();
    this.filmData = data;
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  font-size: 34px;
}
</style>
