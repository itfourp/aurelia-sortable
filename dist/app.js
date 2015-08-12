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
            config.map([{ route: ['', 'flickr'], name: 'flickr', moduleId: 'flickr-sortable', nav: true, title: 'Flickr' }, { route: 'Vertical sortable list', name: 'Vertical sortable list', moduleId: 'list-sortable', nav: true, title: 'Vertical sortable list' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BR2EsR0FBRzs7Ozs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQ2xHLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLHdCQUF3QixFQUFFLENBQzFJLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQVRVLEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAuY3NzISc7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFsnJywgJ2ZsaWNrciddLCBuYW1lOiAnZmxpY2tyJywgbW9kdWxlSWQ6ICdmbGlja3Itc29ydGFibGUnLCBuYXY6IHRydWUsIHRpdGxlOiAnRmxpY2tyJyB9LFxuICAgICAgeyByb3V0ZTogJ1ZlcnRpY2FsIHNvcnRhYmxlIGxpc3QnLCBuYW1lOiAnVmVydGljYWwgc29ydGFibGUgbGlzdCcsIG1vZHVsZUlkOiAnbGlzdC1zb3J0YWJsZScsIG5hdjogdHJ1ZSwgdGl0bGU6J1ZlcnRpY2FsIHNvcnRhYmxlIGxpc3QnIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=