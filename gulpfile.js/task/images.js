const { src, dest } = require("gulp");

// -- плагины --
const webp = require("gulp-webp");
const newLocal = require("gulp-imagemin");
const imageMin = newLocal;
const newer = require("gulp-newer");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");

// -- конфигурация --

// -- пути --
const path = require ("../config/path");

// -- параметры --
const app = require ("../config/app");

// -- обработка изображений --
const images = () => {
  return src(path.img.src)
  .pipe(plumber(
    notify.onError({
      title: "IMAGES",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(newer(path.img.dest))
  .pipe(webp())
  .pipe(dest(path.img.dest))
  .pipe(src(path.img.src))
  .pipe(newer(path.img.dest))
  .pipe(imageMin(app.imageMin))
  .pipe(dest(path.img.dest))
  .pipe(src(path.img.src))
  .pipe(dest(path.img.dest))
}

// -- задача --
module.exports = images;
