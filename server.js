const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    hot:true,
    stats: {
        colors: true
    },
    noInfo: false,
});

server.listen(4000, 'localhost' ,function() {
    console.log('Starting server on http://localhost:4000');
});
