const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ENV = 'development';
const isDev = ENV === 'development';

module.exports = {
  entry: ['webpack/hot/only-dev-server', 'webpack-dev-server/client?http://0.0.0.0:8002', 'babel-polyfill', path.resolve(__dirname, 'src/main.js')],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].js',
    publicPath: ''
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    },
    extensions: ['.web.js', '.js', '.vue', '.json']

  },
  resolveLoader: {
    alias: {
      'scss-loader': 'sass-loader',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8002,
    inline: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    compress: true,
    proxy: {
      '/v2': {
          target: 'https://api.douban.com/',
          secure: false,
          changeOrigin: true
      }
    },
  },
  module: {
    rules: [{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[hash:8].[name].[ext]',
          }
        }],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: [{
            test: /\.css/,
            use: [{
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                }
              },
              'style-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: 'inline',
                }
              }
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
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  context: __dirname,
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }),
    new HtmlWebpackPlugin({
      title: '',
      hash: true,
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.DefinePlugin({
      __DEV__: isDev,
      'process.env': {
        'NODE_ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './src/assets'),
      to: 'assets',
    }])
  ],
};
