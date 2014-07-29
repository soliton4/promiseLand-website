//>>built
var miniExcludes={},amdExcludes={},copyOnly={},isJsRe=/\.js$/,isTestRe=/\/test\//,profile={resourceTags:{test:function(a,b){return isTestRe.test(a)},miniExclude:function(a,b){return isTestRe.test(a)||b in miniExcludes},amd:function(a,b){return isJsRe.test(a)&&!(b in amdExcludes)},copyOnly:function(a,b){return b in copyOnly}}};
//# sourceMappingURL=package.js.map