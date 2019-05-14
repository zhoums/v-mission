const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const UglifyEsPlugin = require('uglify-es-webpack-plugin')
const common = require('./common')


module.exports = webpackMerge(common, {
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
          NODE_ENV: '"production"'
      }
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new UglifyEsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false,
    }),
  ],

})
