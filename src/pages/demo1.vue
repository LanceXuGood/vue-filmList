<template>
    <div class="demo1-page">
        <h1>demo1</h1>
        <div v-for="(item,index) in sdfasf.D1_data">
            <span @click="goToDemo2(item)"></span>
        </div>
        <button @click="setD1State(4)">点击</button>
        <button @click="goToDemo2(event)">点击下一步</button>
    </div>
</template>F

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: '',
    props: {},
    computed: mapGetters({
        sdfasf: 'getD1State'
    }),
    components: {},
    data() {
        return {
            demo1: []
        };
    },
    methods: {
        ...mapActions(['setD1State']),
        goToDemo2(params){
            console.log(event.target);
        // this.$router.push({ path: '/demo2', query: item})
        // router组件.route当前页面的路由
        }
    },
    beforeMount() {},
    mounted() {


    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";
.demo1-page {
  @include font-dpr(18px);
}
</style>
