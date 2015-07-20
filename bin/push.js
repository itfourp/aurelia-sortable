#! /usr/bin/env node
var shell = require("shelljs");

shell.cd("deploy");
shell.exec("git init");
shell.exec("git remote add origin https://github.com/oribella/aurelia-sortable.git");
shell.exec("git add . && git commit -m 'Deploy to gh-pages'");
shell.exec("git push -f origin master:gh-pages");
