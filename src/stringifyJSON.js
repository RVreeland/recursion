// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var str = "";

    if (typeof obj !== "object") {
      typeof obj === "string" ? str += '"' + obj + '"': str += obj;
    } else if (Array.isArray(obj)) {
      str += "["
      for (var i = 0; i<obj.length; i++) {
        str += stringifyJSON(obj[i]) + ",";
      }
      if (str.charAt(str.length-1) !== "[") { str = str.slice(0, str.length-1) };
      str += "]";
    }  else if (obj === null) { 
      str += "null";
    } else {
      str += "{";
      for (key in obj) {
        if (typeof obj[key] !== "function" && obj[key] !== undefined && typeof obj[key] !== "symbol") {
          str += '"' + key + '":';
          str += stringifyJSON(obj[key]) + ",";
        }
      }
      if (str.charAt(str.length-1) !== "{") { str = str.slice(0, str.length-1) };
      str += "}";
    }
    return str;
};
