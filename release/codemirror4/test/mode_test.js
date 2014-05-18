//>>built
define("codemirror4/test/mode_test",["dojo","dijit","dojox"],function(w,x,y){(function(){function q(d,h,c){for(;;){h=d.indexOf(c,h);if(-1==h)return null;if(d.charAt(h+1)!=c)return h;h+=2}}function t(d){for(var h=[],c="",b=0;b<d.length;++b){b&&(c+="\n");for(var g=d[b],k=0;k<g.length;){var l=null,f;if("["==g.charAt(k)&&"["!=g.charAt(k+1)){r.lastIndex=k+1;l=r.exec(g)[0].replace(/&/g," ");f=k+l.length+2;var e=q(g,f,"]");if(null==e)throw Error("Unterminated token at "+k+" in '"+g+"'"+l);f=g.slice(f,e);
k=e+1}else e=q(g,k,"["),null==e&&(e=g.length),f=g.slice(k,e),k=e;f=f.replace(/\[\[|\]\]/g,function(a){return a.charAt(0)});h.push({style:l,text:f});c+=f}}return{tokens:h,plain:c}}function n(d){return d.replace("\x26","\x26amp;").replace("\x3c","\x26lt;").replace(/>/g,"\x26gt;").replace(/"/g,"\x26quot;").replace(/'/g,"\x26#039;")}function u(d){function h(c,b){if("function"==typeof b){var g=b.toString().match(/function\s*[^\s(]*/);return g?g[0]:"function"}return b}return window.JSON&&JSON.stringify?
JSON.stringify(d,h,2):"[unsupported]"}function v(d,h){for(var c=h.startState(),b=d.replace(/\r\n/g,"\n").split("\n"),g=[],k=0,l=0;l<b.length;++l){var f=b[l],e=!0;if(h.indent){var a=f.match(/^\s*/)[0],p=h.indent(c,f.slice(a.length));p!=CodeMirror.Pass&&p!=a.length&&(g.indentFailures||(g.indentFailures=[])).push("Indentation of line "+(l+1)+" is "+p+" (expected "+a.length+")")}a=new CodeMirror.StringStream(f);for(""==f&&h.blankLine&&h.blankLine(c);!a.eol();){for(f=0;10>f&&a.start>=a.pos;f++)var m=h.token(a,
c);if(10==f)throw new Failure("Failed to advance the stream."+a.string+" "+a.pos);f=a.current();m&&-1<m.indexOf(" ")&&(m=m.split(" ").sort().join(" "));a.start=a.pos;k&&g[k-1].style==m&&!e?g[k-1].text+=f:f&&(g[k++]={style:m,text:f,state:u(c)});if(5E3<a.pos){g[k++]={style:null,text:this.text.slice(a.pos)};break}e=!1}}return g}function s(d,h){var c;c='\x3ctable class\x3d"mt-output"\x3e\x3ctr\x3e';for(var b=0;b<d.length;++b){var g=d[b].text;c+='\x3ctd class\x3d"mt-token"'+(b==2*h?" style\x3d'background: pink'":
"")+'\x3e\x3cspan class\x3d"cm-'+n(String(d[b].style))+'"\x3e'+n(g.replace(/ /g,"\u00b7"))+"\x3c/span\x3e\x3c/td\x3e"}c+="\x3c/tr\x3e\x3ctr\x3e";for(b=0;b<d.length;++b)c+='\x3ctd class\x3d"mt-style"\x3e\x3cspan\x3e'+(d[b].style||null)+"\x3c/span\x3e\x3c/td\x3e";if(d[0].state){c+='\x3c/tr\x3e\x3ctr class\x3d"mt-state-row" title\x3d"State AFTER each token"\x3e';for(b=0;b<d.length;++b)c+='\x3ctd class\x3d"mt-state"\x3e\x3cpre\x3e'+n(d[b].state)+"\x3c/pre\x3e\x3c/td\x3e"}return c+"\x3c/tr\x3e\x3c/table\x3e"}
var r=/[\w&-_]+/g;test.mode=function(d,h,c,b){var g=t(c);return test((b||h.name)+"_"+d,function(){for(var c=g.plain,b=g.tokens,f=[],e=0;e<b.length;++e){var a=b[e].style;a&&a.indexOf(" ")&&(a=a.split(" ").sort().join(" "));f.push({style:a,text:b[e].text})}b=v(c,h);a="";a:{for(var e=Math.min(f.length,b.length),d=0;d<e;++d)if(f[d].style!=b[d].style||f[d].text!=b[d].text){e=d;break a}e=f.length>e||b.length>e?e:void 0}null!=e&&(a=a+'\x3cdiv class\x3d"mt-test mt-fail"\x3e'+("\x3cpre\x3e"+n(c)+"\x3c/pre\x3e"),
a+='\x3cdiv class\x3d"cm-s-default"\x3e',a+="expected:",a+=s(f,e),a+="observed: [\x3ca onclick\x3d\"this.parentElement.className+\x3d' mt-state-unhide'\"\x3edisplay states\x3c/a\x3e]",a+=s(b,e),a+="\x3c/div\x3e",a+="\x3c/div\x3e");if(b.indentFailures)for(e=0;e<b.indentFailures.length;e++)a+="\x3cdiv class\x3d'mt-test mt-fail'\x3e"+n(b.indentFailures[e])+"\x3c/div\x3e";if(a)throw new Failure(a);})}})()});
//# sourceMappingURL=mode_test.js.map