//>>built
define(["esri/views/3d/webgl-engine/lib/Util"],function(d){var e=d.nextHighestPowerOfTwo;return function(){function c(a,b){this.arrayType=null;a?this.arrayType=Float32Array:this.arrayType=Uint32Array;null==b?b=4096:65536>b&&(b=e(b));this.array=new this.arrayType(b);this.size=0}return c.prototype.resize=function(a){this.size=a;var b;if(this.size>this.array.length){for(a=this.array.length||1;a<this.size;)a*=2;return b=new this.arrayType(a),b.set(this.array),this.array=b,!0}if(this.size<=this.array.length/
2){a=this.array.length;for(var c=2*this.size;a>=c;)a/=2;return b=new this.arrayType(a),b.set(this.array.subarray(0,a)),this.array=b,!0}return!0},c.prototype.append=function(a){var b=this.size;this.resize(this.size+a.length);this.array.set(a,b)},c.prototype.whole=function(a){a.length!==this.size&&(this.array=new this.arrayType(a.length),this.size=a.length);this.array.set(a)},c.prototype.erase=function(a,b){for(;a<b;++a)this.array[a]=0},c.prototype.getArray=function(){return this.array},c.prototype.getSize=
function(){return this.size},c.prototype.getArrayType=function(){return this.arrayType},c}()});