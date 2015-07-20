#! /usr/bin/env node
var shell = require("shelljs");

shell.cd("deploy");
shell.exec("aurelia bundle --force");
