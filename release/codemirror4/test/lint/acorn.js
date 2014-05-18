//>>built
(function(w,V){if("object"==typeof exports&&"object"==typeof module)return V(exports);if("function"==typeof define&&define.amd)return define("codemirror4/test/lint/acorn",["exports"],V);V(w.acorn||(w.acorn={}))})(this,function(w){function V(a){h=a||{};for(var c in Ta)Object.prototype.hasOwnProperty.call(h,c)||(h[c]=Ta[c]);ua=h.sourceFile||null}function l(a,c){var e=Bb(f,a);c+=" ("+e.line+":"+e.column+")";var d=new SyntaxError(c);d.pos=a;d.loc=e;d.raisedAt=b;throw d;}function aa(a){function c(a){if(1==
a.length)return e+="return str \x3d\x3d\x3d "+JSON.stringify(a[0])+";";e+="switch(str){";for(var c=0;c<a.length;++c)e+="case "+JSON.stringify(a[c])+":";e+="return true}return false;"}a=a.split(" ");var e="",b=[],m=0;a:for(;m<a.length;++m){for(var f=0;f<b.length;++f)if(b[f][0].length==a[m].length){b[f].push(a[m]);continue a}b.push([a[m]])}if(3<b.length){b.sort(function(a,c){return c.length-a.length});e+="switch(str.length){";for(m=0;m<b.length;++m)a=b[m],e+="case "+a[0].length+":",c(a);e+="}"}else c(a);
return new Function("str",e)}function M(){this.line=D;this.column=b-A}function s(a,c){K=b;h.locations&&(ha=new M);g=a;N();y=c;O=a.beforeExpr}function va(){for(var a=b,c=h.onComment&&h.locations&&new M,e=f.charCodeAt(b+=2);b<P&&10!==e&&13!==e&&8232!==e&&8233!==e;)++b,e=f.charCodeAt(b);if(h.onComment)h.onComment(!1,f.slice(a+2,b),a,b,c,h.locations&&new M)}function N(){for(;b<P;){var a=f.charCodeAt(b);if(32===a)++b;else if(13===a)++b,a=f.charCodeAt(b),10===a&&++b,h.locations&&(++D,A=b);else if(10===
a||8232===a||8233===a)++b,h.locations&&(++D,A=b);else if(8<a&&14>a)++b;else if(47===a)if(a=f.charCodeAt(b+1),42===a){var a=h.onComment&&h.locations&&new M,c=b,e=f.indexOf("*/",b+=2);-1===e&&l(b-2,"Unterminated comment");b=e+2;if(h.locations){W.lastIndex=c;for(var d=void 0;(d=W.exec(f))&&d.index<b;)++D,A=d.index+d[0].length}if(h.onComment)h.onComment(!0,f.slice(c+2,e),c,b,a,h.locations&&new M)}else if(47===a)va();else break;else if(160===a)++b;else if(5760<=a&&Cb.test(String.fromCharCode(a)))++b;else break}}
function Db(a){switch(a){case 46:return a=f.charCodeAt(b+1),48<=a&&57>=a?a=Ua(!0):(++b,a=s(wa)),a;case 40:return++b,s(E);case 41:return++b,s(B);case 59:return++b,s(F);case 44:return++b,s(G);case 91:return++b,s(ia);case 93:return++b,s(ja);case 123:return++b,s(X);case 125:return++b,s(Q);case 58:return++b,s(Y);case 63:return++b,s(xa);case 48:if(a=f.charCodeAt(b+1),120===a||88===a)return b+=2,a=ba(16),null==a&&l(t+2,"Expected hexadecimal number"),ka(f.charCodeAt(b))&&l(b,"Identifier directly after number"),
s(Z,a);case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Ua(!1);case 34:case 39:a:{b++;for(var c="";;){b>=P&&l(t,"Unterminated string constant");var e=f.charCodeAt(b);if(e===a){++b;a=s(ca,c);break a}if(92===e){var e=f.charCodeAt(++b),d=/^[0-7]+/.exec(f.slice(b,b+3));for(d&&(d=d[0]);d&&255<parseInt(d,8);)d=d.slice(0,-1);"0"===d&&(d=null);++b;if(d)z&&l(b-2,"Octal literal in strict mode"),c+=String.fromCharCode(parseInt(d,8)),b+=d.length-1;else switch(e){case 110:c+="\n";
break;case 114:c+="\r";break;case 120:c+=String.fromCharCode(la(2));break;case 117:c+=String.fromCharCode(la(4));break;case 85:c+=String.fromCharCode(la(8));break;case 116:c+="\t";break;case 98:c+="\b";break;case 118:c+="\x0B";break;case 102:c+="\f";break;case 48:c+="\x00";break;case 13:10===f.charCodeAt(b)&&++b;case 10:h.locations&&(A=b,++D);break;default:c+=String.fromCharCode(e)}}else(13===e||10===e||8232===e||8233===e)&&l(t,"Unterminated string constant"),c+=String.fromCharCode(e),++b}a=void 0}return a;
case 47:return a=f.charCodeAt(b+1),O?(++b,a=Va()):a=61===a?q(R,2):q(ya,1),a;case 37:case 42:return a=61===f.charCodeAt(b+1)?q(R,2):q(Eb,1),a;case 124:case 38:return c=f.charCodeAt(b+1),a=c===a?q(124===a?Wa:Xa,2):61===c?q(R,2):q(124===a?Fb:Gb,1),a;case 94:return a=61===f.charCodeAt(b+1)?q(R,2):q(Hb,1),a;case 43:case 45:return c=f.charCodeAt(b+1),c===a?45==c&&62==f.charCodeAt(b+2)&&ma.test(f.slice(H,b))?(b+=3,va(),N(),a=S()):a=q(Ib,2):a=61===c?q(R,2):q(Jb,1),a;case 60:case 62:return c=f.charCodeAt(b+
1),e=1,c===a?(e=62===a&&62===f.charCodeAt(b+2)?3:2,a=61===f.charCodeAt(b+e)?q(R,e+1):q(Kb,e)):33==c&&60==a&&45==f.charCodeAt(b+2)&&45==f.charCodeAt(b+3)?(b+=4,va(),N(),a=S()):(61===c&&(e=61===f.charCodeAt(b+2)?3:2),a=q(Lb,e)),a;case 61:case 33:return a=61===f.charCodeAt(b+1)?q(Mb,61===f.charCodeAt(b+2)?3:2):q(61===a?za:Ya,1),a;case 126:return q(Ya,1)}return!1}function S(a){a?b=t+1:t=b;h.locations&&(na=new M);if(a)return Va();if(b>=P)return s(oa);var c=f.charCodeAt(b);if(ka(c)||92===c)return Za();
a=Db(c);if(!1===a){c=String.fromCharCode(c);if("\\"===c||$a.test(c))return Za();l(b,"Unexpected character '"+c+"'")}return a}function q(a,c){var e=f.slice(b,b+c);b+=c;s(a,e)}function Va(){for(var a="",c,e,d=b;;){b>=P&&l(d,"Unterminated regular expression");a=f.charAt(b);ma.test(a)&&l(d,"Unterminated regular expression");if(c)c=!1;else{if("["===a)e=!0;else if("]"===a&&e)e=!1;else if("/"===a&&!e)break;c="\\"===a}++b}a=f.slice(d,b);++b;(c=ab())&&!/^[gmsiy]*$/.test(c)&&l(d,"Invalid regexp flag");try{var m=
RegExp(a,c)}catch(h){h instanceof SyntaxError&&l(d,h.message),l(h)}return s(Aa,m)}function ba(a,c){for(var e=b,d=0,m=0,h=null==c?Infinity:c;m<h;++m){var g=f.charCodeAt(b),g=97<=g?g-97+10:65<=g?g-65+10:48<=g&&57>=g?g-48:Infinity;if(g>=a)break;++b;d=d*a+g}return b===e||null!=c&&b-e!==c?null:d}function Ua(a){var c=b,e=!1,d=48===f.charCodeAt(b);!a&&null===ba(10)&&l(c,"Invalid number");46===f.charCodeAt(b)&&(++b,ba(10),e=!0);a=f.charCodeAt(b);if(69===a||101===a)a=f.charCodeAt(++b),(43===a||45===a)&&++b,
null===ba(10)&&l(c,"Invalid number"),e=!0;ka(f.charCodeAt(b))&&l(b,"Identifier directly after number");a=f.slice(c,b);var m;e?m=parseFloat(a):!d||1===a.length?m=parseInt(a,10):/[89]/.test(a)||z?l(c,"Invalid number"):m=parseInt(a,8);return s(Z,m)}function la(a){a=ba(16,a);null===a&&l(t,"Bad character escape sequence");return a}function ab(){$=!1;for(var a,c=!0,e=b;;){var d=f.charCodeAt(b);if(bb(d))$&&(a+=f.charAt(b)),++b;else if(92===d){$||(a=f.slice(e,b));$=!0;117!=f.charCodeAt(++b)&&l(b,"Expecting Unicode escape sequence \\uXXXX");
++b;var d=la(4),m=String.fromCharCode(d);m||l(b-1,"Invalid Unicode escape");(c?ka(d):bb(d))||l(b-4,"Invalid Unicode escape");a+=m}else break;c=!1}return $?a:f.slice(e,b)}function Za(){var a=ab(),c=T;!$&&Nb(a)&&(c=Ba[a]);return s(c,a)}function n(){Ca=t;H=K;Da=ha;S()}function Ea(a){z=a;b=t;if(h.locations)for(;b<A;)A=f.lastIndexOf("\n",A-2)+1,--D;N();S()}function cb(){this.type=null;this.start=t;this.end=null}function db(){this.start=na;this.end=null;null!==ua&&(this.source=ua)}function v(){var a=new cb;
h.locations&&(a.loc=new db);h.directSourceFile&&(a.sourceFile=h.directSourceFile);h.ranges&&(a.range=[t,0]);return a}function L(a){var c=new cb;c.start=a.start;h.locations&&(c.loc=new db,c.loc.start=a.loc.start);h.ranges&&(c.range=[a.range[0],0]);return c}function k(a,c){a.type=c;a.end=H;h.locations&&(a.loc.end=Da);h.ranges&&(a.range[1]=H);return a}function Fa(a){return 5<=h.ecmaVersion&&"ExpressionStatement"===a.type&&"Literal"===a.expression.type&&"use strict"===a.expression.value}function r(a){if(g===
a)return n(),!0}function pa(){return!h.strictSemicolons&&(g===oa||g===Q||ma.test(f.slice(H,t)))}function U(){!r(F)&&!pa()&&I()}function u(a){g===a?n():I()}function I(){l(t,"Unexpected token")}function qa(a){"Identifier"!==a.type&&"MemberExpression"!==a.type&&l(a.start,"Assigning to rvalue");z&&("Identifier"===a.type&&ra(a.name))&&l(a.start,"Assigning to "+a.name+" in strict mode")}function C(){(g===ya||g===R&&"/\x3d"==y)&&S(!0);var a=g,c=v();switch(a){case Ga:case eb:n();var e=a===Ga;r(F)||pa()?c.label=
null:g!==T?I():(c.label=J(),U());for(var b=0;b<p.length;++b){var m=p[b];if(null==c.label||m.name===c.label.name){if(null!=m.kind&&(e||"loop"===m.kind))break;if(c.label&&e)break}}b===p.length&&l(c.start,"Unsyntactic "+a.keyword);return k(c,e?"BreakStatement":"ContinueStatement");case fb:return n(),U(),k(c,"DebuggerStatement");case gb:return n(),p.push(Ha),c.body=C(),p.pop(),u(Ia),c.test=da(),U(),k(c,"DoWhileStatement");case hb:n();p.push(Ha);u(E);if(g===F)return Ja(c,null);if(g===Ka)return a=v(),n(),
ib(a,!0),k(a,"VariableDeclaration"),1===a.declarations.length&&r(sa)?jb(c,a):Ja(c,a);a=x(!1,!0);return r(sa)?(qa(a),jb(c,a)):Ja(c,a);case La:return n(),Ma(c,!0);case kb:return n(),c.test=da(),c.consequent=C(),c.alternate=r(lb)?C():null,k(c,"IfStatement");case mb:return!ea&&!h.allowReturnOutsideFunction&&l(t,"'return' outside of function"),n(),r(F)||pa()?c.argument=null:(c.argument=x(),U()),k(c,"ReturnStatement");case Na:n();c.discriminant=da();c.cases=[];u(X);for(p.push(Ob);g!=Q;)g===Oa||g===nb?(a=
g===Oa,b&&k(b,"SwitchCase"),c.cases.push(b=v()),b.consequent=[],n(),a?b.test=x():(e&&l(Ca,"Multiple default clauses"),e=!0,b.test=null),u(Y)):(b||I(),b.consequent.push(C()));b&&k(b,"SwitchCase");n();p.pop();return k(c,"SwitchStatement");case ob:return n(),ma.test(f.slice(H,t))&&l(H,"Illegal newline after throw"),c.argument=x(),U(),k(c,"ThrowStatement");case pb:return n(),c.block=fa(),c.handler=null,g===qb&&(a=v(),n(),u(E),a.param=J(),z&&ra(a.param.name)&&l(a.param.start,"Binding "+a.param.name+" in strict mode"),
u(B),a.guard=null,a.body=fa(),c.handler=k(a,"CatchClause")),c.guardedHandlers=rb,c.finalizer=r(sb)?fa():null,!c.handler&&!c.finalizer&&l(c.start,"Missing catch or finally clause"),k(c,"TryStatement");case Ka:return n(),ib(c),U(),k(c,"VariableDeclaration");case Ia:return n(),c.test=da(),p.push(Ha),c.body=C(),p.pop(),k(c,"WhileStatement");case tb:return z&&l(t,"'with' in strict mode"),n(),c.object=da(),c.body=C(),k(c,"WithStatement");case X:return fa();case F:return n(),k(c,"EmptyStatement");default:e=
y;m=x();if(a===T&&"Identifier"===m.type&&r(Y)){for(b=0;b<p.length;++b)p[b].name===e&&l(m.start,"Label '"+e+"' is already declared");p.push({name:e,kind:g.isLoop?"loop":g===Na?"switch":null});c.body=C();p.pop();c.label=m;return k(c,"LabeledStatement")}c.expression=m;U();return k(c,"ExpressionStatement")}}function da(){u(E);var a=x();u(B);return a}function fa(a){var c=v(),b=!0,d=!1,f;c.body=[];for(u(X);!r(Q);){var g=C();c.body.push(g);b&&(a&&Fa(g))&&(f=d,Ea(d=!0));b=!1}d&&!f&&Ea(!1);return k(c,"BlockStatement")}
function Ja(a,c){a.init=c;u(F);a.test=g===F?null:x();u(F);a.update=g===B?null:x();u(B);a.body=C();p.pop();return k(a,"ForStatement")}function jb(a,c){a.left=c;a.right=x();u(B);a.body=C();p.pop();return k(a,"ForInStatement")}function ib(a,c){a.declarations=[];for(a.kind="var";;){var b=v();b.id=J();z&&ra(b.id.name)&&l(b.id.start,"Binding "+b.id.name+" in strict mode");b.init=r(za)?x(!0,c):null;a.declarations.push(k(b,"VariableDeclarator"));if(!r(G))break}return a}function x(a,c){var b=Pa(c);if(!a&&
g===G){var d=L(b);for(d.expressions=[b];r(G);)d.expressions.push(Pa(c));return k(d,"SequenceExpression")}return b}function Pa(a){var c;c=Qa(Ra(),-1,a);if(r(xa)){var b=L(c);b.test=c;b.consequent=x(!0);u(Y);b.alternate=x(!0,a);c=k(b,"ConditionalExpression")}return g.isAssign?(b=L(c),b.operator=y,b.left=c,n(),b.right=Pa(a),qa(c),k(b,"AssignmentExpression")):c}function Qa(a,c,b){var d=g.binop;if(null!=d&&(!b||g!==sa)&&d>c){var f=L(a);f.left=a;f.operator=y;a=g;n();f.right=Qa(Ra(),d,b);d=k(f,a===Wa||a===
Xa?"LogicalExpression":"BinaryExpression");return Qa(d,c,b)}return a}function Ra(){if(g.prefix){var a=v(),c=g.isUpdate;a.operator=y;O=a.prefix=!0;n();a.argument=Ra();c?qa(a.argument):z&&("delete"===a.operator&&"Identifier"===a.argument.type)&&l(a.start,"Deleting local variable in strict mode");return k(a,c?"UpdateExpression":"UnaryExpression")}for(c=ga(ta());g.postfix&&!pa();)a=L(c),a.operator=y,a.prefix=!1,a.argument=c,qa(c),n(),c=k(a,"UpdateExpression");return c}function ga(a,c){if(r(wa)){var b=
L(a);b.object=a;b.property=J(!0);b.computed=!1;return ga(k(b,"MemberExpression"),c)}return r(ia)?(b=L(a),b.object=a,b.property=x(),b.computed=!0,u(ja),ga(k(b,"MemberExpression"),c)):!c&&r(E)?(b=L(a),b.callee=a,b.arguments=Sa(B,!1),ga(k(b,"CallExpression"),c)):a}function ta(){switch(g){case ub:var a=v();n();return k(a,"ThisExpression");case T:return J();case Z:case ca:case Aa:return a=v(),a.value=y,a.raw=f.slice(t,K),n(),k(a,"Literal");case vb:case wb:case xb:return a=v(),a.value=g.atomValue,a.raw=
g.keyword,n(),k(a,"Literal");case E:var a=na,c=t;n();var b=x();b.start=c;b.end=K;h.locations&&(b.loc.start=a,b.loc.end=ha);h.ranges&&(b.range=[c,K]);u(B);return b;case ia:return a=v(),n(),a.elements=Sa(ja,!0,!0),k(a,"ArrayExpression");case X:a=v();c=!0;b=!1;a.properties=[];for(n();!r(Q);){if(c)c=!1;else if(u(G),h.allowTrailingCommas&&r(Q))break;var d={key:g===Z||g===ca?ta():J(!0)},m=!1,p;r(Y)?(d.value=x(!0),p=d.kind="init"):5<=h.ecmaVersion&&"Identifier"===d.key.type&&("get"===d.key.name||"set"===
d.key.name)?(m=b=!0,p=d.kind=d.key.name,d.key=g===Z||g===ca?ta():J(!0),g!==E&&I(),d.value=Ma(v(),!1)):I();if("Identifier"===d.key.type&&(z||b))for(var s=0;s<a.properties.length;++s){var q=a.properties[s];if(q.key.name===d.key.name){var w=p==q.kind||m&&"init"===q.kind||"init"===p&&("get"===q.kind||"set"===q.kind);w&&(!z&&"init"===p&&"init"===q.kind)&&(w=!1);w&&l(d.key.start,"Redefinition of property")}}a.properties.push(d)}return k(a,"ObjectExpression");case La:return a=v(),n(),Ma(a,!1);case yb:return a=
v(),n(),a.callee=ga(ta(),!0),r(E)?a.arguments=Sa(B,!1):a.arguments=rb,k(a,"NewExpression");default:I()}}function Ma(a,c){g===T?a.id=J():c?I():a.id=null;a.params=[];var b=!0;for(u(E);!r(B);)b?b=!1:u(G),a.params.push(J());var b=ea,d=p;ea=!0;p=[];a.body=fa(!0);ea=b;p=d;if(z||a.body.body.length&&Fa(a.body.body[0]))for(b=a.id?-1:0;b<a.params.length;++b)if(d=0>b?a.id:a.params[b],(zb(d.name)||ra(d.name))&&l(d.start,"Defining '"+d.name+"' in strict mode"),0<=b)for(var f=0;f<b;++f)d.name===a.params[f].name&&
l(d.start,"Argument name clash in strict mode");return k(a,c?"FunctionDeclaration":"FunctionExpression")}function Sa(a,b,e){for(var d=[],f=!0;!r(a);){if(f)f=!1;else if(u(G),b&&h.allowTrailingCommas&&r(a))break;e&&g===G?d.push(null):d.push(x(!0))}return d}function J(a){var b=v();a&&"everywhere"==h.forbidReserved&&(a=!1);g===T?(!a&&((h.forbidReserved&&(3===h.ecmaVersion?Pb:Qb)(y)||z&&zb(y))&&-1==f.slice(t,K).indexOf("\\"))&&l(t,"The keyword '"+y+"' is reserved"),b.name=y):a&&g.keyword?b.name=g.keyword:
I();O=!1;n();return k(b,"Identifier")}w.version="0.4.1";var h,f,P,ua;w.parse=function(a,c){f=String(a);P=f.length;V(c);D=1;b=A=0;O=!0;N();var e=h.program;Ca=H=b;h.locations&&(Da=new M);ea=z=null;p=[];S();var d=e||v(),m=!0;e||(d.body=[]);for(;g!==oa;)e=C(),d.body.push(e),m&&Fa(e)&&Ea(!0),m=!1;return k(d,"Program")};var Ta=w.defaultOptions={ecmaVersion:5,strictSemicolons:!1,allowTrailingCommas:!0,forbidReserved:!1,allowReturnOutsideFunction:!1,locations:!1,onComment:null,ranges:!1,program:null,sourceFile:null,
directSourceFile:null},Bb=w.getLineInfo=function(a,b){for(var e=1,d=0;;){W.lastIndex=d;var f=W.exec(a);if(f&&f.index<b)++e,d=f.index+f[0].length;else break}return{line:e,column:b-d}};w.tokenize=function(a,c){function e(a){H=K;S(a);d.start=t;d.end=K;d.startLoc=na;d.endLoc=ha;d.type=g;d.value=y;return d}f=String(a);P=f.length;V(c);D=1;b=A=0;O=!0;N();var d={};e.jumpTo=function(a,c){b=a;if(h.locations){D=1;A=W.lastIndex=0;for(var d;(d=W.exec(f))&&d.index<a;)++D,A=d.index+d[0].length}O=c;N()};return e};
var b,t,K,na,ha,g,y,O,D,A,Ca,H,Da,ea,p,z,rb=[],Z={type:"num"},Aa={type:"regexp"},ca={type:"string"},T={type:"name"},oa={type:"eof"},Ga={keyword:"break"},Oa={keyword:"case",beforeExpr:!0},qb={keyword:"catch"},eb={keyword:"continue"},fb={keyword:"debugger"},nb={keyword:"default"},gb={keyword:"do",isLoop:!0},lb={keyword:"else",beforeExpr:!0},sb={keyword:"finally"},hb={keyword:"for",isLoop:!0},La={keyword:"function"},kb={keyword:"if"},mb={keyword:"return",beforeExpr:!0},Na={keyword:"switch"},ob={keyword:"throw",
beforeExpr:!0},pb={keyword:"try"},Ka={keyword:"var"},Ia={keyword:"while",isLoop:!0},tb={keyword:"with"},yb={keyword:"new",beforeExpr:!0},ub={keyword:"this"},vb={keyword:"null",atomValue:null},wb={keyword:"true",atomValue:!0},xb={keyword:"false",atomValue:!1},sa={keyword:"in",binop:7,beforeExpr:!0},Ba={"break":Ga,"case":Oa,"catch":qb,"continue":eb,"debugger":fb,"default":nb,"do":gb,"else":lb,"finally":sb,"for":hb,"function":La,"if":kb,"return":mb,"switch":Na,"throw":ob,"try":pb,"var":Ka,"while":Ia,
"with":tb,"null":vb,"true":wb,"false":xb,"new":yb,"in":sa,"instanceof":{keyword:"instanceof",binop:7,beforeExpr:!0},"this":ub,"typeof":{keyword:"typeof",prefix:!0,beforeExpr:!0},"void":{keyword:"void",prefix:!0,beforeExpr:!0},"delete":{keyword:"delete",prefix:!0,beforeExpr:!0}},ia={type:"[",beforeExpr:!0},ja={type:"]"},X={type:"{",beforeExpr:!0},Q={type:"}"},E={type:"(",beforeExpr:!0},B={type:")"},G={type:",",beforeExpr:!0},F={type:";",beforeExpr:!0},Y={type:":",beforeExpr:!0},wa={type:"."},xa={type:"?",
beforeExpr:!0},ya={binop:10,beforeExpr:!0},za={isAssign:!0,beforeExpr:!0},R={isAssign:!0,beforeExpr:!0},Ib={postfix:!0,prefix:!0,isUpdate:!0},Ya={prefix:!0,beforeExpr:!0},Wa={binop:1,beforeExpr:!0},Xa={binop:2,beforeExpr:!0},Fb={binop:3,beforeExpr:!0},Hb={binop:4,beforeExpr:!0},Gb={binop:5,beforeExpr:!0},Mb={binop:6,beforeExpr:!0},Lb={binop:7,beforeExpr:!0},Kb={binop:8,beforeExpr:!0},Jb={binop:9,prefix:!0,beforeExpr:!0},Eb={binop:10,beforeExpr:!0};w.tokTypes={bracketL:ia,bracketR:ja,braceL:X,braceR:Q,
parenL:E,parenR:B,comma:G,semi:F,colon:Y,dot:wa,question:xa,slash:ya,eq:za,name:T,eof:oa,num:Z,regexp:Aa,string:ca};for(var Ab in Ba)w.tokTypes["_"+Ab]=Ba[Ab];var Pb=aa("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),Qb=aa("class enum extends super const export import"),zb=aa("implements interface let package private protected public static yield"),
ra=aa("eval arguments"),Nb=aa("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),Cb=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,$a=RegExp("[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]"),
Rb=RegExp("[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]"),
ma=/[\n\r\u2028\u2029]/,W=/\r\n|[\n\r\u2028\u2029]/g,ka=w.isIdentifierStart=function(a){return 65>a?36===a:91>a?!0:97>a?95===a:123>a?!0:170<=a&&$a.test(String.fromCharCode(a))},bb=w.isIdentifierChar=function(a){return 48>a?36===a:58>a?!0:65>a?!1:91>a?!0:97>a?95===a:123>a?!0:170<=a&&Rb.test(String.fromCharCode(a))},$,Ha={kind:"loop"},Ob={kind:"switch"}});
//# sourceMappingURL=acorn.js.map