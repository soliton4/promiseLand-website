//>>built
(function(m){"object"==typeof exports&&"object"==typeof module?m(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/addon/hint/xml-hint",["../../lib/codemirror"],m):m(CodeMirror)})(function(m){var r=m.Pos;m.registerHelper("hint","xml",function(n,s){var a=s&&s.schemaInfo,g=s&&s.quoteChar||'"';if(a){var h=n.getCursor(),b=n.getTokenAt(h),k=m.innerMode(n.getMode(),b.state);if("xml"==k.mode.name){var p=[],q=!1,e,t=/\btag\b/.test(b.type),w=t&&/^\w/.test(b.string),
u;if(w){var c=n.getLine(h.line).slice(Math.max(0,b.start-2),b.start);(c=/<\/$/.test(c)?"close":/<$/.test(c)?"open":null)&&(u=b.start-("close"==c?2:1))}else t&&"\x3c"==b.string?c="open":t&&"\x3c/"==b.string&&(c="close");if(!t&&!k.state.tagName||c){w&&(e=b.string);var q=c,k=(g=k.state.context)&&a[g.tagName],f=g?k&&k.children:a["!top"];if(f&&"close"!=c)for(a=0;a<f.length;++a)(!e||0==f[a].lastIndexOf(e,0))&&p.push("\x3c"+f[a]);else if("close"!=c)for(var d in a)a.hasOwnProperty(d)&&("!top"!=d&&"!attrs"!=
d&&(!e||0==d.lastIndexOf(e,0)))&&p.push("\x3c"+d);g&&(!e||"close"==c&&0==g.tagName.lastIndexOf(e,0))&&p.push("\x3c/"+g.tagName+"\x3e")}else{d=(k=a[k.state.tagName])&&k.attrs;a=a["!attrs"];if(!d&&!a)return;if(d){if(a){var c={},l;for(l in a)a.hasOwnProperty(l)&&(c[l]=a[l]);for(l in d)d.hasOwnProperty(l)&&(c[l]=d[l]);d=c}}else d=a;if("string"==b.type||"\x3d"==b.string){c=n.getRange(r(h.line,Math.max(0,h.ch-60)),r(h.line,"string"==b.type?b.start:b.end));a=c.match(/([^\s\u00a0=<>\"\']+)=$/);if(!a||!d.hasOwnProperty(a[1])||
!(f=d[a[1]]))return;"function"==typeof f&&(f=f.call(this,n));"string"==b.type&&(e=b.string,/['"]/.test(b.string.charAt(0))&&(g=b.string.charAt(0),e=b.string.slice(1)),q=!0);for(a=0;a<f.length;++a)(!e||0==f[a].lastIndexOf(e,0))&&p.push(g+f[a]+g)}else{"attribute"==b.type&&(e=b.string,q=!0);for(var v in d)d.hasOwnProperty(v)&&(!e||0==v.lastIndexOf(e,0))&&p.push(v)}}return{list:p,from:q?r(h.line,null==u?b.start:u):h,to:q?r(h.line,b.end):h}}}})});
//# sourceMappingURL=xml-hint.js.map