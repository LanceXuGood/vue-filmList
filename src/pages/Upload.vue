<template>
    <div class="test-page">
        <input type="file" @change="doSomethingElse" >

    </div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {},
    data() {
        return {
            filmData: {}
        };
    },
    methods: {
        doSomethingElse(e) {
            const data = new FormData();
            data.append('123', '234');
            data.get('123');
        }
    },
    beforeMount() {},
    mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";
.test-page {
  @include font-dpr(16px);
}
</style>
