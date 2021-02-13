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
            test: /\.(ts)x?$/,
            use: "ts-loader",
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: "file-loader"
              }
            ]
          }
        ]
      },
      devServer: {
        historyApiFallback: true
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
