//>>built
(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/mode/xquery/xquery",["../../lib/codemirror"],k):k(CodeMirror)})(function(k){k.defineMode("xquery",function(){function l(a,c,b){c.tokenize=b;return b(a,c)}function f(a,c){var b=a.next(),d=!1,g;g='"'===a.current()?a.match(/^[^\"]+\"\:/,!1):"'"===a.current()?a.match(/^[^\"]+\'\:/,!1):!1;if("\x3c"==b){if(a.match("!--",!0))return l(a,c,s);if(a.match("![CDATA",
!1))return c.tokenize=t,"tag";if(a.match("?",!1))return l(a,c,u);d=a.eat("/");a.eatSpace();for(var e="";b=a.eat(/[^\s\u00a0=<>\"\'\/?]/);)e+=b;return l(a,c,v(e,d))}if("{"==b)return c.stack.push({type:"codeblock"}),null;if("}"==b)return h(c),null;if(m(c,"tag"))return"\x3e"==b?"tag":"/"==b&&a.eat("\x3e")?(h(c),"tag"):"variable";if(/\d/.test(b))return a.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===b&&a.eat(":"))return c.stack.push({type:"comment"}),l(a,c,k);if(!g&&('"'===b||"'"===b))return l(a,
c,q(b));if("$"===b)return l(a,c,w);if(":"===b&&a.eat("\x3d"))return"keyword";if("("===b)return c.stack.push({type:"paren"}),null;if(")"===b)return h(c),null;if("["===b)return c.stack.push({type:"bracket"}),null;if("]"===b)return h(c),null;e=p.propertyIsEnumerable(b)&&p[b];if(g&&'"'===b)for(;'"'!==a.next(););if(g&&"'"===b)for(;"'"!==a.next(););e||a.eatWhile(/[\w\$_-]/);e=a.eat(":");!a.eat(":")&&e&&a.eatWhile(/[\w\$_-]/);a.match(/^[ \t]*\(/,!1)&&(d=!0);b=a.current();e=p.propertyIsEnumerable(b)&&p[b];
d&&!e&&(e={type:"function_call",style:"variable def"});if(m(c,"xmlconstructor"))return h(c),"variable";("element"==b||"attribute"==b||"axis_specifier"==e.type)&&c.stack.push({type:"xmlconstructor"});return e?e.style:"variable"}function k(a,c){for(var b=!1,d=!1,g=0,e;e=a.next();){if(")"==e&&b)if(0<g)g--;else{h(c);break}else":"==e&&d&&g++;b=":"==e;d="("==e}return"comment"}function q(a,c){return function(b,d){var g;if(m(d,"string")&&b.current()==a)return h(d),c&&(d.tokenize=c),"string";g={type:"string",
name:a,tokenize:q(a,c)};d.stack.push(g);if(b.match("{",!1)&&n(d))return d.tokenize=f,"string";for(;g=b.next();)if(g==a){h(d);c&&(d.tokenize=c);break}else if(b.match("{",!1)&&n(d)){d.tokenize=f;break}return"string"}}function w(a,c){var b=/[\w\$_-]/;if(a.eat('"')){for(;'"'!==a.next(););a.eat(":")}else a.eatWhile(b),a.match(":\x3d",!1)||a.eat(":");a.eatWhile(b);c.tokenize=f;return"variable"}function v(a,c){return function(b,d){b.eatSpace();if(c&&b.eat("\x3e"))return h(d),d.tokenize=f,"tag";b.eat("/")||
d.stack.push({type:"tag",name:a,tokenize:f});b.eat("\x3e")?d.tokenize=f:d.tokenize=r;return"tag"}}function r(a,c){var b=a.next();if("/"==b&&a.eat("\x3e"))return n(c)&&h(c),m(c,"tag")&&h(c),"tag";if("\x3e"==b)return n(c)&&h(c),"tag";if("\x3d"==b)return null;if('"'==b||"'"==b)return l(a,c,q(b,r));n(c)||c.stack.push({type:"attribute",tokenize:r});a.eat(/[a-zA-Z_:]/);a.eatWhile(/[-a-zA-Z0-9_:.]/);a.eatSpace();if(a.match("\x3e",!1)||a.match("/",!1))h(c),c.tokenize=f;return"attribute"}function s(a,c){for(var b;b=
a.next();)if("-"==b&&a.match("-\x3e",!0))return c.tokenize=f,"comment"}function t(a,c){for(var b;b=a.next();)if("]"==b&&a.match("]",!0))return c.tokenize=f,"comment"}function u(a,c){for(var b;b=a.next();)if("?"==b&&a.match("\x3e",!0))return c.tokenize=f,"comment meta"}function n(a){return m(a,"attribute")}function m(a,c){return a.stack.length&&a.stack[a.stack.length-1].type==c}function h(a){a.stack.pop();a.tokenize=a.stack.length&&a.stack[a.stack.length-1].tokenize||f}var p=function(){function a(a){return{type:a,
style:"keyword"}}for(var c=a("keyword a"),b=a("keyword b"),d=a("keyword c"),g=a("operator"),e={type:"atom",style:"atom"},h={type:"axis_specifier",style:"qualifier"},c={"if":c,"switch":c,"while":c,"for":c,"else":b,then:b,"try":b,"finally":b,"catch":b,element:d,attribute:d,let:d,"implements":d,"import":d,module:d,namespace:d,"return":d,"super":d,"this":d,"throws":d,where:d,"private":d,",":{type:"punctuation",style:null},"null":e,"fn:false()":e,"fn:true()":e},f="after ancestor ancestor-or-self and as ascending assert attribute before by case cast child comment declare default define descendant descendant-or-self descending document document-node element else eq every except external following following-sibling follows for function if import in instance intersect item let module namespace node node of only or order parent precedes preceding preceding-sibling processing-instruction ref return returns satisfies schema schema-element self some sortby stable text then to treat typeswitch union variable version where xquery empty-sequence".split(" "),
b=0,d=f.length;b<d;b++)c[f[b]]=a(f[b]);f="xs:string xs:float xs:decimal xs:double xs:integer xs:boolean xs:date xs:dateTime xs:time xs:duration xs:dayTimeDuration xs:time xs:yearMonthDuration numeric xs:hexBinary xs:base64Binary xs:anyURI xs:QName xs:byte xs:boolean xs:anyURI xf:yearMonthDuration".split(" ");b=0;for(d=f.length;b<d;b++)c[f[b]]=e;e="eq ne lt le gt ge :\x3d \x3d \x3e \x3e\x3d \x3c \x3c\x3d . | ? and or div idiv mod * / + -".split(" ");b=0;for(d=e.length;b<d;b++)c[e[b]]=g;g="self:: attribute:: child:: descendant:: descendant-or-self:: parent:: ancestor:: ancestor-or-self:: following:: preceding:: following-sibling:: preceding-sibling::".split(" ");
b=0;for(d=g.length;b<d;b++)c[g[b]]=h;return c}();return{startState:function(){return{tokenize:f,cc:[],stack:[]}},token:function(a,c){return a.eatSpace()?null:c.tokenize(a,c)},blockCommentStart:"(:",blockCommentEnd:":)"}});k.defineMIME("application/xquery","xquery")});
//# sourceMappingURL=xquery.js.map