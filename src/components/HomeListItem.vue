<template>
    <div class="HomeList">
        <div v-for="(item,index) in filmData.subjects" :key="item.id" class="film-item">
            <router-link :to="`/filmDetail/${item.id}`">
                <div class="left">
                    <img :src="item.images.medium" alt="" class="image">
                    <p class="rating">
                        <span v-for="(itemR,index) in item.rating.averageArr" :key="index" :class="{tr:itemR.star!=='half', full:itemR.star==='full' , none :itemR.star === 'none'}">
                                    <i class="iconfont" v-if="itemR.star!=='half'">&#xe630;</i>
                                    <i class="iconfont" v-if="itemR.star==='half'">&#xe61a;</i>
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
                        <span><a v-for="(director,index) in item.directors" :key="index">{{director.name}}{{index===item.directors.length-1?'...':'/'}}</a></span>
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
        mapGetters,
        mapActions
    } from 'vuex';
    export default {
        name: '',
        props: {},
        data() {
            return {};
        },
        computed: mapGetters({
            filmData: 'geHomeState'
        }),
        methods: {
            ...mapActions([
                'setHomeState',
            ]),
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
                apikey: '0b2bdeda43b5688921839c8ecb20399b',
                city: '上海',
                start: 0,
                count: 10
            });
        },
        mounted() {}
    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variable.scss";
    .film-item {
        margin-bottom: 20px;
        >a {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            .left {
                margin-right: 20px;
                img {
                    width: 270px;
                }
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
                    .none {
                        color: darkgray;
                    }
                }
            }
            .content {
                flex: 1;
                >div {
                    @include font-dpr(14PX);
                    text-align: left;
                    margin-bottom: 10px;
                }
                .title {
                    text-align: left;
                    .title-info {
                        @include font-dpr(16PX);
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
                        padding: 5px 10px;
                        margin-right: 10px;
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
                    text-align: left;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    span:nth-of-type(2) {
                        flex: 1;
                    }
                }
            }
        }
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
        padding: 20px;
    }
    .HomeList {
        flex: 1;
        overflow-y: auto;
    }
</style>
