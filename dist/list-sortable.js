System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
  'use strict';

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
      ListSortable = (function () {
        function ListSortable(http) {
          _classCallCheck(this, _ListSortable);

          this.items = [];

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
          });

          this.http = http;
        }

        _createClass(ListSortable, [{
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

        var _ListSortable = ListSortable;
        ListSortable = inject(HttpClient)(ListSortable) || ListSortable;
        return ListSortable;
      })();

      _export('ListSortable', ListSortable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtc29ydGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQU1hLFlBQVk7Ozs7Ozs7O2lDQU5qQixNQUFNOzt1Q0FDTixVQUFVOzs7QUFLTCxrQkFBWTtBQUdaLGlCQUhBLFlBQVksQ0FHWCxJQUFJLEVBQUM7OztlQUZqQixLQUFLLEdBQUcsRUFBRTs7QUFHUixjQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ3ZCLGtCQUFNLENBQ0gsd0JBQXdCLEVBQUUsQ0FDMUIsV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUM7V0FDM0MsQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztxQkFYVSxZQUFZOztpQkFhZixvQkFBRTs7O0FBQ1IsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FDMUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxLQUFLO3FCQUFJLE1BQUssS0FBSyxHQUFHLEtBQUs7YUFBQSxDQUFDLENBQUM7V0FDdEM7OztpQkFFSSxpQkFBRyxFQUNQOzs7NEJBcEJVLFlBQVk7QUFBWixvQkFBWSxHQUR4QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sWUFBWSxLQUFaLFlBQVk7ZUFBWixZQUFZIiwiZmlsZSI6Imxpc3Qtc29ydGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgJ2ZldGNoJztcblxuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgTGlzdFNvcnRhYmxle1xuICBpdGVtcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGh0dHApe1xuICAgIGh0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XG4gICAgICBjb25maWdcbiAgICAgICAgLnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgICAgIC53aXRoQmFzZVVybCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS8nKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICBhY3RpdmF0ZSgpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZmV0Y2goJ3VzZXJzL2F1cmVsaWEvcmVwb3MnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVwb3MgPT4gdGhpcy5pdGVtcyA9IHJlcG9zKTtcbiAgfVxuXG4gIG1vdmVkKCkge1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
