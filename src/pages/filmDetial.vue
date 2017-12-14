<template>
    <div>
        这里是film-detial页面</div>
</template>

<script>
    import {
        getDouBanFilmDetail
    } from '../common/api/filmDetail';
    export default {
        name: '',
        props: {},
        data() {
            return {
            };
        },
        methods: {
        },
        async beforeMount() {
            const id = this.$route.params.id;
            const data = await getDouBanFilmDetail(id,{
                apikey: '0b2bdeda43b5688921839c8ecb20399b',
                city: '上海',
                start: 0,
                count: 10
            });
            console.log(data);
        },
        mounted() {}
    };
</script>

<style lang="scss" scoped>

</style>

