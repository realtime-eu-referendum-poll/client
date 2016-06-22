const config = require('./webpack.config')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true
})
const port = 8080
server.listen(port, 'localhost', function (error) {
  if (error) {
    console.log(`An error occurd when initializing the db: ${error}`)
  }
  console.log(`Running on port ${port}`)
})
