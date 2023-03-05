const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point for the app
  entry: './src/index.js',

  // Output file for the bundled code
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  // Rules for webpack to follow when loading files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Load all .js and .jsx files
        exclude: /node_modules/, // Exclude the node_modules folder
        use: {
          loader: 'babel-loader', // Use the babel-loader to transpile the code
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Use the @babel/preset-env and @babel/preset-react presets for transpiling
          }
        }
      }
    ]
  },

  // Plugins for webpack
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', // Use the index.html file in the public folder as a template
      filename: './index.html' // Output the bundled index.html file to the dist folder
    })
  ],

  // Development server options
  devServer: {
    static: {
      directory: __dirname + '/dist' // Serve files from the dist folder
    }
  }
};
