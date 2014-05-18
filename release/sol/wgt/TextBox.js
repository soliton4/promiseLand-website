//>>built
define("sol/wgt/TextBox",["dojo/_base/declare","dijit/form/TextBox","dojo/keys"],function(b,c,d){return b([c],{buildRendering:function(){return this.inherited(arguments)},startup:function(){this._started||(this.inherited(arguments),this.on("keyPress",function(a){if(a.charOrCode==d.ENTER)this.onEnterPressed(a)}))},onEnterPressed:function(){}})});
//# sourceMappingURL=TextBox.js.map