//>>built
define("sol/moduleLoader/universal",[],function(){return{headStr:function(){return'(function(){\n  var defineFun;\n  var requireFun;\n  \n  if (typeof exports \x3d\x3d "object" \x26\x26 typeof module \x3d\x3d "object"){ // CommonJS\n    requireFun \x3d function(modulesAr, callback){\n      var i \x3d 0;\n      var l \x3d modulesAr.length;\n      var args \x3d [];\n      for (i; i \x3c l; ++i){\n        args.push(require(modulesAr[i]));\n      };\n      callback.apply(callback, args);\n    };\n    defineFun \x3d function(requireAr, callback){\n      requireFun(requireAr, function(){\n        module.exports \x3d callback.apply(callback, arguments);\n      });\n    };\n    \n  }else if (typeof define \x3d\x3d "function" \x26\x26 define.amd){ // AMD\n    var _define \x3d define;\n    requireFun \x3d require;\n    \n    defineFun \x3d function(par1, par2){\n      if (par1 instanceof Array){\n        par1.unshift("require");\n      }else{\n        par2 \x3d par1;\n        par1 \x3d ["require"];\n      };\n      _define(par1, function(){\n        requireFun \x3d arguments[0];\n        var args \x3d [];\n        for (var i \x3d 1; i \x3c arguments.length; ++i){\n          args.push(arguments[i]);\n        };\n        return par2.apply(par2, args);\n      });\n    };\n    requireFun \x3d require;\n    \n  }else{ // Plain browser env\n    alert("not working out!");\n    \n  };\n  \n  defineFun([], function(){\n'},
footStr:function(){return"\n  });\n})();"},createModule:function(b){var a=this.headStr();b["export"]?(a+=b.code,a=a+";\n"+("return "+b["export"]+";\n")):a+="return "+b.code;return a+=this.footStr()}}});
//# sourceMappingURL=universal.js.map