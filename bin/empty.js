#! /usr/bin/env node
var fs = require("fs-extra");
var path = require("path");

fs.emptyDirSync(path.resolve(__dirname, "../deploy"));
