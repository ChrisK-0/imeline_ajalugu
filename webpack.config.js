const { watch } = require('fs');
const path = require('path');

module.exports = {
  mode: "development",
  entry: [
    '/src/js/main.js',
    '/src/sass/main.scss'
  ],
  
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js'
  },

  module: {

    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        // 'babel-loader'
        use: 'babel-loader',
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: '', name: 'main.css'}
        },
          "sass-loader",
        ]
      },

      {
        test: /\.(png|jpe?g|gif)$/i,

            loader: 'file-loader',
            options: {
              name: '../src/imgs/[name].[ext]',
              emitFile: false,
            }
      }
    ]
  },
};