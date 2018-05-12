var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack')
// var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var pathsToClean = [
  'dist'
]

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
    },{
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
          })
      }
    ]
  },

  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(pathsToClean),
    new CopyWebpackPlugin([{
        from: 'src/css/font',
        to: 'css/font'
    }]),
    new ExtractTextPlugin("css/styles.css"),
    // 加入 html 模板任务
    new HtmlWebpackPlugin({
      // 模板文件
      template: 'src/index.html',
      // 打包后文件名称，会自动放到 output 指定的 dist 目录
      filename: 'index.html'
    }),
    // new UglifyJsPlugin()
  ]
}
