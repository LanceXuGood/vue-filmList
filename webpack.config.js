const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const isDev = ENV !== 'production';
console.log(isDev);
const vendor = [
    'vue',
    'vuex',
    'vux',
    'history'
];

module.exports = {
    entry: ['webpack/hot/only-dev-server', 'webpack-dev-server/client?http://localhost:8001', 'babel-polyfill', path.resolve(__dirname, 'src/main.js')],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: ''
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js', //TDDO why?
            '@': path.resolve('src')
        },
        extensions: ['.web.js', '.js', '.vue', '.json']

    },
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[hash:8].[name].[ext]',
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: [
                        {
                            test: /\.scss/,
                            use: [
                                'style-loader',
                                {
                                    loader: 'css-loader',
                                    options: {
                                        importLoaders: 1,
                                    }
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        sourceMap: 'inline',
                                    }
                                },
                                'sass-loader',
                            ],
                            exclude: /node_modules/
                        },
                        {
                            test: /\.less/,
                            use: [
                                'style-loader',
                                {
                                    loader: 'css-loader',
                                    options: {
                                        importLoaders: 1,
                                    }
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        sourceMap: 'inline',
                                    }
                                },
                                'less-loader',
                            ],
                            exclude: /node_modules/
                        }
                    ]
                }
            },
            {
                test: /\.js$|\.js[x]?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['es2015', { 'modules': false }]],
                            plugins: [
                                ["component", [
                                    {
                                        "libraryName": "element-ui",
                                        "styleLibraryName": "theme-default"
                                    }
                                ]]
                            ]
                        }
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                        }
                    },
                    'sass-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                        }
                    },
                    'less-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                        }
                    }
                ]
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
        new webpack.NamedModulesPlugin()
    ],
};
