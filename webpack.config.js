const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    host: "localhost",
    port: 5000,
    historyApiFallback: {
      index: "/index.html",
    },
    hot: true,
    liveReload: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  output: {
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        navigation:
          "navigation@https://navigation-bar-mf.vercel.app/remoteEntry.js",
        homePage: "homePage@https://home-mf-phi.vercel.app/remoteEntry.js",
        aboutPage: "aboutPage@https://about-page-mf.vercel.app/remoteEntry.js",
        userForm: "userForm@https://user-form-mf.vercel.app/remoteEntry.js",
        userDetails:
          "userDetails@https://user-details-mf.vercel.app/remoteEntry.js",
        login: "login@https://login-mf.vercel.app/remoteEntry.js",
        signup: "signup@https://signup-mf.vercel.app/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^19.0.0",
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^7.6.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Host App",
    }),
  ],
};
