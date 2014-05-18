//>>built
(function(h){"object"==typeof exports&&"object"==typeof module?h(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define("codemirror4/mode/clike/clike",["../../lib/codemirror"],h):h(CodeMirror)})(function(h){function d(a){var b={};a=a.split(" ");for(var d=0;d<a.length;++d)b[a[d]]=!0;return b}function k(a,b){if(!b.startOfLine)return!1;for(;;)if(a.skipTo("\\")){if(a.next(),a.eol()){b.tokenize=k;break}}else{a.skipToEnd();b.tokenize=null;break}return"meta"}function g(a,b){a.backUp(1);
if(a.match(/(R|u8R|uR|UR|LR)/)){var d=a.match(/"(.{0,16})\(/);if(!d)return!1;b.cpp11RawStringDelim=d[1];b.tokenize=n;return n(a,b)}if(a.match(/(u8|u|U|L)/))return a.match(/["']/,!1)?"string":!1;a.next();return!1}function q(a,b){for(var d;null!=(d=a.next());)if('"'==d&&!a.eat('"')){b.tokenize=null;break}return"string"}function n(a,b){a.match(RegExp(".*?\\)"+b.cpp11RawStringDelim+'"'))?b.tokenize=null:a.skipToEnd();return"string"}function e(a,b){function d(a){if(a)for(var b in a)a.hasOwnProperty(b)&&
e.push(b)}"string"==typeof a&&(a=[a]);var e=[];d(b.keywords);d(b.builtin);d(b.atoms);e.length&&(b.helperType=a[0],h.registerHelper("hintWords",a[0],e));for(var l=0;l<a.length;++l)h.defineMIME(a[l],b)}h.defineMode("clike",function(a,b){function d(a,m){var c=a.next();if(s[c]){var b=s[c](a,m);if(!1!==b)return b}if('"'==c||"'"==c)return m.tokenize=e(c),m.tokenize(a,m);if(/[\[\]{}\(\),;\:\.]/.test(c))return f=c,null;if(/\d/.test(c))return a.eatWhile(/[\w\.]/),"number";if("/"==c){if(a.eat("*"))return m.tokenize=
l,l(a,m);if(a.eat("/"))return a.skipToEnd(),"comment"}if(t.test(c))return a.eatWhile(t),"operator";a.eatWhile(/[\w\$_]/);c=a.current();return v.propertyIsEnumerable(c)?(u.propertyIsEnumerable(c)&&(f="newstatement"),"keyword"):w.propertyIsEnumerable(c)?(u.propertyIsEnumerable(c)&&(f="newstatement"),"builtin"):x.propertyIsEnumerable(c)?"atom":"variable"}function e(a){return function(b,c){for(var d=!1,f,e=!1;null!=(f=b.next());){if(f==a&&!d){e=!0;break}d=!d&&"\\"==f}if(e||!d&&!y)c.tokenize=null;return"string"}}
function l(a,d){for(var c=!1,b;b=a.next();){if("/"==b&&c){d.tokenize=null;break}c="*"==b}return"comment"}function k(a,b,c,d,f){this.indented=a;this.column=b;this.type=c;this.align=d;this.prev=f}function g(a,b,c){var d=a.indented;a.context&&"statement"==a.context.type&&(d=a.context.indented);return a.context=new k(d,b,c,null,a.context)}function p(a){var d=a.context.type;if(")"==d||"]"==d||"}"==d)a.indented=a.context.indented;return a.context=a.context.prev}var r=a.indentUnit,n=b.statementIndentUnit||
r,q=b.dontAlignCalls,v=b.keywords||{},w=b.builtin||{},u=b.blockKeywords||{},x=b.atoms||{},s=b.hooks||{},y=b.multiLineStrings,t=/[+\-*&%=<>!?|\/]/,f;return{startState:function(a){return{tokenize:null,context:new k((a||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(a,b){var c=b.context;a.sol()&&(null==c.align&&(c.align=!1),b.indented=a.indentation(),b.startOfLine=!0);if(a.eatSpace())return null;f=null;var e=(b.tokenize||d)(a,b);if("comment"==e||"meta"==e)return e;null==c.align&&(c.align=
!0);if((";"==f||":"==f||","==f)&&"statement"==c.type)p(b);else if("{"==f)g(b,a.column(),"}");else if("["==f)g(b,a.column(),"]");else if("("==f)g(b,a.column(),")");else if("}"==f){for(;"statement"==c.type;)c=p(b);for("}"==c.type&&(c=p(b));"statement"==c.type;)c=p(b)}else f==c.type?p(b):(("}"==c.type||"top"==c.type)&&";"!=f||"statement"==c.type&&"newstatement"==f)&&g(b,a.column(),"statement");b.startOfLine=!1;return e},indent:function(a,b){if(a.tokenize!=d&&null!=a.tokenize)return h.Pass;var c=a.context,
e=b&&b.charAt(0);"statement"==c.type&&"}"==e&&(c=c.prev);var f=e==c.type;return"statement"==c.type?c.indented+("{"==e?0:n):c.align&&(!q||")"!=c.type)?c.column+(f?0:1):")"==c.type&&!f?c.indented+n:c.indented+(f?0:r)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}});e(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:d("auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile"),
blockKeywords:d("case do else for if switch while struct"),atoms:d("null"),hooks:{"#":k},modeProps:{fold:["brace","include"]}});e(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:d("auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile asm dynamic_cast namespace reinterpret_cast try bool explicit new static_cast typeid catch operator template typename class friend private this using const_cast inline public throw virtual delete mutable protected wchar_t alignas alignof constexpr decltype nullptr noexcept thread_local final static_assert override"),
blockKeywords:d("catch class do else finally for if struct switch try while"),atoms:d("true false null"),hooks:{"#":k,u:g,U:g,L:g,R:g},modeProps:{fold:["brace","include"]}});e("text/x-java",{name:"clike",keywords:d("abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),
blockKeywords:d("catch class do else finally for if switch try while"),atoms:d("true false null"),hooks:{"@":function(a){a.eatWhile(/[\w\$_]/);return"meta"}},modeProps:{fold:["brace","import"]}});e("text/x-csharp",{name:"clike",keywords:d("abstract as base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
blockKeywords:d("catch class do else finally for foreach if struct switch try while"),builtin:d("Boolean Byte Char DateTime DateTimeOffset Decimal Double Guid Int16 Int32 Int64 Object SByte Single String TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),atoms:d("true false null"),hooks:{"@":function(a,b){if(a.eat('"'))return b.tokenize=q,q(a,b);a.eatWhile(/[\w\$_]/);return"meta"}}});e("text/x-scala",{name:"clike",keywords:d("abstract case catch class def do else extends false final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try trye type val var while with yield _ : \x3d \x3d\x3e \x3c- \x3c: \x3c% \x3e: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector :: #:: Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
blockKeywords:d("catch class do else finally for forSome if match switch try while"),atoms:d("true false null"),hooks:{"@":function(a){a.eatWhile(/[\w\$_]/);return"meta"}}});e(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:d("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4 sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadowconst attribute uniform varying break continue discard return for while do if else struct in out inout"),
blockKeywords:d("for while do if else struct"),builtin:d("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smootstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
atoms:d("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragColor gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
hooks:{"#":k},modeProps:{fold:["brace","include"]}})});
//# sourceMappingURL=clike.js.map