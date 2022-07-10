const { src, dest } = require("gulp");

// -- плагины --
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

// -- конфигурация --

// -- пути --
const path = require ("../config/path");

// -- параметры --
const app = require ("../config/app");

// -- функции --

// -- обработка шрифтов --
const font = () => {
  return src(path.font.src)
    .pipe(plumber(
      notify.onError({
        title: "Fonts",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest));
}

// -- задача --
module.exports = font;
