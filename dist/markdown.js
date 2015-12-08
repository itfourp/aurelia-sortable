System.register(['aurelia-framework', 'prism', 'chjj/marked'], function (_export) {
  'use strict';

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

        _createClass(Markdown, [{
          key: 'attached',
          value: function attached() {
            this.element.innerHTML = marked(this.element.innerHTML.trim());
            var nodes = document.querySelectorAll("code");
            Array.prototype.slice.call(nodes).forEach(function (node) {
              var langClass = node.className.split(" ").filter(function (c) {
                return c.indexOf("language") >= 0;
              })[0];
              node.parentNode.classList.add(langClass);
            });
          }
        }]);

        var _Markdown = Markdown;
        Markdown = inject(Element)(Markdown) || Markdown;
        Markdown = noView(Markdown) || Markdown;
        Markdown = processContent(false)(Markdown) || Markdown;
        return Markdown;
      })();

      _export('Markdown', Markdown);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxREFJSSxVQUFVLEVBMEJELFFBQVE7Ozs7Ozs7O2lDQTlCYixNQUFNO2lDQUFFLE1BQU07eUNBQUUsY0FBYzs7Ozs7OztBQUlsQyxnQkFBVSxHQUFHO0FBQ2YsVUFBRSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxFQUFFLEtBQUs7QUFDWCxZQUFJLEVBQUUsS0FBSztBQUNYLFlBQUksRUFBRSxRQUFRO0FBQ2QsV0FBRyxFQUFFLFFBQVE7QUFDYixXQUFHLEVBQUUsUUFBUTtPQUNkOztBQUVELFlBQU0sQ0FBQyxVQUFVLENBQUM7QUFDaEIsV0FBRyxFQUFFLElBQUk7QUFDVCxnQkFBUSxFQUFFLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUMvQixrQkFBVSxFQUFFLFdBQVc7QUFDdkIsaUJBQVMsRUFBRSxtQkFBUyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzlCLGNBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUV6QyxnQkFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUM7V0FDckM7O0FBRUQsaUJBQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO09BQ0YsQ0FBQyxDQUFDOztBQUtVLGNBQVE7QUFFUixpQkFGQSxRQUFRLENBRVAsT0FBTyxFQUFDOzs7QUFDbEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUpVLFFBQVE7O2lCQU1YLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELGdCQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUUsTUFBTSxDQUFFLENBQUM7QUFDaEQsaUJBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDOUMsa0JBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNwRCx1QkFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDTCxrQkFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVDLENBQUMsQ0FBQztXQUNKOzs7d0JBZlUsUUFBUTtBQUFSLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBRnBCLE1BQU0sQ0FFTSxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBSHBCLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FHVCxRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVEiLCJmaWxlIjoibWFya2Rvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgbm9WaWV3LCBwcm9jZXNzQ29udGVudH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHByaXNtIGZyb20gJ3ByaXNtJztcbmltcG9ydCBtYXJrZWQgZnJvbSAnY2hqai9tYXJrZWQnO1xuXG52YXIgZXh0ZW5zaW9ucyA9IHtcbiAganM6ICdqYXZhc2NyaXB0JyxcbiAgc2NzczogJ2NzcycsXG4gIHNhc3M6ICdjc3MnLFxuICBodG1sOiAnbWFya3VwJyxcbiAgc3ZnOiAnbWFya3VwJyxcbiAgeG1sOiAnbWFya3VwJ1xufTtcblxubWFya2VkLnNldE9wdGlvbnMoe1xuICBnZm06IHRydWUsXG4gIHJlbmRlcmVyOiBuZXcgbWFya2VkLlJlbmRlcmVyKCksXG4gIGxhbmdQcmVmaXg6ICdsYW5ndWFnZS0nLFxuICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGNvZGUsIGxhbmcpIHtcbiAgICBpZiAoIXByaXNtLmxhbmd1YWdlcy5oYXNPd25Qcm9wZXJ0eShsYW5nKSkge1xuICAgICAgLy8gRGVmYXVsdCB0byBtYXJrdXAuXG4gICAgICBsYW5nID0gZXh0ZW5zaW9uc1tsYW5nXSB8fCAnbWFya3VwJztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpc20uaGlnaGxpZ2h0KGNvZGUsIHByaXNtLmxhbmd1YWdlc1tsYW5nXSk7XG4gIH1cbn0pO1xuXG5AcHJvY2Vzc0NvbnRlbnQoZmFsc2UpXG5Abm9WaWV3XG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgTWFya2Rvd24ge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gbWFya2VkKHRoaXMuZWxlbWVudC5pbm5lckhUTUwudHJpbSgpKTtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBcImNvZGVcIiApO1xuICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVzKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICB2YXIgbGFuZ0NsYXNzID0gbm9kZS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLmZpbHRlcihjID0+IHtcbiAgICAgICAgICByZXR1cm4gYy5pbmRleE9mKFwibGFuZ3VhZ2VcIikgPj0gMDtcbiAgICAgICAgfSlbMF1cbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQobGFuZ0NsYXNzKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
