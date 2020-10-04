const HtmlWebpackPlugin = require("html-webpack-plugin");

function getPlugins() {
  const plugins = [];
  if (process.env.WEBPACK_DEV_SERVER) {
    plugins.push(
      new HtmlWebpackPlugin({
        template: __dirname + "/public/index.html",
        filename: "index.html",
        inject: true,
      })
    );
  }
  return plugins;
}

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.WEBPACK_DEV_SERVER ? "development" : "production",
  output: {
    path: __dirname,
    filename: "dist/app.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: getPlugins(),
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  devServer: {
    https: true,
    port: 3000,
    inline: true,
    hot: true,
    contentBase: __dirname + "/public",
    open: true,
  },
};
