// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/LayerList/LayerItem.html":'\x3cdiv data-dojo-attach-event\x3d"click:_onClickSelf"\x3e\r\n\t\x3ctable class\x3d"layeritem-table"\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"50"\x3e\x3c/col\x3e\r\n\t    \x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"cbx" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"esri-icon-zoom-out-fixed jimu-float-trailing" title\x3d"${nls.fullExtentTip}" data-dojo-attach-event\x3d"onclick:_onBtnZoomClicked"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/html dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./LayerItem.html dojo/_base/lang jimu/dijit/CheckBox".split(" "),function(c,d,e,f,g,h,b){return d([e,f,g],{templateString:h,sceneView:null,layer:null,baseClass:"jimu-widget-layeritem",nls:null,postCreate:function(){this.inherited(arguments);this.cbx.onChange=b.hitch(this,this._onCbxChanged);this.own(this.layer.watch("title",b.hitch(this,function(){this._updateTitleUI()})));this.own(this.layer.watch("visible",
b.hitch(this,function(){this._updateVisibilityUI()})));this.layer.then(b.hitch(this,function(){this.domNode&&(this._updateTitleUI(),this._updateVisibilityUI())}),b.hitch(this,function(a){console.error(a);this.domNode&&c.addClass(this.domNode,"not-loaded")}));this._updateTitleUI()},_onClickSelf:function(a){a=a.target;a===this.cbx.domNode||c.isDescendant(a,this.cbx.domNode)||this.cbx.setValue(!this.cbx.getValue())},_updateTitleUI:function(){this.cbx.setLabel(this.layer.title||this.layer.name||this.layer.mapName||
"")},_updateVisibilityUI:function(){var a=this.layer.get("visible");a!==this.cbx.getValue()&&this.cbx.setValue(a);this.domNode.title=a?this.nls.hide:this.nls.show},_onCbxChanged:function(){this.cbx.getValue()!==this.layer.get("visible")&&this.layer.set("visible",this.cbx.getValue())},_onBtnZoomClicked:function(a){a.stopPropagation();if(a=this.layer.extent||this.layer.fullExtent)a=a.expand(1.2),this.sceneView.animateTo(a)},destroy:function(){this.layer=this.sceneView=null;this.inherited(arguments)}})});