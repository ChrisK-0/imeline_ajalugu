const { watch } = require('fs');
const path = require('path');

module.exports = {
  mode: "development", // could be "production" as well
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
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'

        ]
      }
    ]
  },
};

node: {
  fs: "empty"

};