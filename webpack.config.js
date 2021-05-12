const { watch } = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  mode: "development",
  entry: [
    __dirname + '/src/js/main.js',
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
        use: [],
      }, {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
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

  resolve: {
    preferAbsolute: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]

};

node: {
  fs: "empty"

};