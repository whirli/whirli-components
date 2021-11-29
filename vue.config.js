// eslint-disable-next-line
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@whirli': path.resolve(__dirname, 'whirli'),
        '@whirli-components': path.resolve(__dirname, ''),
      },
    },
  },
};
