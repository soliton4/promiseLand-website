(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "8688a61a5c6ba35a167afc1a20a2632c" })){ return promiseland._getModule("8688a61a5c6ba35a167afc1a20a2632c"); };
var PL$1 = (function(){
"use strict";

  ;
  return "01110000011100100110111101101101011010010111001101100101010011000110000101101110011001000010000000101101001000000110000100100000011101100110010101110010011110010010000001110000011100100110111101101101011010010111001101101001011011100110011100100000010011000110000101101110011001110111010101100001011001110110010100101110001000000110000101101011011000010011101000100000011101000110100001100101001000000101000001110010011011110110110101101001011100110110010100100000010011000110000101101110011001110111010101100001011001110110010100100000011000010110111001100100001000000110110101101111011100100110010100101110";
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
