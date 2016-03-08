System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@2.1.3",
    "oribella-default-gestures": "npm:oribella-default-gestures@0.4.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.2.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@2.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oribella-default-gestures@0.4.0": {
      "oribella-doubletap": "npm:oribella-doubletap@0.4.0",
      "oribella-framework": "npm:oribella-framework@0.4.2",
      "oribella-longtap": "npm:oribella-longtap@0.4.0",
      "oribella-longtap-swipe": "npm:oribella-longtap-swipe@0.4.0",
      "oribella-pinch": "npm:oribella-pinch@0.4.0",
      "oribella-rotate": "npm:oribella-rotate@0.4.0",
      "oribella-swipe": "npm:oribella-swipe@0.4.1",
      "oribella-tap": "npm:oribella-tap@0.4.2"
    },
    "npm:oribella-doubletap@0.4.0": {
      "oribella-framework": "npm:oribella-framework@0.4.2"
    },
    "npm:oribella-longtap-swipe@0.4.0": {
      "oribella-framework": "npm:oribella-framework@0.4.2"
    },
    "npm:oribella-longtap@0.4.0": {
      "oribella-framework": "npm:oribella-framework@0.4.2"
    },
    "npm:oribella-pinch@0.4.0": {
      "oribella-framework": "npm:oribella-framework@0.4.2"
    },
    "npm:oribella-rotate@0.4.0": {
      "oribella-framework": "npm:oribella-framework@0.4.2"
    },
    "npm:oribella-swipe@0.4.1": {
      "oribella-framework": "npm:oribella-framework@0.4.2"
    },
    "npm:oribella-tap@0.4.2": {
      "oribella-framework": "npm:oribella-framework@0.4.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
