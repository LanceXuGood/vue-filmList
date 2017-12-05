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
    const data = await getZhiHuNewsList({
      apikey: "0b2bdeda43b5688921839c8ecb20399b",
      city: "上海",
      start: 0,
      count: 10
    });
    this.filmData = data;
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  font-size: 34px;
}
</style>
