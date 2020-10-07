const HtmlWebpackPlugin = require("html-webpack-plugin");
const { createEmotionPlugin } = require("emotion-ts-plugin");

function getPlugins() {
  const plugins = [];
  plugins.push(
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
      inject: true,
    })
  );
  return plugins;
}

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.WEBPACK_DEV_SERVER ? "development" : "production",
  output: {
    path: __dirname + "/dist",
    filename: "app.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: getPlugins(),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              createEmotionPlugin({
                sourcemap: true,
                autoLabel: true,
                labelFormat: "[local]",
                autoInject: true,
              }),
            ],
          }),
        },
      },
    ],
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
