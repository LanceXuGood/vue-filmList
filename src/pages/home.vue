<template>
    <div class="home-page">
        <headee></headee>
        <HomeListItem></HomeListItem>
    </div>
</template>

<script>
    import Headee from '../components/Heade.vue';
    import HomeListItem from '../components/HomeListItem.vue';
    export default {
        name: '',
        props: {},
        components:{
            HomeListItem,
            Headee
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
        @include font-dpr(14px);
        h3 {
            @include font-dpr(40px);
            background-color: #f2f8f2;
            color: $sub-color;
            padding: 20px 0;
        }
    }
</style>
