const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CnameWebpackPlugin = require('cname-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@picture': path.resolve(__dirname, "./public/pictures"),
      '@public': path.resolve(__dirname, "./public"),
      '@styles': path.resolve(__dirname, "./public/styles"),
      '@components': path.resolve(__dirname, "./src/components"),
      '@data': path.resolve(__dirname, "./src/data"),
      '@pages': path.resolve(__dirname, "./src/pages"),
    },
  },
  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "./public/pictures/IMG_7169.jpg",
    }),
    new CnameWebpackPlugin({
      domain: 'www.masonpartridge.com',
    }),

    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpeg|webp|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
