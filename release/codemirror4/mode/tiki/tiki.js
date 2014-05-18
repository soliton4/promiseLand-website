//>>built
(function(h){"object"==typeof exports&&"object"==typeof module?h(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/mode/tiki/tiki",["../../lib/codemirror"],h):h(CodeMirror)})(function(h){h.defineMode("tiki",function(h){function e(a,c,b){return function(d,e){for(;!d.eol();){if(d.match(c)){e.tokenize=g;break}d.next()}b&&(e.tokenize=b);return a}}function r(a){return function(c,b){for(;!c.eol();)c.next();b.tokenize=g;return a}}function g(a,c){function b(b){c.tokenize=
b;return b(a,c)}var d=a.sol(),f=a.next();switch(f){case "{":a.eat("/");for(a.eatSpace();a.eat(/[^\s\u00a0=\"\'\/?(}]/););c.tokenize=n;return"tag";case "_":if(a.eat("_"))return b(e("strong","__",g));break;case "'":if(a.eat("'"))return b(e("em","''",g));break;case "(":if(a.eat("("))return b(e("variable-2","))",g));break;case "[":return b(e("variable-3","]",g));case "|":if(a.eat("|"))return b(e("comment","||"));break;case "-":if(a.eat("\x3d"))return b(e("header string","\x3d-",g));if(a.eat("-"))return b(e("error tw-deleted",
"--",g));break;case "\x3d":if(a.match("\x3d\x3d"))return b(e("tw-underline","\x3d\x3d\x3d",g));break;case ":":if(a.eat(":"))return b(e("comment","::"));break;case "^":return b(e("tw-box","^"));case "~":if(a.match("np~"))return b(e("meta","~/np~"))}if(d)switch(f){case "!":return a.match("!!!!!")||a.match("!!!!")||a.match("!!!")||a.match("!!"),b(r("header string"));case "*":case "#":case "+":return b(r("tw-listitem bracket"))}return null}function n(a,c){var b=a.next(),d=a.peek();if("}"==b)return c.tokenize=
g,"tag";if("("==b||")"==b)return"bracket";if("\x3d"==b)return m="equals","\x3e"==d&&(a.next(),d=a.peek()),/[\'\"]/.test(d)||(c.tokenize=u()),"operator";if(/[\'\"]/.test(b))return c.tokenize=v(b),c.tokenize(a,c);a.eatWhile(/[^\s\u00a0=\"\'\/?]/);return"keyword"}function v(a){return function(c,b){for(;!c.eol();)if(c.next()==a){b.tokenize=n;break}return"string"}}function u(){return function(a,c){for(;!a.eol();){var b=a.next(),d=a.peek();if(" "==b||","==b||/[ )}]/.test(d)){c.tokenize=n;break}}return"string"}}
function l(){for(var a=arguments.length-1;0<=a;a--)d.cc.push(arguments[a])}function f(){l.apply(null,arguments);return!0}function s(a,c){d.context={prev:d.context,pluginName:a,indent:d.indented,startOfLine:c,noIndent:d.context&&d.context.noIndent}}function w(a){if("openPlugin"==a)return d.pluginName=p,f(q,x(d.startOfLine));if("closePlugin"==a)return a=!1,d.context?(a=d.context.pluginName!=p,d.context&&(d.context=d.context.prev)):a=!0,a&&(k="error"),f(y(a));"string"==a&&((!d.context||"!cdata"!=d.context.name)&&
s("!cdata"),d.tokenize==g&&d.context&&(d.context=d.context.prev));return f()}function x(a){return function(c){if("selfclosePlugin"==c||"endPlugin"==c)return f();"endPlugin"==c&&s(d.pluginName,a);return f()}}function y(a){return function(c){a&&(k="error");return"endPlugin"==c?f():l()}}function q(a){return"keyword"==a?(k="attribute",f(q)):"equals"==a?f(z,q):l()}function z(a){return"keyword"==a?(k="string",f()):"string"==a?f(t):l()}function t(a){return"string"==a?f(t):l()}var A=h.indentUnit,p,m,d,k;
return{startState:function(){return{tokenize:g,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(a,c){a.sol()&&(c.startOfLine=!0,c.indented=a.indentation());if(a.eatSpace())return null;k=m=p=null;var b=c.tokenize(a,c);if((b||m)&&"comment"!=b)for(d=c;!(c.cc.pop()||w)(m||b););c.startOfLine=!1;return k||b},indent:function(a,c){var b=a.context;if(b&&b.noIndent)return 0;b&&/^{\//.test(c)&&(b=b.prev);for(;b&&!b.startOfLine;)b=b.prev;return b?b.indent+A:0},electricChars:"/"}});
h.defineMIME("text/tiki","tiki")});
//# sourceMappingURL=tiki.js.map