System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, FlickrSortable;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      FlickrSortable = (function () {
        function FlickrSortable(http) {
          _classCallCheck(this, _FlickrSortable);

          this.heading = 'Flickr';
          this.images = [];
          this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

          this.http = http;
        }

        _createClass(FlickrSortable, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.jsonp(this.url).then(function (response) {
              _this.images = response.content.items;
            });
          }
        }, {
          key: 'moved',
          value: function moved() {}
        }]);

        var _FlickrSortable = FlickrSortable;
        FlickrSortable = inject(HttpClient)(FlickrSortable) || FlickrSortable;
        return FlickrSortable;
      })();

      _export('FlickrSortable', FlickrSortable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci1zb3J0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBSWEsY0FBYzs7Ozs7Ozs7aUNBSm5CLE1BQU07O3NDQUNOLFVBQVU7OztBQUdMLG9CQUFjO0FBS2QsaUJBTEEsY0FBYyxDQUtiLElBQUksRUFBQzs7O2VBSmpCLE9BQU8sR0FBRyxRQUFRO2VBQ2xCLE1BQU0sR0FBRyxFQUFFO2VBQ1gsR0FBRyxHQUFHLDhGQUE4Rjs7QUFHbEcsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQVBVLGNBQWM7O2lCQVNqQixvQkFBRTs7O0FBQ1IsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoRCxvQkFBSyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFSSxpQkFBRyxFQUNQOzs7OEJBaEJVLGNBQWM7QUFBZCxzQkFBYyxHQUQxQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sY0FBYyxLQUFkLGNBQWM7ZUFBZCxjQUFjIiwiZmlsZSI6ImZsaWNrci1zb3J0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgRmxpY2tyU29ydGFibGV7XG4gIGhlYWRpbmcgPSAnRmxpY2tyJztcbiAgaW1hZ2VzID0gW107XG4gIHVybCA9ICdodHRwOi8vYXBpLmZsaWNrci5jb20vc2VydmljZXMvZmVlZHMvcGhvdG9zX3B1YmxpYy5nbmU/dGFncz1tb3VudGFpbiZ0YWdtb2RlPWFueSZmb3JtYXQ9anNvbic7XG5cbiAgY29uc3RydWN0b3IoaHR0cCl7XG4gICAgdGhpcy5odHRwID0gaHR0cDtcbiAgfVxuXG4gIGFjdGl2YXRlKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5qc29ucCh0aGlzLnVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLmltYWdlcyA9IHJlc3BvbnNlLmNvbnRlbnQuaXRlbXM7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlZCgpIHtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
