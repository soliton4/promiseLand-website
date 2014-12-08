(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

if (promiseland._hasModule({ hashStr: "e175565f3dcc50437cd77af7288975d3" })){ return promiseland._getModule("e175565f3dcc50437cd77af7288975d3"); };
var PL$1 = (function(){
"use strict";
;
return "function(){\n  var result;\n  var error;\n  var extraCleanup;\n  try{\n    // access async results with the * operator\n    var userInput = *getUserInteractionPromise();\n    if (userInput == \"read File\"){\n      // promise adapter for error first callback interfaces\n      var cb = new promiseland.CallbackErrorFirst();\n      fs.readFile(\"filename\", cb);\n      var data = *myDatabase.getDataByFileContent(*cb.promise);\n      result = checkDataIntegrity(data);\n\n    }else if (userInput == \"read Url\"){\n      extraCleanup = true;\n      *someExtraInitialization();\n      var data = *myDatabase.getDataByUrlContent(*ajax.get(\"someurl\"));\n      result = checkDataIntegrity(data);\n\n    }else{\n      throw \"invalid input\";\n    };\n    \n  }catch(e){\n    // whenever a promise is rejected or a error is thrown we land here;\n    error = e;\n  };\n  // cleanup\n  *neccessaryCleanup();\n  if (extraCleanup){\n    *extraCleanup();\n  };\n  if (error){\n    throw error;\n  };\n  return result;\n};";;
;
})();
;return PL$1;
});
})();