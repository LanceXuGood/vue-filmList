<template>
    <div class="demo2-page">
        demo2
        <div v-for="(item,index) in sdfasf.D1_data">
            {{item}}
        </div>
        <div>
            {{this.$route.query.plan}}
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    export default {
        name: '',
        props: {},
        computed: mapGetters({
            sdfasf: 'getD1State'
        }),
        components: {},
        data() {
            return {
                Demo2: {}
            };
        },
        methods: {},
        beforeMount() {},
        mounted() {
            console.log(this.$route);
        }
    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variable.scss";
    .demo2-page {
        font-size: 18px;
    }
</style>
