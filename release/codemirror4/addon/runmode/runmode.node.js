//>>built
define("codemirror4/addon/runmode/runmode.node",["dojo","dijit","dojox"],function(k,l,m){function g(a){this.pos=this.start=0;this.string=a;this.lineStart=0}g.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return 0==this.pos},peek:function(){return this.string.charAt(this.pos)||null},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,
b},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0},backUp:function(a){this.pos-=a},column:function(){return this.start-this.lineStart},indentation:function(){return 0},match:function(a,b,c){if("string"==typeof a){var e=this.string.substr(this.pos,
a.length);if((c?e.toLowerCase():e)==(c?a.toLowerCase():a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}};exports.StringStream=g;exports.startState=function(a,b,c){return a.startState?a.startState(b,c):!0};var h=exports.modes={},d=exports.mimeModes=
{};exports.defineMode=function(a,b){if(2<arguments.length){b.dependencies=[];for(var c=2;c<arguments.length;++c)b.dependencies.push(arguments[c])}h[a]=b};exports.defineMIME=function(a,b){d[a]=b};exports.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}});exports.defineMIME("text/plain","null");exports.resolveMode=function(a){"string"==typeof a&&d.hasOwnProperty(a)?a=d[a]:a&&("string"==typeof a.name&&d.hasOwnProperty(a.name))&&(a=d[a.name]);return"string"==typeof a?{name:a}:a||
{name:"null"}};exports.getMode=function(a,b){b=exports.resolveMode(b);var c=h[b.name];if(!c)throw Error("Unknown mode: "+b);return c(a,b)};exports.registerHelper=exports.registerGlobalHelper=Math.min;exports.runMode=function(a,b,c,e){b=exports.getMode({indentUnit:2},b);a=a.split(/\r?\n|\r/);e=e&&e.state||exports.startState(b);for(var d=0,g=a.length;d<g;++d){d&&c("\n");var f=new exports.StringStream(a[d]);for(!f.string&&b.blankLine&&b.blankLine(e);!f.eol();){var h=b.token(f,e);c(f.current(),h,d,f.start,
e);f.start=f.pos}}};require.cache[require.resolve("../../lib/codemirror")]=require.cache[require.resolve("./runmode.node")]});
//# sourceMappingURL=runmode.node.js.map