#! /usr/bin/env node
var bundler = require('aurelia-bundler');
var bundles = require('../build/bundles.json');
var config = {
  force: true,
  packagePath: '.',
  bundles: bundles.bundles
};

var shell = require("shelljs");
shell.cd("deploy");

bundler.bundle(config);
