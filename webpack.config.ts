import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import "webpack-dev-server";

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    modules: ["node_modules", "src"],
    preferAbsolute: true,
  },
  devServer: {
    static: path.resolve("public"),
    port: 9999,
    open: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, "src"),
        loader: "ts-loader",
        exclude: /\node_modules/,
      },
      {
        test: /.css/,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: /.module.css/,
                localIdentName: "[path]_[name]__[local]",
              },
            },
          },
        ],
        exclude: /\node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Advanced",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
  ],
};

export default config;
