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
    if (promiseland._hasModule({ hashStr: "cfbf48702a72a21130dd46d0994f82ee" })){ return promiseland._getModule("cfbf48702a72a21130dd46d0994f82ee"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "cfbf48702a72a21130dd46d0994f82ee", "module": PL$1, promising: true });
var PL$5/*console*/;try{PL$5/*console*/ = console;}catch(e){};
var PL$9/*document*/;try{PL$9/*document*/ = document;}catch(e){};
var PL$26/*window*/;try{PL$26/*window*/ = window;}catch(e){};
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
var PL$6/*domConstruct*/;
var PL$8/*background*/;
var PL$10/*backgroundText*/;
var PL$12/*i*/;
var PL$13/*openSans*/;
var PL$14/*git*/;
var PL$15/*head*/;
var PL$16/*head1*/;
var PL$17/*head2*/;
var PL$18/*domClass*/;
var PL$20/*MenuBar*/;
var PL$22/*MenuBarItem*/;
var PL$24/*bar*/;
var PL$25/*barItem*/;
var PL$27/*CodeMirror*/;
var PL$29/*jsmode*/;
var PL$31/*plmode*/;
var PL$33/*cbhell*/;
var PL$34/*cm*/;
var PL$36/*pland*/;
var PL$37/*cm2*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*console*/["log"]("welcome to promiseLand!");
  __requireFun("dojo/dom-construct").then(PL$3/*promiseland exception catcher*/(function(PL$7){PL$6/*domConstruct*/ = PL$7;
  PL$8/*background*/ = PL$6/*domConstruct*/["create"]("div", {
    "class": "background"
  });
  PL$6/*domConstruct*/["place"](PL$8/*background*/, PL$9/*document*/["body"]);
  __requireFun("./backgroundText").then(PL$3/*promiseland exception catcher*/(function(PL$11){PL$10/*backgroundText*/ = PL$11;
  PL$12/*i*/ = 0;
  for(PL$12/*i*/ = 0;(PL$12/*i*/ < 100);++PL$12/*i*/){{
    PL$6/*domConstruct*/["place"](PL$9/*document*/["createTextNode"](PL$10/*backgroundText*/), PL$8/*background*/);}};
  ;
  PL$13/*openSans*/ = PL$6/*domConstruct*/["create"]("link", {
    "href": "//fonts.googleapis.com/css?family=Open+Sans:300italic,300,400italic,400,600italic,600,700italic,700,800italic,800",
    "rel": "stylesheet",
    "type": "text/css"
  });
  PL$6/*domConstruct*/["place"](PL$13/*openSans*/, PL$9/*document*/["head"]);
  PL$14/*git*/ = PL$6/*domConstruct*/["create"]("a", {
    "href": "https://github.com/soliton4/promiseland"
  });
  PL$6/*domConstruct*/["place"](PL$6/*domConstruct*/["create"]("img", {
    "style": "position: absolute; z-Index: 100; top: 0; right: 0; border: 0;",
    "src": "https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67",
    "alt": "Fork me on GitHub",
    "data-canonical-src": "https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"
  }), PL$14/*git*/);
  PL$6/*domConstruct*/["place"](PL$14/*git*/, PL$9/*document*/["body"]);
  PL$15/*head*/ = PL$6/*domConstruct*/["create"]("div", {
    "class": "head"
  });
  PL$6/*domConstruct*/["place"](PL$15/*head*/, PL$9/*document*/["body"]);
  PL$16/*head1*/ = PL$6/*domConstruct*/["create"]("div", {
    "class": "head1"
  });
  PL$6/*domConstruct*/["place"](PL$16/*head1*/, PL$15/*head*/);
  PL$6/*domConstruct*/["place"](PL$9/*document*/["createTextNode"]("promiseLand"), PL$16/*head1*/);
  PL$9/*document*/["title"] = "promiseLand";
  PL$17/*head2*/ = PL$6/*domConstruct*/["create"]("div", {
    "class": "head2"
  });
  PL$6/*domConstruct*/["place"](PL$17/*head2*/, PL$15/*head*/);
  PL$6/*domConstruct*/["place"](PL$9/*document*/["createTextNode"]("a very promising Language"), PL$17/*head2*/);
  __requireFun("dojo/dom-class").then(PL$3/*promiseland exception catcher*/(function(PL$19){PL$18/*domClass*/ = PL$19;
  PL$18/*domClass*/["add"](PL$9/*document*/["body"], "claro");
  __requireFun("dijit/MenuBar").then(PL$3/*promiseland exception catcher*/(function(PL$21){PL$20/*MenuBar*/ = PL$21;
  __requireFun("dijit/MenuBarItem").then(PL$3/*promiseland exception catcher*/(function(PL$23){PL$22/*MenuBarItem*/ = PL$23;
  PL$24/*bar*/ = new PL$20/*MenuBar*/({
    "class": "theMenu"
  });
  PL$24/*bar*/["placeAt"](PL$15/*head*/);
  PL$24/*bar*/["startup"]();
  PL$25/*barItem*/ = new PL$22/*MenuBarItem*/({
    "label": "Features",
    "onClick": (function(){
    
      ;
      PL$26/*window*/["location"] = "https://github.com/soliton4/promiseland/wiki/Features";
      ;})
  });
  PL$24/*bar*/["addChild"](PL$25/*barItem*/);
  PL$24/*bar*/["addChild"](new PL$22/*MenuBarItem*/({
    "label": "give Feedback",
    "onClick": (function(){
    
      ;
      PL$26/*window*/["location"] = "https://github.com/soliton4/promiseland/issues";
      ;})
  }));
  PL$24/*bar*/["addChild"](new PL$22/*MenuBarItem*/({
    "label": "get involved",
    "onClick": (function(){
    
      ;
      PL$26/*window*/["location"] = "https://github.com/soliton4/promiseland";
      ;})
  }));
  PL$24/*bar*/["addChild"](new PL$22/*MenuBarItem*/({
    "label": "download",
    "onClick": (function(){
    
      ;
      PL$26/*window*/["location"] = "https://github.com/soliton4/promiseland";
      ;})
  }));
  __requireFun("sol/wgt/CodeMirrorSimple").then(PL$3/*promiseland exception catcher*/(function(PL$28){PL$27/*CodeMirror*/ = PL$28;
  __requireFun("codemirror4/mode/javascript/javascript").then(PL$3/*promiseland exception catcher*/(function(PL$30){PL$29/*jsmode*/ = PL$30;
  __requireFun("codemirror4/mode/promiseland/promiseland").then(PL$3/*promiseland exception catcher*/(function(PL$32){PL$31/*plmode*/ = PL$32;
  PL$33/*cbhell*/ = PL$6/*domConstruct*/["create"]("div", {
    "class": "cbhell-sign"
  });
  PL$6/*domConstruct*/["place"](PL$9/*document*/["createTextNode"]("callback hell"), PL$33/*cbhell*/);
  PL$6/*domConstruct*/["place"](PL$33/*cbhell*/, PL$9/*document*/["body"]);
  __requireFun("./callbackHellText").then(PL$3/*promiseland exception catcher*/(function(PL$35){PL$34/*cm*/ = new PL$27/*CodeMirror*/({
    "class": "callbackhell",
    "theme": "xq-dark",
    "mode": "javascript",
    "value": PL$35
  });
  PL$34/*cm*/["placeAt"](PL$9/*document*/["body"]);
  PL$34/*cm*/["startup"]();
  PL$36/*pland*/ = PL$6/*domConstruct*/["create"]("div", {
    "class": "pland-sign"
  });
  PL$6/*domConstruct*/["place"](PL$9/*document*/["createTextNode"]("promiseland solution"), PL$36/*pland*/);
  PL$6/*domConstruct*/["place"](PL$36/*pland*/, PL$9/*document*/["body"]);
  __requireFun("./promiseLandText").then(PL$3/*promiseland exception catcher*/(function(PL$38){PL$37/*cm2*/ = new PL$27/*CodeMirror*/({
    "class": "promiselandcode",
    "theme": "solarized",
    "mode": "promiseland",
    "value": PL$38
  });
  PL$37/*cm2*/["placeAt"](PL$9/*document*/["body"]);
  PL$37/*cm2*/["startup"]();
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
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
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
