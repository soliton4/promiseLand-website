(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "52f5a9077563c159ba5f4d93557d1a9f" })){ return promiseland._getModule("52f5a9077563c159ba5f4d93557d1a9f"); };
var PL$1 = (function(){
"use strict";

  ;
  return "function(){\n  mainTask = new Promise();\n  \n  // helper functions to prevent the code from completely blowing up\n  function resolveWithCleanup(data, extrastep){\n    try{\n      neccessaryCleanup().then(function(){\n        if (extrastep){\n          try{\n            extraCleanup().then(function(){\n              mainTask.resolve(data);\n            }, function(reason){\n              mainTask.reject(reason);\n            });\n          }catch(e){\n            mainTask.reject(e);\n          };\n        }else{\n          mainTask.resolve(data);\n        };\n      }, function(reason){\n        mainTask.reject(reason);\n      });\n    }catch(e){\n      mainTask.reject(e);\n    };\n  };\n  function rejectWithCleanup(reason, extrastep){\n    try{\n      neccessaryCleanup().then(function(){\n        if (extrastep){\n          try{\n            extraCleanup().then(function(){\n              mainTask.reject(reason);\n            }, function(reason){\n              mainTask.reject(reason);\n            });\n          }catch(e){\n            mainTask.reject(e);\n          };\n        }else{\n          mainTask.reject(reason);\n        };\n      }, function(reason){\n        mainTask.reject(reason);\n      });\n    }catch(e){\n      mainTask.reject(e);\n    };\n  };\n  \n  // the main logic\n  getUserInteractionPromise().then(function(userInput){\n\n    if (userInput == \"read File\"){\n      fs.readFile(\"filename\", function(err, fileRes){\n        try{\n          if (err){\n            rejectWithCleanup(err);\n            return;\n          };\n          myDatabase.getDataByFileContent(fileRes).then(function(data){\n            try{\n              data = checkDataIntegrity(data);\n              resolveWithCleanup(data);\n            }catch(e){\n              rejectWithCleanup(e);\n            };\n          }, function(dbReason){\n            rejectWithCleanup(dbReason);\n          });\n        }catch(e){\n          rejectWithCleanup(e);\n        };\n      });\n\n    }else if (userInput == \"read Url\"){\n      someExtraInitialization().then(function(){\n        ajax.get(\"someurl\").then(function(ajaxData){\n          try{\n            myDatabase.getDataByUrlContent(ajaxData).then(function(data){\n              try{\n                data = checkDataIntegrity(data);\n                resolveWithCleanup(data, true); // extra cleanup neccessary from now on\n              }catch(e){\n                rejectWithCleanup(e, true);\n              };\n            }, function(dbReason){\n              rejectWithCleanup(dbReason, true);\n            });\n          }catch(e){\n            rejectWithCleanup(e, true);\n          };\n        }, function(reason){\n          rejectWithCleanup(reason, true); \n        });\n      }, function(reason){\n        rejectWithCleanup(reason, true); // extra cleanup neccessary\n      });\n\n    }else{\n      rejectWithCleanup(\"invalid input\");\n    };\n\n  }, function(){\n    // cancel\n    rejectWithCleanup(\"user breakup\");\n  });\n  return mainTask;\n};";
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
