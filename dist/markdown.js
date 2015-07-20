System.register(['aurelia-framework', 'prism', 'prism/themes/prism-okaidia.css!', 'chjj/marked'], function (_export) {
  var inject, noView, skipContentProcessing, prism, marked, extensions, Markdown;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      noView = _aureliaFramework.noView;
      skipContentProcessing = _aureliaFramework.skipContentProcessing;
    }, function (_prism) {
      prism = _prism['default'];
    }, function (_prismThemesPrismOkaidiaCss) {}, function (_chjjMarked) {
      marked = _chjjMarked['default'];
    }],
    execute: function () {
      'use strict';

      extensions = {
        js: 'javascript',
        scss: 'css',
        sass: 'css',
        html: 'markup',
        svg: 'markup',
        xml: 'markup'
      };

      marked.setOptions({
        gfm: true,
        renderer: new marked.Renderer(),
        langPrefix: 'language-',
        highlight: function highlight(code, lang) {
          if (!prism.languages.hasOwnProperty(lang)) {
            lang = extensions[lang] || 'markup';
          }

          return prism.highlight(code, prism.languages[lang]);
        }
      });

      Markdown = (function () {
        function Markdown(element) {
          _classCallCheck(this, _Markdown);

          this.element = element;
        }

        var _Markdown = Markdown;

        _createClass(_Markdown, [{
          key: 'attached',
          value: function attached() {
            this.element.innerHTML = marked(this.element.innerHTML.trim());
            var nodes = document.querySelectorAll('code');
            Array.prototype.slice.call(nodes).forEach(function (node) {
              var langClass = node.className.split(' ').filter(function (c) {
                return c.indexOf('language') >= 0;
              })[0];
              node.parentNode.classList.add(langClass);
            });
          }
        }]);

        Markdown = inject(Element)(Markdown) || Markdown;
        Markdown = noView(Markdown) || Markdown;
        Markdown = skipContentProcessing(Markdown) || Markdown;
        return Markdown;
      })();

      _export('Markdown', Markdown);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7NERBS0ksVUFBVSxFQTBCRCxRQUFROzs7Ozs7OztpQ0EvQmIsTUFBTTtpQ0FBRSxNQUFNO2dEQUFFLHFCQUFxQjs7Ozs7Ozs7O0FBS3pDLGdCQUFVLEdBQUc7QUFDZixVQUFFLEVBQUUsWUFBWTtBQUNoQixZQUFJLEVBQUUsS0FBSztBQUNYLFlBQUksRUFBRSxLQUFLO0FBQ1gsWUFBSSxFQUFFLFFBQVE7QUFDZCxXQUFHLEVBQUUsUUFBUTtBQUNiLFdBQUcsRUFBRSxRQUFRO09BQ2Q7O0FBRUQsWUFBTSxDQUFDLFVBQVUsQ0FBQztBQUNoQixXQUFHLEVBQUUsSUFBSTtBQUNULGdCQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQy9CLGtCQUFVLEVBQUUsV0FBVztBQUN2QixpQkFBUyxFQUFFLG1CQUFTLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDOUIsY0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBRXpDLGdCQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQztXQUNyQzs7QUFFRCxpQkFBTyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckQ7T0FDRixDQUFDLENBQUM7O0FBS1UsY0FBUTtBQUVSLGlCQUZBLFFBQVEsQ0FFUCxPQUFPLEVBQUM7OztBQUNsQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7d0JBSlUsUUFBUTs7OztpQkFNWCxvQkFBRztBQUNULGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMvRCxnQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFFLE1BQU0sQ0FBRSxDQUFDO0FBQ2hELGlCQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQzlDLGtCQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDcEQsdUJBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7ZUFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ0wsa0JBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QyxDQUFDLENBQUM7V0FDSjs7O0FBZlUsZ0JBQVEsR0FEcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FGcEIsTUFBTSxDQUVNLFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FIcEIscUJBQXFCLENBR1QsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJtYXJrZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBub1ZpZXcsIHNraXBDb250ZW50UHJvY2Vzc2luZ30gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHByaXNtIGZyb20gJ3ByaXNtJztcbmltcG9ydCAncHJpc20vdGhlbWVzL3ByaXNtLW9rYWlkaWEuY3NzISc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ2NoamovbWFya2VkJztcblxudmFyIGV4dGVuc2lvbnMgPSB7XG4gIGpzOiAnamF2YXNjcmlwdCcsXG4gIHNjc3M6ICdjc3MnLFxuICBzYXNzOiAnY3NzJyxcbiAgaHRtbDogJ21hcmt1cCcsXG4gIHN2ZzogJ21hcmt1cCcsXG4gIHhtbDogJ21hcmt1cCdcbn07XG5cbm1hcmtlZC5zZXRPcHRpb25zKHtcbiAgZ2ZtOiB0cnVlLFxuICByZW5kZXJlcjogbmV3IG1hcmtlZC5SZW5kZXJlcigpLFxuICBsYW5nUHJlZml4OiAnbGFuZ3VhZ2UtJyxcbiAgaGlnaGxpZ2h0OiBmdW5jdGlvbihjb2RlLCBsYW5nKSB7XG4gICAgaWYgKCFwcmlzbS5sYW5ndWFnZXMuaGFzT3duUHJvcGVydHkobGFuZykpIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gbWFya3VwLlxuICAgICAgbGFuZyA9IGV4dGVuc2lvbnNbbGFuZ10gfHwgJ21hcmt1cCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaXNtLmhpZ2hsaWdodChjb2RlLCBwcmlzbS5sYW5ndWFnZXNbbGFuZ10pO1xuICB9XG59KTtcblxuQHNraXBDb250ZW50UHJvY2Vzc2luZ1xuQG5vVmlld1xuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KXtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IG1hcmtlZCh0aGlzLmVsZW1lbnQuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggXCJjb2RlXCIgKTtcbiAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlcykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgdmFyIGxhbmdDbGFzcyA9IG5vZGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5maWx0ZXIoYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGMuaW5kZXhPZihcImxhbmd1YWdlXCIpID49IDA7XG4gICAgICAgIH0pWzBdXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKGxhbmdDbGFzcyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==