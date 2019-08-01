const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VuePlugin = require('vue-loader/lib/plugin')
const { resolve } = require('./util')

module.exports = {
  entry: {
    app: resolve('src/app')
  },
  output: {
    filename: '[name]_[hash:6].js',
    path: resolve('dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.js', '.vue', '.styl']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [resolve('node_modules')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: [
          { loader: 'vue-style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'stylus-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.css?$/,
        use: [
          { loader: 'vue-style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(jpg(e)?|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VuePlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    useLocalIp: true,
    clientLogLevel: 'warn',
    inline: true,
    overlay: {
      warnings: true,
      errors: true
    },
    hot: true,
    // quiet: true
  },
  stats: 'errors-warnings'
}
