
(function (globalObj) {
  function MakeBelieveElement(nodes) {
    // this is this instance of MakeBelieveElement
    // can be empty
    this.nodes = nodes;
  }

  MakeBelieveElement.prototype.getLength = function() {
    return this.nodes.length;
  }

  MakeBelieveElement.prototype.getTagNames = function() {
    var tagNames = [];
    for (var i = 0; i < this.nodes.length; i++) {
      var currentElement = this.nodes[i];
      tagNames.push(currentElement.tagName.toLowerCase());
    }
    return tagNames
  }

  MakeBelieveElement.prototype.parent = function() {
    var parentNodes = [];
    for (var i = 0; i < this.nodes.length; i++) {
      var currElement = this.nodes[i];
    }
  }

  // section 9

  MakeBelieveElement.prototype.append = function(arg) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (typeof arg == 'object') {
        arg = '<' + arg.tagName + '>' + arg.data + '</' + arg.tagName + '>'
      }
      this.nodes[i].insertAdjacentHTML('afterend', arg)
    }
  }

  // section 10

  MakeBelieveElement.prototype.prepend = function(arg) {
    console.log(arg.parentNode);
    for (var i = 0; i < this.nodes.length; i++) {
      if (typeof arg == 'object') {
        arg = arg.parentNode.outerHTML
      }
      this.nodes[i].insertAdjacentHTML('beforebegin', arg)
    }
  }

  // section 14
  MakeBelieveElement.prototype.toggleClass = function(arg) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].className == arg) {
        this.nodes[i].className = ""
      }
      else {
        this.nodes[i].className = arg
      }
    }
  }

  function query(cssSelector) {
    // get items
    var items = document.querySelectorAll(cssSelector);
    return new MakeBelieveElement(items);
  }

  globalObj.__ = query;
})(window);


var classThird = __('.item-1');

classThird.prepend('<p>Testery</p>');
__('p').prepend(
  document.createElement('p')
  .appendChild(
    document.createTextNode('Im a text node')
  )
)

__('p').toggleClass('SomeClass')
