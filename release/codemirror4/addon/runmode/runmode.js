//>>built
(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/addon/runmode/runmode",["../../lib/codemirror"],a):a(CodeMirror)})(function(a){a.runMode=function(l,d,h,c){d=a.getMode(a.defaults,d);var p=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||9>document.documentMode);if(1==h.nodeType){var n=c&&c.tabSize||a.defaults.tabSize,m=h,f=0;m.innerHTML="";h=function(a,c){if("\n"==a)m.appendChild(document.createTextNode(p?
"\r":a)),f=0;else{for(var g="",e=0;;){var b=a.indexOf("\t",e);if(-1==b){g+=a.slice(e);f+=a.length-e;break}else{f+=b-e;g+=a.slice(e,b);e=n-f%n;f+=e;for(var d=0;d<e;++d)g+=" ";e=b+1}}c?(b=m.appendChild(document.createElement("span")),b.className="cm-"+c.replace(/ +/g," cm-"),b.appendChild(document.createTextNode(g))):m.appendChild(document.createTextNode(g))}}}l=a.splitLines(l);c=c&&c.state||a.startState(d);for(var k=0,q=l.length;k<q;++k){k&&h("\n");var b=new a.StringStream(l[k]);for(!b.string&&d.blankLine&&
d.blankLine(c);!b.eol();){var r=d.token(b,c);h(b.current(),r,k,b.start,c);b.start=b.pos}}}});
//# sourceMappingURL=runmode.js.map