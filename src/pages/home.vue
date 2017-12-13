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
        @include font-dpr(16PX);
    }
</style>
