const { src, dest } = require("gulp");

// -- плагины --
const sass = require('gulp-sass')(require('sass'));
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cssMedia = require('gulp-group-css-media-queries');
const cleanCss = require('gulp-clean-css');
const webpCss = require('gulp-webpcss');

// -- конфигурация --

// -- пути --
const path = require ("../config/path");

// -- параметры --
const app = require ("../config/app");

// -- обработка стилей --
const styles = () => {
  return src(path.css.scss, { sourcemaps: true })
  .pipe(plumber(
    notify.onError({
      title: "SCSS",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(sass(app.sass))
  .pipe(replace(/@img\//g,'../img/'))
  .pipe(replace(/@fonts\//g,'../fonts/'))
  .pipe(dest(path.css.dest, { sourcemaps: true }))
  .pipe(cssMedia())
  .pipe(webpCss(app.webpCss))
  .pipe(autoprefixer(app.autoprefixer))
  .pipe(dest(path.css.dest, { sourcemaps: true }))
  .pipe(cleanCss())
  .pipe(rename({
    extname: ".min.css"
  }))
  .pipe(dest(path.css.dest, { sourcemaps: true }));
}

// -- задача --
module.exports = styles;
