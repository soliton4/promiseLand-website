//>>built
define("sol/wgt/mixin/noDomTitle",["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr"],function(d,e,a){return d([],{startup:function(){this.inherited(arguments);var b=this;this.own(this.watch("title",function(c,d,e){a.set(b.domNode,"title","");setTimeout(function(){a.set(b.domNode,"title","")},100)}))},_setTitleAttr:function(b){this._set("title",b);this.inherited(arguments);var c=this;a.set(c.domNode,"title","");setTimeout(function(){a.set(c.domNode,"title","")},100)}})});
//# sourceMappingURL=noDomTitle.js.map