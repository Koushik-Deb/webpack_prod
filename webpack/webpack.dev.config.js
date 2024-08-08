const common = require("./webpack.common.config");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, ".."),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true, // Write files to dist folder in dev mode
    },
    client: {
      overlay: true, // Show errors in the browser window
    },
    liveReload: false, // disable live reload, as we are using HOT reload instead
  },
});
