const pathSrc = "./src";
const pathDest = "./public";

module.exports = {

  root: pathDest,

// -- пути для функции - html --
  html: {
    src: `${pathSrc}/html/*.html`,
    watch: `${pathSrc}/html/**/*.html`,
    dest: pathDest
  },

// -- пути для функции - css --
  css: {
    scss: `${pathSrc}/styles/scss/*.scss`,
    watch: `${pathSrc}/styles/**/*.*`,
    dest: `${pathDest}/css/`
},
// -- пути для функции - scripts --
  scripts: {
    src: `${pathSrc}/scripts/*.js`,
    watch: `${pathSrc}/scripts/**/*.js`,
    dest: `${pathDest}/js/`,
},
// -- пути для функции - img --
  img: {
    src: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`,
    watch: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`,
    dest: `${pathDest}/img`
  },

// -- пути для функции - fonts --
  font: {
    src: `${pathSrc}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    watch: `${pathSrc}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    dest: `${pathDest}/fonts`
  }
}
