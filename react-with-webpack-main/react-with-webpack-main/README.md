## Creating a React app with Webpack

1. Create a new directory for your app, and navigate to it in the terminal
```
mkdir my-react-app
cd my-react-app 
```

2. Initialize a new npm package in the directory
```
npm init -y
```

3. Install the required packages for React, Webpack, and Babel
```
npm i react react-dom
npm i webpack webpack-cli webpack-dev-server
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react 
npm i html-webpack-plugin
```

4. Create a new file called index.js in a new folder called src
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>The Isfhan Ahmed</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

5. Create a new file called index.html in a new folder called public
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

6. Create a new file called webpack.config.js in the root directory
```javascript
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
```

7. Add the following scripts to the package.json file
```json
"scripts": {
  "start": "webpack serve --mode development --open",
  "build": "webpack --mode production"
}
```

8. Start the development server by running the following command in the terminal
```
npm start
```

9. Open a web browser and navigate to http://localhost:8080. You should see the "Hello, world!" message displayed in the browser.

That's it! You now have a basic React app that uses Webpack for bundling and development. You can modify the App component in the index.js file to add more functionality to your app. You can also use the **npm run build** command to build a production version of your app that can be deployed to a web server