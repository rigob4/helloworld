const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  return {
    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      hotOnly: true,
      port: 3000,
      publicPath: 'http://localhost:3000/dist/'
    },
    devtool: 'none',
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },
    output: {
      filename: 'bundle.min.js',
      path: path.join(__dirname, 'dist/'),
      publicPath: '/dist/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': `'${env.NODE_ENV}'`
        }
      })
    ],
    resolve: {
      extensions: [ '.webpack.js', '.web.js', '.js', '.jsx' ]
    }
  }
};
