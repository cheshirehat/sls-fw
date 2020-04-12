const path = require("path");
const slsw = require("serverless-webpack");
const webpack = require("webpack");

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  target: "node",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/,
        exclude: [/node_modules/],
        options: {
          configFile: "tsconfig.json"
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(
      slsw.lib.serverless.service.provider.environment
    )
  ]
};