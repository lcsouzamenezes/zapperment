const { resolve } = require("path");

module.exports = track =>
  `${resolve(__dirname, "../../../../../tracks", track)}.json`;