//>>built
(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/mode/cypher/cypher",["../../lib/codemirror"],d):d(CodeMirror)})(function(d){var g=function(c){return RegExp("^(?:"+c.join("|")+")$","i")};d.defineMode("cypher",function(c){var n=function(b){var a=b.next();if('"'===a||"'"===a)return b.match(/.+?["']/),"string";if(/[{}\(\),\.;\[\]]/.test(a))return"node";if("/"===a&&b.eat("/"))return b.skipToEnd(),
"comment";if(h.test(a))return b.eatWhile(h),null;b.eatWhile(/[_\w\d]/);if(b.eat(":"))return b.eatWhile(/[\w\d_\-]/),"atom";b=b.current();return k.test(b)?"builtin":l.test(b)?"def":m.test(b)?"keyword":"variable"},f=function(b){b.indent=b.context.indent;return b.context=b.context.prev},p=c.indentUnit,k=g("abs acos allShortestPaths asin atan atan2 avg ceil coalesce collect cos cot count degrees e endnode exp extract filter floor haversin head id labels last left length log log10 lower ltrim max min node nodes percentileCont percentileDisc pi radians rand range reduce rel relationship relationships replace right round rtrim shortestPath sign sin split sqrt startnode stdev stdevp str substring sum tail tan timestamp toFloat toInt trim type upper".split(" ")),
l=g("all and any has in none not or single xor".split(" ")),m=g("as asc ascending assert by case commit constraint create csv cypher delete desc descending distinct drop else end false foreach from headers in index is limit load match merge null on optional order periodic remove return scan set skip start then true union unique unwind using when where with".split(" ")),h=/[*+\-<>=&|~%^]/;return{startState:function(){return{tokenize:n,context:null,indent:0,col:0}},token:function(b,a){b.sol()&&(a.context&&
null==a.context.align&&(a.context.align=!1),a.indent=b.indentation());if(b.eatSpace())return null;var c=a.tokenize(b,a);"comment"!==c&&(a.context&&null==a.context.align&&"pattern"!==a.context.type)&&(a.context.align=!0);if(/[\]\}\)]/.test(void 0)){for(;a.context&&"pattern"===a.context.type;)f(a);a.context&&void 0===a.context.type&&f(a)}else if(/atom|string|variable/.test(c)&&a.context)if(/[\}\]]/.test(a.context.type)){var e=b.column();a.context={prev:a.context,indent:a.indent,col:e,type:"pattern"}}else"pattern"===
a.context.type&&!a.context.align&&(a.context.align=!0,a.context.col=b.column());return c},indent:function(b,a){var c=a&&a.charAt(0),e=b.context;if(/[\]\}]/.test(c))for(;e&&"pattern"===e.type;)e=e.prev;c=e&&c===e.type;return!e?0:"keywords"===e.type?d.commands.newlineAndIndent:e.align?e.col+(c?0:1):e.indent+(c?0:p)}}});d.modeExtensions.cypher={autoFormatLineBreaks:function(c){var d,f;d=c.split("\n");f=/\s+\b(return|where|order by|match|with|skip|limit|create|delete|set)\b\s/g;for(c=0;c<d.length;c++)d[c]=
d[c].replace(f," \n$1 ").trim();return d.join("\n")}};d.defineMIME("application/x-cypher-query","cypher")});
//# sourceMappingURL=cypher.js.map