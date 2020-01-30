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

  function query(cssSelector) {
    // get items
    var items = document.querySelectorAll(cssSelector);
    return new MakeBelieveElement(items);
  }

  globalObj.__ = query;
})(window);

var paragraphs = __('p');
console.log(paragraphs);
