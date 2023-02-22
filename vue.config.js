const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  // outputDir: '../backend/src/main/resources/static',
  // devServer: {
  //   proxy: 'http://localhost:8080'
  // }
});
