//>>built
(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/mode/http/http",["../../lib/codemirror"],d):d(CodeMirror)})(function(d){d.defineMode("http",function(){function d(a,b){a.skipToEnd();b.cur=e;return"error"}function g(a,b){return a.match(/^HTTP\/\d\.\d/)?(b.cur=h,"keyword"):a.match(/^[A-Z]+/)&&/[ \t]/.test(a.peek())?(b.cur=k,"keyword"):d(a,b)}function h(a,b){var c=a.match(/^\d+/);if(!c)return d(a,
b);b.cur=l;c=Number(c[0]);return 100<=c&&200>c?"positive informational":200<=c&&300>c?"positive success":300<=c&&400>c?"positive redirect":400<=c&&500>c?"negative client-error":500<=c&&600>c?"negative server-error":"error"}function l(a,b){a.skipToEnd();b.cur=e;return null}function k(a,b){a.eatWhile(/\S/);b.cur=m;return"string-2"}function m(a,b){return a.match(/^HTTP\/\d\.\d$/)?(b.cur=e,"keyword"):d(a,b)}function e(a){if(a.sol()&&!a.eat(/[ \t]/)){if(a.match(/^.*?:/))return"atom";a.skipToEnd();return"error"}a.skipToEnd();
return"string"}function f(a){a.skipToEnd();return null}return{token:function(a,b){var c=b.cur;return c!=e&&c!=f&&a.eatSpace()?null:c(a,b)},blankLine:function(a){a.cur=f},startState:function(){return{cur:g}}}});d.defineMIME("message/http","http")});
//# sourceMappingURL=http.js.map