module.exports = {
  htmlmin: {
    collapseWhitespace: true
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  },

  sass: {
    outputStyle: "expanded",
    importer: require('node-sass-tilde-importer')
  },

  autoprefixer: {
    grid: true,
    overrideBrowserlist: ["last 3 version"],
    cascade: true
  },

  imageMin: {
    progressive: true,
    svgoPlugins: [{ removeViewBox: false}],
    interlased: true,
    optimizationLevel: 3
  },

  webpack: {
    mode: "development",
    output: {
      filename: "main.min.js"
    }
  },

  webpCss: {
    webpClass:'.webp',
    noWebpClass: ".no-webp",
    replace_from:/\.(png|jpg|jpeg)/,
    replace_to:'.webp',
  }
}
