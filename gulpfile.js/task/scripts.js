const { src, dest } = require("gulp");

// -- плагины --
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

// -- конфигурация --

// -- пути --
const path = require ("../config/path");

// -- параметры --
const app = require ("../config/app");

// -- модули --

// -- функции --

// -- обработка шрифтов --
const script = () => {
  return src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    path.scripts.src], { sourcemaps: true })
    .pipe(plumber(
      notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.scripts.dest, { sourcemaps: true }))
}

// -- задача --
module.exports = script;
