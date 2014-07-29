//>>built
define("sol/wgt/array/memberSort",[],function(){return function(a,b,g){var d=g?1:-1,e=-d;return"function"==typeof b?a.sort(function(h,c){var a=b(h),f=b(c);return a<f?d:f<a?e:0}):a.sort(function(a,c){return a[b]<c[b]?d:c[b]<a[b]?e:0})}});
//# sourceMappingURL=memberSort.js.map