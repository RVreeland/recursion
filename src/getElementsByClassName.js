// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var hasClass = [];
  var bodyNodes = document.body.childNodes;

  var findClasses = function(nodes) {
    var foundClasses = [];
    for (var i = 0; i<nodes.length; i++) {
      var classes = nodes[i].classList;
      if (classes !== undefined && classes.length !== 0) {
        for (var j = 0; j<classes.length; j++) {
            if (classes[j] === className) {
              alert("found");
              hasClass.push(nodes[i]);
              alert(hasClass);
            }
        }
      }
      if (nodes[i].childNodes.length !== 0) {findClasses(nodes[i].childNodes);}
    }
    return hasClass;
  }

  results = findClasses(bodyNodes);
  return results;
};
