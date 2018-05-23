var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var src = path.join(__dirname, 'src');

var main = {
    devtool: 'source-map',
    mode: 'production',
    entry: {
        styles: path.join(src, 'style.scss'),
        index: path.join(src, 'index.pug'),
        bundle: path.join(src, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use:  ['html-loader', 'pug-html-loader?pretty&exports=false']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    { 
                        loader: 'sass-loader', 
                        options: {
                            includePaths: [
                                path.join(__dirname, 'node_modules/normalize-scss/sass')
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name][hash].[ext]',
                        outputPath: 'images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            outputPath: 'images/',
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            pngquant: {
                                quality: '70',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
        title: 'index.html',
        template: path.join(src, 'index.pug'),
        }),
    ],
};

const devConfig = {
    mode: 'development',
    devServer: {
    historyApiFallback: {
        disableDotRule: true
    },
        stats: 'errors-only',
        port: 8080
    }
};
  
  
  module.exports = function (env) {
    if (env === 'production') {
        return main;
    }
    if (env === 'development') {
        return Object.assign({},
            main,
            devConfig
        )
    }
}
