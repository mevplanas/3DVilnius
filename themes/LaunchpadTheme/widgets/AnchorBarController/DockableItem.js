// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/_base/fx","./BaseIconItem"],function(f,l,g,a,h){return f([h],{visible:!0,postCreate:function(){this.inherited(arguments);g.add(this.iconItemNode,"dockable")},hideAnim:function(){var b=this.domNode.style,c=[],d={};window.isRTL?d["margin-right"]=0:d["margin-left"]=0;g.remove(this.iconItemStatus,"selected");c.push(a.animateProperty({node:this.domNode,duration:500,properties:d,onEnd:l.hitch(this,function(){b.display="none";this.visible=
!1})}));c.push(a.animateProperty({node:this.iconItemNode,duration:500,properties:{width:1}}));c.push(a.animateProperty({node:this.imgNode,duration:500,properties:{width:1}}));return c},showAnim:function(b){var c=this.domNode.style,d=this.iconItemNode.style,f=this.imgNode.style,e=[],h=this.size,k={};b={start:function(){c.display="";return 0},end:b};window.isRTL?k["margin-right"]=b:k["margin-left"]=b;e.push(a.animateProperty({node:this.domNode,duration:500,properties:k,onEnd:l.hitch(this,function(){this.isOpen&&
g.add(this.iconItemStatus,"selected");this.visible=!0})}));e.push(a.animateProperty({node:this.iconItemNode,duration:500,properties:{width:{start:function(){d.width="1px";return 1},end:h}}}));e.push(a.animateProperty({node:this.imgNode,duration:500,properties:{width:{start:function(){f.width="1px";return 1},end:20}}}));return e}})});