
(function (globalObj){
//2.
    function query(cssSelector) {
        var items = document.querySelectorAll(cssSelector);
        return new MakeBelieveElement(items);
    }
//1.
    globalObj.__ = query;
//3.
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
//Used in 4/5/6
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
//4.
    MakeBelieveElement.prototype.parent = function(selector = null) {
        var parent = this.ancestryHelper(this.nodes, selector);
        if(parent[0] == null){
            return [];
        }
        else{
            return new MakeBelieveElement(parent);
        }
    }
//5.
    MakeBelieveElement.prototype.grandParent = function(selector = null) {
        var parent = this.ancestryHelper(this.nodes);
        var grandParent = this.ancestryHelper(parent, selector);
<<<<<<< HEAD

        return grandParent;
=======
        
        if(grandParent[0] == null){
            return [];
        }
        else{
            return new MakeBelieveElement(grandParent);
        }
>>>>>>> 8a5004ee3301454ecdfefd30b7b0952176d0eaf9
    }
//6.
    MakeBelieveElement.prototype.ancestor = function(selector) {
        var parents = this.ancestryHelper(this.nodes);
        var grandParents = this.ancestryHelper(parents);
        var ancestors = null;
        var currentElement = [];

        for (var i = 0; i < grandParents.length; i++){
            currentElement = grandParents[i];
            while(currentElement.parentElement !== null){
<<<<<<< HEAD

=======
                if(currentElement.parentElement.matches(selector)){
                    if(ancestors == null){
                        return new MakeBelieveElement(currentElement.parentElement);
                    }
                }
                currentElement = currentElement.parentElement;
>>>>>>> 8a5004ee3301454ecdfefd30b7b0952176d0eaf9
            }
        }
        return [];
    }
//7.
    MakeBelieveElement.prototype.onClick = function(theFunction) {
        for(var i = 0; i < this.nodes.length; i++){
            this.nodes[i].addEventListener('click', theFunction, false);
        }
    }
//8.
    MakeBelieveElement.prototype.insertText = function(string) {
        for(var i = 0; i < this.nodes.length; i++){
            this.nodes[i].innerHTML = string;
        }
    }
<<<<<<< HEAD

    globalObj.__ = query;

=======
    

})(window);

/*var paragraphs = __('p').getLength();
var divs = __('.item');
var parentThing = __('div').parent();
var grandParents = __('.test2').grandParent();
var ancestor = __('.test2').ancestor('.item');
__('body').parent().onClick(function (evt) {
    console.log('clicked');
});
console.log(parentThing);
console.log(__('p'));
__('p').insertText('Bobby, Bobby');*/
>>>>>>> 8a5004ee3301454ecdfefd30b7b0952176d0eaf9

})(window);

// var paragraphs = __('p').getLength();
// var divs = __('.item');
// var parentThing = __('div').parent();
// var grandParents = __('.test2').grandParent();
