import webpack from "webpack";
import path from "path";
import MinifyPlugin from 'babel-minify-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },
      {test: /\.json$/, loader: "json-loader"},
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {cacheDirectory: true}
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      "fetch": "imports-loader?this=>global!exports?global.fetch!whatwg-fetch"
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 5,
        output: {
          comments: false,
          beautify: false,
        },
        warnings: false
      }
    })
  ],

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    singlePost: ["./js/single-post"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  externals:  [/^vendor\/.+\.js$/]
};
