const { watch, series, parallel } = require("gulp");

// -- плагины --
const browserSync = require("browser-sync").create();
const clear = require("./task/clear");
const html = require("./task/html");
const font = require("./task/fonts");
const script = require("./task/scripts");
const images = require("./task/images");
const styles = require("./task/sass");

// -- конфигурация --

// -- пути --
const path = require("./config/path");

// -- сервер --
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
      notify: false,
      online: true
    }
  })
}

// -- наблюдатель --
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.font.watch, font).on("all", browserSync.reload);
  watch(path.css.watch, styles).on("all", browserSync.reload);
  watch(path.img.watch, images).on("all", browserSync.reload);
  watch(path.scripts.watch, script).on("all", browserSync.reload);
}

// -- задачи --
exports.html = html;
exports.clear = clear;
exports.watcher = watcher;
exports.font = font;
exports.script = script;
exports.styles = styles;
exports.images = images;

// -- сборка проекта --
exports.default = series(
  clear,
  parallel(
  html,
  font,
  script,
  images,
  styles
  ),
  parallel(
  watcher,
  server
  )
);
