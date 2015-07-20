#! /usr/bin/env node
var fs = require("fs-extra");
var path = require("path");

fs.outputFileSync(path.resolve(__dirname, "../deploy/.gitignore"), "node_modules\n.DS_STORE");
