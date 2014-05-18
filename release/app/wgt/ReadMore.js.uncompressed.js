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
      _define("app/wgt/ReadMore", par1, function(){
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
if (promiseland._hasModule({ hashStr: "d3a1f03029e3c223181f7d562ccbf52c" })){ return promiseland._getModule("d3a1f03029e3c223181f7d562ccbf52c"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "d3a1f03029e3c223181f7d562ccbf52c", "module": _V1, promising: true });
var _V20/*node*/;try{_V20/*node*/ = node;}catch(e){};
var _V26/*type:var*/ = __classSystem.getBuiltinType("var");
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*declare*/;
var _V7/*_Wgt*/;
var _V9/*_wgt*/;
var _V10/*query*/;
var _V12/*domClass*/;
var _V14/*domConstruct*/;
var _V16/*Button*/;
_V3(function(){__requireFun("dojo/_base/declare").then(_V3(function(_V6){_V5/*declare*/ = _V6;
__requireFun("dijit/_WidgetBase").then(_V3(function(_V8){_V7/*_Wgt*/ = _V8;
_V9/*_wgt*/ = new _V7/*_Wgt*/();
__requireFun("dojo/query").then(_V3(function(_V11){_V10/*query*/ = _V11;
__requireFun("dojo/dom-class").then(_V3(function(_V13){_V12/*domClass*/ = _V13;
__requireFun("dojo/dom-construct").then(_V3(function(_V15){_V14/*domConstruct*/ = _V15;
__requireFun("dijit/form/Button").then(_V3(function(_V17){_V16/*Button*/ = _V17;
_V1.resolve( _V5/*declare*/([_V7/*_Wgt*/], {"buildRendering": function(){
var _V19/*nl*/;
var _V18/*arguments*/ = arguments;
_V9/*_wgt*/["buildRendering"]["apply"](this, _V18/*arguments*/);;
_V19/*nl*/ = _V10/*query*/(".more", this["domNode"]);
_V19/*nl*/["forEach"](function(_V20/*node*/){
var _V21/*flate*/;
var _V22/*hidden*/;
var _V23/*btnConstruct*/;
var _V24/*btn1*/;
var _V25/*btn2*/;
_V21/*flate*/ = _V14/*domConstruct*/["create"]("div", {"class": "opener"});
_V12/*domClass*/["add"](_V21/*flate*/, "hidden");;
_V14/*domConstruct*/["place"](_V21/*flate*/, _V20/*node*/, "before");;
_V14/*domConstruct*/["place"](_V20/*node*/, _V21/*flate*/);;
_V22/*hidden*/ = true;
_V23/*btnConstruct*/ = {"label": "read more ...",
"class": "moreBtn",
"onClick": function(){
if(_V22/*hidden*/){
_V12/*domClass*/["remove"](_V21/*flate*/, "hidden");;
_V24/*btn1*/["set"]("label", "read less");;
_V25/*btn2*/["set"]("label", "read less");;

}else{
_V12/*domClass*/["add"](_V21/*flate*/, "hidden");;
_V24/*btn1*/["set"]("label", "read more ...");;
_V25/*btn2*/["set"]("label", "read more ...");;
};
;
_V22/*hidden*/ = !_V22/*hidden*/;;
}};
_V24/*btn1*/ = new _V16/*Button*/(_V23/*btnConstruct*/);
_V25/*btn2*/ = new _V16/*Button*/(_V23/*btnConstruct*/);
_V24/*btn1*/["placeAt"](_V21/*flate*/, "before");;
_V25/*btn2*/["placeAt"](_V21/*flate*/);;
});;
}})); return _V1;
_V1.resolve(); return;;
}));}));}));}));}));}));})();
return _V1;
})();
;
return _V1});
})();