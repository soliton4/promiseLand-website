//>>built
(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/mode/tiddlywiki/tiddlywiki",["../../lib/codemirror"],f):f(CodeMirror)})(function(f){f.defineMode("tiddlywiki",function(){function g(a,d,c){d.tokenize=c;return c(a,d)}function e(a,d){var c=a.sol(),b;d.block=!1;b=a.peek();if(c&&/[<\/\*{}\-]/.test(b)){if(a.match(m))return d.block=!0,g(a,d,h);if(a.match(n))return"quote";if(a.match(p)||a.match(q)||
a.match(r)||a.match(s)||a.match(t)||a.match(u))return"comment";if(a.match(v))return"hr"}b=a.next();if(c&&/[\/\*!#;:>|]/.test(b)){if("!"==b)return a.skipToEnd(),"header";if("*"==b)return a.eatWhile("*"),"comment";if("#"==b)return a.eatWhile("#"),"comment";if(";"==b)return a.eatWhile(";"),"comment";if(":"==b)return a.eatWhile(":"),"comment";if("\x3e"==b)return a.eatWhile("\x3e"),"quote";if("|"==b)return"header"}if("{"==b&&a.match(/\{\{/))return g(a,d,h);if(/[hf]/i.test(b)&&/[ti]/i.test(a.peek())&&a.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";
if('"'==b)return"string";if("~"==b)return"brace";if(/[\[\]]/.test(b)&&a.peek()==b)return a.next(),"brace";if("@"==b)return a.eatWhile(w),"link";if(/\d/.test(b))return a.eatWhile(/\d/),"number";if("/"==b){if(a.eat("%"))return g(a,d,f);if(a.eat("/"))return g(a,d,x)}if("_"==b&&a.eat("_"))return g(a,d,y);if("-"==b&&a.eat("-")){if(" "!=a.peek())return g(a,d,z);if(" "==a.peek())return"brace"}if("'"==b&&a.eat("'"))return g(a,d,A);if("\x3c"==b){if(a.eat("\x3c"))return g(a,d,B);a.eatWhile(/[\w\$_]/);c=a.current();
return(c=k.propertyIsEnumerable(c)&&k[c])?c.style:null}}function f(a,d){for(var c=!1,b;b=a.next();){if("/"==b&&c){d.tokenize=e;break}c="%"==b}return"comment"}function A(a,d){for(var c=!1,b;b=a.next();){if("'"==b&&c){d.tokenize=e;break}c="'"==b}return"strong"}function h(a,d){var c=d.block;if(c&&a.current())return"comment";if(!c&&a.match(C)||c&&a.sol()&&a.match(D))return d.tokenize=e,"comment";a.next();return"comment"}function x(a,d){for(var c=!1,b;b=a.next();){if("/"==b&&c){d.tokenize=e;break}c="/"==
b}return"em"}function y(a,d){for(var c=!1,b;b=a.next();){if("_"==b&&c){d.tokenize=e;break}c="_"==b}return"underlined"}function z(a,d){for(var c=!1,b;b=a.next();){if("-"==b&&c){d.tokenize=e;break}c="-"==b}return"strikethrough"}function B(a,d){var c;if("\x3c\x3c"==a.current())return"macro";if(c=a.next()){if("\x3e"==c&&"\x3e"==a.peek())return a.next(),d.tokenize=e,"macro";a.eatWhile(/[\w\$_]/);c=a.current();return(c=l.propertyIsEnumerable(c)&&l[c])?c.style:null}d.tokenize=e}var k={},l=function(){function a(a){return{type:a,
style:"macro"}}return{allTags:a("allTags"),closeAll:a("closeAll"),list:a("list"),newJournal:a("newJournal"),newTiddler:a("newTiddler"),permaview:a("permaview"),saveChanges:a("saveChanges"),search:a("search"),slider:a("slider"),tabs:a("tabs"),tag:a("tag"),tagging:a("tagging"),tags:a("tags"),tiddler:a("tiddler"),timeline:a("timeline"),today:a("today"),version:a("version"),option:a("option"),"with":a("with"),filter:a("filter")}}(),w=/[\w_\-]/i,v=/^\-\-\-\-+$/,p=/^\/\*\*\*$/,q=/^\*\*\*\/$/,n=/^<<<$/,
r=/^\/\/\{\{\{$/,s=/^\/\/\}\}\}$/,t=/^\x3c!--\{\{\{--\x3e$/,u=/^\x3c!--\}\}\}--\x3e$/,m=/^\{\{\{$/,D=/^\}\}\}$/,C=/.*?\}\}\}/;return{startState:function(){return{tokenize:e,indented:0,level:0}},token:function(a,d){return a.eatSpace()?null:d.tokenize(a,d)},electricChars:""}});f.defineMIME("text/x-tiddlywiki","tiddlywiki")});
//# sourceMappingURL=tiddlywiki.js.map