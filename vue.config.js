// eslint-disable-next-line
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@whirli-local': path.resolve(__dirname, 'whirli'),
        '@whirli-components': path.resolve(__dirname, 'src'),
        '@composition': path.resolve(__dirname, 'node_modules/vue'),
      },
    },
  },
};
