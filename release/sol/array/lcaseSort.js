//>>built
define("sol/array/lcaseSort",[],function(){return function(c,d,b){b={};var a,g=c.length;for(a=0;a<g;++a){var e;e="function"==typeof d?d(c[a]):c[a][d];var f=e.toLowerCase();b[f]||(b[f]={});b[f][e]=c[a]}sortAr=[];for(a in b)for(var h in b[a])sortAr.push(b[a][h]);return sortAr}});
//# sourceMappingURL=lcaseSort.js.map