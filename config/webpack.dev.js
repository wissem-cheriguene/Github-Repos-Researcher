const paths = require("./paths");
const webpack = require("webpack");
// const merge = require('webpack-merge');
// webpack-merge v5 (and later)
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const port = 8080;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      // Styles
      {
        test: /\.(s?css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },

  output: {
    publicPath: "/",
  },

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    clientLogLevel: "warn",
    overlay: true,
    stats: "minimal",
    open: true,
    compress: true,
    hot: true,
    port,
  },
});