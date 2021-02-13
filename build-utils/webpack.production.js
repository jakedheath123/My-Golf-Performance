const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  // output: {
  //   filename: "[contenthash].js"
  // }
  plugins: [new CleanWebpackPlugin()]
});
