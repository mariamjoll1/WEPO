
(function (globalObj){

    function MakeBelieveElement(nodes) {

        this.nodes = nodes;
    }

    MakeBelieveElement.prototype.getLength = function() {
        return this.nodes.length;
    };

    MakeBelieveElement.prototype.getTagNames = function() {
        var tagNames = [];
        for (var i = 0; i < this.nodes.length; i++) {
            var currentElement = this.nodes[i];
            console.log(currentElement);
            tagNames.push(currentElement.tagName.toLowerCase());
        }
        return tagNames;
    }

    MakeBelieveElement.prototype.ancestryHelper = function(node, selector = null) {
        var parent = [];
        var currentElement = node;
        if(selector !== null){
            for (var i = 0; i < currentElement.length; i++) {
                if(currentElement[i].parentElement.matches(selector))
                    parent.push(currentElement[i].parentElement);
            }
        }
        else{
            for (var i = 0; i < currentElement.length; i++) {
                parent.push(currentElement[i].parentElement);
            }
        }
        return parent;
    }

    MakeBelieveElement.prototype.parent = function(selector = null) {
        var parent = this.ancestryHelper(this.nodes, selector);

        return parent;
    }

    MakeBelieveElement.prototype.grandParent = function(selector = null) {
        var parent = this.ancestryHelper(this.nodes);
        var grandParent = this.ancestryHelper(parent, selector);
        
        return grandParent;
    }

   /* MakeBelieveElement.prototype.ancestor = function(selector) {
        var parents = this.ancestryHelper(this.nodes);
        var grandparents = this.ancestryHelper(parents);
        var ancestors = [];
        var currentElement = [];

        for (var i = 0; i < grandparents.length; i++){
            while(currentElement.parentElement !== null){
                
            }
        }



    }*/

    function query(cssSelector) {
        var items = document.querySelectorAll(cssSelector);
        return new MakeBelieveElement(items);
    }

    globalObj.__ = query;
    

})(window);

var paragraphs = __('p').getLength();
var divs = __('.item');
var parentThing = __('div').parent();
var grandParents = __('.test2').grandParent();



