import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'users'],         name: 'users',         moduleId: 'users',         nav: true, title:'Github Users' },
      { route: 'Vertical sortable list', name: 'Vertical sortable list', moduleId: 'list-sortable', nav: true, title:'Vertical sortable list' }
    ]);

    this.router = router;
  }
}
