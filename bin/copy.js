#! /usr/bin/env node
var fs = require("fs-extra");
var path = require("path");

fs.copySync(path.resolve(__dirname, "../package.json"), path.resolve(__dirname, "../deploy/package.json"));
fs.copySync(path.resolve(__dirname, "../config.js"), path.resolve(__dirname, "../deploy/config.js"));
fs.copySync(path.resolve(__dirname, "../index.html"), path.resolve(__dirname, "../deploy/index.html"));
fs.copySync(path.resolve(__dirname, "../dist"), path.resolve(__dirname, "../deploy/dist"));
fs.copySync(path.resolve(__dirname, "../jspm_packages"), path.resolve(__dirname, "../deploy/jspm_packages"));
fs.copySync(path.resolve(__dirname, "../styles"), path.resolve(__dirname, "../deploy/styles"));
fs.copySync(path.resolve(__dirname, "../AureliaFile.js"), path.resolve(__dirname, "../deploy/AureliaFile.js"));

fs.copySync(path.resolve(__dirname, "../node_modules/aurelia-cli"), path.resolve(__dirname, "../deploy/node_modules/aureli-cli"));
