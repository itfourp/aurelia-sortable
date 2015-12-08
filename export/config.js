System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-build": [
      "app",
      "app.html!github:systemjs/plugin-text@0.0.3",
      "flickr-sortable",
      "flickr-sortable.html!github:systemjs/plugin-text@0.0.3",
      "list-sortable",
      "list-sortable.html!github:systemjs/plugin-text@0.0.3",
      "main",
      "markdown",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3",
      "users",
      "users.html!github:systemjs/plugin-text@0.0.3"
    ],
    "aurelia": [
      "github:PrismJS/prism@master",
      "github:PrismJS/prism@master/prism",
      "github:chjj/marked@0.3.3",
      "github:chjj/marked@0.3.3/lib/marked",
      "github:components/jquery@2.1.4",
      "github:components/jquery@2.1.4/jquery",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "github:twbs/bootstrap@3.3.6",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3",
      "github:twbs/bootstrap@3.3.6/js/bootstrap",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.1/aurelia-animator-css",
      "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "npm:aurelia-binding@1.0.0-beta.1.0.2/aurelia-binding",
      "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "npm:aurelia-bootstrapper@1.0.0-beta.1/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.1",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.1/aurelia-fetch-client",
      "npm:aurelia-framework@1.0.0-beta.1.0.3",
      "npm:aurelia-framework@1.0.0-beta.1.0.3/aurelia-framework",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1/aurelia-history-browser",
      "npm:aurelia-history@1.0.0-beta.1",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history",
      "npm:aurelia-http-client@1.0.0-beta.1",
      "npm:aurelia-http-client@1.0.0-beta.1/aurelia-http-client",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1/aurelia-loader-default",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-beta.1",
      "npm:aurelia-logging-console@1.0.0-beta.1/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-pal-browser@1.0.0-beta.1",
      "npm:aurelia-pal-browser@1.0.0-beta.1/aurelia-pal-browser",
      "npm:aurelia-pal@1.0.0-beta.1",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1",
      "npm:aurelia-router@1.0.0-beta.1/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.1/aurelia-templating-binding",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/with",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/route-href",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/router-view",
      "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "npm:aurelia-templating@1.0.0-beta.1.0.1/aurelia-templating",
      "npm:core-js@1.2.6",
      "npm:core-js@1.2.6/client/shim.min",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser"
    ],
    "oribella": [
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "github:oribella/aurelia-sortable@0.4.0",
      "github:oribella/aurelia-sortable@0.4.0/auto-scroll",
      "github:oribella/aurelia-sortable@0.4.0/drag",
      "github:oribella/aurelia-sortable@0.4.0/index",
      "github:oribella/aurelia-sortable@0.4.0/sortable",
      "github:oribella/default-gestures@0.2.0",
      "github:oribella/default-gestures@0.2.0/index",
      "github:oribella/doubletap@0.2.0",
      "github:oribella/doubletap@0.2.0/index",
      "github:oribella/framework@0.2.0",
      "github:oribella/framework@0.2.0/engine",
      "github:oribella/framework@0.2.0/flows/flow",
      "github:oribella/framework@0.2.0/flows/mouse",
      "github:oribella/framework@0.2.0/flows/ms-pointer",
      "github:oribella/framework@0.2.0/flows/pointer",
      "github:oribella/framework@0.2.0/flows/touch",
      "github:oribella/framework@0.2.0/handle",
      "github:oribella/framework@0.2.0/index",
      "github:oribella/framework@0.2.0/oribella",
      "github:oribella/framework@0.2.0/point",
      "github:oribella/framework@0.2.0/registry",
      "github:oribella/framework@0.2.0/utils",
      "github:oribella/framework@0.2.0/validator",
      "github:oribella/longtap-swipe@0.2.0",
      "github:oribella/longtap-swipe@0.2.0/index",
      "github:oribella/longtap@0.2.0",
      "github:oribella/longtap@0.2.0/index",
      "github:oribella/pinch@0.2.0",
      "github:oribella/pinch@0.2.0/index",
      "github:oribella/rotate@0.2.0",
      "github:oribella/rotate@0.2.0/index",
      "github:oribella/swipe@0.2.0",
      "github:oribella/swipe@0.2.0/index",
      "github:oribella/swipe@0.2.0/swipe-data",
      "github:oribella/tap@0.2.0",
      "github:oribella/tap@0.2.0/index",
      "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "npm:aurelia-binding@1.0.0-beta.1.0.2/aurelia-binding",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-pal@1.0.0-beta.1",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1/aurelia-task-queue",
      "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "npm:aurelia-templating@1.0.0-beta.1.0.1/aurelia-templating",
      "npm:core-js@1.2.6",
      "npm:core-js@1.2.6/client/shim.min",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.3",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "chjj/marked": "github:chjj/marked@0.3.3",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.5.0",
    "oribella/aurelia-sortable": "github:oribella/aurelia-sortable@0.4.0",
    "prism": "github:PrismJS/prism@master",
    "text": "github:systemjs/plugin-text@0.0.3",
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
    "github:oribella/aurelia-sortable@0.4.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "oribella-default-gestures": "github:oribella/default-gestures@0.2.0"
    },
    "github:oribella/default-gestures@0.2.0": {
      "oribella-doubletap": "github:oribella/doubletap@0.2.0",
      "oribella-framework": "github:oribella/framework@0.2.0",
      "oribella-longtap": "github:oribella/longtap@0.2.0",
      "oribella-longtap-swipe": "github:oribella/longtap-swipe@0.2.0",
      "oribella-pinch": "github:oribella/pinch@0.2.0",
      "oribella-rotate": "github:oribella/rotate@0.2.0",
      "oribella-swipe": "github:oribella/swipe@0.2.0",
      "oribella-tap": "github:oribella/tap@0.2.0"
    },
    "github:oribella/doubletap@0.2.0": {
      "oribella-framework": "github:oribella/framework@0.2.0"
    },
    "github:oribella/longtap-swipe@0.2.0": {
      "oribella-framework": "github:oribella/framework@0.2.0"
    },
    "github:oribella/longtap@0.2.0": {
      "oribella-framework": "github:oribella/framework@0.2.0"
    },
    "github:oribella/pinch@0.2.0": {
      "oribella-framework": "github:oribella/framework@0.2.0"
    },
    "github:oribella/rotate@0.2.0": {
      "oribella-framework": "github:oribella/framework@0.2.0"
    },
    "github:oribella/swipe@0.2.0": {
      "oribella-framework": "github:oribella/framework@0.2.0"
    },
    "github:oribella/tap@0.2.0": {
      "oribella-framework": "github:oribella/framework@0.2.0"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.0.1": {
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-http-client@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
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
