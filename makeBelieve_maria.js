(function (globalObj) {
    function MakeBelieveElement(nodes){

        this.nodes = nodes;
}

MakeBelieveElement.prototype.getLength = function(){
    return this.nodes.length;
};

MakeBelieveElement.prototype.getTagNames = function() {
    var tagNames = [];
    for (var i = 0; i < this.nodes.length; i++) {
        var currentElement = this.nodes[i];
        tagNames.push(currentElement.tagName.toLowerCase());
    }
    return tagNames;
}





// Problem 11
MakeBelieveElement.prototype.delete = function() {
    for (var i = 0; i < this.nodes.length; i++) {
    this.nodes[i].remove()
    }
}

// Problem 2
function query(cssSelector) {
    return new MakeBelieveElement(document.querySelectorAll(cssSelector));
}

globalObj.__ = query;

})(window);

var paragraphs = __('p');
var divs = __('.item');
console.log(paragraphs.getLength());
console.log(paragraphs.getTagNames());
console.log(divs.getLength());
console.log(divs.getTagNames());

__('.item-1 p').delete();