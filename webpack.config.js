
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('js/common.js');

module.exports = [{
    devtool: "source-map",
    entry: {
        app: [
            __dirname + '/src/js/main.js',
            __dirname + '/src/style/main.scss'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        moduleDirectories: ['node_modules', 'src/', 'src/js/']
    },
    plugins: [
        // commonsPlugin,
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('style/[name].css')
    ]
}];