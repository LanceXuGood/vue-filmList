<template>
    <div class="home-page">
        <h1>{{filmData.title}}</h1>
        <div v-for="(item,index) in filmData.subjects" :key="index" class="film-item">
            <img :src="item.images.medium" alt="">
            <div class="content">
                <div class="title">
                    <span class="title-info">{{format(item.title)}}({{item.year}})</span>
                </div>
                <p class="tags">
                    <span v-for="(tag,index) in item.genres" :key="index" class="tag">{{tag}}</span>
                </p>
                <div class="directors">
                    <span>编剧：</span><a v-for="(director,index) in item.directors" :key="index" :href="director.alt">{{director.name}}{{index===item.directors.length-1?'...':'/'}}</a>
                </div>
                <div class="casts">
                    <span>演员：</span><a v-for="(cast,index) in item.casts" :key="index" :href="cast.alt">{{cast.name}}{{index===item.casts.length-1?'...':'/'}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getZhiHuNewsList
    } from "../common/api/home";

    export default {
        name: "",
        props: {},
        data() {
            return {
                filmData: {}
            };
        },
        methods: {
            format(value) {
                if (value.length > 6) {
                    let va = value.substring(0, 6);
                    return `${va}...`
                } else {
                    return value
                }
            }
        },
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
        .film-item {
            padding: 20px;
            width: 100%;
            display: flex;
            margin-bottom: 20px;
            img {
                margin-right: 20px;
            }
            .content {
                flex: 1;
                .title {
                    text-align: left;
                    .title-info {
                        font-size: 26px;
                        span {
                            font-weight: bold;
                            color: #494949;
                        }
                    }
                }
                .tags {
                    text-align: right;
                    span {
                        font-size: 20px;
                        display: inline-block;
                        padding: 5px;
                        border-color: #e3f1ed;
                        background-color: #f2f8f2;
                        color: #4f946e;
                    }
                }
                .casts,
                .directors {
                    span {
                        font-size: 24px;
                    }
                    text-align: left;
                    a {
                        font-size: 24px;
                    }
                }
            }
        }
    }
</style>
