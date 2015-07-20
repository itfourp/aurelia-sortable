#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("gh-pages-empty && gh-pages-copy && gh-pages-gitignore && gh-pages-update-sortable && gh-pages-bundle");
