System.register(['aurelia-framework', 'prism', 'prism/themes/prism-okaidia.css!', 'chjj/marked'], function (_export) {
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
        Markdown = processContent(false)(Markdown) || Markdown;
        return Markdown;
      })();

      _export('Markdown', Markdown);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cURBS0ksVUFBVSxFQTBCRCxRQUFROzs7Ozs7OztpQ0EvQmIsTUFBTTtpQ0FBRSxNQUFNO3lDQUFFLGNBQWM7Ozs7Ozs7OztBQUtsQyxnQkFBVSxHQUFHO0FBQ2YsVUFBRSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxFQUFFLEtBQUs7QUFDWCxZQUFJLEVBQUUsS0FBSztBQUNYLFlBQUksRUFBRSxRQUFRO0FBQ2QsV0FBRyxFQUFFLFFBQVE7QUFDYixXQUFHLEVBQUUsUUFBUTtPQUNkOztBQUVELFlBQU0sQ0FBQyxVQUFVLENBQUM7QUFDaEIsV0FBRyxFQUFFLElBQUk7QUFDVCxnQkFBUSxFQUFFLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUMvQixrQkFBVSxFQUFFLFdBQVc7QUFDdkIsaUJBQVMsRUFBRSxtQkFBUyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzlCLGNBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUV6QyxnQkFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUM7V0FDckM7O0FBRUQsaUJBQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO09BQ0YsQ0FBQyxDQUFDOztBQUtVLGNBQVE7QUFFUixpQkFGQSxRQUFRLENBRVAsT0FBTyxFQUFDOzs7QUFDbEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3dCQUpVLFFBQVE7Ozs7aUJBTVgsb0JBQUc7QUFDVCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDL0QsZ0JBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBRSxNQUFNLENBQUUsQ0FBQztBQUNoRCxpQkFBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUM5QyxrQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ3BELHVCQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2VBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNMLGtCQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUMsQ0FBQyxDQUFDO1dBQ0o7OztBQWZVLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBRnBCLE1BQU0sQ0FFTSxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBSHBCLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FHVCxRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVE7OzswQkFBUixRQUFRIiwiZmlsZSI6Im1hcmtkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIG5vVmlldywgcHJvY2Vzc0NvbnRlbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBwcmlzbSBmcm9tICdwcmlzbSc7XG5pbXBvcnQgJ3ByaXNtL3RoZW1lcy9wcmlzbS1va2FpZGlhLmNzcyEnO1xuaW1wb3J0IG1hcmtlZCBmcm9tICdjaGpqL21hcmtlZCc7XG5cbnZhciBleHRlbnNpb25zID0ge1xuICBqczogJ2phdmFzY3JpcHQnLFxuICBzY3NzOiAnY3NzJyxcbiAgc2FzczogJ2NzcycsXG4gIGh0bWw6ICdtYXJrdXAnLFxuICBzdmc6ICdtYXJrdXAnLFxuICB4bWw6ICdtYXJrdXAnXG59O1xuXG5tYXJrZWQuc2V0T3B0aW9ucyh7XG4gIGdmbTogdHJ1ZSxcbiAgcmVuZGVyZXI6IG5ldyBtYXJrZWQuUmVuZGVyZXIoKSxcbiAgbGFuZ1ByZWZpeDogJ2xhbmd1YWdlLScsXG4gIGhpZ2hsaWdodDogZnVuY3Rpb24oY29kZSwgbGFuZykge1xuICAgIGlmICghcHJpc20ubGFuZ3VhZ2VzLmhhc093blByb3BlcnR5KGxhbmcpKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIG1hcmt1cC5cbiAgICAgIGxhbmcgPSBleHRlbnNpb25zW2xhbmddIHx8ICdtYXJrdXAnO1xuICAgIH1cblxuICAgIHJldHVybiBwcmlzbS5oaWdobGlnaHQoY29kZSwgcHJpc20ubGFuZ3VhZ2VzW2xhbmddKTtcbiAgfVxufSk7XG5cbkBwcm9jZXNzQ29udGVudChmYWxzZSlcbkBub1ZpZXdcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBNYXJrZG93biB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCl7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBtYXJrZWQodGhpcy5lbGVtZW50LmlubmVySFRNTC50cmltKCkpO1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiY29kZVwiICk7XG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZXMpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIHZhciBsYW5nQ2xhc3MgPSBub2RlLmNsYXNzTmFtZS5zcGxpdChcIiBcIikuZmlsdGVyKGMgPT4ge1xuICAgICAgICAgIHJldHVybiBjLmluZGV4T2YoXCJsYW5ndWFnZVwiKSA+PSAwO1xuICAgICAgICB9KVswXVxuICAgICAgICBub2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChsYW5nQ2xhc3MpO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=