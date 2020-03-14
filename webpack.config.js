const path = require("path");
const { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const resolve = require("./webpack.config.resolve");

module.exports = (env, argv) => ({
  entry: ["@babel/polyfill", "./src/styles/main.scss", "./src/index.tsx"],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  resolve,
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name:
                argv.mode !== "production"
                  ? "[name].[ext]"
                  : "[contenthash].[ext]",
              outputPath: "assets"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      templateParameters: {
        isStaging: true
      },
      minify: {
        collapseWhitespace: true,
        processConditionalComments: true,
        minifyJS: argv.mode === "production"
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            unused: true
          },
          ecma: 6,
          mangle: true,
          unused: true
        },
        sourceMap: true
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  }
});
