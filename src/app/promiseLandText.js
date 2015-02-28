(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "e175565f3dcc50437cd77af7288975d3" })){ return promiseland._getModule("e175565f3dcc50437cd77af7288975d3"); };
var PL$1 = (function(){
"use strict";

  ;
  return "function(){\n  var result;\n  var error;\n  var extraCleanup;\n  try{\n    // access async results with the * operator\n    var userInput = *getUserInteractionPromise();\n    if (userInput == \"read File\"){\n      // promise adapter for error first callback interfaces\n      var cb = new promiseland.CallbackErrorFirst();\n      fs.readFile(\"filename\", cb);\n      var data = *myDatabase.getDataByFileContent(*cb.promise);\n      result = checkDataIntegrity(data);\n\n    }else if (userInput == \"read Url\"){\n      extraCleanup = true;\n      *someExtraInitialization();\n      var data = *myDatabase.getDataByUrlContent(*ajax.get(\"someurl\"));\n      result = checkDataIntegrity(data);\n\n    }else{\n      throw \"invalid input\";\n    };\n    \n  }catch(e){\n    // whenever a promise is rejected or a error is thrown we land here;\n    error = e;\n  };\n  // cleanup\n  *neccessaryCleanup();\n  if (extraCleanup){\n    *extraCleanup();\n  };\n  if (error){\n    throw error;\n  };\n  return result;\n};";
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
