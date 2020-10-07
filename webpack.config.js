const HtmlWebpackPlugin = require("html-webpack-plugin");
const { createEmotionPlugin } = require("emotion-ts-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.WEBPACK_DEV_SERVER !== "production";

function getPlugins() {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
      inject: true,
    }),
  ];
  plugins.push();
  return plugins;
}

module.exports = {
  entry: "./src/index.tsx",
  mode: devMode ? "development" : "production",
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
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  outputPath: "images",
                  name: (resourcePath) => {
                    if (resourcePath.match(".(jpg|jpeg)")) {
                      return "[contenthash].jpg";
                    }
                    return "[contenthash].[ext]";
                  },
                },
              },
            },
          },
        ],
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
