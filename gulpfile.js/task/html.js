// импорт пакетов
const { src, dest } = require("gulp");

// -- плагины --
const fileInclude = require("gulp-file-include");
const notify = require("gulp-notify");
const size = require("gulp-size");
const htmlmin = require("gulp-htmlmin");
const plumber = require("gulp-plumber");
const replace = require('gulp-replace');
const verNumber = require('gulp-version-number');
const webpHtmlNosvg = require('gulp-webp-html-nosvg');

// -- конфигурация --

// -- пути --
const path = require ("../config/path");

// -- параметры --
const app = require ("../config/app");

// -- функции --

// -- обработка HTML --
const html = () => {
  return src(path.html.src)
    .pipe(plumber(
      notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(fileInclude())
    .pipe(replace(/@img\//g,'img/'))
    .pipe(webpHtmlNosvg())
    .pipe(verNumber({
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': [
          'css',
          'js',
        ]
      },
      'output': {
        'file': 'version.json'
      }
    }))
    .pipe(size({title: "До сжатия"}))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({title: "После сжатия"}))
    .pipe(dest(path.html.dest));
}

// -- задача --
module.exports = html;
