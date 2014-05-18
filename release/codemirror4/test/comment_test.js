//>>built
define("codemirror4/test/comment_test",["dojo","dijit","dojox"],function(f,g,h){namespace="comment_";(function(){function b(a,b,c,d,e){return testCM(a,function(a){c(a);eq(a.getValue(),e)},{value:d,mode:b})}b("block","javascript",function(a){a.blockComment(Pos(0,3),Pos(3,0),{blockCommentLead:" *"})},"function foo() {\n  return bar;\n}\n","/* function foo() {\n *   return bar;\n * }\n */");b("blockToggle","javascript",function(a){a.blockComment(Pos(0,3),Pos(2,0),{blockCommentLead:" *"});a.uncomment(Pos(0,
3),Pos(2,0),{blockCommentLead:" *"})},"function foo() {\n  return bar;\n}","function foo() {\n  return bar;\n}");b("line","javascript",function(a){a.lineComment(Pos(1,1),Pos(1,1))},"function foo() {\n  return bar;\n}","function foo() {\n//   return bar;\n}");b("lineToggle","javascript",function(a){a.lineComment(Pos(0,0),Pos(2,1));a.uncomment(Pos(0,0),Pos(2,1))},"function foo() {\n  return bar;\n}","function foo() {\n  return bar;\n}");b("fallbackToBlock","css",function(a){a.lineComment(Pos(0,0),Pos(2,
1))},"html {\n  border: none;\n}","/* html {\n  border: none;\n} */");b("fallbackToLine","ruby",function(a){a.blockComment(Pos(0,0),Pos(1))},"def blah()\n  return hah\n","# def blah()\n#   return hah\n");b("commentRange","javascript",function(a){a.blockComment(Pos(1,2),Pos(1,13),{fullLines:!1})},"function foo() {\n  return bar;\n}","function foo() {\n  /*return bar;*/\n}");b("indented","javascript",function(a){a.lineComment(Pos(1,0),Pos(2),{indent:!0})},"function foo() {\n  return bar;\n}","function foo() {\n  // return bar;\n  // }");
b("singleEmptyLine","javascript",function(a){a.setCursor(1);a.execCommand("toggleComment")},"a;\n\nb;","a;\n// \nb;");b("dontMessWithStrings","javascript",function(a){a.execCommand("toggleComment")},'0 \x26\x26 console.log("/*string*/");','// 0 \x26\x26 console.log("/*string*/");');b("dontMessWithStrings2","javascript",function(a){a.execCommand("toggleComment")},'0 \x26\x26 console.log("// string");','// 0 \x26\x26 console.log("// string");');b("dontMessWithStrings3","javascript",function(a){a.execCommand("toggleComment")},
'// 0 \x26\x26 console.log("// string");','0 \x26\x26 console.log("// string");')})()});
//# sourceMappingURL=comment_test.js.map