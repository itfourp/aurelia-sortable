System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
  var inject, HttpClient, FlickrSortable;

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

      FlickrSortable = (function () {
        function FlickrSortable(http) {
          _classCallCheck(this, _FlickrSortable);

          this.heading = 'Flickr';
          this.images = [];
          this.url = '/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.flickr.com');
          });

          this.http = http;
        }

        var _FlickrSortable = FlickrSortable;

        _createClass(_FlickrSortable, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.fetch(this.url).then(function (response) {
              _this.images = response.content.items;
            });
          }
        }, {
          key: 'moved',
          value: function moved() {}
        }]);

        FlickrSortable = inject(HttpClient)(FlickrSortable) || FlickrSortable;
        return FlickrSortable;
      })();

      _export('FlickrSortable', FlickrSortable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci1zb3J0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzBCQUthLGNBQWM7Ozs7Ozs7O2lDQUxuQixNQUFNOzt1Q0FDTixVQUFVOzs7OztBQUlMLG9CQUFjO0FBS2QsaUJBTEEsY0FBYyxDQUtiLElBQUksRUFBQzs7O2VBSmpCLE9BQU8sR0FBRyxRQUFRO2VBQ2xCLE1BQU0sR0FBRyxFQUFFO2VBQ1gsR0FBRyxHQUFHLHlFQUF5RTs7QUFHN0UsY0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN2QixrQkFBTSxDQUNILHdCQUF3QixFQUFFLENBQzFCLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1dBQzFDLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7OEJBYlUsY0FBYzs7OztpQkFlakIsb0JBQUU7OztBQUNSLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEQsb0JBQUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3RDLENBQUMsQ0FBQztXQUNKOzs7aUJBRUksaUJBQUcsRUFDUDs7O0FBdEJVLHNCQUFjLEdBRDFCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixjQUFjLEtBQWQsY0FBYztlQUFkLGNBQWM7OztnQ0FBZCxjQUFjIiwiZmlsZSI6ImZsaWNrci1zb3J0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCAnZmV0Y2gnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgRmxpY2tyU29ydGFibGV7XG4gIGhlYWRpbmcgPSAnRmxpY2tyJztcbiAgaW1hZ2VzID0gW107XG4gIHVybCA9ICcvc2VydmljZXMvZmVlZHMvcGhvdG9zX3B1YmxpYy5nbmU/dGFncz1tb3VudGFpbiZ0YWdtb2RlPWFueSZmb3JtYXQ9anNvbic7XG5cbiAgY29uc3RydWN0b3IoaHR0cCl7XG4gICAgaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgIGNvbmZpZ1xuICAgICAgICAudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAgICAgLndpdGhCYXNlVXJsKCdodHRwczovL2FwaS5mbGlja3IuY29tJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmh0dHAgPSBodHRwO1xuICB9XG5cbiAgYWN0aXZhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKHRoaXMudXJsKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuaW1hZ2VzID0gcmVzcG9uc2UuY29udGVudC5pdGVtcztcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVkKCkge1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=