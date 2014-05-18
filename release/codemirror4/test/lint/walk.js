//>>built
(function(h){if("object"==typeof exports&&"object"==typeof module)return h(exports);if("function"==typeof define&&define.amd)return define("codemirror4/test/lint/walk",["exports"],h);h((this.acorn||(this.acorn={})).walk={})})(function(h){function p(a){return"string"==typeof a?function(d){return d==a}:a?a:function(){return!0}}function m(a,d){this.node=a;this.state=d}function q(a,d,c){c(a,d)}function n(a,d,c){}function r(a){for(;a.isCatch;)a=a.prev;return a}h.simple=function(a,d,c,g){function b(a,g,
l){l=l||a.type;var s=d[l];c[l](a,g,b);s&&s(a,g)}c||(c=h.base);b(a,g)};h.recursive=function(a,d,c,g){function b(a,d,c){f[c||a.type](a,d,b)}var f=c?h.make(c,g):g;b(a,d)};h.findNodeAt=function(a,d,c,g,b,f){g=p(g);try{b||(b=h.base);var k=function(a,l,f){f=f||a.type;if((null==d||a.start<=d)&&(null==c||a.end>=c))b[f](a,l,k);if(g(f,a)&&(null==d||a.start==d)&&(null==c||a.end==c))throw new m(a,l);};k(a,f)}catch(l){if(l instanceof m)return l;throw l;}};h.findNodeAround=function(a,d,c,g,b){c=p(c);try{g||(g=
h.base);var f=function(a,b,e){e=e||a.type;if(!(a.start>d||a.end<d))if(g[e](a,b,f),c(e,a))throw new m(a,b);};f(a,b)}catch(k){if(k instanceof m)return k;throw k;}};h.findNodeAfter=function(a,d,c,g,b){c=p(c);try{g||(g=h.base);var f=function(a,b,e){if(!(a.end<d)){e=e||a.type;if(a.start>=d&&c(e,a))throw new m(a,b);g[e](a,b,f)}};f(a,b)}catch(k){if(k instanceof m)return k;throw k;}};h.findNodeBefore=function(a,d,c,g,b){c=p(c);g||(g=h.base);var f,k=function(a,b,e){if(!(a.start>d)){e=e||a.type;if(a.end<=d&&
(!f||f.node.end<a.end)&&c(e,a))f=new m(a,b);g[e](a,b,k)}};k(a,b);return f};h.make=function(a,d){d||(d=h.base);var c={},b;for(b in d)c[b]=d[b];for(b in a)c[b]=a[b];return c};var b=h.base={};b.Program=b.BlockStatement=function(a,d,c){for(var b=0;b<a.body.length;++b)c(a.body[b],d,"Statement")};b.Statement=q;b.EmptyStatement=n;b.ExpressionStatement=function(a,d,c){c(a.expression,d,"Expression")};b.IfStatement=function(a,d,c){c(a.test,d,"Expression");c(a.consequent,d,"Statement");a.alternate&&c(a.alternate,
d,"Statement")};b.LabeledStatement=function(a,d,c){c(a.body,d,"Statement")};b.BreakStatement=b.ContinueStatement=n;b.WithStatement=function(a,d,c){c(a.object,d,"Expression");c(a.body,d,"Statement")};b.SwitchStatement=function(a,d,c){c(a.discriminant,d,"Expression");for(var b=0;b<a.cases.length;++b){var e=a.cases[b];e.test&&c(e.test,d,"Expression");for(var f=0;f<e.consequent.length;++f)c(e.consequent[f],d,"Statement")}};b.ReturnStatement=function(a,d,c){a.argument&&c(a.argument,d,"Expression")};b.ThrowStatement=
function(a,d,c){c(a.argument,d,"Expression")};b.TryStatement=function(a,d,c){c(a.block,d,"Statement");a.handler&&c(a.handler.body,d,"ScopeBody");a.finalizer&&c(a.finalizer,d,"Statement")};b.WhileStatement=function(a,d,c){c(a.test,d,"Expression");c(a.body,d,"Statement")};b.DoWhileStatement=b.WhileStatement;b.ForStatement=function(a,d,c){a.init&&c(a.init,d,"ForInit");a.test&&c(a.test,d,"Expression");a.update&&c(a.update,d,"Expression");c(a.body,d,"Statement")};b.ForInStatement=function(a,d,c){c(a.left,
d,"ForInit");c(a.right,d,"Expression");c(a.body,d,"Statement")};b.ForInit=function(a,d,c){"VariableDeclaration"==a.type?c(a,d):c(a,d,"Expression")};b.DebuggerStatement=n;b.FunctionDeclaration=function(a,d,c){c(a,d,"Function")};b.VariableDeclaration=function(a,d,c){for(var b=0;b<a.declarations.length;++b){var e=a.declarations[b];e.init&&c(e.init,d,"Expression")}};b.Function=function(a,d,c){c(a.body,d,"ScopeBody")};b.ScopeBody=function(a,d,c){c(a,d,"Statement")};b.Expression=q;b.ThisExpression=n;b.ArrayExpression=
function(a,d,c){for(var b=0;b<a.elements.length;++b){var e=a.elements[b];e&&c(e,d,"Expression")}};b.ObjectExpression=function(a,d,c){for(var b=0;b<a.properties.length;++b)c(a.properties[b].value,d,"Expression")};b.FunctionExpression=b.FunctionDeclaration;b.SequenceExpression=function(a,d,c){for(var b=0;b<a.expressions.length;++b)c(a.expressions[b],d,"Expression")};b.UnaryExpression=b.UpdateExpression=function(a,d,c){c(a.argument,d,"Expression")};b.BinaryExpression=b.AssignmentExpression=b.LogicalExpression=
function(a,d,c){c(a.left,d,"Expression");c(a.right,d,"Expression")};b.ConditionalExpression=function(a,d,c){c(a.test,d,"Expression");c(a.consequent,d,"Expression");c(a.alternate,d,"Expression")};b.NewExpression=b.CallExpression=function(a,d,c){c(a.callee,d,"Expression");if(a.arguments)for(var b=0;b<a.arguments.length;++b)c(a.arguments[b],d,"Expression")};b.MemberExpression=function(a,d,c){c(a.object,d,"Expression");a.computed&&c(a.property,d,"Expression")};b.Identifier=b.Literal=n;h.scopeVisitor=
h.make({Function:function(a,d,c){for(var b={vars:Object.create(null),prev:d,isCatch:void 0},e=0;e<a.params.length;++e)b.vars[a.params[e].name]={type:"argument",node:a.params[e]};a.id&&(e="FunctionDeclaration"==a.type,(e?r(d):b).vars[a.id.name]={type:e?"function":"function name",node:a.id});c(a.body,b,"ScopeBody")},TryStatement:function(a,d,c){c(a.block,d,"Statement");if(a.handler){var b={vars:Object.create(null),prev:d,isCatch:!0};b.vars[a.handler.param.name]={type:"catch clause",node:a.handler.param};
c(a.handler.body,b,"ScopeBody")}a.finalizer&&c(a.finalizer,d,"Statement")},VariableDeclaration:function(a,b,c){for(var g=r(b),e=0;e<a.declarations.length;++e){var f=a.declarations[e];g.vars[f.id.name]={type:"var",node:f.id};f.init&&c(f.init,b,"Expression")}}})});
//# sourceMappingURL=walk.js.map