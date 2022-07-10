// -- плагины --
const del = require("del");

// -- конфигурация --

// -- пути --
const path = require ("../config/path");

// -- Удаление, очистка конечной директории --
const clear = () => {
  return del(path.root);
}

// -- задача --
module.exports = clear;
