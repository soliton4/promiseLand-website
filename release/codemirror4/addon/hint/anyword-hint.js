//>>built
(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/addon/hint/anyword-hint",["../../lib/codemirror"],b):b(CodeMirror)})(function(b){var q=/[\w$]+/;b.registerHelper("hint","anyword",function(k,m){for(var l=m&&m.word||q,r=m&&m.range||500,d=k.getCursor(),a=k.getLine(d.line),c=d.ch,e=c;e<a.length&&l.test(a.charAt(e));)++e;for(;c&&l.test(a.charAt(c-1));)--c;for(var a=c!=e&&a.slice(c,e),n=[],p={},l=
RegExp(l.source,"g"),f=-1;1>=f;f+=2)for(var g=d.line,s=Math.min(Math.max(g+f*r,k.firstLine()),k.lastLine())+f;g!=s;g+=f)for(var t=k.getLine(g),h;h=l.exec(t);)if(!(g==d.line&&h[0]===a)&&(!a||0==h[0].lastIndexOf(a,0))&&!Object.prototype.hasOwnProperty.call(p,h[0]))p[h[0]]=!0,n.push(h[0]);return{list:n,from:b.Pos(d.line,c),to:b.Pos(d.line,e)}})});
//# sourceMappingURL=anyword-hint.js.map