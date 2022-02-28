const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// 핫리로딩 플러그인

module.exports = {
  name: "wordrelady-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx", ".json"], //확장자 이름
  },

  module: {
    rules: [
      // 규칙
      {
        test: /\.jsx/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 10% in KR"], //broswer setting kr 10%
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },

  entry: {
    app: "./client",
    //최상위 루트.js하나만 경로로 설정 시 나머지는 같이 끌려온다.
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"), // 특정 경로로 파일을 모아준다.
    filename: "app.js", // 합쳐서 만들어준것, 결과물의 이름
    publicPath: "/dist",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist/" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
