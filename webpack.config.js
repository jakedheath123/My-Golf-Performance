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
        filename: "bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.(js)x?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
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
