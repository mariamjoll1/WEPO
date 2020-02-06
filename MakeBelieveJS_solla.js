
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
        arg = arg.parentNode.outerHTML
      }
      this.nodes[i].insertAdjacentHTML('afterend', arg)
    }
  }

  // section 10

  MakeBelieveElement.prototype.prepend = function(arg) {
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

  // section 12

  function ajax(config) {
    // setting default value
    if (config.method == '') {
      config.method = 'GET';
    }

    // create xhttp request and open
    var xhttp = new XMLHttpRequest();
    xhttp.open(config.method, config.url);

    // setting req headers
    for (var i = 0; i < config.headers.length; i++) {
      xhttp.setRequestHeader(
        Object.keys(config.headers[i]), config.headers[i][Object.keys(config.headers[i])]
      );
    }

    // setting timeout
    xhttp.timeout = config.timeout * 1000;

    // how did it go?
    xhttp.onload = function () {
      config.beforeSend()
      if (xhttp.readyState == xhttp.DONE) {
        if ( Math.floor(xhttp.status/100) == 2 ) {
          config.success()
        }
        else (
          config.fail()
        )
      }
    }

      // send request
      xhttp.send(config.data)
  }

  function query(cssSelector) {
    // get items
    var items = document.querySelectorAll(cssSelector);
    return new MakeBelieveElement(items);
  }

  globalObj.__ = query;
  globalObj.__.ajax = ajax;
})(window);


var classThird = __('.item-1');

__.ajax({
  url: 'https://serene-island-81305.herokuapp.com/api/200',
  method: 'GET',
  timeout: 10,
  data: {},
  headers: [],
  success: function (resp) {
    console.log('SUCCESSS')
  },
  fail: function (error) {
    console.log('FAIL')
  },
  beforeSend: function (xhr) {
    console.log('BEFORESEND')
  }
});

__
