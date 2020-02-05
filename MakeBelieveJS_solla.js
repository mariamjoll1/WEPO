
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
    if (typeof arg == 'object') {
      arg = '<' + this.nodes[0].tagName + '>' + arg.data + '</' + this.nodes[0].tagName + '>'
    }
    this.nodes[0].insertAdjacentHTML('beforeend', arg)
    console.log(this.nodes[0]);
  }

  // section 10

  MakeBelieveElement.prototype.prepend = function(arg) {
    if (typeof arg == 'object') {
      arg = '<' + this.nodes[0].tagName + '>' + arg.data + '</' + this.nodes[0].tagName + '>'
    }
    this.nodes[0].insertAdjacentHTML('afterbegin', arg)
    console.log(this.nodes[0]);
  }

  // section 14

  

  function query(cssSelector) {
    // get items
    var items = document.querySelectorAll(cssSelector);
    return new MakeBelieveElement(items);
  }

  globalObj.__ = query;
})(window);


var classThird = __('.third');
classThird.append('<p>Testery</p>');
classThird.append(
  document.createElement('p')
  .appendChild(
    document.createTextNode('Im a text node')
  )
)
