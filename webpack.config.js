"use strict";

const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (options) => {
  const isDev = options.mode !== "production";

  return {
    devtool: isDev && "cheap-module-source-map",
    entry: {
      demo: "./demo/index",
    },
    output: {
      path: path.join(__dirname, "docs"),
      filename: isDev ? "[name].js" : "[name].[contenthash].js",
      library: "react_terminal_emulator_ui",
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      modules: [path.resolve("./src"), path.resolve(__dirname, "node_modules")],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "demo"),
      },
      client: {
        overlay: true,
      },
      compress: true,
      port: 8888,
      historyApiFallback: {
        index: "/index.html",
      },
      open: {
        target: ["http://localhost:8888/react-terminal-emulator-ui"],
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "demo/index.html",
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };
};
