import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"; // ts 변환 속도 향상
// 핫리로딩 플러그인
const devServer: DevServerConfiguration = {};
const config: Configuration = {
  name: "wordrelady-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: ["tsx", "ts", "json", "js", "jsx"], //확장자 이름
  },

  module: {
    rules: [
      // 규칙
      {
        test: /\.tsx/,
        use: "ts-loader",
        exclude: /node_modules/,
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
  plugins: [new ReactRefreshWebpackPlugin(), new ForkTsCheckerWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"), // 특정 경로로 파일을 모아준다.
    filename: "app.js", // 합쳐서 만들어준것, 결과물의 이름
    publicPath: "/dist",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist/" },
    static: { directory: path.join(__dirname) }, //절대경로
    hot: true,
  },
};

export default config;
