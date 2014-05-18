//>>built
define("codemirror4/addon/runmode/runmode-standalone",["dojo","dijit","dojox"],function(n,p,q){window.CodeMirror={};(function(){function k(a){this.pos=this.start=0;this.string=a;this.lineStart=0}k.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return 0==this.pos},peek:function(){return this.string.charAt(this.pos)||null},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(a){var b=this.string.charAt(this.pos);if("string"==
typeof a?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,b},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0},backUp:function(a){this.pos-=a},column:function(){return this.start-this.lineStart},indentation:function(){return 0},
match:function(a,b,c){if("string"==typeof a){var d=this.string.substr(this.pos,a.length);if((c?d.toLowerCase():d)==(c?a.toLowerCase():a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}};CodeMirror.StringStream=k;CodeMirror.startState=function(a,
b,c){return a.startState?a.startState(b,c):!0};var l=CodeMirror.modes={},f=CodeMirror.mimeModes={};CodeMirror.defineMode=function(a,b){l[a]=b};CodeMirror.defineMIME=function(a,b){f[a]=b};CodeMirror.resolveMode=function(a){"string"==typeof a&&f.hasOwnProperty(a)?a=f[a]:a&&("string"==typeof a.name&&f.hasOwnProperty(a.name))&&(a=f[a.name]);return"string"==typeof a?{name:a}:a||{name:"null"}};CodeMirror.getMode=function(a,b){b=CodeMirror.resolveMode(b);var c=l[b.name];if(!c)throw Error("Unknown mode: "+
b);return c(a,b)};CodeMirror.registerHelper=CodeMirror.registerGlobalHelper=Math.min;CodeMirror.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}});CodeMirror.defineMIME("text/plain","null");CodeMirror.runMode=function(a,b,c,d){b=CodeMirror.getMode({indentUnit:2},b);if(1==c.nodeType){var f=d&&d.tabSize||4,m=c,g=0;m.innerHTML="";c=function(a,b){if("\n"==a)m.appendChild(document.createElement("br")),g=0;else{for(var c="",d=0;;){var e=a.indexOf("\t",d);if(-1==e){c+=a.slice(d);g+=
a.length-d;break}else{g+=e-d;c+=a.slice(d,e);d=f-g%f;g+=d;for(var h=0;h<d;++h)c+=" ";d=e+1}}b?(e=m.appendChild(document.createElement("span")),e.className="cm-"+b.replace(/ +/g," cm-"),e.appendChild(document.createTextNode(c))):m.appendChild(document.createTextNode(c))}}}a=a.split(/\r?\n|\r/);d=d&&d.state||CodeMirror.startState(b);for(var h=0,k=a.length;h<k;++h){h&&c("\n");var e=new CodeMirror.StringStream(a[h]);for(!e.string&&b.blankLine&&b.blankLine(d);!e.eol();){var l=b.token(e,d);c(e.current(),
l,h,e.start,d);e.start=e.pos}}}})()});
//# sourceMappingURL=runmode-standalone.js.map