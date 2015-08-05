var aurelia = require("aurelia-cli");

 aurelia.command("bundle", {
   js: {
     "dist/app-bundle": {
       modules: [
         "*",
         "aurelia-bootstrapper",
         "aurelia-fetch-client",
         "aurelia-router",
         "aurelia-animator-css",
         "github:aurelia/templating-binding@0.13.2",
         "github:aurelia/templating-resources@0.13.4",
         "github:aurelia/templating-router@0.14.1",
         "github:aurelia/loader-default@0.9.3",
         "github:aurelia/history-browser@0.6.2",
         "github:oribella/aurelia-sortable@master",
         "github:oribella/default-gestures@master"
       ],
       options: {
         inject: true,
         minify: true
       }
     }
   },
   template: {
     "dist/app-bundle": {
       pattern: "dist/*.html",
       options: {
         inject: true
       }
     }
   }
 });
