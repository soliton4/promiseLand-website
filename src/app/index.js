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
    if (promiseland._hasModule({ hashStr: "eb34a48a51d83b303cfd3229206cb7e0" })){ return promiseland._getModule("eb34a48a51d83b303cfd3229206cb7e0"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "eb34a48a51d83b303cfd3229206cb7e0", "module": PL$1, promising: true });
var PL$5/*console*/;try{PL$5/*console*/ = console;}catch(e){};
var PL$10/*document*/;try{PL$10/*document*/ = document;}catch(e){};
var PL$27/*window*/;try{PL$27/*window*/ = window;}catch(e){};
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
var PL$7/*domConstruct*/;
var PL$9/*background*/;
var PL$11/*backgroundText*/;
var PL$13/*i*/;
var PL$14/*openSans*/;
var PL$15/*git*/;
var PL$16/*head*/;
var PL$17/*head1*/;
var PL$18/*head2*/;
var PL$19/*domClass*/;
var PL$21/*MenuBar*/;
var PL$23/*MenuBarItem*/;
var PL$25/*bar*/;
var PL$26/*barItem*/;
var PL$28/*CodeMirror*/;
var PL$30/*jsmode*/;
var PL$32/*plmode*/;
var PL$34/*description*/;
var PL$35/*cbhell*/;
var PL$36/*texts*/;
var PL$38/*cm*/;
var PL$39/*pland*/;
var PL$40/*cm2*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*console*/["log"]("welcome to promiseLand!");
  __requireFun("dojo/domReady!").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$6;
  __requireFun("dojo/dom-construct").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*domConstruct*/ = PL$8;
  PL$5/*console*/["log"]("test2");
  PL$9/*background*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "background"
  });
  PL$7/*domConstruct*/["place"](PL$9/*background*/, PL$10/*document*/["body"]);
  __requireFun("./backgroundText").then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$11/*backgroundText*/ = PL$12;
  PL$13/*i*/ = 0;
  for(PL$13/*i*/ = 0;(PL$13/*i*/ < 100);++PL$13/*i*/){{
    PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"](PL$11/*backgroundText*/), PL$9/*background*/);}};
  ;
  PL$14/*openSans*/ = PL$7/*domConstruct*/["create"]("link", {
    "href": "//fonts.googleapis.com/css?family=Open+Sans:300italic,300,400italic,400,600italic,600,700italic,700,800italic,800",
    "rel": "stylesheet",
    "type": "text/css"
  });
  PL$7/*domConstruct*/["place"](PL$14/*openSans*/, PL$10/*document*/["head"]);
  PL$15/*git*/ = PL$7/*domConstruct*/["create"]("a", {
    "href": "https://github.com/soliton4/promiseland"
  });
  PL$7/*domConstruct*/["place"](PL$7/*domConstruct*/["create"]("img", {
    "style": "position: absolute; z-Index: 100; top: 0; right: 0; border: 0;",
    "src": "https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67",
    "alt": "Fork me on GitHub",
    "data-canonical-src": "https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"
  }), PL$15/*git*/);
  PL$7/*domConstruct*/["place"](PL$15/*git*/, PL$10/*document*/["body"]);
  PL$16/*head*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "head"
  });
  PL$7/*domConstruct*/["place"](PL$16/*head*/, PL$10/*document*/["body"]);
  PL$17/*head1*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "head1"
  });
  PL$7/*domConstruct*/["place"](PL$17/*head1*/, PL$16/*head*/);
  PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"]("promiseLand"), PL$17/*head1*/);
  PL$10/*document*/["title"] = "promiseLand";
  PL$18/*head2*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "head2"
  });
  PL$7/*domConstruct*/["place"](PL$18/*head2*/, PL$16/*head*/);
  PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"]("a very promising Language"), PL$18/*head2*/);
  __requireFun("dojo/dom-class").then(PL$3/*promiseland exception catcher*/(function(PL$20){PL$19/*domClass*/ = PL$20;
  PL$19/*domClass*/["add"](PL$10/*document*/["body"], "claro");
  __requireFun("dijit/MenuBar").then(PL$3/*promiseland exception catcher*/(function(PL$22){PL$21/*MenuBar*/ = PL$22;
  __requireFun("dijit/MenuBarItem").then(PL$3/*promiseland exception catcher*/(function(PL$24){PL$23/*MenuBarItem*/ = PL$24;
  PL$25/*bar*/ = new PL$21/*MenuBar*/({
    "class": "theMenu"
  });
  PL$25/*bar*/["placeAt"](PL$16/*head*/);
  PL$25/*bar*/["startup"]();
  PL$26/*barItem*/ = new PL$23/*MenuBarItem*/({
    "label": "Features",
    "onClick": (function(){
    
      ;
      PL$27/*window*/["location"] = "https://github.com/soliton4/promiseland/wiki/Features";
      ;})
  });
  PL$25/*bar*/["addChild"](PL$26/*barItem*/);
  PL$25/*bar*/["addChild"](new PL$23/*MenuBarItem*/({
    "label": "give Feedback",
    "onClick": (function(){
    
      ;
      PL$27/*window*/["location"] = "https://github.com/soliton4/promiseland/issues";
      ;})
  }));
  PL$25/*bar*/["addChild"](new PL$23/*MenuBarItem*/({
    "label": "get involved",
    "onClick": (function(){
    
      ;
      PL$27/*window*/["location"] = "https://github.com/soliton4/promiseland";
      ;})
  }));
  PL$25/*bar*/["addChild"](new PL$23/*MenuBarItem*/({
    "label": "download",
    "onClick": (function(){
    
      ;
      PL$27/*window*/["location"] = "https://github.com/soliton4/promiseland";
      ;})
  }));
  __requireFun("sol/wgt/CodeMirrorSimple").then(PL$3/*promiseland exception catcher*/(function(PL$29){PL$28/*CodeMirror*/ = PL$29;
  __requireFun("codemirror4/mode/javascript/javascript").then(PL$3/*promiseland exception catcher*/(function(PL$31){PL$30/*jsmode*/ = PL$31;
  __requireFun("codemirror4/mode/promiseland/promiseland").then(PL$3/*promiseland exception catcher*/(function(PL$33){PL$32/*plmode*/ = PL$33;
  PL$34/*description*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "description"
  });
  PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"]("promiseLand extends JavaScript - much like c++ extends c or less extends css. It includes EcmaScript 5 strict mode. The main goal is enabling you to focus on your Program logic, weather it includes asynchronous calls or not. The name giving feature is the introduction of the unary dereferencing operator, known from c / c++. By adding a * in front of a expression it is assumed that the espression is a promise. It results in the result of the promise, making the execution wait until the promise is fulfilled."), PL$34/*description*/);
  PL$7/*domConstruct*/["place"](PL$34/*description*/, PL$10/*document*/["body"]);
  PL$35/*cbhell*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "cbhell-sign"
  });
  PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"]("callback hell"), PL$35/*cbhell*/);
  PL$7/*domConstruct*/["place"](PL$35/*cbhell*/, PL$10/*document*/["body"]);
  __requireFun("./texts").then(PL$3/*promiseland exception catcher*/(function(PL$37){PL$36/*texts*/ = PL$37;
  PL$38/*cm*/ = new PL$28/*CodeMirror*/({
    "class": "callbackhell",
    "theme": "xq-dark",
    "mode": "javascript",
    "value": PL$36/*texts*/[0]
  });
  PL$38/*cm*/["placeAt"](PL$10/*document*/["body"]);
  PL$38/*cm*/["startup"]();
  PL$39/*pland*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "pland-sign"
  });
  PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"]("promiseland solution"), PL$39/*pland*/);
  PL$7/*domConstruct*/["place"](PL$39/*pland*/, PL$10/*document*/["body"]);
  PL$40/*cm2*/ = new PL$28/*CodeMirror*/({
    "class": "promiselandcode",
    "theme": "solarized",
    "mode": "promiseland",
    "value": PL$36/*texts*/[1]
  });
  PL$40/*cm2*/["placeAt"](PL$10/*document*/["body"]);
  PL$40/*cm2*/["startup"]();
  PL$34/*description*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "description description2"
  });
  PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"]("So far so good. Now add another promise, say a user interaction:"), PL$34/*description*/);
  PL$7/*domConstruct*/["place"](PL$34/*description*/, PL$10/*document*/["body"]);
  PL$38/*cm*/ = new PL$28/*CodeMirror*/({
    "class": "callbackhell callbackhell2",
    "theme": "xq-dark",
    "mode": "javascript",
    "value": PL$36/*texts*/[2]
  });
  PL$38/*cm*/["placeAt"](PL$10/*document*/["body"]);
  PL$38/*cm*/["startup"]();
  PL$40/*cm2*/ = new PL$28/*CodeMirror*/({
    "class": "promiselandcode promiselandcode2",
    "theme": "solarized",
    "mode": "promiseland",
    "value": PL$36/*texts*/[3]
  });
  PL$40/*cm2*/["placeAt"](PL$10/*document*/["body"]);
  PL$40/*cm2*/["startup"]();
  PL$34/*description*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "description description3"
  });
  PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"]("Still doesnt look to bad, but wait! What if something goes wrong?"), PL$34/*description*/);
  PL$7/*domConstruct*/["place"](PL$34/*description*/, PL$10/*document*/["body"]);
  PL$38/*cm*/ = new PL$28/*CodeMirror*/({
    "class": "callbackhell callbackhell3",
    "theme": "xq-dark",
    "mode": "javascript",
    "value": PL$36/*texts*/[4]
  });
  PL$38/*cm*/["placeAt"](PL$10/*document*/["body"]);
  PL$38/*cm*/["startup"]();
  PL$40/*cm2*/ = new PL$28/*CodeMirror*/({
    "class": "promiselandcode promiselandcode3",
    "theme": "solarized",
    "mode": "promiseland",
    "value": PL$36/*texts*/[5]
  });
  PL$40/*cm2*/["placeAt"](PL$10/*document*/["body"]);
  PL$40/*cm2*/["startup"]();
  PL$34/*description*/ = PL$7/*domConstruct*/["create"]("div", {
    "class": "description description4"
  });
  PL$7/*domConstruct*/["place"](PL$10/*document*/["createTextNode"]("See where we are going with this? Now assume you have an Array of filenames and you want to process them in a loop."), PL$34/*description*/);
  PL$7/*domConstruct*/["place"](PL$34/*description*/, PL$10/*document*/["body"]);
  PL$38/*cm*/ = new PL$28/*CodeMirror*/({
    "class": "callbackhell callbackhell4",
    "theme": "xq-dark",
    "mode": "javascript",
    "value": PL$36/*texts*/[6]
  });
  PL$38/*cm*/["placeAt"](PL$10/*document*/["body"]);
  PL$38/*cm*/["startup"]();
  PL$40/*cm2*/ = new PL$28/*CodeMirror*/({
    "class": "promiselandcode promiselandcode4",
    "theme": "solarized",
    "mode": "promiseland",
    "value": PL$36/*texts*/[7]
  });
  PL$40/*cm2*/["placeAt"](PL$10/*document*/["body"]);
  PL$40/*cm2*/["startup"]();
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
