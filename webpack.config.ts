import * as path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import * as webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"; //핫리로딩

const config: webpack.Configuration = {
  name: "moya",
  mode: "development",
  devtool: "eval",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".jsx", ".js", ".tsx", ".ts", "json"], //확장자 이름
    alias: {
      "@": path.resolve(__dirname, "src"),
      public: path.resolve(__dirname, "public"),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: path.join(__dirname, "node_modules"),
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "entry",
                targets: {
                  browsers: ["> 10% in KR"], //broswer setting kr 10%
                },
                debug: true,
              },
            ],
            "@babel/preset-typescript",
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

  entry: "./src/index.tsx",
  //최상위 루트.js하나만 경로로 설정 시 나머지는 같이 끌려온다.
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "dist"), // 특정 경로로 파일을 모아준다.
    filename: "app.bundle.js", // 합쳐서 만들어준것, 결과물의 이름
    publicPath: "/dist",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) }, //절대경로
    hot: true,
    historyApiFallback: {
      index: "index.html",
    },
  },
};

export default config;
