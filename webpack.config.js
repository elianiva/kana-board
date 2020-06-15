const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "src", "index.html"),
  filename: "./index.html",
  inject: "body"
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: [".js"] },
  plugins: [HtmlWebpackConfig],
  // optimization: { splitChunks: { chunks: "all" } },
  output: { path: path.resolve(__dirname, "build") },
  devServer: {
    inline: true,
    contentBase: "./build",
    port: 3000
  }
}
