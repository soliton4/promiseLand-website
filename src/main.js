(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "6d18baaec0a09c5947d4c036a7955133" })){ return promiseland._getModule("6d18baaec0a09c5947d4c036a7955133"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "6d18baaec0a09c5947d4c036a7955133", "module": PL$1, promising: true });
var PL$14/*__dirname*/;try{PL$14/*__dirname*/ = __dirname;}catch(e){};
var PL$17/*console*/;try{PL$17/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$9/*Fw*/;
var PL$11/*clientDirs*/;
var PL$12/*dirs*/;
var PL$13/*i*/;
var PL$15/*fw*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  var PL$5 = new __Promise();
  var PL$6 = new __Promise();
  var PL$7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.resolve(e); }; }; };
  var PL$8 = function(e){ PL$6.resolve(e); };
  PL$7/*try catch*/(function(){
    __requireFun("promiseland-webframework").then(PL$7/*try catch*/(function(PL$10){PL$9/*Fw*/ = PL$10;
    PL$11/*clientDirs*/ = [
      "app", 
      "codemirror4", 
      "dojo", 
      "dijit", 
      "sol", 
      "style", 
      "image"
    ];
    PL$12/*dirs*/ = [
      
    ];
    PL$13/*i*/ = 0;
    for(PL$13/*i*/ = 0;(PL$13/*i*/ < PL$11/*clientDirs*/["length"]);++PL$13/*i*/){{
      PL$12/*dirs*/["push"]({
        "client": ("/" + PL$11/*clientDirs*/[PL$13/*i*/]),
        "server": (((PL$14/*__dirname*/ + "/") + PL$11/*clientDirs*/[PL$13/*i*/]) + "/")
      });}};
    ;
    PL$15/*fw*/ = new PL$9/*Fw*/({
      "load": "app/wrapper-built",
      "dirs": PL$12/*dirs*/,
      "css": [
        "style/style2.css"
      ]
    });
    PL$15/*fw*/["listen"](4011);
    PL$5.resolve();}), PL$8);
  ;})();
  PL$6.then(PL$3/*promiseland exception catcher*/(function(PL$16/*e*/){
    PL$17/*console*/["log"](PL$16/*e*/);
    PL$5.resolve();;}));
  PL$5.then(PL$3/*promiseland exception catcher*/(function(){;
  ;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/)
})();return PL$1;
})();
;;
return PL$1};
  
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
