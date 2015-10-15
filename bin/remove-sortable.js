#! /usr/bin/env node
var path = require("path");
var fs = require("fs");
var rimraf = require("rimraf");
var p = path.resolve(__dirname, "../jspm_packages/github/oribella");

fs.readdirSync(p).map(function(file) {
  return path.join(p, file);
}).filter(function(file) {
  return fs.statSync(file).isDirectory() &&
    file.split(".").length === 3 &&
    file.split("/").pop().indexOf("aurelia-sortable") !== -1;
}).forEach(function( folder ) {
    rimraf.sync(folder);
});
