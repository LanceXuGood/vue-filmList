/**
 * Created by Administrator on 2017/3/27.
 */

module.exports = {
    plugins: [
        //require('precss'),
        require('autoprefixer'),
        // require('postcss-pxtorem')({
        //     rootValue: 75,
        //     propWhiteList: [],
        // }),
        require('postcss-px-to-viewport')({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false

        })
    ]
};
