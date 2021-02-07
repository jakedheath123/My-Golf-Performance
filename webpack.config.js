const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}.js`)(env);

module.exports = ({ env = "production", presets = [] }) => {
  return merge(
    {
      mode: env,
      entry: "./src",
      output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        chunkFilename: "[id].js"
      },
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      module: {
        rules: [
          {
            test: /\.(js)x?$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader"
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(env)
  );
};
