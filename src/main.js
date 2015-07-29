export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin("oribella-aurelia-sortable");

  aurelia.start().then(a => a.setRoot());
}
