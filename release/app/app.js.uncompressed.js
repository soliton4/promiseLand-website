(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
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
      _define("app/app", par1, function(){
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
  
  defineFun(["promiseland"], function(promiseland){ var __require = requireFun;
  
  var __Promise = promiseland.Promise;
  var __modulePromise = new __Promise();
  var classSystem = promiseland.classSystem; 
  var __requireFun = function(parModule){
    var returnPromise = new __Promise();
    try{__require([parModule], function(m){
    if (promiseland.isPromiseLandPromisingModule(m)){
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
    }else{
      returnPromise.resolve(m);
    };
    });
    }catch(e){returnPromise.reject(e);};
  return returnPromise.promise;};
  var __classSystem = promiseland.classSystem;
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "df0dddb28a47a5076f63575269083ec9" })){ return promiseland._getModule("df0dddb28a47a5076f63575269083ec9"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "df0dddb28a47a5076f63575269083ec9", "module": _V1, promising: true });
var _V14/*node*/;try{_V14/*node*/ = node;}catch(e){};
var _V16/*Infinity*/;try{_V16/*Infinity*/ = Infinity;}catch(e){};
var _V18/*type:var*/ = __classSystem.getBuiltinType("var");
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*ReadMore*/;
var _V7/*query*/;
var _V9/*nl*/;
var _V10/*CodeMirror*/;
var _V12/*plMode*/;
_V3(function(){__requireFun("./wgt/ReadMore").then(_V3(function(_V6){_V5/*ReadMore*/ = _V6;
__requireFun("dojo/query").then(_V3(function(_V8){_V7/*query*/ = _V8;
_V9/*nl*/ = _V7/*query*/(".promiseLandCode");
__requireFun("codemirror4/lib/codemirror").then(_V3(function(_V11){_V10/*CodeMirror*/ = _V11;
__requireFun("codemirror4/mode/promiseland/promiseland").then(_V3(function(_V13){_V12/*plMode*/ = _V13;
_V9/*nl*/["forEach"](function(_V14/*node*/){
var _V15/*cm*/;
_V15/*cm*/ = _V10/*CodeMirror*/["fromTextArea"](_V14/*node*/, {"mode": "text/promiseland",
"lineNumbers": true,
"viewportMargin": _V16/*Infinity*/});
});;
_V9/*nl*/ = _V7/*query*/(".readMore");;
_V9/*nl*/["forEach"](function(_V14/*node*/){
var _V17/*w*/;
_V17/*w*/ = new _V5/*ReadMore*/({}, _V14/*node*/);
});;
_V1.resolve( {}); return _V1;
_V1.resolve(); return;;
}));}));}));}));})();
return _V1;
})();
;
return _V1});
})();