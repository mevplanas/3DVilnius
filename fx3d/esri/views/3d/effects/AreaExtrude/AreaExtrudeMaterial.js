//>>built
require({cache:{"url:fx3d/views/3d/effects/AreaExtrude/AreaExtrudeMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\x3c!-- Copyright @ 2017 Esri. All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions. --\x3e\x3csnippets\x3e\x3csnippet name\x3d"areaExtrudeFS"\x3e\x3c![CDATA[\r\n#ifdef GL_ES\r\nprecision highp float;\r\n#endif\r\nuniform float sm;uniform vec3 oi;uniform vec4 is;uniform vec4 ii;uniform vec4 ps;uniform vec3 le;varying vec4 dh;varying vec3 gg;varying vec3 hc;const vec3 a\x3dvec3(1.0,1.0,1.0);const vec3 b\x3dvec3(1.0,1.0,1.0);const vec3 c\x3dvec3(0.2,0.2,0.2);void main(){vec3 d\x3dnormalize(hc-le);vec3 e\x3dnormalize(gg);vec3 f\x3dnormalize(reflect(d,e));float g\x3dmax(dot(f,oi),.001);vec3 h\x3dc*ps.rgb*ps.w*pow(g,10.0);vec3 i\x3da*ii.rgb*ii.w*clamp(dot(e,oi),.0,1.0);vec3 j\x3db*is.rgb*is.w;vec3 k\x3dvec3(j+i+h);gl_FragColor.xyz\x3ddh.xyz*k;float l\x3dsm*0.01;gl_FragColor.w\x3dl;}]]\x3e\x3c/snippet\x3e\x3csnippet name\x3d"areaExtrudeVS"\x3e\x3c![CDATA[attribute vec3 $position;attribute vec2 $auxpos1;attribute vec2 $auxpos2;uniform mat4 sl;uniform mat4 os;uniform sampler2D ss;uniform sampler2D mm;uniform float lp;uniform vec2 ip;uniform vec3 mo;uniform sampler2D oo;uniform vec3 mi;uniform float ll;uniform vec2 im;uniform vec2 ls;uniform bool ms;uniform vec4 pi;varying vec4 dh;varying vec3 gg;varying vec3 hc; $linearInterpolator  $lonlat2position  $translationMat  $localTrans  $quintEaseOut const float a\x3d1.0;const float b\x3d0.0;vec4 matchPixelCenter(vec4 c,vec2 d){vec2 e\x3dvec2(.500123)+.5*c.xy/c.w;vec2 f\x3dfloor(e*d);vec2 g\x3dvec2(1.0)/d;vec2 h\x3d(((vec2(.5)+f)*g)*2.0-vec2(1.0))*c.w;return vec4(h.x,h.y,c.z,c.w);}void main(void){float i\x3dfract($auxpos1.x/im.x);float j\x3dfloor($auxpos1.x/im.y)/im.y;float k\x3d(texture2D(ss,vec2(i,j))).r;float l\x3d(texture2D(mm,vec2(i,j))).r;float m\x3dmod(ll,lp);float n\x3dgetQuintEaseInOutValue(m,k,l,lp);if(ms){n\x3dl;}float o\x3dgetLinearValue(ls,n);bool p\x3dfalse;if($auxpos1.y\x3d\x3da){p\x3dtrue;}else if($auxpos1.y\x3d\x3db){p\x3dfalse;}vec3 q,r,s;mat4 t\x3dmat4(1.0);\r\n#ifdef GLOBAL\r\nmat4 u\x3dgetTransMat($position);q\x3du[3].xyz;t\x3dtoRotationMat(u);vec4 v\x3dvec4(0.0,0.0,1.0,0.0);s\x3dlonlat2position(vec3($auxpos2,1.0));r\x3d(t*v).xyz;\r\n#else\r\nq\x3dwgs84ToWebMerc($position);s\x3dwgs84ToWebMerc(vec3($auxpos2,1.0));r\x3dvec3(0.0,0.0,1.0);\r\n#endif\r\nr\x3dnormalize(r);if(p){dh\x3dtexture2D(oo,vec2(o,0.5));q+\x3d(r*(getScope(ip,o)));}else{dh\x3dvec4(mi,1.0);}vec3 w\x3dvec3(1.0,0.0,0.0);float x\x3d1.0;float y\x3d1.0;float z\x3dabs(dot(r,normalize(mo-q)));float A\x3d0.00001;vec3 B\x3d(os*vec4(q,1.0)).xyz;if(z\x3e.01){float C\x3dsqrt(1.0-z*z)/z;float D\x3d(1.0-C/pi[2]);if(y\x3e0.0){B*\x3dD;}else{B/\x3dD;}}B+\x3dw;vec4 E\x3dsl*vec4(B,1.0);E.z-\x3dy*A*E.w;gl_Position\x3dmatchPixelCenter(E,pi.zw);gg\x3dnormalize((r-normalize(s))+normalize(q));hc\x3dq;}]]\x3e\x3c/snippet\x3e\x3c/snippets\x3e'}});
define(["dojo/text!./AreaExtrudeMaterial.xml","esri/core/declare","esri/views/3d/webgl-engine/lib/GLSLShader","../../webgl-engine-extensions/GLSLProgramExt","../../support/fx3dUtils"],function(g,h,d,k,l){return h(null,{declaredClass:"esri.views.3d.effects.AreaExtrude.AreaExtrudeMaterial",constructor:function(a){this._gl=a.gl;this._shaderSnippets=a.shaderSnippets;this._program=null;this._viewingMode=a.viewingMode;this._pushState=a.pushState;this._restoreState=a.restoreState},destroy:function(){this._program&&
(this._program.dispose(),delete this._program,this._program=null)},_addDefines:function(a,b){var c="";if(null!=b)if(Array.isArray(b))for(var e=0,d=b.length;e<d;e++)var f=b[e],c=c+("#define "+f+"\n");else for(f in b)c+="#define "+f+"\n";return this._shaderSnippets.defines+"\n"+c+a},loadShaders:function(){if(this._shaderSnippets){null!=this._shaderSnippets.areaExtrudeVS&&null!=this._shaderSnippets.areaExtrudeFS||this._shaderSnippets._parse(g);var a=[];"global"==this._viewingMode?a.push("GLOBAL"):a.push("LOCAL");
var a=this._addDefines(this._shaderSnippets.areaExtrudeVS,a),a=new d(35633,a,this._gl),b=new d(35632,this._shaderSnippets.areaExtrudeFS,this._gl);this._program=new k([a,b],this._gl)}return this._initResources()},getProgram:function(){return this._program},_initResources:function(){return!0},bind:function(a,b){this._program.use();this._program.uniformMatrix4fv("sl",a.proj);this._program.uniformMatrix4fv("os",a.view);this._program.uniform3fv("le",a.camPos);this._program.uniform3fv("mo",a.camPos);this._program.uniform4fv("pi",
a.viewport);this._program.uniform3fv("oi",a.lightingData.direction);this._program.uniform4fv("is",a.lightingData.ambient);this._program.uniform4fv("ii",a.lightingData.diffuse);this._program.uniform4fv("ps",a.lightingData.specular);this._oldTex=this._gl.getParameter(32873);var c=b._activeTextureUnit;c>b.parameters.maxVertexTextureImageUnits-1-3&&(console.warn("Many textures are binded now, 3DFx lib may be work abnormally."),c=0);a.ss.bind(c+1);this._program.uniform1i("ss",c+1);a.mm.bind(c+2);this._program.uniform1i("mm",
c+2);this._program.uniform2fv("im",a.im);this._program.uniform2fv("ls",[a.ls,a.es]);this._program.uniform2fv("ip",a.ip);this._gl.activeTexture(33984+c+3);this._gl.bindTexture(3553,a.oo);this._program.uniform1i("oo",c+3);this._program.uniform1f("lp",a.lp);this._program.uniform1f("sm",a.sm);this._program.uniform3fv("mi",a.mi);this._program.uniform1f("ll",a.time);this._program.uniform1i("ms",a.reachedRepeatLimit);1!=b._depthTestEnabled&&(this._pushState(["setDepthTestEnabled",b._depthTestEnabled]),b.setDepthTestEnabled(!0));
1!=b._polygonCullingEnabled&&(this._pushState(["setFaceCullingEnabled",b._polygonCullingEnabled]),b.setFaceCullingEnabled(!0));1!=b._blendEnabled&&(this._pushState(["setBlendingEnabled",b._blendEnabled]),b.setBlendingEnabled(!0))},bindVec3:function(a,b){this._program.uniform3fv(a,b)},release:function(a){this._gl.activeTexture(33984+a._activeTextureUnit+1);this._gl.bindTexture(3553,this._oldTex);this._restoreState(a);this._gl.useProgram(null)}})});