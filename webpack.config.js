const { watch } = require('fs');
const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/js/main.js', 
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js' 
    
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'

        ]
      },

      {
        test: /\.(scss)$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
  
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



};

node: {
  fs: "empty"

};