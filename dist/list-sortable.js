System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, HttpClient, ListSortable;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      'use strict';

      ListSortable = (function () {
        function ListSortable(http) {
          _classCallCheck(this, _ListSortable);

          this.items = [];
          this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

          this.http = http;
        }

        var _ListSortable = ListSortable;

        _createClass(_ListSortable, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.jsonp(this.url).then(function (response) {
              _this.items = response.content.items;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtc29ydGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjswQkFJYSxZQUFZOzs7Ozs7OztpQ0FKakIsTUFBTTs7c0NBQ04sVUFBVTs7Ozs7QUFHTCxrQkFBWTtBQUlaLGlCQUpBLFlBQVksQ0FJWCxJQUFJLEVBQUM7OztlQUhqQixLQUFLLEdBQUcsRUFBRTtlQUNWLEdBQUcsR0FBRyw4RkFBOEY7O0FBR2xHLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs0QkFOVSxZQUFZOzs7O2lCQVFmLG9CQUFFOzs7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hELG9CQUFLLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNyQyxDQUFDLENBQUM7V0FDSjs7O2lCQUVJLGlCQUFHLEVBQ1A7OztBQWZVLG9CQUFZLEdBRHhCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixZQUFZLEtBQVosWUFBWTtlQUFaLFlBQVk7Ozs4QkFBWixZQUFZIiwiZmlsZSI6Imxpc3Qtc29ydGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcblxuQGluamVjdChIdHRwQ2xpZW50KVxuZXhwb3J0IGNsYXNzIExpc3RTb3J0YWJsZXtcbiAgaXRlbXMgPSBbXTtcbiAgdXJsID0gJ2h0dHA6Ly9hcGkuZmxpY2tyLmNvbS9zZXJ2aWNlcy9mZWVkcy9waG90b3NfcHVibGljLmduZT90YWdzPW1vdW50YWluJnRhZ21vZGU9YW55JmZvcm1hdD1qc29uJztcblxuICBjb25zdHJ1Y3RvcihodHRwKXtcbiAgICB0aGlzLmh0dHAgPSBodHRwO1xuICB9XG5cbiAgYWN0aXZhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmpzb25wKHRoaXMudXJsKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZS5jb250ZW50Lml0ZW1zO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZWQoKSB7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==