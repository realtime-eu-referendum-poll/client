const path = require('path')
const webpack = require('webpack')

const config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './source/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({ 'React': 'react' })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'],
      exclude: /node_modules/
    }]
  },
  externals: {
    Config: JSON.stringify({
      PUSHER_KEY: 'c2ba2ebd54857fecfdfe'
    })
  },
  postcss () {
    return [
      require('postcss-nested'),
      require('postcss-simple-vars'),
      require('postcss-sass-colors')
    ]
  }
}

module.exports = config
