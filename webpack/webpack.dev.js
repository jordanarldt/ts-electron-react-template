const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "cheap-module-source-map",
  mode: "development",
  devServer: {
    static: {
      directory: "./dist",
    },
    compress: true,
    port: 3000,
  },
});
