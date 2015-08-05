System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      'use strict';

      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'users'], name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'Vertical sortable list', name: 'Vertical sortable list', moduleId: 'list-sortable', nav: true, title: 'Vertical sortable list' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BR2EsR0FBRzs7Ozs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBVSxRQUFRLEVBQUUsT0FBTyxFQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxFQUNuSCxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyx3QkFBd0IsRUFBRSxDQUMxSSxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFUVSxHQUFHOzs7cUJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLmNzcyEnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKXtcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICd1c2VycyddLCAgICAgICAgIG5hbWU6ICd1c2VycycsICAgICAgICAgbW9kdWxlSWQ6ICd1c2VycycsICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTonR2l0aHViIFVzZXJzJyB9LFxuICAgICAgeyByb3V0ZTogJ1ZlcnRpY2FsIHNvcnRhYmxlIGxpc3QnLCBuYW1lOiAnVmVydGljYWwgc29ydGFibGUgbGlzdCcsIG1vZHVsZUlkOiAnbGlzdC1zb3J0YWJsZScsIG5hdjogdHJ1ZSwgdGl0bGU6J1ZlcnRpY2FsIHNvcnRhYmxlIGxpc3QnIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=