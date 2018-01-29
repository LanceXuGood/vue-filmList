const mixin = {
    data() {
        return {
            demo1: [1,23,{1:3}],
            demo2: [],
            demo3: [],
        };
    },
    methods: {
        foo: function () {
            console.log('foo');
        },
        conflicting: function () {
            console.log('from mixin');
        }
    }
};
export default mixin;
