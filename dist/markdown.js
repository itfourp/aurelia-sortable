System.register(['aurelia-framework', 'prism', 'chjj/marked'], function (_export) {
  var inject, noView, processContent, prism, marked, extensions, Markdown;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      noView = _aureliaFramework.noView;
      processContent = _aureliaFramework.processContent;
    }, function (_prism) {
      prism = _prism['default'];
    }, function (_chjjMarked) {
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
        Markdown = processContent(false)(Markdown) || Markdown;
        return Markdown;
      })();

      _export('Markdown', Markdown);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cURBSUksVUFBVSxFQTBCRCxRQUFROzs7Ozs7OztpQ0E5QmIsTUFBTTtpQ0FBRSxNQUFNO3lDQUFFLGNBQWM7Ozs7Ozs7OztBQUlsQyxnQkFBVSxHQUFHO0FBQ2YsVUFBRSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxFQUFFLEtBQUs7QUFDWCxZQUFJLEVBQUUsS0FBSztBQUNYLFlBQUksRUFBRSxRQUFRO0FBQ2QsV0FBRyxFQUFFLFFBQVE7QUFDYixXQUFHLEVBQUUsUUFBUTtPQUNkOztBQUVELFlBQU0sQ0FBQyxVQUFVLENBQUM7QUFDaEIsV0FBRyxFQUFFLElBQUk7QUFDVCxnQkFBUSxFQUFFLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUMvQixrQkFBVSxFQUFFLFdBQVc7QUFDdkIsaUJBQVMsRUFBRSxtQkFBUyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzlCLGNBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUV6QyxnQkFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUM7V0FDckM7O0FBRUQsaUJBQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO09BQ0YsQ0FBQyxDQUFDOztBQUtVLGNBQVE7QUFFUixpQkFGQSxRQUFRLENBRVAsT0FBTyxFQUFDOzs7QUFDbEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3dCQUpVLFFBQVE7Ozs7aUJBTVgsb0JBQUc7QUFDVCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDL0QsZ0JBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBRSxNQUFNLENBQUUsQ0FBQztBQUNoRCxpQkFBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUM5QyxrQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ3BELHVCQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2VBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNMLGtCQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUMsQ0FBQyxDQUFDO1dBQ0o7OztBQWZVLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBRnBCLE1BQU0sQ0FFTSxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBSHBCLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FHVCxRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVE7OzswQkFBUixRQUFRIiwiZmlsZSI6Im1hcmtkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIG5vVmlldywgcHJvY2Vzc0NvbnRlbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBwcmlzbSBmcm9tICdwcmlzbSc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ2NoamovbWFya2VkJztcblxudmFyIGV4dGVuc2lvbnMgPSB7XG4gIGpzOiAnamF2YXNjcmlwdCcsXG4gIHNjc3M6ICdjc3MnLFxuICBzYXNzOiAnY3NzJyxcbiAgaHRtbDogJ21hcmt1cCcsXG4gIHN2ZzogJ21hcmt1cCcsXG4gIHhtbDogJ21hcmt1cCdcbn07XG5cbm1hcmtlZC5zZXRPcHRpb25zKHtcbiAgZ2ZtOiB0cnVlLFxuICByZW5kZXJlcjogbmV3IG1hcmtlZC5SZW5kZXJlcigpLFxuICBsYW5nUHJlZml4OiAnbGFuZ3VhZ2UtJyxcbiAgaGlnaGxpZ2h0OiBmdW5jdGlvbihjb2RlLCBsYW5nKSB7XG4gICAgaWYgKCFwcmlzbS5sYW5ndWFnZXMuaGFzT3duUHJvcGVydHkobGFuZykpIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gbWFya3VwLlxuICAgICAgbGFuZyA9IGV4dGVuc2lvbnNbbGFuZ10gfHwgJ21hcmt1cCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaXNtLmhpZ2hsaWdodChjb2RlLCBwcmlzbS5sYW5ndWFnZXNbbGFuZ10pO1xuICB9XG59KTtcblxuQHByb2Nlc3NDb250ZW50KGZhbHNlKVxuQG5vVmlld1xuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KXtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IG1hcmtlZCh0aGlzLmVsZW1lbnQuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggXCJjb2RlXCIgKTtcbiAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlcykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgdmFyIGxhbmdDbGFzcyA9IG5vZGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5maWx0ZXIoYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGMuaW5kZXhPZihcImxhbmd1YWdlXCIpID49IDA7XG4gICAgICAgIH0pWzBdXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKGxhbmdDbGFzcyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==