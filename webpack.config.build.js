/**
 * Created by Administrator on 2017/4/7.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //这个插件不支持热加载，所以开发环境不支持
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
module.exports = {
  mode: 'production',
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, 'src/main.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[id].[hash:8].js',
    publicPath: ''
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    },
    extensions: ['.web.js', '.js', '.vue', '.json']

  },
  module: {
    rules: [{
        test: /\.jpe?g$|\.gif$|\.png$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[hash:8].[name].[ext]',
          }
        }],
        exclude: /node_modules/,
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: [{
            test: /\.css/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                }
              },
              'postcss-loader'
            ],
          }]
        },
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract([
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'postcss-loader',

        ]),
        exclude: /node_modules/
      }
    ]
  },
  context: __dirname,
  plugins: [

    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, './node_modules')
          ) === 0
        )
      }
    }),
    //
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash:8].css',
      allChunks: true,
      ignoreOrder: true,
    }),

    new HtmlWebpackPlugin({
      title: '',
      hash: true,
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ],
};
