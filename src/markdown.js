import {inject, noView, skipContentProcessing} from 'aurelia-framework';
import prism from 'prism';
import 'prism/themes/prism-okaidia.css!';
import marked from 'chjj/marked';

var extensions = {
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
  highlight: function(code, lang) {
    if (!prism.languages.hasOwnProperty(lang)) {
      // Default to markup.
      lang = extensions[lang] || 'markup';
    }

    return prism.highlight(code, prism.languages[lang]);
  }
});

@skipContentProcessing
@noView
@inject(Element)
export class Markdown {

  constructor(element){
    this.element = element;
  }

  attached() {
    this.element.innerHTML = marked(this.element.innerHTML.trim());
    var nodes = document.querySelectorAll( "code" );
    Array.prototype.slice.call(nodes).forEach(node => {
        var langClass = node.className.split(" ").filter(c => {
          return c.indexOf("language") >= 0;
        })[0]
        node.parentNode.classList.add(langClass);
    });
  }
}
