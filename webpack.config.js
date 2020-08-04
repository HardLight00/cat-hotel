const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require("./package.json");

const mode = process.env.NODE_ENV || 'development';

const alias = {
  '@': path.resolve('./src'),
  '~': path.resolve('./')
};

const extensions = ['.mjs', '.js', '.ts', 'tsx', '.json', '.html', '.webpack.js', '.web.js', '.css'];
const packageName = pkg.name.replace("uds-", "");

const outputDirectory = "build";

module.exports = {
  mode,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, outputDirectory),
    libraryTarget: "umd",
    publicPath: `/static/${packageName}/${pkg.version}/`,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
    hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
    hotUpdateMainFilename: ".hot/[hash].hot-update.json"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "typeof window": JSON.stringify("object")
    })
  ],
  resolve: {
    modules: ["node_modules", "src"],
    alias,
    extensions,
  },

  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|eot|wav|mp3)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: 'src/assets/globals.scss',
              sassOptions: {
                includePaths: [path.resolve(__dirname, "../src/")]
              }
            }
          }
        ]
      },
      {
        test: '/\.js?$/',
        loader: "babel-loader"
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ]
  }
};
