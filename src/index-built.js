(function(){var e,t;if(typeof exports=="object"&&typeof module=="object")t=function(e,t,n){try{var r=0,i=e.length,s=[];for(r;r<i;++r)s.push(require(e[r]))}catch(o){n(o);return}t.apply(t,s)},e=function(e,n){t(e,function(){module.exports=n.apply(n,arguments)})};else if(typeof define=="function"&&define.amd){var n=define;t=require,e=function(e,r){e instanceof Array?e.unshift("require"):(r=e,e=["require"]),n(e,function(){t=arguments[0];var e=[];for(var n=1;n<arguments.length;++n)e.push(arguments[n]);return r.apply(r,e)})},t=require}else alert("not working out!");e(["promiseland"],function(e){var n=t,r=e.Promise,i=e.Promise,s=function(t){var i=new r;try{n([t],function(t){e.isPromiseLandPromisingModule(t)?t.then(function(e){i.resolve(e)},function(e){i.reject(e)}):i.resolve(t)},function(e){i.reject(e)})}catch(s){i.reject(s)}return i.promise};if(e._hasModule({hashStr:"29a55d0435844e7eb6f7fa800aea0597"}))return e._getModule("29a55d0435844e7eb6f7fa800aea0597");var o=new r;e._registerModule({hashStr:"29a55d0435844e7eb6f7fa800aea0597",module:o,promising:!0});var u;try{u=console}catch(a){}var f;try{f=document}catch(a){}var l;try{l=window}catch(a){}var c=function(){var e=function(e){return function(t){try{e(t)}catch(n){o.reject(n)}}},t=function(e){o.reject(e)},n,r,i,a,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k;return e(function(){u.log("welcome to promiseLand!"),s("dojo/dom-construct").then(e(function(u){n=u,r=n.create("div",{"class":"background"}),n.place(r,f.body),s("./backgroundText").then(e(function(u){i=u,a=0;for(a=0;a<100;++a)n.place(f.createTextNode(i),r);c=n.create("link",{href:"//fonts.googleapis.com/css?family=Open+Sans:300italic,300,400italic,400,600italic,600,700italic,700,800italic,800",rel:"stylesheet",type:"text/css"}),n.place(c,f.head),h=n.create("a",{href:"https://github.com/soliton4/promiseland"}),n.place(n.create("img",{style:"position: absolute; z-Index: 100; top: 0; right: 0; border: 0;",src:"https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"}),h),n.place(h,f.body),p=n.create("div",{"class":"head"}),n.place(p,f.body),d=n.create("div",{"class":"head1"}),n.place(d,p),n.place(f.createTextNode("promiseLand"),d),f.title="promiseLand",v=n.create("div",{"class":"head2"}),n.place(v,p),n.place(f.createTextNode("a very promising Language"),v),s("dojo/dom-class").then(e(function(r){m=r,m.add(f.body,"claro"),s("dijit/MenuBar").then(e(function(r){g=r,s("dijit/MenuBarItem").then(e(function(r){y=r,b=new g({"class":"theMenu"}),b.placeAt(p),b.startup(),w=new y({label:"Features",onClick:function(){l.location="https://github.com/soliton4/promiseland/wiki/Features"}}),b.addChild(w),b.addChild(new y({label:"Give Feedback",onClick:function(){l.location="https://github.com/soliton4/promiseland/issues"}})),b.addChild(new y({label:"get involved",onClick:function(){l.location="https://github.com/soliton4/promiseland"}})),b.addChild(new y({label:"download",onClick:function(){l.location="https://github.com/soliton4/promiseland"}})),s("sol/wgt/CodeMirrorSimple").then(e(function(r){E=r,s("codemirror4/mode/javascript/javascript").then(e(function(r){S=r,s("codemirror4/mode/promiseland/promiseland").then(e(function(r){x=r,T=n.create("div",{"class":"cbhell-sign"}),n.place(f.createTextNode("callback hell"),T),n.place(T,f.body),s("./callbackHellText").then(e(function(r){N=new E({"class":"callbackhell",theme:"xq-dark",mode:"javascript",value:r}),N.placeAt(f.body),N.startup(),C=n.create("div",{"class":"pland-sign"}),n.place(f.createTextNode("promiseland solution"),C),n.place(C,f.body),s("./promiseLandText").then(e(function(e){k=new E({"class":"promiselandcode",theme:"solarized",mode:"promiseland",value:e}),k.placeAt(f.body),k.startup(),o.resolve();return}),t)}),t)}),t)}),t)}),t)}),t)}),t)}),t)}),t)}),t)})(),o}();return o})})(),define("app/index",function(){});