'use strict';

const LiveReloadPlugin = require('webpack-livereload-plugin'),
	devMode = require('.').isDevelopment,
	USE_FAST_SOURCE_MAPS = false;
/**
 * Fast source maps rebuild quickly during development, but only give a link
 * to the line where the error occurred. The stack trace will show the bundled
 * code, not the original code. Keep this on `false` for slower builds but
 * usable stack traces. Set to `true` if you want to speed up development.
 */
let entry = {
  'bundle': ['./src/main.jsx'],
  'style': ['./src/main.scss']
};

module.exports = {
	entry: entry,
	output: {
		path: __dirname,
		filename: './public/[name].js'
	},
	context: __dirname,
	devtool: devMode && USE_FAST_SOURCE_MAPS ? 'cheap-module-eval-source-map' : 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '*']
	},
	module: {
		loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
	},
	plugins: devMode ? [new LiveReloadPlugin({ appendScriptTag: true })] : []
};
