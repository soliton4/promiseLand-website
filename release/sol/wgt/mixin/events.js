//>>built
define("sol/wgt/mixin/events",["dojo/_base/declare","dojo/_base/lang","dojo/aspect"],function(c,e,d){return c([],{constructor:function(a){this._events={}},emit:function(a,b){try{this._events[a](b)}catch(c){this._events[a]||(this._events[a]=function(){})}},on:function(a,b){return d.after(this._events,a,b,!0)}})});
//# sourceMappingURL=events.js.map