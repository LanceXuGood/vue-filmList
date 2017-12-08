<template>
    <div class="home-page">
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
    @import '../assets/scss/variable.scss';
    .home-page {
        font-size: 34px;
        background: $primary-color;
        h3 {
            font-size: 16px;
            background-color: #f2f8f2;
            color: $sub-color;
            padding: 5px 0;
        }

    }
</style>
