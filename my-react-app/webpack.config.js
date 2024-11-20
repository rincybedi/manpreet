const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point for the application
  entry: "./src/index.js",

  // Output configuration: bundle the files to 'dist' folder
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Module rules: How to process different file types
  module: {
    rules: [
      {
        // Transpile JavaScript files with Babel
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        // Process CSS files (e.g., styles.css)
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Plugins for extra functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use index.html as a template
    }),
  ],

  // DevServer configuration for local development
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // New configuration
    },
    port: 3000, // Server runs on http://localhost:3000
    open: true, // Automatically open the browser when the server starts
  },

  // Mode (either 'development' or 'production')
  mode: "development",
};
