// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var hasClass = [];
  var allNodes = document.childNodes;

  var findClasses = function(nodes) {
    for (var i = 0; i<nodes.length; i++) {
      var currentNode = nodes[i];
      var classes = currentNode.classList;
      if (classes !== undefined && classes.length !== 0) {
        for (var j = 0; j<classes.length; j++) {
            if (classes[j] === className) {
              hasClass.push(currentNode);
            }
        }
      }
      if (currentNode.childNodes.length !== 0) {findClasses(currentNode.childNodes);}
    }
    return hasClass;
  }

  return findClasses(allNodes);
};
