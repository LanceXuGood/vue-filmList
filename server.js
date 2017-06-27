const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    disableHostCheck : true,
    hot:true,
    stats: {
        colors: true
    },
    noInfo: false,
});

server.listen(8001, 'localhost' ,function() {
    console.log('Starting server on http://localhost:8001');
});
