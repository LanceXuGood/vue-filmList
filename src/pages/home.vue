<template>
    <div class="home-page">
        <h3>{{filmData.title}}</h3>
        <div v-for="(item,index) in filmData.subjects" :key="index" class="film-item" @click="jump">
            <div class="left">
                <img :src="item.images.medium" alt="" class="image">
                <p class="rating">
                    <span v-for="itemR in (Math.floor(item.rating.average/2))" :key="itemR" class="trfull">
                            <i class="iconfont">&#xe630;</i>
                        </span>
                    <span v-if="String(item.rating.average/2).indexOf('.')>-1 ">
                            <i class="iconfont">&#xe61a;</i>
                        </span>
                    <span v-for="itemR in 5-Math.ceil(item.rating.average/2)" :key="itemR" class="tr nofull">
                            <i class="iconfont">&#xe630;</i>
                        </span>
                </p>
            </div>
            <div class="content">
                <div class="title">
                    <span class="title-info">{{format(item.title)}}({{item.year}})</span>
                </div>
                <div class="tags">
                    <span v-for="(tag,index) in item.genres" :key="index" class="tag">{{tag}}</span>
                </div>
                <div class="durations">
                    上映：{{item.mainland_pubdate}}
                    <span v-for="(duration,index) in item.durations" :key="index" class="duration">{{duration}}{{index===item.durations.length-1?'':'/'}}</span>
                </div>
                <div class="directors">
                    <span>编剧：</span><a v-for="(director,index) in item.directors" :key="index" :href="director.alt">{{director.name}}{{index===item.directors.length-1?'...':'/'}}</a>
                </div>
                <div class="casts">
                    <span>演员：</span>
                    <span><a v-for="(cast,index) in item.casts" :key="index" :href="cast.alt">{{cast.name}}{{index===item.casts.length-1?'...':'/'}}</a></span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { getZhiHuNewsList } from '../common/api/home';

export default {
    name: '',
    props: {},
    data() {
        return {
            filmData: {}
        };
    },
    methods: {
        format(value) {
            if (value.length > 10) {
                let va = value.substring(0, 6);
                return `${va}...`;
            } else {
                return value;
            }
        },
        jump(){
            this.$router.push('/fileDetail/1');
        }
    },
    async beforeMount() {
        const data = await getZhiHuNewsList({
            apikey: '0b2bdeda43b5688921839c8ecb20399b',
            city: '上海',
            start: 0,
            count: 10
        });
        this.filmData = data;
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.home-page {
    font-size: 34px;
    h3 {
        font-size: 40px;
        background-color: #f2f8f2;
        color: #4f946e;
        padding: 20px 0;
    }
    .film-item {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
            0 2px 4px 0 rgba(232, 237, 250, 0.5);
        padding: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 20px;
        .left {
            margin-right: 20px;
            .rating {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                span {
                    display: inline-block;
                    color: rgb(247, 186, 42);
                    .iconfont {
                        font-size: 26px;
                    }
                }
                .tr {
                    transform: translateY(-1px);
                    .iconfont {
                        font-size: 25px;
                    }
                }
                .nofull {
                    color: darkgray;
                }
            }
        }
        .content {
            flex: 1;
            > div {
                font-size: 24px;
                text-align: left;
            }
            .title {
                text-align: left;
                .title-info {
                    font-size: 30px;
                    span {
                        font-weight: bold;
                        color: #494949;
                    }
                }
            }
            .tags {
                text-align: left;
                span {
                    display: inline-block;
                    margin: 5px;
                    border-color: #e3f1ed;
                    background-color: #f2f8f2;
                    color: #4f946e;
                }
            }
            .durations {
                text-align: left;
                span {
                    display: inline-block;
                    margin: 5px;
                    color: #4f946e;
                }
            }
            .casts,
            .directors {
                text-align: left;
                a {
                    font-size: 24px;
                }
            }
            .casts{
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                span:nth-of-type(2){
                    flex: 1;

                }

            }
        }
    }
}
</style>
