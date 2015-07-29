#! /usr/bin/env node
var shell = require("shelljs");

shell.cd("jspm_packages/github/oribella");
shell.exec("rm -rf aurelia-sortable@master");
shell.exec("ln -s ../../../../aurelia-sortable/dist/amd aurelia-sortable@master");
