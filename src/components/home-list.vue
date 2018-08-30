<template>
  <ul class="home-list" ref="list">
    <li v-for="(item,index) in home.subjects" :key="index" class="film-item">
      <router-link :to="`/film-detail/${item.id}`">
        <div class="left">
          <img v-lazy="item.images.small" alt="" class="image">
        </div>
        <div class="content">
          <div class="title">
            <span class="title-info">{{item.title | titleformat}}({{item.year}})</span>
          </div>
          <div class="tags">
            <span v-for="(tag,index) in item.genres" :key="index" class="tag">{{tag}}</span>
          </div>
          <div class="durations">
            上映：{{item.mainland_pubdate}}
            <span v-for="(duration,index) in item.durations" :key="index" class="duration"> {{duration}}{{index===item.durations.length-1?'':'/'}}</span>
          </div>
          <div class="directors ">
            编剧：
            <span v-for="(director,index) in item.directors" :key="index">{{director.name}}{{index===item.directors.length-1?'':'/'}}</span>
          </div>
          <div class="casts">
            演员：
            <span v-for="(cast,index) in item.casts" :key="index">{{cast.name}}{{index===item.casts.length-1?'':'/'}}</span>
          </div>
          <div class="rating">
            评分：
            <p>
              <span v-if="item.rating.average>0" v-for="index in 5" :key="index">
                <i class="iconfont" :class="{none: index*2>item.rating.average}">&#xe630;</i>
              </span>
              <b>{{item.rating.average>0?item.rating.average:"暂无评分"}}</b>
            </p>
          </div>
        </div>
      </router-link>
    </li>
    <li>
      就这么多了，你看着办吧！
    </li>
  </ul>
</template>

<script>
import { getDouBanFilmList } from '@/common/api/home';
export default {
  name: "HomeList",
  created() {
    this.getList({
      apikey: "0b2bdeda43b5688921839c8ecb20399b",
      city: "上海",
      start: 0,
      count: 100
    });
  },
  data() {
    return {
      ScrollReveal: this.scrollReveal(),
      home: [],
    };
  },
  methods: {
    async getList(query) {
      this.home = await getDouBanFilmList(query);
      this.$nextTick(()=>{
        this.ScrollReveal.reveal('.home-list .film-item', {
          container: '.home-list',
          duration: 500,
          // 在移动端是否使用动画
          mobile: true,
          // 其他可用的动画效果
          easing: 'linear',
          scale: 0.9,
          reset: true,
        });
        this.$parent.loading = false;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variable.scss';

.home-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.film-item {
  box-shadow: 0 0 4px 0 rgba(232, 237, 250, 0.6),
    0 1px 2px 0 rgba(232, 237, 250, 0.5);
  padding: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
  overflow: hidden;
  height: 180px;

  p,
  div {
    color: #666;
  }
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.film-item:first-of-type{
  margin-top: 0;
}
ul>li:last-of-type{
  line-height: 20px;
  font-size: 12px;
  color: darkgrey
}

.left {
  width: 30%;
  margin-right: 10px;
  .image {
    width: 100%;
  }
}
.content {
  width: 70%;
  > div {
    text-align: left;
    margin-bottom: 4px;
    font-size: 14px;
  }
}
.rating {
  height: 20px;
  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    span {
      display: inline-block;
      color: rgb(247, 186, 42);
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 14px;
      }
    }
    b {
      display: block;
      margin-left: 10px;
      color: #ffb400;
      font-size: 14px;
      overflow: hidden;
    }
  }
  .none {
    color: darkgray;
  }
}
.title {
  text-align: left;
  .title-info {
    font-weight: bold;
    span {
      color: #494949;
    }
  }
}
.tags {
  text-align: left;
  span {
    display: inline-block;
    padding: 2px 5px;
    margin-right: 5px;
    border-color: #e3f1ed;
    background-color: #f2f8f2;
    color: $sub-color;
  }
}
.directors,
.durations,
.rating,
.casts {
  text-align: left;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.durations {
  span {
    display: inline-block;
    margin-left: 10px;
  }
}

.tipText {
  color: #494949;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
}
</style>
