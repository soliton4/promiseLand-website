//>>built
(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/addon/edit/trailingspace",["../../lib/codemirror"],a):a(CodeMirror)})(function(a){a.defineOption("showTrailingSpace",!1,function(d,e,b){b==a.Init&&(b=!1);b&&!e?d.removeOverlay("trailingspace"):!b&&e&&d.addOverlay({token:function(a){for(var b=a.string.length,c=b;c&&/\s/.test(a.string.charAt(c-1));--c);if(c>a.pos)return a.pos=c,null;a.pos=b;return"trailingspace"},
name:"trailingspace"})})});
//# sourceMappingURL=trailingspace.js.map