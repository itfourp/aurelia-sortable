System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
  var inject, HttpClient, ListSortable;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      'use strict';

      ListSortable = (function () {
        function ListSortable(http) {
          _classCallCheck(this, _ListSortable);

          this.items = [];

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
          });

          this.http = http;
        }

        var _ListSortable = ListSortable;

        _createClass(_ListSortable, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.fetch('users/aurelia/repos').then(function (response) {
              return response.json();
            }).then(function (repos) {
              return _this.items = repos;
            });
          }
        }, {
          key: 'moved',
          value: function moved() {}
        }]);

        ListSortable = inject(HttpClient)(ListSortable) || ListSortable;
        return ListSortable;
      })();

      _export('ListSortable', ListSortable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtc29ydGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjswQkFNYSxZQUFZOzs7Ozs7OztpQ0FOakIsTUFBTTs7dUNBQ04sVUFBVTs7Ozs7QUFLTCxrQkFBWTtBQUdaLGlCQUhBLFlBQVksQ0FHWCxJQUFJLEVBQUM7OztlQUZqQixLQUFLLEdBQUcsRUFBRTs7QUFHUixjQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ3ZCLGtCQUFNLENBQ0gsd0JBQXdCLEVBQUUsQ0FDMUIsV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUM7V0FDM0MsQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs0QkFYVSxZQUFZOzs7O2lCQWFmLG9CQUFFOzs7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUMxQyxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLEtBQUs7cUJBQUksTUFBSyxLQUFLLEdBQUcsS0FBSzthQUFBLENBQUMsQ0FBQztXQUN0Qzs7O2lCQUVJLGlCQUFHLEVBQ1A7OztBQXBCVSxvQkFBWSxHQUR4QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sWUFBWSxLQUFaLFlBQVk7ZUFBWixZQUFZOzs7OEJBQVosWUFBWSIsImZpbGUiOiJsaXN0LXNvcnRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0ICdmZXRjaCc7XG5cblxuQGluamVjdChIdHRwQ2xpZW50KVxuZXhwb3J0IGNsYXNzIExpc3RTb3J0YWJsZXtcbiAgaXRlbXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihodHRwKXtcbiAgICBodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgICAgY29uZmlnXG4gICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmh0dHAgPSBodHRwO1xuICB9XG5cbiAgYWN0aXZhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCd1c2Vycy9hdXJlbGlhL3JlcG9zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcG9zID0+IHRoaXMuaXRlbXMgPSByZXBvcyk7XG4gIH1cblxuICBtb3ZlZCgpIHtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9