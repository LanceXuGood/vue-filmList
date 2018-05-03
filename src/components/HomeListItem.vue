<template>
  <div class="HomeList" ref="list">
    <div v-for="(item) in home.arr" :key="item.id" class="film-item">
      <router-link :to="`/filmDetail/${item.id}`">
        <div class="left">
          <img v-lazy="item.images.small" alt="" class="image">
        </div>
        <div class="content">
          <div class="title">
            <span class="title-info">{{format(item.title)}}({{item.year}})</span>
          </div>
          <div class="tags">
            <span v-for="(tag,index) in item.genres" :key="index" class="tag">{{tag}}</span>
          </div>
          <div class="durations">
            上映：
            <p>
              {{item.mainland_pubdate}} <span v-for="(duration,index) in item.durations" :key="index" class="duration"> {{duration}}{{index===item.durations.length-1?'':'/'}}</span>
            </p>
          </div>
          <div class="directors ">
            编剧：
            <p class="textEllipsis">
              <span v-for="(director,index) in item.directors" :key="index">{{director.name}}{{index===item.directors.length-1?'':'/'}}</span>
            </p>
          </div>
          <div class="casts">
            演员：
            <p class="textEllipsis">
              <span v-for="(cast,index) in item.casts" :key="index">{{cast.name}}{{index===item.casts.length-1?'':'/'}}</span>
            </p>
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
    </div>
    <transition name="fade">
      <p class="tipText" v-show="home.isLoading">{{tipText}}</p>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "",
  props: {},
  data() {
    return {
      tipText: "正在加载..."
    };
  },
  computed: mapGetters({
    home: "geHomeState"
  }),
  methods: {
    ...mapActions(["setHomeState"]),
    format(value) {
      if (value.length > 10) {
        let va = value.substring(0, 6);
        return `${va}...`;
      } else {
        return value;
      }
    }
  },
  beforeMount() {
    this.setHomeState({
      apikey: "0b2bdeda43b5688921839c8ecb20399b",
      city: "上海",
      start: 0,
      count: 5
    });
  },
  mounted() {
    const dom = this.$refs.list;
    dom.onscroll = e => {
      const scrollHeight = dom.scrollHeight;
      const height = dom.clientHeight;
      const scrollTop = dom.scrollTop;
      if (scrollHeight - height - scrollTop < 5 && !this.home.isLoading) {
        let count = this.home.flimListData.start;
        count += 5;
        if (count > this.home.flimListData.total) {
          return;
        }
        this.setHomeState({
          apikey: "0b2bdeda43b5688921839c8ecb20399b",
          city: "上海",
          start: count,
          count: 5
        });
      }
    };
  }
};
</script>

<style>
@import url("../assets/scss/variable.css");
.film-item {
  box-shadow: 0 0 4px 0 rgba(232, 237, 250, 0.6),
    0 1px 2px 0 rgba(232, 237, 250, 0.5);
  padding: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  & p,
  & div {
    color: #666;
  }
  & > a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    & .left {
      width: 170px;
      height: 250px;
      margin-right: 20px;
      & .image {
        width: 100%;
        height: 100%;
      }
    }
    & .content {
      flex: 1;
      & > div {
        text-align: left;
        margin-bottom: 10px;
        font-size: 26px;
      }
      & .title {
        text-align: left;
        & .title-info {
          font-size: 26px;
          font-weight: bold;
          & span {
            color: #494949;
          }
        }
      }
      & .tags {
        text-align: left;
        & span {
          display: inline-block;
          padding: 2px 5px;
          margin-right: 5px;
          border-color: #e3f1ed;
          background-color: #f2f8f2;
          color: var(--sub-color);
        }
      }
      & .directors,
      & .durations,
      & .rating,
      & .casts {
        text-align: left;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        overflow: hidden;
        font-size: 24px;
        & p {
          width: 420px;
          @apply --textEllipsis;
        }
        & > div {
          flex: 1;
        }
      }
      & .rating {
        height: 36px;
        & p {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 100%;
          & span {
            display: inline-block;
            color: rgb(247, 186, 42);
            display: flex;
            align-items: center;
            & .iconfont {
              font-size: 12px;
            }
          }
          & b {
            display: block;
            margin-left: 10px;
            color: #ffb400;
            font-size: 24px;
            line-height: 46px;
            overflow: hidden;
          }
        }
        & .none {
          color: darkgray;
        }
      }
    }
  }
}
.HomeList {
  flex: 1;
  overflow-y: auto;
  position: relative;
}
.tipText {
  color: #494949;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
