//>>built
(function(){var g,b;if("object"==typeof exports&&"object"==typeof module)b=function(a,d){var e=0,c=a.length,b=[];for(e;e<c;++e)b.push(require(a[e]));d.apply(d,b)},g=function(a,d){b(a,function(){module.exports=d.apply(d,arguments)})};else if("function"==typeof define&&define.amd){var f=define;b=require;g=function(a,d){a instanceof Array?a.unshift("require"):(d=a,a=["require"]);f("app/wgt/ReadMore",a,function(){b=arguments[0];for(var a=[],c=1;c<arguments.length;++c)a.push(arguments[c]);return d.apply(d,
a)})};b=require}else alert("not working out!");g(["promiseland"],function(a){var d=b,e=a.Promise;new e;var c=function(c){var b=new e;try{d([c],function(c){a.isPromiseLandPromisingModule(c)?c.then(function(a){b.resolve(a)},function(a){b.reject(a)}):b.resolve(c)})}catch(h){b.reject(h)}return b.promise},g=a.classSystem;if(a._hasModule({hashStr:"d3a1f03029e3c223181f7d562ccbf52c"}))return a._getModule("d3a1f03029e3c223181f7d562ccbf52c");var h=new e;a._registerModule({hashStr:"d3a1f03029e3c223181f7d562ccbf52c",
module:h,promising:!0});g.getBuiltinType("var");(function(){var a=function(a){return function(b){try{a(b)}catch(c){h.reject(c)}}},b,d,e,g,k,l,m;a(function(){c("dojo/_base/declare").then(a(function(f){b=f;c("dijit/_WidgetBase").then(a(function(f){d=f;e=new d;c("dojo/query").then(a(function(f){g=f;c("dojo/dom-class").then(a(function(f){k=f;c("dojo/dom-construct").then(a(function(f){l=f;c("dijit/form/Button").then(a(function(a){m=a;h.resolve(b([d],{buildRendering:function(){e.buildRendering.apply(this,
arguments);g(".more",this.domNode).forEach(function(a){var b,c,d,e;b=l.create("div",{"class":"opener"});k.add(b,"hidden");l.place(b,a,"before");l.place(a,b);c=!0;a={label:"read more ...","class":"moreBtn",onClick:function(){c?(k.remove(b,"hidden"),d.set("label","read less"),e.set("label","read less")):(k.add(b,"hidden"),d.set("label","read more ..."),e.set("label","read more ..."));c=!c}};d=new m(a);e=new m(a);d.placeAt(b,"before");e.placeAt(b)})}}));return h}))}))}))}))}))}))})();return h})();return h})})();
//# sourceMappingURL=ReadMore.js.map