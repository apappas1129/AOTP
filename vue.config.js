module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/style/main.scss";
        `,
      },
    },
  },
};
