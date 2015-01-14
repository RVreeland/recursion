// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var petsObj = {
    Num: 9,
    Str: "hi",
    Bool: false,
    Rose: {
        hasPets: true,
        cats: ["Joaquin"],
        dogs: []
    },
    Mom: {
        hasPets: true,
        cats: ["William", "Extra Fancy", "Ultimate Precious", "Gray Cat"],
        dogs: ["Maggie", "Suzie", "Eliza"],
        donkeys: ["Milo", "Mama", "Mary"]
    }
};

var petsArray = [{cat:"William"}, "Extra Fancy", "Ultimate Precious", "Gray Cat"];

var stringifyJSON = function(obj) {
    var str = "";

    if (typeof obj !== "object") {
      return typeof obj === "string" ? str += '"' + obj + '",' : str += obj + ",";
    } else if (Array.isArray(obj)) {
      str += "["
      for (var i = 0; i<obj.length; i++) {
        str += strFunc(obj[i]);
      }
      str += "], ";
    } else {
      str += "{";
      for (key in obj) {
        str += '"' + key + '":';
        str += strFunc(obj[key]);
      }
      str += "},";
    }
    return str;
};

