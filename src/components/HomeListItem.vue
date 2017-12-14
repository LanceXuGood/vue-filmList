<template>
    <div>
        <div v-for="(item,index) in filmData.subjects" :key="item.id" class="film-item">
            <router-link to="/filmDetail/1">
                <div class="left">
                    <img :src="item.images.medium" alt="" class="image">
                    <p class="rating">
                        <span v-for="itemR in (Math.floor(item.rating.average/2))" :key="itemR" class="tr full">
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
        getZhiHuNewsList
    } from "../common/api/home";
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
            }
        },
        async beforeMount() {
            const data = await getZhiHuNewsList({
                apikey: "0b2bdeda43b5688921839c8ecb20399b",
                city: "上海",
                start: 0,
                count: 10
            });
            data.subjects.forEach(item => {
                //9.4 => 4.7 四星半
                const ratingStar = item.rating.average / 2;
                item.rating.averageArr = [] ;
                if (String(ratingStar).indexOf('.') > -1) { //小数
                    for (let a = 1; a <= 5; a++) {
                        if (a < ratingStar) {
                            item.rating.averageArr.push({
                                star: 'full'
                            });
                        }else if( a == Math.ceil(ratingStar)) {
                            item.rating.averageArr.push({
                                star: 'half'
                            });
                        }else{
                            item.rating.averageArr.push({
                                star: 'none'
                            });
                        }
                    }
                } else { //整数
                    for (let a = 1; a <= 5; a++) {
                        if (a <= ratingStar) {
                            item.rating.averageArr.push({
                                star: 'full'
                            });
                        }else{
                            item.rating.averageArr.push({
                                star: 'none'
                            });
                        }
                    }
                }
            });
            console.log(data);
            this.filmData = data;
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
                    .nofull {
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
                        @include font-dpr(20PX);
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
</style>
