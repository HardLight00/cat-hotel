const pkg = require("./package.json");
const webpack = require('./webpack.config');

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: webpack,
  config: {
    "cat-seasons.api.base.url": "/api",
    "steps.api.base.url": "/api",
    "feedbacks.api.base.url": "/api",
  },
  apps: {
    'cat-seasons': { name: 'cat-seasons', version: process.env.VERSION || pkg.version }
  },
  navigations: {
    'cat-seasons': "/cat-seasons",
  },
};
