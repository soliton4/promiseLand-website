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
    if (promiseland._hasModule({ hashStr: "411d8f9709c925bf7cb81b0f70a5fa65" })){ return promiseland._getModule("411d8f9709c925bf7cb81b0f70a5fa65"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "411d8f9709c925bf7cb81b0f70a5fa65", "module": PL$1, promising: true });
var PL$17/*Infinity*/;try{PL$17/*Infinity*/ = Infinity;}catch(e){};
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
var PL$5/*ReadMore*/;
var PL$8/*query*/;
var PL$10/*nl*/;
var PL$11/*CodeMirror*/;
var PL$13/*plMode*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./wgt/ReadMore").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*ReadMore*/ = PL$6;
  __requireFun("./mouseTrack").then(PL$3/*promiseland exception catcher*/(function(PL$7){PL$7;
  __requireFun("dojo/query").then(PL$3/*promiseland exception catcher*/(function(PL$9){PL$8/*query*/ = PL$9;
  PL$10/*nl*/ = PL$8/*query*/(".promiseLandCode");
  __requireFun("codemirror4/lib/codemirror").then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$11/*CodeMirror*/ = PL$12;
  __requireFun("codemirror4/mode/promiseland/promiseland").then(PL$3/*promiseland exception catcher*/(function(PL$14){PL$13/*plMode*/ = PL$14;
  PL$10/*nl*/["forEach"]((function(PL$15/*node*/){
  
    ;
    var PL$16/*cm*/ = PL$11/*CodeMirror*/["fromTextArea"](PL$15/*node*/, {
      "mode": "text/promiseland",
      "lineNumbers": true,
      "viewportMargin": PL$17/*Infinity*/
    });
    ;
    ;}));
  PL$10/*nl*/ = PL$8/*query*/(".readMore");
  PL$10/*nl*/["forEach"]((function(PL$15/*node*/){
  
    ;
    var PL$18/*w*/ = new PL$5/*ReadMore*/({
      
    }, PL$15/*node*/);
    ;
    ;}));
  PL$1.resolve({
    
  }); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
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
