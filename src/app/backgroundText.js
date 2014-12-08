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

if (promiseland._hasModule({ hashStr: "8688a61a5c6ba35a167afc1a20a2632c" })){ return promiseland._getModule("8688a61a5c6ba35a167afc1a20a2632c"); };
var PL$1 = (function(){
"use strict";
;
return "01110000011100100110111101101101011010010111001101100101010011000110000101101110011001000010000000101101001000000110000100100000011101100110010101110010011110010010000001110000011100100110111101101101011010010111001101101001011011100110011100100000010011000110000101101110011001110111010101100001011001110110010100101110001000000110000101101011011000010011101000100000011101000110100001100101001000000101000001110010011011110110110101101001011100110110010100100000010011000110000101101110011001110111010101100001011001110110010100100000011000010110111001100100001000000110110101101111011100100110010100101110";;
;
})();
;return PL$1;
});
})();