//>>built
define("sol/wgt/node/debug/util",["dojo/_base/declare","dojo/json","dojo/Deferred","dojo/_base/lang","dojo/_base/array"],function(h,k,l,m,c){return{dereference:function(b,g){var e={};c.forEach(g,function(a){e[a.handle]=a});var f=function(a){if("object"==typeof a){if(void 0!==a.ref)return e[a.ref]}else if("array"==typeof a)return c.map(a,function(a){return f(a)||a});return a},d;for(d in b)b[d]=f(b[d]);return b},_dereference:function(b,c){}}});
//# sourceMappingURL=util.js.map