const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const devServer = (isDev) => {
  return !isDev
    ? {}
    : {
        devServer: {
          open: true,
          liveReload: true,
          hot: true,
          port: 8080,
          host: "192.168.0.105",
          watchFiles: ["src/*.html"],
        },
      };
};

module.exports = ({ develop }) => ({
  mode: develop ? "development" : "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  // performance: {
  //   hints: false,
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      //   template: "./src/index.html",
      watchFiles: ["src/*.html"],
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      // {
      //   test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
      //   type: "asset/inline",
      // },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  ...devServer(develop),
});
//     "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
