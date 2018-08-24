const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['webpack/hot/only-dev-server', 'webpack-dev-server/client?http://0.0.0.0:8002', 'babel-polyfill', path.resolve(__dirname, 'src/main.js')],
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
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8002,
    inline: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join('/', 'index.html')
      }, ],
    },
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
            test: /\.scss/,
            use: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader',
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
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
    new VueLoaderPlugin(),
    //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }),
    new HtmlWebpackPlugin({
      title: '',
      hash: true,
      template: path.resolve(__dirname, 'src/index.html')
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './src/assets'),
      to: 'assets',
    }]),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://localhost:8002`],
      }
    })
  ],
};
