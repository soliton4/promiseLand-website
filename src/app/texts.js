(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "339617465004d969a596df4d2a0c03ed" })){ return promiseland._getModule("339617465004d969a596df4d2a0c03ed"); };
var PL$1 = (function(){
"use strict";

  ;
  return [
    "var result;\nreadFile().then(function(parRes){\n  result = parRes;\n  processFile(result);\n});", 
    "var result = *readFile();\nprocessFile(result);", 
    "userInput().then(function(doIt){\n  if (doIt){\n    var result;\n    readFile().then(function(parRes){\n      result = parRes;\n      processFile(result);\n    });\n  };\n});", 
    "if (*userInput()){\n  var result = *readFile();\n  processFile(result);\n};", 
    "function errorCatcher(e){\n  console.log(\"something went wrong: \" + e);\n};\nuserInput().then(function(doIt){\n  if (doIt){\n    var result;\n    readFile().then(function(parRes){\n      try{\n        result = parRes;\n        processFile(result);\n      }catch(e){\n        errorCatcher(e);\n      };\n    }, errorCatcher);\n  };\n}, errorCatcher);", 
    "try{\n  if (*userInput()){\n    var result = *readFile();\n    processFile(result);\n  };\n}catch(e){\n  console.log(\"something went wrong: \" + e);\n};", 
    "// U Wot M8?!", 
    "for(var i = 0; i < files.length; ++i){\n  try{\n    if (*userInput(files[i])){\n      var result = *readFile(files[i]);\n      processFile(result);\n    };\n  }catch(e){\n    console.log(\"something went wrong with file: \" + files[i] + \" \" + e);\n  };\n};"
  ];
  ;})();
;return PL$1;
};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
