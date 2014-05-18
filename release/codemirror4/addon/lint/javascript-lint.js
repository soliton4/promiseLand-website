//>>built
(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/addon/lint/javascript-lint",["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function p(d){m(d,q,"warning",!0);m(d,r,"error");var f;a:{f=d.description;for(var b=0;b<n.length;b++)if(-1!==f.indexOf(n[b])){f=!0;break a}f=!1}return f?null:d}function m(d,f,b,a){var h,c,g;h=d.description;for(var e=0;e<f.length;e++){c=f[e];g="string"===typeof c?
c:c[0];c="string"===typeof c?null:c[1];g=-1!==h.indexOf(g);if(a||g)d.severity=b;g&&c&&(d.description=c)}}function s(d,f){for(var b=0;b<d.length;b++){var a=d[b];if(a){var h;h=[];if(a.evidence){var c=h[a.line];if(!c){var g=a.evidence,c=[];Array.prototype.forEach.call(g,function(a,b){"\t"===a&&c.push(b+1)});h[a.line]=c}if(0<c.length){var k=a.character;c.forEach(function(a){k>a&&(k-=1)});a.character=k}}var g=a.character-1,l=g+1;a.evidence&&(h=a.evidence.substring(g).search(/.\b/),-1<h&&(l+=h));a.description=
a.reason;a.start=a.character;a.end=l;(a=p(a))&&f.push({message:a.description,severity:a.severity,from:e.Pos(a.line-1,g),to:e.Pos(a.line-1,l)})}}}var n=["Dangerous comment"],q=[["Expected '{'","Statement body should be inside '{ }' braces."]],r="Missing semicolon;Extra comma;Missing property name;Unmatched ; and instead saw; is not defined;Unclosed string;Stopping, unable to continue".split(";");e.registerHelper("lint","javascript",function(d,f){var b=e.JSHINT;!b&&(window&&window.JSHINT&&"function"==
typeof window.JSHINT)&&(b=window.JSHINT);if(!b)return[];b(d,f);var b=b.data().errors,a=[];b&&s(b,a);return a})});
//# sourceMappingURL=javascript-lint.js.map