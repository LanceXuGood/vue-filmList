<template>
    <div>
        <div v-for="(item,index) in filmData.subjects" :key="index" class="film-item">
            <router-link to="/filmDetail/1">
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
                        <span>编剧：</span>
                        <span><a v-for="(director,index) in item.directors" :key="index" >{{director.name}}{{index===item.directors.length-1?'...':'/'}}</a></span>
                    </div>
                    <div class="casts">
                        <span>演员：</span>
                        <span><a v-for="(cast,index) in item.casts" :key="index" >{{cast.name}}{{index===item.casts.length-1?'...':'/'}}</a></span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {
        getDouBanFilmList
    } from '../common/api/home';
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
        },
        async beforeMount() {
            const data = await getDouBanFilmList({
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
    @import '../assets/scss/variable.scss';
    .film-item {
        margin-bottom: 5px;
        >a {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            .left {
                margin-right: 5px;
                .rating {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    span {
                        display: inline-block;
                        color: rgb(247, 186, 42);
                        .iconfont {
                            font-size: 16px;
                        }
                    }
                    .tr {
                        transform: translateY(-1px);
                        .iconfont {
                            font-size: 12px;
                        }
                    }
                    .nofull {
                        color: darkgray;
                    }
                }
            }
            .content {
                flex: 1;
                >div {
                    font-size: 12px;
                    text-align: left;
                }
                .title {
                    text-align: left;
                    .title-info {
                        font-size: 16px;
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
                        color: $sub-color;
                    }
                }
                .durations {
                    text-align: left;
                    span {
                        display: inline-block;
                        margin: 5px;
                        color: $sub-color;
                    }
                }
                .casts,
                .directors {
                    display: flex;
                    text-align: left;
                    justify-content: flex-start;
                    align-items: flex-start;
                    span:nth-of-type(2) {
                        flex: 1;
                        a {
                            display: inline-block;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
        padding: 5px;
    }
</style>
