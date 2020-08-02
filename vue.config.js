"use strict";
const path = require("path");
const defaultSettings = require("./src/settings.js");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = defaultSettings.title;
const port = process.env.port || process.env.npm_config_port || 9527;

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false, // process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require("./mock/mock-server.js")
  },
  configureWebpack: {
    name: name, // 注入到index.html的title上
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  chainWebpack(config) {
    // preload，提升首屏速度
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial"
      }
    ]);

    // 页面太多，会进行没必要的请求
    config.plugins.delete("prefetch");

    // config.module
    //   .rule("svg")
    //   .exclude.add(resolve("src/icons"))
    //   .end();
    // config.module
    //   .rule("icons")
    //   .test(/\.svg$/)
    //   .include.add(resolve("src/icons"))
    //   .end()
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //     symbolId: "icon-[name]"
    //   })
    //   .end();
    config.set("externals", {
      swiper: "Swiper"
    });

    config.when(process.env.NODE_ENV !== "development", config => {
      // config.plugin("analyzer").use(new BundleAnalyzerPlugin());

      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end();

      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI",
            priority: 20, // 权重必须大于libs和app，否则将打包到libs或app中
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/
          },
          mock: {
            name: "chunk-mock",
            priority: 15,
            test: /[\\/]node_modules[\\/]mockjs/
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk("single");
    });
  }
};
