//>>built
(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("promiseland")):"function"==typeof define&&define.amd?define("codemirror4/addon/lint/promiseland-lint",["../../lib/codemirror","promiseland"],a):a(CodeMirror)})(function(a,f){var h=new f.Parser;a.registerHelper("lint","promiseland",function(f,k){var g=[];h.parse(f).then(function(b){if(b&&b.warnings){var c=0,e=b.warnings.length;for(c;c<e;++c){var d=b.warnings[c];g.push({message:d.msg,severity:"warning",
from:a.Pos(d.line-1,d.column-1),to:a.Pos(d.line-1,d.column+1)})}}},function(b){var c=b.line||1,e=b.column||1;g.push({message:"parse error: "+b.msg,severity:"error",from:a.Pos(c-1,e-1),to:a.Pos(c-1,e+1)})});return g})});
//# sourceMappingURL=promiseland-lint.js.map