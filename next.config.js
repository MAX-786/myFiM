const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");
const {parsed: myenv} = require("dotenv");

module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
});
