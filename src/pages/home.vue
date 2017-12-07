<template>
    <div class="home-page">
        <h3>{{filmData.title}}</h3>
        <HomeListItem></HomeListItem>
    </div>
</template>

<script>
    import HomeListItem from '../components/HomeListItem.vue';
    export default {
        name: '',
        props: {},
        components:{
            HomeListItem
        },
        data() {
            return {
                filmData: {}
            };
        },
        methods: {
        },
        beforeMount() {
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

    }
</style>
