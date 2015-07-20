#! /usr/bin/env node
var fs = require("fs-extra");
var path = require("path");
var pluginPath = path.resolve(__dirname, "../deploy/jspm_packages/github/oribella/aurelia-sortable@master");

fs.removeSync(pluginPath);
fs.copySync(path.resolve(__dirname, "../../aurelia-sortable/dist/amd"), pluginPath, { clobber: true });
