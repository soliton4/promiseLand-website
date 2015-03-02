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
    if (promiseland._hasModule({ hashStr: "d3a1f03029e3c223181f7d562ccbf52c" })){ return promiseland._getModule("d3a1f03029e3c223181f7d562ccbf52c"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "d3a1f03029e3c223181f7d562ccbf52c", "module": PL$1, promising: true });
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
var PL$5/*declare*/;
var PL$7/*_Wgt*/;
var PL$9/*_wgt*/;
var PL$10/*query*/;
var PL$12/*domClass*/;
var PL$14/*domConstruct*/;
var PL$16/*Button*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("dojo/_base/declare").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*declare*/ = PL$6;
  __requireFun("dijit/_WidgetBase").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*_Wgt*/ = PL$8;
  PL$9/*_wgt*/ = new PL$7/*_Wgt*/();
  __requireFun("dojo/query").then(PL$3/*promiseland exception catcher*/(function(PL$11){PL$10/*query*/ = PL$11;
  __requireFun("dojo/dom-class").then(PL$3/*promiseland exception catcher*/(function(PL$13){PL$12/*domClass*/ = PL$13;
  __requireFun("dojo/dom-construct").then(PL$3/*promiseland exception catcher*/(function(PL$15){PL$14/*domConstruct*/ = PL$15;
  __requireFun("dijit/form/Button").then(PL$3/*promiseland exception catcher*/(function(PL$17){PL$16/*Button*/ = PL$17;
  PL$1.resolve(PL$5/*declare*/([
    PL$7/*_Wgt*/
  ], {
    "buildRendering": (function(){
    var PL$18/*arguments*/ = arguments;
    
      ;
      PL$9/*_wgt*/["buildRendering"]["apply"](this, PL$18/*arguments*/);
      var PL$19/*nl*/ = PL$10/*query*/(".more", this["domNode"]);
      ;
      PL$19/*nl*/["forEach"]((function(PL$20/*node*/){
      var PL$24/*btn1*/;
      var PL$25/*btn2*/;
      
        ;
        var PL$21/*flate*/ = PL$14/*domConstruct*/["create"]("div", {
          "class": "opener"
        });
        ;
        PL$12/*domClass*/["add"](PL$21/*flate*/, "hidden");
        PL$14/*domConstruct*/["place"](PL$21/*flate*/, PL$20/*node*/, "before");
        PL$14/*domConstruct*/["place"](PL$20/*node*/, PL$21/*flate*/);
        var PL$22/*hidden*/ = true;
        ;
        var PL$23/*btnConstruct*/ = {
          "label": "read more ...",
          "class": "moreBtn",
          "onClick": (function(){
          
            ;
            if(PL$22/*hidden*/){
              PL$12/*domClass*/["remove"](PL$21/*flate*/, "hidden");
              PL$24/*btn1*/["set"]("label", "read less");
              PL$25/*btn2*/["set"]("label", "read less");
            }else{
            PL$12/*domClass*/["add"](PL$21/*flate*/, "hidden");
            PL$24/*btn1*/["set"]("label", "read more ...");
            PL$25/*btn2*/["set"]("label", "read more ...");
            };
            ;
            PL$22/*hidden*/ = ! PL$22/*hidden*/;
            ;})
        };
        ;
        PL$24/*btn1*/ = new PL$16/*Button*/(PL$23/*btnConstruct*/);
        PL$25/*btn2*/ = new PL$16/*Button*/(PL$23/*btnConstruct*/);
        PL$24/*btn1*/["placeAt"](PL$21/*flate*/, "before");
        PL$25/*btn2*/["placeAt"](PL$21/*flate*/);
        ;}));
      ;})
  })); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
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
    define("app/wgt/ReadMore", ["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
