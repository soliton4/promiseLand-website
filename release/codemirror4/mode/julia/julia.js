//>>built
(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/mode/julia/julia",["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("julia",function(e,g){function h(a){return RegExp("^(("+a.join(")|(")+"))\\b")}function k(a){a=0==a.scopes.length?null:a.scopes[a.scopes.length-1];return"["==a||"{"==a?!0:!1}function l(a,b){var c=b.leaving_expr;a.sol()&&(c=!1);b.leaving_expr=!1;if(c&&a.match(/^'+/)||
a.match(/^\.{2,3}/))return"operator";if(a.eatSpace())return null;var f=a.peek();if("#"===f)return a.skipToEnd(),"comment";"["===f&&b.scopes.push("[");"{"===f&&b.scopes.push("{");var d=0==b.scopes.length?null:b.scopes[b.scopes.length-1];"["===d&&"]"===f&&(b.scopes.pop(),b.leaving_expr=!0);"{"===d&&"}"===f&&(b.scopes.pop(),b.leaving_expr=!0);")"===f&&(b.leaving_expr=!0);var e;!k(b)&&(e=a.match(p,!1))&&b.scopes.push(e);!k(b)&&a.match(q,!1)&&b.scopes.pop();if(k(b)&&a.match(/^end/))return"number";if(a.match(/^=>/))return"operator";
if(a.match(/^[0-9\.]/,!1)){f=RegExp(/^im\b/);d=!1;a.match(/^\d*\.(?!\.)\d+([ef][\+\-]?\d+)?/i)&&(d=!0);a.match(/^\d+\.(?!\.)\d*/)&&(d=!0);a.match(/^\.\d+/)&&(d=!0);if(d)return a.match(f),b.leaving_expr=!0,"number";d=!1;a.match(/^0x[0-9a-f]+/i)&&(d=!0);a.match(/^0b[01]+/i)&&(d=!0);a.match(/^0o[0-7]+/i)&&(d=!0);a.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(d=!0);a.match(/^0(?![\dx])/i)&&(d=!0);if(d)return a.match(f),b.leaving_expr=!0,"number"}if(a.match(/^(::)|(<:)/))return"operator";if(!c&&a.match(r))return"string";
if(a.match(s))return"operator";if(a.match(t))return b.tokenize=u(a.current()),b.tokenize(a,b);if(a.match(v))return"meta";if(a.match(w))return null;if(a.match(x))return"keyword";if(a.match(y))return"builtin";if(a.match(n))return b.leaving_expr=!0,"variable";a.next();return m}function u(a){function b(b,e){for(;!b.eol();)if(b.eatWhile(/[^'"\\]/),b.eat("\\")){if(b.next(),c&&b.eol())return f}else{if(b.match(a))return e.tokenize=l,f;b.eat(/['"]/)}if(c){if(g.singleLineStringErrors)return m;e.tokenize=l}return f}
for(;0<="rub".indexOf(a.charAt(0).toLowerCase());)a=a.substr(1);var c=1==a.length,f="string";b.isString=!0;return b}var m="error",s=g.operators||/^\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b/,w=g.delimiters||/^[;,()[\]{}]/,n=g.identifiers||/^[_A-Za-z][_A-Za-z0-9]*!*/,t=/^(`|'|"{3}|([br]?"))/,x=h("if else elseif while for begin let end do try catch finally return break continue global local const export import importall using function macro module baremodule type immutable quote typealias abstract bitstype ccall".split(" ")),
y=h("true false enumerate open close nothing NaN Inf print println Int Int8 Uint8 Int16 Uint16 Int32 Uint32 Int64 Uint64 Int128 Uint128 Bool Char Float16 Float32 Float64 Array Vector Matrix String UTF8String ASCIIString error warn info @printf".split(" ")),p=h("begin function type immutable let macro for while quote if else elseif try finally catch do".split(" ")),q=h(["end","else","elseif","catch","finally"]),v=/^@[_A-Za-z][_A-Za-z0-9]*/,r=/^:[_A-Za-z][_A-Za-z0-9]*/;return{startState:function(){return{tokenize:l,
scopes:[],leaving_expr:!1}},token:function(a,b){var c;c=b.tokenize(a,b);"."===a.current()&&(c=a.match(n,!1)?null:m,null===c&&"meta"===b.lastStyle&&(c="meta"));return b.lastStyle=c},indent:function(a,b){var c=0;if("end"==b||"]"==b||"}"==b||"else"==b||"elseif"==b||"catch"==b||"finally"==b)c=-1;return 4*(a.scopes.length+c)},lineComment:"#",fold:"indent",electricChars:"edlsifyh]}"}});e.defineMIME("text/x-julia","julia")});
//# sourceMappingURL=julia.js.map