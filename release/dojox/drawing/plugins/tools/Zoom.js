//>>built
define("dojox/drawing/plugins/tools/Zoom",["dojo/_base/lang","../../util/oo","../_Plugin","../../manager/_registry"],function(b,c,d,e){var f=Math.pow(2,0.25),a=1;b.getObject("dojox.drawing.plugins.tools")||b.setObject("dojox.drawing.plugins.tools",{});b=dojox.drawing.plugins.tools;b.ZoomIn=c.declare(d,function(a){},{type:"dojox.drawing.plugins.tools.ZoomIn",onZoomIn:function(){a*=f;a=Math.min(a,10);this.canvas.setZoom(a);this.mouse.setZoom(a)},onClick:function(){this.onZoomIn()}});b.Zoom100=c.declare(d,
function(a){},{type:"dojox.drawing.plugins.tools.Zoom100",onZoom100:function(){a=1;this.canvas.setZoom(a);this.mouse.setZoom(a)},onClick:function(){this.onZoom100()}});b.ZoomOut=c.declare(d,function(a){},{type:"dojox.drawing.plugins.tools.ZoomOut",onZoomOut:function(){a/=f;a=Math.max(a,0.1);this.canvas.setZoom(a);this.mouse.setZoom(a)},onClick:function(){this.onZoomOut()}});b.ZoomIn.setup={name:"dojox.drawing.plugins.tools.ZoomIn",tooltip:"Zoom In"};e.register(b.ZoomIn.setup,"plugin");b.Zoom100.setup=
{name:"dojox.drawing.plugins.tools.Zoom100",tooltip:"Zoom to 100%"};e.register(b.Zoom100.setup,"plugin");b.ZoomOut.setup={name:"dojox.drawing.plugins.tools.ZoomOut",tooltip:"Zoom In"};e.register(b.ZoomOut.setup,"plugin");return b});
//# sourceMappingURL=Zoom.js.map