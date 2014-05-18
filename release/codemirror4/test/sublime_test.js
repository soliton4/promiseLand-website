//>>built
define("codemirror4/test/sublime_test",["dojo","dijit","dojox"],function(h,k,l){(function(){function c(a){var b=Array.prototype.slice.call(arguments,1);testCM(a,function(a){for(var d=0;d<b.length;d++){var c=b[d];"string"==typeof c&&0==d?a.setValue(c):"string"==typeof c?a.execCommand(c):c instanceof e?a.setCursor(c):c(a)}})}function b(a,b,c){return function(d){eq(d.listSelections().length,1);eqPos(d.getCursor("head"),e(a,b),c);eqPos(d.getCursor("anchor"),e(a,b),c)}}function d(a,b){return function(c){eq(c.getValue(),
a,b)}}function g(a){if(a.length%4)throw Error("Wrong number of arguments for ranges.");for(var b=[],c=0;c<a.length;c+=4)b.push({anchor:e(a[c],a[c+1]),head:e(a[c+2],a[c+3])});return b}function f(){var a=g(arguments);return function(b){b.setSelections(a,0)}}function a(){var a=g(arguments);return function(b){b=b.listSelections();if(b.length!=a.length)throw new Failure("Expected "+a.length+" selections, but found "+b.length);for(var c=0;c<b.length;c++)eqPos(b[c].anchor,a[c].anchor,"anchor "+c),eqPos(b[c].head,
a[c].head,"head "+c)}}var e=CodeMirror.Pos;namespace="sublime_";c("bySubword","the foo_bar DooDahBah \n a","goSubwordLeft",b(0,0),"goSubwordRight",b(0,3),"goSubwordRight",b(0,7),"goSubwordRight",b(0,11),"goSubwordRight",b(0,15),"goSubwordRight",b(0,18),"goSubwordRight",b(0,21),"goSubwordRight",b(0,22),"goSubwordRight",b(1,0),"goSubwordRight",b(1,2),"goSubwordRight",b(1,2),"goSubwordLeft",b(1,1),"goSubwordLeft",b(1,0),"goSubwordLeft",b(0,22),"goSubwordLeft",b(0,18),"goSubwordLeft",b(0,15),"goSubwordLeft",
b(0,12),"goSubwordLeft",b(0,8),"goSubwordLeft",b(0,4),"goSubwordLeft",b(0,0));c("splitSelectionByLine","abc\ndef\nghi",f(0,1,2,2),"splitSelectionByLine",a(0,1,0,3,1,0,1,3,2,0,2,2));c("splitSelectionByLineMulti","abc\ndef\nghi\njkl",f(0,1,1,1,1,2,3,2,3,3,3,3),"splitSelectionByLine",a(0,1,0,3,1,0,1,1,1,2,1,3,2,0,2,3,3,0,3,2,3,3,3,3));c("selectLine","abc\ndef\nghi",f(0,1,0,1,2,0,2,1),"selectLine",a(0,0,1,0,2,0,2,3),f(0,1,1,0),"selectLine",a(0,0,2,0));c("insertLineAfter","abcde\nfghijkl\nmn",f(0,1,0,
1,0,3,0,3,1,2,1,2,1,3,1,5),"insertLineAfter",a(1,0,1,0,3,0,3,0),d("abcde\n\nfghijkl\n\nmn"));c("insertLineBefore","abcde\nfghijkl\nmn",f(0,1,0,1,0,3,0,3,1,2,1,2,1,3,1,5),"insertLineBefore",a(0,0,0,0,2,0,2,0),d("\nabcde\n\nfghijkl\nmn"));c("selectNextOccurrence","a foo bar\nfoobar foo",f(0,2,0,5),"selectNextOccurrence",a(0,2,0,5,1,0,1,3),"selectNextOccurrence",a(0,2,0,5,1,0,1,3,1,7,1,10),"selectNextOccurrence",a(0,2,0,5,1,0,1,3,1,7,1,10),e(0,3),"selectNextOccurrence",a(0,2,0,5),"selectNextOccurrence",
a(0,2,0,5,1,7,1,10),f(0,6,0,9),"selectNextOccurrence",a(0,6,0,9,1,3,1,6));c("selectScope","foo(a) {\n  bar[1, 2];\n}","selectScope",a(0,0,2,1),e(0,4),"selectScope",a(0,4,0,5),e(0,5),"selectScope",a(0,4,0,5),e(0,6),"selectScope",a(0,0,2,1),e(0,8),"selectScope",a(0,8,2,0),e(1,2),"selectScope",a(0,8,2,0),e(1,6),"selectScope",a(1,6,1,10),e(1,9),"selectScope",a(1,6,1,10));c("goToBracket","foo(a) {\n  bar[1, 2];\n}",e(0,0),"goToBracket",b(0,0),e(0,4),"goToBracket",b(0,5),"goToBracket",b(0,4),e(0,8),"goToBracket",
b(2,0),"goToBracket",b(0,8),e(1,2),"goToBracket",b(2,0),e(1,7),"goToBracket",b(1,10),"goToBracket",b(1,6));c("swapLine","1\n2\n3---\n4\n5","swapLineDown",d("2\n1\n3---\n4\n5"),"swapLineUp",d("1\n2\n3---\n4\n5"),"swapLineUp",d("1\n2\n3---\n4\n5"),e(4,1),"swapLineDown",d("1\n2\n3---\n4\n5"),f(0,1,0,1,1,0,2,0,2,2,2,2),"swapLineDown",d("4\n1\n2\n3---\n5"),a(1,1,1,1,2,0,3,0,3,2,3,2),"swapLineUp",d("1\n2\n3---\n4\n5"),a(0,1,0,1,1,0,2,0,2,2,2,2));c("swapLineUpFromEnd","a\nb\nc",e(2,1),"swapLineUp",a(1,1,
1,1),d("a\nc\nb"));c("joinLines","abc\ndef\nghi\njkl","joinLines",d("abc def\nghi\njkl"),b(0,4),"undo",f(0,2,1,1),"joinLines",d("abc def ghi\njkl"),a(0,2,0,8),"undo",f(0,1,0,1,1,1,1,1,3,1,3,1),"joinLines",d("abc def ghi\njkl"),a(0,4,0,4,0,8,0,8,1,3,1,3));c("duplicateLine","abc\ndef\nghi",e(1,0),"duplicateLine",d("abc\ndef\ndef\nghi"),b(2,0),"undo",f(0,1,0,1,1,1,1,1,2,1,2,1),"duplicateLine",d("abc\nabc\ndef\ndef\nghi\nghi"),a(1,1,1,1,3,1,3,1,5,1,5,1));c("duplicateLineSelection","abcdef",f(0,1,0,1,
0,2,0,4,0,5,0,5),"duplicateLine",d("abcdef\nabcdcdef\nabcdcdef"),a(2,1,2,1,2,4,2,6,2,7,2,7));c("selectLinesUpward","123\n345\n789\n012",f(0,1,0,1,1,1,1,3,2,0,2,0,3,0,3,0),"selectLinesUpward",a(0,1,0,1,0,3,0,3,1,0,1,0,1,1,1,3,2,0,2,0,3,0,3,0));c("selectLinesDownward","123\n345\n789\n012",f(0,1,0,1,1,1,1,3,2,0,2,0,3,0,3,0),"selectLinesDownward",a(0,1,0,1,1,1,1,3,2,0,2,0,2,3,2,3,3,0,3,0));c("sortLines","c\nb\na\nC\nB\nA","sortLines",d("A\nB\nC\na\nb\nc"),"undo",f(0,0,2,0,3,0,5,0),"sortLines",d("a\nb\nc\nA\nB\nC"),
a(0,0,2,1,3,0,5,1),"undo",f(1,0,4,0),"sortLinesInsensitive",d("c\na\nB\nb\nC\nA"));c("bookmarks","abc\ndef\nghi\njkl",e(0,1),"toggleBookmark",f(1,1,1,2),"toggleBookmark",f(2,1,2,2),"toggleBookmark","nextBookmark",a(0,1,0,1),"nextBookmark",a(1,1,1,2),"nextBookmark",a(2,1,2,2),"prevBookmark",a(1,1,1,2),"prevBookmark",a(0,1,0,1),"prevBookmark",a(2,1,2,2),"prevBookmark",a(1,1,1,2),"toggleBookmark","prevBookmark",a(2,1,2,2),"prevBookmark",a(0,1,0,1),"selectBookmarks",a(0,1,0,1,2,1,2,2),"clearBookmarks",
e(0,0),"selectBookmarks",b(0,0));c("upAndDowncaseAtCursor","abc\ndef  x\nghI",f(0,1,0,3,1,1,1,1,1,4,1,4),"upcaseAtCursor",d("aBC\nDEF  x\nghI"),a(0,1,0,3,1,3,1,3,1,4,1,4),"downcaseAtCursor",d("abc\ndef  x\nghI"),a(0,1,0,3,1,3,1,3,1,4,1,4));c("mark","abc\ndef\nghi",e(1,1),"setSublimeMark",e(2,1),"selectToSublimeMark",a(2,1,1,1),e(0,1),"swapWithSublimeMark",b(1,1),"swapWithSublimeMark",b(0,1),"deleteToSublimeMark",d("aef\nghi"),"sublimeYank",d("abc\ndef\nghi"),b(1,1));c("findUnder","foo foobar  a",
"findUnder",a(0,4,0,7),"findUnder",a(0,0,0,3),"findUnderPrevious",a(0,4,0,7),"findUnderPrevious",a(0,0,0,3),e(0,4),"findUnder",a(0,4,0,10),e(0,11),"findUnder",a(0,11,0,11))})()});
//# sourceMappingURL=sublime_test.js.map