export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'flickr'], name: 'flickr', moduleId: 'flickr-sortable', nav: true, title: 'Flickr' },
      { route: 'Vertical sortable list', name: 'Vertical sortable list', moduleId: 'list-sortable', nav: true, title:'Vertical sortable list' }
    ]);

    this.router = router;
  }
}
