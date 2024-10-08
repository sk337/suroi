const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browserAll-BeWvGBqS.js","assets/webworkerAll-Ctvibsxs.js"])))=>i.map(i=>d[i]);
var Cg=Object.defineProperty;var wg=(r,e,t)=>e in r?Cg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var te=(r,e,t)=>wg(r,typeof e!="symbol"?e+"":e,t);let mh;function Pg(r){return mh=r,r}function hr(){return mh}let gh=class{constructor(e,t){this.init(e,t)}init(e,t){this.destination=e,this.source=t||e}connect(e){var t;(t=this.source)==null||t.connect(e)}disconnect(){var e;(e=this.source)==null||e.disconnect()}destroy(){this.disconnect(),this.destination=null,this.source=null}};class br{static setParamValue(e,t){if(e.setValueAtTime){const n=hr().context;e.setValueAtTime(t,n.audioContext.currentTime)}else e.value=t;return t}}const Be=class extends gh{constructor(r=0,e=0,t=0,n=0,i=0,s=0,o=0,a=0,l=0,h=0){let f=[];const p=[{f:Be.F32,type:"lowshelf",gain:r},{f:Be.F64,type:"peaking",gain:e},{f:Be.F125,type:"peaking",gain:t},{f:Be.F250,type:"peaking",gain:n},{f:Be.F500,type:"peaking",gain:i},{f:Be.F1K,type:"peaking",gain:s},{f:Be.F2K,type:"peaking",gain:o},{f:Be.F4K,type:"peaking",gain:a},{f:Be.F8K,type:"peaking",gain:l},{f:Be.F16K,type:"highshelf",gain:h}];hr().useLegacy||(f=p.map(x=>{const y=hr().context.audioContext.createBiquadFilter();return y.type=x.type,br.setParamValue(y.Q,1),y.frequency.value=x.f,br.setParamValue(y.gain,x.gain),y})),super(f[0],f[f.length-1]),this.bands=f,this.bandsMap={};for(let x=0;x<this.bands.length;x++){const y=this.bands[x];x>0&&this.bands[x-1].connect(y),this.bandsMap[y.frequency.value]=y}}setGain(r,e=0){if(!this.bandsMap[r])throw new Error(`No band found for frequency ${r}`);br.setParamValue(this.bandsMap[r].gain,e)}getGain(r){if(!this.bandsMap[r])throw new Error(`No band found for frequency ${r}`);return this.bandsMap[r].gain.value}set f32(r){this.setGain(Be.F32,r)}get f32(){return this.getGain(Be.F32)}set f64(r){this.setGain(Be.F64,r)}get f64(){return this.getGain(Be.F64)}set f125(r){this.setGain(Be.F125,r)}get f125(){return this.getGain(Be.F125)}set f250(r){this.setGain(Be.F250,r)}get f250(){return this.getGain(Be.F250)}set f500(r){this.setGain(Be.F500,r)}get f500(){return this.getGain(Be.F500)}set f1k(r){this.setGain(Be.F1K,r)}get f1k(){return this.getGain(Be.F1K)}set f2k(r){this.setGain(Be.F2K,r)}get f2k(){return this.getGain(Be.F2K)}set f4k(r){this.setGain(Be.F4K,r)}get f4k(){return this.getGain(Be.F4K)}set f8k(r){this.setGain(Be.F8K,r)}get f8k(){return this.getGain(Be.F8K)}set f16k(r){this.setGain(Be.F16K,r)}get f16k(){return this.getGain(Be.F16K)}reset(){this.bands.forEach(r=>{br.setParamValue(r.gain,0)})}destroy(){this.bands.forEach(r=>{r.disconnect()}),this.bands=null,this.bandsMap=null}};let Kt=Be;Kt.F32=32;Kt.F64=64;Kt.F125=125;Kt.F250=250;Kt.F500=500;Kt.F1K=1e3;Kt.F2K=2e3;Kt.F4K=4e3;Kt.F8K=8e3;Kt.F16K=16e3;class LC extends gh{constructor(e=0){let t,n,i;if(!hr().useLegacy){const{audioContext:s}=hr().context;s.createStereoPanner?(t=s.createStereoPanner(),i=t):(n=s.createPanner(),n.panningModel="equalpower",i=n)}super(i),this._stereo=t,this._panner=n,this.pan=e}set pan(e){this._pan=e,this._stereo?br.setParamValue(this._stereo.pan,e):this._panner&&this._panner.setPosition(e,0,1-Math.abs(e))}get pan(){return this._pan}destroy(){super.destroy(),this._stereo=null,this._panner=null}}const Ag="modulepreload",Eg=function(r){return"/"+r},Ml={},Ts=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Eg(l),l in Ml)return;Ml[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Ag,h||(p.as="script"),p.crossOrigin="",p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),h)return new Promise((x,y)=>{p.addEventListener("load",x),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var R=(r=>(r.Application="application",r.WebGLPipes="webgl-pipes",r.WebGLPipesAdaptor="webgl-pipes-adaptor",r.WebGLSystem="webgl-system",r.WebGPUPipes="webgpu-pipes",r.WebGPUPipesAdaptor="webgpu-pipes-adaptor",r.WebGPUSystem="webgpu-system",r.CanvasSystem="canvas-system",r.CanvasPipesAdaptor="canvas-pipes-adaptor",r.CanvasPipes="canvas-pipes",r.Asset="asset",r.LoadParser="load-parser",r.ResolveParser="resolve-parser",r.CacheParser="cache-parser",r.DetectionParser="detection-parser",r.MaskEffect="mask-effect",r.BlendMode="blend-mode",r.TextureSource="texture-source",r.Environment="environment",r.ShapeBuilder="shape-builder",r.Batcher="batcher",r))(R||{});const ga=r=>{if(typeof r=="function"||typeof r=="object"&&r.extension){if(!r.extension)throw new Error("Extension class must have an extension object");r={...typeof r.extension!="object"?{type:r.extension}:r.extension,ref:r}}if(typeof r=="object")r={...r};else throw new Error("Invalid extension type");return typeof r.type=="string"&&(r.type=[r.type]),r},Ni=(r,e)=>ga(r).priority??e,ke={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...r){return r.map(ga).forEach(e=>{e.type.forEach(t=>{var n,i;return(i=(n=this._removeHandlers)[t])==null?void 0:i.call(n,e)})}),this},add(...r){return r.map(ga).forEach(e=>{e.type.forEach(t=>{var s,o;const n=this._addHandlers,i=this._queue;n[t]?(o=n[t])==null||o.call(n,e):(i[t]=i[t]||[],(s=i[t])==null||s.push(e))})}),this},handle(r,e,t){var o;const n=this._addHandlers,i=this._removeHandlers;if(n[r]||i[r])throw new Error(`Extension type ${r} already has a handler`);n[r]=e,i[r]=t;const s=this._queue;return s[r]&&((o=s[r])==null||o.forEach(a=>e(a)),delete s[r]),this},handleByMap(r,e){return this.handle(r,t=>{t.name&&(e[t.name]=t.ref)},t=>{t.name&&delete e[t.name]})},handleByNamedList(r,e,t=-1){return this.handle(r,n=>{e.findIndex(s=>s.name===n.name)>=0||(e.push({name:n.name,value:n.ref}),e.sort((s,o)=>Ni(o.value,t)-Ni(s.value,t)))},n=>{const i=e.findIndex(s=>s.name===n.name);i!==-1&&e.splice(i,1)})},handleByList(r,e,t=-1){return this.handle(r,n=>{e.includes(n.ref)||(e.push(n.ref),e.sort((i,s)=>Ni(s,t)-Ni(i,t)))},n=>{const i=e.indexOf(n.ref);i!==-1&&e.splice(i,1)})}},Mg={extension:{type:R.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Ts(()=>import("./browserAll-BeWvGBqS.js"),__vite__mapDeps([0,1]))}},Bg={extension:{type:R.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Ts(()=>import("./webworkerAll-Ctvibsxs.js"),[])}};class Ke{constructor(e,t,n){this._x=t||0,this._y=n||0,this._observer=e}clone(e){return new Ke(e??this._observer,this._x,this._y)}set(e=0,t=e){return(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hs(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xh={exports:{}};(function(r){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(l,h,f){this.fn=l,this.context=h,this.once=f||!1}function s(l,h,f,p,x){if(typeof f!="function")throw new TypeError("The listener must be a function");var y=new i(f,p||l,x),b=t?t+h:h;return l._events[b]?l._events[b].fn?l._events[b]=[l._events[b],y]:l._events[b].push(y):(l._events[b]=y,l._eventsCount++),l}function o(l,h){--l._eventsCount===0?l._events=new n:delete l._events[h]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var h=[],f,p;if(this._eventsCount===0)return h;for(p in f=this._events)e.call(f,p)&&h.push(t?p.slice(1):p);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(f)):h},a.prototype.listeners=function(h){var f=t?t+h:h,p=this._events[f];if(!p)return[];if(p.fn)return[p.fn];for(var x=0,y=p.length,b=new Array(y);x<y;x++)b[x]=p[x].fn;return b},a.prototype.listenerCount=function(h){var f=t?t+h:h,p=this._events[f];return p?p.fn?1:p.length:0},a.prototype.emit=function(h,f,p,x,y,b){var T=t?t+h:h;if(!this._events[T])return!1;var C=this._events[T],P=arguments.length,F,B;if(C.fn){switch(C.once&&this.removeListener(h,C.fn,void 0,!0),P){case 1:return C.fn.call(C.context),!0;case 2:return C.fn.call(C.context,f),!0;case 3:return C.fn.call(C.context,f,p),!0;case 4:return C.fn.call(C.context,f,p,x),!0;case 5:return C.fn.call(C.context,f,p,x,y),!0;case 6:return C.fn.call(C.context,f,p,x,y,b),!0}for(B=1,F=new Array(P-1);B<P;B++)F[B-1]=arguments[B];C.fn.apply(C.context,F)}else{var O=C.length,W;for(B=0;B<O;B++)switch(C[B].once&&this.removeListener(h,C[B].fn,void 0,!0),P){case 1:C[B].fn.call(C[B].context);break;case 2:C[B].fn.call(C[B].context,f);break;case 3:C[B].fn.call(C[B].context,f,p);break;case 4:C[B].fn.call(C[B].context,f,p,x);break;default:if(!F)for(W=1,F=new Array(P-1);W<P;W++)F[W-1]=arguments[W];C[B].fn.apply(C[B].context,F)}}return!0},a.prototype.on=function(h,f,p){return s(this,h,f,p,!1)},a.prototype.once=function(h,f,p){return s(this,h,f,p,!0)},a.prototype.removeListener=function(h,f,p,x){var y=t?t+h:h;if(!this._events[y])return this;if(!f)return o(this,y),this;var b=this._events[y];if(b.fn)b.fn===f&&(!x||b.once)&&(!p||b.context===p)&&o(this,y);else{for(var T=0,C=[],P=b.length;T<P;T++)(b[T].fn!==f||x&&!b[T].once||p&&b[T].context!==p)&&C.push(b[T]);C.length?this._events[y]=C.length===1?C[0]:C:o(this,y)}return this},a.prototype.removeAllListeners=function(h){var f;return h?(f=t?t+h:h,this._events[f]&&o(this,f)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,r.exports=a})(xh);var Rg=xh.exports;const it=Hs(Rg),Ig=Math.PI*2,Fg=180/Math.PI,Cn=Math.PI/180;class ze{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}clone(){return new ze(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,t=e){return this.x=e,this.y=t,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Co.x=0,Co.y=0,Co}}const Co=new ze;class ue{constructor(e=1,t=0,n=0,i=1,s=0,o=0){this.array=null,this.a=e,this.b=t,this.c=n,this.d=i,this.tx=s,this.ty=o}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,t,n,i,s,o){return this.a=e,this.b=t,this.c=n,this.d=i,this.tx=s,this.ty=o,this}toArray(e,t){this.array||(this.array=new Float32Array(9));const n=t||this.array;return e?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n}apply(e,t){t=t||new ze;const n=e.x,i=e.y;return t.x=this.a*n+this.c*i+this.tx,t.y=this.b*n+this.d*i+this.ty,t}applyInverse(e,t){t=t||new ze;const n=this.a,i=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,h=1/(n*o+s*-i),f=e.x,p=e.y;return t.x=o*h*f+-s*h*p+(l*s-a*o)*h,t.y=n*h*p+-i*h*f+(-l*n+a*i)*h,t}translate(e,t){return this.tx+=e,this.ty+=t,this}scale(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.a,s=this.c,o=this.tx;return this.a=i*t-this.b*n,this.b=i*n+this.b*t,this.c=s*t-this.d*n,this.d=s*n+this.d*t,this.tx=o*t-this.ty*n,this.ty=o*n+this.ty*t,this}append(e){const t=this.a,n=this.b,i=this.c,s=this.d;return this.a=e.a*t+e.b*i,this.b=e.a*n+e.b*s,this.c=e.c*t+e.d*i,this.d=e.c*n+e.d*s,this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*n+e.ty*s+this.ty,this}appendFrom(e,t){const n=e.a,i=e.b,s=e.c,o=e.d,a=e.tx,l=e.ty,h=t.a,f=t.b,p=t.c,x=t.d;return this.a=n*h+i*p,this.b=n*f+i*x,this.c=s*h+o*p,this.d=s*f+o*x,this.tx=a*h+l*p+t.tx,this.ty=a*f+l*x+t.ty,this}setTransform(e,t,n,i,s,o,a,l,h){return this.a=Math.cos(a+h)*s,this.b=Math.sin(a+h)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=e-(n*this.a+i*this.c),this.ty=t-(n*this.b+i*this.d),this}prepend(e){const t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const n=this.a,i=this.c;this.a=n*e.a+this.b*e.c,this.b=n*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this}decompose(e){const t=this.a,n=this.b,i=this.c,s=this.d,o=e.pivot,a=-Math.atan2(-i,s),l=Math.atan2(n,t),h=Math.abs(a+l);return h<1e-5||Math.abs(Ig-h)<1e-5?(e.rotation=l,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=a,e.skew.y=l),e.scale.x=Math.sqrt(t*t+n*n),e.scale.y=Math.sqrt(i*i+s*s),e.position.x=this.tx+(o.x*t+o.y*i),e.position.y=this.ty+(o.x*n+o.y*s),e}invert(){const e=this.a,t=this.b,n=this.c,i=this.d,s=this.tx,o=e*i-t*n;return this.a=i/o,this.b=-t/o,this.c=-n/o,this.d=e/o,this.tx=(n*this.ty-i*s)/o,this.ty=-(e*this.ty-t*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new ue;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Ug.identity()}static get shared(){return Og.identity()}}const Og=new ue,Ug=new ue,Ur=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],kr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Dr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Gr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],xa=[],_h=[],Hi=Math.sign;function kg(){for(let r=0;r<16;r++){const e=[];xa.push(e);for(let t=0;t<16;t++){const n=Hi(Ur[r]*Ur[t]+Dr[r]*kr[t]),i=Hi(kr[r]*Ur[t]+Gr[r]*kr[t]),s=Hi(Ur[r]*Dr[t]+Dr[r]*Gr[t]),o=Hi(kr[r]*Dr[t]+Gr[r]*Gr[t]);for(let a=0;a<16;a++)if(Ur[a]===n&&kr[a]===i&&Dr[a]===s&&Gr[a]===o){e.push(a);break}}}for(let r=0;r<16;r++){const e=new ue;e.set(Ur[r],kr[r],Dr[r],Gr[r],0,0),_h.push(e)}}kg();const $e={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:r=>Ur[r],uY:r=>kr[r],vX:r=>Dr[r],vY:r=>Gr[r],inv:r=>r&8?r&15:-r&7,add:(r,e)=>xa[r][e],sub:(r,e)=>xa[r][$e.inv(e)],rotate180:r=>r^4,isVertical:r=>(r&3)===2,byDirection:(r,e)=>Math.abs(r)*2<=Math.abs(e)?e>=0?$e.S:$e.N:Math.abs(e)*2<=Math.abs(r)?r>0?$e.E:$e.W:e>0?r>0?$e.SE:$e.SW:r>0?$e.NE:$e.NW,matrixAppendRotationInv:(r,e,t=0,n=0)=>{const i=_h[$e.inv(e)];i.tx=t,i.ty=n,r.append(i)}},$i=[new ze,new ze,new ze,new ze];class Le{constructor(e=0,t=0,n=0,i=0){this.type="rectangle",this.x=Number(e),this.y=Number(t),this.width=Number(n),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Le(0,0,0,0)}clone(){return new Le(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}strokeContains(e,t,n){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-n/2,h=o+i+n/2,f=a-n/2,p=a+s+n/2,x=o+n/2,y=o+i-n/2,b=a+n/2,T=a+s-n/2;return e>=l&&e<=h&&t>=f&&t<=p&&!(e>x&&e<y&&t>b&&t<T)}intersects(e,t){if(!t){const V=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=V)return!1;const $=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>$}const n=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=n||o<=s)return!1;const a=$i[0].set(e.left,e.top),l=$i[1].set(e.left,e.bottom),h=$i[2].set(e.right,e.top),f=$i[3].set(e.right,e.bottom);if(h.x<=a.x||l.y<=a.y)return!1;const p=Math.sign(t.a*t.d-t.b*t.c);if(p===0||(t.apply(a,a),t.apply(l,l),t.apply(h,h),t.apply(f,f),Math.max(a.x,l.x,h.x,f.x)<=n||Math.min(a.x,l.x,h.x,f.x)>=i||Math.max(a.y,l.y,h.y,f.y)<=s||Math.min(a.y,l.y,h.y,f.y)>=o))return!1;const x=p*(l.y-a.y),y=p*(a.x-l.x),b=x*n+y*s,T=x*i+y*s,C=x*n+y*o,P=x*i+y*o;if(Math.max(b,T,C,P)<=x*a.x+y*a.y||Math.min(b,T,C,P)>=x*f.x+y*f.y)return!1;const F=p*(a.y-h.y),B=p*(h.x-a.x),O=F*n+B*s,W=F*i+B*s,ne=F*n+B*o,m=F*i+B*o;return!(Math.max(O,W,ne,m)<=F*a.x+B*a.y||Math.min(O,W,ne,m)>=F*f.x+B*f.y)}pad(e=0,t=e){return this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this}fit(e){const t=Math.max(this.x,e.x),n=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),s=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(n-t,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(e=1,t=.001){const n=Math.ceil((this.x+this.width-t)*e)/e,i=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=n-this.x,this.height=i-this.y,this}enlarge(e){const t=Math.min(this.x,e.x),n=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),s=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=n-t,this.y=i,this.height=s-i,this}getBounds(e){return e=e||new Le,e.copyFrom(this),e}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const wo={default:-1};function Ve(r="default"){return wo[r]===void 0&&(wo[r]=-1),++wo[r]}const Bl={},ye="8.0.0",Dg="8.3.4";function Z(r,e,t=3){if(Bl[e])return;let n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${r}`):(n=n.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${r}`),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${r}`),console.warn(n))),Bl[e]=!0}const vh=()=>{};function wn(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}function Rl(r){return!(r&r-1)&&!!r}function Gg(r){const e={};for(const t in r)r[t]!==void 0&&(e[t]=r[t]);return e}const Il=Object.create(null);function zg(r){const e=Il[r];return e===void 0&&(Il[r]=Ve("resource")),e}const yh=class bh extends it{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...bh.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){Z(ye,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=zg(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};yh.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Lg=yh;const Sh=class Th extends it{constructor(e={}){super(),this.options=e,this.uid=Ve("textureSource"),this._resourceType="textureSource",this._resourceId=Ve("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...Th.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new Lg(Gg(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){var t,n;this.style!==e&&((t=this._style)==null||t.off("change",this._onStyleChange,this),this._style=e,(n=this._style)==null||n.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Ve("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,t,n){n=n||this._resolution,e=e||this.width,t=t||this.height;const i=Math.round(e*n),s=Math.round(t*n);return this.width=i/n,this.height=s/n,this._resolution=n,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=Ve("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Rl(this.pixelWidth)&&Rl(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};Sh.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Ye=Sh;class nu extends Ye{constructor(e){const t=e.resource||new Float32Array(e.width*e.height*4);let n=e.format;n||(t instanceof Float32Array?n="rgba32float":t instanceof Int32Array||t instanceof Uint32Array?n="rgba32uint":t instanceof Int16Array||t instanceof Uint16Array?n="rgba16uint":(t instanceof Int8Array,n="bgra8unorm")),super({...e,resource:t,format:n}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}nu.extension=R.TextureSource;const Fl=new ue;class Ch{constructor(e,t){this.mapCoord=new ue,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof t>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=t,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){var t;this.texture!==e&&((t=this._texture)==null||t.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,t){t===void 0&&(t=e);const n=this.mapCoord;for(let i=0;i<e.length;i+=2){const s=e[i],o=e[i+1];t[i]=s*n.a+o*n.c+n.tx,t[i+1]=s*n.b+o*n.d+n.ty}return t}update(){const e=this._texture;this._updateID++;const t=e.uvs;this.mapCoord.set(t.x1-t.x0,t.y1-t.y0,t.x3-t.x0,t.y3-t.y0,t.x0,t.y0);const n=e.orig,i=e.trim;i&&(Fl.set(n.width/i.width,0,0,n.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(Fl));const s=e.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset/s._resolution;return o[0]=(e.frame.x+a+l)/s.width,o[1]=(e.frame.y+a+l)/s.height,o[2]=(e.frame.x+e.frame.width-a+l)/s.width,o[3]=(e.frame.y+e.frame.height-a+l)/s.height,this.uClampOffset[0]=this.clampOffset/s.pixelWidth,this.uClampOffset[1]=this.clampOffset/s.pixelHeight,this.isSimple=e.frame.width===s.width&&e.frame.height===s.height&&e.rotate===0,!0}}class Q extends it{constructor({source:e,label:t,frame:n,orig:i,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:h}={}){if(super(),this.uid=Ve("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Le,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=t,this.source=(e==null?void 0:e.source)??new Ye,this.noFrame=!n,n)this.frame.copyFrom(n);else{const{width:f,height:p}=this._source;this.frame.width=f,this.frame.height=p}this.orig=i||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=h||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Ch(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:t}=this,{width:n,height:i}=this._source,s=t.x/n,o=t.y/i,a=t.width/n,l=t.height/i;let h=this.rotate;if(h){const f=a/2,p=l/2,x=s+f,y=o+p;h=$e.add(h,$e.NW),e.x0=x+f*$e.uX(h),e.y0=y+p*$e.uY(h),h=$e.add(h,2),e.x1=x+f*$e.uX(h),e.y1=y+p*$e.uY(h),h=$e.add(h,2),e.x2=x+f*$e.uX(h),e.y2=y+p*$e.uY(h),h=$e.add(h,2),e.x3=x+f*$e.uX(h),e.y3=y+p*$e.uY(h)}else e.x0=s,e.y0=o,e.x1=s+a,e.y1=o,e.x2=s+a,e.y2=o+l,e.x3=s,e.y3=o+l}destroy(e=!1){this._source&&e&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Z(ye,"Texture.baseTexture is now Texture.source"),this._source}}Q.EMPTY=new Q({label:"EMPTY",source:new Ye({label:"EMPTY"})});Q.EMPTY.destroy=vh;Q.WHITE=new Q({source:new nu({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});Q.WHITE.destroy=vh;function Cs(r,e,t,n){const{width:i,height:s}=t.orig,o=t.trim;if(o){const a=o.width,l=o.height;r.minX=o.x-e._x*i-n,r.maxX=r.minX+a,r.minY=o.y-e._y*s-n,r.maxY=r.minY+l}else r.minX=-e._x*i-n,r.maxX=r.minX+i,r.minY=-e._y*s-n,r.maxY=r.minY+s}const Ol=new ue;class xt{constructor(e=1/0,t=1/0,n=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Ol,this.minX=e,this.minY=t,this.maxX=n,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Le);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Ol,this}set(e,t,n,i){this.minX=e,this.minY=t,this.maxX=n,this.maxY=i}addFrame(e,t,n,i,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,h=s.d,f=s.tx,p=s.ty;let x=this.minX,y=this.minY,b=this.maxX,T=this.maxY,C=o*e+l*t+f,P=a*e+h*t+p;C<x&&(x=C),P<y&&(y=P),C>b&&(b=C),P>T&&(T=P),C=o*n+l*t+f,P=a*n+h*t+p,C<x&&(x=C),P<y&&(y=P),C>b&&(b=C),P>T&&(T=P),C=o*e+l*i+f,P=a*e+h*i+p,C<x&&(x=C),P<y&&(y=P),C>b&&(b=C),P>T&&(T=P),C=o*n+l*i+f,P=a*n+h*i+p,C<x&&(x=C),P<y&&(y=P),C>b&&(b=C),P>T&&(T=P),this.minX=x,this.minY=y,this.maxX=b,this.maxY=T}addRect(e,t){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,t)}addBounds(e,t){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,t)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const t=this.minX,n=this.minY,i=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:h,tx:f,ty:p}=e;let x=o*t+l*n+f,y=a*t+h*n+p;this.minX=x,this.minY=y,this.maxX=x,this.maxY=y,x=o*i+l*n+f,y=a*i+h*n+p,this.minX=x<this.minX?x:this.minX,this.minY=y<this.minY?y:this.minY,this.maxX=x>this.maxX?x:this.maxX,this.maxY=y>this.maxY?y:this.maxY,x=o*t+l*s+f,y=a*t+h*s+p,this.minX=x<this.minX?x:this.minX,this.minY=y<this.minY?y:this.minY,this.maxX=x>this.maxX?x:this.maxX,this.maxY=y>this.maxY?y:this.maxY,x=o*i+l*s+f,y=a*i+h*s+p,this.minX=x<this.minX?x:this.minX,this.minY=y<this.minY?y:this.minY,this.maxX=x>this.maxX?x:this.maxX,this.maxY=y>this.maxY?y:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,t,n,i){return this.minX<e&&(this.minX=e),this.maxX>t&&(this.maxX=t),this.minY<n&&(this.minY=n),this.maxY>i&&(this.maxY=i),this}pad(e,t=e){return this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new xt(this.minX,this.minY,this.maxX,this.maxY)}scale(e,t=e){return this.minX*=e,this.minY*=t,this.maxX*=e,this.maxY*=t,this}get x(){return this.minX}set x(e){const t=this.maxX-this.minX;this.minX=e,this.maxX=e+t}get y(){return this.minY}set y(e){const t=this.maxY-this.minY;this.minY=e,this.maxY=e+t}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,t,n,i){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const h=i.a,f=i.b,p=i.c,x=i.d,y=i.tx,b=i.ty;for(let T=t;T<n;T+=2){const C=e[T],P=e[T+1],F=h*C+p*P+y,B=f*C+x*P+b;s=F<s?F:s,o=B<o?B:o,a=F>a?F:a,l=B>l?B:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(e,t){return this.minX<=e&&this.minY<=t&&this.maxX>=e&&this.maxY>=t}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}var Ng={grad:.9,turn:360,rad:360/(2*Math.PI)},nr=function(r){return typeof r=="string"?r.length>0:typeof r=="number"},tt=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*r)/t+0},Et=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),r>t?t:r>e?r:e},wh=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},Ul=function(r){return{r:Et(r.r,0,255),g:Et(r.g,0,255),b:Et(r.b,0,255),a:Et(r.a)}},Po=function(r){return{r:tt(r.r),g:tt(r.g),b:tt(r.b),a:tt(r.a,3)}},Hg=/^#([0-9a-f]{3,8})$/i,Wi=function(r){var e=r.toString(16);return e.length<2?"0"+e:e},Ph=function(r){var e=r.r,t=r.g,n=r.b,i=r.a,s=Math.max(e,t,n),o=s-Math.min(e,t,n),a=o?s===e?(t-n)/o:s===t?2+(n-e)/o:4+(e-t)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:i}},Ah=function(r){var e=r.h,t=r.s,n=r.v,i=r.a;e=e/360*6,t/=100,n/=100;var s=Math.floor(e),o=n*(1-t),a=n*(1-(e-s)*t),l=n*(1-(1-e+s)*t),h=s%6;return{r:255*[n,a,o,o,l,n][h],g:255*[l,n,n,a,o,o][h],b:255*[o,o,l,n,n,a][h],a:i}},kl=function(r){return{h:wh(r.h),s:Et(r.s,0,100),l:Et(r.l,0,100),a:Et(r.a)}},Dl=function(r){return{h:tt(r.h),s:tt(r.s),l:tt(r.l),a:tt(r.a,3)}},Gl=function(r){return Ah((t=(e=r).s,{h:e.h,s:(t*=((n=e.l)<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}));var e,t,n},ri=function(r){return{h:(e=Ph(r)).h,s:(i=(200-(t=e.s))*(n=e.v)/100)>0&&i<200?t*n/100/(i<=100?i:200-i)*100:0,l:i/2,a:e.a};var e,t,n,i},$g=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Wg=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Vg=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,jg=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_a={string:[[function(r){var e=Hg.exec(r);return e?(r=e[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:r.length===4?tt(parseInt(r[3]+r[3],16)/255,2):1}:r.length===6||r.length===8?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:r.length===8?tt(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var e=Vg.exec(r)||jg.exec(r);return e?e[2]!==e[4]||e[4]!==e[6]?null:Ul({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(r){var e=$g.exec(r)||Wg.exec(r);if(!e)return null;var t,n,i=kl({h:(t=e[1],n=e[2],n===void 0&&(n="deg"),Number(t)*(Ng[n]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Gl(i)},"hsl"]],object:[[function(r){var e=r.r,t=r.g,n=r.b,i=r.a,s=i===void 0?1:i;return nr(e)&&nr(t)&&nr(n)?Ul({r:Number(e),g:Number(t),b:Number(n),a:Number(s)}):null},"rgb"],[function(r){var e=r.h,t=r.s,n=r.l,i=r.a,s=i===void 0?1:i;if(!nr(e)||!nr(t)||!nr(n))return null;var o=kl({h:Number(e),s:Number(t),l:Number(n),a:Number(s)});return Gl(o)},"hsl"],[function(r){var e=r.h,t=r.s,n=r.v,i=r.a,s=i===void 0?1:i;if(!nr(e)||!nr(t)||!nr(n))return null;var o=function(a){return{h:wh(a.h),s:Et(a.s,0,100),v:Et(a.v,0,100),a:Et(a.a)}}({h:Number(e),s:Number(t),v:Number(n),a:Number(s)});return Ah(o)},"hsv"]]},zl=function(r,e){for(var t=0;t<e.length;t++){var n=e[t][0](r);if(n)return[n,e[t][1]]}return[null,void 0]},Xg=function(r){return typeof r=="string"?zl(r.trim(),_a.string):typeof r=="object"&&r!==null?zl(r,_a.object):[null,void 0]},Ao=function(r,e){var t=ri(r);return{h:t.h,s:Et(t.s+100*e,0,100),l:t.l,a:t.a}},Eo=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},Ll=function(r,e){var t=ri(r);return{h:t.h,s:t.s,l:Et(t.l+100*e,0,100),a:t.a}},va=function(){function r(e){this.parsed=Xg(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return this.parsed!==null},r.prototype.brightness=function(){return tt(Eo(this.rgba),2)},r.prototype.isDark=function(){return Eo(this.rgba)<.5},r.prototype.isLight=function(){return Eo(this.rgba)>=.5},r.prototype.toHex=function(){return e=Po(this.rgba),t=e.r,n=e.g,i=e.b,o=(s=e.a)<1?Wi(tt(255*s)):"","#"+Wi(t)+Wi(n)+Wi(i)+o;var e,t,n,i,s,o},r.prototype.toRgb=function(){return Po(this.rgba)},r.prototype.toRgbString=function(){return e=Po(this.rgba),t=e.r,n=e.g,i=e.b,(s=e.a)<1?"rgba("+t+", "+n+", "+i+", "+s+")":"rgb("+t+", "+n+", "+i+")";var e,t,n,i,s},r.prototype.toHsl=function(){return Dl(ri(this.rgba))},r.prototype.toHslString=function(){return e=Dl(ri(this.rgba)),t=e.h,n=e.s,i=e.l,(s=e.a)<1?"hsla("+t+", "+n+"%, "+i+"%, "+s+")":"hsl("+t+", "+n+"%, "+i+"%)";var e,t,n,i,s},r.prototype.toHsv=function(){return e=Ph(this.rgba),{h:tt(e.h),s:tt(e.s),v:tt(e.v),a:tt(e.a,3)};var e},r.prototype.invert=function(){return Vt({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},r.prototype.saturate=function(e){return e===void 0&&(e=.1),Vt(Ao(this.rgba,e))},r.prototype.desaturate=function(e){return e===void 0&&(e=.1),Vt(Ao(this.rgba,-e))},r.prototype.grayscale=function(){return Vt(Ao(this.rgba,-1))},r.prototype.lighten=function(e){return e===void 0&&(e=.1),Vt(Ll(this.rgba,e))},r.prototype.darken=function(e){return e===void 0&&(e=.1),Vt(Ll(this.rgba,-e))},r.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},r.prototype.alpha=function(e){return typeof e=="number"?Vt({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):tt(this.rgba.a,3);var t},r.prototype.hue=function(e){var t=ri(this.rgba);return typeof e=="number"?Vt({h:e,s:t.s,l:t.l,a:t.a}):tt(t.h)},r.prototype.isEqual=function(e){return this.toHex()===Vt(e).toHex()},r}(),Vt=function(r){return r instanceof va?r:new va(r)},Nl=[],Yg=function(r){r.forEach(function(e){Nl.indexOf(e)<0&&(e(va,_a),Nl.push(e))})};function qg(r,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var i in t)n[t[i]]=i;var s={};r.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,h=n[this.toHex()];if(h)return h;if(o!=null&&o.closest){var f=this.toRgb(),p=1/0,x="black";if(!s.length)for(var y in t)s[y]=new r(t[y]).toRgb();for(var b in t){var T=(a=f,l=s[b],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));T<p&&(p=T,x=b)}return x}},e.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":t[a];return l?new r(l).toRgb():null},"name"])}Yg([qg]);const Pn=class Jn{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof Jn)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._value=this._cloneSource(e),this._normalize(this._value))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,t){const n=typeof e;if(n!==typeof t)return!1;if(n==="number"||n==="string"||e instanceof Number)return e===t;if(Array.isArray(e)&&Array.isArray(t)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(t))return e.length!==t.length?!1:e.every((s,o)=>s===t[o]);if(e!==null&&t!==null){const s=Object.keys(e),o=Object.keys(t);return s.length!==o.length?!1:s.every(a=>e[a]===t[a])}return e===t}toRgba(){const[e,t,n,i]=this._components;return{r:e,g:t,b:n,a:i}}toRgb(){const[e,t,n]=this._components;return{r:e,g:t,b:n}}toRgbaString(){const[e,t,n]=this.toUint8RgbArray();return`rgba(${e},${t},${n},${this.alpha})`}toUint8RgbArray(e){const[t,n,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb,e[0]=Math.round(t*255),e[1]=Math.round(n*255),e[2]=Math.round(i*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e=e||this._arrayRgba;const[t,n,i,s]=this._components;return e[0]=t,e[1]=n,e[2]=i,e[3]=s,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb;const[t,n,i]=this._components;return e[0]=t,e[1]=n,e[2]=i,e}toNumber(){return this._int}toBgrNumber(){const[e,t,n]=this.toUint8RgbArray();return(n<<16)+(t<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[t,n,i,s]=Jn._temp.setValue(e)._components;return this._components[0]*=t,this._components[1]*=n,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(e,t=!0){return t&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,t=!0){if(e===1)return(255<<24)+this._int;if(e===0)return t?0:this._int;let n=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return t&&(n=n*e+.5|0,i=i*e+.5|0,s=s*e+.5|0),(e*255<<24)+(n<<16)+(i<<8)+s}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let t,n,i,s;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const o=e;t=(o>>16&255)/255,n=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[t,n,i,s=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[t,n,i,s=255]=e,t/=255,n/=255,i/=255,s/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const a=Jn.HEX_PATTERN.exec(e);a&&(e=`#${a[2]}`)}const o=Vt(e);o.isValid()&&({r:t,g:n,b:i,a:s}=o.rgba,t/=255,n/=255,i/=255)}if(t!==void 0)this._components[0]=t,this._components[1]=n,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,t,n]=this._components;this._int=(e*255<<16)+(t*255<<8)+(n*255|0)}_clamp(e,t=0,n=1){return typeof e=="number"?Math.min(Math.max(e,t),n):(e.forEach((i,s)=>{e[s]=Math.min(Math.max(i,t),n)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof Jn||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};Pn.shared=new Pn;Pn._temp=new Pn;Pn.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let de=Pn;const Kg={cullArea:null,cullable:!1,cullableChildren:!0};class iu{constructor(e,t){this._pool=[],this._count=0,this._index=0,this._classType=e,t&&this.prepopulate(t)}prepopulate(e){for(let t=0;t<e;t++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){var n;let t;return this._index>0?t=this._pool[--this._index]:t=new this._classType,(n=t.init)==null||n.call(t,e),t}return(e){var t;(t=e.reset)==null||t.call(e),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Zg{constructor(){this._poolsByClass=new Map}prepopulate(e,t){this.getPool(e).prepopulate(t)}get(e,t){return this.getPool(e).get(t)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new iu(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(t=>{const n=e[t._classType.name]?t._classType.name+t._classType.ID:t._classType.name;e[n]={free:t.totalFree,used:t.totalUsed,size:t.totalSize}}),e}}const Ae=new Zg;function Eh(r,e,t){const n=r.length;let i;if(e>=n||t===0)return;t=e+t>n?n-e:t;const s=n-t;for(i=e;i<s;++i)r[i]=r[i+t];r.length=s}const Qg={allowChildren:!0,removeChildren(r=0,e){const t=e??this.children.length,n=t-r,i=[];if(n>0&&n<=t){for(let o=t-1;o>=r;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}Eh(this.children,r,t);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(n===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(r){const e=this.getChildAt(r);return this.removeChild(e)},getChildAt(r){if(r<0||r>=this.children.length)throw new Error(`getChildAt: Index (${r}) does not exist.`);return this.children[r]},setChildIndex(r,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(r),this.addChildAt(r,e)},getChildIndex(r){const e=this.children.indexOf(r);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(r,e){this.allowChildren||Z(ye,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:t}=this;if(e<0||e>t.length)throw new Error(`${r}addChildAt: The index ${e} supplied is out of bounds ${t.length}`);if(r.parent){const i=r.parent.children.indexOf(r);if(r.parent===this&&i===e)return r;i!==-1&&r.parent.children.splice(i,1)}e===t.length?t.push(r):t.splice(e,0,r),r.parent=this,r.didChange=!0,r.didViewUpdate=!1,r._updateFlags=15;const n=this.renderGroup||this.parentRenderGroup;return n&&n.addChild(r),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",r,this,e),r.emit("added",this),r},swapChildren(r,e){if(r===e)return;const t=this.getChildIndex(r),n=this.getChildIndex(e);this.children[t]=e,this.children[n]=r;const i=this.renderGroup||this.parentRenderGroup;i&&(i.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){var r;(r=this.parent)==null||r.removeChild(this)},reparentChild(...r){return r.length===1?this.reparentChildAt(r[0],this.children.length):(r.forEach(e=>this.reparentChildAt(e,this.children.length)),r[0])},reparentChildAt(r,e){if(r.parent===this)return this.setChildIndex(r,e),r;const t=r.worldTransform.clone();r.removeFromParent(),this.addChildAt(r,e);const n=this.worldTransform.clone();return n.invert(),t.prepend(n),r.setFromMatrix(t),r}};class ws{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class Jg{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let t=0;t<this._tests.length;t++){const n=this._tests[t];if(n.test(e))return Ae.get(n.maskClass,e)}return e}returnMaskEffect(e){Ae.return(e)}}const ya=new Jg;ke.handleByList(R.MaskEffect,ya._effectClasses);const ex={_maskEffect:null,_filterEffect:null,effects:[],addEffect(r){if(this.effects.indexOf(r)!==-1)return;this.effects.push(r),this.effects.sort((n,i)=>n.priority-i.priority);const t=this.renderGroup||this.parentRenderGroup;t&&(t.structureDidChange=!0),this._updateIsSimple()},removeEffect(r){const e=this.effects.indexOf(r);e!==-1&&(this.effects.splice(e,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(r){const e=this._maskEffect;(e==null?void 0:e.mask)!==r&&(e&&(this.removeEffect(e),ya.returnMaskEffect(e),this._maskEffect=null),r!=null&&(this._maskEffect=ya.getMaskEffect(r),this.addEffect(this._maskEffect)))},get mask(){var r;return(r=this._maskEffect)==null?void 0:r.mask},set filters(r){var s;!Array.isArray(r)&&r&&(r=[r]);const e=this._filterEffect||(this._filterEffect=new ws);r=r;const t=(r==null?void 0:r.length)>0,n=((s=e.filters)==null?void 0:s.length)>0,i=t!==n;r=Array.isArray(r)?r.slice(0):r,e.filters=Object.freeze(r),i&&(t?this.addEffect(e):(this.removeEffect(e),e.filters=r??null))},get filters(){var r;return(r=this._filterEffect)==null?void 0:r.filters},set filterArea(r){this._filterEffect||(this._filterEffect=new ws),this._filterEffect.filterArea=r},get filterArea(){var r;return(r=this._filterEffect)==null?void 0:r.filterArea}},tx={label:null,get name(){return Z(ye,"Container.name property has been removed, use Container.label instead"),this.label},set name(r){Z(ye,"Container.name property has been removed, use Container.label instead"),this.label=r},getChildByName(r,e=!1){return this.getChildByLabel(r,e)},getChildByLabel(r,e=!1){const t=this.children;for(let n=0;n<t.length;n++){const i=t[n];if(i.label===r||r instanceof RegExp&&r.test(i.label))return i}if(e)for(let n=0;n<t.length;n++){const s=t[n].getChildByLabel(r,!0);if(s)return s}return null},getChildrenByLabel(r,e=!1,t=[]){const n=this.children;for(let i=0;i<n.length;i++){const s=n[i];(s.label===r||r instanceof RegExp&&r.test(s.label))&&t.push(s)}if(e)for(let i=0;i<n.length;i++)n[i].getChildrenByLabel(r,!0,t);return t}},ar=new iu(ue),ur=new iu(xt);function su(r,e,t){t.clear();let n,i;return r.parent?e?n=r.parent.worldTransform:(i=ar.get().identity(),n=Ps(r,i)):n=ue.IDENTITY,Mh(r,t,n,e),i&&ar.return(i),t.isValid||t.set(0,0,0,0),t}function Mh(r,e,t,n){var a,l;if(!r.visible||!r.measurable)return;let i;n?i=r.worldTransform:(r.updateLocalTransform(),i=ar.get(),i.appendFrom(r.localTransform,t));const s=e,o=!!r.effects.length;if(o&&(e=ur.get().clear()),r.boundsArea)e.addRect(r.boundsArea,i);else{r.addBounds&&(e.matrix=i,r.addBounds(e));for(let h=0;h<r.children.length;h++)Mh(r.children[h],e,i,n)}if(o){for(let h=0;h<r.effects.length;h++)(l=(a=r.effects[h]).addBounds)==null||l.call(a,e);s.addBounds(e,ue.IDENTITY),ur.return(e)}n||ar.return(i)}function Ps(r,e){const t=r.parent;return t&&(Ps(t,e),t.updateLocalTransform(),e.append(t.localTransform)),e}let Mo=0;const Hl=500;function fe(...r){Mo!==Hl&&(Mo++,Mo===Hl?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...r))}function ou(r,e,t){return e.clear(),t||(t=ue.IDENTITY),Bh(r,e,t,r,!0),e.isValid||e.set(0,0,0,0),e}function Bh(r,e,t,n,i){var l,h;let s;if(i)s=ar.get(),s=t.copyTo(s);else{if(!r.visible||!r.measurable)return;r.updateLocalTransform();const f=r.localTransform;s=ar.get(),s.appendFrom(f,t)}const o=e,a=!!r.effects.length;if(a&&(e=ur.get().clear()),r.boundsArea)e.addRect(r.boundsArea,s);else{r.renderPipeId&&(e.matrix=s,r.addBounds(e));const f=r.children;for(let p=0;p<f.length;p++)Bh(f[p],e,s,n,!1)}if(a){for(let f=0;f<r.effects.length;f++)(h=(l=r.effects[f]).addLocalBounds)==null||h.call(l,e,n);o.addBounds(e,ue.IDENTITY),ur.return(e)}ar.return(s)}function Rh(r,e){const t=r.children;for(let n=0;n<t.length;n++){const i=t[n],s=i.uid,o=(i._didViewChangeTick&65535)<<16|i._didContainerChangeTick&65535,a=e.index;(e.data[a]!==s||e.data[a+1]!==o)&&(e.data[e.index]=s,e.data[e.index+1]=o,e.didChange=!0),e.index=a+2,i.children.length&&Rh(i,e)}return e.didChange}const rx=new ue,nx={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(r,e){const t=Math.sign(this.scale.x)||1;e!==0?this.scale.x=r/e*t:this.scale.x=t},_setHeight(r,e){const t=Math.sign(this.scale.y)||1;e!==0?this.scale.y=r/e*t:this.scale.y=t},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new xt});const r=this._localBoundsCacheData;return r.index=1,r.didChange=!1,r.data[0]!==this._didViewChangeTick&&(r.didChange=!0,r.data[0]=this._didViewChangeTick),Rh(this,r),r.didChange&&ou(this,r.localBounds,rx),r.localBounds},getBounds(r,e){return su(this,r,e||new xt)}},ix={_onRender:null,set onRender(r){const e=this.renderGroup||this.parentRenderGroup;if(!r){this._onRender&&(e==null||e.removeOnRender(this)),this._onRender=null;return}this._onRender||e==null||e.addOnRender(this),this._onRender=r},get onRender(){return this._onRender}},sx={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(r){this._zIndex!==r&&(this._zIndex=r,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(ox))}};function ox(r,e){return r._zIndex-e._zIndex}const ax={getGlobalPosition(r=new ze,e=!1){return this.parent?this.parent.toGlobal(this._position,r,e):(r.x=this._position.x,r.y=this._position.y),r},toGlobal(r,e,t=!1){if(!t){this.updateLocalTransform();const n=Ps(this,new ue);return n.append(this.localTransform),n.apply(r,e)}return this.worldTransform.apply(r,e)},toLocal(r,e,t,n){if(e&&(r=e.toGlobal(r,t,n)),!n){this.updateLocalTransform();const i=Ps(this,new ue);return i.append(this.localTransform),i.applyInverse(r,t)}return this.worldTransform.applyInverse(r,t)}};let ux=0;class Ih{constructor(){this.uid=Ve("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.tick=0}reset(){this.instructionSize=0,this.tick=ux++}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class lx{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new ue,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Ih,this._onRenderContainers=[]}init(e){this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const t=e.children;for(let n=0;n<t.length;n++)this.addChild(t[n])}reset(){this.renderGroupChildren.length=0;for(const e in this.childrenToUpdate){const t=this.childrenToUpdate[e];t.list.fill(null),t.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const t=this.renderGroupChildren.indexOf(e);t>-1&&this.renderGroupChildren.splice(t,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const t=e.children;for(let n=0;n<t.length;n++)this.addChild(t[n])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const t=e.children;for(let n=0;n<t.length;n++)this.removeChild(t[n])}removeChildren(e){for(let t=0;t<e.length;t++)this.removeChild(e[t])}onChildUpdate(e){let t=this.childrenToUpdate[e.relativeRenderGroupDepth];t||(t=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),t.list[t.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(e.didViewUpdate=!1,this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e))}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(e=[]){const t=this.root.children;for(let n=0;n<t.length;n++)this._getChildren(t[n],e);return e}_getChildren(e,t=[]){if(t.push(e),e.renderGroup)return t;const n=e.children;for(let i=0;i<n.length;i++)this._getChildren(n[i],t);return t}}function cx(r,e,t={}){for(const n in e)!t[n]&&e[n]!==void 0&&(r[n]=e[n])}const Bo=new Ke(null),Ro=new Ke(null),Io=new Ke(null,1,1),As=1,au=2,ni=4;class Ze extends it{constructor(e={}){var t,n;super(),this.uid=Ve("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new ue,this.relativeGroupTransform=new ue,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ke(this,0,0),this._scale=Io,this._pivot=Ro,this._skew=Bo,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],cx(this,e,{children:!0,parent:!0,effects:!0}),(t=e.children)==null||t.forEach(i=>this.addChild(i)),(n=e.parent)==null||n.addChild(this)}static mixin(e){Object.defineProperties(Ze.prototype,Object.getOwnPropertyDescriptors(e))}set _didChangeId(e){this._didViewChangeTick=e>>12&4095,this._didContainerChangeTick=e&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...e){if(this.allowChildren||Z(ye,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let i=0;i<e.length;i++)this.addChild(e[i]);return e[0]}const t=e[0];if(t.parent===this)return this.children.splice(this.children.indexOf(t),1),this.children.push(t),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),t;t.parent&&t.parent.removeChild(t),this.children.push(t),this.sortableChildren&&(this.sortDirty=!0),t.parent=this,t.didChange=!0,t.didViewUpdate=!1,t._updateFlags=15;const n=this.renderGroup||this.parentRenderGroup;return n&&n.addChild(t),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this),this._didViewChangeTick++,t._zIndex!==0&&t.depthOfChildModified(),t}removeChild(...e){if(e.length>1){for(let i=0;i<e.length;i++)this.removeChild(e[i]);return e[0]}const t=e[0],n=this.children.indexOf(t);return n>-1&&(this._didViewChangeTick++,this.children.splice(n,1),this.renderGroup?this.renderGroup.removeChild(t):this.parentRenderGroup&&this.parentRenderGroup.removeChild(t),t.parent=null,this.emit("childRemoved",t,this,n),t.emit("removed",this)),t}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){!!this.renderGroup!==e&&(e?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),this.renderGroup=Ae.get(lx,this),this.groupTransform=ue.IDENTITY,e==null||e.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),Ae.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,e==null||e.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new ue),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*Fg}set angle(e){this.rotation=e*Cn}get pivot(){return this._pivot===Ro&&(this._pivot=new Ke(this,0,0)),this._pivot}set pivot(e){this._pivot===Ro&&(this._pivot=new Ke(this,0,0)),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===Bo&&(this._skew=new Ke(this,0,0)),this._skew}set skew(e){this._skew===Bo&&(this._skew=new Ke(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===Io&&(this._scale=new Ke(this,1,1)),this._scale}set scale(e){this._scale===Io&&(this._scale=new Ke(this,0,0)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const t=this.getLocalBounds().width;this._setWidth(e,t)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const t=this.getLocalBounds().height;this._setHeight(e,t)}getSize(e){e||(e={});const t=this.getLocalBounds();return e.width=Math.abs(this.scale.x*t.width),e.height=Math.abs(this.scale.y*t.height),e}setSize(e,t){const n=this.getLocalBounds();typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,n.width),t!==void 0&&this._setHeight(t,n.height)}_updateSkew(){const e=this._rotation,t=this._skew;this._cx=Math.cos(e+t._y),this._sx=Math.sin(e+t._y),this._cy=-Math.sin(e-t._x),this._sy=Math.cos(e-t._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){const e=this._didContainerChangeTick;if(this._didLocalTransformChangeId===e)return;this._didLocalTransformChangeId=e;const t=this.localTransform,n=this._scale,i=this._pivot,s=this._position,o=n._x,a=n._y,l=i._x,h=i._y;t.a=this._cx*o,t.b=this._sx*o,t.c=this._cy*a,t.d=this._sy*a,t.tx=s._x-(l*t.a+h*t.c),t.ty=s._y-(l*t.b+h*t.d)}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=As,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const n=de.shared.setValue(e??16777215).toBgrNumber();n!==this.localColor&&(this.localColor=n,this._updateFlags|=As,this._onUpdate())}get tint(){const e=this.localColor;return((e&255)<<16)+(e&65280)+(e>>16&255)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=au,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const t=e?2:0;(this.localDisplayStatus&2)!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ni,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const t=e?0:4;(this.localDisplayStatus&4)!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ni,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const t=e?1:0;(this.localDisplayStatus&1)!==t&&(this._updateFlags|=ni,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){var i;if(this.destroyed)return;this.destroyed=!0;const t=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.children)for(let s=0;s<t.length;++s)t[s].destroy(e);(i=this.renderGroup)==null||i.destroy(),this.renderGroup=null}}Ze.mixin(Qg);Ze.mixin(ax);Ze.mixin(ix);Ze.mixin(nx);Ze.mixin(ex);Ze.mixin(tx);Ze.mixin(sx);Ze.mixin(Kg);class bi extends Ze{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=0,this._lastInstructionTick=-1,this._bounds=new xt(0,1,0,0),this._boundsDirty=!0}_updateBounds(){}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}containsPoint(e){const t=this.bounds,{x:n,y:i}=e;return n>=t.minX&&n<=t.maxX&&i>=t.minY&&i<=t.maxY}destroy(e){super.destroy(e),this._bounds=null}}class Tr extends bi{constructor(e=Q.EMPTY){e instanceof Q&&(e={texture:e});const{texture:t=Q.EMPTY,anchor:n,roundPixels:i,width:s,height:o,...a}=e;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBoundsDirty=!0,this._anchor=new Ke({_onUpdate:()=>{this.onViewUpdate()}}),n?this.anchor=n:t.defaultAnchor&&(this.anchor=t.defaultAnchor),this.texture=t,this.allowChildren=!1,this.roundPixels=i??!1,s!==void 0&&(this.width=s),o!==void 0&&(this.height=o)}static from(e,t=!1){return e instanceof Q?new Tr(e):new Tr(Q.from(e,t))}set texture(e){e||(e=Q.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(e){const t=this.sourceBounds;return e.x>=t.maxX&&e.x<=t.minX&&e.y>=t.maxY&&e.y<=t.minY}addBounds(e){const t=this._texture.trim?this.sourceBounds:this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}onViewUpdate(){if(this._didViewChangeTick++,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}_updateBounds(){Cs(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const e=this._anchor,t=this._texture,n=this._sourceBounds,{width:i,height:s}=t.orig;n.maxX=-e._x*i,n.minX=n.maxX+i,n.maxY=-e._y*s,n.minY=n.maxY+s}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const n=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(n)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width),this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height),this._height=e}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,t){typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,this._texture.orig.width),t!==void 0&&this._setHeight(t,this._texture.orig.height)}}const hx=new xt;function Fh(r,e,t){const n=hx;r.measurable=!0,su(r,t,n),e.addBoundsMask(n),r.measurable=!1}function Oh(r,e,t){const n=ur.get();r.measurable=!0;const i=ar.get().identity(),s=Uh(r,t,i);ou(r,n,s),r.measurable=!1,e.addBoundsMask(n),ar.return(i),ur.return(n)}function Uh(r,e,t){return r?(r!==e&&(Uh(r.parent,e,t),r.updateLocalTransform(),t.append(r.localTransform)),t):(fe("Mask bounds, renderable is not inside the root container"),t)}class kh{constructor(e){this.priority=0,this.pipe="alphaMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof Tr),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(e,t){Fh(this.mask,e,t)}addLocalBounds(e,t){Oh(this.mask,e,t)}containsPoint(e,t){const n=this.mask;return t(n,e)}destroy(){this.reset()}static test(e){return e instanceof Tr}}kh.extension=R.MaskEffect;class Dh{constructor(e){this.priority=0,this.pipe="colorMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}Dh.extension=R.MaskEffect;class Gh{constructor(e){this.priority=0,this.pipe="stencilMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(e,t){Fh(this.mask,e,t)}addLocalBounds(e,t){Oh(this.mask,e,t)}containsPoint(e,t){const n=this.mask;return t(n,e)}destroy(){this.reset()}static test(e){return e instanceof Ze}}Gh.extension=R.MaskEffect;const fx={createCanvas:(r,e)=>{const t=document.createElement("canvas");return t.width=r,t.height=e,t},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(r,e)=>fetch(r,e),parseXML:r=>new DOMParser().parseFromString(r,"text/xml")};let $l=fx;const Ce={get(){return $l},set(r){$l=r}};class Cr extends Ye{constructor(e){e.resource||(e.resource=Ce.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity;const t=e.resource;(this.pixelWidth!==t.width||this.pixelWidth!==t.height)&&this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,t=this.height,n=this._resolution){const i=super.resize(e,t,n);return i&&this.resizeCanvas(),i}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}Cr.extension=R.TextureSource;class Xr extends Ye{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){const t=Ce.get().createCanvas(e.resource.width,e.resource.height);t.getContext("2d").drawImage(e.resource,0,0,e.resource.width,e.resource.height),e.resource=t,fe("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}}Xr.extension=R.TextureSource;var wr=(r=>(r[r.INTERACTION=50]="INTERACTION",r[r.HIGH=25]="HIGH",r[r.NORMAL=0]="NORMAL",r[r.LOW=-25]="LOW",r[r.UTILITY=-50]="UTILITY",r))(wr||{});class Fo{constructor(e,t=null,n=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=t,this.priority=n,this._once=i}match(e,t=null){return this._fn===e&&this._context===t}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const t=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),t}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const t=this.next;return this.next=e?null:t,this.previous=null,t}}const zh=class yt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Fo(null,null,1/0),this.deltaMS=1/yt.targetFPMS,this.elapsedMS=1/yt.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,t,n=wr.NORMAL){return this._addListener(new Fo(e,t,n))}addOnce(e,t,n=wr.NORMAL){return this._addListener(new Fo(e,t,n,!0))}_addListener(e){let t=this._head.next,n=this._head;if(!t)e.connect(n);else{for(;t;){if(e.priority>t.priority){e.connect(n);break}n=t,t=t.next}e.previous||e.connect(n)}return this._startIfPossible(),this}remove(e,t){let n=this._head.next;for(;n;)n.match(e,t)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,t=this._head;for(;t=t.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){const s=e-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=e-s%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*yt.targetFPMS;const n=this._head;let i=n.next;for(;i;)i=i.emit(this);n.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const t=Math.min(this.maxFPS,e),n=Math.min(Math.max(0,t)/1e3,yt.targetFPMS);this._maxElapsedMS=1/n}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}static get shared(){if(!yt._shared){const e=yt._shared=new yt;e.autoStart=!0,e._protected=!0}return yt._shared}static get system(){if(!yt._system){const e=yt._system=new yt;e.autoStart=!0,e._protected=!0}return yt._system}};zh.targetFPMS=.06;let Xe=zh,Oo;async function Lh(){return Oo??(Oo=(async()=>{var o;const e=document.createElement("canvas").getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const t=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!t)return"premultiply-alpha-on-upload";const n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);const i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);const s=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,s),e.deleteFramebuffer(i),e.deleteTexture(n),(o=e.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Oo}const $s=class Nh extends Ye{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...Nh.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=Xe.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,t=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(t.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await Lh(),this._load=new Promise((n,i)=>{this.isValid?n(this):(this._resolve=n,this._reject=i,t.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${t.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Xe.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Xe.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Xe.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement}};$s.extension=R.TextureSource;$s.defaultOptions={...Ye.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};$s.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let ls=$s;const kt=(r,e,t=!1)=>(Array.isArray(r)||(r=[r]),e?r.map(n=>typeof n=="string"||t?e(n):n):r);class dx{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const t=this._cache.get(e);return t||fe(`[Assets] Asset id ${e} was not found in the Cache`),t}set(e,t){const n=kt(e);let i;for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];if(h.test(t)){i=h.getCacheableAssets(n,t);break}}const s=new Map(Object.entries(i||{}));i||n.forEach(l=>{s.set(l,t)});const o=[...s.keys()],a={cacheKeys:o,keys:n};n.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const h=i?i[l]:t;this._cache.has(l)&&this._cache.get(l)!==h&&fe("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(e){if(!this._cacheMap.has(e)){fe(`[Assets] Asset id ${e} was not found in the Cache`);return}const t=this._cacheMap.get(e);t.cacheKeys.forEach(i=>{this._cache.delete(i)}),t.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const Ge=new dx,ba=[];ke.handleByList(R.TextureSource,ba);function Hh(r={}){const e=r&&r.resource,t=e?r.resource:r,n=e?r:{resource:r};for(let i=0;i<ba.length;i++){const s=ba[i];if(s.test(t))return new s(n)}throw new Error(`Could not find a source type for resource: ${n.resource}`)}function px(r={},e=!1){const t=r&&r.resource,n=t?r.resource:r,i=t?r:{resource:r};if(!e&&Ge.has(n))return Ge.get(n);const s=new Q({source:Hh(i)});return s.on("destroy",()=>{Ge.has(n)&&Ge.remove(n)}),e||Ge.set(n,s),s}function mx(r,e=!1){return typeof r=="string"?Ge.get(r):r instanceof Ye?new Q({source:r}):px(r,e)}Q.from=mx;Ye.from=Hh;ke.add(kh,Dh,Gh,ls,Xr,Cr,nu);var fr=(r=>(r[r.Low=0]="Low",r[r.Normal=1]="Normal",r[r.High=2]="High",r))(fr||{});function Ot(r){if(typeof r!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(r)}`)}function Vn(r){return r.split("?")[0].split("#")[0]}function gx(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xx(r,e,t){return r.replace(new RegExp(gx(e),"g"),t)}function _x(r,e){let t="",n=0,i=-1,s=0,o=-1;for(let a=0;a<=r.length;++a){if(a<r.length)o=r.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(t.length<2||n!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){const l=t.lastIndexOf("/");if(l!==t.length-1){l===-1?(t="",n=0):(t=t.slice(0,l),n=t.length-1-t.lastIndexOf("/")),i=a,s=0;continue}}else if(t.length===2||t.length===1){t="",n=0,i=a,s=0;continue}}}else t.length>0?t+=`/${r.slice(i+1,a)}`:t=r.slice(i+1,a),n=a-i-1;i=a,s=0}else o===46&&s!==-1?++s:s=-1}return t}const at={toPosix(r){return xx(r,"\\","/")},isUrl(r){return/^https?:/.test(this.toPosix(r))},isDataUrl(r){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(r)},isBlobUrl(r){return r.startsWith("blob:")},hasProtocol(r){return/^[^/:]+:/.test(this.toPosix(r))},getProtocol(r){Ot(r),r=this.toPosix(r);const e=/^file:\/\/\//.exec(r);if(e)return e[0];const t=/^[^/:]+:\/{0,2}/.exec(r);return t?t[0]:""},toAbsolute(r,e,t){if(Ot(r),this.isDataUrl(r)||this.isBlobUrl(r))return r;const n=Vn(this.toPosix(e??Ce.get().getBaseUrl())),i=Vn(this.toPosix(t??this.rootname(n)));return r=this.toPosix(r),r.startsWith("/")?at.join(i,r.slice(1)):this.isAbsolute(r)?r:this.join(n,r)},normalize(r){if(Ot(r),r.length===0)return".";if(this.isDataUrl(r)||this.isBlobUrl(r))return r;r=this.toPosix(r);let e="";const t=r.startsWith("/");this.hasProtocol(r)&&(e=this.rootname(r),r=r.slice(e.length));const n=r.endsWith("/");return r=_x(r),r.length>0&&n&&(r+="/"),t?`/${r}`:e+r},isAbsolute(r){return Ot(r),r=this.toPosix(r),this.hasProtocol(r)?!0:r.startsWith("/")},join(...r){if(r.length===0)return".";let e;for(let t=0;t<r.length;++t){const n=r[t];if(Ot(n),n.length>0)if(e===void 0)e=n;else{const i=r[t-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?e+=`/../${n}`:e+=`/${n}`}}return e===void 0?".":this.normalize(e)},dirname(r){if(Ot(r),r.length===0)return".";r=this.toPosix(r);let e=r.charCodeAt(0);const t=e===47;let n=-1,i=!0;const s=this.getProtocol(r),o=r;r=r.slice(s.length);for(let a=r.length-1;a>=1;--a)if(e=r.charCodeAt(a),e===47){if(!i){n=a;break}}else i=!1;return n===-1?t?"/":this.isUrl(o)?s+r:s:t&&n===1?"//":s+r.slice(0,n)},rootname(r){Ot(r),r=this.toPosix(r);let e="";if(r.startsWith("/")?e="/":e=this.getProtocol(r),this.isUrl(r)){const t=r.indexOf("/",e.length);t!==-1?e=r.slice(0,t):e=r,e.endsWith("/")||(e+="/")}return e},basename(r,e){Ot(r),e&&Ot(e),r=Vn(this.toPosix(r));let t=0,n=-1,i=!0,s;if(e!==void 0&&e.length>0&&e.length<=r.length){if(e.length===r.length&&e===r)return"";let o=e.length-1,a=-1;for(s=r.length-1;s>=0;--s){const l=r.charCodeAt(s);if(l===47){if(!i){t=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===e.charCodeAt(o)?--o===-1&&(n=s):(o=-1,n=a))}return t===n?n=a:n===-1&&(n=r.length),r.slice(t,n)}for(s=r.length-1;s>=0;--s)if(r.charCodeAt(s)===47){if(!i){t=s+1;break}}else n===-1&&(i=!1,n=s+1);return n===-1?"":r.slice(t,n)},extname(r){Ot(r),r=Vn(this.toPosix(r));let e=-1,t=0,n=-1,i=!0,s=0;for(let o=r.length-1;o>=0;--o){const a=r.charCodeAt(o);if(a===47){if(!i){t=o+1;break}continue}n===-1&&(i=!1,n=o+1),a===46?e===-1?e=o:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||n===-1||s===0||s===1&&e===n-1&&e===t+1?"":r.slice(e,n)},parse(r){Ot(r);const e={root:"",dir:"",base:"",ext:"",name:""};if(r.length===0)return e;r=Vn(this.toPosix(r));let t=r.charCodeAt(0);const n=this.isAbsolute(r);let i;e.root=this.rootname(r),n||this.hasProtocol(r)?i=1:i=0;let s=-1,o=0,a=-1,l=!0,h=r.length-1,f=0;for(;h>=i;--h){if(t=r.charCodeAt(h),t===47){if(!l){o=h+1;break}continue}a===-1&&(l=!1,a=h+1),t===46?s===-1?s=h:f!==1&&(f=1):s!==-1&&(f=-1)}return s===-1||a===-1||f===0||f===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&n?e.base=e.name=r.slice(1,a):e.base=e.name=r.slice(o,a)):(o===0&&n?(e.name=r.slice(1,s),e.base=r.slice(1,a)):(e.name=r.slice(o,s),e.base=r.slice(o,a)),e.ext=r.slice(s,a)),e.dir=this.dirname(r),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function $h(r,e,t,n,i){const s=e[t];for(let o=0;o<s.length;o++){const a=s[o];t<e.length-1?$h(r.replace(n[t],a),e,t+1,n,i):i.push(r.replace(n[t],a))}}function vx(r){const e=/\{(.*?)\}/g,t=r.match(e),n=[];if(t){const i=[];t.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),$h(r,i,0,t,n)}else n.push(r);return n}const Es=r=>!Array.isArray(r);class Mn{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(t=>{this._preferredOrder.push(t),t.priority||(t.priority=Object.keys(t.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const t=e;this._defaultSearchParams=Object.keys(t).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(t[n])}`).join("&")}}getAlias(e){const{alias:t,src:n}=e;return kt(t||n,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(e){this._manifest&&fe("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(t=>{this.addBundle(t.name,t.assets)})}addBundle(e,t){const n=[];let i=t;Array.isArray(t)||(i=Object.entries(t).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const h=this._createBundleAssetId(e,a);n.push(h),l=[a,h]}else{const h=a.map(f=>this._createBundleAssetId(e,f));n.push(...h),l=[...a,...h]}this.add({...s,alias:l,src:o})}),this._bundles[e]=n}add(e){const t=[];Array.isArray(e)?t.push(...e):t.push(e);let n;n=s=>{this.hasKey(s)&&fe(`[Resolver] already has key: ${s} overwriting`)},kt(t).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:h}=s;const f=kt(o).map(y=>typeof y=="string"?vx(y):Array.isArray(y)?y:[y]),p=this.getAlias(s);Array.isArray(p)?p.forEach(n):n(p);const x=[];f.forEach(y=>{y.forEach(b=>{let T={};if(typeof b!="object"){T.src=b;for(let C=0;C<this._parsers.length;C++){const P=this._parsers[C];if(P.test(b)){T=P.parse(b);break}}}else a=b.data??a,l=b.format??l,h=b.loadParser??h,T={...T,...b};if(!p)throw new Error(`[Resolver] alias is undefined for this asset: ${T.src}`);T=this._buildResolvedAsset(T,{aliases:p,data:a,format:l,loadParser:h}),x.push(T)})}),p.forEach(y=>{this._assetMap[y]=x})})}resolveBundle(e){const t=Es(e);e=kt(e);const n={};return e.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),a={};for(const l in o){const h=o[l];a[this._extractAssetIdFromBundle(i,l)]=h}n[i]=a}}),t?n[e[0]]:n}resolveUrl(e){const t=this.resolve(e);if(typeof e!="string"){const n={};for(const i in t)n[i]=t[i].src;return n}return t.src}resolve(e){const t=Es(e);e=kt(e);const n={};return e.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const h=s.filter(f=>f[a]?f[a]===l:!1);h.length&&(s=h)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});n[i]=this._resolverHash[i]}),t?n[e[0]]:n}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let t=0;t<e.length;t++){const n=e[0],i=this._preferredOrder.find(s=>s.params.format.includes(n.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const t=/\?/.test(e)?"&":"?";return`${e}${t}${this._defaultSearchParams}`}_buildResolvedAsset(e,t){const{aliases:n,data:i,loadParser:s,format:o}=t;return(this._basePath||this._rootPath)&&(e.src=at.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=n??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...i||{},...e.data},e.loadParser=s??e.loadParser,e.format=o??e.format??yx(e.src),e}}Mn.RETINA_PREFIX=/@([0-9\.]+)x/;function yx(r){return r.split(".").pop().split("?").shift().split("#").shift()}const Sa=(r,e)=>{const t=e.split("?")[1];return t&&(r+=`?${t}`),r},Wh=class ei{constructor(e,t){this.linkedSheets=[],this._texture=e instanceof Q?e:null,this.textureSource=e.source,this.textures={},this.animations={},this.data=t;const n=parseFloat(t.meta.scale);n?(this.resolution=n,e.source.resolution=this.resolution):this.resolution=e.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=ei.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let t=e;const n=ei.BATCH_SIZE;for(;t-e<n&&t<this._frameKeys.length;){const i=this._frameKeys[t],s=this._frames[i],o=s.frame;if(o){let a=null,l=null;const h=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,f=new Le(0,0,Math.floor(h.w)/this.resolution,Math.floor(h.h)/this.resolution);s.rotated?a=new Le(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new Le(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new Le(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new Q({source:this.textureSource,frame:a,orig:f,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}t++}}_processAnimations(){const e=this.data.animations||{};for(const t in e){this.animations[t]=[];for(let n=0;n<e[t].length;n++){const i=e[t][n];this.animations[t].push(this.textures[i])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*ei.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*ei.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){var t;for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)==null||t.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Wh.BATCH_SIZE=1e3;let Wl=Wh;const bx=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Vh(r,e,t){const n={};if(r.forEach(i=>{n[i]=e}),Object.keys(e.textures).forEach(i=>{n[i]=e.textures[i]}),!t){const i=at.dirname(r[0]);e.linkedSheets.forEach((s,o)=>{const a=Vh([`${i}/${e.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(n,a)})}return n}const Sx={extension:R.Asset,cache:{test:r=>r instanceof Wl,getCacheableAssets:(r,e)=>Vh(r,e,!1)},resolver:{extension:{type:R.ResolveParser,name:"resolveSpritesheet"},test:r=>{const t=r.split("?")[0].split("."),n=t.pop(),i=t.pop();return n==="json"&&bx.includes(i)},parse:r=>{var t;const e=r.split(".");return{resolution:parseFloat(((t=Mn.RETINA_PREFIX.exec(r))==null?void 0:t[1])??"1"),format:e[e.length-2],src:r}}},loader:{name:"spritesheetLoader",extension:{type:R.LoadParser,priority:fr.Normal,name:"spritesheetLoader"},async testParse(r,e){return at.extname(e.src).toLowerCase()===".json"&&!!r.frames},async parse(r,e,t){var h,f;const{texture:n,imageFilename:i}=(e==null?void 0:e.data)??{};let s=at.dirname(e.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(n instanceof Q)o=n;else{const p=Sa(s+(i??r.meta.image),e.src);o=(await t.load([p]))[p]}const a=new Wl(o.source,r);await a.parse();const l=(h=r==null?void 0:r.meta)==null?void 0:h.related_multi_packs;if(Array.isArray(l)){const p=[];for(const y of l){if(typeof y!="string")continue;let b=s+y;(f=e.data)!=null&&f.ignoreMultiPack||(b=Sa(b,e.src),p.push(t.load({src:b,data:{ignoreMultiPack:!0}})))}const x=await Promise.all(p);a.linkedSheets=x,x.forEach(y=>{y.linkedSheets=[a].concat(a.linkedSheets.filter(b=>b!==y))})}return a},async unload(r,e,t){await t.unload(r.textureSource._sourceOrigin),r.destroy(!1)}}};ke.add(Sx);class Si{constructor(e){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=Si.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new ze,this.page=new ze,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=e}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)&&(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(e,t,n){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(e,t,n,i,s){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}stopPropagation(){this.propagationStopped=!0}}var Uo=/iPhone/i,Vl=/iPod/i,jl=/iPad/i,Xl=/\biOS-universal(?:.+)Mac\b/i,ko=/\bAndroid(?:.+)Mobile\b/i,Yl=/Android/i,an=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Vi=/Silk/i,ir=/Windows Phone/i,ql=/\bWindows(?:.+)ARM\b/i,Kl=/BlackBerry/i,Zl=/BB10/i,Ql=/Opera Mini/i,Jl=/\b(CriOS|Chrome)(?:.+)Mobile/i,ec=/Mobile(?:.+)Firefox\b/i,tc=function(r){return typeof r<"u"&&r.platform==="MacIntel"&&typeof r.maxTouchPoints=="number"&&r.maxTouchPoints>1&&typeof MSStream>"u"};function Tx(r){return function(e){return e.test(r)}}function rc(r){var e={userAgent:"",platform:"",maxTouchPoints:0};!r&&typeof navigator<"u"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof r=="string"?e.userAgent=r:r&&r.userAgent&&(e={userAgent:r.userAgent,platform:r.platform,maxTouchPoints:r.maxTouchPoints||0});var t=e.userAgent,n=t.split("[FBAN");typeof n[1]<"u"&&(t=n[0]),n=t.split("Twitter"),typeof n[1]<"u"&&(t=n[0]);var i=Tx(t),s={apple:{phone:i(Uo)&&!i(ir),ipod:i(Vl),tablet:!i(Uo)&&(i(jl)||tc(e))&&!i(ir),universal:i(Xl),device:(i(Uo)||i(Vl)||i(jl)||i(Xl)||tc(e))&&!i(ir)},amazon:{phone:i(an),tablet:!i(an)&&i(Vi),device:i(an)||i(Vi)},android:{phone:!i(ir)&&i(an)||!i(ir)&&i(ko),tablet:!i(ir)&&!i(an)&&!i(ko)&&(i(Vi)||i(Yl)),device:!i(ir)&&(i(an)||i(Vi)||i(ko)||i(Yl))||i(/\bokhttp\b/i)},windows:{phone:i(ir),tablet:i(ql),device:i(ir)||i(ql)},other:{blackberry:i(Kl),blackberry10:i(Zl),opera:i(Ql),firefox:i(ec),chrome:i(Jl),device:i(Kl)||i(Zl)||i(Ql)||i(ec)||i(Jl)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}const Cx=rc.default??rc,wx=Cx(globalThis.navigator),Px=9,ji=100,Ax=0,Ex=0,nc=2,ic=1,Mx=-1e3,Bx=-1e3,Rx=2;class Ix{constructor(e,t=wx){this._mobileInfo=t,this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this._pool=[],this._renderId=0,this._children=[],this._androidUpdateCount=0,this._androidUpdateFrequency=500,this._hookDiv=null,(t.tablet||t.phone)&&this._createTouchHook();const n=document.createElement("div");n.style.width=`${ji}px`,n.style.height=`${ji}px`,n.style.position="absolute",n.style.top=`${Ax}px`,n.style.left=`${Ex}px`,n.style.zIndex=nc.toString(),this._div=n,this._renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}get isActive(){return this._isActive}get isMobileAccessibility(){return this._isMobileAccessibility}get hookDiv(){return this._hookDiv}_createTouchHook(){const e=document.createElement("button");e.style.width=`${ic}px`,e.style.height=`${ic}px`,e.style.position="absolute",e.style.top=`${Mx}px`,e.style.left=`${Bx}px`,e.style.zIndex=Rx.toString(),e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",()=>{this._isMobileAccessibility=!0,this._activate(),this._destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e}_destroyTouchHook(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)}_activate(){var e;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.add(this),(e=this._renderer.view.canvas.parentNode)==null||e.appendChild(this._div))}_deactivate(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.remove(this),(e=this._div.parentNode)==null||e.removeChild(this._div))}_updateAccessibleObjects(e){if(!e.visible||!e.accessibleChildren)return;e.accessible&&e.isInteractive()&&(e._accessibleActive||this._addChild(e),e._renderId=this._renderId);const t=e.children;if(t)for(let n=0;n<t.length;n++)this._updateAccessibleObjects(t[n])}init(e){this.debug=(e==null?void 0:e.debug)??this.debug,this._renderer.runners.postrender.remove(this)}postrender(){const e=performance.now();if(this._mobileInfo.android.device&&e<this._androidUpdateCount||(this._androidUpdateCount=e+this._androidUpdateFrequency,!this._renderer.renderingToScreen||!this._renderer.view.canvas))return;this._renderer.lastObjectRendered&&this._updateAccessibleObjects(this._renderer.lastObjectRendered);const{x:t,y:n,width:i,height:s}=this._renderer.view.canvas.getBoundingClientRect(),{width:o,height:a,resolution:l}=this._renderer,h=i/o*l,f=s/a*l;let p=this._div;p.style.left=`${t}px`,p.style.top=`${n}px`,p.style.width=`${o}px`,p.style.height=`${a}px`;for(let x=0;x<this._children.length;x++){const y=this._children[x];if(y._renderId!==this._renderId)y._accessibleActive=!1,Eh(this._children,x,1),this._div.removeChild(y._accessibleDiv),this._pool.push(y._accessibleDiv),y._accessibleDiv=null,x--;else{p=y._accessibleDiv;let b=y.hitArea;const T=y.worldTransform;y.hitArea?(p.style.left=`${(T.tx+b.x*T.a)*h}px`,p.style.top=`${(T.ty+b.y*T.d)*f}px`,p.style.width=`${b.width*T.a*h}px`,p.style.height=`${b.height*T.d*f}px`):(b=y.getBounds().rectangle,this._capHitArea(b),p.style.left=`${b.x*h}px`,p.style.top=`${b.y*f}px`,p.style.width=`${b.width*h}px`,p.style.height=`${b.height*f}px`,p.title!==y.accessibleTitle&&y.accessibleTitle!==null&&(p.title=y.accessibleTitle||""),p.getAttribute("aria-label")!==y.accessibleHint&&y.accessibleHint!==null&&p.setAttribute("aria-label",y.accessibleHint||"")),(y.accessibleTitle!==p.title||y.tabIndex!==p.tabIndex)&&(p.title=y.accessibleTitle||"",p.tabIndex=y.tabIndex,this.debug&&this._updateDebugHTML(p))}}this._renderId++}_updateDebugHTML(e){e.innerHTML=`type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`}_capHitArea(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);const{width:t,height:n}=this._renderer;e.x+e.width>t&&(e.width=t-e.x),e.y+e.height>n&&(e.height=n-e.y)}_addChild(e){let t=this._pool.pop();t||(t=document.createElement("button"),t.style.width=`${ji}px`,t.style.height=`${ji}px`,t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=nc.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title=`container ${e.tabIndex}`),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this._updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.container=e,this._children.push(e),this._div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex}_dispatchEvent(e,t){const{container:n}=e.target,i=this._renderer.events.rootBoundary,s=Object.assign(new Si(i),{target:n});i.rootTarget=this._renderer.lastObjectRendered,t.forEach(o=>i.dispatchEvent(s,o))}_onClick(e){this._dispatchEvent(e,["click","pointertap","tap"])}_onFocus(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive"),this._dispatchEvent(e,["mouseover"])}_onFocusOut(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite"),this._dispatchEvent(e,["mouseout"])}_onKeyDown(e){e.keyCode===Px&&this._activate()}_onMouseMove(e){e.movementX===0&&e.movementY===0||this._deactivate()}destroy(){this._destroyTouchHook(),this._div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this._pool=null,this._children=null,this._renderer=null}}Ix.extension={type:[R.WebGLSystem,R.WebGPUSystem],name:"accessibility"};const NC={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,_renderId:-1},Do=Object.create(null),sc=Object.create(null);function li(r,e){let t=sc[r];return t===void 0&&(Do[e]===void 0&&(Do[e]=1),sc[r]=t=Do[e]++),t}let un;function jh(){return(!un||un!=null&&un.isContextLost())&&(un=Ce.get().createCanvas().getContext("webgl",{})),un}let Xi;function Fx(){if(!Xi){Xi="mediump";const r=jh();r&&r.getShaderPrecisionFormat&&(Xi=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision?"highp":"mediump")}return Xi}function Ox(r,e,t){return e?r:t?(r=r.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${r}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${r}
        `}function Ux(r,e,t){const n=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(r.substring(0,9)!=="precision"){let i=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;return i==="highp"&&n!=="highp"&&(i="mediump"),`precision ${i} float;
${r}`}else if(n!=="highp"&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}function kx(r,e){return e?`#version 300 es
${r}`:r}const Dx={},Gx={};function zx(r,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";const n=t?Dx:Gx;return n[e]?(n[e]++,e+=`-${n[e]}`):n[e]=1,r.indexOf("#define SHADER_NAME")!==-1?r:`${`#define SHADER_NAME ${e}`}
${r}`}function Lx(r,e){return e?r.replace("#version 300 es",""):r}const Go={stripVersion:Lx,ensurePrecision:Ux,addProgramDefines:Ox,setProgramName:zx,insertVersion:kx},zo=Object.create(null),Xh=class Ta{constructor(e){e={...Ta.defaultOptions,...e};const t=e.fragment.indexOf("#version 300 es")!==-1,n={stripVersion:t,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Fx()},setProgramName:{name:e.name},addProgramDefines:t,insertVersion:t};let i=e.fragment,s=e.vertex;Object.keys(Go).forEach(o=>{const a=n[o];i=Go[o](i,a,!0),s=Go[o](s,a,!1)}),this.fragment=i,this.vertex=s,this._key=li(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const t=`${e.vertex}:${e.fragment}`;return zo[t]||(zo[t]=new Ta(e)),zo[t]}};Xh.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let ge=Xh;const oc={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function ci(r){return oc[r]??oc.float32}const Nx={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Hx({source:r,entryPoint:e}){const t={},n=r.indexOf(`fn ${e}`);if(n!==-1){const i=r.indexOf("->",n);if(i!==-1){const s=r.substring(n,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=Nx[a[3]]??"float32";t[a[2]]={location:parseInt(a[1],10),format:l,stride:ci(l).stride,offset:0,instance:!1,start:0}}}}return t}function Lo(r){var p,x;const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,n=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,h=(p=r.match(e))==null?void 0:p.map(y=>({group:parseInt(y.match(t)[1],10),binding:parseInt(y.match(n)[1],10),name:y.match(i)[2],isUniform:y.match(i)[1]==="<uniform>",type:y.match(s)[1]}));if(!h)return{groups:[],structs:[]};const f=((x=r.match(o))==null?void 0:x.map(y=>{const b=y.match(l)[1],T=y.match(a).reduce((C,P)=>{const[F,B]=P.split(":");return C[F.trim()]=B.trim(),C},{});return T?{name:b,members:T}:null}).filter(({name:y})=>h.some(b=>b.type===y)))??[];return{groups:h,structs:f}}var ti=(r=>(r[r.VERTEX=1]="VERTEX",r[r.FRAGMENT=2]="FRAGMENT",r[r.COMPUTE=4]="COMPUTE",r))(ti||{});function $x({groups:r}){const e=[];for(let t=0;t<r.length;t++){const n=r[t];e[n.group]||(e[n.group]=[]),n.isUniform?e[n.group].push({binding:n.binding,visibility:ti.VERTEX|ti.FRAGMENT,buffer:{type:"uniform"}}):n.type==="sampler"?e[n.group].push({binding:n.binding,visibility:ti.FRAGMENT,sampler:{type:"filtering"}}):n.type==="texture_2d"&&e[n.group].push({binding:n.binding,visibility:ti.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function Wx({groups:r}){const e=[];for(let t=0;t<r.length;t++){const n=r[t];e[n.group]||(e[n.group]={}),e[n.group][n.name]=n.binding}return e}function Vx(r,e){const t=new Set,n=new Set,i=[...r.structs,...e.structs].filter(o=>t.has(o.name)?!1:(t.add(o.name),!0)),s=[...r.groups,...e.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return n.has(a)?!1:(n.add(a),!0)});return{structs:i,groups:s}}const No=Object.create(null);class me{constructor(e){var a,l;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:t,vertex:n,layout:i,gpuLayout:s,name:o}=e;if(this.name=o,this.fragment=t,this.vertex=n,t.source===n.source){const h=Lo(t.source);this.structsAndGroups=h}else{const h=Lo(n.source),f=Lo(t.source);this.structsAndGroups=Vx(h,f)}this.layout=i??Wx(this.structsAndGroups),this.gpuLayout=s??$x(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:t}=this,n=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=li(n,"program")}get attributeData(){return this._attributeData??(this._attributeData=Hx(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return No[t]||(No[t]=new me(e)),No[t]}}const Yh=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],jx=Yh.reduce((r,e)=>(r[e]=!0,r),{});function Xx(r,e){switch(r){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const qh=class Kh{constructor(e,t){this._touched=0,this.uid=Ve("uniform"),this._resourceType="uniformGroup",this._resourceId=Ve("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,t={...Kh.defaultOptions,...t},this.uniformStructures=e;const n={};for(const i in e){const s=e[i];if(s.name=i,s.size=s.size??1,!jx[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${Yh.join(", ")}`);s.value??(s.value=Xx(s.type,s.size)),n[i]=s.value}this.uniforms=n,this._dirtyId=1,this.ubo=t.ubo,this.isStatic=t.isStatic,this._signature=li(Object.keys(n).map(i=>`${i}-${e[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};qh.defaultOptions={ubo:!1,isStatic:!1};let ht=qh;class lr{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(const n in e){const i=e[n];this.setResource(i,t++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let t=0;for(const n in this.resources)e[t++]=this.resources[n]._resourceId;this._key=e.join("|")}setResource(e,t){var i,s;const n=this.resources[t];e!==n&&(n&&((i=e.off)==null||i.call(e,"change",this.onResourceChange,this)),(s=e.on)==null||s.call(e,"change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){const t=this.resources;for(const n in t)t[n]._touched=e}destroy(){var t;const e=this.resources;for(const n in e){const i=e[n];(t=i.off)==null||t.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const t=this.resources;for(const n in t)t[n]===e&&(t[n]=null)}else this._updateKey()}}var St=(r=>(r[r.WEBGL=1]="WEBGL",r[r.WEBGPU=2]="WEBGPU",r[r.BOTH=3]="BOTH",r))(St||{});class Gt extends it{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:n,groups:i,resources:s,compatibleRenderers:o,groupMap:a}=e;this.gpuProgram=t,this.glProgram=n,o===void 0&&(o=0,t&&(o|=St.WEBGPU),n&&(o|=St.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!t&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!t&&i&&a)for(const h in a)for(const f in a[h]){const p=a[h][f];l[p]={group:h,binding:f,name:p}}else if(t&&i&&!a){const h=t.structsAndGroups.groups;a={},h.forEach(f=>{a[f.group]=a[f.group]||{},a[f.group][f.binding]=f.name,l[f.name]=f})}else if(s){i={},a={},t&&t.structsAndGroups.groups.forEach(p=>{a[p.group]=a[p.group]||{},a[p.group][p.binding]=p.name,l[p.name]=p});let h=0;for(const f in s)l[f]||(i[99]||(i[99]=new lr,this._ownedBindGroups.push(i[99])),l[f]={group:99,binding:h,name:f},a[99]=a[99]||{},a[99][h]=f,h++);for(const f in s){const p=f;let x=s[f];!x.source&&!x._resourceType&&(x=new ht(x));const y=l[p];y&&(i[y.group]||(i[y.group]=new lr,this._ownedBindGroups.push(i[y.group])),i[y.group].setResource(x,y.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(e,t,n){var i,s;(i=this._uniformBindMap)[t]||(i[t]={}),(s=this._uniformBindMap[t])[n]||(s[n]=e),this.groups[t]||(this.groups[t]=new lr,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){const n={};for(const i in t){const s=t[i];Object.defineProperty(n,s.name,{get(){return e[s.group].getResource(s.binding)},set(o){e[s.group].setResource(o,s.binding)}})}return n}destroy(e=!1){var t,n;this.emit("destroy",this),e&&((t=this.gpuProgram)==null||t.destroy(),(n=this.glProgram)==null||n.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:t,gl:n,...i}=e;let s,o;return t&&(s=me.from(t)),n&&(o=ge.from(n)),new Gt({gpuProgram:s,glProgram:o,...i})}}const Yx={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},Ho=0,$o=1,Wo=2,Vo=3,jo=4,Xo=5,Ca=class Zh{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Ho)}set blend(e){!!(this.data&1<<Ho)!==e&&(this.data^=1<<Ho)}get offsets(){return!!(this.data&1<<$o)}set offsets(e){!!(this.data&1<<$o)!==e&&(this.data^=1<<$o)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Wo)}set culling(e){!!(this.data&1<<Wo)!==e&&(this.data^=1<<Wo)}get depthTest(){return!!(this.data&1<<Vo)}set depthTest(e){!!(this.data&1<<Vo)!==e&&(this.data^=1<<Vo)}get depthMask(){return!!(this.data&1<<Xo)}set depthMask(e){!!(this.data&1<<Xo)!==e&&(this.data^=1<<Xo)}get clockwiseFrontFace(){return!!(this.data&1<<jo)}set clockwiseFrontFace(e){!!(this.data&1<<jo)!==e&&(this.data^=1<<jo)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Yx[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new Zh;return e.depthTest=!1,e.blend=!0,e}};Ca.default2d=Ca.for2d();let Zt=Ca;const Qh=class wa extends Gt{constructor(e){e={...wa.defaultOptions,...e},super(e),this.enabled=!0,this._state=Zt.for2d(),this.blendMode=e.blendMode,this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.addResource("uTexture",0,1)}apply(e,t,n,i){e.applyFilter(this,t,n,i)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:t,gl:n,...i}=e;let s,o;return t&&(s=me.from(t)),n&&(o=ge.from(n)),new wa({gpuProgram:s,glProgram:o,...i})}};Qh.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let Te=Qh;const Pa=[];ke.handleByNamedList(R.Environment,Pa);async function qx(r){if(!r)for(let e=0;e<Pa.length;e++){const t=Pa[e];if(t.value.test()){await t.value.load();return}}}let jn;function Jh(){if(typeof jn=="boolean")return jn;try{jn=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{jn=!1}return jn}var uu={exports:{}};uu.exports=Ws;uu.exports.default=Ws;function Ws(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=ef(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,h,f,p,x,y;if(n&&(s=e_(r,e,s,t)),r.length>80*t){a=h=r[0],l=f=r[1];for(var b=t;b<i;b+=t)p=r[b],x=r[b+1],p<a&&(a=p),x<l&&(l=x),p>h&&(h=p),x>f&&(f=x);y=Math.max(h-a,f-l),y=y!==0?32767/y:0}return hi(s,o,t,a,l,y,0),o}function ef(r,e,t,n,i){var s,o;if(i===Ma(r,e,t,n)>0)for(s=e;s<t;s+=n)o=ac(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=ac(s,r[s],r[s+1],o);return o&&Vs(o,o.next)&&(di(o),o=o.next),o}function jr(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Vs(t,t.next)||We(t.prev,t,t.next)===0)){if(di(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function hi(r,e,t,n,i,s,o){if(r){!o&&s&&s_(r,n,i,s);for(var a=r,l,h;r.prev!==r.next;){if(l=r.prev,h=r.next,s?Zx(r,n,i,s):Kx(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),di(r),r=h.next,a=h.next;continue}if(r=h,r===a){o?o===1?(r=Qx(jr(r),e,t),hi(r,e,t,n,i,s,2)):o===2&&Jx(r,e,t,n,i,s):hi(jr(r),e,t,n,i,s,1);break}}}}function Kx(r){var e=r.prev,t=r,n=r.next;if(We(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,h=n.y,f=i<s?i<o?i:o:s<o?s:o,p=a<l?a<h?a:h:l<h?l:h,x=i>s?i>o?i:o:s>o?s:o,y=a>l?a>h?a:h:l>h?l:h,b=n.next;b!==e;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=y&&vn(i,a,s,l,o,h,b.x,b.y)&&We(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function Zx(r,e,t,n){var i=r.prev,s=r,o=r.next;if(We(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,h=o.x,f=i.y,p=s.y,x=o.y,y=a<l?a<h?a:h:l<h?l:h,b=f<p?f<x?f:x:p<x?p:x,T=a>l?a>h?a:h:l>h?l:h,C=f>p?f>x?f:x:p>x?p:x,P=Aa(y,b,e,t,n),F=Aa(T,C,e,t,n),B=r.prevZ,O=r.nextZ;B&&B.z>=P&&O&&O.z<=F;){if(B.x>=y&&B.x<=T&&B.y>=b&&B.y<=C&&B!==i&&B!==o&&vn(a,f,l,p,h,x,B.x,B.y)&&We(B.prev,B,B.next)>=0||(B=B.prevZ,O.x>=y&&O.x<=T&&O.y>=b&&O.y<=C&&O!==i&&O!==o&&vn(a,f,l,p,h,x,O.x,O.y)&&We(O.prev,O,O.next)>=0))return!1;O=O.nextZ}for(;B&&B.z>=P;){if(B.x>=y&&B.x<=T&&B.y>=b&&B.y<=C&&B!==i&&B!==o&&vn(a,f,l,p,h,x,B.x,B.y)&&We(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;O&&O.z<=F;){if(O.x>=y&&O.x<=T&&O.y>=b&&O.y<=C&&O!==i&&O!==o&&vn(a,f,l,p,h,x,O.x,O.y)&&We(O.prev,O,O.next)>=0)return!1;O=O.nextZ}return!0}function Qx(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Vs(i,s)&&tf(i,n,n.next,s)&&fi(i,s)&&fi(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),di(n),di(n.next),n=r=s),n=n.next}while(n!==r);return jr(n)}function Jx(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&u_(o,a)){var l=rf(o,a);o=jr(o,o.next),l=jr(l,l.next),hi(o,e,t,n,i,s,0),hi(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function e_(r,e,t,n){var i=[],s,o,a,l,h;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,h=ef(r,a,l,n,!1),h===h.next&&(h.steiner=!0),i.push(a_(h));for(i.sort(t_),s=0;s<i.length;s++)t=r_(i[s],t);return t}function t_(r,e){return r.x-e.x}function r_(r,e){var t=n_(r,e);if(!t)return e;var n=rf(t,r);return jr(n,n.next),jr(t,t.next)}function n_(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var l=o,h=o.x,f=o.y,p=1/0,x;t=o;do n>=t.x&&t.x>=h&&n!==t.x&&vn(i<f?n:s,i,h,f,i<f?s:n,i,t.x,t.y)&&(x=Math.abs(i-t.y)/(n-t.x),fi(t,r)&&(x<p||x===p&&(t.x>o.x||t.x===o.x&&i_(o,t)))&&(o=t,p=x)),t=t.next;while(t!==l);return o}function i_(r,e){return We(r.prev,r,e.prev)<0&&We(e.next,r,r.next)<0}function s_(r,e,t,n){var i=r;do i.z===0&&(i.z=Aa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,o_(i)}function o_(r){var e,t,n,i,s,o,a,l,h=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<h&&(a++,n=n.nextZ,!!n);e++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(o>1);return r}function Aa(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function a_(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function vn(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function u_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!l_(r,e)&&(fi(r,e)&&fi(e,r)&&c_(r,e)&&(We(r.prev,r,e.prev)||We(r,e.prev,e))||Vs(r,e)&&We(r.prev,r,r.next)>0&&We(e.prev,e,e.next)>0)}function We(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Vs(r,e){return r.x===e.x&&r.y===e.y}function tf(r,e,t,n){var i=qi(We(r,e,t)),s=qi(We(r,e,n)),o=qi(We(t,n,r)),a=qi(We(t,n,e));return!!(i!==s&&o!==a||i===0&&Yi(r,t,e)||s===0&&Yi(r,n,e)||o===0&&Yi(t,r,n)||a===0&&Yi(t,e,n))}function Yi(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function qi(r){return r>0?1:r<0?-1:0}function l_(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&tf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function fi(r,e){return We(r.prev,r,r.next)<0?We(r,e,r.next)>=0&&We(r,r.prev,e)>=0:We(r,e,r.prev)<0||We(r,r.next,e)<0}function c_(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function rf(r,e){var t=new Ea(r.i,r.x,r.y),n=new Ea(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ac(r,e,t,n){var i=new Ea(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function di(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ea(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ws.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(Ma(r,0,s,t));if(i)for(var a=0,l=e.length;a<l;a++){var h=e[a]*t,f=a<l-1?e[a+1]*t:r.length;o-=Math.abs(Ma(r,h,f,t))}var p=0;for(a=0;a<n.length;a+=3){var x=n[a]*t,y=n[a+1]*t,b=n[a+2]*t;p+=Math.abs((r[x]-r[b])*(r[y+1]-r[x+1])-(r[x]-r[y])*(r[b+1]-r[x+1]))}return o===0&&p===0?0:Math.abs((p-o)/o)};function Ma(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Ws.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};var h_=uu.exports;const f_=Hs(h_);var bt=(r=>(r[r.NONE=0]="NONE",r[r.COLOR=16384]="COLOR",r[r.STENCIL=1024]="STENCIL",r[r.DEPTH=256]="DEPTH",r[r.COLOR_DEPTH=16640]="COLOR_DEPTH",r[r.COLOR_STENCIL=17408]="COLOR_STENCIL",r[r.DEPTH_STENCIL=1280]="DEPTH_STENCIL",r[r.ALL=17664]="ALL",r))(bt||{});class nf{constructor(e){this.items=[],this._name=e}emit(e,t,n,i,s,o,a,l){const{name:h,items:f}=this;for(let p=0,x=f.length;p<x;p++)f[p][h](e,t,n,i,s,o,a,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const d_=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],sf=class of extends it{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const t=[...d_,...this.config.runners??[]];this._addRunners(...t),this._unsafeEvalCheck()}async init(e={}){const t=e.skipExtensionImports===!0?!0:e.manageImports===!1;await qx(t),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const n in this._systemsHash)e={...this._systemsHash[n].constructor.defaultOptions,...e};e={...of.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)await this.runners.init.items[n].init(e);this._initOptions=e}render(e,t){let n=e;if(n instanceof Ze&&(n={container:n},t&&(Z(ye,"passing a second argument is deprecated, please use render options instead"),n.target=t.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor=this.background.colorRgba),n.clearColor){const i=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=i?n.clearColor:de.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(e,t,n){const i=this.view.resolution;this.view.resize(e,t,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==i&&this.runners.resolutionChange.emit(n)}clear(e={}){const t=this;e.target||(e.target=t.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=bt.ALL);const{clear:n,clearColor:i,target:s}=e;de.shared.setValue(i??this.background.colorRgba),t.renderTarget.clear(s,n,de.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(t=>{this.runners[t]=new nf(t)})}_addSystems(e){let t;for(t in e){const n=e[t];this._addSystem(n.value,n.name)}}_addSystem(e,t){const n=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=n,this._systemsHash[t]=n;for(const i in this.runners)this.runners[i].add(n);return this}_addPipes(e,t){const n=t.reduce((i,s)=>(i[s.name]=s.value,i),{});e.forEach(i=>{const s=i.value,o=i.name,a=n[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(t=>{t.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Jh())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};sf.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let js=sf,Ki;function p_(r){return Ki!==void 0||(Ki=(()=>{var t;const e={stencil:!0,failIfMajorPerformanceCaveat:r??js.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Ce.get().getWebGLRenderingContext())return!1;let i=Ce.get().createCanvas().getContext("webgl",e);const s=!!((t=i==null?void 0:i.getContextAttributes())!=null&&t.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),Ki}let Zi;async function m_(r={}){return Zi!==void 0||(Zi=await(async()=>{const e=Ce.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(r)).requestDevice(),!0}catch{return!1}})()),Zi}const uc=["webgl","webgpu","canvas"];async function g_(r){let e=[];r.preference?(e.push(r.preference),uc.forEach(s=>{s!==r.preference&&e.push(s)})):e=uc.slice();let t,n={};for(let s=0;s<e.length;s++){const o=e[s];if(o==="webgpu"&&await m_()){const{WebGPURenderer:a}=await Ts(async()=>{const{WebGPURenderer:l}=await Promise.resolve().then(()=>p2);return{WebGPURenderer:l}},void 0);t=a,n={...r,...r.webgpu};break}else if(o==="webgl"&&p_(r.failIfMajorPerformanceCaveat??js.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Ts(async()=>{const{WebGLRenderer:l}=await Promise.resolve().then(()=>qb);return{WebGLRenderer:l}},void 0);t=a,n={...r,...r.webgl};break}else if(o==="canvas")throw n={...r},new Error("CanvasRenderer is not yet implemented")}if(delete n.webgpu,delete n.webgl,!t)throw new Error("No available renderer for the current environment");const i=new t;return await i.init(n),i}const Ms="8.4.1";class af{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Ms)}static destroy(){}}af.extension=R.Application;class uf{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Ms)}destroy(){this._renderer=null}}uf.extension={type:[R.WebGLSystem,R.WebGPUSystem],name:"initHook",priority:-10};const lf=class Ba{constructor(...e){this.stage=new Ze,e[0]!==void 0&&Z(ye,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await g_(e),Ba._plugins.forEach(t=>{t.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Z(ye,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,t=!1){const n=Ba._plugins.slice(0);n.reverse(),n.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null}};lf._plugins=[];let x_=lf;ke.handleByList(R.Application,x_._plugins);ke.add(af);class __{static init(e){Object.defineProperty(this,"resizeTo",{set(t){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=t,t&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let t,n;if(this._resizeTo===globalThis.window)t=globalThis.innerWidth,n=globalThis.innerHeight;else{const{clientWidth:i,clientHeight:s}=this._resizeTo;t=i,n=s}this.renderer.resize(t,n),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}__.extension=R.Application;class v_{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set(t){this._ticker&&this._ticker.remove(this.render,this),this._ticker=t,t&&t.add(this.render,this,wr.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?Xe.shared:new Xe,e.autoStart&&this.start()}static destroy(){if(this._ticker){const e=this._ticker;this.ticker=null,e.destroy()}}}v_.extension=R.Application;class cf extends it{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return Z(ye,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return Z(ye,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return Z(ye,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return Z(ye,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return Z(ye,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(e=!1){var t;this.emit("destroy",this),this.removeAllListeners();for(const n in this.chars)(t=this.chars[n].texture)==null||t.destroy();this.chars=null,e&&(this.pages.forEach(n=>n.texture.destroy(!0)),this.pages=null)}}const hf=class Ra{constructor(e,t,n,i){this.uid=Ve("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=e,this.y0=t,this.x1=n,this.y1=i}addColorStop(e,t){return this.gradientStops.push({offset:e,color:de.shared.setValue(t).toHexa()}),this._styleKey=null,this}buildLinearGradient(){const e=Ra.defaultTextureSize,{gradientStops:t}=this,n=Ce.get().createCanvas();n.width=e,n.height=e;const i=n.getContext("2d"),s=i.createLinearGradient(0,0,Ra.defaultTextureSize,1);for(let T=0;T<t.length;T++){const C=t[T];s.addColorStop(C.offset,C.color)}i.fillStyle=s,i.fillRect(0,0,e,e),this.texture=new Q({source:new Xr({resource:n,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:h}=this,f=new ue,p=l-o,x=h-a,y=Math.sqrt(p*p+x*x),b=Math.atan2(x,p);f.translate(-o,-a),f.scale(1/e,1/e),f.rotate(-b),f.scale(256/y,1),this.transform=f,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const e=this.gradientStops.map(i=>`${i.offset}-${i.color}`).join("-"),t=this.texture.uid,n=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${e}-${t}-${n}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};hf.defaultTextureSize=256;let pi=hf;const lc={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class Xs{constructor(e,t){this.uid=Ve("fillPattern"),this.transform=new ue,this._styleKey=null,this.texture=e,this.transform.scale(1/e.frame.width,1/e.frame.height),t&&(e.source.style.addressModeU=lc[t].addressModeU,e.source.style.addressModeV=lc[t].addressModeV)}setTransform(e){const t=this.texture;this.transform.copyFrom(e),this.transform.invert(),this.transform.scale(1/t.frame.width,1/t.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var y_=S_,Yo={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},b_=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function S_(r){var e=[];return r.replace(b_,function(t,n,i){var s=n.toLowerCase();for(i=C_(i),s=="m"&&i.length>2&&(e.push([n].concat(i.splice(0,2))),s="l",n=n=="m"?"l":"L");;){if(i.length==Yo[s])return i.unshift(n),e.push(i);if(i.length<Yo[s])throw new Error("malformed path data");e.push([n].concat(i.splice(0,Yo[s])))}}),e}var T_=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function C_(r){var e=r.match(T_);return e?e.map(Number):[]}const w_=Hs(y_);function P_(r,e){const t=w_(r),n=[];let i=null,s=0,o=0;for(let a=0;a<t.length;a++){const l=t[a],h=l[0],f=l;switch(h){case"M":s=f[1],o=f[2],e.moveTo(s,o);break;case"m":s+=f[1],o+=f[2],e.moveTo(s,o);break;case"H":s=f[1],e.lineTo(s,o);break;case"h":s+=f[1],e.lineTo(s,o);break;case"V":o=f[1],e.lineTo(s,o);break;case"v":o+=f[1],e.lineTo(s,o);break;case"L":s=f[1],o=f[2],e.lineTo(s,o);break;case"l":s+=f[1],o+=f[2],e.lineTo(s,o);break;case"C":s=f[5],o=f[6],e.bezierCurveTo(f[1],f[2],f[3],f[4],s,o);break;case"c":e.bezierCurveTo(s+f[1],o+f[2],s+f[3],o+f[4],s+f[5],o+f[6]),s+=f[5],o+=f[6];break;case"S":s=f[3],o=f[4],e.bezierCurveToShort(f[1],f[2],s,o);break;case"s":e.bezierCurveToShort(s+f[1],o+f[2],s+f[3],o+f[4]),s+=f[3],o+=f[4];break;case"Q":s=f[3],o=f[4],e.quadraticCurveTo(f[1],f[2],s,o);break;case"q":e.quadraticCurveTo(s+f[1],o+f[2],s+f[3],o+f[4]),s+=f[3],o+=f[4];break;case"T":s=f[1],o=f[2],e.quadraticCurveToShort(s,o);break;case"t":s+=f[1],o+=f[2],e.quadraticCurveToShort(s,o);break;case"A":s=f[6],o=f[7],e.arcToSvg(f[1],f[2],f[3],f[4],f[5],s,o);break;case"a":s+=f[6],o+=f[7],e.arcToSvg(f[1],f[2],f[3],f[4],f[5],s,o);break;case"Z":case"z":e.closePath(),n.length>0&&(i=n.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:fe(`Unknown SVG path command: ${h}`)}h!=="Z"&&h!=="z"&&i===null&&(i={startX:s,startY:o},n.push(i))}return e}class lu{constructor(e=0,t=0,n=0){this.type="circle",this.x=e,this.y=t,this.radius=n}clone(){return new lu(this.x,this.y,this.radius)}contains(e,t){if(this.radius<=0)return!1;const n=this.radius*this.radius;let i=this.x-e,s=this.y-t;return i*=i,s*=s,i+s<=n}strokeContains(e,t,n){if(this.radius===0)return!1;const i=this.x-e,s=this.y-t,o=this.radius,a=n/2,l=Math.sqrt(i*i+s*s);return l<o+a&&l>o-a}getBounds(e){return e=e||new Le,e.x=this.x-this.radius,e.y=this.y-this.radius,e.width=this.radius*2,e.height=this.radius*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class cu{constructor(e=0,t=0,n=0,i=0){this.type="ellipse",this.x=e,this.y=t,this.halfWidth=n,this.halfHeight=i}clone(){return new cu(this.x,this.y,this.halfWidth,this.halfHeight)}contains(e,t){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let n=(e-this.x)/this.halfWidth,i=(t-this.y)/this.halfHeight;return n*=n,i*=i,n+i<=1}strokeContains(e,t,n){const{halfWidth:i,halfHeight:s}=this;if(i<=0||s<=0)return!1;const o=n/2,a=i-o,l=s-o,h=i+o,f=s+o,p=e-this.x,x=t-this.y,y=p*p/(a*a)+x*x/(l*l),b=p*p/(h*h)+x*x/(f*f);return y>1&&b<=1}getBounds(e){return e=e||new Le,e.x=this.x-this.halfWidth,e.y=this.y-this.halfHeight,e.width=this.halfWidth*2,e.height=this.halfHeight*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.halfWidth=e.halfWidth,this.halfHeight=e.halfHeight,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function A_(r,e,t,n,i,s){const o=r-t,a=e-n,l=i-t,h=s-n,f=o*l+a*h,p=l*l+h*h;let x=-1;p!==0&&(x=f/p);let y,b;x<0?(y=t,b=n):x>1?(y=i,b=s):(y=t+x*l,b=n+x*h);const T=r-y,C=e-b;return T*T+C*C}class ii{constructor(...e){this.type="polygon";let t=Array.isArray(e[0])?e[0]:e;if(typeof t[0]!="number"){const n=[];for(let i=0,s=t.length;i<s;i++)n.push(t[i].x,t[i].y);t=n}this.points=t,this.closePath=!0}clone(){const e=this.points.slice(),t=new ii(e);return t.closePath=this.closePath,t}contains(e,t){let n=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const a=this.points[s*2],l=this.points[s*2+1],h=this.points[o*2],f=this.points[o*2+1];l>t!=f>t&&e<(h-a)*((t-l)/(f-l))+a&&(n=!n)}return n}strokeContains(e,t,n){const i=n/2,s=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const h=o[l],f=o[l+1],p=o[(l+2)%o.length],x=o[(l+3)%o.length];if(A_(e,t,h,f,p,x)<=s)return!0}return!1}getBounds(e){e=e||new Le;const t=this.points;let n=1/0,i=-1/0,s=1/0,o=-1/0;for(let a=0,l=t.length;a<l;a+=2){const h=t[a],f=t[a+1];n=h<n?h:n,i=h>i?h:i,s=f<s?f:s,o=f>o?f:o}return e.x=n,e.width=i-n,e.y=s,e.height=o-s,e}copyFrom(e){return this.points=e.points.slice(),this.closePath=e.closePath,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e,t)=>`${e}, ${t}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const Qi=(r,e,t,n,i,s)=>{const o=r-t,a=e-n,l=Math.sqrt(o*o+a*a);return l>=i-s&&l<=i+s};class hu{constructor(e=0,t=0,n=0,i=0,s=20){this.type="roundedRectangle",this.x=e,this.y=t,this.width=n,this.height=i,this.radius=s}getBounds(e){return e=e||new Le,e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}clone(){return new hu(this.x,this.y,this.width,this.height,this.radius)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){const n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+n&&t<=this.y+this.height-n||e>=this.x+n&&e<=this.x+this.width-n)return!0;let i=e-(this.x+n),s=t-(this.y+n);const o=n*n;if(i*i+s*s<=o||(i=e-(this.x+this.width-n),i*i+s*s<=o)||(s=t-(this.y+this.height-n),i*i+s*s<=o)||(i=e-(this.x+n),i*i+s*s<=o))return!0}return!1}strokeContains(e,t,n){const{x:i,y:s,width:o,height:a,radius:l}=this,h=n/2,f=i+l,p=s+l,x=o-l*2,y=a-l*2,b=i+o,T=s+a;return(e>=i-h&&e<=i+h||e>=b-h&&e<=b+h)&&t>=p&&t<=p+y||(t>=s-h&&t<=s+h||t>=T-h&&t<=T+h)&&e>=f&&e<=f+x?!0:e<f&&t<p&&Qi(e,t,f,p,l,h)||e>b-l&&t<p&&Qi(e,t,b-l,p,l,h)||e>b-l&&t>T-l&&Qi(e,t,b-l,T-l,l,h)||e<f&&t>T-l&&Qi(e,t,f,T-l,l,h)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const E_=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function M_(r){let e="";for(let t=0;t<r;++t)t>0&&(e+=`
else `),t<r-1&&(e+=`if(test == ${t}.0){}`);return e}function B_(r,e){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const t=e.createShader(e.FRAGMENT_SHADER);try{for(;;){const n=E_.replace(/%forloop%/gi,M_(r));if(e.shaderSource(t,n),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))r=r/2|0;else break}}finally{e.deleteShader(t)}return r}let ln=null;function Bn(){var e;if(ln)return ln;const r=jh();return ln=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),ln=B_(ln,r),(e=r.getExtension("WEBGL_lose_context"))==null||e.loseContext(),ln}const ff={};function fu(r,e){let t=2166136261;for(let n=0;n<e;n++)t^=r[n].uid,t=Math.imul(t,16777619),t>>>=0;return ff[t]||R_(r,e,t)}let qo=0;function R_(r,e,t){const n={};let i=0;qo||(qo=Bn());for(let o=0;o<qo;o++){const a=o<e?r[o]:Q.EMPTY.source;n[i++]=a.source,n[i++]=a.style}const s=new lr(n);return ff[t]=s,s}class cc{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function Ia(r,e){const t=r.byteLength/8|0,n=new Float64Array(r,0,t);new Float64Array(e,0,t).set(n);const s=r.byteLength-t*8;if(s>0){const o=new Uint8Array(r,t*8,s);new Uint8Array(e,t*8,s).set(o)}}const I_={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var rt=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",r[r.NONE=4]="NONE",r))(rt||{});function Bs(r,e){return e.alphaMode==="no-premultiply-alpha"&&I_[r]||r}class F_{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}class O_{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new F_,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const df=[];let Fa=0;function hc(){return Fa>0?df[--Fa]:new O_}function fc(r){df[Fa++]=r}let Xn=0;const pf=class cs{constructor(e={}){this.uid=Ve("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],cs.defaultOptions.maxTextures=cs.defaultOptions.maxTextures??Bn(),e={...cs.defaultOptions,...e};const{maxTextures:t,attributesInitialSize:n,indicesInitialSize:i}=e;this.attributeBuffer=new cc(n*4),this.indexBuffer=new Uint16Array(i),this.maxTextures=t}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)fc(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,t){const n=e._batch.textures.ids[t._source.uid];return!n&&n!==0?!1:(e._textureId=n,e.texture=t,!0)}updateElement(e){this.dirty=!0;const t=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}break(e){const t=this._elements;if(!t[this.elementStart])return;let n=hc(),i=n.textures;i.clear();const s=t[this.elementStart];let o=Bs(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const a=this.attributeBuffer.float32View,l=this.attributeBuffer.uint32View,h=this.indexBuffer;let f=this._batchIndexSize,p=this._batchIndexStart,x="startBatch";const y=this.maxTextures;for(let b=this.elementStart;b<this.elementSize;++b){const T=t[b];t[b]=null;const P=T.texture._source,F=Bs(T.blendMode,P),B=o!==F;if(P._batchTick===Xn&&!B){T._textureId=P._textureBindLocation,f+=T.indexSize,T.packAsQuad?(this.packQuadAttributes(T,a,l,T._attributeStart,T._textureId),this.packQuadIndex(h,T._indexStart,T._attributeStart/this.vertexSize)):(this.packAttributes(T,a,l,T._attributeStart,T._textureId),this.packIndex(T,h,T._indexStart,T._attributeStart/this.vertexSize)),T._batch=n;continue}P._batchTick=Xn,(i.count>=y||B)&&(this._finishBatch(n,p,f-p,i,o,e,x),x="renderBatch",p=f,o=F,n=hc(),i=n.textures,i.clear(),++Xn),T._textureId=P._textureBindLocation=i.count,i.ids[P.uid]=i.count,i.textures[i.count++]=P,T._batch=n,f+=T.indexSize,T.packAsQuad?(this.packQuadAttributes(T,a,l,T._attributeStart,T._textureId),this.packQuadIndex(h,T._indexStart,T._attributeStart/this.vertexSize)):(this.packAttributes(T,a,l,T._attributeStart,T._textureId),this.packIndex(T,h,T._indexStart,T._attributeStart/this.vertexSize))}i.count>0&&(this._finishBatch(n,p,f-p,i,o,e,x),p=f,++Xn),this.elementStart=this.elementSize,this._batchIndexStart=p,this._batchIndexSize=f}_finishBatch(e,t,n,i,s,o,a){e.gpuBindGroup=null,e.bindGroup=null,e.action=a,e.batcher=this,e.textures=i,e.blendMode=s,e.start=t,e.size=n,++Xn,this.batches[this.batchIndex++]=e,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),n=new cc(t);Ia(this.attributeBuffer.rawBinaryData,n.rawBinaryData),this.attributeBuffer=n}_resizeIndexBuffer(e){const t=this.indexBuffer;let n=Math.max(e,t.length*1.5);n+=n%2;const i=n>65535?new Uint32Array(n):new Uint16Array(n);if(i.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let s=0;s<t.length;s++)i[s]=t[s];else Ia(t.buffer,i.buffer);this.indexBuffer=i}packQuadIndex(e,t,n){e[t]=n+0,e[t+1]=n+1,e[t+2]=n+2,e[t+3]=n+0,e[t+4]=n+2,e[t+5]=n+3}packIndex(e,t,n,i){const s=e.indices,o=e.indexSize,a=e.indexOffset,l=e.attributeOffset;for(let h=0;h<o;h++)t[n++]=i+s[h+a]-l}destroy(){for(let e=0;e<this.batches.length;e++)fc(this.batches[e]);this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};pf.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let U_=pf;var Fe=(r=>(r[r.MAP_READ=1]="MAP_READ",r[r.MAP_WRITE=2]="MAP_WRITE",r[r.COPY_SRC=4]="COPY_SRC",r[r.COPY_DST=8]="COPY_DST",r[r.INDEX=16]="INDEX",r[r.VERTEX=32]="VERTEX",r[r.UNIFORM=64]="UNIFORM",r[r.STORAGE=128]="STORAGE",r[r.INDIRECT=256]="INDIRECT",r[r.QUERY_RESOLVE=512]="QUERY_RESOLVE",r[r.STATIC=1024]="STATIC",r))(Fe||{});let Dt=class extends it{constructor(e){let{data:t,size:n}=e;const{usage:i,label:s,shrinkToFit:o}=e;super(),this.uid=Ve("buffer"),this._resourceType="buffer",this._resourceId=Ve("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,t instanceof Array&&(t=new Float32Array(t)),this._data=t,n=n??(t==null?void 0:t.byteLength);const a=!!t;this.descriptor={size:n,usage:i,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(e){this.setDataWithSize(e,e.length,!0)}get static(){return!!(this.descriptor.usage&Fe.STATIC)}set static(e){e?this.descriptor.usage|=Fe.STATIC:this.descriptor.usage&=~Fe.STATIC}setDataWithSize(e,t,n){if(this._updateID++,this._updateSize=t*e.BYTES_PER_ELEMENT,this._data===e){n&&this.emit("update",this);return}const i=this._data;if(this._data=e,i.length!==e.length){!this.shrinkToFit&&e.byteLength<i.byteLength?n&&this.emit("update",this):(this.descriptor.size=e.byteLength,this._resourceId=Ve("resource"),this.emit("change",this));return}n&&this.emit("update",this)}update(e){this._updateSize=e??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}};function mf(r,e){if(!(r instanceof Dt)){let t=e?Fe.INDEX:Fe.VERTEX;r instanceof Array&&(e?(r=new Uint32Array(r),t=Fe.INDEX|Fe.COPY_DST):(r=new Float32Array(r),t=Fe.VERTEX|Fe.COPY_DST)),r=new Dt({data:r,label:e?"index-mesh-buffer":"vertex-mesh-buffer",usage:t})}return r}function k_(r,e,t){const n=r.getAttribute(e);if(!n)return t.minX=0,t.minY=0,t.maxX=0,t.maxY=0,t;const i=n.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const h=i.BYTES_PER_ELEMENT,f=(n.offset||0)/h,p=(n.stride||2*4)/h;for(let x=f;x<i.length;x+=p){const y=i[x],b=i[x+1];y>a&&(a=y),b>l&&(l=b),y<s&&(s=y),b<o&&(o=b)}return t.minX=s,t.minY=o,t.maxX=a,t.maxY=l,t}function D_(r){return(r instanceof Dt||Array.isArray(r)||r.BYTES_PER_ELEMENT)&&(r={buffer:r}),r.buffer=mf(r.buffer,!1),r}class Ti extends it{constructor(e){const{attributes:t,indexBuffer:n,topology:i}=e;super(),this.uid=Ve("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new xt,this._boundsDirty=!0,this.attributes=t,this.buffers=[],this.instanceCount=e.instanceCount||1;for(const s in t){const o=t[s]=D_(t[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}n&&(this.indexBuffer=mf(n,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(const e in this.attributes){const t=this.attributes[e];return t.buffer.data.length/(t.stride/4||t.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,k_(this,"aPosition",this._bounds)):this._bounds}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(t=>t.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const G_=new Float32Array(1),z_=new Uint32Array(1);class L_ extends Ti{constructor(){const t=new Dt({data:G_,label:"attribute-batch-buffer",usage:Fe.VERTEX|Fe.COPY_DST,shrinkToFit:!1}),n=new Dt({data:z_,label:"index-batch-buffer",usage:Fe.INDEX|Fe.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:i,offset:0},aUV:{buffer:t,format:"float32x2",stride:i,offset:2*4},aColor:{buffer:t,format:"unorm8x4",stride:i,offset:4*4},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:i,offset:5*4}},indexBuffer:n})}}function dc(r,e,t){if(r)for(const n in r){const i=n.toLocaleLowerCase(),s=e[i];if(s){let o=r[n];n==="header"&&(o=o.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),t&&s.push(`//----${t}----//`),s.push(o)}else fe(`${n} placement hook does not exist in shader`)}}const N_=/\{\{(.*?)\}\}/g;function pc(r){var n;const e={};return(((n=r.match(N_))==null?void 0:n.map(i=>i.replace(/[{()}]/g,"")))??[]).forEach(i=>{e[i]=[]}),e}function mc(r,e){let t;const n=/@in\s+([^;]+);/g;for(;(t=n.exec(r))!==null;)e.push(t[1])}function gc(r,e,t=!1){const n=[];mc(e,n),r.forEach(a=>{a.header&&mc(a.header,n)});const i=n;t&&i.sort();const s=i.map((a,l)=>`       @location(${l}) ${a},`).join(`
`);let o=e.replace(/@in\s+[^;]+;\s*/g,"");return o=o.replace("{{in}}",`
${s}
`),o}function xc(r,e){let t;const n=/@out\s+([^;]+);/g;for(;(t=n.exec(r))!==null;)e.push(t[1])}function H_(r){const t=/\b(\w+)\s*:/g.exec(r);return t?t[1]:""}function $_(r){const e=/@.*?\s+/g;return r.replace(e,"")}function W_(r,e){const t=[];xc(e,t),r.forEach(l=>{l.header&&xc(l.header,t)});let n=0;const i=t.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${n++}) ${l}`).join(`,
`),s=t.sort().map(l=>`       var ${$_(l)};`).join(`
`),o=`return VSOutput(
                ${t.sort().map(l=>` ${H_(l)}`).join(`,
`)});`;let a=e.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${i}
`),a=a.replace("{{start}}",`
${s}
`),a=a.replace("{{return}}",`
${o}
`),a}function _c(r,e){let t=r;for(const n in e){const i=e[n];i.join(`
`).length?t=t.replace(`{{${n}}}`,`//-----${n} START-----//
${i.join(`
`)}
//----${n} FINISH----//`):t=t.replace(`{{${n}}}`,"")}return t}const Sr=Object.create(null),Ko=new Map;let V_=0;function j_({template:r,bits:e}){const t=gf(r,e);if(Sr[t])return Sr[t];const{vertex:n,fragment:i}=Y_(r,e);return Sr[t]=xf(n,i,e),Sr[t]}function X_({template:r,bits:e}){const t=gf(r,e);return Sr[t]||(Sr[t]=xf(r.vertex,r.fragment,e)),Sr[t]}function Y_(r,e){const t=e.map(o=>o.vertex).filter(o=>!!o),n=e.map(o=>o.fragment).filter(o=>!!o);let i=gc(t,r.vertex,!0);i=W_(t,i);const s=gc(n,r.fragment,!0);return{vertex:i,fragment:s}}function gf(r,e){return e.map(t=>(Ko.has(t)||Ko.set(t,V_++),Ko.get(t))).sort((t,n)=>t-n).join("-")+r.vertex+r.fragment}function xf(r,e,t){const n=pc(r),i=pc(e);return t.forEach(s=>{dc(s.vertex,n,s.name),dc(s.fragment,i,s.name)}),{vertex:_c(r,n),fragment:_c(e,i)}}const q_=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,K_=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,Z_=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Q_=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,J_={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},ev={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function Ci({bits:r,name:e}){const t=j_({template:{fragment:K_,vertex:q_},bits:[J_,...r]});return me.from({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}function wi({bits:r,name:e}){return new ge({name:e,...X_({template:{vertex:Z_,fragment:Q_},bits:[ev,...r]})})}const du={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},pu={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},Zo={};function tv(r){const e=[];if(r===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let n=0;n<r;n++)e.push(`@group(1) @binding(${t++}) var textureSource${n+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${n+1}: sampler;`)}return e.join(`
`)}function rv(r){const e=[];if(r===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let t=0;t<r;t++)t===r-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function mu(r){return Zo[r]||(Zo[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${tv(r)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${rv(r)}
            `}}),Zo[r]}const Qo={};function nv(r){const e=[];for(let t=0;t<r;t++)t>0&&e.push("else"),t<r-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uTextures[${t}], vUV);`),e.push("}");return e.join(`
`)}function gu(r){return Qo[r]||(Qo[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${r}];

            `,main:`

                ${nv(r)}
            `}}),Qo[r]}const Pi={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Ai={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},vc={};function xu(r){let e=vc[r];if(e)return e;const t=new Int32Array(r);for(let n=0;n<r;n++)t[n]=n;return e=vc[r]=new ht({uTextures:{value:t,type:"i32",size:r}},{isStatic:!0}),e}class iv extends Gt{constructor(e){const t=wi({name:"batch",bits:[pu,gu(e),Ai]}),n=Ci({name:"batch",bits:[du,mu(e),Pi]});super({glProgram:t,gpuProgram:n,resources:{batchSamplers:xu(e)}})}}let yc=null;const _f=class vf extends U_{constructor(){super(...arguments),this.geometry=new L_,this.shader=yc||(yc=new iv(this.maxTextures)),this.name=vf.extension.name,this.vertexSize=6}packAttributes(e,t,n,i,s){const o=s<<16|e.roundPixels&65535,a=e.transform,l=a.a,h=a.b,f=a.c,p=a.d,x=a.tx,y=a.ty,{positions:b,uvs:T}=e,C=e.color,P=e.attributeOffset,F=P+e.attributeSize;for(let B=P;B<F;B++){const O=B*2,W=b[O],ne=b[O+1];t[i++]=l*W+f*ne+x,t[i++]=p*ne+h*W+y,t[i++]=T[O],t[i++]=T[O+1],n[i++]=C,n[i++]=o}}packQuadAttributes(e,t,n,i,s){const o=e.texture,a=e.transform,l=a.a,h=a.b,f=a.c,p=a.d,x=a.tx,y=a.ty,b=e.bounds,T=b.maxX,C=b.minX,P=b.maxY,F=b.minY,B=o.uvs,O=e.color,W=s<<16|e.roundPixels&65535;t[i+0]=l*C+f*F+x,t[i+1]=p*F+h*C+y,t[i+2]=B.x0,t[i+3]=B.y0,n[i+4]=O,n[i+5]=W,t[i+6]=l*T+f*F+x,t[i+7]=p*F+h*T+y,t[i+8]=B.x1,t[i+9]=B.y1,n[i+10]=O,n[i+11]=W,t[i+12]=l*T+f*P+x,t[i+13]=p*P+h*T+y,t[i+14]=B.x2,t[i+15]=B.y2,n[i+16]=O,n[i+17]=W,t[i+18]=l*C+f*P+x,t[i+19]=p*P+h*C+y,t[i+20]=B.x3,t[i+21]=B.y3,n[i+22]=O,n[i+23]=W}};_f.extension={type:[R.Batcher],name:"default"};let _u=_f;function sv(r,e,t,n,i,s,o,a=null){let l=0;t*=e,i*=s;const h=a.a,f=a.b,p=a.c,x=a.d,y=a.tx,b=a.ty;for(;l<o;){const T=r[t],C=r[t+1];n[i]=h*T+p*C+y,n[i+1]=f*T+x*C+b,i+=s,t+=e,l++}}function ov(r,e,t,n){let i=0;for(e*=t;i<n;)r[e]=0,r[e+1]=0,e+=t,i++}function yf(r,e,t,n,i){const s=e.a,o=e.b,a=e.c,l=e.d,h=e.tx,f=e.ty;t=t||0,n=n||2,i=i||r.length/n-t;let p=t*n;for(let x=0;x<i;x++){const y=r[p],b=r[p+1];r[p]=s*y+a*b+h,r[p+1]=o*y+l*b+f,p+=n}}function av(r,e){if(r===16777215||!e)return e;if(e===16777215||!r)return r;const t=r>>16&255,n=r>>8&255,i=r&255,s=e>>16&255,o=e>>8&255,a=e&255,l=t*s/255,h=n*o/255,f=i*a/255;return(l<<16)+(h<<8)+f}const uv=new ue;class vu{constructor(){this.packAsQuad=!1,this.batcherName="default",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const e=this.baseColor,t=e>>16|e&65280|(e&255)<<16,n=this.renderable;return n?av(t,n.groupColor)+(this.alpha*n.groupAlpha*255<<24):t+(this.alpha*255<<24)}get transform(){var e;return((e=this.renderable)==null?void 0:e.groupTransform)||uv}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.attributeOffset=this.attributeOffset,e.attributeSize=this.attributeSize,e.baseColor=this.baseColor,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData}reset(){this.applyTransform=!0,this.renderable=null}}const mi={extension:{type:R.ShapeBuilder,name:"circle"},build(r,e){let t,n,i,s,o,a;if(r.type==="circle"){const O=r;t=O.x,n=O.y,o=a=O.radius,i=s=0}else if(r.type==="ellipse"){const O=r;t=O.x,n=O.y,o=O.halfWidth,a=O.halfHeight,i=s=0}else{const O=r,W=O.width/2,ne=O.height/2;t=O.x+W,n=O.y+ne,o=a=Math.max(0,Math.min(O.radius,Math.min(W,ne))),i=W-o,s=ne-a}if(!(o>=0&&a>=0&&i>=0&&s>=0))return e;const l=Math.ceil(2.3*Math.sqrt(o+a)),h=l*8+(i?4:0)+(s?4:0);if(h===0)return e;if(l===0)return e[0]=e[6]=t+i,e[1]=e[3]=n+s,e[2]=e[4]=t-i,e[5]=e[7]=n-s,e;let f=0,p=l*4+(i?2:0)+2,x=p,y=h,b=i+o,T=s,C=t+b,P=t-b,F=n+T;if(e[f++]=C,e[f++]=F,e[--p]=F,e[--p]=P,s){const O=n-T;e[x++]=P,e[x++]=O,e[--y]=O,e[--y]=C}for(let O=1;O<l;O++){const W=Math.PI/2*(O/l),ne=i+Math.cos(W)*o,m=s+Math.sin(W)*a,V=t+ne,z=t-ne,$=n+m,Me=n-m;e[f++]=V,e[f++]=$,e[--p]=$,e[--p]=z,e[x++]=z,e[x++]=Me,e[--y]=Me,e[--y]=V}b=i,T=s+a,C=t+b,P=t-b,F=n+T;const B=n-T;return e[f++]=C,e[f++]=F,e[--y]=B,e[--y]=C,i&&(e[f++]=P,e[f++]=F,e[--y]=B,e[--y]=P),e},triangulate(r,e,t,n,i,s){if(r.length===0)return;let o=0,a=0;for(let f=0;f<r.length;f+=2)o+=r[f],a+=r[f+1];o/=r.length/2,a/=r.length/2;let l=n;e[l*t]=o,e[l*t+1]=a;const h=l++;for(let f=0;f<r.length;f+=2)e[l*t]=r[f],e[l*t+1]=r[f+1],f>0&&(i[s++]=l,i[s++]=h,i[s++]=l-1),l++;i[s++]=h+1,i[s++]=h,i[s++]=l-1}},lv={...mi,extension:{...mi.extension,name:"ellipse"}},cv={...mi,extension:{...mi.extension,name:"roundedRectangle"}},hv=1e-4,bc=1e-4;function fv(r){const e=r.length;if(e<6)return 1;let t=0;for(let n=0,i=r[e-2],s=r[e-1];n<e;n+=2){const o=r[n],a=r[n+1];t+=(o-i)*(a+s),i=o,s=a}return t<0?-1:1}function Sc(r,e,t,n,i,s,o,a){const l=r-t*i,h=e-n*i,f=r+t*s,p=e+n*s;let x,y;o?(x=n,y=-t):(x=-n,y=t);const b=l+x,T=h+y,C=f+x,P=p+y;return a.push(b,T),a.push(C,P),2}function Or(r,e,t,n,i,s,o,a){const l=t-r,h=n-e;let f=Math.atan2(l,h),p=Math.atan2(i-r,s-e);a&&f<p?f+=Math.PI*2:!a&&f>p&&(p+=Math.PI*2);let x=f;const y=p-f,b=Math.abs(y),T=Math.sqrt(l*l+h*h),C=(15*b*Math.sqrt(T)/Math.PI>>0)+1,P=y/C;if(x+=P,a){o.push(r,e),o.push(t,n);for(let F=1,B=x;F<C;F++,B+=P)o.push(r,e),o.push(r+Math.sin(B)*T,e+Math.cos(B)*T);o.push(r,e),o.push(i,s)}else{o.push(t,n),o.push(r,e);for(let F=1,B=x;F<C;F++,B+=P)o.push(r+Math.sin(B)*T,e+Math.cos(B)*T),o.push(r,e);o.push(i,s),o.push(r,e)}return C*2}function dv(r,e,t,n,i,s,o,a,l){const h=hv;if(r.length===0)return;const f=e;let p=f.alignment;if(e.alignment!==.5){let Ue=fv(r);p=(p-.5)*Ue+.5}const x=new ze(r[0],r[1]),y=new ze(r[r.length-2],r[r.length-1]),b=n,T=Math.abs(x.x-y.x)<h&&Math.abs(x.y-y.y)<h;if(b){r=r.slice(),T&&(r.pop(),r.pop(),y.set(r[r.length-2],r[r.length-1]));const Ue=(x.x+y.x)*.5,Tt=(y.y+x.y)*.5;r.unshift(Ue,Tt),r.push(Ue,Tt)}const C=i,P=r.length/2;let F=r.length;const B=C.length/2,O=f.width/2,W=O*O,ne=f.miterLimit*f.miterLimit;let m=r[0],V=r[1],z=r[2],$=r[3],Me=0,ut=0,X=-(V-$),Y=m-z,be=0,De=0,q=Math.sqrt(X*X+Y*Y);X/=q,Y/=q,X*=O,Y*=O;const xe=p,K=(1-xe)*2,oe=xe*2;b||(f.cap==="round"?F+=Or(m-X*(K-oe)*.5,V-Y*(K-oe)*.5,m-X*K,V-Y*K,m+X*oe,V+Y*oe,C,!0)+2:f.cap==="square"&&(F+=Sc(m,V,X,Y,K,oe,!0,C))),C.push(m-X*K,V-Y*K),C.push(m+X*oe,V+Y*oe);for(let Ue=1;Ue<P-1;++Ue){m=r[(Ue-1)*2],V=r[(Ue-1)*2+1],z=r[Ue*2],$=r[Ue*2+1],Me=r[(Ue+1)*2],ut=r[(Ue+1)*2+1],X=-(V-$),Y=m-z,q=Math.sqrt(X*X+Y*Y),X/=q,Y/=q,X*=O,Y*=O,be=-($-ut),De=z-Me,q=Math.sqrt(be*be+De*De),be/=q,De/=q,be*=O,De*=O;const Tt=z-m,pr=V-$,Ar=z-Me,Er=ut-$,Mi=Tt*Ar+pr*Er,Kr=pr*Ar-Er*Tt,mr=Kr<0;if(Math.abs(Kr)<.001*Math.abs(Mi)){C.push(z-X*K,$-Y*K),C.push(z+X*oe,$+Y*oe),Mi>=0&&(f.join==="round"?F+=Or(z,$,z-X*K,$-Y*K,z-be*K,$-De*K,C,!1)+4:F+=2,C.push(z-be*oe,$-De*oe),C.push(z+be*K,$+De*K));continue}const vt=(-X+m)*(-Y+$)-(-X+z)*(-Y+V),Bi=(-be+Me)*(-De+$)-(-be+z)*(-De+ut),Mt=(Tt*Bi-Ar*vt)/Kr,Qt=(Er*vt-pr*Bi)/Kr,Zr=(Mt-z)*(Mt-z)+(Qt-$)*(Qt-$),Jt=z+(Mt-z)*K,Bt=$+(Qt-$)*K,Ct=z-(Mt-z)*oe,st=$-(Qt-$)*oe,eo=Math.min(Tt*Tt+pr*pr,Ar*Ar+Er*Er),Ri=mr?K:oe,to=eo+Ri*Ri*W;Zr<=to?f.join==="bevel"||Zr/W>ne?(mr?(C.push(Jt,Bt),C.push(z+X*oe,$+Y*oe),C.push(Jt,Bt),C.push(z+be*oe,$+De*oe)):(C.push(z-X*K,$-Y*K),C.push(Ct,st),C.push(z-be*K,$-De*K),C.push(Ct,st)),F+=2):f.join==="round"?mr?(C.push(Jt,Bt),C.push(z+X*oe,$+Y*oe),F+=Or(z,$,z+X*oe,$+Y*oe,z+be*oe,$+De*oe,C,!0)+4,C.push(Jt,Bt),C.push(z+be*oe,$+De*oe)):(C.push(z-X*K,$-Y*K),C.push(Ct,st),F+=Or(z,$,z-X*K,$-Y*K,z-be*K,$-De*K,C,!1)+4,C.push(z-be*K,$-De*K),C.push(Ct,st)):(C.push(Jt,Bt),C.push(Ct,st)):(C.push(z-X*K,$-Y*K),C.push(z+X*oe,$+Y*oe),f.join==="round"?mr?F+=Or(z,$,z+X*oe,$+Y*oe,z+be*oe,$+De*oe,C,!0)+2:F+=Or(z,$,z-X*K,$-Y*K,z-be*K,$-De*K,C,!1)+2:f.join==="miter"&&Zr/W<=ne&&(mr?(C.push(Ct,st),C.push(Ct,st)):(C.push(Jt,Bt),C.push(Jt,Bt)),F+=2),C.push(z-be*K,$-De*K),C.push(z+be*oe,$+De*oe),F+=2)}m=r[(P-2)*2],V=r[(P-2)*2+1],z=r[(P-1)*2],$=r[(P-1)*2+1],X=-(V-$),Y=m-z,q=Math.sqrt(X*X+Y*Y),X/=q,Y/=q,X*=O,Y*=O,C.push(z-X*K,$-Y*K),C.push(z+X*oe,$+Y*oe),b||(f.cap==="round"?F+=Or(z-X*(K-oe)*.5,$-Y*(K-oe)*.5,z-X*K,$-Y*K,z+X*oe,$+Y*oe,C,!1)+2:f.cap==="square"&&(F+=Sc(z,$,X,Y,K,oe,!1,C)));const Pr=bc*bc;for(let Ue=B;Ue<F+B-2;++Ue)m=C[Ue*2],V=C[Ue*2+1],z=C[(Ue+1)*2],$=C[(Ue+1)*2+1],Me=C[(Ue+2)*2],ut=C[(Ue+2)*2+1],!(Math.abs(m*($-ut)+z*(ut-V)+Me*(V-$))<Pr)&&a.push(Ue,Ue+1,Ue+2)}function bf(r,e,t,n,i,s,o){const a=f_(r,e,2);if(!a)return;for(let h=0;h<a.length;h+=3)s[o++]=a[h]+i,s[o++]=a[h+1]+i,s[o++]=a[h+2]+i;let l=i*n;for(let h=0;h<r.length;h+=2)t[l]=r[h],t[l+1]=r[h+1],l+=n}const pv=[],mv={extension:{type:R.ShapeBuilder,name:"polygon"},build(r,e){for(let t=0;t<r.points.length;t++)e[t]=r.points[t];return e},triangulate(r,e,t,n,i,s){bf(r,pv,e,t,n,i,s)}},gv={extension:{type:R.ShapeBuilder,name:"rectangle"},build(r,e){const t=r,n=t.x,i=t.y,s=t.width,o=t.height;return s>=0&&o>=0&&(e[0]=n,e[1]=i,e[2]=n+s,e[3]=i,e[4]=n+s,e[5]=i+o,e[6]=n,e[7]=i+o),e},triangulate(r,e,t,n,i,s){let o=0;n*=t,e[n+o]=r[0],e[n+o+1]=r[1],o+=t,e[n+o]=r[2],e[n+o+1]=r[3],o+=t,e[n+o]=r[6],e[n+o+1]=r[7],o+=t,e[n+o]=r[4],e[n+o+1]=r[5],o+=t;const a=n/t;i[s++]=a,i[s++]=a+1,i[s++]=a+2,i[s++]=a+1,i[s++]=a+3,i[s++]=a+2}},xv={extension:{type:R.ShapeBuilder,name:"triangle"},build(r,e){return e[0]=r.x,e[1]=r.y,e[2]=r.x2,e[3]=r.y2,e[4]=r.x3,e[5]=r.y3,e},triangulate(r,e,t,n,i,s){let o=0;n*=t,e[n+o]=r[0],e[n+o+1]=r[1],o+=t,e[n+o]=r[2],e[n+o+1]=r[3],o+=t,e[n+o]=r[4],e[n+o+1]=r[5];const a=n/t;i[s++]=a,i[s++]=a+1,i[s++]=a+2}},Ys={};ke.handleByMap(R.ShapeBuilder,Ys);ke.add(gv,mv,xv,mi,lv,cv);const _v=new Le;function vv(r,e){const{geometryData:t,batches:n}=e;n.length=0,t.indices.length=0,t.vertices.length=0,t.uvs.length=0;for(let i=0;i<r.instructions.length;i++){const s=r.instructions[i];if(s.action==="texture")yv(s.data,n,t);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,h=s.data.hole;o&&h&&Tc(h.shapePath,l,null,!0,n,t),Tc(a,l,h,o,n,t)}}}function yv(r,e,t){const{vertices:n,uvs:i,indices:s}=t,o=s.length,a=n.length/2,l=[],h=Ys.rectangle,f=_v,p=r.image;f.x=r.dx,f.y=r.dy,f.width=r.dw,f.height=r.dh;const x=r.transform;h.build(f,l),x&&yf(l,x),h.triangulate(l,n,2,a,s,o);const y=p.uvs;i.push(y.x0,y.y0,y.x1,y.y1,y.x3,y.y3,y.x2,y.y2);const b=Ae.get(vu);b.indexOffset=o,b.indexSize=s.length-o,b.attributeOffset=a,b.attributeSize=n.length/2-a,b.baseColor=r.style,b.alpha=r.alpha,b.texture=p,b.geometryData=t,e.push(b)}function Tc(r,e,t,n,i,s){const{vertices:o,uvs:a,indices:l}=s,h=r.shapePrimitives.length-1;r.shapePrimitives.forEach(({shape:f,transform:p},x)=>{const y=l.length,b=o.length/2,T=[],C=Ys[f.type];if(C.build(f,T),p&&yf(T,p),n){const O=f.closePath??!0;dv(T,e,!1,O,o,2,b,l)}else if(t&&h===x){h!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const O=[],W=T.slice();bv(t.shapePath).forEach(m=>{O.push(W.length/2),W.push(...m)}),bf(W,O,o,2,b,l,y)}else C.triangulate(T,o,2,b,l,y);const P=a.length/2,F=e.texture;if(F!==Q.WHITE){const O=e.matrix;O&&(p&&O.append(p.clone().invert()),sv(o,2,b,a,P,2,o.length/2-b,O))}else ov(a,P,2,o.length/2-b);const B=Ae.get(vu);B.indexOffset=y,B.indexSize=l.length-y,B.attributeOffset=b,B.attributeSize=o.length/2-b,B.baseColor=e.color,B.alpha=e.alpha,B.texture=F,B.geometryData=s,i.push(B)})}function bv(r){if(!r)return[];const e=r.shapePrimitives,t=[];for(let n=0;n<e.length;n++){const i=e[n].shape,s=[];Ys[i.type].build(i,s),t.push(s)}return t}class Sv{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class Tv{constructor(){this.batcher=new _u,this.instructions=new Ih}init(){this.instructions.reset()}get geometry(){return Z(Dg,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}}const yu=class Oa{constructor(){this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(e){Oa.defaultOptions.bezierSmoothness=(e==null?void 0:e.bezierSmoothness)??Oa.defaultOptions.bezierSmoothness}getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){t?this._cleanGraphicsContextData(e):t=this._initContext(e),vv(e,t);const n=e.batchMode;e.customShader||n==="no-batch"?t.isBatchable=!1:n==="auto"&&(t.isBatchable=t.geometryData.vertices.length<400),e.dirty=!1}return t}getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}_initContextRenderData(e){const t=Ae.get(Tv),{batches:n,geometryData:i}=this._gpuContextHash[e.uid],s=i.vertices.length,o=i.indices.length;for(let f=0;f<n.length;f++)n[f].applyTransform=!1;const a=t.batcher;a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let f=0;f<n.length;f++){const p=n[f];a.add(p)}a.finish(t.instructions);const l=a.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const h=a.batches;for(let f=0;f<h.length;f++){const p=h[f];p.bindGroup=fu(p.textures.textures,p.textures.count)}return this._graphicsDataContextHash[e.uid]=t,t}_initContext(e){const t=new Sv;return t.context=e,this._gpuContextHash[e.uid]=t,e.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]}onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e),e.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]=null}_cleanGraphicsContextData(e){const t=this._gpuContextHash[e.uid];t.isBatchable||this._graphicsDataContextHash[e.uid]&&(Ae.return(this.getContextRenderData(e)),this._graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(n=>{Ae.return(n)})}destroy(){for(const e in this._gpuContextHash)this._gpuContextHash[e]&&this.onGraphicsContextDestroy(this._gpuContextHash[e].context)}};yu.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"graphicsContext"};yu.defaultOptions={bezierSmoothness:.5};let Sf=yu;const Cv=8,Ji=11920929e-14,wv=1;function Tf(r,e,t,n,i,s,o,a,l,h){const p=Math.min(.99,Math.max(0,h??Sf.defaultOptions.bezierSmoothness));let x=(wv-p)/1;return x*=x,Pv(e,t,n,i,s,o,a,l,r,x),r}function Pv(r,e,t,n,i,s,o,a,l,h){Ua(r,e,t,n,i,s,o,a,l,h,0),l.push(o,a)}function Ua(r,e,t,n,i,s,o,a,l,h,f){if(f>Cv)return;const p=(r+t)/2,x=(e+n)/2,y=(t+i)/2,b=(n+s)/2,T=(i+o)/2,C=(s+a)/2,P=(p+y)/2,F=(x+b)/2,B=(y+T)/2,O=(b+C)/2,W=(P+B)/2,ne=(F+O)/2;if(f>0){let m=o-r,V=a-e;const z=Math.abs((t-o)*V-(n-a)*m),$=Math.abs((i-o)*V-(s-a)*m);if(z>Ji&&$>Ji){if((z+$)*(z+$)<=h*(m*m+V*V)){l.push(W,ne);return}}else if(z>Ji){if(z*z<=h*(m*m+V*V)){l.push(W,ne);return}}else if($>Ji){if($*$<=h*(m*m+V*V)){l.push(W,ne);return}}else if(m=W-(r+o)/2,V=ne-(e+a)/2,m*m+V*V<=h){l.push(W,ne);return}}Ua(r,e,p,x,P,F,W,ne,l,h,f+1),Ua(W,ne,B,O,T,C,o,a,l,h,f+1)}const Av=8,Ev=11920929e-14,Mv=1;function Bv(r,e,t,n,i,s,o,a){const h=Math.min(.99,Math.max(0,a??Sf.defaultOptions.bezierSmoothness));let f=(Mv-h)/1;return f*=f,Rv(e,t,n,i,s,o,r,f),r}function Rv(r,e,t,n,i,s,o,a){ka(o,r,e,t,n,i,s,a,0),o.push(i,s)}function ka(r,e,t,n,i,s,o,a,l){if(l>Av)return;const h=(e+n)/2,f=(t+i)/2,p=(n+s)/2,x=(i+o)/2,y=(h+p)/2,b=(f+x)/2;let T=s-e,C=o-t;const P=Math.abs((n-s)*C-(i-o)*T);if(P>Ev){if(P*P<=a*(T*T+C*C)){r.push(y,b);return}}else if(T=y-(e+s)/2,C=b-(t+o)/2,T*T+C*C<=a){r.push(y,b);return}ka(r,e,t,h,f,y,b,a,l+1),ka(r,y,b,p,x,s,o,a,l+1)}function Cf(r,e,t,n,i,s,o,a){let l=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(n,1/3)*(l/Math.PI))),a=Math.max(a,3);let h=l/a,f=i;h*=o?-1:1;for(let p=0;p<a+1;p++){const x=Math.cos(f),y=Math.sin(f),b=e+x*n,T=t+y*n;r.push(b,T),f+=h}}function Iv(r,e,t,n,i,s){const o=r[r.length-2],l=r[r.length-1]-t,h=o-e,f=i-t,p=n-e,x=Math.abs(l*p-h*f);if(x<1e-8||s===0){(r[r.length-2]!==e||r[r.length-1]!==t)&&r.push(e,t);return}const y=l*l+h*h,b=f*f+p*p,T=l*f+h*p,C=s*Math.sqrt(y)/x,P=s*Math.sqrt(b)/x,F=C*T/y,B=P*T/b,O=C*p+P*h,W=C*f+P*l,ne=h*(P+F),m=l*(P+F),V=p*(C+B),z=f*(C+B),$=Math.atan2(m-W,ne-O),Me=Math.atan2(z-W,V-O);Cf(r,O+e,W+t,s,$,Me,h*f>p*l)}const si=Math.PI*2,Jo={centerX:0,centerY:0,ang1:0,ang2:0},ea=({x:r,y:e},t,n,i,s,o,a,l)=>{r*=t,e*=n;const h=i*r-s*e,f=s*r+i*e;return l.x=h+o,l.y=f+a,l};function Fv(r,e){const t=e===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(e/4),n=e===1.5707963267948966?.551915024494:t,i=Math.cos(r),s=Math.sin(r),o=Math.cos(r+e),a=Math.sin(r+e);return[{x:i-s*n,y:s+i*n},{x:o+a*n,y:a-o*n},{x:o,y:a}]}const Cc=(r,e,t,n)=>{const i=r*n-e*t<0?-1:1;let s=r*t+e*n;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},Ov=(r,e,t,n,i,s,o,a,l,h,f,p,x)=>{const y=Math.pow(i,2),b=Math.pow(s,2),T=Math.pow(f,2),C=Math.pow(p,2);let P=y*b-y*C-b*T;P<0&&(P=0),P/=y*C+b*T,P=Math.sqrt(P)*(o===a?-1:1);const F=P*i/s*p,B=P*-s/i*f,O=h*F-l*B+(r+t)/2,W=l*F+h*B+(e+n)/2,ne=(f-F)/i,m=(p-B)/s,V=(-f-F)/i,z=(-p-B)/s,$=Cc(1,0,ne,m);let Me=Cc(ne,m,V,z);a===0&&Me>0&&(Me-=si),a===1&&Me<0&&(Me+=si),x.centerX=O,x.centerY=W,x.ang1=$,x.ang2=Me};function Uv(r,e,t,n,i,s,o,a=0,l=0,h=0){if(s===0||o===0)return;const f=Math.sin(a*si/360),p=Math.cos(a*si/360),x=p*(e-n)/2+f*(t-i)/2,y=-f*(e-n)/2+p*(t-i)/2;if(x===0&&y===0)return;s=Math.abs(s),o=Math.abs(o);const b=Math.pow(x,2)/Math.pow(s,2)+Math.pow(y,2)/Math.pow(o,2);b>1&&(s*=Math.sqrt(b),o*=Math.sqrt(b)),Ov(e,t,n,i,s,o,l,h,f,p,x,y,Jo);let{ang1:T,ang2:C}=Jo;const{centerX:P,centerY:F}=Jo;let B=Math.abs(C)/(si/4);Math.abs(1-B)<1e-7&&(B=1);const O=Math.max(Math.ceil(B),1);C/=O;let W=r[r.length-2],ne=r[r.length-1];const m={x:0,y:0};for(let V=0;V<O;V++){const z=Fv(T,C),{x:$,y:Me}=ea(z[0],s,o,p,f,P,F,m),{x:ut,y:X}=ea(z[1],s,o,p,f,P,F,m),{x:Y,y:be}=ea(z[2],s,o,p,f,P,F,m);Tf(r,W,ne,$,Me,ut,X,Y,be),W=Y,ne=be,T+=C}}function kv(r,e,t){const n=(o,a)=>{const l=a.x-o.x,h=a.y-o.y,f=Math.sqrt(l*l+h*h),p=l/f,x=h/f;return{len:f,nx:p,ny:x}},i=(o,a)=>{o===0?r.moveTo(a.x,a.y):r.lineTo(a.x,a.y)};let s=e[e.length-1];for(let o=0;o<e.length;o++){const a=e[o%e.length],l=a.radius??t;if(l<=0){i(o,a),s=a;continue}const h=e[(o+1)%e.length],f=n(a,s),p=n(a,h);if(f.len<1e-4||p.len<1e-4){i(o,a),s=a;continue}let x=Math.asin(f.nx*p.ny-f.ny*p.nx),y=1,b=!1;f.nx*p.nx-f.ny*-p.ny<0?x<0?x=Math.PI+x:(x=Math.PI-x,y=-1,b=!0):x>0&&(y=-1,b=!0);const T=x/2;let C,P=Math.abs(Math.cos(T)*l/Math.sin(T));P>Math.min(f.len/2,p.len/2)?(P=Math.min(f.len/2,p.len/2),C=Math.abs(P*Math.sin(T)/Math.cos(T))):C=l;const F=a.x+p.nx*P+-p.ny*C*y,B=a.y+p.ny*P+p.nx*C*y,O=Math.atan2(f.ny,f.nx)+Math.PI/2*y,W=Math.atan2(p.ny,p.nx)-Math.PI/2*y;o===0&&r.moveTo(F+Math.cos(O)*C,B+Math.sin(O)*C),r.arc(F,B,C,O,W,b),s=a}}function Dv(r,e,t,n){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,h)=>({x:a.x+(l.x-a.x)*h,y:a.y+(l.y-a.y)*h}),o=e.length;for(let a=0;a<o;a++){const l=e[(a+1)%o],h=l.radius??t;if(h<=0){a===0?r.moveTo(l.x,l.y):r.lineTo(l.x,l.y);continue}const f=e[a],p=e[(a+2)%o],x=i(f,l);let y;if(x<1e-4)y=l;else{const C=Math.min(x/2,h);y=s(l,f,C/x)}const b=i(p,l);let T;if(b<1e-4)T=l;else{const C=Math.min(b/2,h);T=s(l,p,C/b)}a===0?r.moveTo(y.x,y.y):r.lineTo(y.x,y.y),r.quadraticCurveTo(l.x,l.y,T.x,T.y,n)}}const Gv=new Le;class zv{constructor(e){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new xt,this._graphicsPath2D=e}moveTo(e,t){return this.startPoly(e,t),this}lineTo(e,t){this._ensurePoly();const n=this._currentPoly.points,i=n[n.length-2],s=n[n.length-1];return(i!==e||s!==t)&&n.push(e,t),this}arc(e,t,n,i,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Cf(a,e,t,n,i,s,o),this}arcTo(e,t,n,i,s){this._ensurePoly();const o=this._currentPoly.points;return Iv(o,e,t,n,i,s),this}arcToSvg(e,t,n,i,s,o,a){const l=this._currentPoly.points;return Uv(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,e,t,n,i,s),this}bezierCurveTo(e,t,n,i,s,o,a){this._ensurePoly();const l=this._currentPoly;return Tf(this._currentPoly.points,l.lastX,l.lastY,e,t,n,i,s,o,a),this}quadraticCurveTo(e,t,n,i,s){this._ensurePoly();const o=this._currentPoly;return Bv(this._currentPoly.points,o.lastX,o.lastY,e,t,n,i,s),this}closePath(){return this.endPoly(!0),this}addPath(e,t){this.endPoly(),t&&!t.isIdentity()&&(e=e.clone(!0),e.transform(t));for(let n=0;n<e.instructions.length;n++){const i=e.instructions[n];this[i.action](...i.data)}return this}finish(e=!1){this.endPoly(e)}rect(e,t,n,i,s){return this.drawShape(new Le(e,t,n,i),s),this}circle(e,t,n,i){return this.drawShape(new lu(e,t,n),i),this}poly(e,t,n){const i=new ii(e);return i.closePath=t,this.drawShape(i,n),this}regularPoly(e,t,n,i,s=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/i,h=[];for(let f=0;f<i;f++){const p=f*l+a;h.push(e+n*Math.cos(p),t+n*Math.sin(p))}return this.poly(h,!0,o),this}roundPoly(e,t,n,i,s,o=0,a){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(e,t,n,i,o);const l=n*Math.sin(Math.PI/i)-.001;s=Math.min(s,l);const h=-1*Math.PI/2+o,f=Math.PI*2/i,p=(i-2)*Math.PI/i/2;for(let x=0;x<i;x++){const y=x*f+h,b=e+n*Math.cos(y),T=t+n*Math.sin(y),C=y+Math.PI+p,P=y-Math.PI-p,F=b+s*Math.cos(C),B=T+s*Math.sin(C),O=b+s*Math.cos(P),W=T+s*Math.sin(P);x===0?this.moveTo(F,B):this.lineTo(F,B),this.quadraticCurveTo(b,T,O,W,a)}return this.closePath()}roundShape(e,t,n=!1,i){return e.length<3?this:(n?Dv(this,e,t,i):kv(this,e,t),this.closePath())}filletRect(e,t,n,i,s){if(s===0)return this.rect(e,t,n,i);const o=Math.min(n,i)/2,a=Math.min(o,Math.max(-o,s)),l=e+n,h=t+i,f=a<0?-a:0,p=Math.abs(a);return this.moveTo(e,t+p).arcTo(e+f,t+f,e+p,t,p).lineTo(l-p,t).arcTo(l-f,t+f,l,t+p,p).lineTo(l,h-p).arcTo(l-f,h-f,e+n-p,h,p).lineTo(e+p,h).arcTo(e+f,h-f,e,h-p,p).closePath()}chamferRect(e,t,n,i,s,o){if(s<=0)return this.rect(e,t,n,i);const a=Math.min(s,Math.min(n,i)/2),l=e+n,h=t+i,f=[e+a,t,l-a,t,l,t+a,l,h-a,l-a,h,e+a,h,e,h-a,e,t+a];for(let p=f.length-1;p>=2;p-=2)f[p]===f[p-2]&&f[p-1]===f[p-3]&&f.splice(p-1,2);return this.poly(f,!0,o)}ellipse(e,t,n,i,s){return this.drawShape(new cu(e,t,n,i),s),this}roundRect(e,t,n,i,s,o){return this.drawShape(new hu(e,t,n,i,s),o),this}drawShape(e,t){return this.endPoly(),this.shapePrimitives.push({shape:e,transform:t}),this}startPoly(e,t){let n=this._currentPoly;return n&&this.endPoly(),n=new ii,n.points.push(e,t),this._currentPoly=n,this}endPoly(e=!1){const t=this._currentPoly;return t&&t.points.length>2&&(t.closePath=e,this.shapePrimitives.push({shape:t})),this._currentPoly=null,this}_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new ii,e)){const t=this.shapePrimitives[this.shapePrimitives.length-1];if(t){let n=t.shape.x,i=t.shape.y;if(t.transform&&!t.transform.isIdentity()){const s=t.transform,o=n;n=s.a*n+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(n,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const e=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let t=0;t<e.instructions.length;t++){const n=e.instructions[t];this[n.action](...n.data)}this.finish()}get bounds(){const e=this._bounds;e.clear();const t=this.shapePrimitives;for(let n=0;n<t.length;n++){const i=t[n],s=i.shape.getBounds(Gv);i.transform?e.addRect(s,i.transform):e.addRect(s)}return e}}class An{constructor(e){this.instructions=[],this.uid=Ve("graphicsPath"),this._dirty=!0,typeof e=="string"?P_(e,this):this.instructions=(e==null?void 0:e.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new zv(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(e,t){return e=e.clone(),this.instructions.push({action:"addPath",data:[e,t]}),this._dirty=!0,this}arc(...e){return this.instructions.push({action:"arc",data:e}),this._dirty=!0,this}arcTo(...e){return this.instructions.push({action:"arcTo",data:e}),this._dirty=!0,this}arcToSvg(...e){return this.instructions.push({action:"arcToSvg",data:e}),this._dirty=!0,this}bezierCurveTo(...e){return this.instructions.push({action:"bezierCurveTo",data:e}),this._dirty=!0,this}bezierCurveToShort(e,t,n,i,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(ze.shared);let l=0,h=0;if(!o||o.action!=="bezierCurveTo")l=a.x,h=a.y;else{l=o.data[2],h=o.data[3];const f=a.x,p=a.y;l=f+(f-l),h=p+(p-h)}return this.instructions.push({action:"bezierCurveTo",data:[l,h,e,t,n,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...e){return this.instructions.push({action:"ellipse",data:e}),this._dirty=!0,this}lineTo(...e){return this.instructions.push({action:"lineTo",data:e}),this._dirty=!0,this}moveTo(...e){return this.instructions.push({action:"moveTo",data:e}),this}quadraticCurveTo(...e){return this.instructions.push({action:"quadraticCurveTo",data:e}),this._dirty=!0,this}quadraticCurveToShort(e,t,n){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(ze.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=i.data[0],a=i.data[1];const l=s.x,h=s.y;o=l+(l-o),a=h+(h-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,e,t,n]}),this._dirty=!0,this}rect(e,t,n,i,s){return this.instructions.push({action:"rect",data:[e,t,n,i,s]}),this._dirty=!0,this}circle(e,t,n,i){return this.instructions.push({action:"circle",data:[e,t,n,i]}),this._dirty=!0,this}roundRect(...e){return this.instructions.push({action:"roundRect",data:e}),this._dirty=!0,this}poly(...e){return this.instructions.push({action:"poly",data:e}),this._dirty=!0,this}regularPoly(...e){return this.instructions.push({action:"regularPoly",data:e}),this._dirty=!0,this}roundPoly(...e){return this.instructions.push({action:"roundPoly",data:e}),this._dirty=!0,this}roundShape(...e){return this.instructions.push({action:"roundShape",data:e}),this._dirty=!0,this}filletRect(...e){return this.instructions.push({action:"filletRect",data:e}),this._dirty=!0,this}chamferRect(...e){return this.instructions.push({action:"chamferRect",data:e}),this._dirty=!0,this}star(e,t,n,i,s,o,a){s=s||i/2;const l=-1*Math.PI/2+o,h=n*2,f=Math.PI*2/h,p=[];for(let x=0;x<h;x++){const y=x%2?s:i,b=x*f+l;p.push(e+y*Math.cos(b),t+y*Math.sin(b))}return this.poly(p,!0,a),this}clone(e=!1){const t=new An;if(!e)t.instructions=this.instructions.slice();else for(let n=0;n<this.instructions.length;n++){const i=this.instructions[n];t.instructions.push({action:i.action,data:i.data.slice()})}return t}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(e){if(e.isIdentity())return this;const t=e.a,n=e.b,i=e.c,s=e.d,o=e.tx,a=e.ty;let l=0,h=0,f=0,p=0,x=0,y=0,b=0,T=0;for(let C=0;C<this.instructions.length;C++){const P=this.instructions[C],F=P.data;switch(P.action){case"moveTo":case"lineTo":l=F[0],h=F[1],F[0]=t*l+i*h+o,F[1]=n*l+s*h+a;break;case"bezierCurveTo":f=F[0],p=F[1],x=F[2],y=F[3],l=F[4],h=F[5],F[0]=t*f+i*p+o,F[1]=n*f+s*p+a,F[2]=t*x+i*y+o,F[3]=n*x+s*y+a,F[4]=t*l+i*h+o,F[5]=n*l+s*h+a;break;case"quadraticCurveTo":f=F[0],p=F[1],l=F[2],h=F[3],F[0]=t*f+i*p+o,F[1]=n*f+s*p+a,F[2]=t*l+i*h+o,F[3]=n*l+s*h+a;break;case"arcToSvg":l=F[5],h=F[6],b=F[0],T=F[1],F[0]=t*b+i*T,F[1]=n*b+s*T,F[5]=t*l+i*h+o,F[6]=n*l+s*h+a;break;case"circle":F[4]=Yn(F[3],e);break;case"rect":F[4]=Yn(F[4],e);break;case"ellipse":F[8]=Yn(F[8],e);break;case"roundRect":F[5]=Yn(F[5],e);break;case"addPath":F[0].transform(e);break;case"poly":F[2]=Yn(F[2],e);break;default:fe("unknown transform action",P.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(e){let t=this.instructions.length-1,n=this.instructions[t];if(!n)return e.x=0,e.y=0,e;for(;n.action==="closePath";){if(t--,t<0)return e.x=0,e.y=0,e;n=this.instructions[t]}switch(n.action){case"moveTo":case"lineTo":e.x=n.data[0],e.y=n.data[1];break;case"quadraticCurveTo":e.x=n.data[2],e.y=n.data[3];break;case"bezierCurveTo":e.x=n.data[4],e.y=n.data[5];break;case"arc":case"arcToSvg":e.x=n.data[5],e.y=n.data[6];break;case"addPath":n.data[0].getLastPoint(e);break}return e}}function Yn(r,e){return r?r.prepend(e):e.clone()}function Lv(r,e){if(typeof r=="string"){const n=document.createElement("div");n.innerHTML=r.trim(),r=n.querySelector("svg")}const t={context:e,path:new An};return wf(r,t,null,null),e}function wf(r,e,t,n){const i=r.children,{fillStyle:s,strokeStyle:o}=Nv(r);s&&t?t={...t,...s}:s&&(t=s),o&&n?n={...n,...o}:o&&(n=o),e.context.fillStyle=t,e.context.strokeStyle=n;let a,l,h,f,p,x,y,b,T,C,P,F,B,O,W,ne,m;switch(r.nodeName.toLowerCase()){case"path":O=r.getAttribute("d"),W=new An(O),e.context.path(W),t&&e.context.fill(),n&&e.context.stroke();break;case"circle":y=et(r,"cx",0),b=et(r,"cy",0),T=et(r,"r",0),e.context.ellipse(y,b,T,T),t&&e.context.fill(),n&&e.context.stroke();break;case"rect":a=et(r,"x",0),l=et(r,"y",0),ne=et(r,"width",0),m=et(r,"height",0),C=et(r,"rx",0),P=et(r,"ry",0),C||P?e.context.roundRect(a,l,ne,m,C||P):e.context.rect(a,l,ne,m),t&&e.context.fill(),n&&e.context.stroke();break;case"ellipse":y=et(r,"cx",0),b=et(r,"cy",0),C=et(r,"rx",0),P=et(r,"ry",0),e.context.beginPath(),e.context.ellipse(y,b,C,P),t&&e.context.fill(),n&&e.context.stroke();break;case"line":h=et(r,"x1",0),f=et(r,"y1",0),p=et(r,"x2",0),x=et(r,"y2",0),e.context.beginPath(),e.context.moveTo(h,f),e.context.lineTo(p,x),n&&e.context.stroke();break;case"polygon":B=r.getAttribute("points"),F=B.match(/\d+/g).map(V=>parseInt(V,10)),e.context.poly(F,!0),t&&e.context.fill(),n&&e.context.stroke();break;case"polyline":B=r.getAttribute("points"),F=B.match(/\d+/g).map(V=>parseInt(V,10)),e.context.poly(F,!1),n&&e.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${r.nodeName}> elements unsupported`);break}}for(let V=0;V<i.length;V++)wf(i[V],e,t,n)}function et(r,e,t){const n=r.getAttribute(e);return n?Number(n):t}function Nv(r){const e=r.getAttribute("style"),t={},n={};let i=!1,s=!1;if(e){const o=e.split(";");for(let a=0;a<o.length;a++){const l=o[a],[h,f]=l.split(":");switch(h){case"stroke":f!=="none"&&(t.color=de.shared.setValue(f).toNumber(),s=!0);break;case"stroke-width":t.width=Number(f);break;case"fill":f!=="none"&&(i=!0,n.color=de.shared.setValue(f).toNumber());break;case"fill-opacity":n.alpha=Number(f);break;case"stroke-opacity":t.alpha=Number(f);break;case"opacity":n.alpha=Number(f),t.alpha=Number(f);break}}}else{const o=r.getAttribute("stroke");o&&o!=="none"&&(s=!0,t.color=de.shared.setValue(o).toNumber(),t.width=et(r,"stroke-width",1));const a=r.getAttribute("fill");a&&a!=="none"&&(i=!0,n.color=de.shared.setValue(a).toNumber())}return{strokeStyle:s?t:null,fillStyle:i?n:null}}function Hv(r){return de.isColorLike(r)}function wc(r){return r instanceof Xs}function Pc(r){return r instanceof pi}function $v(r,e,t){const n=de.shared.setValue(e??0);return r.color=n.toNumber(),r.alpha=n.alpha===1?t.alpha:n.alpha,r.texture=Q.WHITE,{...t,...r}}function Ac(r,e,t){return r.fill=e,r.color=16777215,r.texture=e.texture,r.matrix=e.transform,{...t,...r}}function Ec(r,e,t){return e.buildLinearGradient(),r.fill=e,r.color=16777215,r.texture=e.texture,r.matrix=e.transform,{...t,...r}}function Wv(r,e){var i;const t={...e,...r};if(t.texture){if(t.texture!==Q.WHITE){const o=((i=t.matrix)==null?void 0:i.invert())||new ue;o.translate(t.texture.frame.x,t.texture.frame.y),o.scale(1/t.texture.source.width,1/t.texture.source.height),t.matrix=o}const s=t.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const n=de.shared.setValue(t.color);return t.alpha*=n.alpha,t.color=n.toNumber(),t.matrix=t.matrix?t.matrix.clone():null,t}function Nr(r,e){if(r==null)return null;const t={},n=r;return Hv(r)?$v(t,r,e):wc(r)?Ac(t,r,e):Pc(r)?Ec(t,r,e):n.fill&&wc(n.fill)?Ac(n,n.fill,e):n.fill&&Pc(n.fill)?Ec(n,n.fill,e):Wv(n,e)}function Rs(r,e){const{width:t,alignment:n,miterLimit:i,cap:s,join:o,...a}=e,l=Nr(r,a);return l?{width:t,alignment:n,miterLimit:i,cap:s,join:o,...l}:null}const Vv=new ze,Mc=new ue,bu=class jt extends it{constructor(){super(...arguments),this.uid=Ve("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new An,this._transform=new ue,this._fillStyle={...jt.defaultFillStyle},this._strokeStyle={...jt.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new xt,this._boundsDirty=!0}clone(){const e=new jt;return e.batchMode=this.batchMode,e.instructions=this.instructions.slice(),e._activePath=this._activePath.clone(),e._transform=this._transform.clone(),e._fillStyle={...this._fillStyle},e._strokeStyle={...this._strokeStyle},e._stateStack=this._stateStack.slice(),e._bounds=this._bounds.clone(),e._boundsDirty=!0,e}get fillStyle(){return this._fillStyle}set fillStyle(e){this._fillStyle=Nr(e,jt.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(e){this._strokeStyle=Rs(e,jt.defaultStrokeStyle)}setFillStyle(e){return this._fillStyle=Nr(e,jt.defaultFillStyle),this}setStrokeStyle(e){return this._strokeStyle=Nr(e,jt.defaultStrokeStyle),this}texture(e,t,n,i,s,o){return this.instructions.push({action:"texture",data:{image:e,dx:n||0,dy:i||0,dw:s||e.frame.width,dh:o||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:t?de.shared.setValue(t).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new An,this}fill(e,t){let n;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?n=i.data.path:n=this._activePath.clone(),n?(e!=null&&(t!==void 0&&typeof e=="number"&&(Z(ye,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),e={color:e,alpha:t}),this._fillStyle=Nr(e,jt.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:n}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:e,y:t}=this._activePath.getLastPoint(ze.shared);this._activePath.clear(),this._activePath.moveTo(e,t)}stroke(e){let t;const n=this.instructions[this.instructions.length-1];return this._tick===0&&n&&n.action==="fill"?t=n.data.path:t=this._activePath.clone(),t?(e!=null&&(this._strokeStyle=Rs(e,jt.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:t}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let e=0;e<2;e++){const t=this.instructions[this.instructions.length-1-e],n=this._activePath.clone();if(t&&(t.action==="stroke"||t.action==="fill"))if(t.data.hole)t.data.hole.addPath(n);else{t.data.hole=n;break}}return this._initNextPathLocation(),this}arc(e,t,n,i,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*e+a.c*t+a.tx,a.b*e+a.d*t+a.ty,n,i,s,o),this}arcTo(e,t,n,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*n+o.c*i+o.tx,o.b*n+o.d*i+o.ty,s),this}arcToSvg(e,t,n,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(e,t,n,i,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(e,t,n,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*e+l.c*t+l.tx,l.b*e+l.d*t+l.ty,l.a*n+l.c*i+l.tx,l.b*n+l.d*i+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var e;return this._tick++,(e=this._activePath)==null||e.closePath(),this}ellipse(e,t,n,i){return this._tick++,this._activePath.ellipse(e,t,n,i,this._transform.clone()),this}circle(e,t,n){return this._tick++,this._activePath.circle(e,t,n,this._transform.clone()),this}path(e){return this._tick++,this._activePath.addPath(e,this._transform.clone()),this}lineTo(e,t){this._tick++;const n=this._transform;return this._activePath.lineTo(n.a*e+n.c*t+n.tx,n.b*e+n.d*t+n.ty),this}moveTo(e,t){this._tick++;const n=this._transform,i=this._activePath.instructions,s=n.a*e+n.c*t+n.tx,o=n.b*e+n.d*t+n.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(e,t,n,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*n+o.c*i+o.tx,o.b*n+o.d*i+o.ty,s),this}rect(e,t,n,i){return this._tick++,this._activePath.rect(e,t,n,i,this._transform.clone()),this}roundRect(e,t,n,i,s){return this._tick++,this._activePath.roundRect(e,t,n,i,s,this._transform.clone()),this}poly(e,t){return this._tick++,this._activePath.poly(e,t,this._transform.clone()),this}regularPoly(e,t,n,i,s=0,o){return this._tick++,this._activePath.regularPoly(e,t,n,i,s,o),this}roundPoly(e,t,n,i,s,o){return this._tick++,this._activePath.roundPoly(e,t,n,i,s,o),this}roundShape(e,t,n,i){return this._tick++,this._activePath.roundShape(e,t,n,i),this}filletRect(e,t,n,i,s){return this._tick++,this._activePath.filletRect(e,t,n,i,s),this}chamferRect(e,t,n,i,s,o){return this._tick++,this._activePath.chamferRect(e,t,n,i,s,o),this}star(e,t,n,i,s=0,o=0){return this._tick++,this._activePath.star(e,t,n,i,s,o,this._transform.clone()),this}svg(e){return this._tick++,Lv(e,this),this}restore(){const e=this._stateStack.pop();return e&&(this._transform=e.transform,this._fillStyle=e.fillStyle,this._strokeStyle=e.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(e){return this._transform.rotate(e),this}scale(e,t=e){return this._transform.scale(e,t),this}setTransform(e,t,n,i,s,o){return e instanceof ue?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,t,n,i,s,o),this)}transform(e,t,n,i,s,o){return e instanceof ue?(this._transform.append(e),this):(Mc.set(e,t,n,i,s,o),this._transform.append(Mc),this)}translate(e,t=e){return this._transform.translate(e,t),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const e=this._bounds;e.clear();for(let t=0;t<this.instructions.length;t++){const n=this.instructions[t],i=n.action;if(i==="fill"){const s=n.data;e.addBounds(s.path.bounds)}else if(i==="texture"){const s=n.data;e.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=n.data,o=s.style.width/2,a=s.path.bounds;e.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return e}containsPoint(e){var i;if(!this.bounds.containsPoint(e.x,e.y))return!1;const t=this.instructions;let n=!1;for(let s=0;s<t.length;s++){const o=t[s],a=o.data,l=a.path;if(!o.action||!l)continue;const h=a.style,f=l.shapePath.shapePrimitives;for(let p=0;p<f.length;p++){const x=f[p].shape;if(!h||!x)continue;const y=f[p].transform,b=y?y.applyInverse(e,Vv):e;o.action==="fill"?n=x.contains(b.x,b.y):n=x.strokeContains(b.x,b.y,h.width);const T=a.hole;if(T){const C=(i=T.shapePath)==null?void 0:i.shapePrimitives;if(C)for(let P=0;P<C.length;P++)C[P].shape.contains(b.x,b.y)&&(n=!1)}if(n)return!0}}return n}destroy(e=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const n=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(n),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(n)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};bu.defaultFillStyle={color:16777215,alpha:1,texture:Q.WHITE,matrix:null,fill:null};bu.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:Q.WHITE,matrix:null,fill:null};let gt=bu;const Bc=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function Pf(r){const e=[];let t=0;for(let n=0;n<Bc.length;n++){const i=`_${Bc[n]}`;e[t++]=r[i]}return t=Af(r._fill,e,t),t=jv(r._stroke,e,t),t=Xv(r.dropShadow,e,t),e.join("-")}function Af(r,e,t){var n;return r&&(e[t++]=r.color,e[t++]=r.alpha,e[t++]=(n=r.fill)==null?void 0:n.styleKey),t}function jv(r,e,t){return r&&(t=Af(r,e,t),e[t++]=r.width,e[t++]=r.alignment,e[t++]=r.cap,e[t++]=r.join,e[t++]=r.miterLimit),t}function Xv(r,e,t){return r&&(e[t++]=r.alpha,e[t++]=r.angle,e[t++]=r.blur,e[t++]=r.distance,e[t++]=de.shared.setValue(r.color).toNumber()),t}const Su=class fn extends it{constructor(e={}){super(),Yv(e);const t={...fn.defaultTextStyle,...e};for(const n in t){const i=n;this[i]=t[n]}this.update()}get align(){return this._align}set align(e){this._align=e,this.update()}get breakWords(){return this._breakWords}set breakWords(e){this._breakWords=e,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(e){e!==null&&typeof e=="object"?this._dropShadow=this._createProxy({...fn.defaultDropShadow,...e}):this._dropShadow=e?this._createProxy({...fn.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(e){this._fontFamily=e,this.update()}get fontSize(){return this._fontSize}set fontSize(e){typeof e=="string"?this._fontSize=parseInt(e,10):this._fontSize=e,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(e){this._fontStyle=e,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(e){this._fontVariant=e,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(e){this._fontWeight=e,this.update()}get leading(){return this._leading}set leading(e){this._leading=e,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(e){this._letterSpacing=e,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(e){this._lineHeight=e,this.update()}get padding(){return this._padding}set padding(e){this._padding=e,this.update()}get trim(){return this._trim}set trim(e){this._trim=e,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(e){this._textBaseline=e,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(e){this._whiteSpace=e,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(e){this._wordWrap=e,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(e){this._wordWrapWidth=e,this.update()}get fill(){return this._originalFill}set fill(e){e!==this._originalFill&&(this._originalFill=e,this._isFillStyle(e)&&(this._originalFill=this._createProxy({...gt.defaultFillStyle,...e},()=>{this._fill=Nr({...this._originalFill},gt.defaultFillStyle)})),this._fill=Nr(e===0?"black":e,gt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(e){e!==this._originalStroke&&(this._originalStroke=e,this._isFillStyle(e)&&(this._originalStroke=this._createProxy({...gt.defaultStrokeStyle,...e},()=>{this._stroke=Rs({...this._originalStroke},gt.defaultStrokeStyle)})),this._stroke=Rs(e,gt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Pf(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const e=fn.defaultTextStyle;for(const t in e)this[t]=e[t]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new fn({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(e=!1){var n,i,s,o;if(this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const a=typeof e=="boolean"?e:e==null?void 0:e.textureSource;(n=this._fill)!=null&&n.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(e,t){return new Proxy(e,{set:(n,i,s)=>(n[i]=s,t==null||t(i,s),this.update(),!0)})}_isFillStyle(e){return(e??null)!==null&&!(de.isColorLike(e)||e instanceof pi||e instanceof Xs)}};Su.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Su.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let qt=Su;function Yv(r){const e=r;if(typeof e.dropShadow=="boolean"&&e.dropShadow){const t=qt.defaultDropShadow;r.dropShadow={alpha:e.dropShadowAlpha??t.alpha,angle:e.dropShadowAngle??t.angle,blur:e.dropShadowBlur??t.blur,color:e.dropShadowColor??t.color,distance:e.dropShadowDistance??t.distance}}if(e.strokeThickness!==void 0){Z(ye,"strokeThickness is now a part of stroke");const t=e.stroke;let n={};if(de.isColorLike(t))n.color=t;else if(t instanceof pi||t instanceof Xs)n.fill=t;else if(Object.hasOwnProperty.call(t,"color")||Object.hasOwnProperty.call(t,"fill"))n=t;else throw new Error("Invalid stroke value.");r.stroke={...n,width:e.strokeThickness}}if(Array.isArray(e.fillGradientStops)){Z(ye,"gradient fill is now a fill pattern: `new FillGradient(...)`");let t;r.fontSize==null?r.fontSize=qt.defaultTextStyle.fontSize:typeof r.fontSize=="string"?t=parseInt(r.fontSize,10):t=r.fontSize;const n=new pi(0,0,0,t*1.7),i=e.fillGradientStops.map(s=>de.shared.setValue(s).toNumber());i.forEach((s,o)=>{const a=o/(i.length-1);n.addColorStop(a,s)}),r.fill={fill:n}}}class qv{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,t){const n=Ce.get().createCanvas();n.width=e,n.height=t;const i=n.getContext("2d");return{canvas:n,context:i}}getOptimalCanvasAndContext(e,t,n=1){e=Math.ceil(e*n-1e-6),t=Math.ceil(t*n-1e-6),e=wn(e),t=wn(t);const i=(e<<17)+(t<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let s=this._canvasPool[i].pop();return s||(s=this._createCanvasAndContext(e,t)),s}returnCanvasAndContext(e){const t=e.canvas,{width:n,height:i}=t,s=(n<<17)+(i<<1);this._canvasPool[s].push(e)}clear(){this._canvasPool={}}}const cr=new qv,Kv=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Is(r){const e=typeof r.fontSize=="number"?`${r.fontSize}px`:r.fontSize;let t=r.fontFamily;Array.isArray(r.fontFamily)||(t=r.fontFamily.split(","));for(let n=t.length-1;n>=0;n--){let i=t[n].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!Kv.includes(i)&&(i=`"${i}"`),t[n]=i}return`${r.fontStyle} ${r.fontVariant} ${r.fontWeight} ${e} ${t.join(",")}`}const ta={willReadFrequently:!0},zt=class ie{static get experimentalLetterSpacingSupported(){let e=ie._experimentalLetterSpacingSupported;if(e!==void 0){const t=Ce.get().getCanvasRenderingContext2D().prototype;e=ie._experimentalLetterSpacingSupported="letterSpacing"in t||"textLetterSpacing"in t}return e}constructor(e,t,n,i,s,o,a,l,h){this.text=e,this.style=t,this.width=n,this.height=i,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=h}static measureText(e=" ",t,n=ie._canvas,i=t.wordWrap){var F;const s=`${e}:${t.styleKey}`;if(ie._measurementCache[s])return ie._measurementCache[s];const o=Is(t),a=ie.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);const l=ie.__context;l.font=o;const f=(i?ie._wordWrap(e,t,n):e).split(/(?:\r\n|\r|\n)/),p=new Array(f.length);let x=0;for(let B=0;B<f.length;B++){const O=ie._measureText(f[B],t.letterSpacing,l);p[B]=O,x=Math.max(x,O)}const y=((F=t._stroke)==null?void 0:F.width)||0;let b=x+y;t.dropShadow&&(b+=t.dropShadow.distance);const T=t.lineHeight||a.fontSize;let C=Math.max(T,a.fontSize+y)+(f.length-1)*(T+t.leading);return t.dropShadow&&(C+=t.dropShadow.distance),new ie(e,t,b,C,f,p,T+t.leading,x,a)}static _measureText(e,t,n){let i=!1;ie.experimentalLetterSpacingSupported&&(ie.experimentalLetterSpacing?(n.letterSpacing=`${t}px`,n.textLetterSpacing=`${t}px`,i=!0):(n.letterSpacing="0px",n.textLetterSpacing="0px"));let s=n.measureText(e).width;return s>0&&(i?s-=t:s+=(ie.graphemeSegmenter(e).length-1)*t),s}static _wordWrap(e,t,n=ie._canvas){const i=n.getContext("2d",ta);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:h,whiteSpace:f}=t,p=ie._collapseSpaces(f),x=ie._collapseNewlines(f);let y=!p;const b=t.wordWrapWidth+h,T=ie._tokenize(e);for(let C=0;C<T.length;C++){let P=T[C];if(ie._isNewline(P)){if(!x){a+=ie._addLine(o),y=!p,o="",s=0;continue}P=" "}if(p){const B=ie.isBreakingSpace(P),O=ie.isBreakingSpace(o[o.length-1]);if(B&&O)continue}const F=ie._getFromCache(P,h,l,i);if(F>b)if(o!==""&&(a+=ie._addLine(o),o="",s=0),ie.canBreakWords(P,t.breakWords)){const B=ie.wordWrapSplit(P);for(let O=0;O<B.length;O++){let W=B[O],ne=W,m=1;for(;B[O+m];){const z=B[O+m];if(!ie.canBreakChars(ne,z,P,O,t.breakWords))W+=z;else break;ne=z,m++}O+=m-1;const V=ie._getFromCache(W,h,l,i);V+s>b&&(a+=ie._addLine(o),y=!1,o="",s=0),o+=W,s+=V}}else{o.length>0&&(a+=ie._addLine(o),o="",s=0);const B=C===T.length-1;a+=ie._addLine(P,!B),y=!1,o="",s=0}else F+s>b&&(y=!1,a+=ie._addLine(o),o="",s=0),(o.length>0||!ie.isBreakingSpace(P)||y)&&(o+=P,s+=F)}return a+=ie._addLine(o,!1),a}static _addLine(e,t=!0){return e=ie._trimRight(e),e=t?`${e}
`:e,e}static _getFromCache(e,t,n,i){let s=n[e];return typeof s!="number"&&(s=ie._measureText(e,t,i)+t,n[e]=s),s}static _collapseSpaces(e){return e==="normal"||e==="pre-line"}static _collapseNewlines(e){return e==="normal"}static _trimRight(e){if(typeof e!="string")return"";for(let t=e.length-1;t>=0;t--){const n=e[t];if(!ie.isBreakingSpace(n))break;e=e.slice(0,-1)}return e}static _isNewline(e){return typeof e!="string"?!1:ie._newlines.includes(e.charCodeAt(0))}static isBreakingSpace(e,t){return typeof e!="string"?!1:ie._breakingSpaces.includes(e.charCodeAt(0))}static _tokenize(e){const t=[];let n="";if(typeof e!="string")return t;for(let i=0;i<e.length;i++){const s=e[i],o=e[i+1];if(ie.isBreakingSpace(s,o)||ie._isNewline(s)){n!==""&&(t.push(n),n=""),t.push(s);continue}n+=s}return n!==""&&t.push(n),t}static canBreakWords(e,t){return t}static canBreakChars(e,t,n,i,s){return!0}static wordWrapSplit(e){return ie.graphemeSegmenter(e)}static measureFont(e){if(ie._fonts[e])return ie._fonts[e];const t=ie._context;t.font=e;const n=t.measureText(ie.METRICS_STRING+ie.BASELINE_SYMBOL),i={ascent:n.actualBoundingBoxAscent,descent:n.actualBoundingBoxDescent,fontSize:n.actualBoundingBoxAscent+n.actualBoundingBoxDescent};return ie._fonts[e]=i,i}static clearMetrics(e=""){e?delete ie._fonts[e]:ie._fonts={}}static get _canvas(){if(!ie.__canvas){let e;try{const t=new OffscreenCanvas(0,0),n=t.getContext("2d",ta);if(n!=null&&n.measureText)return ie.__canvas=t,t;e=Ce.get().createCanvas()}catch{e=Ce.get().createCanvas()}e.width=e.height=10,ie.__canvas=e}return ie.__canvas}static get _context(){return ie.__context||(ie.__context=ie._canvas.getContext("2d",ta)),ie.__context}};zt.METRICS_STRING="|ÉqÅ";zt.BASELINE_SYMBOL="M";zt.BASELINE_MULTIPLIER=1.4;zt.HEIGHT_MULTIPLIER=2;zt.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const r=new Intl.Segmenter;return e=>[...r.segment(e)].map(t=>t.segment)}return r=>[...r]})();zt.experimentalLetterSpacing=!1;zt._fonts={};zt._newlines=[10,13];zt._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];zt._measurementCache={};let Yt=zt;function Fs(r,e){if(r.texture===Q.WHITE&&!r.fill)return de.shared.setValue(r.color).setAlpha(r.alpha??1).toHexa();if(r.fill){if(r.fill instanceof Xs){const t=r.fill,n=e.createPattern(t.texture.source.resource,"repeat"),i=t.transform.copyTo(ue.shared);return i.scale(t.texture.frame.width,t.texture.frame.height),n.setTransform(i),n}else if(r.fill instanceof pi){const t=r.fill;if(t.type==="linear"){const n=e.createLinearGradient(t.x0,t.y0,t.x1,t.y1);return t.gradientStops.forEach(i=>{n.addColorStop(i.offset,de.shared.setValue(i.color).toHex())}),n}}}else{const t=e.createPattern(r.texture.source.resource,"repeat"),n=r.matrix.copyTo(ue.shared);return n.scale(r.texture.frame.width,r.texture.frame.height),t.setTransform(n),t}return fe("FillStyle not recognised",r),"red"}function Ef(r){if(r==="")return[];typeof r=="string"&&(r=[r]);const e=[];for(let t=0,n=r.length;t<n;t++){const i=r[t];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,l=o;a<=l;a++)e.push(String.fromCharCode(a))}else e.push(...Array.from(i))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}const Mf=class Bf extends cf{constructor(e){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const t={...Bf.defaultOptions,...e};this._textureSize=t.textureSize,this._mipmap=t.mipmap;const n=t.style.clone();t.overrideFill&&(n._fill.color=16777215,n._fill.alpha=1,n._fill.texture=Q.WHITE,n._fill.fill=null),this.applyFillAsTint=t.overrideFill;const i=n.fontSize;n.fontSize=this.baseMeasurementFontSize;const s=Is(n);t.overrideSize?n._stroke&&(n._stroke.width*=this.baseRenderedFontSize/i):n.fontSize=this.baseRenderedFontSize=i,this._style=n,this._skipKerning=t.skipKerning??!1,this.resolution=t.resolution??1,this._padding=t.padding??4,this.fontMetrics=Yt.measureFont(s),this.lineHeight=n.lineHeight||this.fontMetrics.fontSize||n.fontSize}ensureCharacters(e){var T,C;const t=Ef(e).filter(P=>!this._currentChars.includes(P)).filter((P,F,B)=>B.indexOf(P)===F);if(!t.length)return;this._currentChars=[...this._currentChars,...t];let n;this._currentPageIndex===-1?n=this._nextPage():n=this.pages[this._currentPageIndex];let{canvas:i,context:s}=n.canvasAndContext,o=n.texture.source;const a=this._style;let l=this._currentX,h=this._currentY;const f=this.baseRenderedFontSize/this.baseMeasurementFontSize,p=this._padding*f,x=a.fontStyle==="italic"?2:1;let y=0,b=!1;for(let P=0;P<t.length;P++){const F=t[P],B=Yt.measureText(F,a,i,!1);B.lineHeight=B.height;const O=x*B.width*f,W=B.height*f,ne=O+p*2,m=W+p*2;if(b=!1,F!==`
`&&F!=="\r"&&F!=="	"&&F!==" "&&(b=!0,y=Math.ceil(Math.max(m,y))),l+ne>this._textureSize&&(h+=y,y=m,l=0,h+y>this._textureSize)){o.update();const z=this._nextPage();i=z.canvasAndContext.canvas,s=z.canvasAndContext.context,o=z.texture.source,h=0}const V=O/f-(((T=a.dropShadow)==null?void 0:T.distance)??0)-(((C=a._stroke)==null?void 0:C.width)??0);if(this.chars[F]={id:F.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:V,kerning:{}},b){this._drawGlyph(s,B,l+p,h+p,f,a);const z=o.width*f,$=o.height*f,Me=new Le(l/z*o.width,h/$*o.height,ne/z*o.width,m/$*o.height);this.chars[F].texture=new Q({source:o,frame:Me}),l+=Math.ceil(ne)}}o.update(),this._currentX=l,this._currentY=h,this._skipKerning&&this._applyKerning(t,s)}get pageTextures(){return Z(ye,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(e,t){const n=this._measureCache;for(let i=0;i<e.length;i++){const s=e[i];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=n[s];l||(l=n[s]=t.measureText(s).width);let h=n[a];h||(h=n[a]=t.measureText(a).width);let f=t.measureText(s+a).width,p=f-(l+h);p&&(this.chars[s].kerning[a]=p),f=t.measureText(s+a).width,p=f-(l+h),p&&(this.chars[a].kerning[s]=p)}}}_nextPage(){this._currentPageIndex++;const e=this.resolution,t=cr.getOptimalCanvasAndContext(this._textureSize,this._textureSize,e);this._setupContext(t.context,this._style,e);const n=e*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new Q({source:new Xr({resource:t.canvas,resolution:n,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})}),s={canvasAndContext:t,texture:i};return this.pages[this._currentPageIndex]=s,s}_setupContext(e,t,n){t.fontSize=this.baseRenderedFontSize,e.scale(n,n),e.font=Is(t),t.fontSize=this.baseMeasurementFontSize,e.textBaseline=t.textBaseline;const i=t._stroke,s=(i==null?void 0:i.width)??0;if(i&&(e.lineWidth=s,e.lineJoin=i.join,e.miterLimit=i.miterLimit,e.strokeStyle=Fs(i,e)),t._fill&&(e.fillStyle=Fs(t._fill,e)),t.dropShadow){const o=t.dropShadow,a=de.shared.setValue(o.color).toArray(),l=o.blur*n,h=o.distance*n;e.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,e.shadowBlur=l,e.shadowOffsetX=Math.cos(o.angle)*h,e.shadowOffsetY=Math.sin(o.angle)*h}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}_drawGlyph(e,t,n,i,s,o){const a=t.text,l=t.fontProperties,h=o._stroke,f=((h==null?void 0:h.width)??0)*s,p=n+f/2,x=i-f/2,y=l.descent*s,b=t.lineHeight*s;o.stroke&&f&&e.strokeText(a,p,x+b-y),o._fill&&e.fillText(a,p,x+b-y)}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{canvasAndContext:t,texture:n}=this.pages[e];t.canvas.width=t.canvas.width,cr.returnCanvasAndContext(t),n.destroy(!0)}this.pages=null}};Mf.defaultOptions={textureSize:512,style:new qt,mipmap:!0};let Rc=Mf;function Rf(r,e,t,n){const i={width:0,height:0,offsetY:0,scale:e.fontSize/t.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};i.offsetY=t.baseLineOffset;let s=i.lines[0],o=null,a=!0;const l={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},h=b=>{const T=s.width;for(let C=0;C<l.index;C++){const P=b.positions[C];s.chars.push(b.chars[C]),s.charPositions.push(P+T)}s.width+=b.width,a=!1,l.width=0,l.index=0,l.chars.length=0},f=()=>{let b=s.chars.length-1;if(n){let T=s.chars[b];for(;T===" ";)s.width-=t.chars[T].xAdvance,T=s.chars[--b]}i.width=Math.max(i.width,s.width),s={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},a=!0,i.lines.push(s),i.height+=t.lineHeight},p=t.baseMeasurementFontSize/e.fontSize,x=e.letterSpacing*p,y=e.wordWrapWidth*p;for(let b=0;b<r.length+1;b++){let T;const C=b===r.length;C||(T=r[b]);const P=t.chars[T]||t.chars[" "];if(/(?:\s)/.test(T)||T==="\r"||T===`
`||C){if(!a&&e.wordWrap&&s.width+l.width-x>y?(f(),h(l),C||s.charPositions.push(0)):(l.start=s.width,h(l),C||s.charPositions.push(0)),T==="\r"||T===`
`)s.width!==0&&f();else if(!C){const W=P.xAdvance+(P.kerning[o]||0)+x;s.width+=W,s.spaceWidth=W,s.spacesIndex.push(s.charPositions.length),s.chars.push(T)}}else{const O=P.kerning[o]||0,W=P.xAdvance+O+x;l.positions[l.index++]=l.width+O,l.chars.push(T),l.width+=W}o=T}return f(),e.align==="center"?Zv(i):e.align==="right"?Qv(i):e.align==="justify"&&Jv(i),i}function Zv(r){for(let e=0;e<r.lines.length;e++){const t=r.lines[e],n=r.width/2-t.width/2;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=n}}function Qv(r){for(let e=0;e<r.lines.length;e++){const t=r.lines[e],n=r.width-t.width;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=n}}function Jv(r){const e=r.width;for(let t=0;t<r.lines.length;t++){const n=r.lines[t];let i=0,s=n.spacesIndex[i++],o=0;const a=n.spacesIndex.length,h=(e-n.width)/a;for(let f=0;f<n.charPositions.length;f++)f===s&&(s=n.spacesIndex[i++],o+=h),n.charPositions[f]+=o}}let es=0;class ey{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(e,t){var o;let n=`${t.fontFamily}-bitmap`,i=!0;if(t._fill.fill&&!t._stroke)n+=t._fill.fill.styleKey,i=!1;else if(t._stroke||t.dropShadow){let a=t.styleKey;a=a.substring(0,a.lastIndexOf("-")),n=`${a}-bitmap`,i=!1}if(!Ge.has(n)){const a=new Rc({style:t,overrideFill:i,overrideSize:!0,...this.defaultOptions});es++,es>50&&fe("BitmapText",`You have dynamically created ${es} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),a.once("destroy",()=>{es--,Ge.remove(n)}),Ge.set(n,a)}const s=Ge.get(n);return(o=s.ensureCharacters)==null||o.call(s,e),s}getLayout(e,t,n=!0){const i=this.getFont(e,t);return Rf([...e],t,i,n)}measureText(e,t,n=!0){return this.getLayout(e,t,n)}install(...e){var h,f,p,x;let t=e[0];typeof t=="string"&&(t={name:t,style:e[1],chars:(h=e[2])==null?void 0:h.chars,resolution:(f=e[2])==null?void 0:f.resolution,padding:(p=e[2])==null?void 0:p.padding,skipKerning:(x=e[2])==null?void 0:x.skipKerning},Z(ye,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const n=t==null?void 0:t.name;if(!n)throw new Error("[BitmapFontManager] Property `name` is required.");t={...this.defaultOptions,...t};const i=t.style,s=i instanceof qt?i:new qt(i),o=s._fill.fill!==null&&s._fill.fill!==void 0,a=new Rc({style:s,overrideFill:o,skipKerning:t.skipKerning,padding:t.padding,resolution:t.resolution,overrideSize:!1}),l=Ef(t.chars);return a.ensureCharacters(l.join("")),Ge.set(`${n}-bitmap`,a),a.once("destroy",()=>Ge.remove(`${n}-bitmap`)),a}uninstall(e){const t=`${e}-bitmap`,n=Ge.get(t);n&&(Ge.remove(t),n.destroy())}}const Os=new ey;class If extends cf{constructor(e,t){super();const{textures:n,data:i}=e;Object.keys(i.pages).forEach(s=>{const o=i.pages[parseInt(s,10)],a=n[o.id];this.pages.push({texture:a})}),Object.keys(i.chars).forEach(s=>{const o=i.chars[s],{frame:a,source:l}=n[o.page],h=new Le(o.x+a.x,o.y+a.y,o.width,o.height),f=new Q({source:l,frame:h});this.chars[s]={id:s.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:f}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=t}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:t}=this.pages[e];t.destroy(!0)}this.pages=null}static install(e){Os.install(e)}static uninstall(e){Os.uninstall(e)}}const ra={test(r){return typeof r=="string"&&r.startsWith("info face=")},parse(r){const e=r.match(/^[a-z]+\s+.+$/gm),t={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const p in e){const x=e[p].match(/^[a-z]+/gm)[0],y=e[p].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),b={};for(const T in y){const C=y[T].split("="),P=C[0],F=C[1].replace(/"/gm,""),B=parseFloat(F),O=isNaN(B)?F:B;b[P]=O}t[x].push(b)}const n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=t.info,[s]=t.common,[o]=t.distanceField??[];o&&(n.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),n.fontSize=parseInt(i.size,10),n.fontFamily=i.face,n.lineHeight=parseInt(s.lineHeight,10);const a=t.page;for(let p=0;p<a.length;p++)n.pages.push({id:parseInt(a[p].id,10)||0,file:a[p].file});const l={};n.baseLineOffset=n.lineHeight-parseInt(s.base,10);const h=t.char;for(let p=0;p<h.length;p++){const x=h[p],y=parseInt(x.id,10);let b=x.letter??x.char??String.fromCharCode(y);b==="space"&&(b=" "),l[y]=b,n.chars[b]={id:y,page:parseInt(x.page,10)||0,x:parseInt(x.x,10),y:parseInt(x.y,10),width:parseInt(x.width,10),height:parseInt(x.height,10),xOffset:parseInt(x.xoffset,10),yOffset:parseInt(x.yoffset,10),xAdvance:parseInt(x.xadvance,10),kerning:{}}}const f=t.kerning||[];for(let p=0;p<f.length;p++){const x=parseInt(f[p].first,10),y=parseInt(f[p].second,10),b=parseInt(f[p].amount,10);n.chars[l[y]].kerning[l[x]]=b}return n}},Ic={test(r){const e=r;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(r){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},t=r.getElementsByTagName("info")[0],n=r.getElementsByTagName("common")[0],i=r.getElementsByTagName("distanceField")[0];i&&(e.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const s=r.getElementsByTagName("page"),o=r.getElementsByTagName("char"),a=r.getElementsByTagName("kerning");e.fontSize=parseInt(t.getAttribute("size"),10),e.fontFamily=t.getAttribute("face"),e.lineHeight=parseInt(n.getAttribute("lineHeight"),10);for(let h=0;h<s.length;h++)e.pages.push({id:parseInt(s[h].getAttribute("id"),10)||0,file:s[h].getAttribute("file")});const l={};e.baseLineOffset=e.lineHeight-parseInt(n.getAttribute("base"),10);for(let h=0;h<o.length;h++){const f=o[h],p=parseInt(f.getAttribute("id"),10);let x=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(p);x==="space"&&(x=" "),l[p]=x,e.chars[x]={id:p,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let h=0;h<a.length;h++){const f=parseInt(a[h].getAttribute("first"),10),p=parseInt(a[h].getAttribute("second"),10),x=parseInt(a[h].getAttribute("amount"),10);e.chars[l[p]].kerning[l[f]]=x}return e}},Fc={test(r){return typeof r=="string"&&r.includes("<font>")?Ic.test(Ce.get().parseXML(r)):!1},parse(r){return Ic.parse(Ce.get().parseXML(r))}},ty=[".xml",".fnt"],ry={extension:{type:R.CacheParser,name:"cacheBitmapFont"},test:r=>r instanceof If,getCacheableAssets(r,e){const t={};return r.forEach(n=>{t[n]=e,t[`${n}-bitmap`]=e}),t[`${e.fontFamily}-bitmap`]=e,t}},ny={extension:{type:R.LoadParser,priority:fr.Normal},name:"loadBitmapFont",test(r){return ty.includes(at.extname(r).toLowerCase())},async testParse(r){return ra.test(r)||Fc.test(r)},async parse(r,e,t){const n=ra.test(r)?ra.parse(r):Fc.parse(r),{src:i}=e,{pages:s}=n,o=[],a=n.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let p=0;p<s.length;++p){const x=s[p].file;let y=at.join(at.dirname(i),x);y=Sa(y,i),o.push({src:y,data:a})}const l=await t.load(o),h=o.map(p=>l[p.src]);return new If({data:n,textures:h},i)},async load(r,e){return await(await Ce.get().fetch(r)).text()},async unload(r,e,t){await Promise.all(r.pages.map(n=>t.unload(n.texture.source._sourceOrigin))),r.destroy()}};class iy{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(t=>{this._assetList.push(t)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<t;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const sy={extension:{type:R.CacheParser,name:"cacheTextureArray"},test:r=>Array.isArray(r)&&r.every(e=>e instanceof Q),getCacheableAssets:(r,e)=>{const t={};return r.forEach(n=>{e.forEach((i,s)=>{t[n+(s===0?"":s+1)]=i})}),t}};async function Ff(r){if("Image"in globalThis)return new Promise(e=>{const t=new Image;t.onload=()=>{e(!0)},t.onerror=()=>{e(!1)},t.src=r});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(r)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const oy={extension:{type:R.DetectionParser,priority:1},test:async()=>Ff("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async r=>[...r,"avif"],remove:async r=>r.filter(e=>e!=="avif")},Oc=["png","jpg","jpeg"],ay={extension:{type:R.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async r=>[...r,...Oc],remove:async r=>r.filter(e=>!Oc.includes(e))},uy="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Tu(r){return uy?!1:document.createElement("video").canPlayType(r)!==""}const ly={extension:{type:R.DetectionParser,priority:0},test:async()=>Tu("video/mp4"),add:async r=>[...r,"mp4","m4v"],remove:async r=>r.filter(e=>e!=="mp4"&&e!=="m4v")},cy={extension:{type:R.DetectionParser,priority:0},test:async()=>Tu("video/ogg"),add:async r=>[...r,"ogv"],remove:async r=>r.filter(e=>e!=="ogv")},hy={extension:{type:R.DetectionParser,priority:0},test:async()=>Tu("video/webm"),add:async r=>[...r,"webm"],remove:async r=>r.filter(e=>e!=="webm")},fy={extension:{type:R.DetectionParser,priority:0},test:async()=>Ff("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async r=>[...r,"webp"],remove:async r=>r.filter(e=>e!=="webp")};class dy{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,n)=>(this._parsersValidated=!1,e[t]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){const n={promise:null,parser:null};return n.promise=(async()=>{var o,a;let i=null,s=null;if(t.loadParser&&(s=this._parserHash[t.loadParser],s||fe(`[Assets] specified load parser "${t.loadParser}" not found while loading ${e}`)),!s){for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];if(h.load&&((o=h.test)!=null&&o.call(h,e,t,this))){s=h;break}}if(!s)return fe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(e,t,this),n.parser=s;for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];h.parse&&h.parse&&await((a=h.testParse)==null?void 0:a.call(h,i,t,this))&&(i=await h.parse(i,t,this)||i,n.parser=h)}return i})(),n}async load(e,t){this._parsersValidated||this._validateParsers();let n=0;const i={},s=Es(e),o=kt(e,h=>({alias:[h],src:h,data:{}})),a=o.length,l=o.map(async h=>{const f=at.toAbsolute(h.src);if(!i[h.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,h)),i[h.src]=await this.promiseCache[f].promise,t&&t(++n/a)}catch(p){throw delete this.promiseCache[f],delete i[h.src],new Error(`[Loader.load] Failed to load ${f}.
${p}`)}});return await Promise.all(l),s?i[o[0].src]:i}async unload(e){const n=kt(e,i=>({alias:[i],src:i})).map(async i=>{var a,l;const s=at.toAbsolute(i.src),o=this.promiseCache[s];if(o){const h=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,h,i,this))}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,t)=>(t.name?e[t.name]&&fe(`[Assets] loadParser name conflict "${t.name}"`):fe("[Assets] loadParser should have a name"),{...e,[t.name]:t}),{})}}function Rn(r,e){if(Array.isArray(e)){for(const t of e)if(r.startsWith(`data:${t}`))return!0;return!1}return r.startsWith(`data:${e}`)}function In(r,e){const t=r.split("?")[0],n=at.extname(t).toLowerCase();return Array.isArray(e)?e.includes(n):n===e}const py=".json",my="application/json",gy={extension:{type:R.LoadParser,priority:fr.Low},name:"loadJson",test(r){return Rn(r,my)||In(r,py)},async load(r){return await(await Ce.get().fetch(r)).json()}},xy=".txt",_y="text/plain",vy={name:"loadTxt",extension:{type:R.LoadParser,priority:fr.Low,name:"loadTxt"},test(r){return Rn(r,_y)||In(r,xy)},async load(r){return await(await Ce.get().fetch(r)).text()}},yy=["normal","bold","100","200","300","400","500","600","700","800","900"],by=[".ttf",".otf",".woff",".woff2"],Sy=["font/ttf","font/otf","font/woff","font/woff2"],Ty=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Cy(r){const e=at.extname(r),i=at.basename(r,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=i.length>0;for(const a of i)if(!a.match(Ty)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const wy=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Py(r){return wy.test(r)?r:encodeURI(r)}const Ay={extension:{type:R.LoadParser,priority:fr.Low},name:"loadWebFont",test(r){return Rn(r,Sy)||In(r,by)},async load(r,e){var n,i,s;const t=Ce.get().getFontFaceSet();if(t){const o=[],a=((n=e.data)==null?void 0:n.family)??Cy(r),l=((s=(i=e.data)==null?void 0:i.weights)==null?void 0:s.filter(f=>yy.includes(f)))??["normal"],h=e.data??{};for(let f=0;f<l.length;f++){const p=l[f],x=new FontFace(a,`url(${Py(r)})`,{...h,weight:p});await x.load(),t.add(x),o.push(x)}return Ge.set(`${a}-and-url`,{url:r,fontFaces:o}),o.length===1?o[0]:o}return fe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(r){(Array.isArray(r)?r:[r]).forEach(e=>{Ge.remove(e.family),Ce.get().getFontFaceSet().delete(e)})}};function Cu(r,e=1){var n;const t=(n=Mn.RETINA_PREFIX)==null?void 0:n.exec(r);return t?parseFloat(t[1]):e}function wu(r,e,t){r.label=t,r._sourceOrigin=t;const n=new Q({source:r,label:t}),i=()=>{delete e.promiseCache[t],Ge.has(t)&&Ge.remove(t)};return n.source.once("destroy",()=>{e.promiseCache[t]&&(fe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),n.once("destroy",()=>{r.destroyed||(fe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),n}const Ey=".svg",My="image/svg+xml",By={extension:{type:R.LoadParser,priority:fr.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(r){return Rn(r,My)||In(r,Ey)},async load(r,e,t){return e.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Iy(r):Ry(r,e,t,this.config.crossOrigin)},unload(r){r.destroy(!0)}};async function Ry(r,e,t,n){var C,P,F;const s=await(await Ce.get().fetch(r)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=n,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),h=l.getContext("2d"),f=((C=e.data)==null?void 0:C.resolution)||Cu(r),p=((P=e.data)==null?void 0:P.width)??a.width,x=((F=e.data)==null?void 0:F.height)??a.height;l.width=p*f,l.height=x*f,h.drawImage(a,0,0,p*f,x*f);const{parseAsGraphicsContext:y,...b}=e.data,T=new Xr({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:f,...b});return wu(T,t,r)}async function Iy(r){const t=await(await Ce.get().fetch(r)).text(),n=new gt;return n.svg(t),n}const Fy=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let bn=null,Da=class{constructor(){bn||(bn=URL.createObjectURL(new Blob([Fy],{type:"application/javascript"}))),this.worker=new Worker(bn)}};Da.revokeObjectURL=function(){bn&&(URL.revokeObjectURL(bn),bn=null)};const Oy=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let Sn=null;class Of{constructor(){Sn||(Sn=URL.createObjectURL(new Blob([Oy],{type:"application/javascript"}))),this.worker=new Worker(Sn)}}Of.revokeObjectURL=function(){Sn&&(URL.revokeObjectURL(Sn),Sn=null)};let Uc=0,na;class Uy{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:t}=new Da;t.addEventListener("message",n=>{t.terminate(),Da.revokeObjectURL(),e(n.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,t){var n;return this._run("loadImageBitmap",[e,(n=t==null?void 0:t.data)==null?void 0:n.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){na===void 0&&(na=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<na&&(this._createdWorkers++,e=new Of().worker,e.addEventListener("message",t=>{this._complete(t.data),this._returnWorker(t.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,t){await this._initWorkers();const n=new Promise((i,s)=>{this._queue.push({id:e,arguments:t,resolve:i,reject:s})});return this._next(),n}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const t=this._queue.pop(),n=t.id;this._resolveHash[Uc]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:Uc++,id:n})}}const kc=new Uy,ky=[".jpeg",".jpg",".png",".webp",".avif"],Dy=["image/jpeg","image/png","image/webp","image/avif"];async function Gy(r,e){var i;const t=await Ce.get().fetch(r);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${r}: ${t.status} ${t.statusText}`);const n=await t.blob();return((i=e==null?void 0:e.data)==null?void 0:i.alphaMode)==="premultiplied-alpha"?createImageBitmap(n,{premultiplyAlpha:"none"}):createImageBitmap(n)}const Uf={name:"loadTextures",extension:{type:R.LoadParser,priority:fr.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(r){return Rn(r,Dy)||In(r,ky)},async load(r,e,t){var s;let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await kc.isImageBitmapSupported()?n=await kc.loadImageBitmap(r,e):n=await Gy(r,e):n=await new Promise(o=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=r,n.complete?o(n):n.onload=()=>{o(n)}});const i=new Xr({resource:n,alphaMode:"premultiply-alpha-on-upload",resolution:((s=e.data)==null?void 0:s.resolution)||Cu(r),...e.data});return wu(i,t,r)},unload(r){r.destroy(!0)}},kf=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],zy=kf.map(r=>`video/${r.substring(1)}`);function Ly(r,e,t){t===void 0&&!e.startsWith("data:")?r.crossOrigin=Hy(e):t!==!1&&(r.crossOrigin=typeof t=="string"?t:"anonymous")}function Ny(r){return new Promise((e,t)=>{r.addEventListener("canplaythrough",n),r.addEventListener("error",i),r.load();function n(){s(),e()}function i(o){s(),t(o)}function s(){r.removeEventListener("canplaythrough",n),r.removeEventListener("error",i)}})}function Hy(r,e=globalThis.location){if(r.startsWith("data:"))return"";e=e||globalThis.location;const t=new URL(r,document.baseURI);return t.hostname!==e.hostname||t.port!==e.port||t.protocol!==e.protocol?"anonymous":""}const $y={name:"loadVideo",extension:{type:R.LoadParser,name:"loadVideo"},test(r){const e=Rn(r,zy),t=In(r,kf);return e||t},async load(r,e,t){var l,h;const n={...ls.defaultOptions,resolution:((l=e.data)==null?void 0:l.resolution)||Cu(r),alphaMode:((h=e.data)==null?void 0:h.alphaMode)||await Lh(),...e.data},i=document.createElement("video"),s={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(s).forEach(f=>{const p=s[f];p!==void 0&&i.setAttribute(f,p)}),n.muted===!0&&(i.muted=!0),Ly(i,r,n.crossorigin);const o=document.createElement("source");let a;if(r.startsWith("data:"))a=r.slice(5,r.indexOf(";"));else if(!r.startsWith("blob:")){const f=r.split("?")[0].slice(r.lastIndexOf(".")+1).toLowerCase();a=ls.MIME_TYPES[f]||`video/${f}`}return o.src=r,a&&(o.type=a),new Promise(f=>{const p=async()=>{const x=new ls({...n,resource:i});i.removeEventListener("canplay",p),e.data.preload&&await Ny(i),f(wu(x,t,r))};i.addEventListener("canplay",p),i.appendChild(o)})},unload(r){r.destroy(!0)}},Df={extension:{type:R.ResolveParser,name:"resolveTexture"},test:Uf.test,parse:r=>{var e;return{resolution:parseFloat(((e=Mn.RETINA_PREFIX.exec(r))==null?void 0:e[1])??"1"),format:r.split(".").pop(),src:r}}},Wy={extension:{type:R.ResolveParser,priority:-2,name:"resolveJson"},test:r=>Mn.RETINA_PREFIX.test(r)&&r.endsWith(".json"),parse:Df.parse};class Vy{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Mn,this.loader=new dy,this.cache=Ge,this._backgroundLoader=new iy(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var s,o;if(this._initialized){fe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let a=e.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const t=((s=e.texturePreference)==null?void 0:s.resolution)??1,n=typeof t=="number"?[t]:t,i=await this._detectFormats({preferredFormats:(o=e.texturePreference)==null?void 0:o.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:n}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();const n=Es(e),i=kt(e).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(h=>!this.resolver.hasKey(h))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,t);return n?o[i[0]]:o}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let n=!1;typeof e=="string"&&(n=!0,e=[e]);const i=this.resolver.resolveBundle(e),s={},o=Object.keys(i);let a=0,l=0;const h=()=>{t==null||t(++a/l)},f=o.map(p=>{const x=i[p];return l+=Object.keys(x).length,this._mapLoadToResolve(x,h).then(y=>{s[p]=y})});return await Promise.all(f),n?s[e[0]]:s}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolveBundle(e);Object.values(t).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Ge.get(e);const t={};for(let n=0;n<e.length;n++)t[n]=Ge.get(e[n]);return t}async _mapLoadToResolve(e,t){const n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const i=await this.loader.load(n,t);this._backgroundLoader.active=!0;const s={};return n.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(h=>{s[h]=a}),Ge.set(l,a)}),s}async unload(e){this._initialized||await this.init();const t=kt(e).map(i=>typeof i!="string"?i.src:i),n=this.resolver.resolve(t);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=kt(e);const t=this.resolver.resolveBundle(e),n=Object.keys(t).map(i=>this._unloadFromResolved(t[i]));await Promise.all(n)}async _unloadFromResolved(e){const t=Object.values(e);t.forEach(n=>{Ge.remove(n.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const n of e.detections)e.skipDetections||await n.test()?t=await n.add(t):e.skipDetections||(t=await n.remove(t));return t=t.filter((n,i)=>t.indexOf(n)===i),t}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(n=>n in e).forEach(n=>{t.config[n]=e[n]})})}}const ts=new Vy;ke.handleByList(R.LoadParser,ts.loader.parsers).handleByList(R.ResolveParser,ts.resolver.parsers).handleByList(R.CacheParser,ts.cache.parsers).handleByList(R.DetectionParser,ts.detections);ke.add(sy,ay,oy,fy,ly,cy,hy,gy,vy,Ay,By,Uf,$y,ny,ry,Df,Wy);const Dc={loader:R.LoadParser,resolver:R.ResolveParser,cache:R.CacheParser,detection:R.DetectionParser};ke.handle(R.Asset,r=>{const e=r.ref;Object.entries(Dc).filter(([t])=>!!e[t]).forEach(([t,n])=>ke.add(Object.assign(e[t],{extension:e[t].extension??n})))},r=>{const e=r.ref;Object.keys(Dc).filter(t=>!!e[t]).forEach(t=>ke.remove(e[t]))});class jy{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}init(e){this.removeTickerListener(),this.events=e,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(e){this._pauseUpdate=e}addTickerListener(){this._tickerAdded||!this.domElement||(Xe.system.add(this._tickerUpdate,this,wr.INTERACTION),this._tickerAdded=!0)}removeTickerListener(){this._tickerAdded&&(Xe.system.remove(this._tickerUpdate,this),this._tickerAdded=!1)}pointerMoved(){this._didMove=!0}_update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove){this._didMove=!1;return}const e=this.events._rootPointerEvent;this.events.supportsTouchEvents&&e.pointerType==="touch"||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:e.clientX,clientY:e.clientY,pointerType:e.pointerType,pointerId:e.pointerId}))}_tickerUpdate(e){this._deltaTime+=e.deltaTime,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this._update())}}const yr=new jy;class Us extends Si{constructor(){super(...arguments),this.client=new ze,this.movement=new ze,this.offset=new ze,this.global=new ze,this.screen=new ze}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(e,t,n){return e.worldTransform.applyInverse(n||this.global,t)}getModifierState(e){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(e)}initMouseEvent(e,t,n,i,s,o,a,l,h,f,p,x,y,b,T){throw new Error("Method not implemented.")}}class Ut extends Us{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}getCoalescedEvents(){return this.type==="pointermove"||this.type==="mousemove"||this.type==="touchmove"?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class En extends Us{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}En.DOM_DELTA_PIXEL=0;En.DOM_DELTA_LINE=1;En.DOM_DELTA_PAGE=2;const Xy=2048,Yy=new ze,qn=new ze;class qy{constructor(e){this.dispatch=new it,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=e,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}addEventMapping(e,t){this.mappingTable[e]||(this.mappingTable[e]=[]),this.mappingTable[e].push({fn:t,priority:0}),this.mappingTable[e].sort((n,i)=>n.priority-i.priority)}dispatchEvent(e,t){e.propagationStopped=!1,e.propagationImmediatelyStopped=!1,this.propagate(e,t),this.dispatch.emit(t||e.type,e)}mapEvent(e){if(!this.rootTarget)return;const t=this.mappingTable[e.type];if(t)for(let n=0,i=t.length;n<i;n++)t[n].fn(e);else fe(`[EventBoundary]: Event mapping not defined for ${e.type}`)}hitTest(e,t){yr.pauseUpdate=!0;const i=this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive",s=this[i](this.rootTarget,this.rootTarget.eventMode,Yy.set(e,t),this.hitTestFn,this.hitPruneFn);return s&&s[0]}propagate(e,t){if(!e.target)return;const n=e.composedPath();e.eventPhase=e.CAPTURING_PHASE;for(let i=0,s=n.length-1;i<s;i++)if(e.currentTarget=n[i],this.notifyTarget(e,t),e.propagationStopped||e.propagationImmediatelyStopped)return;if(e.eventPhase=e.AT_TARGET,e.currentTarget=e.target,this.notifyTarget(e,t),!(e.propagationStopped||e.propagationImmediatelyStopped)){e.eventPhase=e.BUBBLING_PHASE;for(let i=n.length-2;i>=0;i--)if(e.currentTarget=n[i],this.notifyTarget(e,t),e.propagationStopped||e.propagationImmediatelyStopped)return}}all(e,t,n=this._allInteractiveElements){if(n.length===0)return;e.eventPhase=e.BUBBLING_PHASE;const i=Array.isArray(t)?t:[t];for(let s=n.length-1;s>=0;s--)i.forEach(o=>{e.currentTarget=n[s],this.notifyTarget(e,o)})}propagationPath(e){const t=[e];for(let n=0;n<Xy&&e!==this.rootTarget&&e.parent;n++){if(!e.parent)throw new Error("Cannot find propagation path to disconnected target");t.push(e.parent),e=e.parent}return t.reverse(),t}hitTestMoveRecursive(e,t,n,i,s,o=!1){let a=!1;if(this._interactivePrune(e))return null;if((e.eventMode==="dynamic"||t==="dynamic")&&(yr.pauseUpdate=!1),e.interactiveChildren&&e.children){const f=e.children;for(let p=f.length-1;p>=0;p--){const x=f[p],y=this.hitTestMoveRecursive(x,this._isInteractive(t)?t:x.eventMode,n,i,s,o||s(e,n));if(y){if(y.length>0&&!y[y.length-1].parent)continue;const b=e.isInteractive();(y.length>0||b)&&(b&&this._allInteractiveElements.push(e),y.push(e)),this._hitElements.length===0&&(this._hitElements=y),a=!0}}}const l=this._isInteractive(t),h=e.isInteractive();return h&&h&&this._allInteractiveElements.push(e),o||this._hitElements.length>0?null:a?this._hitElements:l&&!s(e,n)&&i(e,n)?h?[e]:[]:null}hitTestRecursive(e,t,n,i,s){if(this._interactivePrune(e)||s(e,n))return null;if((e.eventMode==="dynamic"||t==="dynamic")&&(yr.pauseUpdate=!1),e.interactiveChildren&&e.children){const l=e.children,h=n;for(let f=l.length-1;f>=0;f--){const p=l[f],x=this.hitTestRecursive(p,this._isInteractive(t)?t:p.eventMode,h,i,s);if(x){if(x.length>0&&!x[x.length-1].parent)continue;const y=e.isInteractive();return(x.length>0||y)&&x.push(e),x}}}const o=this._isInteractive(t),a=e.isInteractive();return o&&i(e,n)?a?[e]:[]:null}_isInteractive(e){return e==="static"||e==="dynamic"}_interactivePrune(e){return!e||!e.visible||!e.renderable||!e.includeInBuild||!e.measurable||e.eventMode==="none"||e.eventMode==="passive"&&!e.interactiveChildren}hitPruneFn(e,t){if(e.hitArea&&(e.worldTransform.applyInverse(t,qn),!e.hitArea.contains(qn.x,qn.y)))return!0;if(e.effects&&e.effects.length)for(let n=0;n<e.effects.length;n++){const i=e.effects[n];if(i.containsPoint&&!i.containsPoint(t,this.hitTestFn))return!0}return!1}hitTestFn(e,t){return e.hitArea?!0:e!=null&&e.containsPoint?(e.worldTransform.applyInverse(t,qn),e.containsPoint(qn)):!1}notifyTarget(e,t){var s,o;if(!e.currentTarget.isInteractive())return;t=t??e.type;const n=`on${t}`;(o=(s=e.currentTarget)[n])==null||o.call(s,e);const i=e.eventPhase===e.CAPTURING_PHASE||e.eventPhase===e.AT_TARGET?`${t}capture`:t;this._notifyListeners(e,i),e.eventPhase===e.AT_TARGET&&this._notifyListeners(e,t)}mapPointerDown(e){if(!(e instanceof Ut)){fe("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.createPointerEvent(e);if(this.dispatchEvent(t,"pointerdown"),t.pointerType==="touch")this.dispatchEvent(t,"touchstart");else if(t.pointerType==="mouse"||t.pointerType==="pen"){const i=t.button===2;this.dispatchEvent(t,i?"rightdown":"mousedown")}const n=this.trackingData(e.pointerId);n.pressTargetsByButton[e.button]=t.composedPath(),this.freeEvent(t)}mapPointerMove(e){var l,h;if(!(e instanceof Ut)){fe("EventBoundary cannot map a non-pointer event as a pointer event");return}this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;const t=this.createPointerEvent(e);this._isPointerMoveEvent=!1;const n=t.pointerType==="mouse"||t.pointerType==="pen",i=this.trackingData(e.pointerId),s=this.findMountedTarget(i.overTargets);if(((l=i.overTargets)==null?void 0:l.length)>0&&s!==t.target){const f=e.type==="mousemove"?"mouseout":"pointerout",p=this.createPointerEvent(e,f,s);if(this.dispatchEvent(p,"pointerout"),n&&this.dispatchEvent(p,"mouseout"),!t.composedPath().includes(s)){const x=this.createPointerEvent(e,"pointerleave",s);for(x.eventPhase=x.AT_TARGET;x.target&&!t.composedPath().includes(x.target);)x.currentTarget=x.target,this.notifyTarget(x),n&&this.notifyTarget(x,"mouseleave"),x.target=x.target.parent;this.freeEvent(x)}this.freeEvent(p)}if(s!==t.target){const f=e.type==="mousemove"?"mouseover":"pointerover",p=this.clonePointerEvent(t,f);this.dispatchEvent(p,"pointerover"),n&&this.dispatchEvent(p,"mouseover");let x=s==null?void 0:s.parent;for(;x&&x!==this.rootTarget.parent&&x!==t.target;)x=x.parent;if(!x||x===this.rootTarget.parent){const b=this.clonePointerEvent(t,"pointerenter");for(b.eventPhase=b.AT_TARGET;b.target&&b.target!==s&&b.target!==this.rootTarget.parent;)b.currentTarget=b.target,this.notifyTarget(b),n&&this.notifyTarget(b,"mouseenter"),b.target=b.target.parent;this.freeEvent(b)}this.freeEvent(p)}const o=[],a=this.enableGlobalMoveEvents??!0;this.moveOnAll?o.push("pointermove"):this.dispatchEvent(t,"pointermove"),a&&o.push("globalpointermove"),t.pointerType==="touch"&&(this.moveOnAll?o.splice(1,0,"touchmove"):this.dispatchEvent(t,"touchmove"),a&&o.push("globaltouchmove")),n&&(this.moveOnAll?o.splice(1,0,"mousemove"):this.dispatchEvent(t,"mousemove"),a&&o.push("globalmousemove"),this.cursor=(h=t.target)==null?void 0:h.cursor),o.length>0&&this.all(t,o),this._allInteractiveElements.length=0,this._hitElements.length=0,i.overTargets=t.composedPath(),this.freeEvent(t)}mapPointerOver(e){var o;if(!(e instanceof Ut)){fe("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId),n=this.createPointerEvent(e),i=n.pointerType==="mouse"||n.pointerType==="pen";this.dispatchEvent(n,"pointerover"),i&&this.dispatchEvent(n,"mouseover"),n.pointerType==="mouse"&&(this.cursor=(o=n.target)==null?void 0:o.cursor);const s=this.clonePointerEvent(n,"pointerenter");for(s.eventPhase=s.AT_TARGET;s.target&&s.target!==this.rootTarget.parent;)s.currentTarget=s.target,this.notifyTarget(s),i&&this.notifyTarget(s,"mouseenter"),s.target=s.target.parent;t.overTargets=n.composedPath(),this.freeEvent(n),this.freeEvent(s)}mapPointerOut(e){if(!(e instanceof Ut)){fe("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId);if(t.overTargets){const n=e.pointerType==="mouse"||e.pointerType==="pen",i=this.findMountedTarget(t.overTargets),s=this.createPointerEvent(e,"pointerout",i);this.dispatchEvent(s),n&&this.dispatchEvent(s,"mouseout");const o=this.createPointerEvent(e,"pointerleave",i);for(o.eventPhase=o.AT_TARGET;o.target&&o.target!==this.rootTarget.parent;)o.currentTarget=o.target,this.notifyTarget(o),n&&this.notifyTarget(o,"mouseleave"),o.target=o.target.parent;t.overTargets=null,this.freeEvent(s),this.freeEvent(o)}this.cursor=null}mapPointerUp(e){if(!(e instanceof Ut)){fe("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=performance.now(),n=this.createPointerEvent(e);if(this.dispatchEvent(n,"pointerup"),n.pointerType==="touch")this.dispatchEvent(n,"touchend");else if(n.pointerType==="mouse"||n.pointerType==="pen"){const a=n.button===2;this.dispatchEvent(n,a?"rightup":"mouseup")}const i=this.trackingData(e.pointerId),s=this.findMountedTarget(i.pressTargetsByButton[e.button]);let o=s;if(s&&!n.composedPath().includes(s)){let a=s;for(;a&&!n.composedPath().includes(a);){if(n.currentTarget=a,this.notifyTarget(n,"pointerupoutside"),n.pointerType==="touch")this.notifyTarget(n,"touchendoutside");else if(n.pointerType==="mouse"||n.pointerType==="pen"){const l=n.button===2;this.notifyTarget(n,l?"rightupoutside":"mouseupoutside")}a=a.parent}delete i.pressTargetsByButton[e.button],o=a}if(o){const a=this.clonePointerEvent(n,"click");a.target=o,a.path=null,i.clicksByButton[e.button]||(i.clicksByButton[e.button]={clickCount:0,target:a.target,timeStamp:t});const l=i.clicksByButton[e.button];if(l.target===a.target&&t-l.timeStamp<200?++l.clickCount:l.clickCount=1,l.target=a.target,l.timeStamp=t,a.detail=l.clickCount,a.pointerType==="mouse"){const h=a.button===2;this.dispatchEvent(a,h?"rightclick":"click")}else a.pointerType==="touch"&&this.dispatchEvent(a,"tap");this.dispatchEvent(a,"pointertap"),this.freeEvent(a)}this.freeEvent(n)}mapPointerUpOutside(e){if(!(e instanceof Ut)){fe("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId),n=this.findMountedTarget(t.pressTargetsByButton[e.button]),i=this.createPointerEvent(e);if(n){let s=n;for(;s;)i.currentTarget=s,this.notifyTarget(i,"pointerupoutside"),i.pointerType==="touch"?this.notifyTarget(i,"touchendoutside"):(i.pointerType==="mouse"||i.pointerType==="pen")&&this.notifyTarget(i,i.button===2?"rightupoutside":"mouseupoutside"),s=s.parent;delete t.pressTargetsByButton[e.button]}this.freeEvent(i)}mapWheel(e){if(!(e instanceof En)){fe("EventBoundary cannot map a non-wheel event as a wheel event");return}const t=this.createWheelEvent(e);this.dispatchEvent(t),this.freeEvent(t)}findMountedTarget(e){if(!e)return null;let t=e[0];for(let n=1;n<e.length&&e[n].parent===t;n++)t=e[n];return t}createPointerEvent(e,t,n){const i=this.allocateEvent(Ut);return this.copyPointerData(e,i),this.copyMouseData(e,i),this.copyData(e,i),i.nativeEvent=e.nativeEvent,i.originalEvent=e,i.target=n??this.hitTest(i.global.x,i.global.y)??this._hitElements[0],typeof t=="string"&&(i.type=t),i}createWheelEvent(e){const t=this.allocateEvent(En);return this.copyWheelData(e,t),this.copyMouseData(e,t),this.copyData(e,t),t.nativeEvent=e.nativeEvent,t.originalEvent=e,t.target=this.hitTest(t.global.x,t.global.y),t}clonePointerEvent(e,t){const n=this.allocateEvent(Ut);return n.nativeEvent=e.nativeEvent,n.originalEvent=e.originalEvent,this.copyPointerData(e,n),this.copyMouseData(e,n),this.copyData(e,n),n.target=e.target,n.path=e.composedPath().slice(),n.type=t??n.type,n}copyWheelData(e,t){t.deltaMode=e.deltaMode,t.deltaX=e.deltaX,t.deltaY=e.deltaY,t.deltaZ=e.deltaZ}copyPointerData(e,t){e instanceof Ut&&t instanceof Ut&&(t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist)}copyMouseData(e,t){e instanceof Us&&t instanceof Us&&(t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.copyFrom(e.client),t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.copyFrom(e.movement),t.screen.copyFrom(e.screen),t.shiftKey=e.shiftKey,t.global.copyFrom(e.global))}copyData(e,t){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.detail=e.detail,t.view=e.view,t.which=e.which,t.layer.copyFrom(e.layer),t.page.copyFrom(e.page)}trackingData(e){return this.mappingState.trackingData[e]||(this.mappingState.trackingData[e]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[e]}allocateEvent(e){this.eventPool.has(e)||this.eventPool.set(e,[]);const t=this.eventPool.get(e).pop()||new e(this);return t.eventPhase=t.NONE,t.currentTarget=null,t.path=null,t.target=null,t}freeEvent(e){if(e.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const t=e.constructor;this.eventPool.has(t)||this.eventPool.set(t,[]),this.eventPool.get(t).push(e)}_notifyListeners(e,t){const n=e.currentTarget._events[t];if(n)if("fn"in n)n.once&&e.currentTarget.removeListener(t,n.fn,void 0,!0),n.fn.call(n.context,e);else for(let i=0,s=n.length;i<s&&!e.propagationImmediatelyStopped;i++)n[i].once&&e.currentTarget.removeListener(t,n[i].fn,void 0,!0),n[i].fn.call(n[i].context,e)}}const Ky=1,Zy={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},Pu=class Ga{constructor(e){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=e,this.rootBoundary=new qy(null),yr.init(this),this.autoPreventDefault=!0,this._eventsAdded=!1,this._rootPointerEvent=new Ut(null),this._rootWheelEvent=new En(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...Ga.defaultEventFeatures},{set:(t,n,i)=>(n==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=i),t[n]=i,!0)}),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerOverOut=this._onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(e){const{canvas:t,resolution:n}=this.renderer;this.setTargetElement(t),this.resolution=n,Ga._defaultEventMode=e.eventMode??"passive",Object.assign(this.features,e.eventFeatures??{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(e){this.resolution=e}destroy(){this.setTargetElement(null),this.renderer=null,this._currentCursor=null}setCursor(e){e=e||"default";let t=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(t=!1),this._currentCursor===e)return;this._currentCursor=e;const n=this.cursorStyles[e];if(n)switch(typeof n){case"string":t&&(this.domElement.style.cursor=n);break;case"function":n(e);break;case"object":t&&Object.assign(this.domElement.style,n);break}else t&&typeof e=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,e)&&(this.domElement.style.cursor=e)}get pointer(){return this._rootPointerEvent}_onPointerDown(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const t=this._normalizeToPointerData(e);this.autoPreventDefault&&t[0].isNormalized&&(e.cancelable||!("cancelable"in e))&&e.preventDefault();for(let n=0,i=t.length;n<i;n++){const s=t[n],o=this._bootstrapEvent(this._rootPointerEvent,s);this.rootBoundary.mapEvent(o)}this.setCursor(this.rootBoundary.cursor)}_onPointerMove(e){if(!this.features.move)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,yr.pointerMoved();const t=this._normalizeToPointerData(e);for(let n=0,i=t.length;n<i;n++){const s=this._bootstrapEvent(this._rootPointerEvent,t[n]);this.rootBoundary.mapEvent(s)}this.setCursor(this.rootBoundary.cursor)}_onPointerUp(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let t=e.target;e.composedPath&&e.composedPath().length>0&&(t=e.composedPath()[0]);const n=t!==this.domElement?"outside":"",i=this._normalizeToPointerData(e);for(let s=0,o=i.length;s<o;s++){const a=this._bootstrapEvent(this._rootPointerEvent,i[s]);a.type+=n,this.rootBoundary.mapEvent(a)}this.setCursor(this.rootBoundary.cursor)}_onPointerOverOut(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const t=this._normalizeToPointerData(e);for(let n=0,i=t.length;n<i;n++){const s=this._bootstrapEvent(this._rootPointerEvent,t[n]);this.rootBoundary.mapEvent(s)}this.setCursor(this.rootBoundary.cursor)}onWheel(e){if(!this.features.wheel)return;const t=this.normalizeWheelEvent(e);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(t)}setTargetElement(e){this._removeEvents(),this.domElement=e,yr.domElement=e,this._addEvents()}_addEvents(){if(this._eventsAdded||!this.domElement)return;yr.addTickerListener();const e=this.domElement.style;e&&(globalThis.navigator.msPointerEnabled?(e.msContentZooming="none",e.msTouchAction="none"):this.supportsPointerEvents&&(e.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this._onPointerMove,!0),this.domElement.addEventListener("pointerdown",this._onPointerDown,!0),this.domElement.addEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this._onPointerOverOut,!0),globalThis.addEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this._onPointerMove,!0),this.domElement.addEventListener("mousedown",this._onPointerDown,!0),this.domElement.addEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this._onPointerOverOut,!0),globalThis.addEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this._onPointerDown,!0),this.domElement.addEventListener("touchend",this._onPointerUp,!0),this.domElement.addEventListener("touchmove",this._onPointerMove,!0))),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this._eventsAdded=!0}_removeEvents(){if(!this._eventsAdded||!this.domElement)return;yr.removeTickerListener();const e=this.domElement.style;e&&(globalThis.navigator.msPointerEnabled?(e.msContentZooming="",e.msTouchAction=""):this.supportsPointerEvents&&(e.touchAction="")),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this._onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this._onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this._onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this._onPointerMove,!0),this.domElement.removeEventListener("mousedown",this._onPointerDown,!0),this.domElement.removeEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this._onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this._onPointerDown,!0),this.domElement.removeEventListener("touchend",this._onPointerUp,!0),this.domElement.removeEventListener("touchmove",this._onPointerMove,!0))),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this._eventsAdded=!1}mapPositionToPoint(e,t,n){const i=this.domElement.isConnected?this.domElement.getBoundingClientRect():{x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0},s=1/this.resolution;e.x=(t-i.left)*(this.domElement.width/i.width)*s,e.y=(n-i.top)*(this.domElement.height/i.height)*s}_normalizeToPointerData(e){const t=[];if(this.supportsTouchEvents&&e instanceof TouchEvent)for(let n=0,i=e.changedTouches.length;n<i;n++){const s=e.changedTouches[n];typeof s.button>"u"&&(s.button=0),typeof s.buttons>"u"&&(s.buttons=1),typeof s.isPrimary>"u"&&(s.isPrimary=e.touches.length===1&&e.type==="touchstart"),typeof s.width>"u"&&(s.width=s.radiusX||1),typeof s.height>"u"&&(s.height=s.radiusY||1),typeof s.tiltX>"u"&&(s.tiltX=0),typeof s.tiltY>"u"&&(s.tiltY=0),typeof s.pointerType>"u"&&(s.pointerType="touch"),typeof s.pointerId>"u"&&(s.pointerId=s.identifier||0),typeof s.pressure>"u"&&(s.pressure=s.force||.5),typeof s.twist>"u"&&(s.twist=0),typeof s.tangentialPressure>"u"&&(s.tangentialPressure=0),typeof s.layerX>"u"&&(s.layerX=s.offsetX=s.clientX),typeof s.layerY>"u"&&(s.layerY=s.offsetY=s.clientY),s.isNormalized=!0,s.type=e.type,t.push(s)}else if(!globalThis.MouseEvent||e instanceof MouseEvent&&(!this.supportsPointerEvents||!(e instanceof globalThis.PointerEvent))){const n=e;typeof n.isPrimary>"u"&&(n.isPrimary=!0),typeof n.width>"u"&&(n.width=1),typeof n.height>"u"&&(n.height=1),typeof n.tiltX>"u"&&(n.tiltX=0),typeof n.tiltY>"u"&&(n.tiltY=0),typeof n.pointerType>"u"&&(n.pointerType="mouse"),typeof n.pointerId>"u"&&(n.pointerId=Ky),typeof n.pressure>"u"&&(n.pressure=.5),typeof n.twist>"u"&&(n.twist=0),typeof n.tangentialPressure>"u"&&(n.tangentialPressure=0),n.isNormalized=!0,t.push(n)}else t.push(e);return t}normalizeWheelEvent(e){const t=this._rootWheelEvent;return this._transferMouseData(t,e),t.deltaX=e.deltaX,t.deltaY=e.deltaY,t.deltaZ=e.deltaZ,t.deltaMode=e.deltaMode,this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.nativeEvent=e,t.type=e.type,t}_bootstrapEvent(e,t){return e.originalEvent=null,e.nativeEvent=t,e.pointerId=t.pointerId,e.width=t.width,e.height=t.height,e.isPrimary=t.isPrimary,e.pointerType=t.pointerType,e.pressure=t.pressure,e.tangentialPressure=t.tangentialPressure,e.tiltX=t.tiltX,e.tiltY=t.tiltY,e.twist=t.twist,this._transferMouseData(e,t),this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.isTrusted=t.isTrusted,e.type==="pointerleave"&&(e.type="pointerout"),e.type.startsWith("mouse")&&(e.type=e.type.replace("mouse","pointer")),e.type.startsWith("touch")&&(e.type=Zy[e.type]||e.type),e}_transferMouseData(e,t){e.isTrusted=t.isTrusted,e.srcElement=t.srcElement,e.timeStamp=performance.now(),e.type=t.type,e.altKey=t.altKey,e.button=t.button,e.buttons=t.buttons,e.client.x=t.clientX,e.client.y=t.clientY,e.ctrlKey=t.ctrlKey,e.metaKey=t.metaKey,e.movement.x=t.movementX,e.movement.y=t.movementY,e.page.x=t.pageX,e.page.y=t.pageY,e.relatedTarget=null,e.shiftKey=t.shiftKey}};Pu.extension={name:"events",type:[R.WebGLSystem,R.CanvasSystem,R.WebGPUSystem],priority:-1};Pu.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};let Qy=Pu;const WC={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,get interactive(){return this.eventMode==="dynamic"||this.eventMode==="static"},set interactive(r){this.eventMode=r?"static":"passive"},_internalEventMode:void 0,get eventMode(){return this._internalEventMode??Qy.defaultEventMode},set eventMode(r){this._internalEventMode=r},isInteractive(){return this.eventMode==="static"||this.eventMode==="dynamic"},interactiveChildren:!0,hitArea:null,addEventListener(r,e,t){const n=typeof t=="boolean"&&t||typeof t=="object"&&t.capture,i=typeof t=="object"?t.signal:void 0,s=typeof t=="object"?t.once===!0:!1,o=typeof e=="function"?void 0:e;r=n?`${r}capture`:r;const a=typeof e=="function"?e:e.handleEvent,l=this;i&&i.addEventListener("abort",()=>{l.off(r,a,o)}),s?l.once(r,a,o):l.on(r,a,o)},removeEventListener(r,e,t){const n=typeof t=="boolean"&&t||typeof t=="object"&&t.capture,i=typeof e=="function"?void 0:e;r=n?`${r}capture`:r,e=typeof e=="function"?e:e.handleEvent,this.off(r,e,i)},dispatchEvent(r){if(!(r instanceof Si))throw new Error("Container cannot propagate events outside of the Federated Events API");return r.defaultPrevented=!1,r.path=null,r.target=this,r.manager.dispatchEvent(r),!r.defaultPrevented}};var Jy=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,e0=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Gc=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const Gf=class zf extends Te{constructor(e){e={...zf.defaultOptions,...e};const t=me.from({vertex:{source:Gc,entryPoint:"mainVertex"},fragment:{source:Gc,entryPoint:"mainFragment"}}),n=ge.from({vertex:Jy,fragment:e0,name:"alpha-filter"}),{alpha:i,...s}=e,o=new ht({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:t,glProgram:n,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};Gf.defaultOptions={alpha:1};let t0=Gf,r0=0;class n0{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,n){const i=new Ye({...this.textureOptions,width:e,height:t,resolution:1,antialias:n,autoGarbageCollect:!0});return new Q({source:i,label:`texturePool_${r0++}`})}getOptimalTexture(e,t,n=1,i){let s=Math.ceil(e*n-1e-6),o=Math.ceil(t*n-1e-6);s=wn(s),o=wn(o);const a=(s<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,i)),l.source._resolution=n,l.source.width=s/n,l.source.height=o/n,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=e,l.frame.height=t,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(e,t=!1){const n=e.source;return this.getOptimalTexture(e.width,e.height,n._resolution,t)}returnTexture(e){const t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(const t in this._texturePool){const n=this._texturePool[t];if(n)for(let i=0;i<n.length;i++)n[i].destroy(!0)}this._texturePool={}}}const He=new n0,Lf={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},i0=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function s0(r){const e=Lf[r],t=e.length;let n=i0,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<r;a++){let l=s.replace("%index%",a.toString());o=a,a>=t&&(o=r-a-1),l=l.replace("%value%",e[o].toString()),i+=l,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",r.toString()),n}const o0=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function a0(r,e){const t=Math.ceil(r/2);let n=o0,i="",s;e?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<r;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(t-1)}.0`),i+=a,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",r.toString()),n=n.replace("%dimension%",e?"z":"w"),n}function u0(r,e){const t=a0(e,r),n=s0(e);return ge.from({vertex:t,fragment:n,name:`blur-${r?"horizontal":"vertical"}-pass-filter`})}var l0=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function c0(r,e){const t=Lf[e],n=t.length,i=[],s=[],o=[];for(let p=0;p<e;p++){i[p]=`@location(${p}) offset${p}: vec2<f32>,`,r?s[p]=`filteredCord + vec2(${p-n+1} * pixelStrength, 0.0),`:s[p]=`filteredCord + vec2(0.0, ${p-n+1} * pixelStrength),`;const x=p<n?p:e-p-1,y=t[x].toString();o[p]=`finalColor += textureSample(uTexture, uSampler, offset${p}) * ${y};`}const a=i.join(`
`),l=s.join(`
`),h=o.join(`
`),f=l0.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",h).replace("%dimension%",r?"z":"w");return me.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const Nf=class Hf extends Te{constructor(e){e={...Hf.defaultOptions,...e};const t=u0(e.horizontal,e.kernelSize),n=c0(e.horizontal,e.kernelSize);super({glProgram:t,gpuProgram:n,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,t,n,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,n,i);else{const s=He.getSameSizeTexture(t);let o=t,a=s;this._state.blend=!1;const l=e.renderer.type===St.WEBGPU;for(let h=0;h<this.passes-1;h++){e.applyFilter(this,o,a,h===0?!0:l);const f=a;a=o,o=f}this._state.blend=!0,e.applyFilter(this,o,n,i),He.returnTexture(s)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};Nf.defaultOptions={strength:8,quality:4,kernelSize:5};let oi=Nf;class h0 extends Te{constructor(...e){let t=e[0]??{};typeof t=="number"&&(Z(ye,"BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]||"inherit"),e[3]!==void 0&&(t.kernelSize=e[3])),t={...oi.defaultOptions,...t};const{strength:n,strengthX:i,strengthY:s,quality:o,...a}=t;super({...a,compatibleRenderers:St.BOTH,resources:{}}),this._repeatEdgePixels=!1,this.blurXFilter=new oi({horizontal:!0,...t}),this.blurYFilter=new oi({horizontal:!1,...t}),this.quality=o,this.strengthX=i??n,this.strengthY=s??n,this.repeatEdgePixels=!1}apply(e,t,n,i){const s=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(s&&o){const a=He.getSameSizeTexture(t);this.blurXFilter.blendMode="normal",this.blurXFilter.apply(e,t,a,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,a,n,i),He.returnTexture(a)}else o?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,t,n,i)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(e,t,n,i))}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get strength(){if(this.strengthX!==this.strengthY)throw new Error("BlurFilter's strengthX and strengthY are different");return this.strengthX}set strength(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}get strengthX(){return this.blurXFilter.blur}set strengthX(e){this.blurXFilter.blur=e,this.updatePadding()}get strengthY(){return this.blurYFilter.blur}set strengthY(e){this.blurYFilter.blur=e,this.updatePadding()}get blur(){return Z("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength}set blur(e){Z("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength=e}get blurX(){return Z("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX}set blurX(e){Z("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX=e}get blurY(){return Z("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY}set blurY(e){Z("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY=e}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}}h0.defaultOptions={strength:8,quality:4,kernelSize:5};class f0{constructor(e){this._renderer=e}push(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({renderPipeId:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}pop(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}execute(e){e.action==="pushFilter"?this._renderer.filter.push(e):e.action==="popFilter"&&this._renderer.filter.pop()}destroy(){this._renderer=null}}f0.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"filter"};const d0=new ue;function p0(r,e){return e.clear(),$f(r,e),e.isValid||e.set(0,0,0,0),r.renderGroup?e.applyMatrix(r.renderGroup.localTransform):e.applyMatrix(r.parentRenderGroup.worldTransform),e}function $f(r,e){if(r.localDisplayStatus!==7||!r.measurable)return;const t=!!r.effects.length;let n=e;if((r.renderGroup||t)&&(n=ur.get().clear()),r.boundsArea)e.addRect(r.boundsArea,r.worldTransform);else{if(r.renderPipeId){const s=r.bounds;n.addFrame(s.minX,s.minY,s.maxX,s.maxY,r.groupTransform)}const i=r.children;for(let s=0;s<i.length;s++)$f(i[s],n)}if(t){let i=!1;for(let s=0;s<r.effects.length;s++)r.effects[s].addBounds&&(i||(i=!0,n.applyMatrix(r.parentRenderGroup.worldTransform)),r.effects[s].addBounds(n,!0));i&&(n.applyMatrix(r.parentRenderGroup.worldTransform.copyTo(d0).invert()),e.addBounds(n,r.relativeGroupTransform)),e.addBounds(n),ur.return(n)}else r.renderGroup&&(e.addBounds(n,r.relativeGroupTransform),ur.return(n))}function m0(r,e){e.clear();const t=e.matrix;for(let n=0;n<r.length;n++){const i=r[n];i.globalDisplayStatus<7||(e.matrix=i.worldTransform,i.addBounds(e))}return e.matrix=t,e}const g0=new Ti({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),format:"float32x2",stride:2*4,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])});class x0{constructor(e){this._filterStackIndex=0,this._filterStack=[],this._filterGlobalUniforms=new ht({uInputSize:{value:new Float32Array(4),type:"vec4<f32>"},uInputPixel:{value:new Float32Array(4),type:"vec4<f32>"},uInputClamp:{value:new Float32Array(4),type:"vec4<f32>"},uOutputFrame:{value:new Float32Array(4),type:"vec4<f32>"},uGlobalFrame:{value:new Float32Array(4),type:"vec4<f32>"},uOutputTexture:{value:new Float32Array(4),type:"vec4<f32>"}}),this._globalFilterBindGroup=new lr({}),this.renderer=e}get activeBackTexture(){var e;return(e=this._activeFilterData)==null?void 0:e.backTexture}push(e){var y;const t=this.renderer,n=e.filterEffect.filters;this._filterStack[this._filterStackIndex]||(this._filterStack[this._filterStackIndex]=this._getFilterData());const i=this._filterStack[this._filterStackIndex];if(this._filterStackIndex++,n.length===0){i.skip=!0;return}const s=i.bounds;e.renderables?m0(e.renderables,s):e.filterEffect.filterArea?(s.clear(),s.addRect(e.filterEffect.filterArea),s.applyMatrix(e.container.worldTransform)):p0(e.container,s);const o=t.renderTarget.renderTarget.colorTexture.source;let a=1/0,l=0,h=!0,f=!1,p=!1;for(let b=0;b<n.length;b++){const T=n[b];if(a=Math.min(a,T.resolution==="inherit"?o._resolution:T.resolution),l+=T.padding,T.antialias==="off"?h=!1:T.antialias==="inherit"&&h&&(h=o.antialias),!!!(T.compatibleRenderers&t.type)){p=!1;break}if(T.blendRequired&&!(((y=t.backBuffer)==null?void 0:y.useBackBuffer)??!0)){fe("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."),p=!1;break}p=T.enabled||p,f=f||T.blendRequired}if(!p){i.skip=!0;return}const x=t.renderTarget.rootViewPort;if(s.scale(a).fitBounds(0,x.width,0,x.height).ceil().scale(1/a).pad(l|0),!s.isPositive){i.skip=!0;return}i.skip=!1,i.bounds=s,i.blendRequired=f,i.container=e.container,i.filterEffect=e.filterEffect,i.previousRenderSurface=t.renderTarget.renderSurface,i.inputTexture=He.getOptimalTexture(s.width,s.height,a,h),t.renderTarget.bind(i.inputTexture,!0),t.globalUniforms.push({offset:s})}pop(){const e=this.renderer;this._filterStackIndex--;const t=this._filterStack[this._filterStackIndex];if(t.skip)return;this._activeFilterData=t;const n=t.inputTexture,i=t.bounds;let s=Q.EMPTY;if(e.renderTarget.finishRenderPass(),t.blendRequired){const a=this._filterStackIndex>0?this._filterStack[this._filterStackIndex-1].bounds:null,l=e.renderTarget.getRenderTarget(t.previousRenderSurface);s=this.getBackTexture(l,i,a)}t.backTexture=s;const o=t.filterEffect.filters;if(this._globalFilterBindGroup.setResource(n.source.style,2),this._globalFilterBindGroup.setResource(s.source,3),e.globalUniforms.pop(),o.length===1)o[0].apply(this,n,t.previousRenderSurface,!1),He.returnTexture(n);else{let a=t.inputTexture,l=He.getOptimalTexture(i.width,i.height,a.source._resolution,!1),h=0;for(h=0;h<o.length-1;++h){o[h].apply(this,a,l,!0);const p=a;a=l,l=p}o[h].apply(this,a,t.previousRenderSurface,!1),He.returnTexture(a),He.returnTexture(l)}t.blendRequired&&He.returnTexture(s)}getBackTexture(e,t,n){const i=e.colorTexture.source._resolution,s=He.getOptimalTexture(t.width,t.height,i,!1);let o=t.minX,a=t.minY;n&&(o-=n.minX,a-=n.minY),o=Math.floor(o*i),a=Math.floor(a*i);const l=Math.ceil(t.width*i),h=Math.ceil(t.height*i);return this.renderer.renderTarget.copyToTexture(e,s,{x:o,y:a},{width:l,height:h},{x:0,y:0}),s}applyFilter(e,t,n,i){const s=this.renderer,o=this._filterStack[this._filterStackIndex],a=o.bounds,l=ze.shared,f=o.previousRenderSurface===n;let p=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution,x=this._filterStackIndex-1;for(;x>0&&this._filterStack[x].skip;)--x;x>0&&(p=this._filterStack[x].inputTexture.source._resolution);const y=this._filterGlobalUniforms,b=y.uniforms,T=b.uOutputFrame,C=b.uInputSize,P=b.uInputPixel,F=b.uInputClamp,B=b.uGlobalFrame,O=b.uOutputTexture;if(f){let m=this._filterStackIndex;for(;m>0;){m--;const V=this._filterStack[this._filterStackIndex-1];if(!V.skip){l.x=V.bounds.minX,l.y=V.bounds.minY;break}}T[0]=a.minX-l.x,T[1]=a.minY-l.y}else T[0]=0,T[1]=0;T[2]=t.frame.width,T[3]=t.frame.height,C[0]=t.source.width,C[1]=t.source.height,C[2]=1/C[0],C[3]=1/C[1],P[0]=t.source.pixelWidth,P[1]=t.source.pixelHeight,P[2]=1/P[0],P[3]=1/P[1],F[0]=.5*P[2],F[1]=.5*P[3],F[2]=t.frame.width*C[2]-.5*P[2],F[3]=t.frame.height*C[3]-.5*P[3];const W=this.renderer.renderTarget.rootRenderTarget.colorTexture;B[0]=l.x*p,B[1]=l.y*p,B[2]=W.source.width*p,B[3]=W.source.height*p;const ne=this.renderer.renderTarget.getRenderTarget(n);if(s.renderTarget.bind(n,!!i),n instanceof Q?(O[0]=n.frame.width,O[1]=n.frame.height):(O[0]=ne.width,O[1]=ne.height),O[2]=ne.isRoot?-1:1,y.update(),s.renderPipes.uniformBatch){const m=s.renderPipes.uniformBatch.getUboResource(y);this._globalFilterBindGroup.setResource(m,0)}else this._globalFilterBindGroup.setResource(y,0);this._globalFilterBindGroup.setResource(t.source,1),this._globalFilterBindGroup.setResource(t.source.style,2),e.groups[0]=this._globalFilterBindGroup,s.encoder.draw({geometry:g0,shader:e,state:e._state,topology:"triangle-list"}),s.type===St.WEBGL&&s.renderTarget.finishRenderPass()}_getFilterData(){return{skip:!1,inputTexture:null,bounds:new xt,container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}calculateSpriteMatrix(e,t){const n=this._activeFilterData,i=e.set(n.inputTexture._source.width,0,0,n.inputTexture._source.height,n.bounds.minX,n.bounds.minY),s=t.worldTransform.copyTo(ue.shared);return s.invert(),i.prepend(s),i.scale(1/t.texture.frame.width,1/t.texture.frame.height),i.translate(t.anchor.x,t.anchor.y),i}}x0.extension={type:[R.WebGLSystem,R.WebGPUSystem],name:"filter"};var _0=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha; 
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * uAlpha * clip);

    finalColor = original;
}
`,v0=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,zc=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,  
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;

     var clip = step(3.5,
        step(maskClamp.x, filterUv.x) +
        step(maskClamp.y, filterUv.y) +
        step(filterUv.x, maskClamp.z) +
        step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    
    var npmAlpha = 0.0;

    var alphaMul = 1.0 - npmAlpha * (1.0 - mask.a);

    var a = (alphaMul * mask.r) * clip;

    return vec4(source.rgb, source.a) * a;
}`;class y0 extends Te{constructor(e){const{sprite:t,...n}=e,i=new Ch(t.texture),s=new ht({uFilterMatrix:{value:new ue,type:"mat3x3<f32>"},uMaskClamp:{value:i.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"}}),o=me.from({vertex:{source:zc,entryPoint:"mainVertex"},fragment:{source:zc,entryPoint:"mainFragment"}}),a=ge.from({vertex:v0,fragment:_0,name:"mask-filter"});super({...n,gpuProgram:o,glProgram:a,resources:{filterUniforms:s,uMaskTexture:t.texture.source}}),this.sprite=t,this._textureMatrix=i}apply(e,t,n,i){this._textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=this.sprite.texture.source,e.applyFilter(this,t,n,i)}}function Lc(r,e,t,n,i,s,o,a){const l=o-t,h=a-n,f=i-t,p=s-n,x=r-t,y=e-n,b=l*l+h*h,T=l*f+h*p,C=l*x+h*y,P=f*f+p*p,F=f*x+p*y,B=1/(b*P-T*T),O=(P*C-T*F)*B,W=(b*F-T*C)*B;return O>=0&&W>=0&&O+W<1}const Wf=class Vf{constructor(e){this._tick=()=>{this.timeout=setTimeout(this._processQueue,0)},this._processQueue=()=>{const{queue:t}=this;let n=0;for(;t.length&&n<Vf.uploadsPerFrame;){const i=t.shift();this.uploadQueueItem(i),n++}t.length?Xe.system.addOnce(this._tick,this,wr.UTILITY):this._resolve()},this.renderer=e,this.queue=[],this.resolves=[]}getQueue(){return[...this.queue]}add(e){const t=Array.isArray(e)?e:[e];for(const n of t)n instanceof Ze?this._addContainer(n):this.resolveQueueItem(n,this.queue);return this}_addContainer(e){this.resolveQueueItem(e,this.queue);for(const t of e.children)this._addContainer(t)}upload(e){return e&&this.add(e),new Promise(t=>{this.queue.length?(this.resolves.push(t),this.dedupeQueue(),Xe.system.addOnce(this._tick,this,wr.UTILITY)):t()})}dedupeQueue(){const e=Object.create(null);let t=0;for(let n=0;n<this.queue.length;n++){const i=this.queue[n];e[i.uid]||(e[i.uid]=!0,this.queue[t++]=i)}this.queue.length=t}_resolve(){const{resolves:e}=this,t=e.slice(0);e.length=0;for(const n of t)n()}};Wf.uploadsPerFrame=4;let b0=Wf;class gi extends bi{constructor(e){e instanceof gt&&(e={context:e});const{context:t,roundPixels:n,...i}=e||{};super({label:"Graphics",...i}),this.renderPipeId="graphics",t?this._context=t:this._context=this._ownedContext=new gt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=n??!1}set context(e){e!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=e,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(e){e.addBounds(this._context.bounds)}containsPoint(e){return this._context.containsPoint(e)}onViewUpdate(){if(this._didViewChangeTick++,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){this._ownedContext&&!e?this._ownedContext.destroy(e):(e===!0||(e==null?void 0:e.context)===!0)&&this._context.destroy(e),this._ownedContext=null,this._context=null,super.destroy(e)}_callContextMethod(e,t){return this.context[e](...t),this}setFillStyle(...e){return this._callContextMethod("setFillStyle",e)}setStrokeStyle(...e){return this._callContextMethod("setStrokeStyle",e)}fill(...e){return this._callContextMethod("fill",e)}stroke(...e){return this._callContextMethod("stroke",e)}texture(...e){return this._callContextMethod("texture",e)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...e){return this._callContextMethod("arc",e)}arcTo(...e){return this._callContextMethod("arcTo",e)}arcToSvg(...e){return this._callContextMethod("arcToSvg",e)}bezierCurveTo(...e){return this._callContextMethod("bezierCurveTo",e)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...e){return this._callContextMethod("ellipse",e)}circle(...e){return this._callContextMethod("circle",e)}path(...e){return this._callContextMethod("path",e)}lineTo(...e){return this._callContextMethod("lineTo",e)}moveTo(...e){return this._callContextMethod("moveTo",e)}quadraticCurveTo(...e){return this._callContextMethod("quadraticCurveTo",e)}rect(...e){return this._callContextMethod("rect",e)}roundRect(...e){return this._callContextMethod("roundRect",e)}poly(...e){return this._callContextMethod("poly",e)}regularPoly(...e){return this._callContextMethod("regularPoly",e)}roundPoly(...e){return this._callContextMethod("roundPoly",e)}roundShape(...e){return this._callContextMethod("roundShape",e)}filletRect(...e){return this._callContextMethod("filletRect",e)}chamferRect(...e){return this._callContextMethod("chamferRect",e)}star(...e){return this._callContextMethod("star",e)}svg(...e){return this._callContextMethod("svg",e)}restore(...e){return this._callContextMethod("restore",e)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...e){return this._callContextMethod("rotate",e)}scaleTransform(...e){return this._callContextMethod("scale",e)}setTransform(...e){return this._callContextMethod("setTransform",e)}transform(...e){return this._callContextMethod("transform",e)}translateTransform(...e){return this._callContextMethod("translate",e)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(e){this._context.fillStyle=e}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(e){this._context.strokeStyle=e}clone(e=!1){return e?new gi(this._context.clone()):(this._ownedContext=null,new gi(this._context))}lineStyle(e,t,n){Z(ye,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return e&&(i.width=e),t&&(i.color=t),n&&(i.alpha=n),this.context.strokeStyle=i,this}beginFill(e,t){Z(ye,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const n={};return e&&(n.color=e),t&&(n.alpha=t),this.context.fillStyle=n,this}endFill(){Z(ye,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const e=this.context.strokeStyle;return(e.width!==gt.defaultStrokeStyle.width||e.color!==gt.defaultStrokeStyle.color||e.alpha!==gt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...e){return Z(ye,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",e)}drawEllipse(...e){return Z(ye,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",e)}drawPolygon(...e){return Z(ye,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",e)}drawRect(...e){return Z(ye,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",e)}drawRoundedRect(...e){return Z(ye,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",e)}drawStar(...e){return Z(ye,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",e)}}const jf=class Xf extends Ti{constructor(...e){let t=e[0]??{};t instanceof Float32Array&&(Z(ye,"use new MeshGeometry({ positions, uvs, indices }) instead"),t={positions:t,uvs:e[1],indices:e[2]}),t={...Xf.defaultOptions,...t};const n=t.positions||new Float32Array([0,0,1,0,1,1,0,1]),i=t.uvs||new Float32Array([0,0,1,0,1,1,0,1]),s=t.indices||new Uint32Array([0,1,2,0,2,3]),o=t.shrinkBuffersToFit,a=new Dt({data:n,label:"attribute-mesh-positions",shrinkToFit:o,usage:Fe.VERTEX|Fe.COPY_DST}),l=new Dt({data:i,label:"attribute-mesh-uvs",shrinkToFit:o,usage:Fe.VERTEX|Fe.COPY_DST}),h=new Dt({data:s,label:"index-mesh-buffer",shrinkToFit:o,usage:Fe.INDEX|Fe.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:h,topology:t.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};jf.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let qs=jf;class S0 extends bi{constructor(...e){let t=e[0];t instanceof Ti&&(Z(ye,"Mesh: use new Mesh({ geometry, shader }) instead"),t={geometry:t,shader:e[1]},e[3]&&(Z(ye,"Mesh: drawMode argument has been removed, use geometry.topology instead"),t.geometry.topology=e[3]));const{geometry:n,shader:i,texture:s,roundPixels:o,state:a,...l}=t;super({label:"Mesh",...l}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=i??null,this.texture=s??(i==null?void 0:i.texture)??Q.WHITE,this.state=a??Zt.for2d(),this._geometry=n,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=o??!1}get material(){return Z(ye,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(e){this._shader!==e&&(this._shader=e,this.onViewUpdate())}get shader(){return this._shader}set geometry(e){var t;this._geometry!==e&&((t=this._geometry)==null||t.off("update",this.onViewUpdate,this),e.on("update",this.onViewUpdate,this),this._geometry=e,this.onViewUpdate())}get geometry(){return this._geometry}set texture(e){e||(e=Q.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=e),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof qs?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}addBounds(e){e.addBounds(this.geometry.bounds)}containsPoint(e){const{x:t,y:n}=e;if(!this.bounds.containsPoint(t,n))return!1;const i=this.geometry.getBuffer("aPosition").data,s=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){const o=this.geometry.getIndex().data,a=o.length;for(let l=0;l+2<a;l+=s){const h=o[l]*2,f=o[l+1]*2,p=o[l+2]*2;if(Lc(t,n,i[h],i[h+1],i[f],i[f+1],i[p],i[p+1]))return!0}}else{const o=i.length/2;for(let a=0;a+2<o;a+=s){const l=a*2,h=(a+1)*2,f=(a+2)*2;if(Lc(t,n,i[l],i[l+1],i[h],i[h+1],i[f],i[f+1]))return!0}}return!1}onViewUpdate(){if(this._didViewChangeTick++,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){var n;if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const i=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(i)}(n=this._geometry)==null||n.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}class ks extends Tr{constructor(...e){let t=e[0];Array.isArray(e[0])&&(t={textures:e[0],autoUpdate:e[1]});const{textures:n,autoUpdate:i,...s}=t,[o]=n;super({...s,texture:o instanceof Q?o:o.texture}),this._textures=null,this._durations=null,this._autoUpdate=i??!0,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=n}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Xe.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Xe.shared.add(this.update,this,wr.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(e){this.stop(),this.currentFrame=e}gotoAndPlay(e){this.currentFrame=e,this.play()}update(e){if(!this._playing)return;const t=e.deltaTime,n=this.animationSpeed*t,i=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=n/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i||this.animationSpeed<0&&this.currentFrame>i)&&this.onLoop(),this._updateTexture())}_updateTexture(){const e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this.texture=this._textures[e],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(e){const t=[];for(let n=0;n<e.length;++n)t.push(Q.from(e[n]));return new ks(t)}static fromImages(e){const t=[];for(let n=0;n<e.length;++n)t.push(Q.from(e[n]));return new ks(t)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(e){if(e[0]instanceof Q)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(let t=0;t<e.length;t++)this._textures.push(e[t].texture),this._durations.push(e[t].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e}set currentFrame(e){if(e<0||e>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const t=this.currentFrame;this._currentTime=e,t!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Xe.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Xe.shared.add(this.update,this),this._isConnectedToTicker=!0))}}class T0{constructor({matrix:e,observer:t}={}){this.dirty=!0,this._matrix=e??new ue,this.observer=t,this.position=new Ke(this,0,0),this.scale=new Ke(this,1,1),this.pivot=new Ke(this,0,0),this.skew=new Ke(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const e=this._matrix;return this.dirty&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this.dirty=!1),e}_onUpdate(e){var t;this.dirty=!0,e===this.skew&&this.updateSkew(),(t=this.observer)==null||t._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(e){e.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this.skew))}}const Yf=class hs extends bi{constructor(...e){let t=e[0]||{};t instanceof Q&&(t={texture:t}),e.length>1&&(Z(ye,"use new TilingSprite({ texture, width:100, height:100 }) instead"),t.width=e[1],t.height=e[2]),t={...hs.defaultOptions,...t};const{texture:n,anchor:i,tilePosition:s,tileScale:o,tileRotation:a,width:l,height:h,applyAnchorToTexture:f,roundPixels:p,...x}=t??{};super({label:"TilingSprite",...x}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new Ke({_onUpdate:()=>{this.onViewUpdate()}}),this._applyAnchorToTexture=f,this.texture=n,this._width=l??n.width,this._height=h??n.height,this._tileTransform=new T0({observer:{_onUpdate:()=>this.onViewUpdate()}}),i&&(this.anchor=i),this.tilePosition=s,this.tileScale=o,this.tileRotation=a,this.roundPixels=p??!1}static from(e,t={}){return typeof e=="string"?new hs({texture:Ge.get(e),...t}):new hs({texture:e,...t})}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(e){this._texture.textureMatrix.clampMargin=e}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get tilePosition(){return this._tileTransform.position}set tilePosition(e){this._tileTransform.position.copyFrom(e)}get tileScale(){return this._tileTransform.scale}set tileScale(e){typeof e=="number"?this._tileTransform.scale.set(e):this._tileTransform.scale.copyFrom(e)}set tileRotation(e){this._tileTransform.rotation=e}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}set texture(e){e||(e=Q.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}set width(e){this._width=e,this.onViewUpdate()}get width(){return this._width}set height(e){this._height=e,this.onViewUpdate()}get height(){return this._height}setSize(e,t){typeof e=="object"&&(t=e.height??e.width,e=e.width),this._width=e,this._height=t??e,this.onViewUpdate()}getSize(e){return e||(e={}),e.width=this._width,e.height=this._height,e}_updateBounds(){const e=this._bounds,t=this._anchor,n=this._width,i=this._height;e.maxX=-t._x*n,e.minX=e.maxX+n,e.maxY=-t._y*i,e.minY=e.maxY+i}addBounds(e){const t=this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}containsPoint(e){const t=this._width,n=this._height,i=-t*this._anchor._x;let s=0;return e.x>=i&&e.x<=i+t&&(s=-n*this._anchor._y,e.y>=s&&e.y<=s+n)}onViewUpdate(){if(this._boundsDirty=!0,this._didTilingSpriteUpdate=!0,this._didViewChangeTick++,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e=!1){if(super.destroy(e),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof e=="boolean"?e:e==null?void 0:e.texture){const n=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(n)}this._texture=null}};Yf.defaultOptions={texture:Q.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let C0=Yf;class Au extends bi{constructor(e,t){const{text:n,resolution:i,style:s,anchor:o,width:a,height:l,roundPixels:h,...f}=e;super({...f}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=t,this.text=n??"",this.style=s,this.resolution=i??null,this.allowChildren=!1,this._anchor=new Ke({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=h??!1,a!==void 0&&(this.width=a),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var t;e=e||{},(t=this._style)==null||t.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,this.bounds.width),t!==void 0&&this._setHeight(t,this.bounds.height)}addBounds(e){const t=this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}containsPoint(e){const t=this.bounds.width,n=this.bounds.height,i=-t*this.anchor.x;let s=0;return e.x>=i&&e.x<=i+t&&(s=-n*this.anchor.y,e.y>=s&&e.y<=s+n)}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Eu(r,e){let t=r[0]??{};return(typeof t=="string"||r[1])&&(Z(ye,`use new ${e}({ text: "hi!", style }) instead`),t={text:t,style:r[1]}),t}class qf extends Au{constructor(...e){const t=Eu(e,"Text");super(t,qt),this.renderPipeId="text"}_updateBounds(){const e=this._bounds,t=this._anchor,n=Yt.measureText(this._text,this._style),{width:i,height:s}=n;e.minX=-t._x*i,e.maxX=e.minX+i,e.minY=-t._y*s,e.maxY=e.minY+s}}class w0 extends b0{resolveQueueItem(e,t){return e instanceof Ze?this.resolveContainerQueueItem(e,t):e instanceof Ye||e instanceof Q?t.push(e.source):e instanceof gt&&t.push(e),null}resolveContainerQueueItem(e,t){e instanceof Tr||e instanceof C0||e instanceof S0?t.push(e.texture.source):e instanceof qf?t.push(e):e instanceof gi?t.push(e.context):e instanceof ks&&e.textures.forEach(n=>{n.source?t.push(n.source):t.push(n.texture.source)})}resolveGraphicsContextQueueItem(e){this.renderer.graphicsContext.getContextRenderData(e);const{instructions:t}=e;for(const n of t)if(n.action==="texture"){const{image:i}=n.data;return i.source}else if(n.action==="fill"){const{texture:i}=n.data.style;return i.source}return null}}class P0 extends Au{constructor(...e){var t;const n=Eu(e,"BitmapText");n.style??(n.style=n.style||{}),(t=n.style).fill??(t.fill=16777215),super(n,qt),this.renderPipeId="bitmapText"}_updateBounds(){const e=this._bounds,t=this._anchor,n=Os.measureText(this.text,this._style),i=n.scale,s=n.offsetY*i;let o=n.width*i,a=n.height*i;const l=this._style._stroke;l&&(o+=l.width,a+=l.width),e.minX=-t._x*o,e.maxX=e.minX+o,e.minY=-t._y*(a+s),e.maxY=e.minY+a}}function A0(r){const e=r._stroke,t=r._fill,i=[`div { ${[`color: ${de.shared.setValue(t.color).toHex()}`,`font-size: ${r.fontSize}px`,`font-family: ${r.fontFamily}`,`font-weight: ${r.fontWeight}`,`font-style: ${r.fontStyle}`,`font-variant: ${r.fontVariant}`,`letter-spacing: ${r.letterSpacing}px`,`text-align: ${r.align}`,`padding: ${r.padding}px`,`white-space: ${r.whiteSpace==="pre"&&r.wordWrap?"pre-wrap":r.whiteSpace}`,...r.lineHeight?[`line-height: ${r.lineHeight}px`]:[],...r.wordWrap?[`word-wrap: ${r.breakWords?"break-all":"break-word"}`,`max-width: ${r.wordWrapWidth}px`]:[],...e?[Zf(e)]:[],...r.dropShadow?[Kf(r.dropShadow)]:[],...r.cssOverrides].join(";")} }`];return E0(r.tagStyles,i),i.join(" ")}function Kf(r){const e=de.shared.setValue(r.color).setAlpha(r.alpha).toHexa(),t=Math.round(Math.cos(r.angle)*r.distance),n=Math.round(Math.sin(r.angle)*r.distance),i=`${t}px ${n}px`;return r.blur>0?`text-shadow: ${i} ${r.blur}px ${e}`:`text-shadow: ${i} ${e}`}function Zf(r){return[`-webkit-text-stroke-width: ${r.width}px`,`-webkit-text-stroke-color: ${de.shared.setValue(r.color).toHex()}`,`text-stroke-width: ${r.width}px`,`text-stroke-color: ${de.shared.setValue(r.color).toHex()}`,"paint-order: stroke"].join(";")}const Nc={fontSize:"font-size: {{VALUE}}px",fontFamily:"font-family: {{VALUE}}",fontWeight:"font-weight: {{VALUE}}",fontStyle:"font-style: {{VALUE}}",fontVariant:"font-variant: {{VALUE}}",letterSpacing:"letter-spacing: {{VALUE}}px",align:"text-align: {{VALUE}}",padding:"padding: {{VALUE}}px",whiteSpace:"white-space: {{VALUE}}",lineHeight:"line-height: {{VALUE}}px",wordWrapWidth:"max-width: {{VALUE}}px"},Hc={fill:r=>`color: ${de.shared.setValue(r).toHex()}`,breakWords:r=>`word-wrap: ${r?"break-all":"break-word"}`,stroke:Zf,dropShadow:Kf};function E0(r,e){for(const t in r){const n=r[t],i=[];for(const s in n)Hc[s]?i.push(Hc[s](n[s])):Nc[s]&&i.push(Nc[s].replace("{{VALUE}}",n[s]));e.push(`${t} { ${i.join(";")} }`)}}class Ks extends qt{constructor(e={}){super(e),this._cssOverrides=[],this.cssOverrides??(this.cssOverrides=e.cssOverrides),this.tagStyles=e.tagStyles??{}}set cssOverrides(e){this._cssOverrides=e instanceof Array?e:[e],this.update()}get cssOverrides(){return this._cssOverrides}_generateKey(){return this._styleKey=Pf(this)+this._cssOverrides.join("-"),this._styleKey}update(){this._cssStyle=null,super.update()}clone(){return new Ks({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow?{...this.dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,cssOverrides:this.cssOverrides})}get cssStyle(){return this._cssStyle||(this._cssStyle=A0(this)),this._cssStyle}addOverride(...e){const t=e.filter(n=>!this.cssOverrides.includes(n));t.length>0&&(this.cssOverrides.push(...t),this.update())}removeOverride(...e){const t=e.filter(n=>this.cssOverrides.includes(n));t.length>0&&(this.cssOverrides=this.cssOverrides.filter(n=>!t.includes(n)),this.update())}set fill(e){typeof e!="string"&&typeof e!="number"&&fe("[HTMLTextStyle] only color fill is not supported by HTMLText"),super.fill=e}set stroke(e){e&&typeof e!="string"&&typeof e!="number"&&fe("[HTMLTextStyle] only color stroke is not supported by HTMLText"),super.stroke=e}}const $c="http://www.w3.org/2000/svg",Wc="http://www.w3.org/1999/xhtml";class Qf{constructor(){this.svgRoot=document.createElementNS($c,"svg"),this.foreignObject=document.createElementNS($c,"foreignObject"),this.domElement=document.createElementNS(Wc,"div"),this.styleElement=document.createElementNS(Wc,"style"),this.image=new Image;const{foreignObject:e,svgRoot:t,styleElement:n,domElement:i}=this;e.setAttribute("width","10000"),e.setAttribute("height","10000"),e.style.overflow="hidden",t.appendChild(e),e.appendChild(n),e.appendChild(i)}}let Vc;function Jf(r,e,t,n){n=n||Vc||(Vc=new Qf);const{domElement:i,styleElement:s,svgRoot:o}=n;i.innerHTML=`<style>${e.cssStyle};</style><div style='padding:0'>${r}</div>`,i.setAttribute("style","transform-origin: top left; display: inline-block"),t&&(s.textContent=t),document.body.appendChild(o);const a=i.getBoundingClientRect();o.remove();const l=Yt.measureFont(e.fontStyle).descent,h=e.padding*2;return{width:a.width-h,height:a.height+l-h}}class M0 extends Au{constructor(...e){const t=Eu(e,"HtmlText");super(t,Ks),this.renderPipeId="htmlText"}_updateBounds(){const e=this._bounds,t=this._anchor,n=Jf(this.text,this._style),{width:i,height:s}=n;e.minX=-t._x*i,e.maxX=e.minX+i,e.minY=-t._y*s,e.maxY=e.minY+s}}class B0 extends w0{uploadQueueItem(e){e instanceof Ye?this.uploadTextureSource(e):e instanceof qf?this.uploadText(e):e instanceof M0?this.uploadHTMLText(e):e instanceof P0?this.uploadBitmapText(e):e instanceof gt&&this.uploadGraphicsContext(e)}uploadTextureSource(e){this.renderer.texture.initSource(e)}uploadText(e){this.renderer.renderPipes.text.initGpuText(e)}uploadBitmapText(e){this.renderer.renderPipes.bitmapText.initGpuText(e)}uploadHTMLText(e){this.renderer.renderPipes.htmlText.initGpuText(e)}uploadGraphicsContext(e){this.renderer.graphicsContext.getContextRenderData(e);const{instructions:t}=e;for(const n of t)if(n.action==="texture"){const{image:i}=n.data;this.uploadTextureSource(i.source)}else if(n.action==="fill"){const{texture:i}=n.data.style;this.uploadTextureSource(i.source)}return null}}class ed extends B0{destroy(){clearTimeout(this.timeout),this.renderer=null,this.queue=null,this.resolves=null}}ed.extension={type:[R.WebGLSystem,R.WebGPUSystem],name:"prepare"};class td{constructor(){this._didUpload=!1,this._tempState=Zt.for2d()}init(e){e.renderer.runners.contextChange.add(this)}contextChange(){this._didUpload=!1}start(e,t,n){const i=e.renderer;i.shader.bind(n,this._didUpload),i.shader.updateUniformGroup(i.globalUniforms.uniformGroup),i.geometry.bind(t,n.glProgram)}execute(e,t){const n=e.renderer;this._didUpload=!0,this._tempState.blendMode=t.blendMode,n.state.set(this._tempState);const i=t.textures.textures;for(let s=0;s<t.textures.count;s++)n.texture.bind(i[s],s);n.geometry.draw("triangle-list",t.size,t.start)}}td.extension={type:[R.WebGLPipesAdaptor],name:"batch"};const rs=Zt.for2d();class rd{start(e,t,n){const i=e.renderer,s=i.encoder,o=n.gpuProgram;this._shader=n,this._geometry=t,s.setGeometry(t,o),rs.blendMode="normal",i.pipeline.getPipeline(t,o,rs);const a=i.globalUniforms.bindGroup;s.resetBindGroup(1),s.setBindGroup(0,a,o)}execute(e,t){const n=this._shader.gpuProgram,i=e.renderer,s=i.encoder;if(!t.bindGroup){const l=t.textures;t.bindGroup=fu(l.textures,l.count)}rs.blendMode=t.blendMode;const o=i.bindGroup.getBindGroup(t.bindGroup,n,1),a=i.pipeline.getPipeline(this._geometry,n,rs);t.bindGroup._touch(i.textureGC.count),s.setPipeline(a),s.renderPassEncoder.setBindGroup(1,o),s.renderPassEncoder.drawIndexed(t.size,1,t.start)}}rd.extension={type:[R.WebGPUPipesAdaptor],name:"batch"};const Mu=class nd{constructor(e,t){var n,i;this.state=Zt.for2d(),this._batchersByInstructionSet=Object.create(null),this._activeBatches=Object.create(null),this.renderer=e,this._adaptor=t,(i=(n=this._adaptor).init)==null||i.call(n,this)}static getBatcher(e){return new this._availableBatchers[e]}buildStart(e){let t=this._batchersByInstructionSet[e.uid];t||(t=this._batchersByInstructionSet[e.uid]=Object.create(null),t.default||(t.default=new _u)),this._activeBatches=t,this._activeBatch=this._activeBatches.default;for(const n in this._activeBatches)this._activeBatches[n].begin()}addToBatch(e,t){if(this._activeBatch.name!==e.batcherName){this._activeBatch.break(t);let n=this._activeBatches[e.batcherName];n||(n=this._activeBatches[e.batcherName]=nd.getBatcher(e.batcherName),n.begin()),this._activeBatch=n}this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){this._activeBatch.break(e);const t=this._activeBatches;for(const n in t){const i=t[n],s=i.geometry;s.indexBuffer.setDataWithSize(i.indexBuffer,i.indexSize,!0),s.buffers[0].setDataWithSize(i.attributeBuffer.float32View,i.attributeSize,!1)}}upload(e){const t=this._batchersByInstructionSet[e.uid];for(const n in t){const i=t[n],s=i.geometry;i.dirty&&(i.dirty=!1,s.buffers[0].update(i.attributeSize*4))}}execute(e){if(e.action==="startBatch"){const t=e.batcher,n=t.geometry,i=t.shader;this._adaptor.start(this,n,i)}this._adaptor.execute(this,e)}destroy(){this.state=null,this.renderer=null,this._adaptor=null;for(const e in this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};Mu.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"batch"};Mu._availableBatchers=Object.create(null);let id=Mu;ke.handleByMap(R.Batcher,id._availableBatchers);ke.add(_u);const ai={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},R0={...ai,vertex:{...ai.vertex,header:ai.vertex.header.replace("group(1)","group(2)")}},Bu={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}},I0={name:"texture-bit",vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},F0={name:"texture-bit",vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}};function O0(r,e){const t=r.root,n=r.instructionSet;n.reset();const i=e.renderPipes?e:e.batch.renderer,s=i.renderPipes;s.batch.buildStart(n),s.blendMode.buildStart(),s.colorMask.buildStart(),t.sortableChildren&&t.sortChildren(),sd(t,n,i,!0),s.batch.buildEnd(n),s.blendMode.buildEnd(n)}function Zs(r,e,t){const n=t.renderPipes?t:t.batch.renderer;r.globalDisplayStatus<7||!r.includeInBuild||(r.sortableChildren&&r.sortChildren(),r.isSimple?U0(r,e,n):sd(r,e,n,!1))}function U0(r,e,t){if(r.renderPipeId){const{renderPipes:n,renderableGC:i}=t;n.blendMode.setBlendMode(r,r.groupBlendMode,e),r.didViewUpdate=!1,n[r.renderPipeId].addRenderable(r,e),i.addRenderable(r,e)}if(!r.renderGroup){const n=r.children,i=n.length;for(let s=0;s<i;s++)Zs(n[s],e,t)}}function sd(r,e,t,n){const{renderPipes:i,renderableGC:s}=t;if(!n&&r.renderGroup)i.renderGroup.addRenderGroup(r.renderGroup,e);else{for(let l=0;l<r.effects.length;l++){const h=r.effects[l];i[h.pipe].push(h,r,e)}const o=r.renderPipeId;o&&(i.blendMode.setBlendMode(r,r.groupBlendMode,e),r.didViewUpdate=!1,i[o].addRenderable(r,e),s.addRenderable(r,e));const a=r.children;if(a.length)for(let l=0;l<a.length;l++)Zs(a[l],e,t);for(let l=r.effects.length-1;l>=0;l--){const h=r.effects[l];i[h.pipe].pop(h,r,e)}}}const k0=new xt;class D0 extends ws{constructor(){super(),this.filters=[new y0({sprite:new Tr(Q.EMPTY),resolution:"inherit",antialias:"inherit"})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}}class od{constructor(e){this._activeMaskStage=[],this._renderer=e}push(e,t,n){const i=this._renderer;if(i.renderPipes.batch.break(n),n.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:e,canBundle:!1,maskedContainer:t}),e.renderMaskToTexture){const s=e.mask;s.includeInBuild=!0,Zs(s,n,i),s.includeInBuild=!1}i.renderPipes.batch.break(n),n.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,canBundle:!1})}pop(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:e,canBundle:!1})}execute(e){const t=this._renderer,n=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){const i=Ae.get(D0);if(n){e.mask.mask.measurable=!0;const s=su(e.mask.mask,!0,k0);e.mask.mask.measurable=!1,s.ceil();const o=t.renderTarget.renderTarget.colorTexture.source,a=He.getOptimalTexture(s.width,s.height,o._resolution,o.antialias);t.renderTarget.push(a,!0),t.globalUniforms.push({offset:s,worldColor:4294967295});const l=i.sprite;l.texture=a,l.worldTransform.tx=s.minX,l.worldTransform.ty=s.minY,this._activeMaskStage.push({filterEffect:i,maskedContainer:e.maskedContainer,filterTexture:a})}else i.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:i,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){const i=this._activeMaskStage[this._activeMaskStage.length-1];n&&(t.type===St.WEBGL&&t.renderTarget.finishRenderPass(),t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({renderPipeId:"filter",action:"pushFilter",container:i.maskedContainer,filterEffect:i.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();const i=this._activeMaskStage.pop();n&&He.returnTexture(i.filterTexture),Ae.return(i.filterEffect)}}destroy(){this._renderer=null,this._activeMaskStage=null}}od.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"alphaMask"};class ad{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,n){this._renderer.renderPipes.batch.break(n);const s=this._colorStack;s[this._colorStackIndex]=s[this._colorStackIndex-1]&e.mask;const o=this._colorStack[this._colorStackIndex];o!==this._currentColor&&(this._currentColor=o,n.add({renderPipeId:"colorMask",colorMask:o,canBundle:!1})),this._colorStackIndex++}pop(e,t,n){this._renderer.renderPipes.batch.break(n);const s=this._colorStack;this._colorStackIndex--;const o=s[this._colorStackIndex-1];o!==this._currentColor&&(this._currentColor=o,n.add({renderPipeId:"colorMask",colorMask:o,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._colorStack=null}}ad.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"colorMask"};class ud{constructor(e){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=e}push(e,t,n){var i;const s=e,o=this._renderer;o.renderPipes.batch.break(n),o.renderPipes.blendMode.setBlendMode(s.mask,"none",n),n.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:e,canBundle:!1});const a=s.mask;a.includeInBuild=!0,this._maskHash.has(s)||this._maskHash.set(s,{instructionsStart:0,instructionsLength:0});const l=this._maskHash.get(s);l.instructionsStart=n.instructionSize,Zs(a,n,o),a.includeInBuild=!1,o.renderPipes.batch.break(n),n.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:e,canBundle:!1});const h=n.instructionSize-l.instructionsStart-1;l.instructionsLength=h;const f=o.renderTarget.renderTarget.uid;(i=this._maskStackHash)[f]??(i[f]=0)}pop(e,t,n){const i=e,s=this._renderer;s.renderPipes.batch.break(n),s.renderPipes.blendMode.setBlendMode(i.mask,"none",n),n.add({renderPipeId:"stencilMask",action:"popMaskBegin",canBundle:!1});const o=this._maskHash.get(e);for(let a=0;a<o.instructionsLength;a++)n.instructions[n.instructionSize++]=n.instructions[o.instructionsStart++];n.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){var t;const n=this._renderer,i=n.renderTarget.renderTarget.uid;let s=(t=this._maskStackHash)[i]??(t[i]=0);e.action==="pushMaskBegin"?(n.renderTarget.ensureDepthStencil(),n.stencil.setStencilMode(rt.RENDERING_MASK_ADD,s),s++,n.colorMask.setMask(0)):e.action==="pushMaskEnd"?(n.stencil.setStencilMode(rt.MASK_ACTIVE,s),n.colorMask.setMask(15)):e.action==="popMaskBegin"?(n.colorMask.setMask(0),s!==0?n.stencil.setStencilMode(rt.RENDERING_MASK_REMOVE,s):(n.renderTarget.clear(null,bt.STENCIL),n.stencil.setStencilMode(rt.DISABLED,s)),s--):e.action==="popMaskEnd"&&(n.stencil.setStencilMode(rt.MASK_ACTIVE,s),n.colorMask.setMask(15)),this._maskStackHash[i]=s}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null}}ud.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"stencilMask"};var fs=(r=>(r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",r))(fs||{});class G0{constructor(e,t){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.type=t}}class ld{constructor(e){this._gpuBuffers=Object.create(null),this._boundBufferBases=Object.create(null),this._renderer=e}destroy(){this._renderer=null,this._gl=null,this._gpuBuffers=null,this._boundBufferBases=null}contextChange(){this._gpuBuffers=Object.create(null),this._gl=this._renderer.gl}getGlBuffer(e){return this._gpuBuffers[e.uid]||this.createGLBuffer(e)}bind(e){const{_gl:t}=this,n=this.getGlBuffer(e);t.bindBuffer(n.type,n.buffer)}bindBufferBase(e,t){const{_gl:n}=this;if(this._boundBufferBases[t]!==e){const i=this.getGlBuffer(e);this._boundBufferBases[t]=e,n.bindBufferBase(n.UNIFORM_BUFFER,t,i.buffer)}}bindBufferRange(e,t,n){const{_gl:i}=this;n=n||0;const s=this.getGlBuffer(e);i.bindBufferRange(i.UNIFORM_BUFFER,t||0,s.buffer,n*256,256)}updateBuffer(e){const{_gl:t}=this,n=this.getGlBuffer(e);if(e._updateID===n.updateID)return n;n.updateID=e._updateID,t.bindBuffer(n.type,n.buffer);const i=e.data;if(n.byteLength>=e.data.byteLength)t.bufferSubData(n.type,0,i,0,e._updateSize/i.BYTES_PER_ELEMENT);else{const s=e.descriptor.usage&Fe.STATIC?t.STATIC_DRAW:t.DYNAMIC_DRAW;n.byteLength=i.byteLength,t.bufferData(n.type,i,s)}return n}destroyAll(){const e=this._gl;for(const t in this._gpuBuffers)e.deleteBuffer(this._gpuBuffers[t].buffer);this._gpuBuffers=Object.create(null)}onBufferDestroy(e,t){const n=this._gpuBuffers[e.uid],i=this._gl;t||i.deleteBuffer(n.buffer),this._gpuBuffers[e.uid]=null}createGLBuffer(e){const{_gl:t}=this;let n=fs.ARRAY_BUFFER;e.descriptor.usage&Fe.INDEX?n=fs.ELEMENT_ARRAY_BUFFER:e.descriptor.usage&Fe.UNIFORM&&(n=fs.UNIFORM_BUFFER);const i=new G0(t.createBuffer(),n);return this._gpuBuffers[e.uid]=i,e.on("destroy",this.onBufferDestroy,this),i}}ld.extension={type:[R.WebGLSystem],name:"buffer"};const Ru=class cd{constructor(e){this.supports={uint32Indices:!0,uniformBufferObject:!0,vertexArrayObject:!0,srgbTextures:!0,nonPowOf2wrapping:!0,msaa:!0,nonPowOf2mipmaps:!0},this._renderer=e,this.extensions=Object.create(null),this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this)}get isLost(){return!this.gl||this.gl.isContextLost()}contextChange(e){this.gl=e,this._renderer.gl=e}init(e){e={...cd.defaultOptions,...e};let t=this.multiView=e.multiView;if(e.context&&t&&(fe("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together."),t=!1),t?this.canvas=Ce.get().createCanvas(this._renderer.canvas.width,this._renderer.canvas.height):this.canvas=this._renderer.view.canvas,e.context)this.initFromContext(e.context);else{const n=this._renderer.background.alpha<1,i=e.premultipliedAlpha??!0,s=e.antialias&&!this._renderer.backBuffer.useBackBuffer;this.createContext(e.preferWebGLVersion,{alpha:n,premultipliedAlpha:i,antialias:s,stencil:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,powerPreference:e.powerPreference??"default"})}}ensureCanvasSize(e){if(!this.multiView){e!==this.canvas&&fe("multiView is disabled, but targetCanvas is not the main canvas");return}const{canvas:t}=this;(t.width<e.width||t.height<e.height)&&(t.width=Math.max(e.width,e.width),t.height=Math.max(e.height,e.height))}initFromContext(e){this.gl=e,this.webGLVersion=e instanceof Ce.get().getWebGLRenderingContext()?1:2,this.getExtensions(),this.validateContext(e),this._renderer.runners.contextChange.emit(e);const t=this._renderer.view.canvas;t.addEventListener("webglcontextlost",this.handleContextLost,!1),t.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}createContext(e,t){let n;const i=this.canvas;if(e===2&&(n=i.getContext("webgl2",t)),!n&&(n=i.getContext("webgl",t),!n))throw new Error("This browser does not support WebGL. Try using the canvas renderer");this.gl=n,this.initFromContext(this.gl)}getExtensions(){const{gl:e}=this,t={anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc"),bptc:e.getExtension("EXT_texture_compression_bptc"),rgtc:e.getExtension("EXT_texture_compression_rgtc"),loseContext:e.getExtension("WEBGL_lose_context")};if(this.webGLVersion===1)this.extensions={...t,drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear"),vertexAttribDivisorANGLE:e.getExtension("ANGLE_instanced_arrays"),srgb:e.getExtension("EXT_sRGB")};else{this.extensions={...t,colorBufferFloat:e.getExtension("EXT_color_buffer_float")};const n=e.getExtension("WEBGL_provoking_vertex");n&&n.provokingVertexWEBGL(n.FIRST_VERTEX_CONVENTION_WEBGL)}}handleContextLost(e){e.preventDefault(),this._contextLossForced&&(this._contextLossForced=!1,setTimeout(()=>{var t;this.gl.isContextLost()&&((t=this.extensions.loseContext)==null||t.restoreContext())},0))}handleContextRestored(){this._renderer.runners.contextChange.emit(this.gl)}destroy(){var t;const e=this._renderer.view.canvas;this._renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),(t=this.extensions.loseContext)==null||t.loseContext()}forceContextLoss(){var e;(e=this.extensions.loseContext)==null||e.loseContext(),this._contextLossForced=!0}validateContext(e){const t=e.getContextAttributes();t&&!t.stencil&&fe("Provided WebGL context does not have a stencil buffer, masks may not render correctly");const n=this.supports,i=this.webGLVersion===2,s=this.extensions;n.uint32Indices=i||!!s.uint32ElementIndex,n.uniformBufferObject=i,n.vertexArrayObject=i||!!s.vertexArrayObject,n.srgbTextures=i||!!s.srgb,n.nonPowOf2wrapping=i,n.nonPowOf2mipmaps=i,n.msaa=i,n.uint32Indices||fe("Provided WebGL context does not support 32 index buffer, large scenes may not render correctly")}};Ru.extension={type:[R.WebGLSystem],name:"context"};Ru.defaultOptions={context:null,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:void 0,preferWebGLVersion:2,multiView:!1};let z0=Ru;function hd(r,e){for(const t in r.attributes){const n=r.attributes[t],i=e[t];i?(n.format??(n.format=i.format),n.offset??(n.offset=i.offset),n.instance??(n.instance=i.instance)):fe(`Attribute ${t} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}L0(r)}function L0(r){const{buffers:e,attributes:t}=r,n={},i={};for(const s in e){const o=e[s];n[o.uid]=0,i[o.uid]=0}for(const s in t){const o=t[s];n[o.buffer.uid]+=ci(o.format).stride}for(const s in t){const o=t[s];o.stride??(o.stride=n[o.buffer.uid]),o.start??(o.start=i[o.buffer.uid]),i[o.buffer.uid]+=ci(o.format).stride}}var za=(r=>(r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL",r))(za||{}),fd=(r=>(r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",r))(fd||{}),Ee=(r=>(r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT",r))(Ee||{});const jc={uint8x2:Ee.UNSIGNED_BYTE,uint8x4:Ee.UNSIGNED_BYTE,sint8x2:Ee.BYTE,sint8x4:Ee.BYTE,unorm8x2:Ee.UNSIGNED_BYTE,unorm8x4:Ee.UNSIGNED_BYTE,snorm8x2:Ee.BYTE,snorm8x4:Ee.BYTE,uint16x2:Ee.UNSIGNED_SHORT,uint16x4:Ee.UNSIGNED_SHORT,sint16x2:Ee.SHORT,sint16x4:Ee.SHORT,unorm16x2:Ee.UNSIGNED_SHORT,unorm16x4:Ee.UNSIGNED_SHORT,snorm16x2:Ee.SHORT,snorm16x4:Ee.SHORT,float16x2:Ee.HALF_FLOAT,float16x4:Ee.HALF_FLOAT,float32:Ee.FLOAT,float32x2:Ee.FLOAT,float32x3:Ee.FLOAT,float32x4:Ee.FLOAT,uint32:Ee.UNSIGNED_INT,uint32x2:Ee.UNSIGNED_INT,uint32x3:Ee.UNSIGNED_INT,uint32x4:Ee.UNSIGNED_INT,sint32:Ee.INT,sint32x2:Ee.INT,sint32x3:Ee.INT,sint32x4:Ee.INT};function N0(r){return jc[r]??jc.float32}const H0={"point-list":0,"line-list":1,"line-strip":3,"triangle-list":4,"triangle-strip":5};class dd{constructor(e){this._geometryVaoHash=Object.create(null),this._renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0}contextChange(){const e=this.gl=this._renderer.gl;if(!this._renderer.context.supports.vertexArrayObject)throw new Error("[PixiJS] Vertex Array Objects are not supported on this device");const t=this._renderer.context.extensions.vertexArrayObject;t&&(e.createVertexArray=()=>t.createVertexArrayOES(),e.bindVertexArray=i=>t.bindVertexArrayOES(i),e.deleteVertexArray=i=>t.deleteVertexArrayOES(i));const n=this._renderer.context.extensions.vertexAttribDivisorANGLE;n&&(e.drawArraysInstanced=(i,s,o,a)=>{n.drawArraysInstancedANGLE(i,s,o,a)},e.drawElementsInstanced=(i,s,o,a,l)=>{n.drawElementsInstancedANGLE(i,s,o,a,l)},e.vertexAttribDivisor=(i,s)=>n.vertexAttribDivisorANGLE(i,s)),this._activeGeometry=null,this._activeVao=null,this._geometryVaoHash=Object.create(null)}bind(e,t){const n=this.gl;this._activeGeometry=e;const i=this.getVao(e,t);this._activeVao!==i&&(this._activeVao=i,n.bindVertexArray(i)),this.updateBuffers()}reset(){this.unbind()}updateBuffers(){const e=this._activeGeometry,t=this._renderer.buffer;for(let n=0;n<e.buffers.length;n++){const i=e.buffers[n];t.updateBuffer(i)}}checkCompatibility(e,t){const n=e.attributes,i=t._attributeData;for(const s in i)if(!n[s])throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`)}getSignature(e,t){const n=e.attributes,i=t._attributeData,s=["g",e.uid];for(const o in n)i[o]&&s.push(o,i[o].location);return s.join("-")}getVao(e,t){var n;return((n=this._geometryVaoHash[e.uid])==null?void 0:n[t._key])||this.initGeometryVao(e,t)}initGeometryVao(e,t,n=!0){const i=this._renderer.gl,s=this._renderer.buffer;this._renderer.shader._getProgramData(t),this.checkCompatibility(e,t);const o=this.getSignature(e,t);this._geometryVaoHash[e.uid]||(this._geometryVaoHash[e.uid]=Object.create(null),e.on("destroy",this.onGeometryDestroy,this));const a=this._geometryVaoHash[e.uid];let l=a[o];if(l)return a[t._key]=l,l;hd(e,t._attributeData);const h=e.buffers;l=i.createVertexArray(),i.bindVertexArray(l);for(let f=0;f<h.length;f++){const p=h[f];s.bind(p)}return this.activateVao(e,t),a[t._key]=l,a[o]=l,i.bindVertexArray(null),l}onGeometryDestroy(e,t){const n=this._geometryVaoHash[e.uid],i=this.gl;if(n){if(t)for(const s in n)this._activeVao!==n[s]&&this.unbind(),i.deleteVertexArray(n[s]);this._geometryVaoHash[e.uid]=null}}destroyAll(e=!1){const t=this.gl;for(const n in this._geometryVaoHash){if(e)for(const i in this._geometryVaoHash[n]){const s=this._geometryVaoHash[n];this._activeVao!==s&&this.unbind(),t.deleteVertexArray(s[i])}this._geometryVaoHash[n]=null}}activateVao(e,t){var a;const n=this._renderer.gl,i=this._renderer.buffer,s=e.attributes;e.indexBuffer&&i.bind(e.indexBuffer);let o=null;for(const l in s){const h=s[l],f=h.buffer,p=i.getGlBuffer(f),x=t._attributeData[l];if(x){o!==p&&(i.bind(f),o=p);const y=x.location;n.enableVertexAttribArray(y);const b=ci(h.format),T=N0(h.format);if(((a=x.format)==null?void 0:a.substring(1,4))==="int"?n.vertexAttribIPointer(y,b.size,T,h.stride,h.offset):n.vertexAttribPointer(y,b.size,T,b.normalised,h.stride,h.offset),h.instance)if(this.hasInstance){const C=h.divisor??1;n.vertexAttribDivisor(y,C)}else throw new Error("geometry error, GPU Instancing is not supported on this device")}}}draw(e,t,n,i){const{gl:s}=this._renderer,o=this._activeGeometry,a=H0[o.topology||e];if(i||(i=o.instanceCount),o.indexBuffer){const l=o.indexBuffer.data.BYTES_PER_ELEMENT,h=l===2?s.UNSIGNED_SHORT:s.UNSIGNED_INT;i>1?s.drawElementsInstanced(a,t||o.indexBuffer.data.length,h,(n||0)*l,i):s.drawElements(a,t||o.indexBuffer.data.length,h,(n||0)*l)}else i>1?s.drawArraysInstanced(a,n||0,t||o.getSize(),i):s.drawArrays(a,n||0,t||o.getSize());return this}unbind(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null}destroy(){this._renderer=null,this.gl=null,this._activeVao=null,this._activeGeometry=null}}dd.extension={type:[R.WebGLSystem],name:"geometry"};const $0=new Ti({attributes:{aPosition:[-1,-1,3,-1,-1,3]}}),Iu=class pd{constructor(e){this.useBackBuffer=!1,this._useBackBufferThisRender=!1,this._renderer=e}init(e={}){const{useBackBuffer:t,antialias:n}={...pd.defaultOptions,...e};this.useBackBuffer=t,this._antialias=n,this._renderer.context.supports.msaa||(fe("antialiasing, is not supported on when using the back buffer"),this._antialias=!1),this._state=Zt.for2d();const i=new ge({vertex:`
                attribute vec2 aPosition;
                out vec2 vUv;

                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);

                    vUv = (aPosition + 1.0) / 2.0;

                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`,fragment:`
                in vec2 vUv;
                out vec4 finalColor;

                uniform sampler2D uTexture;

                void main() {
                    finalColor = texture(uTexture, vUv);
                }`,name:"big-triangle"});this._bigTriangleShader=new Gt({glProgram:i,resources:{uTexture:Q.WHITE.source}})}renderStart(e){const t=this._renderer.renderTarget.getRenderTarget(e.target);if(this._useBackBufferThisRender=this.useBackBuffer&&!!t.isRoot,this._useBackBufferThisRender){const n=this._renderer.renderTarget.getRenderTarget(e.target);this._targetTexture=n.colorTexture,e.target=this._getBackBufferTexture(n.colorTexture)}}renderEnd(){this._presentBackBuffer()}_presentBackBuffer(){const e=this._renderer;e.renderTarget.finishRenderPass(),this._useBackBufferThisRender&&(e.renderTarget.bind(this._targetTexture,!1),this._bigTriangleShader.resources.uTexture=this._backBufferTexture.source,e.encoder.draw({geometry:$0,shader:this._bigTriangleShader,state:this._state}))}_getBackBufferTexture(e){return this._backBufferTexture=this._backBufferTexture||new Q({source:new Ye({width:e.width,height:e.height,resolution:e._resolution,antialias:this._antialias})}),this._backBufferTexture.source.resize(e.width,e.height,e._resolution),this._backBufferTexture}destroy(){this._backBufferTexture&&(this._backBufferTexture.destroy(),this._backBufferTexture=null)}};Iu.extension={type:[R.WebGLSystem],name:"backBuffer",priority:1};Iu.defaultOptions={useBackBuffer:!1};let W0=Iu;class md{constructor(e){this._colorMaskCache=15,this._renderer=e}setMask(e){this._colorMaskCache!==e&&(this._colorMaskCache=e,this._renderer.gl.colorMask(!!(e&8),!!(e&4),!!(e&2),!!(e&1)))}}md.extension={type:[R.WebGLSystem],name:"colorMask"};class gd{constructor(e){this.commandFinished=Promise.resolve(),this._renderer=e}setGeometry(e,t){this._renderer.geometry.bind(e,t.glProgram)}finishRenderPass(){}draw(e){const t=this._renderer,{geometry:n,shader:i,state:s,skipSync:o,topology:a,size:l,start:h,instanceCount:f}=e;t.shader.bind(i,o),t.geometry.bind(n,t.shader._activeProgram),s&&t.state.set(s),t.geometry.draw(a,l,h,f??n.instanceCount)}destroy(){this._renderer=null}}gd.extension={type:[R.WebGLSystem],name:"encoder"};class V0{constructor(){this.width=-1,this.height=-1,this.msaa=!1,this.msaaRenderBuffer=[]}}const Yr=[];Yr[rt.NONE]=void 0;Yr[rt.DISABLED]={stencilWriteMask:0,stencilReadMask:0};Yr[rt.RENDERING_MASK_ADD]={stencilFront:{compare:"equal",passOp:"increment-clamp"},stencilBack:{compare:"equal",passOp:"increment-clamp"}};Yr[rt.RENDERING_MASK_REMOVE]={stencilFront:{compare:"equal",passOp:"decrement-clamp"},stencilBack:{compare:"equal",passOp:"decrement-clamp"}};Yr[rt.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}};class xd{constructor(e){this._stencilCache={enabled:!1,stencilReference:0,stencilMode:rt.NONE},this._renderTargetStencilState=Object.create(null),e.renderTarget.onRenderTargetChange.add(this)}contextChange(e){this._gl=e,this._comparisonFuncMapping={always:e.ALWAYS,never:e.NEVER,equal:e.EQUAL,"not-equal":e.NOTEQUAL,less:e.LESS,"less-equal":e.LEQUAL,greater:e.GREATER,"greater-equal":e.GEQUAL},this._stencilOpsMapping={keep:e.KEEP,zero:e.ZERO,replace:e.REPLACE,invert:e.INVERT,"increment-clamp":e.INCR,"decrement-clamp":e.DECR,"increment-wrap":e.INCR_WRAP,"decrement-wrap":e.DECR_WRAP},this._stencilCache.enabled=!1,this._stencilCache.stencilMode=rt.NONE,this._stencilCache.stencilReference=0}onRenderTargetChange(e){if(this._activeRenderTarget===e)return;this._activeRenderTarget=e;let t=this._renderTargetStencilState[e.uid];t||(t=this._renderTargetStencilState[e.uid]={stencilMode:rt.DISABLED,stencilReference:0}),this.setStencilMode(t.stencilMode,t.stencilReference)}setStencilMode(e,t){const n=this._renderTargetStencilState[this._activeRenderTarget.uid],i=this._gl,s=Yr[e],o=this._stencilCache;if(n.stencilMode=e,n.stencilReference=t,e===rt.DISABLED){this._stencilCache.enabled&&(this._stencilCache.enabled=!1,i.disable(i.STENCIL_TEST));return}this._stencilCache.enabled||(this._stencilCache.enabled=!0,i.enable(i.STENCIL_TEST)),(e!==o.stencilMode||o.stencilReference!==t)&&(o.stencilMode=e,o.stencilReference=t,i.stencilFunc(this._comparisonFuncMapping[s.stencilBack.compare],t,255),i.stencilOp(i.KEEP,i.KEEP,this._stencilOpsMapping[s.stencilBack.passOp]))}}xd.extension={type:[R.WebGLSystem],name:"stencil"};class _d{constructor(e){this._syncFunctionHash=Object.create(null),this._adaptor=e,this._systemCheck()}_systemCheck(){if(!Jh())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}ensureUniformGroup(e){const t=this.getUniformGroupData(e);e.buffer||(e.buffer=new Dt({data:new Float32Array(t.layout.size/4),usage:Fe.UNIFORM|Fe.COPY_DST}))}getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}_initUniformGroup(e){const t=e._signature;let n=this._syncFunctionHash[t];if(!n){const i=Object.keys(e.uniformStructures).map(a=>e.uniformStructures[a]),s=this._adaptor.createUboElements(i),o=this._generateUboSync(s.uboElements);n=this._syncFunctionHash[t]={layout:s,syncFunction:o}}return this._syncFunctionHash[t]}_generateUboSync(e){return this._adaptor.generateUboSync(e)}syncUniformGroup(e,t,n){const i=this.getUniformGroupData(e);return e.buffer||(e.buffer=new Dt({data:new Float32Array(i.layout.size/4),usage:Fe.UNIFORM|Fe.COPY_DST})),t||(t=e.buffer.data),n||(n=0),i.syncFunction(e.uniforms,t,n),!0}updateUniformGroup(e){if(e.isStatic&&!e._dirtyId)return!1;e._dirtyId=0;const t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}}const vd={f32:4,"vec2<f32>":8,"vec3<f32>":12,"vec4<f32>":16,"mat2x2<f32>":16*2,"mat3x3<f32>":16*3,"mat4x4<f32>":16*4};function j0(r){const e=r.map(s=>({data:s,offset:0,size:0}));let t=0,n=0,i=0;for(let s=0;s<e.length;s++){const o=e[s];if(t=vd[o.data.type],!t)throw new Error(`Unknown type ${o.data.type}`);if(o.data.size>1&&(t=Math.max(t,16)*o.data.size),o.size=t,n%t!==0&&n<16){const a=n%t%16;n+=a,i+=a}n+t>16?(i=Math.ceil(i/16)*16,o.offset=i,i+=t,n=t):(o.offset=i,n+=t,i+=t)}return i=Math.ceil(i/16)*16,{uboElements:e,size:i}}const Hr=[{type:"mat3x3<f32>",test:r=>r.value.a!==void 0,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:"vec4<f32>",test:r=>r.type==="vec4<f32>"&&r.size===1&&r.value.width!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:"vec2<f32>",test:r=>r.type==="vec2<f32>"&&r.size===1&&r.value.x!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:"vec4<f32>",test:r=>r.type==="vec4<f32>"&&r.size===1&&r.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:"vec3<f32>",test:r=>r.type==="vec3<f32>"&&r.size===1&&r.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}];function yd(r,e,t,n){const i=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `];let s=0;for(let a=0;a<r.length;a++){const l=r[a],h=l.data.name;let f=!1,p=0;for(let x=0;x<Hr.length;x++)if(Hr[x].test(l.data)){p=l.offset/4,i.push(`name = "${h}";`,`offset += ${p-s};`,Hr[x][e]||Hr[x].ubo),f=!0;break}if(!f)if(l.data.size>1)p=l.offset/4,i.push(t(l,p-s));else{const x=n[l.data.type];p=l.offset/4,i.push(`
                    v = uv.${h};
                    offset += ${p-s};
                    ${x};
                `)}s=p}const o=i.join(`
`);return new Function("uv","data","offset",o)}function cn(r,e){return`
        for (let i = 0; i < ${r*e}; i++) {
            data[offset + (((i / ${r})|0) * 4) + (i % ${r})] = v[i];
        }
    `}const bd={f32:`
        data[offset] = v;`,i32:`
        data[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":cn(3,2),"mat4x2<f32>":cn(4,2),"mat2x3<f32>":cn(2,3),"mat4x3<f32>":cn(4,3),"mat2x4<f32>":cn(2,4),"mat3x4<f32>":cn(3,4)},X0={...bd,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `};function Y0(r,e){const t=Math.max(vd[r.data.type]/16,1),n=r.data.value.length/r.data.size,i=(4-n%4)%4;return`
        v = uv.${r.data.name};
        offset += ${e};

        arrayOffset = offset;

        t = 0;

        for(var i=0; i < ${r.data.size*t}; i++)
        {
            for(var j = 0; j < ${n}; j++)
            {
                data[arrayOffset++] = v[t++];
            }
            ${i!==0?`arrayOffset += ${i};`:""}
        }
    `}function q0(r){return yd(r,"uboStd40",Y0,bd)}class Sd extends _d{constructor(){super({createUboElements:j0,generateUboSync:q0})}}Sd.extension={type:[R.WebGLSystem],name:"ubo"};class K0{constructor(){this._clearColorCache=[0,0,0,0],this._viewPortCache=new Le}init(e,t){this._renderer=e,this._renderTargetSystem=t,e.runners.contextChange.add(this)}contextChange(){this._clearColorCache=[0,0,0,0],this._viewPortCache=new Le}copyToTexture(e,t,n,i,s){const o=this._renderTargetSystem,a=this._renderer,l=o.getGpuRenderTarget(e),h=a.gl;return this.finishRenderPass(e),h.bindFramebuffer(h.FRAMEBUFFER,l.resolveTargetFramebuffer),a.texture.bind(t,0),h.copyTexSubImage2D(h.TEXTURE_2D,0,s.x,s.y,n.x,n.y,i.width,i.height),t}startRenderPass(e,t=!0,n,i){const s=this._renderTargetSystem,o=e.colorTexture,a=s.getGpuRenderTarget(e);let l=i.y;e.isRoot&&(l=o.pixelHeight-i.height),e.colorTextures.forEach(p=>{this._renderer.texture.unbind(p)});const h=this._renderer.gl;h.bindFramebuffer(h.FRAMEBUFFER,a.framebuffer);const f=this._viewPortCache;(f.x!==i.x||f.y!==l||f.width!==i.width||f.height!==i.height)&&(f.x=i.x,f.y=l,f.width=i.width,f.height=i.height,h.viewport(i.x,l,i.width,i.height)),!a.depthStencilRenderBuffer&&(e.stencil||e.depth)&&this._initStencil(a),this.clear(e,t,n)}finishRenderPass(e){const n=this._renderTargetSystem.getGpuRenderTarget(e);if(!n.msaa)return;const i=this._renderer.gl;i.bindFramebuffer(i.FRAMEBUFFER,n.resolveTargetFramebuffer),i.bindFramebuffer(i.READ_FRAMEBUFFER,n.framebuffer),i.blitFramebuffer(0,0,n.width,n.height,0,0,n.width,n.height,i.COLOR_BUFFER_BIT,i.NEAREST),i.bindFramebuffer(i.FRAMEBUFFER,n.framebuffer)}initGpuRenderTarget(e){const n=this._renderer.gl,i=new V0,s=e.colorTexture;return Cr.test(s.resource)?(this._renderer.context.ensureCanvasSize(e.colorTexture.resource),i.framebuffer=null,i):(this._initColor(e,i),n.bindFramebuffer(n.FRAMEBUFFER,null),i)}destroyGpuRenderTarget(e){const t=this._renderer.gl;e.framebuffer&&(t.deleteFramebuffer(e.framebuffer),e.framebuffer=null),e.resolveTargetFramebuffer&&(t.deleteFramebuffer(e.resolveTargetFramebuffer),e.resolveTargetFramebuffer=null),e.depthStencilRenderBuffer&&(t.deleteRenderbuffer(e.depthStencilRenderBuffer),e.depthStencilRenderBuffer=null),e.msaaRenderBuffer.forEach(n=>{t.deleteRenderbuffer(n)}),e.msaaRenderBuffer=null}clear(e,t,n){if(!t)return;const i=this._renderTargetSystem;typeof t=="boolean"&&(t=t?bt.ALL:bt.NONE);const s=this._renderer.gl;if(t&bt.COLOR){n??(n=i.defaultClearColor);const o=this._clearColorCache,a=n;(o[0]!==a[0]||o[1]!==a[1]||o[2]!==a[2]||o[3]!==a[3])&&(o[0]=a[0],o[1]=a[1],o[2]=a[2],o[3]=a[3],s.clearColor(a[0],a[1],a[2],a[3]))}s.clear(t)}resizeGpuRenderTarget(e){if(e.isRoot)return;const n=this._renderTargetSystem.getGpuRenderTarget(e);this._resizeColor(e,n),(e.stencil||e.depth)&&this._resizeStencil(n)}_initColor(e,t){const n=this._renderer,i=n.gl,s=i.createFramebuffer();if(t.resolveTargetFramebuffer=s,i.bindFramebuffer(i.FRAMEBUFFER,s),t.width=e.colorTexture.source.pixelWidth,t.height=e.colorTexture.source.pixelHeight,e.colorTextures.forEach((o,a)=>{const l=o.source;l.antialias&&(n.context.supports.msaa?t.msaa=!0:fe("[RenderTexture] Antialiasing on textures is not supported in WebGL1")),n.texture.bindSource(l,0);const f=n.texture.getGlSource(l).texture;i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+a,3553,f,0)}),t.msaa){const o=i.createFramebuffer();t.framebuffer=o,i.bindFramebuffer(i.FRAMEBUFFER,o),e.colorTextures.forEach((a,l)=>{const h=i.createRenderbuffer();t.msaaRenderBuffer[l]=h})}else t.framebuffer=s;this._resizeColor(e,t)}_resizeColor(e,t){const n=e.colorTexture.source;if(t.width=n.pixelWidth,t.height=n.pixelHeight,e.colorTextures.forEach((i,s)=>{s!==0&&i.source.resize(n.width,n.height,n._resolution)}),t.msaa){const i=this._renderer,s=i.gl,o=t.framebuffer;s.bindFramebuffer(s.FRAMEBUFFER,o),e.colorTextures.forEach((a,l)=>{const h=a.source;i.texture.bindSource(h,0);const p=i.texture.getGlSource(h).internalFormat,x=t.msaaRenderBuffer[l];s.bindRenderbuffer(s.RENDERBUFFER,x),s.renderbufferStorageMultisample(s.RENDERBUFFER,4,p,h.pixelWidth,h.pixelHeight),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+l,s.RENDERBUFFER,x)})}}_initStencil(e){if(e.framebuffer===null)return;const t=this._renderer.gl,n=t.createRenderbuffer();e.depthStencilRenderBuffer=n,t.bindRenderbuffer(t.RENDERBUFFER,n),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,n),this._resizeStencil(e)}_resizeStencil(e){const t=this._renderer.gl;t.bindRenderbuffer(t.RENDERBUFFER,e.depthStencilRenderBuffer),e.msaa?t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,this._renderer.context.webGLVersion===2?t.DEPTH24_STENCIL8:t.DEPTH_STENCIL,e.width,e.height)}postrender(e){if(this._renderer.context.multiView&&Cr.test(e.colorTexture.resource)){const t=this._renderer.context.canvas,n=e.colorTexture;n.context2D.drawImage(t,0,n.pixelHeight-t.height)}}}function Z0(r,e,t,n,i,s){const o=s?1:-1;return r.identity(),r.a=1/n*2,r.d=o*(1/i*2),r.tx=-1-e*r.a,r.ty=-o-t*r.d,r}const Kn=new Map;function Td(r,e){if(!Kn.has(r)){const t=new Q({source:new Cr({resource:r,...e})}),n=()=>{Kn.get(r)===t&&Kn.delete(r)};t.once("destroy",n),t.source.once("destroy",n),Kn.set(r,t)}return Kn.get(r)}function Q0(r){const e=r.colorTexture.source.resource;return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement&&document.body.contains(e)}const Cd=class wd{constructor(e={}){if(this.uid=Ve("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,e={...wd.defaultOptions,...e},this.stencil=e.stencil,this.depth=e.depth,this.isRoot=e.isRoot,typeof e.colorTextures=="number"){this._managedColorTextures=!0;for(let t=0;t<e.colorTextures;t++)this.colorTextures.push(new Ye({width:e.width,height:e.height,resolution:e.resolution,antialias:e.antialias}))}else{this.colorTextures=[...e.colorTextures.map(n=>n.source)];const t=this.colorTexture.source;this.resize(t.width,t.height,t._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(e.depthStencilTexture||this.stencil)&&(e.depthStencilTexture instanceof Q||e.depthStencilTexture instanceof Ye?this.depthStencilTexture=e.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const e=this._size;return e[0]=this.pixelWidth,e[1]=this.pixelHeight,e}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new Ye({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(e,t,n=this.resolution,i=!1){this.dirtyId++,this.colorTextures.forEach((s,o)=>{i&&o===0||s.source.resize(e,t,n)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(e,t,n)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(e=>{e.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};Cd.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let La=Cd;class Pd{constructor(e){this.rootViewPort=new Le,this.viewport=new Le,this.onRenderTargetChange=new nf("onRenderTargetChange"),this.projectionMatrix=new ue,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._renderer=e}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart({target:e,clear:t,clearColor:n,frame:i}){this._renderTargetStack.length=0,this.push(e,t,n,i),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=Q0(this.rootRenderTarget)}postrender(){var e,t;(t=(e=this.adaptor).postrender)==null||t.call(e,this.rootRenderTarget)}bind(e,t=!0,n,i){const s=this.getRenderTarget(e),o=this.renderTarget!==s;this.renderTarget=s,this.renderSurface=e;const a=this.getGpuRenderTarget(s);(s.pixelWidth!==a.width||s.pixelHeight!==a.height)&&(this.adaptor.resizeGpuRenderTarget(s),a.width=s.pixelWidth,a.height=s.pixelHeight);const l=s.colorTexture,h=this.viewport,f=l.pixelWidth,p=l.pixelHeight;if(!i&&e instanceof Q&&(i=e.frame),i){const x=l._resolution;h.x=i.x*x+.5|0,h.y=i.y*x+.5|0,h.width=i.width*x+.5|0,h.height=i.height*x+.5|0}else h.x=0,h.y=0,h.width=f,h.height=p;return Z0(this.projectionMatrix,0,0,h.width/l.resolution,h.height/l.resolution,!s.isRoot),this.adaptor.startRenderPass(s,t,n,h),o&&this.onRenderTargetChange.emit(s),s}clear(e,t=bt.ALL,n){t&&(e&&(e=this.getRenderTarget(e)),this.adaptor.clear(e||this.renderTarget,t,n,this.viewport))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e,t=bt.ALL,n,i){const s=this.bind(e,t,n,i);return this._renderTargetStack.push({renderTarget:s,frame:i}),s}pop(){this._renderTargetStack.pop();const e=this._renderTargetStack[this._renderTargetStack.length-1];this.bind(e.renderTarget,!1,null,e.frame)}getRenderTarget(e){return e.isTexture&&(e=e.source),this._renderSurfaceToRenderTargetHash.get(e)??this._initRenderTarget(e)}copyToTexture(e,t,n,i,s){n.x<0&&(i.width+=n.x,s.x-=n.x,n.x=0),n.y<0&&(i.height+=n.y,s.y-=n.y,n.y=0);const{pixelWidth:o,pixelHeight:a}=e;return i.width=Math.min(i.width,o-n.x),i.height=Math.min(i.height,a-n.y),this.adaptor.copyToTexture(e,t,n,i,s)}ensureDepthStencil(){this.renderTarget.stencil||(this.renderTarget.stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport))}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e!==t&&e.destroy()}),this._renderSurfaceToRenderTargetHash.clear(),this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;return Cr.test(e)&&(e=Td(e).source),e instanceof La?t=e:e instanceof Ye&&(t=new La({colorTextures:[e]}),Cr.test(e.source.resource)&&(t.isRoot=!0),e.once("destroy",()=>{t.destroy(),this._renderSurfaceToRenderTargetHash.delete(e);const n=this._gpuRenderTargetHash[t.uid];n&&(this._gpuRenderTargetHash[t.uid]=null,this.adaptor.destroyGpuRenderTarget(n))})),this._renderSurfaceToRenderTargetHash.set(e,t),t}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}}class Ad extends Pd{constructor(e){super(e),this.adaptor=new K0,this.adaptor.init(e,this)}}Ad.extension={type:[R.WebGLSystem],name:"renderTarget"};class Fu extends it{constructor({buffer:e,offset:t,size:n}){super(),this.uid=Ve("buffer"),this._resourceType="bufferResource",this._touched=0,this._resourceId=Ve("resource"),this._bufferResource=!0,this.destroyed=!1,this.buffer=e,this.offset=t|0,this.size=n,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this._resourceId=Ve("resource"),this.emit("change",this)}destroy(e=!1){this.destroyed=!0,e&&this.buffer.destroy(),this.emit("change",this),this.buffer=null}}function J0(r,e){const t=[],n=[`
        var g = s.groups;
        var sS = r.shader;
        var p = s.glProgram;
        var ugS = r.uniformGroup;
        var resources;
    `];let i=!1,s=0,o=0;const a=e._getProgramData(r.glProgram);for(const h in r.groups){const f=r.groups[h];t.push(`
            resources = g[${h}].resources;
        `);for(const p in f.resources){const x=f.resources[p];if(x instanceof ht)x.ubo?t.push(`
                        sS.bindUniformBlock(
                            resources[${p}],
                            sS._uniformBindMap[${h}[${p}],
                            ${s++}
                        );
                    `):t.push(`
                        ugS.updateUniformGroup(resources[${p}], p, sD);
                    `);else if(x instanceof Fu)t.push(`
                    sS.bindUniformBlock(
                        resources[${p}],
                        sS._uniformBindMap[${h}[${p}],
                        ${s++}
                    );
                `);else if(x instanceof Ye){const y=r._uniformBindMap[h][p],b=a.uniformData[y];b&&(i||(i=!0,n.push(`
                        var tS = r.texture;
                        `)),e._gl.uniform1i(b.location,o),t.push(`
                        tS.bind(resources[${p}], ${o});
                    `),o++)}}}const l=[...n,...t].join(`
`);return new Function("r","s","sD",l)}class eb{constructor(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBlockBindings={}}destroy(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBlockBindings=null,this.program=null}}function Xc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function ia(r){const e=new Array(r);for(let t=0;t<e.length;t++)e[t]=!1;return e}function Ed(r,e){switch(r){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return ia(2*e);case"bvec3":return ia(3*e);case"bvec4":return ia(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}let ns=null;const Yc={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"},tb={float:"float32",vec2:"float32x2",vec3:"float32x3",vec4:"float32x4",int:"sint32",ivec2:"sint32x2",ivec3:"sint32x3",ivec4:"sint32x4",uint:"uint32",uvec2:"uint32x2",uvec3:"uint32x3",uvec4:"uint32x4",bool:"uint32",bvec2:"uint32x2",bvec3:"uint32x3",bvec4:"uint32x4"};function Md(r,e){if(!ns){const t=Object.keys(Yc);ns={};for(let n=0;n<t.length;++n){const i=t[n];ns[r[i]]=Yc[i]}}return ns[e]}function rb(r,e){const t=Md(r,e);return tb[t]||"float32"}function nb(r,e,t=!1){const n={},i=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=e.getActiveAttrib(r,o);if(a.name.startsWith("gl_"))continue;const l=rb(e,a.type);n[a.name]={location:0,format:l,stride:ci(l).stride,offset:0,instance:!1,start:0}}const s=Object.keys(n);if(t){s.sort((o,a)=>o>a?1:-1);for(let o=0;o<s.length;o++)n[s[o]].location=o,e.bindAttribLocation(r,o,s[o]);e.linkProgram(r)}else for(let o=0;o<s.length;o++)n[s[o]].location=e.getAttribLocation(r,s[o]);return n}function ib(r,e){if(!e.ACTIVE_UNIFORM_BLOCKS)return{};const t={},n=e.getProgramParameter(r,e.ACTIVE_UNIFORM_BLOCKS);for(let i=0;i<n;i++){const s=e.getActiveUniformBlockName(r,i),o=e.getUniformBlockIndex(r,s),a=e.getActiveUniformBlockParameter(r,i,e.UNIFORM_BLOCK_DATA_SIZE);t[s]={name:s,index:o,size:a}}return t}function sb(r,e){const t={},n=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let i=0;i<n;i++){const s=e.getActiveUniform(r,i),o=s.name.replace(/\[.*?\]$/,""),a=!!s.name.match(/\[.*?\]$/),l=Md(e,s.type);t[o]={name:o,index:i,type:l,size:s.size,isArray:a,value:Ed(l,s.size)}}return t}function qc(r,e){const t=r.getShaderSource(e).split(`
`).map((h,f)=>`${f}: ${h}`),n=r.getShaderInfoLog(e),i=n.split(`
`),s={},o=i.map(h=>parseFloat(h.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(h=>h&&!s[h]?(s[h]=!0,!0):!1),a=[""];o.forEach(h=>{t[h-1]=`%c${t[h-1]}%c`,a.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});const l=t.join(`
`);a[0]=l,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn(...a),console.groupEnd()}function ob(r,e,t,n){r.getProgramParameter(e,r.LINK_STATUS)||(r.getShaderParameter(t,r.COMPILE_STATUS)||qc(r,t),r.getShaderParameter(n,r.COMPILE_STATUS)||qc(r,n),console.error("PixiJS Error: Could not initialize shader."),r.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",r.getProgramInfoLog(e)))}function ab(r,e){const t=Xc(r,r.VERTEX_SHADER,e.vertex),n=Xc(r,r.FRAGMENT_SHADER,e.fragment),i=r.createProgram();r.attachShader(i,t),r.attachShader(i,n);const s=e.transformFeedbackVaryings;s&&(typeof r.transformFeedbackVaryings!="function"?fe("TransformFeedback is not supported but TransformFeedbackVaryings are given."):r.transformFeedbackVaryings(i,s.names,s.bufferMode==="separate"?r.SEPARATE_ATTRIBS:r.INTERLEAVED_ATTRIBS)),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS)||ob(r,i,t,n),e._attributeData=nb(i,r,!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertex)),e._uniformData=sb(i,r),e._uniformBlockData=ib(i,r),r.deleteShader(t),r.deleteShader(n);const o={};for(const l in e._uniformData){const h=e._uniformData[l];o[l]={location:r.getUniformLocation(i,l),value:Ed(h.type,h.size)}}return new eb(i,o)}const is={textureCount:0,blockIndex:0};class Bd{constructor(e){this._activeProgram=null,this._programDataHash=Object.create(null),this._nextIndex=0,this._boundUniformsIdsToIndexHash=Object.create(null),this._boundIndexToUniformsHash=Object.create(null),this._shaderSyncFunctions=Object.create(null),this._renderer=e}contextChange(e){this._gl=e,this._maxBindings=e.MAX_UNIFORM_BUFFER_BINDINGS?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0,this._programDataHash=Object.create(null),this._boundUniformsIdsToIndexHash=Object.create(null),this._boundIndexToUniformsHash=Object.create(null),this._shaderSyncFunctions=Object.create(null),this._activeProgram=null,this.maxTextures=Bn()}bind(e,t){if(this._setProgram(e.glProgram),t)return;is.textureCount=0,is.blockIndex=0;let n=this._shaderSyncFunctions[e.glProgram._key];n||(n=this._shaderSyncFunctions[e.glProgram._key]=this._generateShaderSync(e,this)),n(this._renderer,e,is)}updateUniformGroup(e){this._renderer.uniformGroup.updateUniformGroup(e,this._activeProgram,is)}bindUniformBlock(e,t,n=0){const i=this._renderer.buffer,s=this._getProgramData(this._activeProgram),o=e._bufferResource;o&&this._renderer.ubo.updateUniformGroup(e),i.updateBuffer(e.buffer);let a=this._boundUniformsIdsToIndexHash[e.uid];if(a===void 0){const f=this._nextIndex++%this._maxBindings,p=this._boundIndexToUniformsHash[f];p&&(this._boundUniformsIdsToIndexHash[p.uid]=void 0),a=this._boundUniformsIdsToIndexHash[e.uid]=f,this._boundIndexToUniformsHash[f]=e,o?i.bindBufferRange(e.buffer,f,e.offset):i.bindBufferBase(e.buffer,f)}const l=this._gl,h=this._activeProgram._uniformBlockData[t].index;s.uniformBlockBindings[n]!==a&&(s.uniformBlockBindings[n]=a,l.uniformBlockBinding(s.program,h,a))}_setProgram(e){if(this._activeProgram===e)return;this._activeProgram=e;const t=this._getProgramData(e);this._gl.useProgram(t.program)}_getProgramData(e){return this._programDataHash[e._key]||this._createProgramData(e)}_createProgramData(e){const t=e._key;return this._programDataHash[t]=ab(this._gl,e),this._programDataHash[t]}destroy(){for(const e of Object.keys(this._programDataHash))this._programDataHash[e].destroy(),this._programDataHash[e]=null;this._programDataHash=null,this._boundUniformsIdsToIndexHash=null}_generateShaderSync(e,t){return J0(e,t)}}Bd.extension={type:[R.WebGLSystem],name:"shader"};const ub={f32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1f(location, v);
        }`,"vec2<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2f(location, v[0], v[1]);
        }`,"vec3<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3f(location, v[0], v[1], v[2]);
        }`,"vec4<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4f(location, v[0], v[1], v[2], v[3]);
        }`,i32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,"vec2<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,"vec3<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,"vec4<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,u32:`if (cv !== v) {
            cu.value = v;
            gl.uniform1ui(location, v);
        }`,"vec2<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2ui(location, v[0], v[1]);
        }`,"vec3<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3ui(location, v[0], v[1], v[2]);
        }`,"vec4<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
        }`,bool:`if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,"vec2<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,"vec3<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,"vec4<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,"mat2x2<f32>":"gl.uniformMatrix2fv(location, false, v);","mat3x3<f32>":"gl.uniformMatrix3fv(location, false, v);","mat4x4<f32>":"gl.uniformMatrix4fv(location, false, v);"},lb={f32:"gl.uniform1fv(location, v);","vec2<f32>":"gl.uniform2fv(location, v);","vec3<f32>":"gl.uniform3fv(location, v);","vec4<f32>":"gl.uniform4fv(location, v);","mat2x2<f32>":"gl.uniformMatrix2fv(location, false, v);","mat3x3<f32>":"gl.uniformMatrix3fv(location, false, v);","mat4x4<f32>":"gl.uniformMatrix4fv(location, false, v);",i32:"gl.uniform1iv(location, v);","vec2<i32>":"gl.uniform2iv(location, v);","vec3<i32>":"gl.uniform3iv(location, v);","vec4<i32>":"gl.uniform4iv(location, v);",u32:"gl.uniform1iv(location, v);","vec2<u32>":"gl.uniform2iv(location, v);","vec3<u32>":"gl.uniform3iv(location, v);","vec4<u32>":"gl.uniform4iv(location, v);",bool:"gl.uniform1iv(location, v);","vec2<bool>":"gl.uniform2iv(location, v);","vec3<bool>":"gl.uniform3iv(location, v);","vec4<bool>":"gl.uniform4iv(location, v);"};function cb(r,e){const t=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
        var name = null;
    `];for(const n in r.uniforms){if(!e[n]){r.uniforms[n]instanceof ht?r.uniforms[n].ubo?t.push(`
                        renderer.shader.bindUniformBlock(uv.${n}, "${n}");
                    `):t.push(`
                        renderer.shader.updateUniformGroup(uv.${n});
                    `):r.uniforms[n]instanceof Fu&&t.push(`
                        renderer.shader.bindBufferResource(uv.${n}, "${n}");
                    `);continue}const i=r.uniformStructures[n];let s=!1;for(let o=0;o<Hr.length;o++){const a=Hr[o];if(i.type===a.type&&a.test(i)){t.push(`name = "${n}";`,Hr[o].uniform),s=!0;break}}if(!s){const a=(i.size===1?ub:lb)[i.type].replace("location",`ud["${n}"].location`);t.push(`
            cu = ud["${n}"];
            cv = cu.value;
            v = uv["${n}"];
            ${a};`)}}return new Function("ud","uv","renderer","syncData",t.join(`
`))}class Rd{constructor(e){this._cache={},this._uniformGroupSyncHash={},this._renderer=e,this.gl=null,this._cache={}}contextChange(e){this.gl=e}updateUniformGroup(e,t,n){const i=this._renderer.shader._getProgramData(t);(!e.isStatic||e._dirtyId!==i.uniformDirtyGroups[e.uid])&&(i.uniformDirtyGroups[e.uid]=e._dirtyId,this._getUniformSyncFunction(e,t)(i.uniformData,e.uniforms,this._renderer,n))}_getUniformSyncFunction(e,t){var n;return((n=this._uniformGroupSyncHash[e._signature])==null?void 0:n[t._key])||this._createUniformSyncFunction(e,t)}_createUniformSyncFunction(e,t){const n=this._uniformGroupSyncHash[e._signature]||(this._uniformGroupSyncHash[e._signature]={}),i=this._getSignature(e,t._uniformData,"u");return this._cache[i]||(this._cache[i]=this._generateUniformsSync(e,t._uniformData)),n[t._key]=this._cache[i],n[t._key]}_generateUniformsSync(e,t){return cb(e,t)}_getSignature(e,t,n){const i=e.uniforms,s=[`${n}-`];for(const o in i)s.push(o),t[o]&&s.push(t[o].type);return s.join("-")}destroy(){this._renderer=null,this._cache=null}}Rd.extension={type:[R.WebGLSystem],name:"uniformGroup"};function hb(r){const e={};if(e.normal=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e.add=[r.ONE,r.ONE],e.multiply=[r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e.screen=[r.ONE,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e.none=[0,0],e["normal-npm"]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e["add-npm"]=[r.SRC_ALPHA,r.ONE,r.ONE,r.ONE],e["screen-npm"]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e.erase=[r.ZERO,r.ONE_MINUS_SRC_ALPHA],!(r instanceof Ce.get().getWebGLRenderingContext()))e.min=[r.ONE,r.ONE,r.ONE,r.ONE,r.MIN,r.MIN],e.max=[r.ONE,r.ONE,r.ONE,r.ONE,r.MAX,r.MAX];else{const n=r.getExtension("EXT_blend_minmax");n&&(e.min=[r.ONE,r.ONE,r.ONE,r.ONE,n.MIN_EXT,n.MIN_EXT],e.max=[r.ONE,r.ONE,r.ONE,r.ONE,n.MAX_EXT,n.MAX_EXT])}return e}const fb=0,db=1,pb=2,mb=3,gb=4,xb=5,Id=class Na{constructor(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode="none",this._blendEq=!1,this.map=[],this.map[fb]=this.setBlend,this.map[db]=this.setOffset,this.map[pb]=this.setCullFace,this.map[mb]=this.setDepthTest,this.map[gb]=this.setFrontFace,this.map[xb]=this.setDepthMask,this.checks=[],this.defaultState=Zt.for2d()}contextChange(e){this.gl=e,this.blendModesMap=hb(e),this.reset()}set(e){if(e=e||this.defaultState,this.stateId!==e.data){let t=this.stateId^e.data,n=0;for(;t;)t&1&&this.map[n].call(this,!!(e.data&1<<n)),t=t>>1,n++;this.stateId=e.data}for(let t=0;t<this.checks.length;t++)this.checks[t](this,e)}forceState(e){e=e||this.defaultState;for(let t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(let t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data}setBlend(e){this._updateCheck(Na._checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)}setOffset(e){this._updateCheck(Na._checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)}setDepthTest(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)}setDepthMask(e){this.gl.depthMask(e)}setCullFace(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)}setFrontFace(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])}setBlendMode(e){if(this.blendModesMap[e]||(e="normal"),e===this.blendMode)return;this.blendMode=e;const t=this.blendModesMap[e],n=this.gl;t.length===2?n.blendFunc(t[0],t[1]):n.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,n.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}setPolygonOffset(e,t){this.gl.polygonOffset(e,t)}reset(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode="",this.setBlendMode("normal")}_updateCheck(e,t){const n=this.checks.indexOf(e);t&&n===-1?this.checks.push(e):!t&&n!==-1&&this.checks.splice(n,1)}static _checkBlendMode(e,t){e.setBlendMode(t.blendMode)}static _checkPolygonOffset(e,t){e.setPolygonOffset(1,t.polygonOffset)}destroy(){this.gl=null,this.checks.length=0}};Id.extension={type:[R.WebGLSystem],name:"state"};let _b=Id;class vb{constructor(e){this.target=fd.TEXTURE_2D,this.texture=e,this.width=-1,this.height=-1,this.type=Ee.UNSIGNED_BYTE,this.internalFormat=za.RGBA,this.format=za.RGBA,this.samplerType=0}}const yb={id:"buffer",upload(r,e,t){e.width===r.width||e.height===r.height?t.texSubImage2D(t.TEXTURE_2D,0,0,0,r.width,r.height,e.format,e.type,r.resource):t.texImage2D(e.target,0,e.internalFormat,r.width,r.height,0,e.format,e.type,r.resource),e.width=r.width,e.height=r.height}},bb={"bc1-rgba-unorm":!0,"bc1-rgba-unorm-srgb":!0,"bc2-rgba-unorm":!0,"bc2-rgba-unorm-srgb":!0,"bc3-rgba-unorm":!0,"bc3-rgba-unorm-srgb":!0,"bc4-r-unorm":!0,"bc4-r-snorm":!0,"bc5-rg-unorm":!0,"bc5-rg-snorm":!0,"bc6h-rgb-ufloat":!0,"bc6h-rgb-float":!0,"bc7-rgba-unorm":!0,"bc7-rgba-unorm-srgb":!0,"etc2-rgb8unorm":!0,"etc2-rgb8unorm-srgb":!0,"etc2-rgb8a1unorm":!0,"etc2-rgb8a1unorm-srgb":!0,"etc2-rgba8unorm":!0,"etc2-rgba8unorm-srgb":!0,"eac-r11unorm":!0,"eac-r11snorm":!0,"eac-rg11unorm":!0,"eac-rg11snorm":!0,"astc-4x4-unorm":!0,"astc-4x4-unorm-srgb":!0,"astc-5x4-unorm":!0,"astc-5x4-unorm-srgb":!0,"astc-5x5-unorm":!0,"astc-5x5-unorm-srgb":!0,"astc-6x5-unorm":!0,"astc-6x5-unorm-srgb":!0,"astc-6x6-unorm":!0,"astc-6x6-unorm-srgb":!0,"astc-8x5-unorm":!0,"astc-8x5-unorm-srgb":!0,"astc-8x6-unorm":!0,"astc-8x6-unorm-srgb":!0,"astc-8x8-unorm":!0,"astc-8x8-unorm-srgb":!0,"astc-10x5-unorm":!0,"astc-10x5-unorm-srgb":!0,"astc-10x6-unorm":!0,"astc-10x6-unorm-srgb":!0,"astc-10x8-unorm":!0,"astc-10x8-unorm-srgb":!0,"astc-10x10-unorm":!0,"astc-10x10-unorm-srgb":!0,"astc-12x10-unorm":!0,"astc-12x10-unorm-srgb":!0,"astc-12x12-unorm":!0,"astc-12x12-unorm-srgb":!0},Sb={id:"compressed",upload(r,e,t){t.pixelStorei(t.UNPACK_ALIGNMENT,4);let n=r.pixelWidth,i=r.pixelHeight;const s=!!bb[r.format];for(let o=0;o<r.resource.length;o++){const a=r.resource[o];s?t.compressedTexImage2D(t.TEXTURE_2D,o,e.internalFormat,n,i,0,a):t.texImage2D(t.TEXTURE_2D,o,e.internalFormat,n,i,0,e.format,e.type,a),n=Math.max(n>>1,1),i=Math.max(i>>1,1)}}},Fd={id:"image",upload(r,e,t,n){const i=r.alphaMode==="premultiply-alpha-on-upload";t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i);const s=e.width,o=e.height,a=r.pixelWidth,l=r.pixelHeight,h=r.resourceWidth,f=r.resourceHeight;h<a||f<l?((s!==a||o!==l)&&t.texImage2D(e.target,0,e.internalFormat,a,l,0,e.format,e.type,null),n===2?t.texSubImage2D(t.TEXTURE_2D,0,0,0,h,f,e.format,e.type,r.resource):t.texSubImage2D(t.TEXTURE_2D,0,0,0,e.format,e.type,r.resource)):s===a||o===l?t.texSubImage2D(t.TEXTURE_2D,0,0,0,e.format,e.type,r.resource):n===2?t.texImage2D(e.target,0,e.internalFormat,a,l,0,e.format,e.type,r.resource):t.texImage2D(e.target,0,e.internalFormat,e.format,e.type,r.resource),e.width=a,e.height=l}},Tb={id:"video",upload(r,e,t,n){if(!r.isValid){t.texImage2D(e.target,0,e.internalFormat,1,1,0,e.format,e.type,null);return}Fd.upload(r,e,t,n)}},Kc={linear:9729,nearest:9728},Cb={linear:{linear:9987,nearest:9985},nearest:{linear:9986,nearest:9984}},sa={"clamp-to-edge":33071,repeat:10497,"mirror-repeat":33648},wb={never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519};function Zc(r,e,t,n,i,s,o,a){const l=s;if(!a||r.addressModeU!=="repeat"||r.addressModeV!=="repeat"||r.addressModeW!=="repeat"){const h=sa[o?"clamp-to-edge":r.addressModeU],f=sa[o?"clamp-to-edge":r.addressModeV],p=sa[o?"clamp-to-edge":r.addressModeW];e[i](l,e.TEXTURE_WRAP_S,h),e[i](l,e.TEXTURE_WRAP_T,f),e.TEXTURE_WRAP_R&&e[i](l,e.TEXTURE_WRAP_R,p)}if((!a||r.magFilter!=="linear")&&e[i](l,e.TEXTURE_MAG_FILTER,Kc[r.magFilter]),t){if(!a||r.mipmapFilter!=="linear"){const h=Cb[r.minFilter][r.mipmapFilter];e[i](l,e.TEXTURE_MIN_FILTER,h)}}else e[i](l,e.TEXTURE_MIN_FILTER,Kc[r.minFilter]);if(n&&r.maxAnisotropy>1){const h=Math.min(r.maxAnisotropy,e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));e[i](l,n.TEXTURE_MAX_ANISOTROPY_EXT,h)}r.compare&&e[i](l,e.TEXTURE_COMPARE_FUNC,wb[r.compare])}function Pb(r){return{r8unorm:r.RED,r8snorm:r.RED,r8uint:r.RED,r8sint:r.RED,r16uint:r.RED,r16sint:r.RED,r16float:r.RED,rg8unorm:r.RG,rg8snorm:r.RG,rg8uint:r.RG,rg8sint:r.RG,r32uint:r.RED,r32sint:r.RED,r32float:r.RED,rg16uint:r.RG,rg16sint:r.RG,rg16float:r.RG,rgba8unorm:r.RGBA,"rgba8unorm-srgb":r.RGBA,rgba8snorm:r.RGBA,rgba8uint:r.RGBA,rgba8sint:r.RGBA,bgra8unorm:r.RGBA,"bgra8unorm-srgb":r.RGBA,rgb9e5ufloat:r.RGB,rgb10a2unorm:r.RGBA,rg11b10ufloat:r.RGB,rg32uint:r.RG,rg32sint:r.RG,rg32float:r.RG,rgba16uint:r.RGBA,rgba16sint:r.RGBA,rgba16float:r.RGBA,rgba32uint:r.RGBA,rgba32sint:r.RGBA,rgba32float:r.RGBA,stencil8:r.STENCIL_INDEX8,depth16unorm:r.DEPTH_COMPONENT,depth24plus:r.DEPTH_COMPONENT,"depth24plus-stencil8":r.DEPTH_STENCIL,depth32float:r.DEPTH_COMPONENT,"depth32float-stencil8":r.DEPTH_STENCIL}}function Ab(r,e){let t={},n=r.RGBA;return r instanceof Ce.get().getWebGLRenderingContext()?e.srgb&&(t={"rgba8unorm-srgb":e.srgb.SRGB8_ALPHA8_EXT,"bgra8unorm-srgb":e.srgb.SRGB8_ALPHA8_EXT}):(t={"rgba8unorm-srgb":r.SRGB8_ALPHA8,"bgra8unorm-srgb":r.SRGB8_ALPHA8},n=r.RGBA8),{r8unorm:r.R8,r8snorm:r.R8_SNORM,r8uint:r.R8UI,r8sint:r.R8I,r16uint:r.R16UI,r16sint:r.R16I,r16float:r.R16F,rg8unorm:r.RG8,rg8snorm:r.RG8_SNORM,rg8uint:r.RG8UI,rg8sint:r.RG8I,r32uint:r.R32UI,r32sint:r.R32I,r32float:r.R32F,rg16uint:r.RG16UI,rg16sint:r.RG16I,rg16float:r.RG16F,rgba8unorm:r.RGBA,...t,rgba8snorm:r.RGBA8_SNORM,rgba8uint:r.RGBA8UI,rgba8sint:r.RGBA8I,bgra8unorm:n,rgb9e5ufloat:r.RGB9_E5,rgb10a2unorm:r.RGB10_A2,rg11b10ufloat:r.R11F_G11F_B10F,rg32uint:r.RG32UI,rg32sint:r.RG32I,rg32float:r.RG32F,rgba16uint:r.RGBA16UI,rgba16sint:r.RGBA16I,rgba16float:r.RGBA16F,rgba32uint:r.RGBA32UI,rgba32sint:r.RGBA32I,rgba32float:r.RGBA32F,stencil8:r.STENCIL_INDEX8,depth16unorm:r.DEPTH_COMPONENT16,depth24plus:r.DEPTH_COMPONENT24,"depth24plus-stencil8":r.DEPTH24_STENCIL8,depth32float:r.DEPTH_COMPONENT32F,"depth32float-stencil8":r.DEPTH32F_STENCIL8,...e.s3tc?{"bc1-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,"bc2-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,"bc3-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT}:{},...e.s3tc_sRGB?{"bc1-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,"bc2-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,"bc3-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}:{},...e.rgtc?{"bc4-r-unorm":e.rgtc.COMPRESSED_RED_RGTC1_EXT,"bc4-r-snorm":e.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,"bc5-rg-unorm":e.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,"bc5-rg-snorm":e.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}:{},...e.bptc?{"bc6h-rgb-float":e.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,"bc6h-rgb-ufloat":e.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,"bc7-rgba-unorm":e.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,"bc7-rgba-unorm-srgb":e.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT}:{},...e.etc?{"etc2-rgb8unorm":e.etc.COMPRESSED_RGB8_ETC2,"etc2-rgb8unorm-srgb":e.etc.COMPRESSED_SRGB8_ETC2,"etc2-rgb8a1unorm":e.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgb8a1unorm-srgb":e.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgba8unorm":e.etc.COMPRESSED_RGBA8_ETC2_EAC,"etc2-rgba8unorm-srgb":e.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,"eac-r11unorm":e.etc.COMPRESSED_R11_EAC,"eac-rg11unorm":e.etc.COMPRESSED_SIGNED_RG11_EAC}:{},...e.astc?{"astc-4x4-unorm":e.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,"astc-4x4-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,"astc-5x4-unorm":e.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,"astc-5x4-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,"astc-5x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,"astc-5x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,"astc-6x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,"astc-6x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,"astc-6x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,"astc-6x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,"astc-8x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,"astc-8x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,"astc-8x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,"astc-8x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,"astc-8x8-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,"astc-8x8-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,"astc-10x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,"astc-10x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,"astc-10x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,"astc-10x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,"astc-10x8-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,"astc-10x8-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,"astc-10x10-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,"astc-10x10-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,"astc-12x10-unorm":e.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,"astc-12x10-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,"astc-12x12-unorm":e.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,"astc-12x12-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR}:{}}}function Eb(r){return{r8unorm:r.UNSIGNED_BYTE,r8snorm:r.BYTE,r8uint:r.UNSIGNED_BYTE,r8sint:r.BYTE,r16uint:r.UNSIGNED_SHORT,r16sint:r.SHORT,r16float:r.HALF_FLOAT,rg8unorm:r.UNSIGNED_BYTE,rg8snorm:r.BYTE,rg8uint:r.UNSIGNED_BYTE,rg8sint:r.BYTE,r32uint:r.UNSIGNED_INT,r32sint:r.INT,r32float:r.FLOAT,rg16uint:r.UNSIGNED_SHORT,rg16sint:r.SHORT,rg16float:r.HALF_FLOAT,rgba8unorm:r.UNSIGNED_BYTE,"rgba8unorm-srgb":r.UNSIGNED_BYTE,rgba8snorm:r.BYTE,rgba8uint:r.UNSIGNED_BYTE,rgba8sint:r.BYTE,bgra8unorm:r.UNSIGNED_BYTE,"bgra8unorm-srgb":r.UNSIGNED_BYTE,rgb9e5ufloat:r.UNSIGNED_INT_5_9_9_9_REV,rgb10a2unorm:r.UNSIGNED_INT_2_10_10_10_REV,rg11b10ufloat:r.UNSIGNED_INT_10F_11F_11F_REV,rg32uint:r.UNSIGNED_INT,rg32sint:r.INT,rg32float:r.FLOAT,rgba16uint:r.UNSIGNED_SHORT,rgba16sint:r.SHORT,rgba16float:r.HALF_FLOAT,rgba32uint:r.UNSIGNED_INT,rgba32sint:r.INT,rgba32float:r.FLOAT,stencil8:r.UNSIGNED_BYTE,depth16unorm:r.UNSIGNED_SHORT,depth24plus:r.UNSIGNED_INT,"depth24plus-stencil8":r.UNSIGNED_INT_24_8,depth32float:r.FLOAT,"depth32float-stencil8":r.FLOAT_32_UNSIGNED_INT_24_8_REV}}const Mb=4;class Od{constructor(e){this.managedTextures=[],this._glTextures=Object.create(null),this._glSamplers=Object.create(null),this._boundTextures=[],this._activeTextureLocation=-1,this._boundSamplers=Object.create(null),this._uploads={image:Fd,buffer:yb,video:Tb,compressed:Sb},this._useSeparateSamplers=!1,this._renderer=e}contextChange(e){this._gl=e,this._mapFormatToInternalFormat||(this._mapFormatToInternalFormat=Ab(e,this._renderer.context.extensions),this._mapFormatToType=Eb(e),this._mapFormatToFormat=Pb(e)),this._glTextures=Object.create(null),this._glSamplers=Object.create(null),this._boundSamplers=Object.create(null);for(let t=0;t<16;t++)this.bind(Q.EMPTY,t)}initSource(e){this.bind(e)}bind(e,t=0){const n=e.source;e?(this.bindSource(n,t),this._useSeparateSamplers&&this._bindSampler(n.style,t)):(this.bindSource(null,t),this._useSeparateSamplers&&this._bindSampler(null,t))}bindSource(e,t=0){const n=this._gl;if(e._touched=this._renderer.textureGC.count,this._boundTextures[t]!==e){this._boundTextures[t]=e,this._activateLocation(t),e=e||Q.EMPTY.source;const i=this.getGlSource(e);n.bindTexture(i.target,i.texture)}}_bindSampler(e,t=0){const n=this._gl;if(!e){this._boundSamplers[t]=null,n.bindSampler(t,null);return}const i=this._getGlSampler(e);this._boundSamplers[t]!==i&&(this._boundSamplers[t]=i,n.bindSampler(t,i))}unbind(e){const t=e.source,n=this._boundTextures,i=this._gl;for(let s=0;s<n.length;s++)if(n[s]===t){this._activateLocation(s);const o=this.getGlSource(t);i.bindTexture(o.target,null),n[s]=null}}_activateLocation(e){this._activeTextureLocation!==e&&(this._activeTextureLocation=e,this._gl.activeTexture(this._gl.TEXTURE0+e))}_initSource(e){const t=this._gl,n=new vb(t.createTexture());if(n.type=this._mapFormatToType[e.format],n.internalFormat=this._mapFormatToInternalFormat[e.format],n.format=this._mapFormatToFormat[e.format],e.autoGenerateMipmaps&&(this._renderer.context.supports.nonPowOf2mipmaps||e.isPowerOfTwo)){const i=Math.max(e.width,e.height);e.mipLevelCount=Math.floor(Math.log2(i))+1}return this._glTextures[e.uid]=n,this.managedTextures.includes(e)||(e.on("update",this.onSourceUpdate,this),e.on("resize",this.onSourceUpdate,this),e.on("styleChange",this.onStyleChange,this),e.on("destroy",this.onSourceDestroy,this),e.on("unload",this.onSourceUnload,this),e.on("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.push(e)),this.onSourceUpdate(e),this.updateStyle(e,!1),n}onStyleChange(e){this.updateStyle(e,!1)}updateStyle(e,t){const n=this._gl,i=this.getGlSource(e);n.bindTexture(n.TEXTURE_2D,i.texture),this._boundTextures[this._activeTextureLocation]=e,Zc(e.style,n,e.mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,"texParameteri",n.TEXTURE_2D,!this._renderer.context.supports.nonPowOf2wrapping&&!e.isPowerOfTwo,t)}onSourceUnload(e){const t=this._glTextures[e.uid];t&&(this.unbind(e),this._glTextures[e.uid]=null,this._gl.deleteTexture(t.texture))}onSourceUpdate(e){const t=this._gl,n=this.getGlSource(e);t.bindTexture(t.TEXTURE_2D,n.texture),this._boundTextures[this._activeTextureLocation]=e,this._uploads[e.uploadMethodId]?this._uploads[e.uploadMethodId].upload(e,n,t,this._renderer.context.webGLVersion):t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e.pixelWidth,e.pixelHeight,0,t.RGBA,t.UNSIGNED_BYTE,null),e.autoGenerateMipmaps&&e.mipLevelCount>1&&this.onUpdateMipmaps(e,!1)}onUpdateMipmaps(e,t=!0){t&&this.bindSource(e,0);const n=this.getGlSource(e);this._gl.generateMipmap(n.target)}onSourceDestroy(e){e.off("destroy",this.onSourceDestroy,this),e.off("update",this.onSourceUpdate,this),e.off("resize",this.onSourceUpdate,this),e.off("unload",this.onSourceUnload,this),e.off("styleChange",this.onStyleChange,this),e.off("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.splice(this.managedTextures.indexOf(e),1),this.onSourceUnload(e)}_initSampler(e){const t=this._gl,n=this._gl.createSampler();return this._glSamplers[e._resourceId]=n,Zc(e,t,this._boundTextures[this._activeTextureLocation].mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,"samplerParameteri",n,!1,!0),this._glSamplers[e._resourceId]}_getGlSampler(e){return this._glSamplers[e._resourceId]||this._initSampler(e)}getGlSource(e){return this._glTextures[e.uid]||this._initSource(e)}generateCanvas(e){const{pixels:t,width:n,height:i}=this.getPixels(e),s=Ce.get().createCanvas();s.width=n,s.height=i;const o=s.getContext("2d");if(o){const a=o.createImageData(n,i);a.data.set(t),o.putImageData(a,0,0)}return s}getPixels(e){const t=e.source.resolution,n=e.frame,i=Math.max(Math.round(n.width*t),1),s=Math.max(Math.round(n.height*t),1),o=new Uint8Array(Mb*i*s),a=this._renderer,l=a.renderTarget.getRenderTarget(e),h=a.renderTarget.getGpuRenderTarget(l),f=a.gl;return f.bindFramebuffer(f.FRAMEBUFFER,h.resolveTargetFramebuffer),f.readPixels(Math.round(n.x*t),Math.round(n.y*t),i,s,f.RGBA,f.UNSIGNED_BYTE,o),{pixels:new Uint8ClampedArray(o.buffer),width:i,height:s}}destroy(){this.managedTextures.slice().forEach(e=>this.onSourceDestroy(e)),this.managedTextures=null,this._renderer=null}}Od.extension={type:[R.WebGLSystem],name:"texture"};class Ud{init(){const e=new ht({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new ue,type:"mat3x3<f32>"},uRound:{value:0,type:"f32"}}),t=Bn(),n=wi({name:"graphics",bits:[pu,gu(t),Bu,Ai]});this.shader=new Gt({glProgram:n,resources:{localUniforms:e,batchSamplers:xu(t)}})}execute(e,t){const n=t.context,i=n.customShader||this.shader,s=e.renderer,o=s.graphicsContext,{batcher:a,instructions:l}=o.getContextRenderData(n);i.groups[0]=s.globalUniforms.bindGroup,s.state.set(e.state),s.shader.bind(i),s.geometry.bind(a.geometry,i.glProgram);const h=l.instructions;for(let f=0;f<l.instructionSize;f++){const p=h[f];if(p.size){for(let x=0;x<p.textures.count;x++)s.texture.bind(p.textures.textures[x],x);s.geometry.draw("triangle-list",p.size,p.start)}}}destroy(){this.shader.destroy(!0),this.shader=null}}Ud.extension={type:[R.WebGLPipesAdaptor],name:"graphics"};class kd{init(){const e=wi({name:"mesh",bits:[Bu,F0,Ai]});this._shader=new Gt({glProgram:e,resources:{uTexture:Q.EMPTY.source,textureUniforms:{uTextureMatrix:{type:"mat3x3<f32>",value:new ue}}}})}execute(e,t){const n=e.renderer;let i=t._shader;if(i){if(!i.glProgram){fe("Mesh shader has no glProgram",t.shader);return}}else{i=this._shader;const s=t.texture,o=s.source;i.resources.uTexture=o,i.resources.uSampler=o.style,i.resources.textureUniforms.uniforms.uTextureMatrix=s.textureMatrix.mapCoord}i.groups[100]=n.globalUniforms.bindGroup,i.groups[101]=e.localUniformsBindGroup,n.encoder.draw({geometry:t._geometry,shader:i,state:t.state})}destroy(){this._shader.destroy(!0),this._shader=null}}kd.extension={type:[R.WebGLPipesAdaptor],name:"mesh"};class Dd{constructor(e){this._renderer=e}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}}Dd.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"customRender"};function Gd(r,e){const t=r.instructionSet,n=t.instructions;for(let i=0;i<t.instructionSize;i++){const s=n[i];e[s.renderPipeId].execute(s)}}class zd{constructor(e){this._renderer=e}addRenderGroup(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&(this._renderer.globalUniforms.push({worldTransformMatrix:e.worldTransform,worldColor:e.worldColorAlpha}),Gd(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop())}destroy(){this._renderer=null}}zd.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"renderGroup"};function Ou(r,e){e||(e=0);for(let t=e;t<r.length&&r[t];t++)r[t]=null}function Ld(r,e=[]){e.push(r);for(let t=0;t<r.renderGroupChildren.length;t++)Ld(r.renderGroupChildren[t],e);return e}function Bb(r,e,t){const n=r>>16&255,i=r>>8&255,s=r&255,o=e>>16&255,a=e>>8&255,l=e&255,h=n+(o-n)*t,f=i+(a-i)*t,p=s+(l-s)*t;return(h<<16)+(f<<8)+p}const oa=16777215;function Nd(r,e){return r===oa||e===oa?r+e-oa:Bb(r,e,.5)}const Rb=new Ze,Qc=ni|As|au;function Hd(r,e=!1){Ib(r);const t=r.childrenToUpdate,n=r.updateTick++;for(const i in t){const s=Number(i),o=t[i],a=o.list,l=o.index;for(let h=0;h<l;h++){const f=a[h];f.parentRenderGroup===r&&f.relativeRenderGroupDepth===s&&$d(f,n,0)}Ou(a,l),o.index=0}if(e)for(let i=0;i<r.renderGroupChildren.length;i++)Hd(r.renderGroupChildren[i],e)}function Ib(r){const e=r.root;let t;if(r.renderGroupParent){const n=r.renderGroupParent;r.worldTransform.appendFrom(e.relativeGroupTransform,n.worldTransform),r.worldColor=Nd(e.groupColor,n.worldColor),t=e.groupAlpha*n.worldAlpha}else r.worldTransform.copyFrom(e.localTransform),r.worldColor=e.localColor,t=e.localAlpha;t=t<0?0:t>1?1:t,r.worldAlpha=t,r.worldColorAlpha=r.worldColor+((t*255|0)<<24)}function $d(r,e,t){if(e===r.updateTick)return;r.updateTick=e,r.didChange=!1;const n=r.localTransform;r.updateLocalTransform();const i=r.parent;if(i&&!i.renderGroup?(t=t|r._updateFlags,r.relativeGroupTransform.appendFrom(n,i.relativeGroupTransform),t&Qc&&Jc(r,i,t)):(t=r._updateFlags,r.relativeGroupTransform.copyFrom(n),t&Qc&&Jc(r,Rb,t)),!r.renderGroup){const s=r.children,o=s.length;for(let l=0;l<o;l++)$d(s[l],e,t);const a=r.parentRenderGroup;r.renderPipeId&&!a.structureDidChange&&a.updateRenderable(r)}}function Jc(r,e,t){if(t&As){r.groupColor=Nd(r.localColor,e.groupColor);let n=r.localAlpha*e.groupAlpha;n=n<0?0:n>1?1:n,r.groupAlpha=n,r.groupColorAlpha=r.groupColor+((n*255|0)<<24)}t&au&&(r.groupBlendMode=r.localBlendMode==="inherit"?e.groupBlendMode:r.localBlendMode),t&ni&&(r.globalDisplayStatus=r.localDisplayStatus&e.globalDisplayStatus),r._updateFlags=0}function Fb(r,e){const{list:t,index:n}=r.childrenRenderablesToUpdate;let i=!1;for(let s=0;s<n;s++){const o=t[s];if(i=e[o.renderPipeId].validateRenderable(o),i)break}return r.structureDidChange=i,i}const Ob=new ue;class Wd{constructor(e){this._renderer=e}render({container:e,transform:t}){e.isRenderGroup=!0;const n=e.parent,i=e.renderGroup.renderGroupParent;e.parent=null,e.renderGroup.renderGroupParent=null;const s=this._renderer,o=Ld(e.renderGroup,[]);let a=Ob;t&&(a=a.copyFrom(e.renderGroup.localTransform),e.renderGroup.localTransform.copyFrom(t));const l=s.renderPipes;for(let h=0;h<o.length;h++){const f=o[h];f.runOnRender(),f.instructionSet.renderPipes=l,f.structureDidChange?Ou(f.childrenRenderablesToUpdate.list,0):Fb(f,l),Hd(f),f.structureDidChange?(f.structureDidChange=!1,O0(f,s)):Ub(f),f.childrenRenderablesToUpdate.index=0,s.renderPipes.batch.upload(f.instructionSet)}s.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha}),Gd(e.renderGroup,l),l.uniformBatch&&l.uniformBatch.renderEnd(),t&&e.renderGroup.localTransform.copyFrom(a),e.parent=n,e.renderGroup.renderGroupParent=i}destroy(){this._renderer=null}}Wd.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"renderGroup"};function Ub(r){const{list:e,index:t}=r.childrenRenderablesToUpdate;for(let n=0;n<t;n++){const i=e[n];i.didViewUpdate&&r.updateRenderable(i)}Ou(e,t)}class Uu{constructor(){this.batcherName="default",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}class Vd{constructor(e){this._gpuSpriteHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e}addRenderable(e,t){const n=this._getGpuSprite(e);e._didSpriteUpdate&&this._updateBatchableSprite(e,n),this._renderer.renderPipes.batch.addToBatch(n,t)}updateRenderable(e){const t=this._gpuSpriteHash[e.uid];e._didSpriteUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){const t=e._texture,n=this._getGpuSprite(e);return n.texture._source!==t._source?!n._batcher.checkAndUpdateTexture(n,t):!1}destroyRenderable(e){const t=this._gpuSpriteHash[e.uid];Ae.return(t),this._gpuSpriteHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_updateBatchableSprite(e,t){e._didSpriteUpdate=!1,t.bounds=e.bounds,t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=Ae.get(Uu);return t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.bounds=e.bounds,t.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuSpriteHash[e.uid]=t,e._didSpriteUpdate=!1,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuSpriteHash)Ae.return(this._gpuSpriteHash[e]);this._gpuSpriteHash=null,this._renderer=null}}Vd.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"sprite"};const ku=class jd{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new de(0),this.color=this._backgroundColor,this.alpha=1}init(e){e={...jd.defaultOptions,...e},this.clearBeforeRender=e.clearBeforeRender,this.color=e.background||e.backgroundColor||this._backgroundColor,this.alpha=e.backgroundAlpha,this._backgroundColor.setAlpha(e.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};ku.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"background",priority:0};ku.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};let kb=ku;const ui={};ke.handle(R.BlendMode,r=>{if(!r.name)throw new Error("BlendMode extension must have a name property");ui[r.name]=r.ref},r=>{delete ui[r.name]});class Xd{constructor(e){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e}setBlendMode(e,t,n){if(this._activeBlendMode===t){this._isAdvanced&&this._renderableList.push(e);return}this._activeBlendMode=t,this._isAdvanced&&this._endAdvancedBlendMode(n),this._isAdvanced=!!ui[t],this._isAdvanced&&(this._beginAdvancedBlendMode(n),this._renderableList.push(e))}_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);const t=this._activeBlendMode;if(!ui[t]){fe(`Unable to assign BlendMode: '${t}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);return}let n=this._filterHash[t];n||(n=this._filterHash[t]=new ws,n.filters=[new ui[t]]);const i={renderPipeId:"filter",action:"pushFilter",renderables:[],filterEffect:n,canBundle:!1};this._renderableList=i.renderables,e.add(i)}_endAdvancedBlendMode(e){this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(const e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}}Xd.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"blendMode"};const aa={png:"image/png",jpg:"image/jpeg",webp:"image/webp"},Du=class Yd{constructor(e){this._renderer=e}_normalizeOptions(e,t={}){return e instanceof Ze||e instanceof Q?{target:e,...t}:{...t,...e}}async image(e){const t=new Image;return t.src=await this.base64(e),t}async base64(e){e=this._normalizeOptions(e,Yd.defaultImageOptions);const{format:t,quality:n}=e,i=this.canvas(e);if(i.toBlob!==void 0)return new Promise((s,o)=>{i.toBlob(a=>{if(!a){o(new Error("ICanvas.toBlob failed!"));return}const l=new FileReader;l.onload=()=>s(l.result),l.onerror=o,l.readAsDataURL(a)},aa[t],n)});if(i.toDataURL!==void 0)return i.toDataURL(aa[t],n);if(i.convertToBlob!==void 0){const s=await i.convertToBlob({type:aa[t],quality:n});return new Promise((o,a)=>{const l=new FileReader;l.onload=()=>o(l.result),l.onerror=a,l.readAsDataURL(s)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(e){e=this._normalizeOptions(e);const t=e.target,n=this._renderer;if(t instanceof Q)return n.texture.generateCanvas(t);const i=n.textureGenerator.generateTexture(e),s=n.texture.generateCanvas(i);return i.destroy(),s}pixels(e){e=this._normalizeOptions(e);const t=e.target,n=this._renderer,i=t instanceof Q?t:n.textureGenerator.generateTexture(e),s=n.texture.getPixels(i);return t instanceof Ze&&i.destroy(),s}texture(e){return e=this._normalizeOptions(e),e.target instanceof Q?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){e=this._normalizeOptions(e);const t=this.canvas(e),n=document.createElement("a");n.download=e.filename??"image.png",n.href=t.toDataURL("image/png"),document.body.appendChild(n),n.click(),document.body.removeChild(n)}log(e){const t=e.width??200;e=this._normalizeOptions(e);const n=this.canvas(e),i=n.toDataURL();console.log(`[Pixi Texture] ${n.width}px ${n.height}px`);const s=["font-size: 1px;",`padding: ${t}px 300px;`,`background: url(${i}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",s)}destroy(){this._renderer=null}};Du.extension={type:[R.WebGLSystem,R.WebGPUSystem],name:"extract"};Du.defaultImageOptions={format:"png",quality:1};let Db=Du;class Gu extends Q{static create(e){return new Gu({source:new Ye(e)})}resize(e,t,n){return this.source.resize(e,t,n),this}}const Gb=new Le,zb=new xt,Lb=[0,0,0,0];class qd{constructor(e){this._renderer=e}generateTexture(e){var h;e instanceof Ze&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});const t=e.resolution||this._renderer.resolution,n=e.antialias||this._renderer.view.antialias,i=e.target;let s=e.clearColor;s?s=Array.isArray(s)&&s.length===4?s:de.shared.setValue(s).toArray():s=Lb;const o=((h=e.frame)==null?void 0:h.copyTo(Gb))||ou(i,zb).rectangle;o.width=Math.max(o.width,1/t)|0,o.height=Math.max(o.height,1/t)|0;const a=Gu.create({...e.textureSourceOptions,width:o.width,height:o.height,resolution:t,antialias:n}),l=ue.shared.translate(-o.x,-o.y);return this._renderer.render({container:i,transform:l,target:a,clearColor:s}),a.source.updateMipmaps(),a}destroy(){this._renderer=null}}qd.extension={type:[R.WebGLSystem,R.WebGPUSystem],name:"textureGenerator"};function Qs(r,e,t){const n=(r>>24&255)/255;e[t++]=(r&255)/255*n,e[t++]=(r>>8&255)/255*n,e[t++]=(r>>16&255)/255*n,e[t++]=n}class Kd{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({size:e,projectionMatrix:t,worldTransformMatrix:n,worldColor:i,offset:s}){const o=this._renderer.renderTarget.renderTarget,a=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:o,worldTransformMatrix:new ue,worldColor:4294967295,offset:new ze},l={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||o.size,worldTransformMatrix:n||a.worldTransformMatrix,worldColor:i||a.worldColor,offset:s||a.offset,bindGroup:null},h=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(h);const f=h.uniforms;f.uProjectionMatrix=l.projectionMatrix,f.uResolution=l.resolution,f.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix),f.uWorldTransformMatrix.tx-=l.offset.x,f.uWorldTransformMatrix.ty-=l.offset.y,Qs(l.worldColor,f.uWorldColorAlpha,0),h.update();let p;this._renderer.renderPipes.uniformBatch?p=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(h,!1):(p=this._bindGroupPool.pop()||new lr,this._activeBindGroups.push(p),p.setResource(h,0)),l.bindGroup=p,this._currentGlobalUniformData=l}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===St.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new ht({uProjectionMatrix:{value:new ue,type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new ue,type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}destroy(){this._renderer=null}}Kd.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"globalUniforms"};let Nb=1;class Zd{constructor(){this._tasks=[]}init(){Xe.system.add(this._update,this)}repeat(e,t){const n=Nb++;return this._tasks.push({func:e,duration:t,start:performance.now(),last:performance.now(),repeat:!0,id:n}),n}cancel(e){for(let t=0;t<this._tasks.length;t++)if(this._tasks[t].id===e){this._tasks.splice(t,1);return}}_update(){const e=performance.now();for(let t=0;t<this._tasks.length;t++){const n=this._tasks[t];if(e-n.last>=n.duration){const i=e-n.start;n.func(i),n.last=e}}}destroy(){Xe.system.remove(this._update,this),this._tasks.length=0}}Zd.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"scheduler",priority:0};let eh=!1;function Hb(r){if(!eh){if(Ce.get().getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){const e=[`%c  %c  %c  %c  %c PixiJS %c v${Ms} (${r}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${Ms} - ${r} - http://www.pixijs.com/`);eh=!0}}class zu{constructor(e){this._renderer=e}init(e){if(e.hello){let t=this._renderer.name;this._renderer.type===St.WEBGL&&(t+=` ${this._renderer.context.webGLVersion}`),Hb(t)}}}zu.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"hello",priority:-2};zu.defaultOptions={hello:!1};const Lu=class Qd{constructor(e){this._managedRenderables=[],this._renderer=e}init(e){e={...Qd.defaultOptions,...e},this.maxUnusedTime=e.renderableGCMaxUnusedTime,this._frequency=e.renderableGCFrequency,this.enabled=e.renderableGCActive}get enabled(){return!!this._handler}set enabled(e){this.enabled!==e&&(e?this._handler=this._renderer.scheduler.repeat(()=>this.run(),this._frequency):this._renderer.scheduler.cancel(this._handler))}prerender(){this._now=performance.now()}addRenderable(e,t){this.enabled&&(e._lastUsed=this._now,e._lastInstructionTick===-1&&(this._managedRenderables.push(e),e.once("destroyed",this._removeRenderable,this)),e._lastInstructionTick=t.tick)}run(){var s;const e=performance.now(),t=this._managedRenderables,n=this._renderer.renderPipes;let i=0;for(let o=0;o<t.length;o++){const a=t[o];if(a===null){i++;continue}const l=a.renderGroup??a.parentRenderGroup,h=((s=l==null?void 0:l.instructionSet)==null?void 0:s.tick)??-1;a._lastInstructionTick!==h&&e-a._lastUsed>this.maxUnusedTime?(a.destroyed||n[a.renderPipeId].destroyRenderable(a),a._lastInstructionTick=-1,i++,a.off("destroyed",this._removeRenderable,this)):t[o-i]=a}t.length=t.length-i}destroy(){this.enabled=!1,this._renderer=null,this._managedRenderables.length=0}_removeRenderable(e){const t=this._managedRenderables.indexOf(e);t>=0&&(e.off("destroyed",this._removeRenderable,this),this._managedRenderables[t]=null)}};Lu.extension={type:[R.WebGLSystem,R.WebGPUSystem],name:"renderableGC"};Lu.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};let $b=Lu;const Nu=class Jd{constructor(e){this._renderer=e,this.count=0,this.checkCount=0}init(e){e={...Jd.defaultOptions,...e},this.checkCountMax=e.textureGCCheckCountMax,this.maxIdle=e.textureGCAMaxIdle??e.textureGCMaxIdle,this.active=e.textureGCActive}postrender(){this._renderer.renderingToScreen&&(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){const e=this._renderer.texture.managedTextures;for(let t=0;t<e.length;t++){const n=e[t];n.autoGarbageCollect&&n.resource&&n._touched>-1&&this.count-n._touched>this.maxIdle&&(n._touched=-1,n.unload())}}destroy(){this._renderer=null}};Nu.extension={type:[R.WebGLSystem,R.WebGPUSystem],name:"textureGC"};Nu.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:60*60,textureGCCheckCountMax:600};let Wb=Nu;const Hu=class ep{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}init(e){e={...ep.defaultOptions,...e},e.view&&(Z(ye,"ViewSystem.view has been renamed to ViewSystem.canvas"),e.canvas=e.view),this.screen=new Le(0,0,e.width,e.height),this.canvas=e.canvas||Ce.get().createCanvas(),this.antialias=!!e.antialias,this.texture=Td(this.canvas,e),this.renderTarget=new La({colorTextures:[this.texture],depth:!!e.depth,isRoot:!0}),this.texture.source.transparent=e.backgroundAlpha<1,this.resolution=e.resolution}resize(e,t,n){this.texture.source.resize(e,t,n),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e=="boolean"?e:!!(e!=null&&e.removeView))&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};Hu.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"view",priority:0};Hu.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let tp=Hu;const rp=[kb,Kd,zu,tp,Wd,Wb,qd,Db,uf,$b,Zd],np=[Xd,id,Vd,zd,od,ud,ad,Dd],Vb=[...rp,Sd,W0,z0,ld,Od,Ad,dd,Rd,Bd,gd,_b,xd,md],jb=[...np],Xb=[td,kd,Ud],ip=[],sp=[],op=[];ke.handleByNamedList(R.WebGLSystem,ip);ke.handleByNamedList(R.WebGLPipes,sp);ke.handleByNamedList(R.WebGLPipesAdaptor,op);ke.add(...Vb,...jb,...Xb);class Yb extends js{constructor(){const e={name:"webgl",type:St.WEBGL,systems:ip,renderPipes:sp,renderPipeAdaptors:op};super(e)}}const qb=Object.freeze(Object.defineProperty({__proto__:null,WebGLRenderer:Yb},Symbol.toStringTag,{value:"Module"}));class ap{constructor(e){this._hash=Object.create(null),this._renderer=e}contextChange(e){this._gpu=e}getBindGroup(e,t,n){return e._updateKey(),this._hash[e._key]||this._createBindGroup(e,t,n)}_createBindGroup(e,t,n){const i=this._gpu.device,s=t.layout[n],o=[],a=this._renderer;for(const f in s){const p=e.resources[f]??e.resources[s[f]];let x;if(p._resourceType==="uniformGroup"){const y=p;a.ubo.updateUniformGroup(y);const b=y.buffer;x={buffer:a.buffer.getGPUBuffer(b),offset:0,size:b.descriptor.size}}else if(p._resourceType==="buffer"){const y=p;x={buffer:a.buffer.getGPUBuffer(y),offset:0,size:y.descriptor.size}}else if(p._resourceType==="bufferResource"){const y=p;x={buffer:a.buffer.getGPUBuffer(y.buffer),offset:y.offset,size:y.size}}else if(p._resourceType==="textureSampler"){const y=p;x=a.texture.getGpuSampler(y)}else if(p._resourceType==="textureSource"){const y=p;x=a.texture.getGpuSource(y).createView({})}o.push({binding:s[f],resource:x})}const l=a.shader.getProgramData(t).bindGroups[n],h=i.createBindGroup({layout:l,entries:o});return this._hash[e._key]=h,h}destroy(){for(const e of Object.keys(this._hash))this._hash[e]=null;this._hash=null,this._renderer=null}}ap.extension={type:[R.WebGPUSystem],name:"bindGroup"};class up{constructor(){this._gpuBuffers=Object.create(null),this._managedBuffers=[]}contextChange(e){this._gpu=e}getGPUBuffer(e){return this._gpuBuffers[e.uid]||this.createGPUBuffer(e)}updateBuffer(e){const t=this._gpuBuffers[e.uid]||this.createGPUBuffer(e),n=e.data;return e._updateID&&n&&(e._updateID=0,this._gpu.device.queue.writeBuffer(t,0,n.buffer,0,(e._updateSize||n.byteLength)+3&-4)),t}destroyAll(){for(const e in this._gpuBuffers)this._gpuBuffers[e].destroy();this._gpuBuffers={}}createGPUBuffer(e){this._gpuBuffers[e.uid]||(e.on("update",this.updateBuffer,this),e.on("change",this.onBufferChange,this),e.on("destroy",this.onBufferDestroy,this),this._managedBuffers.push(e));const t=this._gpu.device.createBuffer(e.descriptor);return e._updateID=0,e.data&&(Ia(e.data.buffer,t.getMappedRange()),t.unmap()),this._gpuBuffers[e.uid]=t,t}onBufferChange(e){this._gpuBuffers[e.uid].destroy(),e._updateID=0,this._gpuBuffers[e.uid]=this.createGPUBuffer(e)}onBufferDestroy(e){this._managedBuffers.splice(this._managedBuffers.indexOf(e),1),this._destroyBuffer(e)}destroy(){this._managedBuffers.forEach(e=>this._destroyBuffer(e)),this._managedBuffers=null,this._gpuBuffers=null}_destroyBuffer(e){this._gpuBuffers[e.uid].destroy(),e.off("update",this.updateBuffer,this),e.off("change",this.onBufferChange,this),e.off("destroy",this.onBufferDestroy,this),this._gpuBuffers[e.uid]=null}}up.extension={type:[R.WebGPUSystem],name:"buffer"};class Kb{constructor({minUniformOffsetAlignment:e}){this._minUniformOffsetAlignment=256,this.byteIndex=0,this._minUniformOffsetAlignment=e,this.data=new Float32Array(65535)}clear(){this.byteIndex=0}addEmptyGroup(e){if(e>this._minUniformOffsetAlignment/4)throw new Error(`UniformBufferBatch: array is too large: ${e*4}`);const t=this.byteIndex;let n=t+e*4;if(n=Math.ceil(n/this._minUniformOffsetAlignment)*this._minUniformOffsetAlignment,n>this.data.length*4)throw new Error("UniformBufferBatch: ubo batch got too big");return this.byteIndex=n,t}addGroup(e){const t=this.addEmptyGroup(e.length);for(let n=0;n<e.length;n++)this.data[t/4+n]=e[n];return t}destroy(){this._buffer.destroy(),this._buffer=null,this.data=null}}class lp{constructor(e){this._colorMaskCache=15,this._renderer=e}setMask(e){this._colorMaskCache!==e&&(this._colorMaskCache=e,this._renderer.pipeline.setColorMask(e))}destroy(){this._renderer=null,this._colorMaskCache=null}}lp.extension={type:[R.WebGPUSystem],name:"colorMask"};class $u{constructor(e){this._renderer=e}async init(e){return this._initPromise?this._initPromise:(this._initPromise=this._createDeviceAndAdaptor(e).then(t=>{this.gpu=t,this._renderer.runners.contextChange.emit(this.gpu)}),this._initPromise)}contextChange(e){this._renderer.gpu=e}async _createDeviceAndAdaptor(e){const t=await Ce.get().getNavigator().gpu.requestAdapter({powerPreference:e.powerPreference,forceFallbackAdapter:e.forceFallbackAdapter}),n=["texture-compression-bc","texture-compression-astc","texture-compression-etc2"].filter(s=>t.features.has(s)),i=await t.requestDevice({requiredFeatures:n});return{adapter:t,device:i}}destroy(){this.gpu=null,this._renderer=null}}$u.extension={type:[R.WebGPUSystem],name:"device"};$u.defaultOptions={powerPreference:void 0,forceFallbackAdapter:!1};class cp{constructor(e){this._boundBindGroup=Object.create(null),this._boundVertexBuffer=Object.create(null),this._renderer=e}renderStart(){this.commandFinished=new Promise(e=>{this._resolveCommandFinished=e}),this.commandEncoder=this._renderer.gpu.device.createCommandEncoder()}beginRenderPass(e){this.endRenderPass(),this._clearCache(),this.renderPassEncoder=this.commandEncoder.beginRenderPass(e.descriptor)}endRenderPass(){this.renderPassEncoder&&this.renderPassEncoder.end(),this.renderPassEncoder=null}setViewport(e){this.renderPassEncoder.setViewport(e.x,e.y,e.width,e.height,0,1)}setPipelineFromGeometryProgramAndState(e,t,n,i){const s=this._renderer.pipeline.getPipeline(e,t,n,i);this.setPipeline(s)}setPipeline(e){this._boundPipeline!==e&&(this._boundPipeline=e,this.renderPassEncoder.setPipeline(e))}_setVertexBuffer(e,t){this._boundVertexBuffer[e]!==t&&(this._boundVertexBuffer[e]=t,this.renderPassEncoder.setVertexBuffer(e,this._renderer.buffer.updateBuffer(t)))}_setIndexBuffer(e){if(this._boundIndexBuffer===e)return;this._boundIndexBuffer=e;const t=e.data.BYTES_PER_ELEMENT===2?"uint16":"uint32";this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e),t)}resetBindGroup(e){this._boundBindGroup[e]=null}setBindGroup(e,t,n){if(this._boundBindGroup[e]===t)return;this._boundBindGroup[e]=t,t._touch(this._renderer.textureGC.count);const i=this._renderer.bindGroup.getBindGroup(t,n,e);this.renderPassEncoder.setBindGroup(e,i)}setGeometry(e,t){const n=this._renderer.pipeline.getBufferNamesToBind(e,t);for(const i in n)this._setVertexBuffer(i,e.attributes[n[i]].buffer);e.indexBuffer&&this._setIndexBuffer(e.indexBuffer)}_setShaderBindGroups(e,t){for(const n in e.groups){const i=e.groups[n];t||this._syncBindGroup(i),this.setBindGroup(n,i,e.gpuProgram)}}_syncBindGroup(e){for(const t in e.resources){const n=e.resources[t];n.isUniformGroup&&this._renderer.ubo.updateUniformGroup(n)}}draw(e){const{geometry:t,shader:n,state:i,topology:s,size:o,start:a,instanceCount:l,skipSync:h}=e;this.setPipelineFromGeometryProgramAndState(t,n.gpuProgram,i,s),this.setGeometry(t,n.gpuProgram),this._setShaderBindGroups(n,h),t.indexBuffer?this.renderPassEncoder.drawIndexed(o||t.indexBuffer.data.length,l||t.instanceCount,a||0):this.renderPassEncoder.draw(o||t.getSize(),l||t.instanceCount,a||0)}finishRenderPass(){this.renderPassEncoder&&(this.renderPassEncoder.end(),this.renderPassEncoder=null)}postrender(){this.finishRenderPass(),this._gpu.device.queue.submit([this.commandEncoder.finish()]),this._resolveCommandFinished(),this.commandEncoder=null}restoreRenderPass(){const e=this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget,!1,[0,0,0,1]);this.renderPassEncoder=this.commandEncoder.beginRenderPass(e);const t=this._boundPipeline,n={...this._boundVertexBuffer},i=this._boundIndexBuffer,s={...this._boundBindGroup};this._clearCache();const o=this._renderer.renderTarget.viewport;this.renderPassEncoder.setViewport(o.x,o.y,o.width,o.height,0,1),this.setPipeline(t);for(const a in n)this._setVertexBuffer(a,n[a]);for(const a in s)this.setBindGroup(a,s[a],null);this._setIndexBuffer(i)}_clearCache(){for(let e=0;e<16;e++)this._boundBindGroup[e]=null,this._boundVertexBuffer[e]=null;this._boundIndexBuffer=null,this._boundPipeline=null}destroy(){this._renderer=null,this._gpu=null,this._boundBindGroup=null,this._boundVertexBuffer=null,this._boundIndexBuffer=null,this._boundPipeline=null}contextChange(e){this._gpu=e}}cp.extension={type:[R.WebGPUSystem],name:"encoder",priority:1};class hp{constructor(e){this._renderTargetStencilState=Object.create(null),this._renderer=e,e.renderTarget.onRenderTargetChange.add(this)}onRenderTargetChange(e){let t=this._renderTargetStencilState[e.uid];t||(t=this._renderTargetStencilState[e.uid]={stencilMode:rt.DISABLED,stencilReference:0}),this._activeRenderTarget=e,this.setStencilMode(t.stencilMode,t.stencilReference)}setStencilMode(e,t){const n=this._renderTargetStencilState[this._activeRenderTarget.uid];n.stencilMode=e,n.stencilReference=t;const i=this._renderer;i.pipeline.setStencilMode(e),i.encoder.renderPassEncoder.setStencilReference(t)}destroy(){this._renderer.renderTarget.onRenderTargetChange.remove(this),this._renderer=null,this._activeRenderTarget=null,this._renderTargetStencilState=null}}hp.extension={type:[R.WebGPUSystem],name:"stencil"};const ds={i32:{align:4,size:4},u32:{align:4,size:4},f32:{align:4,size:4},f16:{align:2,size:2},"vec2<i32>":{align:8,size:8},"vec2<u32>":{align:8,size:8},"vec2<f32>":{align:8,size:8},"vec2<f16>":{align:4,size:4},"vec3<i32>":{align:16,size:12},"vec3<u32>":{align:16,size:12},"vec3<f32>":{align:16,size:12},"vec3<f16>":{align:8,size:6},"vec4<i32>":{align:16,size:16},"vec4<u32>":{align:16,size:16},"vec4<f32>":{align:16,size:16},"vec4<f16>":{align:8,size:8},"mat2x2<f32>":{align:8,size:16},"mat2x2<f16>":{align:4,size:8},"mat3x2<f32>":{align:8,size:24},"mat3x2<f16>":{align:4,size:12},"mat4x2<f32>":{align:8,size:32},"mat4x2<f16>":{align:4,size:16},"mat2x3<f32>":{align:16,size:32},"mat2x3<f16>":{align:8,size:16},"mat3x3<f32>":{align:16,size:48},"mat3x3<f16>":{align:8,size:24},"mat4x3<f32>":{align:16,size:64},"mat4x3<f16>":{align:8,size:32},"mat2x4<f32>":{align:16,size:32},"mat2x4<f16>":{align:8,size:16},"mat3x4<f32>":{align:16,size:48},"mat3x4<f16>":{align:8,size:24},"mat4x4<f32>":{align:16,size:64},"mat4x4<f16>":{align:8,size:32}};function Zb(r){const e=r.map(n=>({data:n,offset:0,size:0}));let t=0;for(let n=0;n<e.length;n++){const i=e[n];let s=ds[i.data.type].size;const o=ds[i.data.type].align;if(!ds[i.data.type])throw new Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${i.data.type}`);i.data.size>1&&(s=Math.max(s,o)*i.data.size),t=Math.ceil(t/o)*o,i.size=s,i.offset=t,t+=s}return t=Math.ceil(t/16)*16,{uboElements:e,size:t}}function Qb(r,e){const{size:t,align:n}=ds[r.data.type],i=(n-t)/4;return`
         v = uv.${r.data.name};
         ${e!==0?`offset += ${e};`:""}

         arrayOffset = offset;

         t = 0;

         for(var i=0; i < ${r.data.size*(t/4)}; i++)
         {
             for(var j = 0; j < ${t/4}; j++)
             {
                 data[arrayOffset++] = v[t++];
             }
             ${i!==0?`arrayOffset += ${i};`:""}
         }
     `}function Jb(r){return yd(r,"uboWgsl",Qb,X0)}class fp extends _d{constructor(){super({createUboElements:Zb,generateUboSync:Jb})}}fp.extension={type:[R.WebGPUSystem],name:"ubo"};const vr=128;class dp{constructor(e){this._bindGroupHash=Object.create(null),this._buffers=[],this._bindGroups=[],this._bufferResources=[],this._renderer=e,this._batchBuffer=new Kb({minUniformOffsetAlignment:vr});const t=256/vr;for(let n=0;n<t;n++){let i=Fe.UNIFORM|Fe.COPY_DST;n===0&&(i|=Fe.COPY_SRC),this._buffers.push(new Dt({data:this._batchBuffer.data,usage:i}))}}renderEnd(){this._uploadBindGroups(),this._resetBindGroups()}_resetBindGroups(){for(const e in this._bindGroupHash)this._bindGroupHash[e]=null;this._batchBuffer.clear()}getUniformBindGroup(e,t){if(!t&&this._bindGroupHash[e.uid])return this._bindGroupHash[e.uid];this._renderer.ubo.ensureUniformGroup(e);const n=e.buffer.data,i=this._batchBuffer.addEmptyGroup(n.length);return this._renderer.ubo.syncUniformGroup(e,this._batchBuffer.data,i/4),this._bindGroupHash[e.uid]=this._getBindGroup(i/vr),this._bindGroupHash[e.uid]}getUboResource(e){this._renderer.ubo.updateUniformGroup(e);const t=e.buffer.data,n=this._batchBuffer.addGroup(t);return this._getBufferResource(n/vr)}getArrayBindGroup(e){const t=this._batchBuffer.addGroup(e);return this._getBindGroup(t/vr)}getArrayBufferResource(e){const n=this._batchBuffer.addGroup(e)/vr;return this._getBufferResource(n)}_getBufferResource(e){if(!this._bufferResources[e]){const t=this._buffers[e%2];this._bufferResources[e]=new Fu({buffer:t,offset:(e/2|0)*256,size:vr})}return this._bufferResources[e]}_getBindGroup(e){if(!this._bindGroups[e]){const t=new lr({0:this._getBufferResource(e)});this._bindGroups[e]=t}return this._bindGroups[e]}_uploadBindGroups(){const e=this._renderer.buffer,t=this._buffers[0];t.update(this._batchBuffer.byteIndex),e.updateBuffer(t);const n=this._renderer.gpu.device.createCommandEncoder();for(let i=1;i<this._buffers.length;i++){const s=this._buffers[i];n.copyBufferToBuffer(e.getGPUBuffer(t),vr,e.getGPUBuffer(s),0,this._batchBuffer.byteIndex)}this._renderer.gpu.device.queue.submit([n.finish()])}destroy(){for(let e=0;e<this._bindGroups.length;e++)this._bindGroups[e].destroy();this._bindGroups=null,this._bindGroupHash=null;for(let e=0;e<this._buffers.length;e++)this._buffers[e].destroy();this._buffers=null;for(let e=0;e<this._bufferResources.length;e++)this._bufferResources[e].destroy();this._bufferResources=null,this._batchBuffer.destroy(),this._bindGroupHash=null,this._renderer=null}}dp.extension={type:[R.WebGPUPipes],name:"uniformBatch"};const e2={"point-list":0,"line-list":1,"line-strip":2,"triangle-list":3,"triangle-strip":4};function t2(r,e,t,n,i){return r<<24|e<<16|t<<10|n<<5|i}function r2(r,e,t,n){return t<<6|r<<3|n<<1|e}class pp{constructor(e){this._moduleCache=Object.create(null),this._bufferLayoutsCache=Object.create(null),this._bindingNamesCache=Object.create(null),this._pipeCache=Object.create(null),this._pipeStateCaches=Object.create(null),this._colorMask=15,this._multisampleCount=1,this._renderer=e}contextChange(e){this._gpu=e,this.setStencilMode(rt.DISABLED),this._updatePipeHash()}setMultisampleCount(e){this._multisampleCount!==e&&(this._multisampleCount=e,this._updatePipeHash())}setRenderTarget(e){this._multisampleCount=e.msaaSamples,this._depthStencilAttachment=e.descriptor.depthStencilAttachment?1:0,this._updatePipeHash()}setColorMask(e){this._colorMask!==e&&(this._colorMask=e,this._updatePipeHash())}setStencilMode(e){this._stencilMode!==e&&(this._stencilMode=e,this._stencilState=Yr[e],this._updatePipeHash())}setPipeline(e,t,n,i){const s=this.getPipeline(e,t,n);i.setPipeline(s)}getPipeline(e,t,n,i){e._layoutKey||(hd(e,t.attributeData),this._generateBufferKey(e)),i=i||e.topology;const s=t2(e._layoutKey,t._layoutKey,n.data,n._blendModeId,e2[i]);return this._pipeCache[s]?this._pipeCache[s]:(this._pipeCache[s]=this._createPipeline(e,t,n,i),this._pipeCache[s])}_createPipeline(e,t,n,i){const s=this._gpu.device,o=this._createVertexBufferLayouts(e,t),a=this._renderer.state.getColorTargets(n);a[0].writeMask=this._stencilMode===rt.RENDERING_MASK_ADD?0:this._colorMask;const l=this._renderer.shader.getProgramData(t).pipeline,h={vertex:{module:this._getModule(t.vertex.source),entryPoint:t.vertex.entryPoint,buffers:o},fragment:{module:this._getModule(t.fragment.source),entryPoint:t.fragment.entryPoint,targets:a},primitive:{topology:i,cullMode:n.cullMode},layout:l,multisample:{count:this._multisampleCount},label:"PIXI Pipeline"};return this._depthStencilAttachment&&(h.depthStencil={...this._stencilState,format:"depth24plus-stencil8",depthWriteEnabled:n.depthTest,depthCompare:n.depthTest?"less":"always"}),s.createRenderPipeline(h)}_getModule(e){return this._moduleCache[e]||this._createModule(e)}_createModule(e){const t=this._gpu.device;return this._moduleCache[e]=t.createShaderModule({code:e}),this._moduleCache[e]}_generateBufferKey(e){const t=[];let n=0;const i=Object.keys(e.attributes).sort();for(let o=0;o<i.length;o++){const a=e.attributes[i[o]];t[n++]=a.offset,t[n++]=a.format,t[n++]=a.stride,t[n++]=a.instance}const s=t.join("|");return e._layoutKey=li(s,"geometry"),e._layoutKey}_generateAttributeLocationsKey(e){const t=[];let n=0;const i=Object.keys(e.attributeData).sort();for(let o=0;o<i.length;o++){const a=e.attributeData[i[o]];t[n++]=a.location}const s=t.join("|");return e._attributeLocationsKey=li(s,"programAttributes"),e._attributeLocationsKey}getBufferNamesToBind(e,t){const n=e._layoutKey<<16|t._attributeLocationsKey;if(this._bindingNamesCache[n])return this._bindingNamesCache[n];const i=this._createVertexBufferLayouts(e,t),s=Object.create(null),o=t.attributeData;for(let a=0;a<i.length;a++)for(const l in o)if(o[l].location===a){s[a]=l;break}return this._bindingNamesCache[n]=s,s}_createVertexBufferLayouts(e,t){t._attributeLocationsKey||this._generateAttributeLocationsKey(t);const n=e._layoutKey<<16|t._attributeLocationsKey;if(this._bufferLayoutsCache[n])return this._bufferLayoutsCache[n];const i=[];return e.buffers.forEach(s=>{const o={arrayStride:0,stepMode:"vertex",attributes:[]},a=o.attributes;for(const l in t.attributeData){const h=e.attributes[l];(h.divisor??1)!==1&&fe(`Attribute ${l} has an invalid divisor value of '${h.divisor}'. WebGPU only supports a divisor value of 1`),h.buffer===s&&(o.arrayStride=h.stride,o.stepMode=h.instance?"instance":"vertex",a.push({shaderLocation:t.attributeData[l].location,offset:h.offset,format:h.format}))}a.length&&i.push(o)}),this._bufferLayoutsCache[n]=i,i}_updatePipeHash(){const e=r2(this._stencilMode,this._multisampleCount,this._colorMask,this._depthStencilAttachment);this._pipeStateCaches[e]||(this._pipeStateCaches[e]=Object.create(null)),this._pipeCache=this._pipeStateCaches[e]}destroy(){this._renderer=null,this._bufferLayoutsCache=null}}pp.extension={type:[R.WebGPUSystem],name:"pipeline"};class n2{constructor(){this.contexts=[],this.msaaTextures=[],this.msaaSamples=1}}class i2{init(e,t){this._renderer=e,this._renderTargetSystem=t}copyToTexture(e,t,n,i,s){const o=this._renderer,a=this._getGpuColorTexture(e),l=o.texture.getGpuSource(t.source);return o.encoder.commandEncoder.copyTextureToTexture({texture:a,origin:n},{texture:l,origin:s},i),t}startRenderPass(e,t=!0,n,i){const o=this._renderTargetSystem.getGpuRenderTarget(e),a=this.getDescriptor(e,t,n);o.descriptor=a,this._renderer.pipeline.setRenderTarget(o),this._renderer.encoder.beginRenderPass(o),this._renderer.encoder.setViewport(i)}finishRenderPass(){this._renderer.encoder.endRenderPass()}_getGpuColorTexture(e){const t=this._renderTargetSystem.getGpuRenderTarget(e);return t.contexts[0]?t.contexts[0].getCurrentTexture():this._renderer.texture.getGpuSource(e.colorTextures[0].source)}getDescriptor(e,t,n){typeof t=="boolean"&&(t=t?bt.ALL:bt.NONE);const i=this._renderTargetSystem,s=i.getGpuRenderTarget(e),o=e.colorTextures.map((h,f)=>{const p=s.contexts[f];let x,y;p?x=p.getCurrentTexture().createView():x=this._renderer.texture.getGpuSource(h).createView({mipLevelCount:1}),s.msaaTextures[f]&&(y=x,x=this._renderer.texture.getTextureView(s.msaaTextures[f]));const b=t&bt.COLOR?"clear":"load";return n??(n=i.defaultClearColor),{view:x,resolveTarget:y,clearValue:n,storeOp:"store",loadOp:b}});let a;if((e.stencil||e.depth)&&!e.depthStencilTexture&&(e.ensureDepthStencilTexture(),e.depthStencilTexture.source.sampleCount=s.msaa?4:1),e.depthStencilTexture){const h=t&bt.STENCIL?"clear":"load",f=t&bt.DEPTH?"clear":"load";a={view:this._renderer.texture.getGpuSource(e.depthStencilTexture.source).createView(),stencilStoreOp:"store",stencilLoadOp:h,depthClearValue:1,depthLoadOp:f,depthStoreOp:"store"}}return{colorAttachments:o,depthStencilAttachment:a}}clear(e,t=!0,n,i){if(!t)return;const{gpu:s,encoder:o}=this._renderer,a=s.device;if(o.commandEncoder===null){const h=a.createCommandEncoder(),f=this.getDescriptor(e,t,n),p=h.beginRenderPass(f);p.setViewport(i.x,i.y,i.width,i.height,0,1),p.end();const x=h.finish();a.queue.submit([x])}else this.startRenderPass(e,t,n,i)}initGpuRenderTarget(e){e.isRoot=!0;const t=new n2;return e.colorTextures.forEach((n,i)=>{if(Cr.test(n.resource)){const s=n.resource.getContext("webgpu"),o=n.transparent?"premultiplied":"opaque";try{s.configure({device:this._renderer.gpu.device,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,format:"bgra8unorm",alphaMode:o})}catch(a){console.error(a)}t.contexts[i]=s}if(t.msaa=n.source.antialias,n.source.antialias){const s=new Ye({width:0,height:0,sampleCount:4});t.msaaTextures[i]=s}}),t.msaa&&(t.msaaSamples=4,e.depthStencilTexture&&(e.depthStencilTexture.source.sampleCount=4)),t}destroyGpuRenderTarget(e){e.contexts.forEach(t=>{t.unconfigure()}),e.msaaTextures.forEach(t=>{t.destroy()}),e.msaaTextures.length=0,e.contexts.length=0}ensureDepthStencilTexture(e){const t=this._renderTargetSystem.getGpuRenderTarget(e);e.depthStencilTexture&&t.msaa&&(e.depthStencilTexture.source.sampleCount=4)}resizeGpuRenderTarget(e){const t=this._renderTargetSystem.getGpuRenderTarget(e);t.width=e.width,t.height=e.height,t.msaa&&e.colorTextures.forEach((n,i)=>{const s=t.msaaTextures[i];s==null||s.resize(n.source.width,n.source.height,n.source._resolution)})}}class mp extends Pd{constructor(e){super(e),this.adaptor=new i2,this.adaptor.init(e,this)}}mp.extension={type:[R.WebGPUSystem],name:"renderTarget"};class gp{constructor(){this._gpuProgramData=Object.create(null)}contextChange(e){this._gpu=e,this.maxTextures=e.device.limits.maxSampledTexturesPerShaderStage}getProgramData(e){return this._gpuProgramData[e._layoutKey]||this._createGPUProgramData(e)}_createGPUProgramData(e){const t=this._gpu.device,n=e.gpuLayout.map(s=>t.createBindGroupLayout({entries:s})),i={bindGroupLayouts:n};return this._gpuProgramData[e._layoutKey]={bindGroups:n,pipeline:t.createPipelineLayout(i)},this._gpuProgramData[e._layoutKey]}destroy(){this._gpu=null,this._gpuProgramData=null}}gp.extension={type:[R.WebGPUSystem],name:"shader"};const _t={};_t.normal={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}};_t.add={alpha:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one",operation:"add"}};_t.multiply={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"dst",dstFactor:"one-minus-src-alpha",operation:"add"}};_t.screen={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}};_t.overlay={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}};_t.none={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"zero",operation:"add"}};_t["normal-npm"]={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"}};_t["add-npm"]={alpha:{srcFactor:"one",dstFactor:"one",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"}};_t["screen-npm"]={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src",operation:"add"}};_t.erase={alpha:{srcFactor:"zero",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"one-minus-src",operation:"add"}};_t.min={alpha:{srcFactor:"one",dstFactor:"one",operation:"min"},color:{srcFactor:"one",dstFactor:"one",operation:"min"}};_t.max={alpha:{srcFactor:"one",dstFactor:"one",operation:"max"},color:{srcFactor:"one",dstFactor:"one",operation:"max"}};class xp{constructor(){this.defaultState=new Zt,this.defaultState.blend=!0}contextChange(e){this.gpu=e}getColorTargets(e){return[{format:"bgra8unorm",writeMask:0,blend:_t[e.blendMode]||_t.normal}]}destroy(){this.gpu=null}}xp.extension={type:[R.WebGPUSystem],name:"state"};const s2={type:"image",upload(r,e,t){const n=r.resource,i=(r.pixelWidth|0)*(r.pixelHeight|0),s=n.byteLength/i;t.device.queue.writeTexture({texture:e},n,{offset:0,rowsPerImage:r.pixelHeight,bytesPerRow:r.pixelHeight*s},{width:r.pixelWidth,height:r.pixelHeight,depthOrArrayLayers:1})}},_p={"bc1-rgba-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"bc2-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc3-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc7-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"etc1-rgb-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"etc2-rgba8unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"astc-4x4-unorm":{blockBytes:16,blockWidth:4,blockHeight:4}},o2={blockBytes:4,blockWidth:1,blockHeight:1},a2={type:"compressed",upload(r,e,t){let n=r.pixelWidth,i=r.pixelHeight;const s=_p[r.format]||o2;for(let o=0;o<r.resource.length;o++){const a=r.resource[o],l=Math.ceil(n/s.blockWidth)*s.blockBytes;t.device.queue.writeTexture({texture:e,mipLevel:o},a,{offset:0,bytesPerRow:l},{width:Math.ceil(n/s.blockWidth)*s.blockWidth,height:Math.ceil(i/s.blockHeight)*s.blockHeight,depthOrArrayLayers:1}),n=Math.max(n>>1,1),i=Math.max(i>>1,1)}}},vp={type:"image",upload(r,e,t){const n=r.resource;if(!n)return;const i=Math.min(e.width,r.resourceWidth||r.pixelWidth),s=Math.min(e.height,r.resourceHeight||r.pixelHeight),o=r.alphaMode==="premultiply-alpha-on-upload";t.device.queue.copyExternalImageToTexture({source:n},{texture:e,premultipliedAlpha:o},{width:i,height:s})}},u2={type:"video",upload(r,e,t){vp.upload(r,e,t)}};class l2{constructor(e){this.device=e,this.sampler=e.createSampler({minFilter:"linear"}),this.pipelines={}}_getMipmapPipeline(e){let t=this.pipelines[e];return t||(this.mipmapShaderModule||(this.mipmapShaderModule=this.device.createShaderModule({code:`
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `})),t=this.device.createRenderPipeline({layout:"auto",vertex:{module:this.mipmapShaderModule,entryPoint:"vertexMain"},fragment:{module:this.mipmapShaderModule,entryPoint:"fragmentMain",targets:[{format:e}]}}),this.pipelines[e]=t),t}generateMipmap(e){const t=this._getMipmapPipeline(e.format);if(e.dimension==="3d"||e.dimension==="1d")throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");let n=e;const i=e.depthOrArrayLayers||1,s=e.usage&GPUTextureUsage.RENDER_ATTACHMENT;if(!s){const l={size:{width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:i},format:e.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,mipLevelCount:e.mipLevelCount-1};n=this.device.createTexture(l)}const o=this.device.createCommandEncoder({}),a=t.getBindGroupLayout(0);for(let l=0;l<i;++l){let h=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:"2d",baseArrayLayer:l,arrayLayerCount:1}),f=s?1:0;for(let p=1;p<e.mipLevelCount;++p){const x=n.createView({baseMipLevel:f++,mipLevelCount:1,dimension:"2d",baseArrayLayer:l,arrayLayerCount:1}),y=o.beginRenderPass({colorAttachments:[{view:x,storeOp:"store",loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0}}]}),b=this.device.createBindGroup({layout:a,entries:[{binding:0,resource:this.sampler},{binding:1,resource:h}]});y.setPipeline(t),y.setBindGroup(0,b),y.draw(3,1,0,0),y.end(),h=x}}if(!s){const l={width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:i};for(let h=1;h<e.mipLevelCount;++h)o.copyTextureToTexture({texture:n,mipLevel:h-1},{texture:e,mipLevel:h},l),l.width=Math.ceil(l.width/2),l.height=Math.ceil(l.height/2)}return this.device.queue.submit([o.finish()]),s||n.destroy(),e}}class yp{constructor(e){this.managedTextures=[],this._gpuSources=Object.create(null),this._gpuSamplers=Object.create(null),this._bindGroupHash=Object.create(null),this._textureViewHash=Object.create(null),this._uploads={image:vp,buffer:s2,video:u2,compressed:a2},this._renderer=e}contextChange(e){this._gpu=e}initSource(e){if(e.autoGenerateMipmaps){const l=Math.max(e.pixelWidth,e.pixelHeight);e.mipLevelCount=Math.floor(Math.log2(l))+1}let t=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST;e.uploadMethodId!=="compressed"&&(t|=GPUTextureUsage.RENDER_ATTACHMENT,t|=GPUTextureUsage.COPY_SRC);const n=_p[e.format]||{blockBytes:4,blockWidth:1,blockHeight:1},i=Math.ceil(e.pixelWidth/n.blockWidth)*n.blockWidth,s=Math.ceil(e.pixelHeight/n.blockHeight)*n.blockHeight,o={label:e.label,size:{width:i,height:s},format:e.format,sampleCount:e.sampleCount,mipLevelCount:e.mipLevelCount,dimension:e.dimension,usage:t},a=this._gpu.device.createTexture(o);return this._gpuSources[e.uid]=a,this.managedTextures.includes(e)||(e.on("update",this.onSourceUpdate,this),e.on("resize",this.onSourceResize,this),e.on("destroy",this.onSourceDestroy,this),e.on("unload",this.onSourceUnload,this),e.on("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.push(e)),this.onSourceUpdate(e),a}onSourceUpdate(e){const t=this.getGpuSource(e);t&&(this._uploads[e.uploadMethodId]&&this._uploads[e.uploadMethodId].upload(e,t,this._gpu),e.autoGenerateMipmaps&&e.mipLevelCount>1&&this.onUpdateMipmaps(e))}onSourceUnload(e){const t=this._gpuSources[e.uid];t&&(this._gpuSources[e.uid]=null,t.destroy())}onUpdateMipmaps(e){this._mipmapGenerator||(this._mipmapGenerator=new l2(this._gpu.device));const t=this.getGpuSource(e);this._mipmapGenerator.generateMipmap(t)}onSourceDestroy(e){e.off("update",this.onSourceUpdate,this),e.off("unload",this.onSourceUnload,this),e.off("destroy",this.onSourceDestroy,this),e.off("resize",this.onSourceResize,this),e.off("updateMipmaps",this.onUpdateMipmaps,this),this.managedTextures.splice(this.managedTextures.indexOf(e),1),this.onSourceUnload(e)}onSourceResize(e){const t=this._gpuSources[e.uid];t?(t.width!==e.pixelWidth||t.height!==e.pixelHeight)&&(this._textureViewHash[e.uid]=null,this._bindGroupHash[e.uid]=null,this.onSourceUnload(e),this.initSource(e)):this.initSource(e)}_initSampler(e){return this._gpuSamplers[e._resourceId]=this._gpu.device.createSampler(e),this._gpuSamplers[e._resourceId]}getGpuSampler(e){return this._gpuSamplers[e._resourceId]||this._initSampler(e)}getGpuSource(e){return this._gpuSources[e.uid]||this.initSource(e)}getTextureBindGroup(e){return this._bindGroupHash[e.uid]??this._createTextureBindGroup(e)}_createTextureBindGroup(e){const t=e.source;return this._bindGroupHash[e.uid]=new lr({0:t,1:t.style,2:new ht({uTextureMatrix:{type:"mat3x3<f32>",value:e.textureMatrix.mapCoord}})}),this._bindGroupHash[e.uid]}getTextureView(e){const t=e.source;return this._textureViewHash[t.uid]??this._createTextureView(t)}_createTextureView(e){return this._textureViewHash[e.uid]=this.getGpuSource(e).createView(),this._textureViewHash[e.uid]}generateCanvas(e){const t=this._renderer,n=t.gpu.device.createCommandEncoder(),i=Ce.get().createCanvas();i.width=e.source.pixelWidth,i.height=e.source.pixelHeight;const s=i.getContext("webgpu");return s.configure({device:t.gpu.device,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC,format:Ce.get().getNavigator().gpu.getPreferredCanvasFormat(),alphaMode:"premultiplied"}),n.copyTextureToTexture({texture:t.texture.getGpuSource(e.source),origin:{x:0,y:0}},{texture:s.getCurrentTexture()},{width:i.width,height:i.height}),t.gpu.device.queue.submit([n.finish()]),i}getPixels(e){const t=this.generateCanvas(e),n=cr.getOptimalCanvasAndContext(t.width,t.height),i=n.context;i.drawImage(t,0,0);const{width:s,height:o}=t,a=i.getImageData(0,0,s,o),l=new Uint8ClampedArray(a.data.buffer);return cr.returnCanvasAndContext(n),{pixels:l,width:s,height:o}}destroy(){this.managedTextures.slice().forEach(e=>this.onSourceDestroy(e)),this.managedTextures=null;for(const e of Object.keys(this._bindGroupHash)){const t=Number(e),n=this._bindGroupHash[t];n==null||n.destroy(),this._bindGroupHash[t]=null}this._gpu=null,this._mipmapGenerator=null,this._gpuSources=null,this._bindGroupHash=null,this._textureViewHash=null,this._gpuSamplers=null}}yp.extension={type:[R.WebGPUSystem],name:"texture"};class bp{init(){const e=new ht({uTransformMatrix:{value:new ue,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),t=Ci({name:"graphics",bits:[du,mu(Bn()),R0,Pi]});this.shader=new Gt({gpuProgram:t,resources:{localUniforms:e}})}execute(e,t){const n=t.context,i=n.customShader||this.shader,s=e.renderer,o=s.graphicsContext,{batcher:a,instructions:l}=o.getContextRenderData(n),h=s.encoder;h.setPipelineFromGeometryProgramAndState(a.geometry,i.gpuProgram,e.state),h.setGeometry(a.geometry,i.gpuProgram);const f=s.globalUniforms.bindGroup;h.setBindGroup(0,f,i.gpuProgram);const p=s.renderPipes.uniformBatch.getUniformBindGroup(i.resources.localUniforms,!0);h.setBindGroup(2,p,i.gpuProgram);const x=l.instructions;for(let y=0;y<l.instructionSize;y++){const b=x[y];if(i.groups[1]=b.bindGroup,!b.gpuBindGroup){const T=b.textures;b.bindGroup=fu(T.textures,T.count),b.gpuBindGroup=s.bindGroup.getBindGroup(b.bindGroup,i.gpuProgram,1)}h.setBindGroup(1,b.bindGroup,i.gpuProgram),h.renderPassEncoder.drawIndexed(b.size,1,b.start)}}destroy(){this.shader.destroy(!0),this.shader=null}}bp.extension={type:[R.WebGPUPipesAdaptor],name:"graphics"};class Sp{init(){const e=Ci({name:"mesh",bits:[ai,I0,Pi]});this._shader=new Gt({gpuProgram:e,resources:{uTexture:Q.EMPTY._source,uSampler:Q.EMPTY._source.style,textureUniforms:{uTextureMatrix:{type:"mat3x3<f32>",value:new ue}}}})}execute(e,t){const n=e.renderer;let i=t._shader;if(!i)i=this._shader,i.groups[2]=n.texture.getTextureBindGroup(t.texture);else if(!i.gpuProgram){fe("Mesh shader has no gpuProgram",t.shader);return}const s=i.gpuProgram;if(s.autoAssignGlobalUniforms&&(i.groups[0]=n.globalUniforms.bindGroup),s.autoAssignLocalUniforms){const o=e.localUniforms;i.groups[1]=n.renderPipes.uniformBatch.getUniformBindGroup(o,!0)}n.encoder.draw({geometry:t._geometry,shader:i,state:t.state})}destroy(){this._shader.destroy(!0),this._shader=null}}Sp.extension={type:[R.WebGPUPipesAdaptor],name:"mesh"};const c2=[...rp,fp,cp,$u,up,yp,mp,gp,xp,pp,lp,hp,ap],h2=[...np,dp],f2=[rd,Sp,bp],Tp=[],Cp=[],wp=[];ke.handleByNamedList(R.WebGPUSystem,Tp);ke.handleByNamedList(R.WebGPUPipes,Cp);ke.handleByNamedList(R.WebGPUPipesAdaptor,wp);ke.add(...c2,...h2,...f2);class d2 extends js{constructor(){const e={name:"webgpu",type:St.WEBGPU,systems:Tp,renderPipes:Cp,renderPipeAdaptors:wp};super(e)}}const p2=Object.freeze(Object.defineProperty({__proto__:null,WebGPURenderer:d2},Symbol.toStringTag,{value:"Module"}));class m2{constructor(e,t){this.state=Zt.for2d(),this._graphicsBatchesHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){const t=e.context,n=!!this._graphicsBatchesHash[e.uid],i=this.renderer.graphicsContext.updateGpuContext(t);return!!(i.isBatchable||n!==i.isBatchable)}addRenderable(e,t){const n=this.renderer.graphicsContext.updateGpuContext(e.context);e._didGraphicsUpdate&&(e._didGraphicsUpdate=!1,this._rebuild(e)),n.isBatchable?this._addToBatcher(e,t):(this.renderer.renderPipes.batch.break(t),t.add(e))}updateRenderable(e){const t=this._graphicsBatchesHash[e.uid];if(t)for(let n=0;n<t.length;n++){const i=t[n];i._batcher.updateElement(i)}}destroyRenderable(e){this._graphicsBatchesHash[e.uid]&&this._removeBatchForRenderable(e.uid),e.off("destroyed",this._destroyRenderableBound)}execute(e){if(!e.isRenderable)return;const t=this.renderer,n=e.context;if(!t.graphicsContext.getGpuContext(n).batches.length)return;const s=n.customShader||this._adaptor.shader;this.state.blendMode=e.groupBlendMode;const o=s.resources.localUniforms.uniforms;o.uTransformMatrix=e.groupTransform,o.uRound=t._roundPixels|e._roundPixels,Qs(e.groupColorAlpha,o.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){const t=!!this._graphicsBatchesHash[e.uid],n=this.renderer.graphicsContext.updateGpuContext(e.context);t&&this._removeBatchForRenderable(e.uid),n.isBatchable&&this._initBatchesForRenderable(e),e.batched=n.isBatchable}_addToBatcher(e,t){const n=this.renderer.renderPipes.batch,i=this._getBatchesForRenderable(e);for(let s=0;s<i.length;s++){const o=i[s];n.addToBatch(o,t)}}_getBatchesForRenderable(e){return this._graphicsBatchesHash[e.uid]||this._initBatchesForRenderable(e)}_initBatchesForRenderable(e){const t=e.context,n=this.renderer.graphicsContext.getGpuContext(t),i=this.renderer._roundPixels|e._roundPixels,s=n.batches.map(o=>{const a=Ae.get(vu);return o.copyTo(a),a.renderable=e,a.roundPixels=i,a});return this._graphicsBatchesHash[e.uid]===void 0&&e.on("destroyed",this._destroyRenderableBound),this._graphicsBatchesHash[e.uid]=s,s}_removeBatchForRenderable(e){this._graphicsBatchesHash[e].forEach(t=>{Ae.return(t)}),this._graphicsBatchesHash[e]=null}destroy(){this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null;for(const e in this._graphicsBatchesHash)this._removeBatchForRenderable(e);this._graphicsBatchesHash=null}}m2.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"graphics"};const Pp=class Ap extends qs{constructor(...e){super({});let t=e[0]??{};typeof t=="number"&&(Z(ye,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),t={width:t,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(t)}build(e){e={...Ap.defaultOptions,...e},this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;const t=this.verticesX*this.verticesY,n=[],i=[],s=[],o=this.verticesX-1,a=this.verticesY-1,l=this.width/o,h=this.height/a;for(let p=0;p<t;p++){const x=p%this.verticesX,y=p/this.verticesX|0;n.push(x*l,y*h),i.push(x/o,y/a)}const f=o*a;for(let p=0;p<f;p++){const x=p%o,y=p/o|0,b=y*this.verticesX+x,T=y*this.verticesX+x+1,C=(y+1)*this.verticesX+x,P=(y+1)*this.verticesX+x+1;s.push(b,T,C,T,P,C)}this.buffers[0].data=new Float32Array(n),this.buffers[1].data=new Float32Array(i),this.indexBuffer.data=new Uint32Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};Pp.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let g2=Pp;class Wu{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}get uvs(){const t=this.geometry.getBuffer("aUV"),n=t.data;let i=n;const s=this.texture.textureMatrix;return s.isSimple||(i=this._transformedUvs,(this._textureMatrixUpdateId!==s._updateID||this._uvUpdateId!==t._updateID)&&((!i||i.length<n.length)&&(i=this._transformedUvs=new Float32Array(n.length)),this._textureMatrixUpdateId=s._updateID,this._uvUpdateId=t._updateID,s.multiplyUvs(n,i))),i}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}}class x2{constructor(e,t){this.localUniforms=new ht({uTransformMatrix:{value:new ue,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new lr({0:this.localUniforms}),this._meshDataHash=Object.create(null),this._gpuBatchableMeshHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){const t=this._getMeshData(e),n=t.batched,i=e.batched;if(t.batched=i,n!==i)return!0;if(i){const s=e._geometry;if(s.indices.length!==t.indexSize||s.positions.length!==t.vertexSize)return t.indexSize=s.indices.length,t.vertexSize=s.positions.length,!0;const o=this._getBatchableMesh(e),a=e.texture;if(o.texture._source!==a._source&&o.texture._source!==a._source)return!o._batcher.checkAndUpdateTexture(o,a)}return!1}addRenderable(e,t){const n=this.renderer.renderPipes.batch,{batched:i}=this._getMeshData(e);if(i){const s=this._getBatchableMesh(e);s.texture=e._texture,s.geometry=e._geometry,n.addToBatch(s,t)}else n.break(t),t.add(e)}updateRenderable(e){if(e.batched){const t=this._gpuBatchableMeshHash[e.uid];t.texture=e._texture,t.geometry=e._geometry,t._batcher.updateElement(t)}}destroyRenderable(e){this._meshDataHash[e.uid]=null;const t=this._gpuBatchableMeshHash[e.uid];t&&(Ae.return(t),this._gpuBatchableMeshHash[e.uid]=null),e.off("destroyed",this._destroyRenderableBound)}execute(e){if(!e.isRenderable)return;e.state.blendMode=Bs(e.groupBlendMode,e.texture._source);const t=this.localUniforms;t.uniforms.uTransformMatrix=e.groupTransform,t.uniforms.uRound=this.renderer._roundPixels|e._roundPixels,t.update(),Qs(e.groupColorAlpha,t.uniforms.uColor,0),this._adaptor.execute(this,e)}_getMeshData(e){return this._meshDataHash[e.uid]||this._initMeshData(e)}_initMeshData(e){var t,n;return this._meshDataHash[e.uid]={batched:e.batched,indexSize:(t=e._geometry.indices)==null?void 0:t.length,vertexSize:(n=e._geometry.positions)==null?void 0:n.length},e.on("destroyed",this._destroyRenderableBound),this._meshDataHash[e.uid]}_getBatchableMesh(e){return this._gpuBatchableMeshHash[e.uid]||this._initBatchableMesh(e)}_initBatchableMesh(e){const t=Ae.get(Wu);return t.renderable=e,t.texture=e._texture,t.transform=e.groupTransform,t.roundPixels=this.renderer._roundPixels|e._roundPixels,this._gpuBatchableMeshHash[e.uid]=t,t}destroy(){for(const e in this._gpuBatchableMeshHash)this._gpuBatchableMeshHash[e]&&Ae.return(this._gpuBatchableMeshHash[e]);this._gpuBatchableMeshHash=null,this._meshDataHash=null,this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}}x2.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"mesh"};const Ep=class Mp extends g2{constructor(e={}){e={...Mp.defaultOptions,...e},super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this.updateUvs(),this.updatePositions()}updatePositions(){const e=this.positions,t=this._leftWidth+this._rightWidth,n=this.width>t?1:this.width/t,i=this._topHeight+this._bottomHeight,s=this.height>i?1:this.height/i,o=Math.min(n,s);e[9]=e[11]=e[13]=e[15]=this._topHeight*o,e[17]=e[19]=e[21]=e[23]=this.height-this._bottomHeight*o,e[25]=e[27]=e[29]=e[31]=this.height,e[2]=e[10]=e[18]=e[26]=this._leftWidth*o,e[4]=e[12]=e[20]=e[28]=this.width-this._rightWidth*o,e[6]=e[14]=e[22]=e[30]=this.width,this.getBuffer("aPosition").update()}updateUvs(){const e=this.uvs;e[0]=e[8]=e[16]=e[24]=0,e[1]=e[3]=e[5]=e[7]=0,e[6]=e[14]=e[22]=e[30]=1,e[25]=e[27]=e[29]=e[31]=1;const t=1/this._originalWidth,n=1/this._originalHeight;e[2]=e[10]=e[18]=e[26]=t*this._leftWidth,e[9]=e[11]=e[13]=e[15]=n*this._topHeight,e[4]=e[12]=e[20]=e[28]=1-t*this._rightWidth,e[17]=e[19]=e[21]=e[23]=1-n*this._bottomHeight,this.getBuffer("aUV").update()}};Ep.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let _2=Ep;class v2{constructor(e){this._gpuSpriteHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e}addRenderable(e,t){const n=this._getGpuSprite(e);e._didSpriteUpdate&&this._updateBatchableSprite(e,n),this._renderer.renderPipes.batch.addToBatch(n,t)}updateRenderable(e){const t=this._gpuSpriteHash[e.uid];e._didSpriteUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){const t=e._texture,n=this._getGpuSprite(e);return n.texture._source!==t._source?!n._batcher.checkAndUpdateTexture(n,t):!1}destroyRenderable(e){const t=this._gpuSpriteHash[e.uid];Ae.return(t.geometry),Ae.return(t),this._gpuSpriteHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_updateBatchableSprite(e,t){e._didSpriteUpdate=!1,t.geometry.update(e),t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=Ae.get(Wu);return t.geometry=Ae.get(_2),t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._didSpriteUpdate=!0,this._gpuSpriteHash[e.uid]=t,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuSpriteHash)this._gpuSpriteHash[e].geometry.destroy();this._gpuSpriteHash=null,this._renderer=null}}v2.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"nineSliceSprite"};const y2={name:"tiling-bit",vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},b2={name:"tiling-bit",vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,main:`
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0
    
        `}};let ua,la;class S2 extends Gt{constructor(){ua??(ua=Ci({name:"tiling-sprite-shader",bits:[ai,y2,Pi]})),la??(la=wi({name:"tiling-sprite-shader",bits:[Bu,b2,Ai]}));const e=new ht({uMapCoord:{value:new ue,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new ue,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:"vec4<f32>"}});super({glProgram:la,gpuProgram:ua,resources:{localUniforms:new ht({uTransformMatrix:{value:new ue,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),tilingUniforms:e,uTexture:Q.EMPTY.source,uSampler:Q.EMPTY.source.style}})}updateUniforms(e,t,n,i,s,o){const a=this.resources.tilingUniforms,l=o.width,h=o.height,f=o.textureMatrix,p=a.uniforms.uTextureTransform;p.set(n.a*l/e,n.b*l/t,n.c*h/e,n.d*h/t,n.tx/e,n.ty/t),p.invert(),a.uniforms.uMapCoord=f.mapCoord,a.uniforms.uClampFrame=f.uClampFrame,a.uniforms.uClampOffset=f.uClampOffset,a.uniforms.uTextureTransform=p,a.uniforms.uSizeAnchor[0]=e,a.uniforms.uSizeAnchor[1]=t,a.uniforms.uSizeAnchor[2]=i,a.uniforms.uSizeAnchor[3]=s,o&&(this.resources.uTexture=o.source,this.resources.uSampler=o.source.style)}}class T2 extends qs{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}}function C2(r,e){const t=r.anchor.x,n=r.anchor.y;e[0]=-t*r.width,e[1]=-n*r.height,e[2]=(1-t)*r.width,e[3]=-n*r.height,e[4]=(1-t)*r.width,e[5]=(1-n)*r.height,e[6]=-t*r.width,e[7]=(1-n)*r.height}function w2(r,e,t,n){let i=0;const s=r.length/e,o=n.a,a=n.b,l=n.c,h=n.d,f=n.tx,p=n.ty;for(t*=e;i<s;){const x=r[t],y=r[t+1];r[t]=o*x+l*y+f,r[t+1]=a*x+h*y+p,t+=e,i++}}function P2(r,e){const t=r.texture,n=t.frame.width,i=t.frame.height;let s=0,o=0;r._applyAnchorToTexture&&(s=r.anchor.x,o=r.anchor.y),e[0]=e[6]=-s,e[2]=e[4]=1-s,e[1]=e[3]=-o,e[5]=e[7]=1-o;const a=ue.shared;a.copyFrom(r._tileTransform.matrix),a.tx/=r.width,a.ty/=r.height,a.invert(),a.scale(r.width/n,r.height/i),w2(e,2,0,a)}const ss=new T2;class A2{constructor(e){this._state=Zt.default2d,this._tilingSpriteDataHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e}validateRenderable(e){const t=this._getTilingSpriteData(e),n=t.canBatch;this._updateCanBatch(e);const i=t.canBatch;if(i&&i===n){const{batchableMesh:s}=t;if(s&&s.texture._source!==e.texture._source)return!s._batcher.checkAndUpdateTexture(s,e.texture)}return n!==i}addRenderable(e,t){const n=this._renderer.renderPipes.batch;this._updateCanBatch(e);const i=this._getTilingSpriteData(e),{geometry:s,canBatch:o}=i;if(o){i.batchableMesh||(i.batchableMesh=new Wu);const a=i.batchableMesh;e._didTilingSpriteUpdate&&(e._didTilingSpriteUpdate=!1,this._updateBatchableMesh(e),a.geometry=s,a.renderable=e,a.transform=e.groupTransform,a.texture=e._texture),a.roundPixels=this._renderer._roundPixels|e._roundPixels,n.addToBatch(a,t)}else n.break(t),i.shader||(i.shader=new S2),this.updateRenderable(e),t.add(e)}execute(e){const{shader:t}=this._tilingSpriteDataHash[e.uid];t.groups[0]=this._renderer.globalUniforms.bindGroup;const n=t.resources.localUniforms.uniforms;n.uTransformMatrix=e.groupTransform,n.uRound=this._renderer._roundPixels|e._roundPixels,Qs(e.groupColorAlpha,n.uColor,0),this._state.blendMode=Bs(e.groupBlendMode,e.texture._source),this._renderer.encoder.draw({geometry:ss,shader:t,state:this._state})}updateRenderable(e){const t=this._getTilingSpriteData(e),{canBatch:n}=t;if(n){const{batchableMesh:i}=t;e._didTilingSpriteUpdate&&this._updateBatchableMesh(e),i._batcher.updateElement(i)}else if(e._didTilingSpriteUpdate){const{shader:i}=t;i.updateUniforms(e.width,e.height,e._tileTransform.matrix,e.anchor.x,e.anchor.y,e.texture)}e._didTilingSpriteUpdate=!1}destroyRenderable(e){var n;const t=this._getTilingSpriteData(e);t.batchableMesh=null,(n=t.shader)==null||n.destroy(),this._tilingSpriteDataHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_getTilingSpriteData(e){return this._tilingSpriteDataHash[e.uid]||this._initTilingSpriteData(e)}_initTilingSpriteData(e){const t=new qs({indices:ss.indices,positions:ss.positions.slice(),uvs:ss.uvs.slice()});return this._tilingSpriteDataHash[e.uid]={canBatch:!0,renderable:e,geometry:t},e.on("destroyed",this._destroyRenderableBound),this._tilingSpriteDataHash[e.uid]}_updateBatchableMesh(e){const t=this._getTilingSpriteData(e),{geometry:n}=t,i=e.texture.source.style;i.addressMode!=="repeat"&&(i.addressMode="repeat",i.update()),P2(e,n.uvs),C2(e,n.positions)}destroy(){for(const e in this._tilingSpriteDataHash)this.destroyRenderable(this._tilingSpriteDataHash[e].renderable);this._tilingSpriteDataHash=null,this._renderer=null}_updateCanBatch(e){const t=this._getTilingSpriteData(e),n=e.texture;let i=!0;return this._renderer.type===St.WEBGL&&(i=this._renderer.context.supports.nonPowOf2wrapping),t.canBatch=n.textureMatrix.isSimple&&(i||n.source.isPowerOfTwo),t.canBatch}}A2.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"tilingSprite"};const E2={name:"local-uniform-msdf-bit",vertex:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `},fragment:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,main:` 
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));
        `}},M2={name:"local-uniform-msdf-bit",vertex:{header:`
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `},fragment:{header:`
            uniform float uDistance;
         `,main:` 
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        `}},B2={name:"msdf-bit",fragment:{header:`
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;
             
            }
        `}},R2={name:"msdf-bit",fragment:{header:`
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);  
              
                return coverage;
            }
        `}};let ca,ha;class I2 extends Gt{constructor(){const e=new ht({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new ue,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}}),t=Bn();ca??(ca=Ci({name:"sdf-shader",bits:[du,mu(t),E2,B2,Pi]})),ha??(ha=wi({name:"sdf-shader",bits:[pu,gu(t),M2,R2,Ai]})),super({glProgram:ha,gpuProgram:ca,resources:{localUniforms:e,batchSamplers:xu(t)}})}}class F2{constructor(e){this._gpuBitmapText={},this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e}validateRenderable(e){const t=this._getGpuBitmapText(e);return e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,t)),this._renderer.renderPipes.graphics.validateRenderable(t)}addRenderable(e,t){const n=this._getGpuBitmapText(e);th(e,n),e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,n)),this._renderer.renderPipes.graphics.addRenderable(n,t),n.context.customShader&&this._updateDistanceField(e)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableByUid(e.uid)}_destroyRenderableByUid(e){const t=this._gpuBitmapText[e].context;t.customShader&&(Ae.return(t.customShader),t.customShader=null),Ae.return(this._gpuBitmapText[e]),this._gpuBitmapText[e]=null}updateRenderable(e){const t=this._getGpuBitmapText(e);th(e,t),this._renderer.renderPipes.graphics.updateRenderable(t),t.context.customShader&&this._updateDistanceField(e)}_updateContext(e,t){const{context:n}=t,i=Os.getFont(e.text,e._style);n.clear(),i.distanceField.type!=="none"&&(n.customShader||(n.customShader=Ae.get(I2)));const s=Array.from(e.text),o=e._style;let a=i.baseLineOffset;const l=Rf(s,o,i,!0);let h=0;const f=o.padding,p=l.scale;let x=l.width,y=l.height+l.offsetY;o._stroke&&(x+=o._stroke.width/p,y+=o._stroke.width/p),n.translate(-e._anchor._x*x-f,-e._anchor._y*y-f).scale(p,p);const b=i.applyFillAsTint?o._fill.color:16777215;for(let T=0;T<l.lines.length;T++){const C=l.lines[T];for(let P=0;P<C.charPositions.length;P++){const F=s[h++],B=i.chars[F];B!=null&&B.texture&&n.texture(B.texture,b||"black",Math.round(C.charPositions[P]+B.xOffset),Math.round(a+B.yOffset))}a+=i.lineHeight}}_getGpuBitmapText(e){return this._gpuBitmapText[e.uid]||this.initGpuText(e)}initGpuText(e){const t=Ae.get(gi);return this._gpuBitmapText[e.uid]=t,this._updateContext(e,t),e.on("destroyed",this._destroyRenderableBound),this._gpuBitmapText[e.uid]}_updateDistanceField(e){const t=this._getGpuBitmapText(e).context,n=e._style.fontFamily,i=Ge.get(`${n}-bitmap`),{a:s,b:o,c:a,d:l}=e.groupTransform,h=Math.sqrt(s*s+o*o),f=Math.sqrt(a*a+l*l),p=(Math.abs(h)+Math.abs(f))/2,x=i.baseRenderedFontSize/e._style.fontSize,y=p*i.distanceField.range*(1/x);t.customShader.resources.localUniforms.uniforms.uDistance=y}destroy(){for(const e in this._gpuBitmapText)this._destroyRenderableByUid(e);this._gpuBitmapText=null,this._renderer=null}}F2.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"bitmapText"};function th(r,e){e.groupTransform=r.groupTransform,e.groupColorAlpha=r.groupColorAlpha,e.groupColor=r.groupColor,e.groupBlendMode=r.groupBlendMode,e.globalDisplayStatus=r.globalDisplayStatus,e.groupTransform=r.groupTransform,e.localDisplayStatus=r.localDisplayStatus,e.groupAlpha=r.groupAlpha,e._roundPixels=r._roundPixels}class O2{constructor(e){this._gpuText=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.runners.resolutionChange.add(this)}resolutionChange(){for(const e in this._gpuText){const t=this._gpuText[e];if(!t)continue;const n=t.batchableSprite.renderable;n._autoResolution&&(n._resolution=this._renderer.resolution,n.onViewUpdate())}}validateRenderable(e){const t=this._getGpuText(e),n=e._getKey();return t.textureNeedsUploading?(t.textureNeedsUploading=!1,!0):t.currentKey!==n}addRenderable(e,t){const i=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(i,t)}updateRenderable(e){const n=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),n._batcher.updateElement(n)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableById(e.uid)}_destroyRenderableById(e){const t=this._gpuText[e];this._renderer.htmlText.decreaseReferenceCount(t.currentKey),Ae.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){const t=e._getKey(),n=this._getGpuText(e),i=n.batchableSprite;n.currentKey!==t&&this._updateGpuText(e).catch(o=>{console.error(o)}),e._didTextUpdate=!1;const s=e._style.padding;Cs(i.bounds,e._anchor,i.texture,s)}async _updateGpuText(e){e._didTextUpdate=!1;const t=this._getGpuText(e);if(t.generatingTexture)return;const n=e._getKey();this._renderer.htmlText.decreaseReferenceCount(t.currentKey),t.generatingTexture=!0,t.currentKey=n;const i=e.resolution??this._renderer.resolution,s=await this._renderer.htmlText.getManagedTexture(e.text,i,e._style,e._getKey()),o=t.batchableSprite;o.texture=t.texture=s,t.generatingTexture=!1,t.textureNeedsUploading=!0,e.onViewUpdate();const a=e._style.padding;Cs(o.bounds,e._anchor,o.texture,a)}_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){const t={texture:Q.EMPTY,currentKey:"--",batchableSprite:Ae.get(Uu),textureNeedsUploading:!1,generatingTexture:!1},n=t.batchableSprite;return n.renderable=e,n.transform=e.groupTransform,n.texture=Q.EMPTY,n.bounds={minX:0,maxX:1,minY:0,maxY:0},n.roundPixels=this._renderer._roundPixels|e._roundPixels,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,this._gpuText[e.uid]=t,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}}O2.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"htmlText"};function U2(){const{userAgent:r}=Ce.get().getNavigator();return/^((?!chrome|android).)*safari/i.test(r)}const k2=new xt;function Bp(r,e,t,n){const i=k2;i.minX=0,i.minY=0,i.maxX=r.width/n|0,i.maxY=r.height/n|0;const s=He.getOptimalTexture(i.width,i.height,n,!1);return s.source.uploadMethodId="image",s.source.resource=r,s.source.alphaMode="premultiply-alpha-on-upload",s.frame.width=e/n,s.frame.height=t/n,s.source.emit("update",s.source),s.updateUvs(),s}function D2(r,e){const t=e.fontFamily,n=[],i={},s=/font-family:([^;"\s]+)/g,o=r.match(s);function a(l){i[l]||(n.push(l),i[l]=!0)}if(Array.isArray(t))for(let l=0;l<t.length;l++)a(t[l]);else a(t);o&&o.forEach(l=>{const h=l.split(":")[1].trim();a(h)});for(const l in e.tagStyles){const h=e.tagStyles[l].fontFamily;a(h)}return n}async function G2(r){const t=await(await Ce.get().fetch(r)).blob(),n=new FileReader;return await new Promise((s,o)=>{n.onloadend=()=>s(n.result),n.onerror=o,n.readAsDataURL(t)})}async function rh(r,e){const t=await G2(e);return`@font-face {
        font-family: "${r.fontFamily}";
        src: url('${t}');
        font-weight: ${r.fontWeight};
        font-style: ${r.fontStyle};
    }`}const os=new Map;async function z2(r,e,t){const n=r.filter(i=>Ge.has(`${i}-and-url`)).map((i,s)=>{if(!os.has(i)){const{url:o}=Ge.get(`${i}-and-url`);s===0?os.set(i,rh({fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:i},o)):os.set(i,rh({fontWeight:t.fontWeight,fontStyle:t.fontStyle,fontFamily:i},o))}return os.get(i)});return(await Promise.all(n)).join(`
`)}function L2(r,e,t,n,i){const{domElement:s,styleElement:o,svgRoot:a}=i;s.innerHTML=`<style>${e.cssStyle}</style><div style='padding:0;'>${r}</div>`,s.setAttribute("style",`transform: scale(${t});transform-origin: top left; display: inline-block`),o.textContent=n;const{width:l,height:h}=i.image;return a.setAttribute("width",l.toString()),a.setAttribute("height",h.toString()),new XMLSerializer().serializeToString(a)}function N2(r,e){const t=cr.getOptimalCanvasAndContext(r.width,r.height,e),{context:n}=t;return n.clearRect(0,0,r.width,r.height),n.drawImage(r,0,0),cr.returnCanvasAndContext(t),t.canvas}function H2(r,e,t){return new Promise(async n=>{t&&await new Promise(i=>setTimeout(i,100)),r.onload=()=>{n()},r.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`,r.crossOrigin="anonymous"})}class Rp{constructor(e){this._activeTextures={},this._renderer=e,this._createCanvas=e.type===St.WEBGPU}getTexture(e){return this._buildTexturePromise(e.text,e.resolution,e.style)}getManagedTexture(e,t,n,i){if(this._activeTextures[i])return this._increaseReferenceCount(i),this._activeTextures[i].promise;const s=this._buildTexturePromise(e,t,n).then(o=>(this._activeTextures[i].texture=o,o));return this._activeTextures[i]={texture:null,promise:s,usageCount:1},s}async _buildTexturePromise(e,t,n){const i=Ae.get(Qf),s=D2(e,n),o=await z2(s,n,Ks.defaultTextStyle),a=Jf(e,n,o,i),l=Math.ceil(Math.ceil(Math.max(1,a.width)+n.padding*2)*t),h=Math.ceil(Math.ceil(Math.max(1,a.height)+n.padding*2)*t),f=i.image,p=2;f.width=(l|0)+p,f.height=(h|0)+p;const x=L2(e,n,t,o,i);await H2(f,x,U2()&&s.length>0);let y=f;this._createCanvas&&(y=N2(f,t));const b=Bp(y,f.width-p,f.height-p,t);return this._createCanvas&&this._renderer.texture.initSource(b.source),Ae.return(i),b}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){const t=this._activeTextures[e];t&&(t.usageCount--,t.usageCount===0&&(t.texture?this._cleanUp(t):t.promise.then(n=>{t.texture=n,this._cleanUp(t)}).catch(()=>{fe("HTMLTextSystem: Failed to clean texture")}),this._activeTextures[e]=null))}_cleanUp(e){He.returnTexture(e.texture),e.texture.source.resource=null,e.texture.source.uploadMethodId="unknown"}getReferenceCount(e){return this._activeTextures[e].usageCount}destroy(){this._activeTextures=null}}Rp.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"htmlText"};Rp.defaultFontOptions={fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal"};class $2{constructor(e){this._gpuText=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.runners.resolutionChange.add(this)}resolutionChange(){for(const e in this._gpuText){const t=this._gpuText[e];if(!t)continue;const n=t.batchableSprite.renderable;n._autoResolution&&(n._resolution=this._renderer.resolution,n.onViewUpdate())}}validateRenderable(e){const t=this._getGpuText(e),n=e._getKey();if(t.currentKey!==n){const{width:i,height:s}=this._renderer.canvasText.getTextureSize(e.text,e.resolution,e._style);return!(this._renderer.canvasText.getReferenceCount(t.currentKey)===1&&i===t.texture._source.width&&s===t.texture._source.height)}return!1}addRenderable(e,t){const i=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(i,t)}updateRenderable(e){const n=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),n._batcher.updateElement(n)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableById(e.uid)}_destroyRenderableById(e){const t=this._gpuText[e];this._renderer.canvasText.decreaseReferenceCount(t.currentKey),Ae.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){const t=e._getKey(),n=this._getGpuText(e),i=n.batchableSprite;n.currentKey!==t&&this._updateGpuText(e),e._didTextUpdate=!1;const s=e._style.padding;Cs(i.bounds,e._anchor,i.texture,s)}_updateGpuText(e){const t=this._getGpuText(e),n=t.batchableSprite;t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),t.texture=n.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e._getKey(),n.texture=t.texture}_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){const t={texture:null,currentKey:"--",batchableSprite:Ae.get(Uu)};return t.batchableSprite.renderable=e,t.batchableSprite.transform=e.groupTransform,t.batchableSprite.bounds={minX:0,maxX:1,minY:0,maxY:0},t.batchableSprite.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuText[e.uid]=t,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,this._updateText(e),e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}}$2.extension={type:[R.WebGLPipes,R.WebGPUPipes,R.CanvasPipes],name:"text"};function nh(r,e,t){for(let n=0,i=4*t*e;n<e;++n,i+=4)if(r[i+3]!==0)return!1;return!0}function ih(r,e,t,n,i){const s=4*e;for(let o=n,a=n*s+4*t;o<=i;++o,a+=s)if(r[a+3]!==0)return!1;return!0}function W2(r,e=1){const{width:t,height:n}=r,i=r.getContext("2d",{willReadFrequently:!0});if(i===null)throw new TypeError("Failed to get canvas 2D context");const o=i.getImageData(0,0,t,n).data;let a=0,l=0,h=t-1,f=n-1;for(;l<n&&nh(o,t,l);)++l;if(l===n)return Le.EMPTY;for(;nh(o,t,f);)--f;for(;ih(o,t,a,l,f);)++a;for(;ih(o,t,h,l,f);)--h;return++h,++f,new Le(a/e,l/e,(h-a)/e,(f-l)/e)}class V2{constructor(e){this._activeTextures={},this._renderer=e}getTextureSize(e,t,n){const i=Yt.measureText(e||" ",n);let s=Math.ceil(Math.ceil(Math.max(1,i.width)+n.padding*2)*t),o=Math.ceil(Math.ceil(Math.max(1,i.height)+n.padding*2)*t);return s=Math.ceil(s-1e-6),o=Math.ceil(o-1e-6),s=wn(s),o=wn(o),{width:s,height:o}}getTexture(e,t,n,i){typeof e=="string"&&(Z("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),e={text:e,style:n,resolution:t}),e.style instanceof qt||(e.style=new qt(e.style));const{texture:s,canvasAndContext:o}=this.createTextureAndCanvas(e);return this._renderer.texture.initSource(s._source),cr.returnCanvasAndContext(o),s}createTextureAndCanvas(e){const{text:t,style:n}=e,i=e.resolution??this._renderer.resolution,s=Yt.measureText(t||" ",n),o=Math.ceil(Math.ceil(Math.max(1,s.width)+n.padding*2)*i),a=Math.ceil(Math.ceil(Math.max(1,s.height)+n.padding*2)*i),l=cr.getOptimalCanvasAndContext(o,a),{canvas:h}=l;this.renderTextToCanvas(t,n,i,l);const f=Bp(h,o,a,i);if(n.trim){const p=W2(h,i);f.frame.copyFrom(p),f.updateUvs()}return{texture:f,canvasAndContext:l}}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;const t=e._getKey();if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;const{texture:n,canvasAndContext:i}=this.createTextureAndCanvas(e);return this._activeTextures[t]={canvasAndContext:i,texture:n,usageCount:1},n}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){const t=this._activeTextures[e];if(t.usageCount--,t.usageCount===0){cr.returnCanvasAndContext(t.canvasAndContext),He.returnTexture(t.texture);const n=t.texture.source;n.resource=null,n.uploadMethodId="unknown",n.alphaMode="no-premultiply-alpha",this._activeTextures[e]=null}}getReferenceCount(e){return this._activeTextures[e].usageCount}renderTextToCanvas(e,t,n,i){var B,O,W,ne,m;const{canvas:s,context:o}=i,a=Is(t),l=Yt.measureText(e||" ",t),h=l.lines,f=l.lineHeight,p=l.lineWidths,x=l.maxLineWidth,y=l.fontProperties,b=s.height;o.resetTransform(),o.scale(n,n);const T=t.padding*2;if(o.clearRect(0,0,l.width+4+T,l.height+4+T),(B=t._stroke)!=null&&B.width){const V=t._stroke;o.lineWidth=V.width,o.miterLimit=V.miterLimit,o.lineJoin=V.join,o.lineCap=V.cap}o.font=a;let C,P;const F=t.dropShadow?2:1;for(let V=0;V<F;++V){const z=t.dropShadow&&V===0,$=z?Math.ceil(Math.max(1,b)+t.padding*2):0,Me=$*n;if(z){o.fillStyle="black",o.strokeStyle="black";const Y=t.dropShadow,be=Y.color,De=Y.alpha;o.shadowColor=de.shared.setValue(be).setAlpha(De).toRgbaString();const q=Y.blur*n,xe=Y.distance*n;o.shadowBlur=q,o.shadowOffsetX=Math.cos(Y.angle)*xe,o.shadowOffsetY=Math.sin(Y.angle)*xe+Me}else o.globalAlpha=((O=t._fill)==null?void 0:O.alpha)??1,o.fillStyle=t._fill?Fs(t._fill,o):null,(W=t._stroke)!=null&&W.width&&(o.strokeStyle=Fs(t._stroke,o)),o.shadowColor="black";let ut=(f-y.fontSize)/2;f-y.fontSize<0&&(ut=0);const X=((ne=t._stroke)==null?void 0:ne.width)??0;for(let Y=0;Y<h.length;Y++)C=X/2,P=X/2+Y*f+y.ascent+ut,t.align==="right"?C+=x-p[Y]:t.align==="center"&&(C+=(x-p[Y])/2),(m=t._stroke)!=null&&m.width&&this._drawLetterSpacing(h[Y],t,i,C+t.padding,P+t.padding-$,!0),t._fill!==void 0&&this._drawLetterSpacing(h[Y],t,i,C+t.padding,P+t.padding-$)}}_drawLetterSpacing(e,t,n,i,s,o=!1){const{context:a}=n,l=t.letterSpacing;let h=!1;if(Yt.experimentalLetterSpacingSupported&&(Yt.experimentalLetterSpacing?(a.letterSpacing=`${l}px`,a.textLetterSpacing=`${l}px`,h=!0):(a.letterSpacing="0px",a.textLetterSpacing="0px")),l===0||h){o?a.strokeText(e,i,s):a.fillText(e,i,s);return}let f=i;const p=Yt.graphemeSegmenter(e);let x=a.measureText(e).width,y=0;for(let b=0;b<p.length;++b){const T=p[b];o?a.strokeText(T,f,s):a.fillText(T,f,s);let C="";for(let P=b+1;P<p.length;++P)C+=p[P];y=a.measureText(C).width,f+=x-y+l,x=y}}destroy(){this._activeTextures=null}}V2.extension={type:[R.WebGLSystem,R.WebGPUSystem,R.CanvasSystem],name:"canvasText"};ke.add(Mg,Bg);class j2 extends it{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit("refresh")}refreshPaused(){this.emit("refreshPaused")}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(e){console.warn("HTML Audio does not support filters")}get audioContext(){return console.warn("HTML Audio does not support audioContext"),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}}let X2=0;const Ha=class extends it{constructor(r){super(),this.id=X2++,this.init(r)}set(r,e){if(this[r]===void 0)throw new Error(`Property with name ${r} does not exist.`);switch(r){case"speed":this.speed=e;break;case"volume":this.volume=e;break;case"paused":this.paused=e;break;case"loop":this.loop=e;break;case"muted":this.muted=e;break}return this}get progress(){const{currentTime:r}=this._source;return r/this._duration}get paused(){return this._paused}set paused(r){this._paused=r,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(r){this._playing=!1,this._duration=r.source.duration;const e=this._source=r.source.cloneNode(!1);e.src=r.parent.url,e.onplay=this._onPlay.bind(this),e.onpause=this._onPause.bind(this),r.context.on("refresh",this.refresh,this),r.context.on("refreshPaused",this.refreshPaused,this),this._media=r}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit("stop")}get speed(){return this._speed}set speed(r){this._speed=r,this.refresh()}get volume(){return this._volume}set volume(r){this._volume=r,this.refresh()}get loop(){return this._loop}set loop(r){this._loop=r,this.refresh()}get muted(){return this._muted}set muted(r){this._muted=r,this.refresh()}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(r){console.warn("HTML Audio does not support filters")}refresh(){const r=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;const t=r.volume*(r.muted?0:1),n=e.volume*(e.muted?0:1),i=this._volume*(this._muted?0:1);this._source.volume=i*t*n,this._source.playbackRate=this._speed*r.speed*e.speed}refreshPaused(){const r=this._media.context,e=this._media.parent,t=this._paused||e.paused||r.paused;t!==this._pausedReal&&(this._pausedReal=t,t?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",t))}play(r){const{start:e,end:t,speed:n,loop:i,volume:s,muted:o}=r;t&&console.assert(t>e,"End time is before start time"),this._speed=n,this._volume=s,this._loop=!!i,this._muted=o,this.refresh(),this.loop&&t!==null&&(console.warn('Looping not support when specifying an "end" time'),this.loop=!1),this._start=e,this._end=t||this._duration,this._start=Math.max(0,this._start-Ha.PADDING),this._end=Math.min(this._end+Ha.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=e,this._source.onloadedmetadata=null,this.emit("progress",e/this._duration,this._duration),Xe.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")}_onUpdate(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){Xe.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)}destroy(){Xe.shared.remove(this._onUpdate,this),this.removeAllListeners();const r=this._source;r&&(r.onended=null,r.onplay=null,r.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}};let Ip=Ha;Ip.PADDING=.1;class Y2 extends it{init(e){this.parent=e,this._source=e.options.source||new Audio,e.url&&(this._source.src=e.url)}create(){return new Ip(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(e){console.warn("HTML Audio does not support filters")}destroy(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)}get source(){return this._source}load(e){const t=this._source,n=this.parent;if(t.readyState===4){n.isLoaded=!0;const l=n.autoPlayStart();e&&setTimeout(()=>{e(null,n,l)},0);return}if(!n.url){e(new Error("sound.url or sound.source must be set"));return}t.src=n.url;const i=()=>{a(),n.isLoaded=!0;const l=n.autoPlayStart();e&&e(null,n,l)},s=()=>{a(),e&&e(new Error("Sound loading has been aborted"))},o=()=>{a();const l=`Failed to load audio element (code: ${t.error.code})`;e?e(new Error(l)):console.error(l)},a=()=>{t.removeEventListener("canplaythrough",i),t.removeEventListener("load",i),t.removeEventListener("abort",s),t.removeEventListener("error",o)};t.addEventListener("canplaythrough",i,!1),t.addEventListener("load",i,!1),t.addEventListener("abort",s,!1),t.addEventListener("error",o,!1),t.load()}}class q2{constructor(e,t){this.parent=e,Object.assign(this,t),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}play(e){return this.parent.play({complete:e,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}}const Ds=["ogg","oga","opus","m4a","mp3","mpeg","wav","aiff","wma","mid","caf"],K2=["audio/mpeg","audio/ogg"],Gs={};function Z2(r){const e={m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"'},t=document.createElement("audio"),n={},i=/^no$/;Ds.forEach(s=>{const o=t.canPlayType(`audio/${s}`).replace(i,""),a=e[s]?t.canPlayType(e[s]).replace(i,""):"";n[s]=!!o||!!a}),Object.assign(Gs,n)}Z2();let Q2=0;class J2 extends it{constructor(e){super(),this.id=Q2++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(e)}set(e,t){if(this[e]===void 0)throw new Error(`Property with name ${e} does not exist.`);switch(e){case"speed":this.speed=t;break;case"volume":this.volume=t;break;case"muted":this.muted=t;break;case"loop":this.loop=t;break;case"paused":this.paused=t;break}return this}stop(){this._source&&(this._internalStop(),this.emit("stop"))}get speed(){return this._speed}set speed(e){this._speed=e,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(e){this._volume=e,this.refresh()}get muted(){return this._muted}set muted(e){this._muted=e,this.refresh()}get loop(){return this._loop}set loop(e){this._loop=e,this.refresh()}get filters(){return this._filters}set filters(e){var t;this._filters&&((t=this._filters)==null||t.filter(n=>n).forEach(n=>n.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=e!=null&&e.length?e.slice(0):null,this.refresh()}refresh(){if(!this._source)return;const e=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;const n=e.volume*(e.muted?0:1),i=t.volume*(t.muted?0:1),s=this._volume*(this._muted?0:1);br.setParamValue(this._gain.gain,s*i*n),br.setParamValue(this._source.playbackRate,this._speed*t.speed*e.speed),this.applyFilters()}applyFilters(){var e;if((e=this._filters)!=null&&e.length){this._source.disconnect();let t=this._source;this._filters.forEach(n=>{t.connect(n.destination),t=n}),t.connect(this._gain)}}refreshPaused(){const e=this._media.context,t=this._media.parent,n=this._paused||t.paused||e.paused;n!==this._pausedReal&&(this._pausedReal=n,n?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",n))}play(e){const{start:t,end:n,speed:i,loop:s,volume:o,muted:a,filters:l}=e;n&&console.assert(n>t,"End time is before start time"),this._paused=!1;const{source:h,gain:f}=this._media.nodes.cloneBufferSource();this._source=h,this._gain=f,this._speed=i,this._volume=o,this._loop=!!s,this._muted=a,this._filters=l,this.refresh();const p=this._source.buffer.duration;this._duration=p,this._end=n,this._lastUpdate=this._now(),this._elapsed=t,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=n,this._source.loopStart=t,this._source.start(0,t)):n?this._source.start(0,t,n-t):this._source.start(0,t),this.emit("start"),this._update(!0),this.enableTicker(!0)}enableTicker(e){Xe.shared.remove(this._updateListener,this),e&&Xe.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(e){this._paused=e,this.refreshPaused()}destroy(){var e;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(e=this._filters)==null||e.forEach(t=>t.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(e=!1){if(this._source){const t=this._now(),n=t-this._lastUpdate;if(n>0||e){const i=this._source.playbackRate.value;this._elapsed+=n*i,this._lastUpdate=t;const s=this._duration;let o;if(this._source.loopStart){const a=this._source.loopEnd-this._source.loopStart;o=(this._source.loopStart+this._elapsed%a)/s}else o=this._elapsed%s/s;this._progress=o,this.emit("progress",this._progress,s)}}}init(e){this._media=e,e.context.events.on("refresh",this.refresh,this),e.context.events.on("refreshPaused",this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)}}class Fp{constructor(e,t){this._output=t,this._input=e}get destination(){return this._input}get filters(){return this._filters}set filters(e){if(this._filters&&(this._filters.forEach(t=>{t&&t.disconnect()}),this._filters=null,this._input.connect(this._output)),e&&e.length){this._filters=e.slice(0),this._input.disconnect();let t=null;e.forEach(n=>{t===null?this._input.connect(n.destination):t.connect(n.destination),t=n}),t.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}}const Op=class extends Fp{constructor(r){const e=r.audioContext,t=e.createBufferSource(),n=e.createGain(),i=e.createAnalyser();t.connect(i),i.connect(n),n.connect(r.destination),super(i,n),this.context=r,this.bufferSource=t,this.gain=n,this.analyser=i}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(Op.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){const r=this.bufferSource,e=this.context.audioContext.createBufferSource();e.buffer=r.buffer,br.setParamValue(e.playbackRate,r.playbackRate.value),e.loop=r.loop;const t=this.context.audioContext.createGain();return e.connect(t),t.connect(this.destination),{source:e,gain:t}}get bufferSize(){return this.script.bufferSize}};let Up=Op;Up.BUFFER_SIZE=0;class eS{init(e){this.parent=e,this._nodes=new Up(this.context),this._source=this._nodes.bufferSource,this.source=e.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null,this.source=null}create(){return new J2(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(e){this._nodes.filters=e}get duration(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(e){this._source.buffer=e}get nodes(){return this._nodes}load(e){this.source?this._decode(this.source,e):this.parent.url?this._loadUrl(e):e?e(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")}async _loadUrl(e){const t=this.parent.url,n=await Ce.get().fetch(t);this._decode(await n.arrayBuffer(),e)}_decode(e,t){const n=(i,s)=>{if(i)t&&t(i);else{this.parent.isLoaded=!0,this.buffer=s;const o=this.parent.autoPlayStart();t&&t(null,this.parent,o)}};e instanceof AudioBuffer?n(null,e):this.parent.context.decode(e,n)}}const dn=class{static from(r){let e={};typeof r=="string"?e.url=r:r instanceof ArrayBuffer||r instanceof AudioBuffer||r instanceof HTMLAudioElement?e.source=r:Array.isArray(r)?e.url=r:e=r,e={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...e},Object.freeze(e);const t=hr().useLegacy?new Y2:new eS;return new dn(t,e)}constructor(r,e){this.media=r,this.options=e,this._instances=[],this._sprites={},this.media.init(this);const t=e.complete;this._autoPlayOptions=t?{complete:t}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=e.autoPlay,this.singleInstance=e.singleInstance,this.preload=e.preload||this.autoPlay,this.url=Array.isArray(e.url)?this.preferUrl(e.url):e.url,this.speed=e.speed,this.volume=e.volume,this.loop=e.loop,e.sprites&&this.addSprites(e.sprites),this.preload&&this._preload(e.loaded)}preferUrl(r){const[e]=r.map(t=>({url:t,ext:at.extname(t).slice(1)})).filter(({ext:t})=>Gs[t]).sort((t,n)=>Ds.indexOf(t.ext)-Ds.indexOf(n.ext));if(!e)throw new Error("No supported file type found");return e.url}get context(){return hr().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(r){this._paused=r,this.refreshPaused()}get speed(){return this._speed}set speed(r){this._speed=r,this.refresh()}get filters(){return this.media.filters}set filters(r){this.media.filters=r}addSprites(r,e){if(typeof r=="object"){const n={};for(const i in r)n[i]=this.addSprites(i,r[i]);return n}console.assert(!this._sprites[r],`Alias ${r} is already taken`);const t=new q2(this,e);return this._sprites[r]=t,t}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(r){if(r){const e=this._sprites[r];e!==void 0&&(e.destroy(),delete this._sprites[r])}else for(const e in this._sprites)this.removeSprites(e);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let r=this._instances.length-1;r>=0;r--)this._instances[r].stop();return this}play(r,e){let t;if(typeof r=="string"?t={sprite:r,loop:this.loop,complete:e}:typeof r=="function"?(t={},t.complete=r):t=r,t={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...t||{}},t.sprite){const i=t.sprite;console.assert(!!this._sprites[i],`Alias ${i} is not available`);const s=this._sprites[i];t.start=s.start+(t.start||0),t.end=s.end,t.speed=s.speed||1,t.loop=s.loop||t.loop,delete t.sprite}if(t.offset&&(t.start=t.offset),!this.isLoaded)return this._preloadQueue?new Promise(i=>{this._preloadQueue.push(()=>{i(this.play(t))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=t,new Promise((i,s)=>{this._preload((o,a,l)=>{this._preloadQueue.forEach(h=>h()),this._preloadQueue=null,o?s(o):(t.loaded&&t.loaded(o,a,l),i(l))})}));(this.singleInstance||t.singleInstance)&&this._removeInstances();const n=this._createInstance();return this._instances.push(n),this.isPlaying=!0,n.once("end",()=>{t.complete&&t.complete(this),this._onComplete(n)}),n.once("stop",()=>{this._onComplete(n)}),n.play(t),n}refresh(){const r=this._instances.length;for(let e=0;e<r;e++)this._instances[e].refresh()}refreshPaused(){const r=this._instances.length;for(let e=0;e<r;e++)this._instances[e].refreshPaused()}get volume(){return this._volume}set volume(r){this._volume=r,this.refresh()}get muted(){return this._muted}set muted(r){this._muted=r,this.refresh()}get loop(){return this._loop}set loop(r){this._loop=r,this.refresh()}_preload(r){this.media.load(r)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let r;return this.autoPlay&&(r=this.play(this._autoPlayOptions)),r}_removeInstances(){for(let r=this._instances.length-1;r>=0;r--)this._poolInstance(this._instances[r]);this._instances.length=0}_onComplete(r){if(this._instances){const e=this._instances.indexOf(r);e>-1&&this._instances.splice(e,1),this.isPlaying=this._instances.length>0}this._poolInstance(r)}_createInstance(){if(dn._pool.length>0){const r=dn._pool.pop();return r.init(this.media),r}return this.media.create()}_poolInstance(r){r.destroy(),dn._pool.indexOf(r)<0&&dn._pool.push(r)}};let zs=dn;zs._pool=[];class xi extends Fp{constructor(){const e=window,t=new xi.AudioContext,n=t.createDynamicsCompressor(),i=t.createAnalyser();i.connect(n),n.connect(t.destination),super(i,n),this.autoPause=!0,this._ctx=t,this._offlineCtx=new xi.OfflineAudioContext(1,2,e.OfflineAudioContext?Math.max(8e3,Math.min(96e3,t.sampleRate)):44100),this.compressor=n,this.analyser=i,this.events=new it,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=t.state==="suspended"&&("ontouchstart"in globalThis||"onclick"in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener("mousedown",this._unlock,!0),document.addEventListener("touchstart",this._unlock,!0),document.addEventListener("touchend",this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener("focus",this.onFocus),globalThis.addEventListener("blur",this.onBlur)}onFocus(){if(!this.autoPause)return;const e=this._ctx.state;(e==="suspended"||e==="interrupted"||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._locked=!1))}playEmptySound(){const e=this._ctx.createBufferSource();e.buffer=this._ctx.createBuffer(1,1,22050),e.connect(this._ctx.destination),e.start(0,0,0),e.context.state==="suspended"&&e.context.resume()}static get AudioContext(){const e=window;return e.AudioContext||e.webkitAudioContext||null}static get OfflineAudioContext(){const e=window;return e.OfflineAudioContext||e.webkitOfflineAudioContext||null}destroy(){super.destroy();const e=this._ctx;typeof e.close<"u"&&e.close(),globalThis.removeEventListener("focus",this.onFocus),globalThis.removeEventListener("blur",this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(e){e&&this._ctx.state==="running"?this._ctx.suspend():!e&&this._ctx.state==="suspended"&&this._ctx.resume(),this._paused=e}get paused(){return this._paused}refresh(){this.events.emit("refresh")}refreshPaused(){this.events.emit("refreshPaused")}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(e,t){const n=s=>{t(new Error((s==null?void 0:s.message)||"Unable to decode file"))},i=this._offlineCtx.decodeAudioData(e,s=>{t(null,s)},n);i&&i.catch(n)}}class tS{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new xi),this._htmlAudioContext=new j2,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(e){this.useLegacy||(this._context.filters=e)}get supported(){return xi.AudioContext!==null}add(e,t){if(typeof e=="object"){const s={};for(const o in e){const a=this._getOptions(e[o],t);s[o]=this.add(o,a)}return s}if(console.assert(!this._sounds[e],`Sound with alias ${e} already exists.`),t instanceof zs)return this._sounds[e]=t,t;const n=this._getOptions(t),i=zs.from(n);return this._sounds[e]=i,i}_getOptions(e,t){let n;return typeof e=="string"?n={url:e}:Array.isArray(e)?n={url:e}:e instanceof ArrayBuffer||e instanceof AudioBuffer||e instanceof HTMLAudioElement?n={source:e}:n=e,n={...n,...t||{}},n}get useLegacy(){return this._useLegacy}set useLegacy(e){this._useLegacy=e,this._context=!e&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(e){this._webAudioContext.autoPause=!e}remove(e){return this.exists(e,!0),this._sounds[e].destroy(),delete this._sounds[e],this}get volumeAll(){return this._context.volume}set volumeAll(e){this._context.volume=e,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(e){this._context.speed=e,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(const e in this._sounds)this._sounds[e].destroy(),delete this._sounds[e];return this}stopAll(){for(const e in this._sounds)this._sounds[e].stop();return this}exists(e,t=!1){const n=!!this._sounds[e];return t&&console.assert(n,`No sound matching alias '${e}'.`),n}isPlaying(){for(const e in this._sounds)if(this._sounds[e].isPlaying)return!0;return!1}find(e){return this.exists(e,!0),this._sounds[e]}play(e,t){return this.find(e).play(t)}stop(e){return this.find(e).stop()}pause(e){return this.find(e).pause()}resume(e){return this.find(e).resume()}volume(e,t){const n=this.find(e);return t!==void 0&&(n.volume=t),n.volume}speed(e,t){const n=this.find(e);return t!==void 0&&(n.speed=t),n.speed}duration(e){return this.find(e).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this}}const sh=r=>{var n;const e=r.src;let t=(n=r==null?void 0:r.alias)==null?void 0:n[0];return(!t||r.src===t)&&(t=at.basename(e,at.extname(e))),t},rS={extension:R.Asset,detection:{test:async()=>!0,add:async r=>[...r,...Ds.filter(e=>Gs[e])],remove:async r=>r.filter(e=>r.includes(e))},loader:{name:"sound",extension:{type:[R.LoadParser],priority:fr.High},test(r){const e=at.extname(r).slice(1);return!!Gs[e]||K2.some(t=>r.startsWith(`data:${t}`))},async load(r,e){const t=await new Promise((n,i)=>zs.from({...e.data,url:r,preload:!0,loaded(s,o){var a,l;s?i(s):n(o),(l=(a=e.data)==null?void 0:a.loaded)==null||l.call(a,s,o)}}));return hr().add(sh(e),t),t},async unload(r,e){hr().remove(sh(e))}}};ke.add(rS);const VC=Pg(new tS);ke.add(ed);var nS={},Js={},Ei={};Object.defineProperty(Ei,"__esModule",{value:!0});Ei.BitView=void 0;class iS{constructor(e,t,n){te(this,"_view");te(this,"_scratch",new DataView(new ArrayBuffer(8)));te(this,"bigEndian");te(this,"_setBit",(e,t)=>{t?this._view[e>>3]|=1<<(e&7):this._view[e>>3]&=~(1<<(e&7))});te(this,"getBits",(e,t,n)=>{const i=this._view.length*8-e;if(t>i)throw new Error(`Cannot get ${t} bit(s) from offset ${e}, ${i} available`);let s=0;for(let o=0;o<t;){const a=t-o,l=e&7,h=this._view[e>>3],f=Math.min(a,8-l);let p,x;this.bigEndian?(p=~(255<<f),x=h>>8-f-l&p,s<<=f,s|=x):(p=~(255<<f),x=h>>l&p,s|=x<<o),e+=f,o+=f}return n?(t!==32&&s&1<<t-1&&(s|=-1^(1<<t)-1),s):s>>>0});te(this,"setBits",(e,t,n)=>{const i=this._view.length*8-e;if(n>i)throw new Error(`Cannot set ${n} bit(s) from offset ${e}, ${i} available`);for(let s=0;s<n;){const o=n-s,a=e&7,l=e>>3,h=Math.min(o,8-a);let f,p,x;if(this.bigEndian){f=~(-1<<h),p=t>>n-s-h&f;const y=8-a-h;x=~(f<<y),this._view[l]=this._view[l]&x|p<<y}else f=~(255<<h),p=t&f,t>>=h,x=~(f<<a),this._view[l]=this._view[l]&x|p<<a;e+=h,s+=h}});te(this,"getBoolean",e=>this.getBits(e,1,!1)!==0);te(this,"getInt8",e=>this.getBits(e,8,!0));te(this,"getInt16",e=>this.getBits(e,16,!0));te(this,"getInt32",e=>this.getBits(e,32,!0));te(this,"getUint8",e=>this.getBits(e,8,!1));te(this,"getUint16",e=>this.getBits(e,16,!1));te(this,"getUint32",e=>this.getBits(e,32,!1));te(this,"getFloat32",e=>(this._scratch.setUint32(0,this.getUint32(e)),this._scratch.getFloat32(0)));te(this,"getFloat64",e=>(this._scratch.setUint32(0,this.getUint32(e)),this._scratch.setUint32(4,this.getUint32(e+32)),this._scratch.getFloat64(0)));te(this,"setBoolean",(e,t)=>{this.setBits(e,t?1:0,1)});te(this,"setInt8",(e,t)=>{this.setBits(e,t,8)});te(this,"setInt16",(e,t)=>{this.setBits(e,t,16)});te(this,"setInt32",(e,t)=>{this.setBits(e,t,32)});te(this,"setUint8",this.setInt8);te(this,"setUint16",this.setInt16);te(this,"setUint32",this.setInt32);te(this,"setFloat32",(e,t)=>{this._scratch.setFloat32(0,t),this.setBits(e,this._scratch.getUint32(0),32)});te(this,"setFloat64",(e,t)=>{this._scratch.setFloat64(0,t),this.setBits(e,this._scratch.getUint32(0),32),this.setBits(e+32,this._scratch.getUint32(4),32)});te(this,"getArrayBuffer",(e,t)=>{const n=new Uint8Array(t);for(let i=0;i<t;i++)n[i]=this.getUint8(e+i*8);return n});if(!(e instanceof ArrayBuffer||typeof Buffer<"u"&&e instanceof Buffer))throw new Error("Must specify a valid ArrayBuffer or Buffer");t=t??0,n=(n??0)||(e instanceof ArrayBuffer?e.byteLength-t:e.length-t),n===0&&(n=e instanceof ArrayBuffer?e.byteLength:e.length),this._view=new Uint8Array(typeof Buffer<"u"&&e instanceof Buffer?e.buffer:e,t,n),this.bigEndian=!1}get buffer(){return typeof Buffer<"u"?Buffer.from(this._view.buffer):this._view.buffer}get byteLength(){return this._view.length}}Ei.BitView=iS;var kp={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.writeUTF8String=r.writeASCIIString=r.readUTF8String=r.readASCIIString=r.stringToByteArray=void 0;const e=(a,l,h,f,p)=>{if(p===0)return"";let x=0;const y=[];let b=!0;const T=!!p;for(p===void 0&&(p=Math.floor(l-h));x<p;){const P=a.readUint8();if(P===0&&(b=!1,!T))break;b&&y.push(P),x++}const C=String.fromCharCode.apply(null,y);if(f)try{return decodeURIComponent(escape(C))}catch(P){return console.warn(P),C}else return C},t=a=>{const l=[];let h;for(let f=0;f<a.length;f++)h=a.charCodeAt(f),h<=127?l.push(h):h<=2047?(l.push(h>>6|192),l.push(h&63|128)):h<=65535?(l.push(h>>12|224),l.push(h>>6&63|128),l.push(h&63|128)):(l.push(h>>18|240),l.push(h>>12&63|128),l.push(h>>6&63|128),l.push(h&63|128));return l};r.stringToByteArray=t;const n=(a,l,h,f)=>e(a,l,h,!1,f);r.readASCIIString=n;const i=(a,l,h,f)=>e(a,l,h,!0,f);r.readUTF8String=i;const s=(a,l,h)=>{const f=(h??0)||l.length+1;for(let p=0;p<f;p++)a.writeUint8(p<l.length?l.charCodeAt(p):0)};r.writeASCIIString=s;const o=(a,l,h)=>{const f=(0,r.stringToByteArray)(l),p=(h??0)||f.length+1;for(let x=0;x<p;x++)a.writeUint8(x<f.length?f[x]:0)};r.writeUTF8String=o})(kp);Object.defineProperty(Js,"__esModule",{value:!0});Js.BitStream=void 0;const as=Ei,us=kp;class Ls{constructor(e,t,n){te(this,"_view");te(this,"_startIndex");te(this,"_length");te(this,"_index");te(this,"reader",(e,t)=>()=>{if(this._index+t>this._length)throw new Error("Trying to read past the end of the stream");const n=this._view[e](this._index);return this._index+=t,n});te(this,"writer",(e,t)=>n=>{this._view[e](this._index,n),this._index+=t});te(this,"readBits",(e,t)=>{const n=this._view.getBits(this._index,e,t??!1);return this._index+=e,n});te(this,"writeBits",(e,t)=>{this._view.setBits(this._index,e,t),this._index+=t});te(this,"readBoolean",this.reader("getBoolean",1));te(this,"readInt8",this.reader("getInt8",8));te(this,"readInt16",this.reader("getInt16",16));te(this,"readInt32",this.reader("getInt32",32));te(this,"readUint8",this.reader("getUint8",8));te(this,"readUint16",this.reader("getUint16",16));te(this,"readUint32",this.reader("getUint32",32));te(this,"readFloat32",this.reader("getFloat32",32));te(this,"readFloat64",this.reader("getFloat64",64));te(this,"writeBoolean",this.writer("setBoolean",1));te(this,"writeInt8",this.writer("setInt8",8));te(this,"writeInt16",this.writer("setInt16",16));te(this,"writeInt32",this.writer("setInt32",32));te(this,"writeUint8",this.writer("setUint8",8));te(this,"writeUint16",this.writer("setUint16",16));te(this,"writeUint32",this.writer("setUint32",32));te(this,"writeFloat32",this.writer("setFloat32",32));te(this,"writeFloat64",this.writer("setFloat64",64));te(this,"readASCIIString",e=>(0,us.readASCIIString)(this,this._length,this._index,e));te(this,"readUTF8String",e=>(0,us.readUTF8String)(this,this._length,this._index,e));te(this,"writeASCIIString",(e,t)=>{(0,us.writeASCIIString)(this,e,t)});te(this,"writeUTF8String",(e,t)=>{(0,us.writeUTF8String)(this,e,t)});te(this,"readBitStream",e=>{const t=new Ls(this._view);return t._startIndex=this._index,t._index=this._index,t.length=e,this._index+=e,t});te(this,"writeBitStream",(e,t)=>{t===void 0&&(t=e.bitsLeft);let n;for(;t>0;)n=Math.min(t,32),this.writeBits(e.readBits(n),n),t-=n});te(this,"readArrayBuffer",e=>{const t=this._view.getArrayBuffer(this._index,e);return this._index+=e*8,t});te(this,"writeArrayBuffer",(e,t)=>{this.writeBitStream(new Ls(e),t*8)});const i=e instanceof ArrayBuffer||typeof Buffer<"u"&&e instanceof Buffer;if(!(e instanceof as.BitView)&&!i)throw new Error("Must specify a valid BitView, ArrayBuffer or Buffer");t=t??0,n=(n??0)||(e instanceof ArrayBuffer||e instanceof as.BitView?e.byteLength:e.length),this._view=e instanceof as.BitView?e:new as.BitView(e,t,n),this._index=0,this._startIndex=0,this._length=this._view.byteLength*8}get index(){return this._index-this._startIndex}set index(e){this._index=e+this._startIndex}get length(){return this._length-this._startIndex}set length(e){this._length=e+this._startIndex}get bitsLeft(){return this._length-this._index}get byteIndex(){return Math.ceil(this._index/8)}set byteIndex(e){this._index=e*8}get buffer(){return this._view.buffer}get view(){return this._view}get bigEndian(){return this._view.bigEndian}set bigEndian(e){this._view.bigEndian=e}}Js.BitStream=Ls;(function(r){var e=Qn&&Qn.__createBinding||(Object.create?function(n,i,s,o){o===void 0&&(o=s);var a=Object.getOwnPropertyDescriptor(i,s);(!a||("get"in a?!i.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return i[s]}}),Object.defineProperty(n,o,a)}:function(n,i,s,o){o===void 0&&(o=s),n[o]=i[s]}),t=Qn&&Qn.__exportStar||function(n,i){for(var s in n)s!=="default"&&!Object.prototype.hasOwnProperty.call(i,s)&&e(i,n,s)};Object.defineProperty(r,"__esModule",{value:!0}),t(Js,r),t(Ei,r)})(nS);var Dp={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(r){(function(e,t){r.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Qn,function(e,t){var n=[],i=Object.getPrototypeOf,s=n.slice,o=n.flat?function(u){return n.flat.call(u)}:function(u){return n.concat.apply([],u)},a=n.push,l=n.indexOf,h={},f=h.toString,p=h.hasOwnProperty,x=p.toString,y=x.call(Object),b={},T=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},C=function(c){return c!=null&&c===c.window},P=e.document,F={type:!0,src:!0,nonce:!0,noModule:!0};function B(u,c,d){d=d||P;var g,_,v=d.createElement("script");if(v.text=u,c)for(g in F)_=c[g]||c.getAttribute&&c.getAttribute(g),_&&v.setAttribute(g,_);d.head.appendChild(v).parentNode.removeChild(v)}function O(u){return u==null?u+"":typeof u=="object"||typeof u=="function"?h[f.call(u)]||"object":typeof u}var W="3.7.1",ne=/HTML$/i,m=function(u,c){return new m.fn.init(u,c)};m.fn=m.prototype={jquery:W,constructor:m,length:0,toArray:function(){return s.call(this)},get:function(u){return u==null?s.call(this):u<0?this[u+this.length]:this[u]},pushStack:function(u){var c=m.merge(this.constructor(),u);return c.prevObject=this,c},each:function(u){return m.each(this,u)},map:function(u){return this.pushStack(m.map(this,function(c,d){return u.call(c,d,c)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(m.grep(this,function(u,c){return(c+1)%2}))},odd:function(){return this.pushStack(m.grep(this,function(u,c){return c%2}))},eq:function(u){var c=this.length,d=+u+(u<0?c:0);return this.pushStack(d>=0&&d<c?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},m.extend=m.fn.extend=function(){var u,c,d,g,_,v,S=arguments[0]||{},E=1,A=arguments.length,I=!1;for(typeof S=="boolean"&&(I=S,S=arguments[E]||{},E++),typeof S!="object"&&!T(S)&&(S={}),E===A&&(S=this,E--);E<A;E++)if((u=arguments[E])!=null)for(c in u)g=u[c],!(c==="__proto__"||S===g)&&(I&&g&&(m.isPlainObject(g)||(_=Array.isArray(g)))?(d=S[c],_&&!Array.isArray(d)?v=[]:!_&&!m.isPlainObject(d)?v={}:v=d,_=!1,S[c]=m.extend(I,v,g)):g!==void 0&&(S[c]=g));return S},m.extend({expando:"jQuery"+(W+Math.random()).replace(/\D/g,""),isReady:!0,error:function(u){throw new Error(u)},noop:function(){},isPlainObject:function(u){var c,d;return!u||f.call(u)!=="[object Object]"?!1:(c=i(u),c?(d=p.call(c,"constructor")&&c.constructor,typeof d=="function"&&x.call(d)===y):!0)},isEmptyObject:function(u){var c;for(c in u)return!1;return!0},globalEval:function(u,c,d){B(u,{nonce:c&&c.nonce},d)},each:function(u,c){var d,g=0;if(V(u))for(d=u.length;g<d&&c.call(u[g],g,u[g])!==!1;g++);else for(g in u)if(c.call(u[g],g,u[g])===!1)break;return u},text:function(u){var c,d="",g=0,_=u.nodeType;if(!_)for(;c=u[g++];)d+=m.text(c);return _===1||_===11?u.textContent:_===9?u.documentElement.textContent:_===3||_===4?u.nodeValue:d},makeArray:function(u,c){var d=c||[];return u!=null&&(V(Object(u))?m.merge(d,typeof u=="string"?[u]:u):a.call(d,u)),d},inArray:function(u,c,d){return c==null?-1:l.call(c,u,d)},isXMLDoc:function(u){var c=u&&u.namespaceURI,d=u&&(u.ownerDocument||u).documentElement;return!ne.test(c||d&&d.nodeName||"HTML")},merge:function(u,c){for(var d=+c.length,g=0,_=u.length;g<d;g++)u[_++]=c[g];return u.length=_,u},grep:function(u,c,d){for(var g,_=[],v=0,S=u.length,E=!d;v<S;v++)g=!c(u[v],v),g!==E&&_.push(u[v]);return _},map:function(u,c,d){var g,_,v=0,S=[];if(V(u))for(g=u.length;v<g;v++)_=c(u[v],v,d),_!=null&&S.push(_);else for(v in u)_=c(u[v],v,d),_!=null&&S.push(_);return o(S)},guid:1,support:b}),typeof Symbol=="function"&&(m.fn[Symbol.iterator]=n[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(u,c){h["[object "+c+"]"]=c.toLowerCase()});function V(u){var c=!!u&&"length"in u&&u.length,d=O(u);return T(u)||C(u)?!1:d==="array"||c===0||typeof c=="number"&&c>0&&c-1 in u}function z(u,c){return u.nodeName&&u.nodeName.toLowerCase()===c.toLowerCase()}var $=n.pop,Me=n.sort,ut=n.splice,X="[\\x20\\t\\r\\n\\f]",Y=new RegExp("^"+X+"+|((?:^|[^\\\\])(?:\\\\.)*)"+X+"+$","g");m.contains=function(u,c){var d=c&&c.parentNode;return u===d||!!(d&&d.nodeType===1&&(u.contains?u.contains(d):u.compareDocumentPosition&&u.compareDocumentPosition(d)&16))};var be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function De(u,c){return c?u==="\0"?"�":u.slice(0,-1)+"\\"+u.charCodeAt(u.length-1).toString(16)+" ":"\\"+u}m.escapeSelector=function(u){return(u+"").replace(be,De)};var q=P,xe=a;(function(){var u,c,d,g,_,v=xe,S,E,A,I,G,N=m.expando,k=0,H=0,ce=Di(),we=Di(),pe=Di(),ot=Di(),Qe=function(w,M){return w===M&&(_=!0),0},Lt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Nt="(?:\\\\[\\da-fA-F]{1,6}"+X+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Se="\\["+X+"*("+Nt+")(?:"+X+"*([*^$|!~]?=)"+X+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Nt+"))|)"+X+"*\\]",Ir=":("+Nt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Se+")*)|.*)\\)|)",Pe=new RegExp(X+"+","g"),je=new RegExp("^"+X+"*,"+X+"*"),Hn=new RegExp("^"+X+"*([>+~]|"+X+")"+X+"*"),xo=new RegExp(X+"|>"),Ht=new RegExp(Ir),$n=new RegExp("^"+Nt+"$"),$t={ID:new RegExp("^#("+Nt+")"),CLASS:new RegExp("^\\.("+Nt+")"),TAG:new RegExp("^("+Nt+"|[*])"),ATTR:new RegExp("^"+Se),PSEUDO:new RegExp("^"+Ir),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+X+"*(even|odd|(([+-]|)(\\d*)n|)"+X+"*(?:([+-]|)"+X+"*(\\d+)|))"+X+"*\\)|)","i"),bool:new RegExp("^(?:"+Lt+")$","i"),needsContext:new RegExp("^"+X+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+X+"*((?:-\\d)?\\d*)"+X+"*\\)|)(?=[^-]|$)","i")},gr=/^(?:input|select|textarea|button)$/i,xr=/^h\d$/i,Pt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_o=/[+~]/,tr=new RegExp("\\\\[\\da-fA-F]{1,6}"+X+"?|\\\\([^\\r\\n\\f])","g"),rr=function(w,M){var U="0x"+w.slice(1)-65536;return M||(U<0?String.fromCharCode(U+65536):String.fromCharCode(U>>10|55296,U&1023|56320))},xg=function(){_r()},_g=zi(function(w){return w.disabled===!0&&z(w,"fieldset")},{dir:"parentNode",next:"legend"});function vg(){try{return S.activeElement}catch{}}try{v.apply(n=s.call(q.childNodes),q.childNodes),n[q.childNodes.length].nodeType}catch{v={apply:function(M,U){xe.apply(M,s.call(U))},call:function(M){xe.apply(M,s.call(arguments,1))}}}function Oe(w,M,U,D){var L,j,J,re,ee,_e,le,he=M&&M.ownerDocument,ve=M?M.nodeType:9;if(U=U||[],typeof w!="string"||!w||ve!==1&&ve!==9&&ve!==11)return U;if(!D&&(_r(M),M=M||S,A)){if(ve!==11&&(ee=Pt.exec(w)))if(L=ee[1]){if(ve===9)if(J=M.getElementById(L)){if(J.id===L)return v.call(U,J),U}else return U;else if(he&&(J=he.getElementById(L))&&Oe.contains(M,J)&&J.id===L)return v.call(U,J),U}else{if(ee[2])return v.apply(U,M.getElementsByTagName(w)),U;if((L=ee[3])&&M.getElementsByClassName)return v.apply(U,M.getElementsByClassName(L)),U}if(!ot[w+" "]&&(!I||!I.test(w))){if(le=w,he=M,ve===1&&(xo.test(w)||Hn.test(w))){for(he=_o.test(w)&&vo(M.parentNode)||M,(he!=M||!b.scope)&&((re=M.getAttribute("id"))?re=m.escapeSelector(re):M.setAttribute("id",re=N)),_e=Wn(w),j=_e.length;j--;)_e[j]=(re?"#"+re:":scope")+" "+Gi(_e[j]);le=_e.join(",")}try{return v.apply(U,he.querySelectorAll(le)),U}catch{ot(w,!0)}finally{re===N&&M.removeAttribute("id")}}}return El(w.replace(Y,"$1"),M,U,D)}function Di(){var w=[];function M(U,D){return w.push(U+" ")>c.cacheLength&&delete M[w.shift()],M[U+" "]=D}return M}function Ft(w){return w[N]=!0,w}function sn(w){var M=S.createElement("fieldset");try{return!!w(M)}catch{return!1}finally{M.parentNode&&M.parentNode.removeChild(M),M=null}}function yg(w){return function(M){return z(M,"input")&&M.type===w}}function bg(w){return function(M){return(z(M,"input")||z(M,"button"))&&M.type===w}}function Pl(w){return function(M){return"form"in M?M.parentNode&&M.disabled===!1?"label"in M?"label"in M.parentNode?M.parentNode.disabled===w:M.disabled===w:M.isDisabled===w||M.isDisabled!==!w&&_g(M)===w:M.disabled===w:"label"in M?M.disabled===w:!1}}function Fr(w){return Ft(function(M){return M=+M,Ft(function(U,D){for(var L,j=w([],U.length,M),J=j.length;J--;)U[L=j[J]]&&(U[L]=!(D[L]=U[L]))})})}function vo(w){return w&&typeof w.getElementsByTagName<"u"&&w}function _r(w){var M,U=w?w.ownerDocument||w:q;return U==S||U.nodeType!==9||!U.documentElement||(S=U,E=S.documentElement,A=!m.isXMLDoc(S),G=E.matches||E.webkitMatchesSelector||E.msMatchesSelector,E.msMatchesSelector&&q!=S&&(M=S.defaultView)&&M.top!==M&&M.addEventListener("unload",xg),b.getById=sn(function(D){return E.appendChild(D).id=m.expando,!S.getElementsByName||!S.getElementsByName(m.expando).length}),b.disconnectedMatch=sn(function(D){return G.call(D,"*")}),b.scope=sn(function(){return S.querySelectorAll(":scope")}),b.cssHas=sn(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),b.getById?(c.filter.ID=function(D){var L=D.replace(tr,rr);return function(j){return j.getAttribute("id")===L}},c.find.ID=function(D,L){if(typeof L.getElementById<"u"&&A){var j=L.getElementById(D);return j?[j]:[]}}):(c.filter.ID=function(D){var L=D.replace(tr,rr);return function(j){var J=typeof j.getAttributeNode<"u"&&j.getAttributeNode("id");return J&&J.value===L}},c.find.ID=function(D,L){if(typeof L.getElementById<"u"&&A){var j,J,re,ee=L.getElementById(D);if(ee){if(j=ee.getAttributeNode("id"),j&&j.value===D)return[ee];for(re=L.getElementsByName(D),J=0;ee=re[J++];)if(j=ee.getAttributeNode("id"),j&&j.value===D)return[ee]}return[]}}),c.find.TAG=function(D,L){return typeof L.getElementsByTagName<"u"?L.getElementsByTagName(D):L.querySelectorAll(D)},c.find.CLASS=function(D,L){if(typeof L.getElementsByClassName<"u"&&A)return L.getElementsByClassName(D)},I=[],sn(function(D){var L;E.appendChild(D).innerHTML="<a id='"+N+"' href='' disabled='disabled'></a><select id='"+N+"-\r\\' disabled='disabled'><option selected=''></option></select>",D.querySelectorAll("[selected]").length||I.push("\\["+X+"*(?:value|"+Lt+")"),D.querySelectorAll("[id~="+N+"-]").length||I.push("~="),D.querySelectorAll("a#"+N+"+*").length||I.push(".#.+[+~]"),D.querySelectorAll(":checked").length||I.push(":checked"),L=S.createElement("input"),L.setAttribute("type","hidden"),D.appendChild(L).setAttribute("name","D"),E.appendChild(D).disabled=!0,D.querySelectorAll(":disabled").length!==2&&I.push(":enabled",":disabled"),L=S.createElement("input"),L.setAttribute("name",""),D.appendChild(L),D.querySelectorAll("[name='']").length||I.push("\\["+X+"*name"+X+"*="+X+`*(?:''|"")`)}),b.cssHas||I.push(":has"),I=I.length&&new RegExp(I.join("|")),Qe=function(D,L){if(D===L)return _=!0,0;var j=!D.compareDocumentPosition-!L.compareDocumentPosition;return j||(j=(D.ownerDocument||D)==(L.ownerDocument||L)?D.compareDocumentPosition(L):1,j&1||!b.sortDetached&&L.compareDocumentPosition(D)===j?D===S||D.ownerDocument==q&&Oe.contains(q,D)?-1:L===S||L.ownerDocument==q&&Oe.contains(q,L)?1:g?l.call(g,D)-l.call(g,L):0:j&4?-1:1)}),S}Oe.matches=function(w,M){return Oe(w,null,null,M)},Oe.matchesSelector=function(w,M){if(_r(w),A&&!ot[M+" "]&&(!I||!I.test(M)))try{var U=G.call(w,M);if(U||b.disconnectedMatch||w.document&&w.document.nodeType!==11)return U}catch{ot(M,!0)}return Oe(M,S,null,[w]).length>0},Oe.contains=function(w,M){return(w.ownerDocument||w)!=S&&_r(w),m.contains(w,M)},Oe.attr=function(w,M){(w.ownerDocument||w)!=S&&_r(w);var U=c.attrHandle[M.toLowerCase()],D=U&&p.call(c.attrHandle,M.toLowerCase())?U(w,M,!A):void 0;return D!==void 0?D:w.getAttribute(M)},Oe.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},m.uniqueSort=function(w){var M,U=[],D=0,L=0;if(_=!b.sortStable,g=!b.sortStable&&s.call(w,0),Me.call(w,Qe),_){for(;M=w[L++];)M===w[L]&&(D=U.push(L));for(;D--;)ut.call(w,U[D],1)}return g=null,w},m.fn.uniqueSort=function(){return this.pushStack(m.uniqueSort(s.apply(this)))},c=m.expr={cacheLength:50,createPseudo:Ft,match:$t,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(tr,rr),w[3]=(w[3]||w[4]||w[5]||"").replace(tr,rr),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Oe.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Oe.error(w[0]),w},PSEUDO:function(w){var M,U=!w[6]&&w[2];return $t.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":U&&Ht.test(U)&&(M=Wn(U,!0))&&(M=U.indexOf(")",U.length-M)-U.length)&&(w[0]=w[0].slice(0,M),w[2]=U.slice(0,M)),w.slice(0,3))}},filter:{TAG:function(w){var M=w.replace(tr,rr).toLowerCase();return w==="*"?function(){return!0}:function(U){return z(U,M)}},CLASS:function(w){var M=ce[w+" "];return M||(M=new RegExp("(^|"+X+")"+w+"("+X+"|$)"))&&ce(w,function(U){return M.test(typeof U.className=="string"&&U.className||typeof U.getAttribute<"u"&&U.getAttribute("class")||"")})},ATTR:function(w,M,U){return function(D){var L=Oe.attr(D,w);return L==null?M==="!=":M?(L+="",M==="="?L===U:M==="!="?L!==U:M==="^="?U&&L.indexOf(U)===0:M==="*="?U&&L.indexOf(U)>-1:M==="$="?U&&L.slice(-U.length)===U:M==="~="?(" "+L.replace(Pe," ")+" ").indexOf(U)>-1:M==="|="?L===U||L.slice(0,U.length+1)===U+"-":!1):!0}},CHILD:function(w,M,U,D,L){var j=w.slice(0,3)!=="nth",J=w.slice(-4)!=="last",re=M==="of-type";return D===1&&L===0?function(ee){return!!ee.parentNode}:function(ee,_e,le){var he,ve,ae,Ne,mt,lt=j!==J?"nextSibling":"previousSibling",At=ee.parentNode,Wt=re&&ee.nodeName.toLowerCase(),on=!le&&!re,ct=!1;if(At){if(j){for(;lt;){for(ae=ee;ae=ae[lt];)if(re?z(ae,Wt):ae.nodeType===1)return!1;mt=lt=w==="only"&&!mt&&"nextSibling"}return!0}if(mt=[J?At.firstChild:At.lastChild],J&&on){for(ve=At[N]||(At[N]={}),he=ve[w]||[],Ne=he[0]===k&&he[1],ct=Ne&&he[2],ae=Ne&&At.childNodes[Ne];ae=++Ne&&ae&&ae[lt]||(ct=Ne=0)||mt.pop();)if(ae.nodeType===1&&++ct&&ae===ee){ve[w]=[k,Ne,ct];break}}else if(on&&(ve=ee[N]||(ee[N]={}),he=ve[w]||[],Ne=he[0]===k&&he[1],ct=Ne),ct===!1)for(;(ae=++Ne&&ae&&ae[lt]||(ct=Ne=0)||mt.pop())&&!((re?z(ae,Wt):ae.nodeType===1)&&++ct&&(on&&(ve=ae[N]||(ae[N]={}),ve[w]=[k,ct]),ae===ee)););return ct-=L,ct===D||ct%D===0&&ct/D>=0}}},PSEUDO:function(w,M){var U,D=c.pseudos[w]||c.setFilters[w.toLowerCase()]||Oe.error("unsupported pseudo: "+w);return D[N]?D(M):D.length>1?(U=[w,w,"",M],c.setFilters.hasOwnProperty(w.toLowerCase())?Ft(function(L,j){for(var J,re=D(L,M),ee=re.length;ee--;)J=l.call(L,re[ee]),L[J]=!(j[J]=re[ee])}):function(L){return D(L,0,U)}):D}},pseudos:{not:Ft(function(w){var M=[],U=[],D=To(w.replace(Y,"$1"));return D[N]?Ft(function(L,j,J,re){for(var ee,_e=D(L,null,re,[]),le=L.length;le--;)(ee=_e[le])&&(L[le]=!(j[le]=ee))}):function(L,j,J){return M[0]=L,D(M,null,J,U),M[0]=null,!U.pop()}}),has:Ft(function(w){return function(M){return Oe(w,M).length>0}}),contains:Ft(function(w){return w=w.replace(tr,rr),function(M){return(M.textContent||m.text(M)).indexOf(w)>-1}}),lang:Ft(function(w){return $n.test(w||"")||Oe.error("unsupported lang: "+w),w=w.replace(tr,rr).toLowerCase(),function(M){var U;do if(U=A?M.lang:M.getAttribute("xml:lang")||M.getAttribute("lang"))return U=U.toLowerCase(),U===w||U.indexOf(w+"-")===0;while((M=M.parentNode)&&M.nodeType===1);return!1}}),target:function(w){var M=e.location&&e.location.hash;return M&&M.slice(1)===w.id},root:function(w){return w===E},focus:function(w){return w===vg()&&S.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:Pl(!1),disabled:Pl(!0),checked:function(w){return z(w,"input")&&!!w.checked||z(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!c.pseudos.empty(w)},header:function(w){return xr.test(w.nodeName)},input:function(w){return gr.test(w.nodeName)},button:function(w){return z(w,"input")&&w.type==="button"||z(w,"button")},text:function(w){var M;return z(w,"input")&&w.type==="text"&&((M=w.getAttribute("type"))==null||M.toLowerCase()==="text")},first:Fr(function(){return[0]}),last:Fr(function(w,M){return[M-1]}),eq:Fr(function(w,M,U){return[U<0?U+M:U]}),even:Fr(function(w,M){for(var U=0;U<M;U+=2)w.push(U);return w}),odd:Fr(function(w,M){for(var U=1;U<M;U+=2)w.push(U);return w}),lt:Fr(function(w,M,U){var D;for(U<0?D=U+M:U>M?D=M:D=U;--D>=0;)w.push(D);return w}),gt:Fr(function(w,M,U){for(var D=U<0?U+M:U;++D<M;)w.push(D);return w})}},c.pseudos.nth=c.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[u]=yg(u);for(u in{submit:!0,reset:!0})c.pseudos[u]=bg(u);function Al(){}Al.prototype=c.filters=c.pseudos,c.setFilters=new Al;function Wn(w,M){var U,D,L,j,J,re,ee,_e=we[w+" "];if(_e)return M?0:_e.slice(0);for(J=w,re=[],ee=c.preFilter;J;){(!U||(D=je.exec(J)))&&(D&&(J=J.slice(D[0].length)||J),re.push(L=[])),U=!1,(D=Hn.exec(J))&&(U=D.shift(),L.push({value:U,type:D[0].replace(Y," ")}),J=J.slice(U.length));for(j in c.filter)(D=$t[j].exec(J))&&(!ee[j]||(D=ee[j](D)))&&(U=D.shift(),L.push({value:U,type:j,matches:D}),J=J.slice(U.length));if(!U)break}return M?J.length:J?Oe.error(w):we(w,re).slice(0)}function Gi(w){for(var M=0,U=w.length,D="";M<U;M++)D+=w[M].value;return D}function zi(w,M,U){var D=M.dir,L=M.next,j=L||D,J=U&&j==="parentNode",re=H++;return M.first?function(ee,_e,le){for(;ee=ee[D];)if(ee.nodeType===1||J)return w(ee,_e,le);return!1}:function(ee,_e,le){var he,ve,ae=[k,re];if(le){for(;ee=ee[D];)if((ee.nodeType===1||J)&&w(ee,_e,le))return!0}else for(;ee=ee[D];)if(ee.nodeType===1||J)if(ve=ee[N]||(ee[N]={}),L&&z(ee,L))ee=ee[D]||ee;else{if((he=ve[j])&&he[0]===k&&he[1]===re)return ae[2]=he[2];if(ve[j]=ae,ae[2]=w(ee,_e,le))return!0}return!1}}function yo(w){return w.length>1?function(M,U,D){for(var L=w.length;L--;)if(!w[L](M,U,D))return!1;return!0}:w[0]}function Sg(w,M,U){for(var D=0,L=M.length;D<L;D++)Oe(w,M[D],U);return U}function Li(w,M,U,D,L){for(var j,J=[],re=0,ee=w.length,_e=M!=null;re<ee;re++)(j=w[re])&&(!U||U(j,D,L))&&(J.push(j),_e&&M.push(re));return J}function bo(w,M,U,D,L,j){return D&&!D[N]&&(D=bo(D)),L&&!L[N]&&(L=bo(L,j)),Ft(function(J,re,ee,_e){var le,he,ve,ae,Ne=[],mt=[],lt=re.length,At=J||Sg(M||"*",ee.nodeType?[ee]:ee,[]),Wt=w&&(J||!M)?Li(At,Ne,w,ee,_e):At;if(U?(ae=L||(J?w:lt||D)?[]:re,U(Wt,ae,ee,_e)):ae=Wt,D)for(le=Li(ae,mt),D(le,[],ee,_e),he=le.length;he--;)(ve=le[he])&&(ae[mt[he]]=!(Wt[mt[he]]=ve));if(J){if(L||w){if(L){for(le=[],he=ae.length;he--;)(ve=ae[he])&&le.push(Wt[he]=ve);L(null,ae=[],le,_e)}for(he=ae.length;he--;)(ve=ae[he])&&(le=L?l.call(J,ve):Ne[he])>-1&&(J[le]=!(re[le]=ve))}}else ae=Li(ae===re?ae.splice(lt,ae.length):ae),L?L(null,re,ae,_e):v.apply(re,ae)})}function So(w){for(var M,U,D,L=w.length,j=c.relative[w[0].type],J=j||c.relative[" "],re=j?1:0,ee=zi(function(he){return he===M},J,!0),_e=zi(function(he){return l.call(M,he)>-1},J,!0),le=[function(he,ve,ae){var Ne=!j&&(ae||ve!=d)||((M=ve).nodeType?ee(he,ve,ae):_e(he,ve,ae));return M=null,Ne}];re<L;re++)if(U=c.relative[w[re].type])le=[zi(yo(le),U)];else{if(U=c.filter[w[re].type].apply(null,w[re].matches),U[N]){for(D=++re;D<L&&!c.relative[w[D].type];D++);return bo(re>1&&yo(le),re>1&&Gi(w.slice(0,re-1).concat({value:w[re-2].type===" "?"*":""})).replace(Y,"$1"),U,re<D&&So(w.slice(re,D)),D<L&&So(w=w.slice(D)),D<L&&Gi(w))}le.push(U)}return yo(le)}function Tg(w,M){var U=M.length>0,D=w.length>0,L=function(j,J,re,ee,_e){var le,he,ve,ae=0,Ne="0",mt=j&&[],lt=[],At=d,Wt=j||D&&c.find.TAG("*",_e),on=k+=At==null?1:Math.random()||.1,ct=Wt.length;for(_e&&(d=J==S||J||_e);Ne!==ct&&(le=Wt[Ne])!=null;Ne++){if(D&&le){for(he=0,!J&&le.ownerDocument!=S&&(_r(le),re=!A);ve=w[he++];)if(ve(le,J||S,re)){v.call(ee,le);break}_e&&(k=on)}U&&((le=!ve&&le)&&ae--,j&&mt.push(le))}if(ae+=Ne,U&&Ne!==ae){for(he=0;ve=M[he++];)ve(mt,lt,J,re);if(j){if(ae>0)for(;Ne--;)mt[Ne]||lt[Ne]||(lt[Ne]=$.call(ee));lt=Li(lt)}v.apply(ee,lt),_e&&!j&&lt.length>0&&ae+M.length>1&&m.uniqueSort(ee)}return _e&&(k=on,d=At),mt};return U?Ft(L):L}function To(w,M){var U,D=[],L=[],j=pe[w+" "];if(!j){for(M||(M=Wn(w)),U=M.length;U--;)j=So(M[U]),j[N]?D.push(j):L.push(j);j=pe(w,Tg(L,D)),j.selector=w}return j}function El(w,M,U,D){var L,j,J,re,ee,_e=typeof w=="function"&&w,le=!D&&Wn(w=_e.selector||w);if(U=U||[],le.length===1){if(j=le[0]=le[0].slice(0),j.length>2&&(J=j[0]).type==="ID"&&M.nodeType===9&&A&&c.relative[j[1].type]){if(M=(c.find.ID(J.matches[0].replace(tr,rr),M)||[])[0],M)_e&&(M=M.parentNode);else return U;w=w.slice(j.shift().value.length)}for(L=$t.needsContext.test(w)?0:j.length;L--&&(J=j[L],!c.relative[re=J.type]);)if((ee=c.find[re])&&(D=ee(J.matches[0].replace(tr,rr),_o.test(j[0].type)&&vo(M.parentNode)||M))){if(j.splice(L,1),w=D.length&&Gi(j),!w)return v.apply(U,D),U;break}}return(_e||To(w,le))(D,M,!A,U,!M||_o.test(w)&&vo(M.parentNode)||M),U}b.sortStable=N.split("").sort(Qe).join("")===N,_r(),b.sortDetached=sn(function(w){return w.compareDocumentPosition(S.createElement("fieldset"))&1}),m.find=Oe,m.expr[":"]=m.expr.pseudos,m.unique=m.uniqueSort,Oe.compile=To,Oe.select=El,Oe.setDocument=_r,Oe.tokenize=Wn,Oe.escape=m.escapeSelector,Oe.getText=m.text,Oe.isXML=m.isXMLDoc,Oe.selectors=m.expr,Oe.support=m.support,Oe.uniqueSort=m.uniqueSort})();var K=function(u,c,d){for(var g=[],_=d!==void 0;(u=u[c])&&u.nodeType!==9;)if(u.nodeType===1){if(_&&m(u).is(d))break;g.push(u)}return g},oe=function(u,c){for(var d=[];u;u=u.nextSibling)u.nodeType===1&&u!==c&&d.push(u);return d},Pr=m.expr.match.needsContext,Ue=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Tt(u,c,d){return T(c)?m.grep(u,function(g,_){return!!c.call(g,_,g)!==d}):c.nodeType?m.grep(u,function(g){return g===c!==d}):typeof c!="string"?m.grep(u,function(g){return l.call(c,g)>-1!==d}):m.filter(c,u,d)}m.filter=function(u,c,d){var g=c[0];return d&&(u=":not("+u+")"),c.length===1&&g.nodeType===1?m.find.matchesSelector(g,u)?[g]:[]:m.find.matches(u,m.grep(c,function(_){return _.nodeType===1}))},m.fn.extend({find:function(u){var c,d,g=this.length,_=this;if(typeof u!="string")return this.pushStack(m(u).filter(function(){for(c=0;c<g;c++)if(m.contains(_[c],this))return!0}));for(d=this.pushStack([]),c=0;c<g;c++)m.find(u,_[c],d);return g>1?m.uniqueSort(d):d},filter:function(u){return this.pushStack(Tt(this,u||[],!1))},not:function(u){return this.pushStack(Tt(this,u||[],!0))},is:function(u){return!!Tt(this,typeof u=="string"&&Pr.test(u)?m(u):u||[],!1).length}});var pr,Ar=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Er=m.fn.init=function(u,c,d){var g,_;if(!u)return this;if(d=d||pr,typeof u=="string")if(u[0]==="<"&&u[u.length-1]===">"&&u.length>=3?g=[null,u,null]:g=Ar.exec(u),g&&(g[1]||!c))if(g[1]){if(c=c instanceof m?c[0]:c,m.merge(this,m.parseHTML(g[1],c&&c.nodeType?c.ownerDocument||c:P,!0)),Ue.test(g[1])&&m.isPlainObject(c))for(g in c)T(this[g])?this[g](c[g]):this.attr(g,c[g]);return this}else return _=P.getElementById(g[2]),_&&(this[0]=_,this.length=1),this;else return!c||c.jquery?(c||d).find(u):this.constructor(c).find(u);else{if(u.nodeType)return this[0]=u,this.length=1,this;if(T(u))return d.ready!==void 0?d.ready(u):u(m)}return m.makeArray(u,this)};Er.prototype=m.fn,pr=m(P);var Mi=/^(?:parents|prev(?:Until|All))/,Kr={children:!0,contents:!0,next:!0,prev:!0};m.fn.extend({has:function(u){var c=m(u,this),d=c.length;return this.filter(function(){for(var g=0;g<d;g++)if(m.contains(this,c[g]))return!0})},closest:function(u,c){var d,g=0,_=this.length,v=[],S=typeof u!="string"&&m(u);if(!Pr.test(u)){for(;g<_;g++)for(d=this[g];d&&d!==c;d=d.parentNode)if(d.nodeType<11&&(S?S.index(d)>-1:d.nodeType===1&&m.find.matchesSelector(d,u))){v.push(d);break}}return this.pushStack(v.length>1?m.uniqueSort(v):v)},index:function(u){return u?typeof u=="string"?l.call(m(u),this[0]):l.call(this,u.jquery?u[0]:u):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(u,c){return this.pushStack(m.uniqueSort(m.merge(this.get(),m(u,c))))},addBack:function(u){return this.add(u==null?this.prevObject:this.prevObject.filter(u))}});function mr(u,c){for(;(u=u[c])&&u.nodeType!==1;);return u}m.each({parent:function(u){var c=u.parentNode;return c&&c.nodeType!==11?c:null},parents:function(u){return K(u,"parentNode")},parentsUntil:function(u,c,d){return K(u,"parentNode",d)},next:function(u){return mr(u,"nextSibling")},prev:function(u){return mr(u,"previousSibling")},nextAll:function(u){return K(u,"nextSibling")},prevAll:function(u){return K(u,"previousSibling")},nextUntil:function(u,c,d){return K(u,"nextSibling",d)},prevUntil:function(u,c,d){return K(u,"previousSibling",d)},siblings:function(u){return oe((u.parentNode||{}).firstChild,u)},children:function(u){return oe(u.firstChild)},contents:function(u){return u.contentDocument!=null&&i(u.contentDocument)?u.contentDocument:(z(u,"template")&&(u=u.content||u),m.merge([],u.childNodes))}},function(u,c){m.fn[u]=function(d,g){var _=m.map(this,c,d);return u.slice(-5)!=="Until"&&(g=d),g&&typeof g=="string"&&(_=m.filter(g,_)),this.length>1&&(Kr[u]||m.uniqueSort(_),Mi.test(u)&&_.reverse()),this.pushStack(_)}});var vt=/[^\x20\t\r\n\f]+/g;function Bi(u){var c={};return m.each(u.match(vt)||[],function(d,g){c[g]=!0}),c}m.Callbacks=function(u){u=typeof u=="string"?Bi(u):m.extend({},u);var c,d,g,_,v=[],S=[],E=-1,A=function(){for(_=_||u.once,g=c=!0;S.length;E=-1)for(d=S.shift();++E<v.length;)v[E].apply(d[0],d[1])===!1&&u.stopOnFalse&&(E=v.length,d=!1);u.memory||(d=!1),c=!1,_&&(d?v=[]:v="")},I={add:function(){return v&&(d&&!c&&(E=v.length-1,S.push(d)),function G(N){m.each(N,function(k,H){T(H)?(!u.unique||!I.has(H))&&v.push(H):H&&H.length&&O(H)!=="string"&&G(H)})}(arguments),d&&!c&&A()),this},remove:function(){return m.each(arguments,function(G,N){for(var k;(k=m.inArray(N,v,k))>-1;)v.splice(k,1),k<=E&&E--}),this},has:function(G){return G?m.inArray(G,v)>-1:v.length>0},empty:function(){return v&&(v=[]),this},disable:function(){return _=S=[],v=d="",this},disabled:function(){return!v},lock:function(){return _=S=[],!d&&!c&&(v=d=""),this},locked:function(){return!!_},fireWith:function(G,N){return _||(N=N||[],N=[G,N.slice?N.slice():N],S.push(N),c||A()),this},fire:function(){return I.fireWith(this,arguments),this},fired:function(){return!!g}};return I};function Mt(u){return u}function Qt(u){throw u}function Zr(u,c,d,g){var _;try{u&&T(_=u.promise)?_.call(u).done(c).fail(d):u&&T(_=u.then)?_.call(u,c,d):c.apply(void 0,[u].slice(g))}catch(v){d.apply(void 0,[v])}}m.extend({Deferred:function(u){var c=[["notify","progress",m.Callbacks("memory"),m.Callbacks("memory"),2],["resolve","done",m.Callbacks("once memory"),m.Callbacks("once memory"),0,"resolved"],["reject","fail",m.Callbacks("once memory"),m.Callbacks("once memory"),1,"rejected"]],d="pending",g={state:function(){return d},always:function(){return _.done(arguments).fail(arguments),this},catch:function(v){return g.then(null,v)},pipe:function(){var v=arguments;return m.Deferred(function(S){m.each(c,function(E,A){var I=T(v[A[4]])&&v[A[4]];_[A[1]](function(){var G=I&&I.apply(this,arguments);G&&T(G.promise)?G.promise().progress(S.notify).done(S.resolve).fail(S.reject):S[A[0]+"With"](this,I?[G]:arguments)})}),v=null}).promise()},then:function(v,S,E){var A=0;function I(G,N,k,H){return function(){var ce=this,we=arguments,pe=function(){var Qe,Lt;if(!(G<A)){if(Qe=k.apply(ce,we),Qe===N.promise())throw new TypeError("Thenable self-resolution");Lt=Qe&&(typeof Qe=="object"||typeof Qe=="function")&&Qe.then,T(Lt)?H?Lt.call(Qe,I(A,N,Mt,H),I(A,N,Qt,H)):(A++,Lt.call(Qe,I(A,N,Mt,H),I(A,N,Qt,H),I(A,N,Mt,N.notifyWith))):(k!==Mt&&(ce=void 0,we=[Qe]),(H||N.resolveWith)(ce,we))}},ot=H?pe:function(){try{pe()}catch(Qe){m.Deferred.exceptionHook&&m.Deferred.exceptionHook(Qe,ot.error),G+1>=A&&(k!==Qt&&(ce=void 0,we=[Qe]),N.rejectWith(ce,we))}};G?ot():(m.Deferred.getErrorHook?ot.error=m.Deferred.getErrorHook():m.Deferred.getStackHook&&(ot.error=m.Deferred.getStackHook()),e.setTimeout(ot))}}return m.Deferred(function(G){c[0][3].add(I(0,G,T(E)?E:Mt,G.notifyWith)),c[1][3].add(I(0,G,T(v)?v:Mt)),c[2][3].add(I(0,G,T(S)?S:Qt))}).promise()},promise:function(v){return v!=null?m.extend(v,g):g}},_={};return m.each(c,function(v,S){var E=S[2],A=S[5];g[S[1]]=E.add,A&&E.add(function(){d=A},c[3-v][2].disable,c[3-v][3].disable,c[0][2].lock,c[0][3].lock),E.add(S[3].fire),_[S[0]]=function(){return _[S[0]+"With"](this===_?void 0:this,arguments),this},_[S[0]+"With"]=E.fireWith}),g.promise(_),u&&u.call(_,_),_},when:function(u){var c=arguments.length,d=c,g=Array(d),_=s.call(arguments),v=m.Deferred(),S=function(E){return function(A){g[E]=this,_[E]=arguments.length>1?s.call(arguments):A,--c||v.resolveWith(g,_)}};if(c<=1&&(Zr(u,v.done(S(d)).resolve,v.reject,!c),v.state()==="pending"||T(_[d]&&_[d].then)))return v.then();for(;d--;)Zr(_[d],S(d),v.reject);return v.promise()}});var Jt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;m.Deferred.exceptionHook=function(u,c){e.console&&e.console.warn&&u&&Jt.test(u.name)&&e.console.warn("jQuery.Deferred exception: "+u.message,u.stack,c)},m.readyException=function(u){e.setTimeout(function(){throw u})};var Bt=m.Deferred();m.fn.ready=function(u){return Bt.then(u).catch(function(c){m.readyException(c)}),this},m.extend({isReady:!1,readyWait:1,ready:function(u){(u===!0?--m.readyWait:m.isReady)||(m.isReady=!0,!(u!==!0&&--m.readyWait>0)&&Bt.resolveWith(P,[m]))}}),m.ready.then=Bt.then;function Ct(){P.removeEventListener("DOMContentLoaded",Ct),e.removeEventListener("load",Ct),m.ready()}P.readyState==="complete"||P.readyState!=="loading"&&!P.documentElement.doScroll?e.setTimeout(m.ready):(P.addEventListener("DOMContentLoaded",Ct),e.addEventListener("load",Ct));var st=function(u,c,d,g,_,v,S){var E=0,A=u.length,I=d==null;if(O(d)==="object"){_=!0;for(E in d)st(u,c,E,d[E],!0,v,S)}else if(g!==void 0&&(_=!0,T(g)||(S=!0),I&&(S?(c.call(u,g),c=null):(I=c,c=function(G,N,k){return I.call(m(G),k)})),c))for(;E<A;E++)c(u[E],d,S?g:g.call(u[E],E,c(u[E],d)));return _?u:I?c.call(u):A?c(u[0],d):v},eo=/^-ms-/,Ri=/-([a-z])/g;function to(u,c){return c.toUpperCase()}function Rt(u){return u.replace(eo,"ms-").replace(Ri,to)}var On=function(u){return u.nodeType===1||u.nodeType===9||!+u.nodeType};function Un(){this.expando=m.expando+Un.uid++}Un.uid=1,Un.prototype={cache:function(u){var c=u[this.expando];return c||(c={},On(u)&&(u.nodeType?u[this.expando]=c:Object.defineProperty(u,this.expando,{value:c,configurable:!0}))),c},set:function(u,c,d){var g,_=this.cache(u);if(typeof c=="string")_[Rt(c)]=d;else for(g in c)_[Rt(g)]=c[g];return _},get:function(u,c){return c===void 0?this.cache(u):u[this.expando]&&u[this.expando][Rt(c)]},access:function(u,c,d){return c===void 0||c&&typeof c=="string"&&d===void 0?this.get(u,c):(this.set(u,c,d),d!==void 0?d:c)},remove:function(u,c){var d,g=u[this.expando];if(g!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(Rt):(c=Rt(c),c=c in g?[c]:c.match(vt)||[]),d=c.length;d--;)delete g[c[d]];(c===void 0||m.isEmptyObject(g))&&(u.nodeType?u[this.expando]=void 0:delete u[this.expando])}},hasData:function(u){var c=u[this.expando];return c!==void 0&&!m.isEmptyObject(c)}};var se=new Un,ft=new Un,Im=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Fm=/[A-Z]/g;function Om(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:u===+u+""?+u:Im.test(u)?JSON.parse(u):u}function qu(u,c,d){var g;if(d===void 0&&u.nodeType===1)if(g="data-"+c.replace(Fm,"-$&").toLowerCase(),d=u.getAttribute(g),typeof d=="string"){try{d=Om(d)}catch{}ft.set(u,c,d)}else d=void 0;return d}m.extend({hasData:function(u){return ft.hasData(u)||se.hasData(u)},data:function(u,c,d){return ft.access(u,c,d)},removeData:function(u,c){ft.remove(u,c)},_data:function(u,c,d){return se.access(u,c,d)},_removeData:function(u,c){se.remove(u,c)}}),m.fn.extend({data:function(u,c){var d,g,_,v=this[0],S=v&&v.attributes;if(u===void 0){if(this.length&&(_=ft.get(v),v.nodeType===1&&!se.get(v,"hasDataAttrs"))){for(d=S.length;d--;)S[d]&&(g=S[d].name,g.indexOf("data-")===0&&(g=Rt(g.slice(5)),qu(v,g,_[g])));se.set(v,"hasDataAttrs",!0)}return _}return typeof u=="object"?this.each(function(){ft.set(this,u)}):st(this,function(E){var A;if(v&&E===void 0)return A=ft.get(v,u),A!==void 0||(A=qu(v,u),A!==void 0)?A:void 0;this.each(function(){ft.set(this,u,E)})},null,c,arguments.length>1,null,!0)},removeData:function(u){return this.each(function(){ft.remove(this,u)})}}),m.extend({queue:function(u,c,d){var g;if(u)return c=(c||"fx")+"queue",g=se.get(u,c),d&&(!g||Array.isArray(d)?g=se.access(u,c,m.makeArray(d)):g.push(d)),g||[]},dequeue:function(u,c){c=c||"fx";var d=m.queue(u,c),g=d.length,_=d.shift(),v=m._queueHooks(u,c),S=function(){m.dequeue(u,c)};_==="inprogress"&&(_=d.shift(),g--),_&&(c==="fx"&&d.unshift("inprogress"),delete v.stop,_.call(u,S,v)),!g&&v&&v.empty.fire()},_queueHooks:function(u,c){var d=c+"queueHooks";return se.get(u,d)||se.access(u,d,{empty:m.Callbacks("once memory").add(function(){se.remove(u,[c+"queue",d])})})}}),m.fn.extend({queue:function(u,c){var d=2;return typeof u!="string"&&(c=u,u="fx",d--),arguments.length<d?m.queue(this[0],u):c===void 0?this:this.each(function(){var g=m.queue(this,u,c);m._queueHooks(this,u),u==="fx"&&g[0]!=="inprogress"&&m.dequeue(this,u)})},dequeue:function(u){return this.each(function(){m.dequeue(this,u)})},clearQueue:function(u){return this.queue(u||"fx",[])},promise:function(u,c){var d,g=1,_=m.Deferred(),v=this,S=this.length,E=function(){--g||_.resolveWith(v,[v])};for(typeof u!="string"&&(c=u,u=void 0),u=u||"fx";S--;)d=se.get(v[S],u+"queueHooks"),d&&d.empty&&(g++,d.empty.add(E));return E(),_.promise(c)}});var Ku=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,kn=new RegExp("^(?:([+-])=|)("+Ku+")([a-z%]*)$","i"),er=["Top","Right","Bottom","Left"],Mr=P.documentElement,Qr=function(u){return m.contains(u.ownerDocument,u)},Um={composed:!0};Mr.getRootNode&&(Qr=function(u){return m.contains(u.ownerDocument,u)||u.getRootNode(Um)===u.ownerDocument});var Ii=function(u,c){return u=c||u,u.style.display==="none"||u.style.display===""&&Qr(u)&&m.css(u,"display")==="none"};function Zu(u,c,d,g){var _,v,S=20,E=g?function(){return g.cur()}:function(){return m.css(u,c,"")},A=E(),I=d&&d[3]||(m.cssNumber[c]?"":"px"),G=u.nodeType&&(m.cssNumber[c]||I!=="px"&&+A)&&kn.exec(m.css(u,c));if(G&&G[3]!==I){for(A=A/2,I=I||G[3],G=+A||1;S--;)m.style(u,c,G+I),(1-v)*(1-(v=E()/A||.5))<=0&&(S=0),G=G/v;G=G*2,m.style(u,c,G+I),d=d||[]}return d&&(G=+G||+A||0,_=d[1]?G+(d[1]+1)*d[2]:+d[2],g&&(g.unit=I,g.start=G,g.end=_)),_}var Qu={};function km(u){var c,d=u.ownerDocument,g=u.nodeName,_=Qu[g];return _||(c=d.body.appendChild(d.createElement(g)),_=m.css(c,"display"),c.parentNode.removeChild(c),_==="none"&&(_="block"),Qu[g]=_,_)}function Jr(u,c){for(var d,g,_=[],v=0,S=u.length;v<S;v++)g=u[v],g.style&&(d=g.style.display,c?(d==="none"&&(_[v]=se.get(g,"display")||null,_[v]||(g.style.display="")),g.style.display===""&&Ii(g)&&(_[v]=km(g))):d!=="none"&&(_[v]="none",se.set(g,"display",d)));for(v=0;v<S;v++)_[v]!=null&&(u[v].style.display=_[v]);return u}m.fn.extend({show:function(){return Jr(this,!0)},hide:function(){return Jr(this)},toggle:function(u){return typeof u=="boolean"?u?this.show():this.hide():this.each(function(){Ii(this)?m(this).show():m(this).hide()})}});var Dn=/^(?:checkbox|radio)$/i,Ju=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,el=/^$|^module$|\/(?:java|ecma)script/i;(function(){var u=P.createDocumentFragment(),c=u.appendChild(P.createElement("div")),d=P.createElement("input");d.setAttribute("type","radio"),d.setAttribute("checked","checked"),d.setAttribute("name","t"),c.appendChild(d),b.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",b.option=!!c.lastChild})();var wt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wt.tbody=wt.tfoot=wt.colgroup=wt.caption=wt.thead,wt.th=wt.td,b.option||(wt.optgroup=wt.option=[1,"<select multiple='multiple'>","</select>"]);function dt(u,c){var d;return typeof u.getElementsByTagName<"u"?d=u.getElementsByTagName(c||"*"):typeof u.querySelectorAll<"u"?d=u.querySelectorAll(c||"*"):d=[],c===void 0||c&&z(u,c)?m.merge([u],d):d}function ro(u,c){for(var d=0,g=u.length;d<g;d++)se.set(u[d],"globalEval",!c||se.get(c[d],"globalEval"))}var Dm=/<|&#?\w+;/;function tl(u,c,d,g,_){for(var v,S,E,A,I,G,N=c.createDocumentFragment(),k=[],H=0,ce=u.length;H<ce;H++)if(v=u[H],v||v===0)if(O(v)==="object")m.merge(k,v.nodeType?[v]:v);else if(!Dm.test(v))k.push(c.createTextNode(v));else{for(S=S||N.appendChild(c.createElement("div")),E=(Ju.exec(v)||["",""])[1].toLowerCase(),A=wt[E]||wt._default,S.innerHTML=A[1]+m.htmlPrefilter(v)+A[2],G=A[0];G--;)S=S.lastChild;m.merge(k,S.childNodes),S=N.firstChild,S.textContent=""}for(N.textContent="",H=0;v=k[H++];){if(g&&m.inArray(v,g)>-1){_&&_.push(v);continue}if(I=Qr(v),S=dt(N.appendChild(v),"script"),I&&ro(S),d)for(G=0;v=S[G++];)el.test(v.type||"")&&d.push(v)}return N}var rl=/^([^.]*)(?:\.(.+)|)/;function en(){return!0}function tn(){return!1}function no(u,c,d,g,_,v){var S,E;if(typeof c=="object"){typeof d!="string"&&(g=g||d,d=void 0);for(E in c)no(u,E,d,g,c[E],v);return u}if(g==null&&_==null?(_=d,g=d=void 0):_==null&&(typeof d=="string"?(_=g,g=void 0):(_=g,g=d,d=void 0)),_===!1)_=tn;else if(!_)return u;return v===1&&(S=_,_=function(A){return m().off(A),S.apply(this,arguments)},_.guid=S.guid||(S.guid=m.guid++)),u.each(function(){m.event.add(this,c,_,g,d)})}m.event={global:{},add:function(u,c,d,g,_){var v,S,E,A,I,G,N,k,H,ce,we,pe=se.get(u);if(On(u))for(d.handler&&(v=d,d=v.handler,_=v.selector),_&&m.find.matchesSelector(Mr,_),d.guid||(d.guid=m.guid++),(A=pe.events)||(A=pe.events=Object.create(null)),(S=pe.handle)||(S=pe.handle=function(ot){return typeof m<"u"&&m.event.triggered!==ot.type?m.event.dispatch.apply(u,arguments):void 0}),c=(c||"").match(vt)||[""],I=c.length;I--;)E=rl.exec(c[I])||[],H=we=E[1],ce=(E[2]||"").split(".").sort(),H&&(N=m.event.special[H]||{},H=(_?N.delegateType:N.bindType)||H,N=m.event.special[H]||{},G=m.extend({type:H,origType:we,data:g,handler:d,guid:d.guid,selector:_,needsContext:_&&m.expr.match.needsContext.test(_),namespace:ce.join(".")},v),(k=A[H])||(k=A[H]=[],k.delegateCount=0,(!N.setup||N.setup.call(u,g,ce,S)===!1)&&u.addEventListener&&u.addEventListener(H,S)),N.add&&(N.add.call(u,G),G.handler.guid||(G.handler.guid=d.guid)),_?k.splice(k.delegateCount++,0,G):k.push(G),m.event.global[H]=!0)},remove:function(u,c,d,g,_){var v,S,E,A,I,G,N,k,H,ce,we,pe=se.hasData(u)&&se.get(u);if(!(!pe||!(A=pe.events))){for(c=(c||"").match(vt)||[""],I=c.length;I--;){if(E=rl.exec(c[I])||[],H=we=E[1],ce=(E[2]||"").split(".").sort(),!H){for(H in A)m.event.remove(u,H+c[I],d,g,!0);continue}for(N=m.event.special[H]||{},H=(g?N.delegateType:N.bindType)||H,k=A[H]||[],E=E[2]&&new RegExp("(^|\\.)"+ce.join("\\.(?:.*\\.|)")+"(\\.|$)"),S=v=k.length;v--;)G=k[v],(_||we===G.origType)&&(!d||d.guid===G.guid)&&(!E||E.test(G.namespace))&&(!g||g===G.selector||g==="**"&&G.selector)&&(k.splice(v,1),G.selector&&k.delegateCount--,N.remove&&N.remove.call(u,G));S&&!k.length&&((!N.teardown||N.teardown.call(u,ce,pe.handle)===!1)&&m.removeEvent(u,H,pe.handle),delete A[H])}m.isEmptyObject(A)&&se.remove(u,"handle events")}},dispatch:function(u){var c,d,g,_,v,S,E=new Array(arguments.length),A=m.event.fix(u),I=(se.get(this,"events")||Object.create(null))[A.type]||[],G=m.event.special[A.type]||{};for(E[0]=A,c=1;c<arguments.length;c++)E[c]=arguments[c];if(A.delegateTarget=this,!(G.preDispatch&&G.preDispatch.call(this,A)===!1)){for(S=m.event.handlers.call(this,A,I),c=0;(_=S[c++])&&!A.isPropagationStopped();)for(A.currentTarget=_.elem,d=0;(v=_.handlers[d++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||v.namespace===!1||A.rnamespace.test(v.namespace))&&(A.handleObj=v,A.data=v.data,g=((m.event.special[v.origType]||{}).handle||v.handler).apply(_.elem,E),g!==void 0&&(A.result=g)===!1&&(A.preventDefault(),A.stopPropagation()));return G.postDispatch&&G.postDispatch.call(this,A),A.result}},handlers:function(u,c){var d,g,_,v,S,E=[],A=c.delegateCount,I=u.target;if(A&&I.nodeType&&!(u.type==="click"&&u.button>=1)){for(;I!==this;I=I.parentNode||this)if(I.nodeType===1&&!(u.type==="click"&&I.disabled===!0)){for(v=[],S={},d=0;d<A;d++)g=c[d],_=g.selector+" ",S[_]===void 0&&(S[_]=g.needsContext?m(_,this).index(I)>-1:m.find(_,this,null,[I]).length),S[_]&&v.push(g);v.length&&E.push({elem:I,handlers:v})}}return I=this,A<c.length&&E.push({elem:I,handlers:c.slice(A)}),E},addProp:function(u,c){Object.defineProperty(m.Event.prototype,u,{enumerable:!0,configurable:!0,get:T(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[u]},set:function(d){Object.defineProperty(this,u,{enumerable:!0,configurable:!0,writable:!0,value:d})}})},fix:function(u){return u[m.expando]?u:new m.Event(u)},special:{load:{noBubble:!0},click:{setup:function(u){var c=this||u;return Dn.test(c.type)&&c.click&&z(c,"input")&&Fi(c,"click",!0),!1},trigger:function(u){var c=this||u;return Dn.test(c.type)&&c.click&&z(c,"input")&&Fi(c,"click"),!0},_default:function(u){var c=u.target;return Dn.test(c.type)&&c.click&&z(c,"input")&&se.get(c,"click")||z(c,"a")}},beforeunload:{postDispatch:function(u){u.result!==void 0&&u.originalEvent&&(u.originalEvent.returnValue=u.result)}}}};function Fi(u,c,d){if(!d){se.get(u,c)===void 0&&m.event.add(u,c,en);return}se.set(u,c,!1),m.event.add(u,c,{namespace:!1,handler:function(g){var _,v=se.get(this,c);if(g.isTrigger&1&&this[c]){if(v)(m.event.special[c]||{}).delegateType&&g.stopPropagation();else if(v=s.call(arguments),se.set(this,c,v),this[c](),_=se.get(this,c),se.set(this,c,!1),v!==_)return g.stopImmediatePropagation(),g.preventDefault(),_}else v&&(se.set(this,c,m.event.trigger(v[0],v.slice(1),this)),g.stopPropagation(),g.isImmediatePropagationStopped=en)}})}m.removeEvent=function(u,c,d){u.removeEventListener&&u.removeEventListener(c,d)},m.Event=function(u,c){if(!(this instanceof m.Event))return new m.Event(u,c);u&&u.type?(this.originalEvent=u,this.type=u.type,this.isDefaultPrevented=u.defaultPrevented||u.defaultPrevented===void 0&&u.returnValue===!1?en:tn,this.target=u.target&&u.target.nodeType===3?u.target.parentNode:u.target,this.currentTarget=u.currentTarget,this.relatedTarget=u.relatedTarget):this.type=u,c&&m.extend(this,c),this.timeStamp=u&&u.timeStamp||Date.now(),this[m.expando]=!0},m.Event.prototype={constructor:m.Event,isDefaultPrevented:tn,isPropagationStopped:tn,isImmediatePropagationStopped:tn,isSimulated:!1,preventDefault:function(){var u=this.originalEvent;this.isDefaultPrevented=en,u&&!this.isSimulated&&u.preventDefault()},stopPropagation:function(){var u=this.originalEvent;this.isPropagationStopped=en,u&&!this.isSimulated&&u.stopPropagation()},stopImmediatePropagation:function(){var u=this.originalEvent;this.isImmediatePropagationStopped=en,u&&!this.isSimulated&&u.stopImmediatePropagation(),this.stopPropagation()}},m.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},m.event.addProp),m.each({focus:"focusin",blur:"focusout"},function(u,c){function d(g){if(P.documentMode){var _=se.get(this,"handle"),v=m.event.fix(g);v.type=g.type==="focusin"?"focus":"blur",v.isSimulated=!0,_(g),v.target===v.currentTarget&&_(v)}else m.event.simulate(c,g.target,m.event.fix(g))}m.event.special[u]={setup:function(){var g;if(Fi(this,u,!0),P.documentMode)g=se.get(this,c),g||this.addEventListener(c,d),se.set(this,c,(g||0)+1);else return!1},trigger:function(){return Fi(this,u),!0},teardown:function(){var g;if(P.documentMode)g=se.get(this,c)-1,g?se.set(this,c,g):(this.removeEventListener(c,d),se.remove(this,c));else return!1},_default:function(g){return se.get(g.target,u)},delegateType:c},m.event.special[c]={setup:function(){var g=this.ownerDocument||this.document||this,_=P.documentMode?this:g,v=se.get(_,c);v||(P.documentMode?this.addEventListener(c,d):g.addEventListener(u,d,!0)),se.set(_,c,(v||0)+1)},teardown:function(){var g=this.ownerDocument||this.document||this,_=P.documentMode?this:g,v=se.get(_,c)-1;v?se.set(_,c,v):(P.documentMode?this.removeEventListener(c,d):g.removeEventListener(u,d,!0),se.remove(_,c))}}}),m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(u,c){m.event.special[u]={delegateType:c,bindType:c,handle:function(d){var g,_=this,v=d.relatedTarget,S=d.handleObj;return(!v||v!==_&&!m.contains(_,v))&&(d.type=S.origType,g=S.handler.apply(this,arguments),d.type=c),g}}}),m.fn.extend({on:function(u,c,d,g){return no(this,u,c,d,g)},one:function(u,c,d,g){return no(this,u,c,d,g,1)},off:function(u,c,d){var g,_;if(u&&u.preventDefault&&u.handleObj)return g=u.handleObj,m(u.delegateTarget).off(g.namespace?g.origType+"."+g.namespace:g.origType,g.selector,g.handler),this;if(typeof u=="object"){for(_ in u)this.off(_,c,u[_]);return this}return(c===!1||typeof c=="function")&&(d=c,c=void 0),d===!1&&(d=tn),this.each(function(){m.event.remove(this,u,d,c)})}});var Gm=/<script|<style|<link/i,zm=/checked\s*(?:[^=]|=\s*.checked.)/i,Lm=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function nl(u,c){return z(u,"table")&&z(c.nodeType!==11?c:c.firstChild,"tr")&&m(u).children("tbody")[0]||u}function Nm(u){return u.type=(u.getAttribute("type")!==null)+"/"+u.type,u}function Hm(u){return(u.type||"").slice(0,5)==="true/"?u.type=u.type.slice(5):u.removeAttribute("type"),u}function il(u,c){var d,g,_,v,S,E,A;if(c.nodeType===1){if(se.hasData(u)&&(v=se.get(u),A=v.events,A)){se.remove(c,"handle events");for(_ in A)for(d=0,g=A[_].length;d<g;d++)m.event.add(c,_,A[_][d])}ft.hasData(u)&&(S=ft.access(u),E=m.extend({},S),ft.set(c,E))}}function $m(u,c){var d=c.nodeName.toLowerCase();d==="input"&&Dn.test(u.type)?c.checked=u.checked:(d==="input"||d==="textarea")&&(c.defaultValue=u.defaultValue)}function rn(u,c,d,g){c=o(c);var _,v,S,E,A,I,G=0,N=u.length,k=N-1,H=c[0],ce=T(H);if(ce||N>1&&typeof H=="string"&&!b.checkClone&&zm.test(H))return u.each(function(we){var pe=u.eq(we);ce&&(c[0]=H.call(this,we,pe.html())),rn(pe,c,d,g)});if(N&&(_=tl(c,u[0].ownerDocument,!1,u,g),v=_.firstChild,_.childNodes.length===1&&(_=v),v||g)){for(S=m.map(dt(_,"script"),Nm),E=S.length;G<N;G++)A=_,G!==k&&(A=m.clone(A,!0,!0),E&&m.merge(S,dt(A,"script"))),d.call(u[G],A,G);if(E)for(I=S[S.length-1].ownerDocument,m.map(S,Hm),G=0;G<E;G++)A=S[G],el.test(A.type||"")&&!se.access(A,"globalEval")&&m.contains(I,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?m._evalUrl&&!A.noModule&&m._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},I):B(A.textContent.replace(Lm,""),A,I))}return u}function sl(u,c,d){for(var g,_=c?m.filter(c,u):u,v=0;(g=_[v])!=null;v++)!d&&g.nodeType===1&&m.cleanData(dt(g)),g.parentNode&&(d&&Qr(g)&&ro(dt(g,"script")),g.parentNode.removeChild(g));return u}m.extend({htmlPrefilter:function(u){return u},clone:function(u,c,d){var g,_,v,S,E=u.cloneNode(!0),A=Qr(u);if(!b.noCloneChecked&&(u.nodeType===1||u.nodeType===11)&&!m.isXMLDoc(u))for(S=dt(E),v=dt(u),g=0,_=v.length;g<_;g++)$m(v[g],S[g]);if(c)if(d)for(v=v||dt(u),S=S||dt(E),g=0,_=v.length;g<_;g++)il(v[g],S[g]);else il(u,E);return S=dt(E,"script"),S.length>0&&ro(S,!A&&dt(u,"script")),E},cleanData:function(u){for(var c,d,g,_=m.event.special,v=0;(d=u[v])!==void 0;v++)if(On(d)){if(c=d[se.expando]){if(c.events)for(g in c.events)_[g]?m.event.remove(d,g):m.removeEvent(d,g,c.handle);d[se.expando]=void 0}d[ft.expando]&&(d[ft.expando]=void 0)}}}),m.fn.extend({detach:function(u){return sl(this,u,!0)},remove:function(u){return sl(this,u)},text:function(u){return st(this,function(c){return c===void 0?m.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,u,arguments.length)},append:function(){return rn(this,arguments,function(u){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=nl(this,u);c.appendChild(u)}})},prepend:function(){return rn(this,arguments,function(u){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=nl(this,u);c.insertBefore(u,c.firstChild)}})},before:function(){return rn(this,arguments,function(u){this.parentNode&&this.parentNode.insertBefore(u,this)})},after:function(){return rn(this,arguments,function(u){this.parentNode&&this.parentNode.insertBefore(u,this.nextSibling)})},empty:function(){for(var u,c=0;(u=this[c])!=null;c++)u.nodeType===1&&(m.cleanData(dt(u,!1)),u.textContent="");return this},clone:function(u,c){return u=u??!1,c=c??u,this.map(function(){return m.clone(this,u,c)})},html:function(u){return st(this,function(c){var d=this[0]||{},g=0,_=this.length;if(c===void 0&&d.nodeType===1)return d.innerHTML;if(typeof c=="string"&&!Gm.test(c)&&!wt[(Ju.exec(c)||["",""])[1].toLowerCase()]){c=m.htmlPrefilter(c);try{for(;g<_;g++)d=this[g]||{},d.nodeType===1&&(m.cleanData(dt(d,!1)),d.innerHTML=c);d=0}catch{}}d&&this.empty().append(c)},null,u,arguments.length)},replaceWith:function(){var u=[];return rn(this,arguments,function(c){var d=this.parentNode;m.inArray(this,u)<0&&(m.cleanData(dt(this)),d&&d.replaceChild(c,this))},u)}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(u,c){m.fn[u]=function(d){for(var g,_=[],v=m(d),S=v.length-1,E=0;E<=S;E++)g=E===S?this:this.clone(!0),m(v[E])[c](g),a.apply(_,g.get());return this.pushStack(_)}});var io=new RegExp("^("+Ku+")(?!px)[a-z%]+$","i"),so=/^--/,Oi=function(u){var c=u.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(u)},ol=function(u,c,d){var g,_,v={};for(_ in c)v[_]=u.style[_],u.style[_]=c[_];g=d.call(u);for(_ in c)u.style[_]=v[_];return g},Wm=new RegExp(er.join("|"),"i");(function(){function u(){if(I){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",I.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Mr.appendChild(A).appendChild(I);var G=e.getComputedStyle(I);d=G.top!=="1%",E=c(G.marginLeft)===12,I.style.right="60%",v=c(G.right)===36,g=c(G.width)===36,I.style.position="absolute",_=c(I.offsetWidth/3)===12,Mr.removeChild(A),I=null}}function c(G){return Math.round(parseFloat(G))}var d,g,_,v,S,E,A=P.createElement("div"),I=P.createElement("div");I.style&&(I.style.backgroundClip="content-box",I.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=I.style.backgroundClip==="content-box",m.extend(b,{boxSizingReliable:function(){return u(),g},pixelBoxStyles:function(){return u(),v},pixelPosition:function(){return u(),d},reliableMarginLeft:function(){return u(),E},scrollboxSize:function(){return u(),_},reliableTrDimensions:function(){var G,N,k,H;return S==null&&(G=P.createElement("table"),N=P.createElement("tr"),k=P.createElement("div"),G.style.cssText="position:absolute;left:-11111px;border-collapse:separate",N.style.cssText="box-sizing:content-box;border:1px solid",N.style.height="1px",k.style.height="9px",k.style.display="block",Mr.appendChild(G).appendChild(N).appendChild(k),H=e.getComputedStyle(N),S=parseInt(H.height,10)+parseInt(H.borderTopWidth,10)+parseInt(H.borderBottomWidth,10)===N.offsetHeight,Mr.removeChild(G)),S}}))})();function Gn(u,c,d){var g,_,v,S,E=so.test(c),A=u.style;return d=d||Oi(u),d&&(S=d.getPropertyValue(c)||d[c],E&&S&&(S=S.replace(Y,"$1")||void 0),S===""&&!Qr(u)&&(S=m.style(u,c)),!b.pixelBoxStyles()&&io.test(S)&&Wm.test(c)&&(g=A.width,_=A.minWidth,v=A.maxWidth,A.minWidth=A.maxWidth=A.width=S,S=d.width,A.width=g,A.minWidth=_,A.maxWidth=v)),S!==void 0?S+"":S}function al(u,c){return{get:function(){if(u()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var ul=["Webkit","Moz","ms"],ll=P.createElement("div").style,cl={};function Vm(u){for(var c=u[0].toUpperCase()+u.slice(1),d=ul.length;d--;)if(u=ul[d]+c,u in ll)return u}function oo(u){var c=m.cssProps[u]||cl[u];return c||(u in ll?u:cl[u]=Vm(u)||u)}var jm=/^(none|table(?!-c[ea]).+)/,Xm={position:"absolute",visibility:"hidden",display:"block"},hl={letterSpacing:"0",fontWeight:"400"};function fl(u,c,d){var g=kn.exec(c);return g?Math.max(0,g[2]-(d||0))+(g[3]||"px"):c}function ao(u,c,d,g,_,v){var S=c==="width"?1:0,E=0,A=0,I=0;if(d===(g?"border":"content"))return 0;for(;S<4;S+=2)d==="margin"&&(I+=m.css(u,d+er[S],!0,_)),g?(d==="content"&&(A-=m.css(u,"padding"+er[S],!0,_)),d!=="margin"&&(A-=m.css(u,"border"+er[S]+"Width",!0,_))):(A+=m.css(u,"padding"+er[S],!0,_),d!=="padding"?A+=m.css(u,"border"+er[S]+"Width",!0,_):E+=m.css(u,"border"+er[S]+"Width",!0,_));return!g&&v>=0&&(A+=Math.max(0,Math.ceil(u["offset"+c[0].toUpperCase()+c.slice(1)]-v-A-E-.5))||0),A+I}function dl(u,c,d){var g=Oi(u),_=!b.boxSizingReliable()||d,v=_&&m.css(u,"boxSizing",!1,g)==="border-box",S=v,E=Gn(u,c,g),A="offset"+c[0].toUpperCase()+c.slice(1);if(io.test(E)){if(!d)return E;E="auto"}return(!b.boxSizingReliable()&&v||!b.reliableTrDimensions()&&z(u,"tr")||E==="auto"||!parseFloat(E)&&m.css(u,"display",!1,g)==="inline")&&u.getClientRects().length&&(v=m.css(u,"boxSizing",!1,g)==="border-box",S=A in u,S&&(E=u[A])),E=parseFloat(E)||0,E+ao(u,c,d||(v?"border":"content"),S,g,E)+"px"}m.extend({cssHooks:{opacity:{get:function(u,c){if(c){var d=Gn(u,"opacity");return d===""?"1":d}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(u,c,d,g){if(!(!u||u.nodeType===3||u.nodeType===8||!u.style)){var _,v,S,E=Rt(c),A=so.test(c),I=u.style;if(A||(c=oo(E)),S=m.cssHooks[c]||m.cssHooks[E],d!==void 0){if(v=typeof d,v==="string"&&(_=kn.exec(d))&&_[1]&&(d=Zu(u,c,_),v="number"),d==null||d!==d)return;v==="number"&&!A&&(d+=_&&_[3]||(m.cssNumber[E]?"":"px")),!b.clearCloneStyle&&d===""&&c.indexOf("background")===0&&(I[c]="inherit"),(!S||!("set"in S)||(d=S.set(u,d,g))!==void 0)&&(A?I.setProperty(c,d):I[c]=d)}else return S&&"get"in S&&(_=S.get(u,!1,g))!==void 0?_:I[c]}},css:function(u,c,d,g){var _,v,S,E=Rt(c),A=so.test(c);return A||(c=oo(E)),S=m.cssHooks[c]||m.cssHooks[E],S&&"get"in S&&(_=S.get(u,!0,d)),_===void 0&&(_=Gn(u,c,g)),_==="normal"&&c in hl&&(_=hl[c]),d===""||d?(v=parseFloat(_),d===!0||isFinite(v)?v||0:_):_}}),m.each(["height","width"],function(u,c){m.cssHooks[c]={get:function(d,g,_){if(g)return jm.test(m.css(d,"display"))&&(!d.getClientRects().length||!d.getBoundingClientRect().width)?ol(d,Xm,function(){return dl(d,c,_)}):dl(d,c,_)},set:function(d,g,_){var v,S=Oi(d),E=!b.scrollboxSize()&&S.position==="absolute",A=E||_,I=A&&m.css(d,"boxSizing",!1,S)==="border-box",G=_?ao(d,c,_,I,S):0;return I&&E&&(G-=Math.ceil(d["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(S[c])-ao(d,c,"border",!1,S)-.5)),G&&(v=kn.exec(g))&&(v[3]||"px")!=="px"&&(d.style[c]=g,g=m.css(d,c)),fl(d,g,G)}}}),m.cssHooks.marginLeft=al(b.reliableMarginLeft,function(u,c){if(c)return(parseFloat(Gn(u,"marginLeft"))||u.getBoundingClientRect().left-ol(u,{marginLeft:0},function(){return u.getBoundingClientRect().left}))+"px"}),m.each({margin:"",padding:"",border:"Width"},function(u,c){m.cssHooks[u+c]={expand:function(d){for(var g=0,_={},v=typeof d=="string"?d.split(" "):[d];g<4;g++)_[u+er[g]+c]=v[g]||v[g-2]||v[0];return _}},u!=="margin"&&(m.cssHooks[u+c].set=fl)}),m.fn.extend({css:function(u,c){return st(this,function(d,g,_){var v,S,E={},A=0;if(Array.isArray(g)){for(v=Oi(d),S=g.length;A<S;A++)E[g[A]]=m.css(d,g[A],!1,v);return E}return _!==void 0?m.style(d,g,_):m.css(d,g)},u,c,arguments.length>1)}});function pt(u,c,d,g,_){return new pt.prototype.init(u,c,d,g,_)}m.Tween=pt,pt.prototype={constructor:pt,init:function(u,c,d,g,_,v){this.elem=u,this.prop=d,this.easing=_||m.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=g,this.unit=v||(m.cssNumber[d]?"":"px")},cur:function(){var u=pt.propHooks[this.prop];return u&&u.get?u.get(this):pt.propHooks._default.get(this)},run:function(u){var c,d=pt.propHooks[this.prop];return this.options.duration?this.pos=c=m.easing[this.easing](u,this.options.duration*u,0,1,this.options.duration):this.pos=c=u,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):pt.propHooks._default.set(this),this}},pt.prototype.init.prototype=pt.prototype,pt.propHooks={_default:{get:function(u){var c;return u.elem.nodeType!==1||u.elem[u.prop]!=null&&u.elem.style[u.prop]==null?u.elem[u.prop]:(c=m.css(u.elem,u.prop,""),!c||c==="auto"?0:c)},set:function(u){m.fx.step[u.prop]?m.fx.step[u.prop](u):u.elem.nodeType===1&&(m.cssHooks[u.prop]||u.elem.style[oo(u.prop)]!=null)?m.style(u.elem,u.prop,u.now+u.unit):u.elem[u.prop]=u.now}}},pt.propHooks.scrollTop=pt.propHooks.scrollLeft={set:function(u){u.elem.nodeType&&u.elem.parentNode&&(u.elem[u.prop]=u.now)}},m.easing={linear:function(u){return u},swing:function(u){return .5-Math.cos(u*Math.PI)/2},_default:"swing"},m.fx=pt.prototype.init,m.fx.step={};var nn,Ui,Ym=/^(?:toggle|show|hide)$/,qm=/queueHooks$/;function uo(){Ui&&(P.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(uo):e.setTimeout(uo,m.fx.interval),m.fx.tick())}function pl(){return e.setTimeout(function(){nn=void 0}),nn=Date.now()}function ki(u,c){var d,g=0,_={height:u};for(c=c?1:0;g<4;g+=2-c)d=er[g],_["margin"+d]=_["padding"+d]=u;return c&&(_.opacity=_.width=u),_}function ml(u,c,d){for(var g,_=(It.tweeners[c]||[]).concat(It.tweeners["*"]),v=0,S=_.length;v<S;v++)if(g=_[v].call(d,c,u))return g}function Km(u,c,d){var g,_,v,S,E,A,I,G,N="width"in c||"height"in c,k=this,H={},ce=u.style,we=u.nodeType&&Ii(u),pe=se.get(u,"fxshow");d.queue||(S=m._queueHooks(u,"fx"),S.unqueued==null&&(S.unqueued=0,E=S.empty.fire,S.empty.fire=function(){S.unqueued||E()}),S.unqueued++,k.always(function(){k.always(function(){S.unqueued--,m.queue(u,"fx").length||S.empty.fire()})}));for(g in c)if(_=c[g],Ym.test(_)){if(delete c[g],v=v||_==="toggle",_===(we?"hide":"show"))if(_==="show"&&pe&&pe[g]!==void 0)we=!0;else continue;H[g]=pe&&pe[g]||m.style(u,g)}if(A=!m.isEmptyObject(c),!(!A&&m.isEmptyObject(H))){N&&u.nodeType===1&&(d.overflow=[ce.overflow,ce.overflowX,ce.overflowY],I=pe&&pe.display,I==null&&(I=se.get(u,"display")),G=m.css(u,"display"),G==="none"&&(I?G=I:(Jr([u],!0),I=u.style.display||I,G=m.css(u,"display"),Jr([u]))),(G==="inline"||G==="inline-block"&&I!=null)&&m.css(u,"float")==="none"&&(A||(k.done(function(){ce.display=I}),I==null&&(G=ce.display,I=G==="none"?"":G)),ce.display="inline-block")),d.overflow&&(ce.overflow="hidden",k.always(function(){ce.overflow=d.overflow[0],ce.overflowX=d.overflow[1],ce.overflowY=d.overflow[2]})),A=!1;for(g in H)A||(pe?"hidden"in pe&&(we=pe.hidden):pe=se.access(u,"fxshow",{display:I}),v&&(pe.hidden=!we),we&&Jr([u],!0),k.done(function(){we||Jr([u]),se.remove(u,"fxshow");for(g in H)m.style(u,g,H[g])})),A=ml(we?pe[g]:0,g,k),g in pe||(pe[g]=A.start,we&&(A.end=A.start,A.start=0))}}function Zm(u,c){var d,g,_,v,S;for(d in u)if(g=Rt(d),_=c[g],v=u[d],Array.isArray(v)&&(_=v[1],v=u[d]=v[0]),d!==g&&(u[g]=v,delete u[d]),S=m.cssHooks[g],S&&"expand"in S){v=S.expand(v),delete u[g];for(d in v)d in u||(u[d]=v[d],c[d]=_)}else c[g]=_}function It(u,c,d){var g,_,v=0,S=It.prefilters.length,E=m.Deferred().always(function(){delete A.elem}),A=function(){if(_)return!1;for(var N=nn||pl(),k=Math.max(0,I.startTime+I.duration-N),H=k/I.duration||0,ce=1-H,we=0,pe=I.tweens.length;we<pe;we++)I.tweens[we].run(ce);return E.notifyWith(u,[I,ce,k]),ce<1&&pe?k:(pe||E.notifyWith(u,[I,1,0]),E.resolveWith(u,[I]),!1)},I=E.promise({elem:u,props:m.extend({},c),opts:m.extend(!0,{specialEasing:{},easing:m.easing._default},d),originalProperties:c,originalOptions:d,startTime:nn||pl(),duration:d.duration,tweens:[],createTween:function(N,k){var H=m.Tween(u,I.opts,N,k,I.opts.specialEasing[N]||I.opts.easing);return I.tweens.push(H),H},stop:function(N){var k=0,H=N?I.tweens.length:0;if(_)return this;for(_=!0;k<H;k++)I.tweens[k].run(1);return N?(E.notifyWith(u,[I,1,0]),E.resolveWith(u,[I,N])):E.rejectWith(u,[I,N]),this}}),G=I.props;for(Zm(G,I.opts.specialEasing);v<S;v++)if(g=It.prefilters[v].call(I,u,G,I.opts),g)return T(g.stop)&&(m._queueHooks(I.elem,I.opts.queue).stop=g.stop.bind(g)),g;return m.map(G,ml,I),T(I.opts.start)&&I.opts.start.call(u,I),I.progress(I.opts.progress).done(I.opts.done,I.opts.complete).fail(I.opts.fail).always(I.opts.always),m.fx.timer(m.extend(A,{elem:u,anim:I,queue:I.opts.queue})),I}m.Animation=m.extend(It,{tweeners:{"*":[function(u,c){var d=this.createTween(u,c);return Zu(d.elem,u,kn.exec(c),d),d}]},tweener:function(u,c){T(u)?(c=u,u=["*"]):u=u.match(vt);for(var d,g=0,_=u.length;g<_;g++)d=u[g],It.tweeners[d]=It.tweeners[d]||[],It.tweeners[d].unshift(c)},prefilters:[Km],prefilter:function(u,c){c?It.prefilters.unshift(u):It.prefilters.push(u)}}),m.speed=function(u,c,d){var g=u&&typeof u=="object"?m.extend({},u):{complete:d||!d&&c||T(u)&&u,duration:u,easing:d&&c||c&&!T(c)&&c};return m.fx.off?g.duration=0:typeof g.duration!="number"&&(g.duration in m.fx.speeds?g.duration=m.fx.speeds[g.duration]:g.duration=m.fx.speeds._default),(g.queue==null||g.queue===!0)&&(g.queue="fx"),g.old=g.complete,g.complete=function(){T(g.old)&&g.old.call(this),g.queue&&m.dequeue(this,g.queue)},g},m.fn.extend({fadeTo:function(u,c,d,g){return this.filter(Ii).css("opacity",0).show().end().animate({opacity:c},u,d,g)},animate:function(u,c,d,g){var _=m.isEmptyObject(u),v=m.speed(c,d,g),S=function(){var E=It(this,m.extend({},u),v);(_||se.get(this,"finish"))&&E.stop(!0)};return S.finish=S,_||v.queue===!1?this.each(S):this.queue(v.queue,S)},stop:function(u,c,d){var g=function(_){var v=_.stop;delete _.stop,v(d)};return typeof u!="string"&&(d=c,c=u,u=void 0),c&&this.queue(u||"fx",[]),this.each(function(){var _=!0,v=u!=null&&u+"queueHooks",S=m.timers,E=se.get(this);if(v)E[v]&&E[v].stop&&g(E[v]);else for(v in E)E[v]&&E[v].stop&&qm.test(v)&&g(E[v]);for(v=S.length;v--;)S[v].elem===this&&(u==null||S[v].queue===u)&&(S[v].anim.stop(d),_=!1,S.splice(v,1));(_||!d)&&m.dequeue(this,u)})},finish:function(u){return u!==!1&&(u=u||"fx"),this.each(function(){var c,d=se.get(this),g=d[u+"queue"],_=d[u+"queueHooks"],v=m.timers,S=g?g.length:0;for(d.finish=!0,m.queue(this,u,[]),_&&_.stop&&_.stop.call(this,!0),c=v.length;c--;)v[c].elem===this&&v[c].queue===u&&(v[c].anim.stop(!0),v.splice(c,1));for(c=0;c<S;c++)g[c]&&g[c].finish&&g[c].finish.call(this);delete d.finish})}}),m.each(["toggle","show","hide"],function(u,c){var d=m.fn[c];m.fn[c]=function(g,_,v){return g==null||typeof g=="boolean"?d.apply(this,arguments):this.animate(ki(c,!0),g,_,v)}}),m.each({slideDown:ki("show"),slideUp:ki("hide"),slideToggle:ki("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(u,c){m.fn[u]=function(d,g,_){return this.animate(c,d,g,_)}}),m.timers=[],m.fx.tick=function(){var u,c=0,d=m.timers;for(nn=Date.now();c<d.length;c++)u=d[c],!u()&&d[c]===u&&d.splice(c--,1);d.length||m.fx.stop(),nn=void 0},m.fx.timer=function(u){m.timers.push(u),m.fx.start()},m.fx.interval=13,m.fx.start=function(){Ui||(Ui=!0,uo())},m.fx.stop=function(){Ui=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(u,c){return u=m.fx&&m.fx.speeds[u]||u,c=c||"fx",this.queue(c,function(d,g){var _=e.setTimeout(d,u);g.stop=function(){e.clearTimeout(_)}})},function(){var u=P.createElement("input"),c=P.createElement("select"),d=c.appendChild(P.createElement("option"));u.type="checkbox",b.checkOn=u.value!=="",b.optSelected=d.selected,u=P.createElement("input"),u.value="t",u.type="radio",b.radioValue=u.value==="t"}();var gl,zn=m.expr.attrHandle;m.fn.extend({attr:function(u,c){return st(this,m.attr,u,c,arguments.length>1)},removeAttr:function(u){return this.each(function(){m.removeAttr(this,u)})}}),m.extend({attr:function(u,c,d){var g,_,v=u.nodeType;if(!(v===3||v===8||v===2)){if(typeof u.getAttribute>"u")return m.prop(u,c,d);if((v!==1||!m.isXMLDoc(u))&&(_=m.attrHooks[c.toLowerCase()]||(m.expr.match.bool.test(c)?gl:void 0)),d!==void 0){if(d===null){m.removeAttr(u,c);return}return _&&"set"in _&&(g=_.set(u,d,c))!==void 0?g:(u.setAttribute(c,d+""),d)}return _&&"get"in _&&(g=_.get(u,c))!==null?g:(g=m.find.attr(u,c),g??void 0)}},attrHooks:{type:{set:function(u,c){if(!b.radioValue&&c==="radio"&&z(u,"input")){var d=u.value;return u.setAttribute("type",c),d&&(u.value=d),c}}}},removeAttr:function(u,c){var d,g=0,_=c&&c.match(vt);if(_&&u.nodeType===1)for(;d=_[g++];)u.removeAttribute(d)}}),gl={set:function(u,c,d){return c===!1?m.removeAttr(u,d):u.setAttribute(d,d),d}},m.each(m.expr.match.bool.source.match(/\w+/g),function(u,c){var d=zn[c]||m.find.attr;zn[c]=function(g,_,v){var S,E,A=_.toLowerCase();return v||(E=zn[A],zn[A]=S,S=d(g,_,v)!=null?A:null,zn[A]=E),S}});var Qm=/^(?:input|select|textarea|button)$/i,Jm=/^(?:a|area)$/i;m.fn.extend({prop:function(u,c){return st(this,m.prop,u,c,arguments.length>1)},removeProp:function(u){return this.each(function(){delete this[m.propFix[u]||u]})}}),m.extend({prop:function(u,c,d){var g,_,v=u.nodeType;if(!(v===3||v===8||v===2))return(v!==1||!m.isXMLDoc(u))&&(c=m.propFix[c]||c,_=m.propHooks[c]),d!==void 0?_&&"set"in _&&(g=_.set(u,d,c))!==void 0?g:u[c]=d:_&&"get"in _&&(g=_.get(u,c))!==null?g:u[c]},propHooks:{tabIndex:{get:function(u){var c=m.find.attr(u,"tabindex");return c?parseInt(c,10):Qm.test(u.nodeName)||Jm.test(u.nodeName)&&u.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(m.propHooks.selected={get:function(u){var c=u.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(u){var c=u.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this});function Br(u){var c=u.match(vt)||[];return c.join(" ")}function Rr(u){return u.getAttribute&&u.getAttribute("class")||""}function lo(u){return Array.isArray(u)?u:typeof u=="string"?u.match(vt)||[]:[]}m.fn.extend({addClass:function(u){var c,d,g,_,v,S;return T(u)?this.each(function(E){m(this).addClass(u.call(this,E,Rr(this)))}):(c=lo(u),c.length?this.each(function(){if(g=Rr(this),d=this.nodeType===1&&" "+Br(g)+" ",d){for(v=0;v<c.length;v++)_=c[v],d.indexOf(" "+_+" ")<0&&(d+=_+" ");S=Br(d),g!==S&&this.setAttribute("class",S)}}):this)},removeClass:function(u){var c,d,g,_,v,S;return T(u)?this.each(function(E){m(this).removeClass(u.call(this,E,Rr(this)))}):arguments.length?(c=lo(u),c.length?this.each(function(){if(g=Rr(this),d=this.nodeType===1&&" "+Br(g)+" ",d){for(v=0;v<c.length;v++)for(_=c[v];d.indexOf(" "+_+" ")>-1;)d=d.replace(" "+_+" "," ");S=Br(d),g!==S&&this.setAttribute("class",S)}}):this):this.attr("class","")},toggleClass:function(u,c){var d,g,_,v,S=typeof u,E=S==="string"||Array.isArray(u);return T(u)?this.each(function(A){m(this).toggleClass(u.call(this,A,Rr(this),c),c)}):typeof c=="boolean"&&E?c?this.addClass(u):this.removeClass(u):(d=lo(u),this.each(function(){if(E)for(v=m(this),_=0;_<d.length;_++)g=d[_],v.hasClass(g)?v.removeClass(g):v.addClass(g);else(u===void 0||S==="boolean")&&(g=Rr(this),g&&se.set(this,"__className__",g),this.setAttribute&&this.setAttribute("class",g||u===!1?"":se.get(this,"__className__")||""))}))},hasClass:function(u){var c,d,g=0;for(c=" "+u+" ";d=this[g++];)if(d.nodeType===1&&(" "+Br(Rr(d))+" ").indexOf(c)>-1)return!0;return!1}});var eg=/\r/g;m.fn.extend({val:function(u){var c,d,g,_=this[0];return arguments.length?(g=T(u),this.each(function(v){var S;this.nodeType===1&&(g?S=u.call(this,v,m(this).val()):S=u,S==null?S="":typeof S=="number"?S+="":Array.isArray(S)&&(S=m.map(S,function(E){return E==null?"":E+""})),c=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,S,"value")===void 0)&&(this.value=S))})):_?(c=m.valHooks[_.type]||m.valHooks[_.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(_,"value"))!==void 0?d:(d=_.value,typeof d=="string"?d.replace(eg,""):d??"")):void 0}}),m.extend({valHooks:{option:{get:function(u){var c=m.find.attr(u,"value");return c??Br(m.text(u))}},select:{get:function(u){var c,d,g,_=u.options,v=u.selectedIndex,S=u.type==="select-one",E=S?null:[],A=S?v+1:_.length;for(v<0?g=A:g=S?v:0;g<A;g++)if(d=_[g],(d.selected||g===v)&&!d.disabled&&(!d.parentNode.disabled||!z(d.parentNode,"optgroup"))){if(c=m(d).val(),S)return c;E.push(c)}return E},set:function(u,c){for(var d,g,_=u.options,v=m.makeArray(c),S=_.length;S--;)g=_[S],(g.selected=m.inArray(m.valHooks.option.get(g),v)>-1)&&(d=!0);return d||(u.selectedIndex=-1),v}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(u,c){if(Array.isArray(c))return u.checked=m.inArray(m(u).val(),c)>-1}},b.checkOn||(m.valHooks[this].get=function(u){return u.getAttribute("value")===null?"on":u.value})});var Ln=e.location,xl={guid:Date.now()},co=/\?/;m.parseXML=function(u){var c,d;if(!u||typeof u!="string")return null;try{c=new e.DOMParser().parseFromString(u,"text/xml")}catch{}return d=c&&c.getElementsByTagName("parsererror")[0],(!c||d)&&m.error("Invalid XML: "+(d?m.map(d.childNodes,function(g){return g.textContent}).join(`
`):u)),c};var _l=/^(?:focusinfocus|focusoutblur)$/,vl=function(u){u.stopPropagation()};m.extend(m.event,{trigger:function(u,c,d,g){var _,v,S,E,A,I,G,N,k=[d||P],H=p.call(u,"type")?u.type:u,ce=p.call(u,"namespace")?u.namespace.split("."):[];if(v=N=S=d=d||P,!(d.nodeType===3||d.nodeType===8)&&!_l.test(H+m.event.triggered)&&(H.indexOf(".")>-1&&(ce=H.split("."),H=ce.shift(),ce.sort()),A=H.indexOf(":")<0&&"on"+H,u=u[m.expando]?u:new m.Event(H,typeof u=="object"&&u),u.isTrigger=g?2:3,u.namespace=ce.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+ce.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=d),c=c==null?[u]:m.makeArray(c,[u]),G=m.event.special[H]||{},!(!g&&G.trigger&&G.trigger.apply(d,c)===!1))){if(!g&&!G.noBubble&&!C(d)){for(E=G.delegateType||H,_l.test(E+H)||(v=v.parentNode);v;v=v.parentNode)k.push(v),S=v;S===(d.ownerDocument||P)&&k.push(S.defaultView||S.parentWindow||e)}for(_=0;(v=k[_++])&&!u.isPropagationStopped();)N=v,u.type=_>1?E:G.bindType||H,I=(se.get(v,"events")||Object.create(null))[u.type]&&se.get(v,"handle"),I&&I.apply(v,c),I=A&&v[A],I&&I.apply&&On(v)&&(u.result=I.apply(v,c),u.result===!1&&u.preventDefault());return u.type=H,!g&&!u.isDefaultPrevented()&&(!G._default||G._default.apply(k.pop(),c)===!1)&&On(d)&&A&&T(d[H])&&!C(d)&&(S=d[A],S&&(d[A]=null),m.event.triggered=H,u.isPropagationStopped()&&N.addEventListener(H,vl),d[H](),u.isPropagationStopped()&&N.removeEventListener(H,vl),m.event.triggered=void 0,S&&(d[A]=S)),u.result}},simulate:function(u,c,d){var g=m.extend(new m.Event,d,{type:u,isSimulated:!0});m.event.trigger(g,null,c)}}),m.fn.extend({trigger:function(u,c){return this.each(function(){m.event.trigger(u,c,this)})},triggerHandler:function(u,c){var d=this[0];if(d)return m.event.trigger(u,c,d,!0)}});var tg=/\[\]$/,yl=/\r?\n/g,rg=/^(?:submit|button|image|reset|file)$/i,ng=/^(?:input|select|textarea|keygen)/i;function ho(u,c,d,g){var _;if(Array.isArray(c))m.each(c,function(v,S){d||tg.test(u)?g(u,S):ho(u+"["+(typeof S=="object"&&S!=null?v:"")+"]",S,d,g)});else if(!d&&O(c)==="object")for(_ in c)ho(u+"["+_+"]",c[_],d,g);else g(u,c)}m.param=function(u,c){var d,g=[],_=function(v,S){var E=T(S)?S():S;g[g.length]=encodeURIComponent(v)+"="+encodeURIComponent(E??"")};if(u==null)return"";if(Array.isArray(u)||u.jquery&&!m.isPlainObject(u))m.each(u,function(){_(this.name,this.value)});else for(d in u)ho(d,u[d],c,_);return g.join("&")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var u=m.prop(this,"elements");return u?m.makeArray(u):this}).filter(function(){var u=this.type;return this.name&&!m(this).is(":disabled")&&ng.test(this.nodeName)&&!rg.test(u)&&(this.checked||!Dn.test(u))}).map(function(u,c){var d=m(this).val();return d==null?null:Array.isArray(d)?m.map(d,function(g){return{name:c.name,value:g.replace(yl,`\r
`)}}):{name:c.name,value:d.replace(yl,`\r
`)}}).get()}});var ig=/%20/g,sg=/#.*$/,og=/([?&])_=[^&]*/,ag=/^(.*?):[ \t]*([^\r\n]*)$/mg,ug=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,lg=/^(?:GET|HEAD)$/,cg=/^\/\//,bl={},fo={},Sl="*/".concat("*"),po=P.createElement("a");po.href=Ln.href;function Tl(u){return function(c,d){typeof c!="string"&&(d=c,c="*");var g,_=0,v=c.toLowerCase().match(vt)||[];if(T(d))for(;g=v[_++];)g[0]==="+"?(g=g.slice(1)||"*",(u[g]=u[g]||[]).unshift(d)):(u[g]=u[g]||[]).push(d)}}function Cl(u,c,d,g){var _={},v=u===fo;function S(E){var A;return _[E]=!0,m.each(u[E]||[],function(I,G){var N=G(c,d,g);if(typeof N=="string"&&!v&&!_[N])return c.dataTypes.unshift(N),S(N),!1;if(v)return!(A=N)}),A}return S(c.dataTypes[0])||!_["*"]&&S("*")}function mo(u,c){var d,g,_=m.ajaxSettings.flatOptions||{};for(d in c)c[d]!==void 0&&((_[d]?u:g||(g={}))[d]=c[d]);return g&&m.extend(!0,u,g),u}function hg(u,c,d){for(var g,_,v,S,E=u.contents,A=u.dataTypes;A[0]==="*";)A.shift(),g===void 0&&(g=u.mimeType||c.getResponseHeader("Content-Type"));if(g){for(_ in E)if(E[_]&&E[_].test(g)){A.unshift(_);break}}if(A[0]in d)v=A[0];else{for(_ in d){if(!A[0]||u.converters[_+" "+A[0]]){v=_;break}S||(S=_)}v=v||S}if(v)return v!==A[0]&&A.unshift(v),d[v]}function fg(u,c,d,g){var _,v,S,E,A,I={},G=u.dataTypes.slice();if(G[1])for(S in u.converters)I[S.toLowerCase()]=u.converters[S];for(v=G.shift();v;)if(u.responseFields[v]&&(d[u.responseFields[v]]=c),!A&&g&&u.dataFilter&&(c=u.dataFilter(c,u.dataType)),A=v,v=G.shift(),v){if(v==="*")v=A;else if(A!=="*"&&A!==v){if(S=I[A+" "+v]||I["* "+v],!S){for(_ in I)if(E=_.split(" "),E[1]===v&&(S=I[A+" "+E[0]]||I["* "+E[0]],S)){S===!0?S=I[_]:I[_]!==!0&&(v=E[0],G.unshift(E[1]));break}}if(S!==!0)if(S&&u.throws)c=S(c);else try{c=S(c)}catch(N){return{state:"parsererror",error:S?N:"No conversion from "+A+" to "+v}}}}return{state:"success",data:c}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ln.href,type:"GET",isLocal:ug.test(Ln.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Sl,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(u,c){return c?mo(mo(u,m.ajaxSettings),c):mo(m.ajaxSettings,u)},ajaxPrefilter:Tl(bl),ajaxTransport:Tl(fo),ajax:function(u,c){typeof u=="object"&&(c=u,u=void 0),c=c||{};var d,g,_,v,S,E,A,I,G,N,k=m.ajaxSetup({},c),H=k.context||k,ce=k.context&&(H.nodeType||H.jquery)?m(H):m.event,we=m.Deferred(),pe=m.Callbacks("once memory"),ot=k.statusCode||{},Qe={},Lt={},Nt="canceled",Se={readyState:0,getResponseHeader:function(Pe){var je;if(A){if(!v)for(v={};je=ag.exec(_);)v[je[1].toLowerCase()+" "]=(v[je[1].toLowerCase()+" "]||[]).concat(je[2]);je=v[Pe.toLowerCase()+" "]}return je==null?null:je.join(", ")},getAllResponseHeaders:function(){return A?_:null},setRequestHeader:function(Pe,je){return A==null&&(Pe=Lt[Pe.toLowerCase()]=Lt[Pe.toLowerCase()]||Pe,Qe[Pe]=je),this},overrideMimeType:function(Pe){return A==null&&(k.mimeType=Pe),this},statusCode:function(Pe){var je;if(Pe)if(A)Se.always(Pe[Se.status]);else for(je in Pe)ot[je]=[ot[je],Pe[je]];return this},abort:function(Pe){var je=Pe||Nt;return d&&d.abort(je),Ir(0,je),this}};if(we.promise(Se),k.url=((u||k.url||Ln.href)+"").replace(cg,Ln.protocol+"//"),k.type=c.method||c.type||k.method||k.type,k.dataTypes=(k.dataType||"*").toLowerCase().match(vt)||[""],k.crossDomain==null){E=P.createElement("a");try{E.href=k.url,E.href=E.href,k.crossDomain=po.protocol+"//"+po.host!=E.protocol+"//"+E.host}catch{k.crossDomain=!0}}if(k.data&&k.processData&&typeof k.data!="string"&&(k.data=m.param(k.data,k.traditional)),Cl(bl,k,c,Se),A)return Se;I=m.event&&k.global,I&&m.active++===0&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!lg.test(k.type),g=k.url.replace(sg,""),k.hasContent?k.data&&k.processData&&(k.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(k.data=k.data.replace(ig,"+")):(N=k.url.slice(g.length),k.data&&(k.processData||typeof k.data=="string")&&(g+=(co.test(g)?"&":"?")+k.data,delete k.data),k.cache===!1&&(g=g.replace(og,"$1"),N=(co.test(g)?"&":"?")+"_="+xl.guid+++N),k.url=g+N),k.ifModified&&(m.lastModified[g]&&Se.setRequestHeader("If-Modified-Since",m.lastModified[g]),m.etag[g]&&Se.setRequestHeader("If-None-Match",m.etag[g])),(k.data&&k.hasContent&&k.contentType!==!1||c.contentType)&&Se.setRequestHeader("Content-Type",k.contentType),Se.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+(k.dataTypes[0]!=="*"?", "+Sl+"; q=0.01":""):k.accepts["*"]);for(G in k.headers)Se.setRequestHeader(G,k.headers[G]);if(k.beforeSend&&(k.beforeSend.call(H,Se,k)===!1||A))return Se.abort();if(Nt="abort",pe.add(k.complete),Se.done(k.success),Se.fail(k.error),d=Cl(fo,k,c,Se),!d)Ir(-1,"No Transport");else{if(Se.readyState=1,I&&ce.trigger("ajaxSend",[Se,k]),A)return Se;k.async&&k.timeout>0&&(S=e.setTimeout(function(){Se.abort("timeout")},k.timeout));try{A=!1,d.send(Qe,Ir)}catch(Pe){if(A)throw Pe;Ir(-1,Pe)}}function Ir(Pe,je,Hn,xo){var Ht,$n,$t,gr,xr,Pt=je;A||(A=!0,S&&e.clearTimeout(S),d=void 0,_=xo||"",Se.readyState=Pe>0?4:0,Ht=Pe>=200&&Pe<300||Pe===304,Hn&&(gr=hg(k,Se,Hn)),!Ht&&m.inArray("script",k.dataTypes)>-1&&m.inArray("json",k.dataTypes)<0&&(k.converters["text script"]=function(){}),gr=fg(k,gr,Se,Ht),Ht?(k.ifModified&&(xr=Se.getResponseHeader("Last-Modified"),xr&&(m.lastModified[g]=xr),xr=Se.getResponseHeader("etag"),xr&&(m.etag[g]=xr)),Pe===204||k.type==="HEAD"?Pt="nocontent":Pe===304?Pt="notmodified":(Pt=gr.state,$n=gr.data,$t=gr.error,Ht=!$t)):($t=Pt,(Pe||!Pt)&&(Pt="error",Pe<0&&(Pe=0))),Se.status=Pe,Se.statusText=(je||Pt)+"",Ht?we.resolveWith(H,[$n,Pt,Se]):we.rejectWith(H,[Se,Pt,$t]),Se.statusCode(ot),ot=void 0,I&&ce.trigger(Ht?"ajaxSuccess":"ajaxError",[Se,k,Ht?$n:$t]),pe.fireWith(H,[Se,Pt]),I&&(ce.trigger("ajaxComplete",[Se,k]),--m.active||m.event.trigger("ajaxStop")))}return Se},getJSON:function(u,c,d){return m.get(u,c,d,"json")},getScript:function(u,c){return m.get(u,void 0,c,"script")}}),m.each(["get","post"],function(u,c){m[c]=function(d,g,_,v){return T(g)&&(v=v||_,_=g,g=void 0),m.ajax(m.extend({url:d,type:c,dataType:v,data:g,success:_},m.isPlainObject(d)&&d))}}),m.ajaxPrefilter(function(u){var c;for(c in u.headers)c.toLowerCase()==="content-type"&&(u.contentType=u.headers[c]||"")}),m._evalUrl=function(u,c,d){return m.ajax({url:u,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(g){m.globalEval(g,c,d)}})},m.fn.extend({wrapAll:function(u){var c;return this[0]&&(T(u)&&(u=u.call(this[0])),c=m(u,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var d=this;d.firstElementChild;)d=d.firstElementChild;return d}).append(this)),this},wrapInner:function(u){return T(u)?this.each(function(c){m(this).wrapInner(u.call(this,c))}):this.each(function(){var c=m(this),d=c.contents();d.length?d.wrapAll(u):c.append(u)})},wrap:function(u){var c=T(u);return this.each(function(d){m(this).wrapAll(c?u.call(this,d):u)})},unwrap:function(u){return this.parent(u).not("body").each(function(){m(this).replaceWith(this.childNodes)}),this}}),m.expr.pseudos.hidden=function(u){return!m.expr.pseudos.visible(u)},m.expr.pseudos.visible=function(u){return!!(u.offsetWidth||u.offsetHeight||u.getClientRects().length)},m.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var dg={0:200,1223:204},Nn=m.ajaxSettings.xhr();b.cors=!!Nn&&"withCredentials"in Nn,b.ajax=Nn=!!Nn,m.ajaxTransport(function(u){var c,d;if(b.cors||Nn&&!u.crossDomain)return{send:function(g,_){var v,S=u.xhr();if(S.open(u.type,u.url,u.async,u.username,u.password),u.xhrFields)for(v in u.xhrFields)S[v]=u.xhrFields[v];u.mimeType&&S.overrideMimeType&&S.overrideMimeType(u.mimeType),!u.crossDomain&&!g["X-Requested-With"]&&(g["X-Requested-With"]="XMLHttpRequest");for(v in g)S.setRequestHeader(v,g[v]);c=function(E){return function(){c&&(c=d=S.onload=S.onerror=S.onabort=S.ontimeout=S.onreadystatechange=null,E==="abort"?S.abort():E==="error"?typeof S.status!="number"?_(0,"error"):_(S.status,S.statusText):_(dg[S.status]||S.status,S.statusText,(S.responseType||"text")!=="text"||typeof S.responseText!="string"?{binary:S.response}:{text:S.responseText},S.getAllResponseHeaders()))}},S.onload=c(),d=S.onerror=S.ontimeout=c("error"),S.onabort!==void 0?S.onabort=d:S.onreadystatechange=function(){S.readyState===4&&e.setTimeout(function(){c&&d()})},c=c("abort");try{S.send(u.hasContent&&u.data||null)}catch(E){if(c)throw E}},abort:function(){c&&c()}}}),m.ajaxPrefilter(function(u){u.crossDomain&&(u.contents.script=!1)}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(u){return m.globalEval(u),u}}}),m.ajaxPrefilter("script",function(u){u.cache===void 0&&(u.cache=!1),u.crossDomain&&(u.type="GET")}),m.ajaxTransport("script",function(u){if(u.crossDomain||u.scriptAttrs){var c,d;return{send:function(g,_){c=m("<script>").attr(u.scriptAttrs||{}).prop({charset:u.scriptCharset,src:u.url}).on("load error",d=function(v){c.remove(),d=null,v&&_(v.type==="error"?404:200,v.type)}),P.head.appendChild(c[0])},abort:function(){d&&d()}}}});var wl=[],go=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var u=wl.pop()||m.expando+"_"+xl.guid++;return this[u]=!0,u}}),m.ajaxPrefilter("json jsonp",function(u,c,d){var g,_,v,S=u.jsonp!==!1&&(go.test(u.url)?"url":typeof u.data=="string"&&(u.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&go.test(u.data)&&"data");if(S||u.dataTypes[0]==="jsonp")return g=u.jsonpCallback=T(u.jsonpCallback)?u.jsonpCallback():u.jsonpCallback,S?u[S]=u[S].replace(go,"$1"+g):u.jsonp!==!1&&(u.url+=(co.test(u.url)?"&":"?")+u.jsonp+"="+g),u.converters["script json"]=function(){return v||m.error(g+" was not called"),v[0]},u.dataTypes[0]="json",_=e[g],e[g]=function(){v=arguments},d.always(function(){_===void 0?m(e).removeProp(g):e[g]=_,u[g]&&(u.jsonpCallback=c.jsonpCallback,wl.push(g)),v&&T(_)&&_(v[0]),v=_=void 0}),"script"}),b.createHTMLDocument=function(){var u=P.implementation.createHTMLDocument("").body;return u.innerHTML="<form></form><form></form>",u.childNodes.length===2}(),m.parseHTML=function(u,c,d){if(typeof u!="string")return[];typeof c=="boolean"&&(d=c,c=!1);var g,_,v;return c||(b.createHTMLDocument?(c=P.implementation.createHTMLDocument(""),g=c.createElement("base"),g.href=P.location.href,c.head.appendChild(g)):c=P),_=Ue.exec(u),v=!d&&[],_?[c.createElement(_[1])]:(_=tl([u],c,v),v&&v.length&&m(v).remove(),m.merge([],_.childNodes))},m.fn.load=function(u,c,d){var g,_,v,S=this,E=u.indexOf(" ");return E>-1&&(g=Br(u.slice(E)),u=u.slice(0,E)),T(c)?(d=c,c=void 0):c&&typeof c=="object"&&(_="POST"),S.length>0&&m.ajax({url:u,type:_||"GET",dataType:"html",data:c}).done(function(A){v=arguments,S.html(g?m("<div>").append(m.parseHTML(A)).find(g):A)}).always(d&&function(A,I){S.each(function(){d.apply(this,v||[A.responseText,I,A])})}),this},m.expr.pseudos.animated=function(u){return m.grep(m.timers,function(c){return u===c.elem}).length},m.offset={setOffset:function(u,c,d){var g,_,v,S,E,A,I,G=m.css(u,"position"),N=m(u),k={};G==="static"&&(u.style.position="relative"),E=N.offset(),v=m.css(u,"top"),A=m.css(u,"left"),I=(G==="absolute"||G==="fixed")&&(v+A).indexOf("auto")>-1,I?(g=N.position(),S=g.top,_=g.left):(S=parseFloat(v)||0,_=parseFloat(A)||0),T(c)&&(c=c.call(u,d,m.extend({},E))),c.top!=null&&(k.top=c.top-E.top+S),c.left!=null&&(k.left=c.left-E.left+_),"using"in c?c.using.call(u,k):N.css(k)}},m.fn.extend({offset:function(u){if(arguments.length)return u===void 0?this:this.each(function(_){m.offset.setOffset(this,u,_)});var c,d,g=this[0];if(g)return g.getClientRects().length?(c=g.getBoundingClientRect(),d=g.ownerDocument.defaultView,{top:c.top+d.pageYOffset,left:c.left+d.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var u,c,d,g=this[0],_={top:0,left:0};if(m.css(g,"position")==="fixed")c=g.getBoundingClientRect();else{for(c=this.offset(),d=g.ownerDocument,u=g.offsetParent||d.documentElement;u&&(u===d.body||u===d.documentElement)&&m.css(u,"position")==="static";)u=u.parentNode;u&&u!==g&&u.nodeType===1&&(_=m(u).offset(),_.top+=m.css(u,"borderTopWidth",!0),_.left+=m.css(u,"borderLeftWidth",!0))}return{top:c.top-_.top-m.css(g,"marginTop",!0),left:c.left-_.left-m.css(g,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var u=this.offsetParent;u&&m.css(u,"position")==="static";)u=u.offsetParent;return u||Mr})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(u,c){var d=c==="pageYOffset";m.fn[u]=function(g){return st(this,function(_,v,S){var E;if(C(_)?E=_:_.nodeType===9&&(E=_.defaultView),S===void 0)return E?E[c]:_[v];E?E.scrollTo(d?E.pageXOffset:S,d?S:E.pageYOffset):_[v]=S},u,g,arguments.length)}}),m.each(["top","left"],function(u,c){m.cssHooks[c]=al(b.pixelPosition,function(d,g){if(g)return g=Gn(d,c),io.test(g)?m(d).position()[c]+"px":g})}),m.each({Height:"height",Width:"width"},function(u,c){m.each({padding:"inner"+u,content:c,"":"outer"+u},function(d,g){m.fn[g]=function(_,v){var S=arguments.length&&(d||typeof _!="boolean"),E=d||(_===!0||v===!0?"margin":"border");return st(this,function(A,I,G){var N;return C(A)?g.indexOf("outer")===0?A["inner"+u]:A.document.documentElement["client"+u]:A.nodeType===9?(N=A.documentElement,Math.max(A.body["scroll"+u],N["scroll"+u],A.body["offset"+u],N["offset"+u],N["client"+u])):G===void 0?m.css(A,I,E):m.style(A,I,G,E)},c,S?_:void 0,S)}})}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(u,c){m.fn[c]=function(d){return this.on(c,d)}}),m.fn.extend({bind:function(u,c,d){return this.on(u,null,c,d)},unbind:function(u,c){return this.off(u,null,c)},delegate:function(u,c,d,g){return this.on(c,u,d,g)},undelegate:function(u,c,d){return arguments.length===1?this.off(u,"**"):this.off(c,u||"**",d)},hover:function(u,c){return this.on("mouseenter",u).on("mouseleave",c||u)}}),m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(u,c){m.fn[c]=function(d,g){return arguments.length>0?this.on(c,null,d,g):this.trigger(c)}});var pg=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;m.proxy=function(u,c){var d,g,_;if(typeof c=="string"&&(d=u[c],c=u,u=d),!!T(u))return g=s.call(arguments,2),_=function(){return u.apply(c||this,g.concat(s.call(arguments)))},_.guid=u.guid=u.guid||m.guid++,_},m.holdReady=function(u){u?m.readyWait++:m.ready(!0)},m.isArray=Array.isArray,m.parseJSON=JSON.parse,m.nodeName=z,m.isFunction=T,m.isWindow=C,m.camelCase=Rt,m.type=O,m.now=Date.now,m.isNumeric=function(u){var c=m.type(u);return(c==="number"||c==="string")&&!isNaN(u-parseFloat(u))},m.trim=function(u){return u==null?"":(u+"").replace(pg,"$1")};var mg=e.jQuery,gg=e.$;return m.noConflict=function(u){return e.$===m&&(e.$=gg),u&&e.jQuery===m&&(e.jQuery=mg),m},typeof t>"u"&&(e.jQuery=e.$=m),m})})(Dp);var sS=Dp.exports;const jC=Hs(sS),ps=(r,e)=>{const t=e.x-r.x,n=e.y-r.y;return Math.sqrt(t*t+n*n)},oS=(r,e)=>{const t=e.x-r.x,n=e.y-r.y;return uS(Math.atan2(n,t))},aS=(r,e,t)=>{const n={x:0,y:0};return t=$a(t),n.x=r.x-e*Math.cos(t),n.y=r.y-e*Math.sin(t),n},$a=r=>r*(Math.PI/180),uS=r=>r*(180/Math.PI),lS=r=>isNaN(r.buttons)?r.pressure!==0:r.buttons!==0,fa=new Map,oh=r=>{fa.has(r)&&clearTimeout(fa.get(r)),fa.set(r,setTimeout(r,100))},Ns=(r,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let s=0;s<n.length;s+=1)i=n[s],r.addEventListener?r.addEventListener(i,t,!1):r.attachEvent&&r.attachEvent(i,t)},ah=(r,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let s=0;s<n.length;s+=1)i=n[s],r.removeEventListener?r.removeEventListener(i,t):r.detachEvent&&r.detachEvent(i,t)},Gp=r=>(r.preventDefault(),r.type.match(/^touch/)?r.changedTouches:r),uh=()=>{const r=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:r,y:e}},lh=(r,e)=>{e.top||e.right||e.bottom||e.left?(r.style.top=e.top,r.style.right=e.right,r.style.bottom=e.bottom,r.style.left=e.left):(r.style.left=e.x+"px",r.style.top=e.y+"px")},Vu=(r,e,t)=>{const n=zp(r);for(let i in n)if(n.hasOwnProperty(i))if(typeof e=="string")n[i]=e+" "+t;else{let s="";for(let o=0,a=e.length;o<a;o+=1)s+=e[o]+" "+t+", ";n[i]=s.slice(0,-2)}return n},cS=(r,e)=>{const t=zp(r);for(let n in t)t.hasOwnProperty(n)&&(t[n]=e);return t},zp=r=>{const e={};return e[r]="",["webkit","Moz","o"].forEach(function(n){e[n+r.charAt(0).toUpperCase()+r.slice(1)]=""}),e},da=(r,e)=>{for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r},hS=(r,e)=>{const t={};for(let n in r)r.hasOwnProperty(n)&&e.hasOwnProperty(n)?t[n]=e[n]:r.hasOwnProperty(n)&&(t[n]=r[n]);return t},Wa=(r,e)=>{if(r.length)for(let t=0,n=r.length;t<n;t+=1)e(r[t]);else e(r)},fS=(r,e,t)=>({x:Math.min(Math.max(r.x,e.x-t),e.x+t),y:Math.min(Math.max(r.y,e.y-t),e.y+t)});var dS="ontouchstart"in window,pS=!!window.PointerEvent,mS=!!window.MSPointerEvent,Zn={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},yn,_i={};pS?yn=Zn.pointer:mS?yn=Zn.MSPointer:dS?(yn=Zn.touch,_i=Zn.mouse):yn=Zn.mouse;function dr(){}dr.prototype.on=function(r,e){var t=this,n=r.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],t._handlers_[i]=t._handlers_[i]||[],t._handlers_[i].push(e);return t};dr.prototype.off=function(r,e){var t=this;return t._handlers_=t._handlers_||{},r===void 0?t._handlers_={}:e===void 0?t._handlers_[r]=null:t._handlers_[r]&&t._handlers_[r].indexOf(e)>=0&&t._handlers_[r].splice(t._handlers_[r].indexOf(e),1),t};dr.prototype.trigger=function(r,e){var t=this,n=r.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],t._handlers_[i]&&t._handlers_[i].length&&t._handlers_[i].forEach(function(o){o.call(t,{type:i,target:t},e)})};dr.prototype.config=function(r){var e=this;e.options=e.defaults||{},r&&(e.options=hS(e.options,r))};dr.prototype.bindEvt=function(r,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},Ns(r,yn[e],t._domHandlers_[e]),_i[e]&&Ns(r,_i[e],t._domHandlers_[e]),t};dr.prototype.unbindEvt=function(r,e){var t=this;return t._domHandlers_=t._domHandlers_||{},ah(r,yn[e],t._domHandlers_[e]),_i[e]&&ah(r,_i[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function Je(r,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=r,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Je.id,Je.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Je.prototype=new dr;Je.constructor=Je;Je.id=0;Je.prototype.buildEl=function(r){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Je.prototype.stylize=function(){if(this.options.dataOnly)return this;var r=this.options.fadeTime+"ms",e=cS("borderRadius","50%"),t=Vu("transition","opacity",r),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},da(n.el,t),this.options.shape==="circle"&&da(n.back,e),da(n.front,e),this.applyStyles(n),this};Je.prototype.applyStyles=function(r){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in r[e])this.ui[e].style[t]=r[e][t];return this};Je.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Je.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Je.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Je.prototype.show=function(r){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof r=="function"&&r.call(this)},e.options.fadeTime)),e};Je.prototype.hide=function(r){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof r=="function"&&r.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,n={};n.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,n.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(r,n)}return e};Je.prototype.setPosition=function(r,e){var t=this;t.frontPosition={x:e.x,y:e.y};var n=t.options.fadeTime+"ms",i={};i.front=Vu("transition",["transform"],n);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(i),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof r=="function"&&r.call(t),t.restCallback()},t.options.fadeTime)};Je.prototype.restCallback=function(){var r=this,e={};e.front=Vu("transition","none",""),r.applyStyles(e),r.trigger("rested",r.instance)};Je.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Je.prototype.computeDirection=function(r){var e=r.angle.radian,t=Math.PI/4,n=Math.PI/2,i,s,o;if(e>t&&e<t*3&&!r.lockX?i="up":e>-t&&e<=t&&!r.lockY?i="left":e>-t*3&&e<=-t&&!r.lockX?i="down":r.lockY||(i="right"),r.lockY||(e>-n&&e<n?s="left":s="right"),r.lockX||(e>0?o="up":o="down"),r.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var h={};this.direction={x:s,y:o,angle:i},r.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(h[l]=!0);if(h.x&&h.y&&h.angle)return r;(!h.x||!h.y)&&this.trigger("plain",r),h.x||this.trigger("plain:"+s,r),h.y||this.trigger("plain:"+o,r),h.angle||this.trigger("dir dir:"+i,r)}else this.resetDirection();return r};function qe(r,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=r,t.id=qe.id,qe.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const n=getComputedStyle(t.options.zone.parentElement);return n&&n.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}qe.prototype=new dr;qe.constructor=qe;qe.id=0;qe.prototype.prepareNipples=function(){var r=this,e=r.nipples;e.on=r.on.bind(r),e.off=r.off.bind(r),e.options=r.options,e.destroy=r.destroy.bind(r),e.ids=r.ids,e.id=r.id,e.processOnMove=r.processOnMove.bind(r),e.processOnEnd=r.processOnEnd.bind(r),e.get=function(t){if(t===void 0)return e[0];for(var n=0,i=e.length;n<i;n+=1)if(e[n].identifier===t)return e[n];return!1}};qe.prototype.bindings=function(){var r=this;r.bindEvt(r.options.zone,"start"),r.options.zone.style.touchAction="none",r.options.zone.style.msTouchAction="none"};qe.prototype.begin=function(){var r=this,e=r.options;if(e.mode==="static"){var t=r.createNipple(e.position,r.manager.getIdentifier());t.add(),r.idles.push(t)}};qe.prototype.createNipple=function(r,e){var t=this,n=t.manager.scroll,i={},s=t.options,o={x:t.parentIsFlex?n.x:n.x+t.box.left,y:t.parentIsFlex?n.y:n.y+t.box.top};if(r.x&&r.y)i={x:r.x-o.x,y:r.y-o.y};else if(r.top||r.right||r.bottom||r.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=r.top,a.style.right=r.right,a.style.bottom=r.bottom,a.style.left=r.left,a.style.position="absolute",s.zone.appendChild(a);var l=a.getBoundingClientRect();s.zone.removeChild(a),i=r,r={x:l.left+n.x,y:l.top+n.y}}var h=new Je(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:r,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(lh(h.ui.el,i),lh(h.ui.front,h.frontPosition)),t.nipples.push(h),t.trigger("added "+h.identifier+":added",h),t.manager.trigger("added "+h.identifier+":added",h),t.bindNipple(h),h};qe.prototype.updateBox=function(){var r=this;r.box=r.options.zone.getBoundingClientRect()};qe.prototype.bindNipple=function(r){var e=this,t,n=function(i,s){t=i.type+" "+s.id+":"+i.type,e.trigger(t,s)};r.on("destroyed",e.onDestroyed.bind(e)),r.on("shown hidden rested dir plain",n),r.on("dir:up dir:right dir:down dir:left",n),r.on("plain:up plain:right plain:down plain:left",n)};qe.prototype.pressureFn=function(r,e,t){var n=this,i=0;clearInterval(n.pressureIntervals[t]),n.pressureIntervals[t]=setInterval((function(){var s=r.force||r.pressure||r.webkitForce||0;s!==i&&(e.trigger("pressure",s),n.trigger("pressure "+e.identifier+":pressure",s),i=s)}).bind(n),100)};qe.prototype.onstart=function(r){var e=this,t=e.options,n=r;r=Gp(r),e.updateBox();var i=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):n.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(o){if(Object.values(n.touches).findIndex(function(l){return l.identifier===o})<0){var a=[r[0]];a.identifier=o,e.processOnEnd(a)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return Wa(r,i),e.manager.bindDocument(),!1};qe.prototype.processOnStart=function(r){var e=this,t=e.options,n,i=e.manager.getIdentifier(r),s=r.force||r.pressure||r.webkitForce||0,o={x:r.pageX,y:r.pageY},a=e.getOrCreate(i,o);a.identifier!==i&&e.manager.removeIdentifier(a.identifier),a.identifier=i;var l=function(f){f.trigger("start",f),e.trigger("start "+f.id+":start",f),f.show(),s>0&&e.pressureFn(r,f,f.identifier),e.processOnMove(r)};if((n=e.idles.indexOf(a))>=0&&e.idles.splice(n,1),e.actives.push(a),e.ids.push(a.identifier),t.mode!=="semi")l(a);else{var h=ps(o,a.position);if(h<=t.catchDistance)l(a);else{a.destroy(),e.processOnStart(r);return}}return a};qe.prototype.getOrCreate=function(r,e){var t=this,n=t.options,i;return/(semi|static)/.test(n.mode)?(i=t.idles[0],i?(t.idles.splice(0,1),i):n.mode==="semi"?t.createNipple(e,r):(console.warn("Coudln't find the needed nipple."),!1)):(i=t.createNipple(e,r),i)};qe.prototype.processOnMove=function(r){var e=this,t=e.options,n=e.manager.getIdentifier(r),i=e.nipples.get(n),s=e.manager.scroll;if(!lS(r)){this.processOnEnd(r);return}if(!i){console.error("Found zombie joystick with ID "+n),e.manager.removeIdentifier(n);return}if(t.dynamicPage){var o=i.el.getBoundingClientRect();i.position={x:s.x+o.left,y:s.y+o.top}}i.identifier=n;var a=i.options.size/2,l={x:r.pageX,y:r.pageY};t.lockX&&(l.y=i.position.y),t.lockY&&(l.x=i.position.x);var h=ps(l,i.position),f=oS(l,i.position),p=$a(f),x=h/a,y={distance:h,position:l},b,T;if(i.options.shape==="circle"?(b=Math.min(h,a),T=aS(i.position,b,f)):(T=fS(l,i.position,a),b=ps(T,i.position)),t.follow){if(h>a){let B=l.x-T.x,O=l.y-T.y;i.position.x+=B,i.position.y+=O,i.el.style.top=i.position.y-(e.box.top+s.y)+"px",i.el.style.left=i.position.x-(e.box.left+s.x)+"px",h=ps(l,i.position)}}else l=T,h=b;var C=l.x-i.position.x,P=l.y-i.position.y;i.frontPosition={x:C,y:P},t.dataOnly||(i.ui.front.style.transform="translate("+C+"px,"+P+"px)");var F={identifier:i.identifier,position:l,force:x,pressure:r.force||r.pressure||r.webkitForce||0,distance:h,angle:{radian:p,degree:f},vector:{x:C/a,y:-P/a},raw:y,instance:i,lockX:t.lockX,lockY:t.lockY};F=i.computeDirection(F),F.angle={radian:$a(180-f),degree:180-f},i.trigger("move",F),e.trigger("move "+i.id+":move",F)};qe.prototype.processOnEnd=function(r){var e=this,t=e.options,n=e.manager.getIdentifier(r),i=e.nipples.get(n),s=e.manager.removeIdentifier(i.identifier);i&&(t.dataOnly||i.hide(function(){t.mode==="dynamic"&&(i.trigger("removed",i),e.trigger("removed "+i.id+":removed",i),e.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(e.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),e.trigger("end "+i.id+":end",i),e.ids.indexOf(i.identifier)>=0&&e.ids.splice(e.ids.indexOf(i.identifier),1),e.actives.indexOf(i)>=0&&e.actives.splice(e.actives.indexOf(i),1),/(semi|static)/.test(t.mode)?e.idles.push(i):e.nipples.indexOf(i)>=0&&e.nipples.splice(e.nipples.indexOf(i),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};qe.prototype.onDestroyed=function(r,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};qe.prototype.destroy=function(){var r=this;r.unbindEvt(r.options.zone,"start"),r.nipples.forEach(function(t){t.destroy()});for(var e in r.pressureIntervals)r.pressureIntervals.hasOwnProperty(e)&&clearInterval(r.pressureIntervals[e]);r.trigger("destroyed",r.nipples),r.manager.unbindDocument(),r.off()};function nt(r){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=uh(),e.config(r),e.prepareCollections();var t=function(){var i;e.collections.forEach(function(s){s.forEach(function(o){i=o.el.getBoundingClientRect(),o.position={x:e.scroll.x+i.left,y:e.scroll.y+i.top}})})};Ns(window,"resize",function(){oh(t)});var n=function(){e.scroll=uh()};return Ns(window,"scroll",function(){oh(n)}),e.collections}nt.prototype=new dr;nt.constructor=nt;nt.prototype.prepareCollections=function(){var r=this;r.collections.create=r.create.bind(r),r.collections.on=r.on.bind(r),r.collections.off=r.off.bind(r),r.collections.destroy=r.destroy.bind(r),r.collections.get=function(e){var t;return r.collections.every(function(n){return t=n.get(e),!t}),t}};nt.prototype.create=function(r){return this.createCollection(r)};nt.prototype.createCollection=function(r){var e=this,t=new qe(e,r);return e.bindCollection(t),e.collections.push(t),t};nt.prototype.bindCollection=function(r){var e=this,t,n=function(i,s){t=i.type+" "+s.id+":"+i.type,e.trigger(t,s)};r.on("destroyed",e.onDestroyed.bind(e)),r.on("shown hidden rested dir plain",n),r.on("dir:up dir:right dir:down dir:left",n),r.on("plain:up plain:right plain:down plain:left",n)};nt.prototype.bindDocument=function(){var r=this;r.binded||(r.bindEvt(document,"move").bindEvt(document,"end"),r.binded=!0)};nt.prototype.unbindDocument=function(r){var e=this;(!Object.keys(e.ids).length||r===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};nt.prototype.getIdentifier=function(r){var e;return r?(e=r.identifier===void 0?r.pointerId:r.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};nt.prototype.removeIdentifier=function(r){var e={};for(var t in this.ids)if(this.ids[t]===r){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};nt.prototype.onmove=function(r){var e=this;return e.onAny("move",r),!1};nt.prototype.onend=function(r){var e=this;return e.onAny("end",r),!1};nt.prototype.oncancel=function(r){var e=this;return e.onAny("end",r),!1};nt.prototype.onAny=function(r,e){var t=this,n,i="processOn"+r.charAt(0).toUpperCase()+r.slice(1);e=Gp(e);var s=function(a,l,h){h.ids.indexOf(l)>=0&&(h[i](a),a._found_=!0)},o=function(a){n=t.getIdentifier(a),Wa(t.collections,s.bind(null,a,n)),a._found_||t.removeIdentifier(n)};return Wa(e,o),!1};nt.prototype.destroy=function(){var r=this;r.unbindDocument(!0),r.ids={},r.index=0,r.collections.forEach(function(e){e.destroy()}),r.off()};nt.prototype.onDestroyed=function(r,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const ch=new nt,XC={create:function(r){return ch.create(r)},factory:ch};var Re=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Ie=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,gS=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,xS=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,_S=Object.defineProperty,vS=(r,e,t)=>e in r?_S(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Lp=(r,e,t)=>(vS(r,typeof e!="symbol"?e+"":e,t),t);const yS=class Np extends Te{constructor(e){e={...Np.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:xS,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:gS,name:"adjustment-filter"});super({gpuProgram:t,glProgram:n,resources:{adjustmentUniforms:{uGamma:{value:e.gamma,type:"f32"},uContrast:{value:e.contrast,type:"f32"},uSaturation:{value:e.saturation,type:"f32"},uBrightness:{value:e.brightness,type:"f32"},uColor:{value:[e.red,e.green,e.blue,e.alpha],type:"vec4<f32>"}}}}),Lp(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}};Lp(yS,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var bS=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,SS=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,TS=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,CS=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,wS=Object.defineProperty,PS=(r,e,t)=>e in r?wS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,zr=(r,e,t)=>(PS(r,typeof e!="symbol"?e+"":e,t),t);const Hp=class $p extends Te{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t))&&(Z("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.clamp=e[2])),t={...$p.DEFAULT_OPTIONS,...t};const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:t!=null&&t.clamp?CS:SS,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:t!=null&&t.clamp?TS:bS,name:"kawase-blur-filter"});super({gpuProgram:n,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),zr(this,"uniforms"),zr(this,"_pixelSize",{x:0,y:0}),zr(this,"_clamp"),zr(this,"_kernels",[]),zr(this,"_blur"),zr(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=t.pixelSize??{x:1,y:1},Array.isArray(t.strength)?this.kernels=t.strength:typeof t.strength=="number"&&(this._blur=t.strength,this.quality=t.quality??3),this._clamp=!!t.clamp}apply(e,t,n,i){const s=this.pixelSizeX/t.source.width,o=this.pixelSizeY/t.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,t,n,i);else{const l=He.getSameSizeTexture(t);let h=t,f=l,p;const x=this._quality-1;for(let y=0;y<x;y++)a=this._kernels[y]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,h,f,!0),p=h,h=f,f=p;a=this._kernels[x]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,h,n,i),He.returnTexture(l)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){const e=this._blur,t=this._quality,n=[e];if(e>0){let i=e;const s=e/t;for(let o=1;o<t;o++)i-=s,n.push(i)}this._kernels=n,this._updatePadding()}};zr(Hp,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Wp=Hp;var AS=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,ES=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,MS=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,BS=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,RS=Object.defineProperty,IS=(r,e,t)=>e in r?RS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Vp=(r,e,t)=>(IS(r,typeof e!="symbol"?e+"":e,t),t);const jp=class Xp extends Te{constructor(e){e={...Xp.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:BS,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:MS,name:"extract-brightness-filter"});super({gpuProgram:t,glProgram:n,resources:{extractBrightnessUniforms:{uThreshold:{value:e.threshold,type:"f32"}}}}),Vp(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};Vp(jp,"DEFAULT_OPTIONS",{threshold:.5});let FS=jp;var OS=Object.defineProperty,US=(r,e,t)=>e in r?OS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,pn=(r,e,t)=>(US(r,typeof e!="symbol"?e+"":e,t),t);const kS=class Yp extends Te{constructor(e){e={...Yp.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:ES,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:AS,name:"advanced-bloom-filter"});super({gpuProgram:t,glProgram:n,resources:{advancedBloomUniforms:{uBloomScale:{value:e.bloomScale,type:"f32"},uBrightness:{value:e.brightness,type:"f32"}},uMapTexture:Q.WHITE}}),pn(this,"uniforms"),pn(this,"bloomScale",1),pn(this,"brightness",1),pn(this,"_extractFilter"),pn(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new FS({threshold:e.threshold}),this._blurFilter=new Wp({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),Object.assign(this,e)}apply(e,t,n,i){const s=He.getSameSizeTexture(t);this._extractFilter.apply(e,t,s,!0);const o=He.getSameSizeTexture(t);this._blurFilter.apply(e,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,e.applyFilter(this,t,n,i),He.returnTexture(o),He.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}};pn(kS,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var DS=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,GS=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,zS=Object.defineProperty,LS=(r,e,t)=>e in r?zS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Va=(r,e,t)=>(LS(r,typeof e!="symbol"?e+"":e,t),t);const NS=class qp extends Te{constructor(...e){let t=e[0]??{};typeof t=="number"&&(Z("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),t={size:t});const n=(t==null?void 0:t.color)&&t.replaceColor!==!1;t={...qp.DEFAULT_OPTIONS,...t};const i=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:GS,entryPoint:"mainFragment"}}),s=ge.from({vertex:Re,fragment:DS,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:t.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(n),type:"f32"}}}}),Va(this,"uniforms"),Va(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new de,this.color=t.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,n,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=e?1:0}};Va(NS,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var HS=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,$S=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,WS=Object.defineProperty,VS=(r,e,t)=>e in r?WS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,mn=(r,e,t)=>(VS(r,typeof e!="symbol"?e+"":e,t),t);const jS=class Kp extends Te{constructor(e){e={...Kp.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:$S,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:HS,name:"bevel-filter"});super({gpuProgram:t,glProgram:n,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:e.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:e.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),mn(this,"uniforms"),mn(this,"_thickness"),mn(this,"_rotation"),mn(this,"_lightColor"),mn(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new de,this._shadowColor=new de,this.lightColor=e.lightColor??16777215,this.shadowColor=e.shadowColor??0,Object.assign(this,e)}get rotation(){return this._rotation/Cn}set rotation(e){this._rotation=e*Cn,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);const[t,n,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=t,this.uniforms.uLightColor[1]=n,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);const[t,n,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=t,this.uniforms.uShadowColor[1]=n,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};mn(jS,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var XS=Object.defineProperty,YS=(r,e,t)=>e in r?XS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ms=(r,e,t)=>(YS(r,typeof e!="symbol"?e+"":e,t),t);const Zp=class Qp extends t0{constructor(...e){let t=e[0]??{};if(typeof t=="number"||Array.isArray(t)||"x"in t&&"y"in t){Z("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let n=t;Array.isArray(n)&&(n={x:n[0],y:n[1]}),t={strength:n},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]),e[3]!==void 0&&(t.kernelSize=e[3])}t={...Qp.DEFAULT_OPTIONS,...t},super(),ms(this,"_blurXFilter"),ms(this,"_blurYFilter"),ms(this,"_strength"),this._strength={x:2,y:2},t.strength&&(typeof t.strength=="number"?(this._strength.x=t.strength,this._strength.y=t.strength):(this._strength.x=t.strength.x,this._strength.y=t.strength.y)),this._blurXFilter=new oi({...t,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new oi({...t,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,t)}apply(e,t,n,i){const s=He.getSameSizeTexture(t);e.applyFilter(this,t,n,i),this._blurXFilter.apply(e,t,s,!0),this._blurYFilter.apply(e,s,n,!1),He.returnTexture(s)}get strength(){return this._strength}set strength(e){this._strength=typeof e=="number"?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Z("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(e){Z("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=e}get blurX(){return Z("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(e){Z("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=e}get blurY(){return Z("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(e){Z("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=e}};ms(Zp,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});let YC=Zp;var qS=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,KS=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,ZS=Object.defineProperty,QS=(r,e,t)=>e in r?ZS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Jp=(r,e,t)=>(QS(r,typeof e!="symbol"?e+"":e,t),t);const JS=class em extends Te{constructor(e){e={...em.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:KS,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:qS,name:"bulge-pinch-filter"});super({gpuProgram:t,glProgram:n,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:e.center,type:"vec2<f32>"},uRadius:{value:e.radius,type:"f32"},uStrength:{value:e.strength,type:"f32"}}}}),Jp(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,e)}apply(e,t,n,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,n,i)}get center(){return this.uniforms.uCenter}set center(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}};Jp(JS,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var e1=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,t1=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,hh=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,qr=qr||{};qr.stringify=function(){var r={"visit_linear-gradient":function(e){return r.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return r.visit_gradient(e)},"visit_radial-gradient":function(e){return r.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return r.visit_gradient(e)},visit_gradient:function(e){var t=r.visit(e.orientation);return t&&(t+=", "),e.type+"("+t+r.visit(e.colorStops)+")"},visit_shape:function(e){var t=e.value,n=r.visit(e.at),i=r.visit(e.style);return i&&(t+=" "+i),n&&(t+=" at "+n),t},"visit_default-radial":function(e){var t="",n=r.visit(e.at);return n&&(t+=n),t},"visit_extent-keyword":function(e){var t=e.value,n=r.visit(e.at);return n&&(t+=" at "+n),t},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return r.visit(e.value.x)+" "+r.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return r.visit_color(e.value,e)},visit_hex:function(e){return r.visit_color("#"+e.value,e)},visit_rgb:function(e){return r.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return r.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,t){var n=e,i=r.visit(t.length);return i&&(n+=" "+i),n},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var t="",n=e.length;return e.forEach(function(i,s){t+=r.visit(i),s<n-1&&(t+=", ")}),t},visit:function(e){if(!e)return"";var t="";if(e instanceof Array)return r.visit_array(e,t);if(e.type){var n=r["visit_"+e.type];if(n)return n(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return r.visit(e)}}();var qr=qr||{};qr.parse=function(){var r={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function t(q){var xe=new Error(e+": "+q);throw xe.source=e,xe}function n(){var q=i();return e.length>0&&t("Invalid input not EOF"),q}function i(){return B(s)}function s(){return o("linear-gradient",r.linearGradient,l)||o("repeating-linear-gradient",r.repeatingLinearGradient,l)||o("radial-gradient",r.radialGradient,p)||o("repeating-radial-gradient",r.repeatingRadialGradient,p)}function o(q,xe,K){return a(xe,function(oe){var Pr=K();return Pr&&(be(r.comma)||t("Missing comma before color stops")),{type:q,orientation:Pr,colorStops:B(O)}})}function a(q,xe){var K=be(q);if(K){be(r.startCall)||t("Missing (");var oe=xe(K);return be(r.endCall)||t("Missing )"),oe}}function l(){return h()||f()}function h(){return Y("directional",r.sideOrCorner,1)}function f(){return Y("angular",r.angleValue,1)}function p(){var q,xe=x(),K;return xe&&(q=[],q.push(xe),K=e,be(r.comma)&&(xe=x(),xe?q.push(xe):e=K)),q}function x(){var q=y()||b();if(q)q.at=C();else{var xe=T();if(xe){q=xe;var K=C();K&&(q.at=K)}else{var oe=P();oe&&(q={type:"default-radial",at:oe})}}return q}function y(){var q=Y("shape",/^(circle)/i,0);return q&&(q.style=X()||T()),q}function b(){var q=Y("shape",/^(ellipse)/i,0);return q&&(q.style=Me()||T()),q}function T(){return Y("extent-keyword",r.extentKeywords,1)}function C(){if(Y("position",/^at/,0)){var q=P();return q||t("Missing positioning value"),q}}function P(){var q=F();if(q.x||q.y)return{type:"position",value:q}}function F(){return{x:Me(),y:Me()}}function B(q){var xe=q(),K=[];if(xe)for(K.push(xe);be(r.comma);)xe=q(),xe?K.push(xe):t("One extra comma");return K}function O(){var q=W();return q||t("Expected color definition"),q.length=Me(),q}function W(){return m()||z()||V()||ne()}function ne(){return Y("literal",r.literalColor,0)}function m(){return Y("hex",r.hexColor,1)}function V(){return a(r.rgbColor,function(){return{type:"rgb",value:B($)}})}function z(){return a(r.rgbaColor,function(){return{type:"rgba",value:B($)}})}function $(){return be(r.number)[1]}function Me(){return Y("%",r.percentageValue,1)||ut()||X()}function ut(){return Y("position-keyword",r.positionKeywords,1)}function X(){return Y("px",r.pixelValue,1)||Y("em",r.emValue,1)}function Y(q,xe,K){var oe=be(xe);if(oe)return{type:q,value:oe[K]}}function be(q){var xe,K;return K=/^[\n\r\t\s]+/.exec(e),K&&De(K[0].length),xe=q.exec(e),xe&&De(xe[0].length),xe}function De(q){e=e.substr(q)}return function(q){return e=q.toString(),n()}}();var r1=qr.parse;qr.stringify;function n1(r){const e=r1(h1(r));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const t=e[0],n=i1(t.type),i=s1(t.colorStops),s=l1(t.orientation);return{type:n,stops:i,angle:s}}function i1(r){const e={"linear-gradient":0,"radial-gradient":1};if(!(r in e))throw new Error(`Unsupported gradient type "${r}"`);return e[r]}function s1(r){const e=a1(r),t=[],n=new de;for(let i=0;i<r.length;i++){const s=o1(r[i]),o=n.setValue(s).toArray();t.push({offset:e[i],color:o.slice(0,3),alpha:o[3]})}return t}function o1(r){switch(r.type){case"hex":return`#${r.value}`;case"literal":return r.value;default:return`${r.type}(${r.value.join(",")})`}}function a1(r){const e=[];for(let s=0;s<r.length;s++){const o=r[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),e.push(a)}const n=s=>{for(let o=s;o<e.length;o++)if(e[o]!==-1)return{indexDelta:o-s,offset:e[o]};return{indexDelta:e.length-1-s,offset:1}};let i=0;for(let s=0;s<e.length;s++){const o=e[s];if(o!==-1)i=o;else if(s===0)e[s]=0;else if(s+1===e.length)e[s]=1;else{const a=n(s),h=(a.offset-i)/(1+a.indexDelta);for(let f=0;f<=a.indexDelta;f++)e[s+f]=i+(f+1)*h;s+=a.indexDelta,i=e[s]}}return e.map(u1)}function u1(r){return r.toString().length>6?parseFloat(r.toString().substring(0,6)):r}function l1(r){if(typeof r>"u")return 0;if("type"in r&&"value"in r)switch(r.type){case"angular":return parseFloat(r.value);case"directional":return c1(r.value)}return 0}function c1(r){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(r in e))throw new Error(`Unsupported directional value "${r}"`);return e[r]}function h1(r){let e=r.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var f1=Object.defineProperty,d1=(r,e,t)=>e in r?f1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Vr=(r,e,t)=>(d1(r,typeof e!="symbol"?e+"":e,t),t);const pa=90;function p1(r){return[...r].sort((e,t)=>e.offset-t.offset)}const vi=class gs extends Te{constructor(e){if(e&&"css"in e?e={...n1(e.css||""),alpha:e.alpha??gs.defaults.alpha,maxColors:e.maxColors??gs.defaults.maxColors}:e={...gs.defaults,...e},!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const t=me.from({vertex:{source:hh,entryPoint:"mainVertex"},fragment:{source:hh,entryPoint:"mainFragment"}}),n=ge.from({vertex:t1,fragment:e1,name:"color-gradient-filter"}),i=32;super({gpuProgram:t,glProgram:n,resources:{baseUniforms:{uOptions:{value:[e.type,e.angle??pa,e.alpha,e.replace?1:0],type:"vec4<f32>"},uCounts:{value:[e.stops.length,e.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),Vr(this,"baseUniforms"),Vr(this,"stopsUniforms"),Vr(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,e)}get stops(){return this._stops}set stops(e){const t=p1(e),n=new de;let i,s,o;for(let a=0;a<t.length;a++){n.setValue(t[a].color);const l=a*3;[i,s,o]=n.toArray(),this.stopsUniforms.uColors[l]=i,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=t[a].offset,this.stopsUniforms.uStops[a*4+1]=t[a].alpha}this.baseUniforms.uCounts[0]=t.length,this._stops=t}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+pa}set angle(e){this.baseUniforms.uOptions[1]=e-pa}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=e?1:0}};Vr(vi,"LINEAR",0);Vr(vi,"RADIAL",1);Vr(vi,"CONIC",2);Vr(vi,"defaults",{type:vi.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var m1=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,g1=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,x1=Object.defineProperty,_1=(r,e,t)=>e in r?x1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,sr=(r,e,t)=>(_1(r,typeof e!="symbol"?e+"":e,t),t);const v1=class tm extends Te{constructor(...e){let t=e[0]??{};if((t instanceof Q||t instanceof Ye)&&(Z("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),t={colorMap:t},e[1]!==void 0&&(t.nearest=e[1]),e[2]!==void 0&&(t.mix=e[2])),t={...tm.DEFAULT_OPTIONS,...t},!t.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:g1,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:m1,name:"color-map-filter"});super({gpuProgram:n,glProgram:i,resources:{colorMapUniforms:{uMix:{value:t.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:t.colorMap.source,uMapSampler:t.colorMap.source.style}}),sr(this,"uniforms"),sr(this,"_size",0),sr(this,"_sliceSize",0),sr(this,"_slicePixelSize",0),sr(this,"_sliceInnerSize",0),sr(this,"_nearest",!1),sr(this,"_scaleMode","linear"),sr(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,t)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;const t=e instanceof Q?e.source:e;t.style.scaleMode=this._scaleMode,t.autoGenerateMipmaps=!1,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=t,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?"nearest":"linear";const t=this._colorMap;t&&t.source&&(t.source.scaleMode=this._scaleMode,t.source.autoGenerateMipmaps=!1,t.source.style.update(),t.source.update())}updateColorMap(){const e=this._colorMap;e!=null&&e.source&&(e.source.update(),this.colorMap=e)}destroy(){var e;(e=this._colorMap)==null||e.destroy(),super.destroy()}};sr(v1,"DEFAULT_OPTIONS",{colorMap:Q.WHITE,nearest:!1,mix:1});var y1=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,b1=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,S1=Object.defineProperty,T1=(r,e,t)=>e in r?S1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ja=(r,e,t)=>(T1(r,typeof e!="symbol"?e+"":e,t),t);const C1=class rm extends Te{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(Z("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),t={color:t},e[1]!==void 0&&(t.alpha=e[1])),t={...rm.DEFAULT_OPTIONS,...t};const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:b1,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:y1,name:"color-overlay-filter"});super({gpuProgram:n,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"}}}}),ja(this,"uniforms"),ja(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new de,this.color=t.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,n,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};ja(C1,"DEFAULT_OPTIONS",{color:0,alpha:1});var w1=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,P1=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,A1=Object.defineProperty,E1=(r,e,t)=>e in r?A1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,xs=(r,e,t)=>(E1(r,typeof e!="symbol"?e+"":e,t),t);const M1=class nm extends Te{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(Z("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),t={originalColor:t},e[1]!==void 0&&(t.targetColor=e[1]),e[2]!==void 0&&(t.tolerance=e[2])),t={...nm.DEFAULT_OPTIONS,...t};const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:P1,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:w1,name:"color-replace-filter"});super({gpuProgram:n,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:t.tolerance,type:"f32"}}}}),xs(this,"uniforms"),xs(this,"_originalColor"),xs(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new de,this._targetColor=new de,this.originalColor=t.originalColor??16711680,this.targetColor=t.targetColor??0,Object.assign(this,t)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);const[t,n,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=t,this.uniforms.uOriginalColor[1]=n,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);const[t,n,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=t,this.uniforms.uTargetColor[1]=n,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){Z("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=e}get newColor(){return Z("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(e){Z("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return Z("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};xs(M1,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var B1=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,R1=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,I1=Object.defineProperty,F1=(r,e,t)=>e in r?I1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,im=(r,e,t)=>(F1(r,typeof e!="symbol"?e+"":e,t),t);const O1=class sm extends Te{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(Z("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),t={matrix:t},e[1]!==void 0&&(t.width=e[1]),e[2]!==void 0&&(t.height=e[2])),t={...sm.DEFAULT_OPTIONS,...t};const n=t.width??200,i=t.height??200,s=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:R1,entryPoint:"mainFragment"}}),o=ge.from({vertex:Re,fragment:B1,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:t.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/n,y:1/i},type:"vec2<f32>"}}}}),im(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=n,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((t,n)=>{this.uniforms.uMatrix[n]=t})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}};im(O1,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var U1=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,k1=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,D1=Object.defineProperty,G1=(r,e,t)=>e in r?D1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,_s=(r,e,t)=>(G1(r,typeof e!="symbol"?e+"":e,t),t);const z1=class om extends Te{constructor(e){e={...om.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:k1,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:U1,name:"crt-filter"});super({gpuProgram:t,glProgram:n,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),_s(this,"uniforms"),_s(this,"seed"),_s(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,e)}apply(e,t,n,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,t,n,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=e?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}};_s(z1,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var L1=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,N1=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,H1=Object.defineProperty,$1=(r,e,t)=>e in r?H1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,W1=(r,e,t)=>($1(r,e+"",t),t);const V1=class am extends Te{constructor(...e){let t=e[0]??{};typeof t=="number"&&(Z("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),t={scale:t},e[1]!==void 0&&(t.angle=e[1]),e[2]!==void 0&&(t.grayscale=e[2])),t={...am.DEFAULT_OPTIONS,...t};const n={uScale:{value:t.scale,type:"f32"},uAngle:{value:t.angle,type:"f32"},uGrayScale:{value:t.grayscale?1:0,type:"f32"}},i=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:N1,entryPoint:"mainFragment"}}),s=ge.from({vertex:Re,fragment:L1,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:n}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=e?1:0}};W1(V1,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var j1=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,X1=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,Y1=Object.defineProperty,q1=(r,e,t)=>e in r?Y1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,gn=(r,e,t)=>(q1(r,typeof e!="symbol"?e+"":e,t),t);const K1=class um extends Te{constructor(e){e={...um.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:X1,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:j1,name:"drop-shadow-filter"});super({gpuProgram:t,glProgram:n,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),gn(this,"uniforms"),gn(this,"shadowOnly",!1),gn(this,"_color"),gn(this,"_blurFilter"),gn(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new de,this.color=e.color??0,this._blurFilter=new Wp({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new Te({gpuProgram:me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:ge.from({vertex:Re,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,t,n,i){const s=He.getSameSizeTexture(t);e.applyFilter(this,t,s,!0),this._blurFilter.apply(e,s,n,i),this.shadowOnly||e.applyFilter(this._basePass,t,n,!1),He.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,n,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){const e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}};gn(K1,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Z1=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,Q1=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,J1=Object.defineProperty,eT=(r,e,t)=>e in r?J1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Xt=(r,e,t)=>(eT(r,typeof e!="symbol"?e+"":e,t),t);const tT=class lm extends Te{constructor(e){e={...lm.defaults,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:Q1,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:Z1,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=e.sampleSize??512;const s=new Q({source:new Xr({resource:i})});super({gpuProgram:t,glProgram:n,resources:{glitchUniforms:{uSeed:{value:(e==null?void 0:e.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(e==null?void 0:e.fillMode)??0,type:"f32"},uOffset:{value:(e==null?void 0:e.offset)??100,type:"f32"},uDirection:{value:(e==null?void 0:e.direction)??0,type:"f32"},uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),Xt(this,"uniforms"),Xt(this,"average",!1),Xt(this,"minSize",8),Xt(this,"sampleSize",512),Xt(this,"_canvas"),Xt(this,"texture"),Xt(this,"_slices",0),Xt(this,"_sizes",new Float32Array(1)),Xt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,e)}apply(e,t,n,i){const{width:s,height:o}=t.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,e.applyFilter(this,t,n,i)}_randomizeSizes(){const e=this._sizes,t=this._slices-1,n=this.sampleSize,i=Math.min(this.minSize/n,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<t;a++){const l=o/(s-a),h=Math.max(l*(1-Math.random()*.6),i);e[a]=h,o-=h}e[t]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<t;a++){const l=Math.max(o*s*Math.random(),i);e[a]=l,s-=l}e[t]=s}this.shuffle()}shuffle(){const e=this._sizes,t=this._slices-1;for(let n=t;n>0;n--){const i=Math.random()*n>>0,s=e[n];e[n]=e[i],e[i]=s}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,t=this.texture,n=this._canvas.getContext("2d");n.clearRect(0,0,8,e);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*e,l=i>0?i:0,h=i<0?-i:0;n.fillStyle=`rgba(${l}, ${h}, 0, 1)`,n.fillRect(0,s>>0,e,a+1>>0),s+=a}t.source.update()}set sizes(e){const t=Math.min(this._slices,e.length);for(let n=0;n<t;n++)this._sizes[n]=e[n]}get sizes(){return this._sizes}set offsets(e){const t=Math.min(this._slices,e.length);for(let n=0;n<t;n++)this._offsets[n]=e[n]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/Cn}set direction(e){this.uniforms.uDirection=e*Cn}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Xt(tT,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var rT=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,nT=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,iT=Object.defineProperty,sT=(r,e,t)=>e in r?iT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Xa=(r,e,t)=>(sT(r,typeof e!="symbol"?e+"":e,t),t);const oT=class cm extends Te{constructor(e){e={...cm.DEFAULT_OPTIONS,...e};const t=e.distance??10,n=e.quality??.1,i=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:nT,entryPoint:"mainFragment"}}),s=ge.from({vertex:Re,fragment:rT.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/n/t).toFixed(7)}`).replace(/__DIST__/gi,`${t.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:t,type:"f32"},uStrength:{value:[e.innerStrength,e.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uQuality:{value:n,type:"f32"},uKnockout:{value:(e==null?void 0:e.knockout)??!1?1:0,type:"f32"}}},padding:t}),Xa(this,"uniforms"),Xa(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new de,this.color=e.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,n,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};Xa(oT,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var aT=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,uT=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,lT=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,cT=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,hT=Object.defineProperty,fT=(r,e,t)=>e in r?hT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,xn=(r,e,t)=>(fT(r,typeof e!="symbol"?e+"":e,t),t);const dT=class hm extends Te{constructor(e){e={...hm.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:uT.replace("${PERLIN}",cT),entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:aT.replace("${PERLIN}",lT),name:"god-ray-filter"});super({gpuProgram:t,glProgram:n,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:e.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),xn(this,"uniforms"),xn(this,"time",0),xn(this,"_angleLight",[0,0]),xn(this,"_angle",0),xn(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,e)}apply(e,t,n,i){const s=t.frame.width,o=t.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,e.applyFilter(this,t,n,i)}get angle(){return this._angle}set angle(e){this._angle=e;const t=e*Cn;this._angleLight[0]=Math.cos(t),this._angleLight[1]=Math.sin(t)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=e?1:0}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}};xn(dT,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var pT=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,mT=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,gT=Object.defineProperty,xT=(r,e,t)=>e in r?gT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ya=(r,e,t)=>(xT(r,typeof e!="symbol"?e+"":e,t),t);const _T=class fm extends Te{constructor(e){e={...fm.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:mT,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:pT,name:"hsl-adjustment-filter"});super({gpuProgram:t,glProgram:n,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:e.colorize?1:0,type:"f32"},uAlpha:{value:e.alpha,type:"f32"}}}}),Ya(this,"uniforms"),Ya(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,e)}get hue(){return this._hue}set hue(e){this._hue=e,this.uniforms.uHsl[0]=e*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(e){this.uniforms.uHsl[1]=e}get lightness(){return this.uniforms.uHsl[2]}set lightness(e){this.uniforms.uHsl[2]=e}get colorize(){return this.uniforms.uColorize===1}set colorize(e){this.uniforms.uColorize=e?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Ya(_T,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var vT=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,yT=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,bT=Object.defineProperty,ST=(r,e,t)=>e in r?bT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,qa=(r,e,t)=>(ST(r,typeof e!="symbol"?e+"":e,t),t);const TT=class dm extends Te{constructor(...e){let t=e[0]??{};if(Array.isArray(t)||"x"in t&&"y"in t||t instanceof Ke){Z("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in t?t.x:t[0],o="y"in t?t.y:t[1];t={velocity:{x:s,y:o}},e[1]!==void 0&&(t.kernelSize=e[1]),e[2]!==void 0&&(t.offset=e[2])}t={...dm.DEFAULT_OPTIONS,...t};const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:yT,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:vT,name:"motion-blur-filter"});super({gpuProgram:n,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:t.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(t.kernelSize??5),type:"i32"},uOffset:{value:t.offset,type:"f32"}}}}),qa(this,"uniforms"),qa(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,t)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};qa(TT,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var CT=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,wT=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,PT=Object.defineProperty,AT=(r,e,t)=>e in r?PT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,vs=(r,e,t)=>(AT(r,typeof e!="symbol"?e+"":e,t),t);const ET=class pm extends Te{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(Z("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),t={replacements:t},e[1]&&(t.tolerance=e[1]),e[2]&&(t.maxColors=e[2])),t={...pm.DEFAULT_OPTIONS,...t};const n=t.maxColors??t.replacements.length,i=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:wT.replace(/\$\{MAX_COLORS\}/g,n.toFixed(0)),entryPoint:"mainFragment"}}),s=ge.from({vertex:Re,fragment:CT.replace(/\$\{MAX_COLORS\}/g,n.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*n),type:"vec3<f32>",size:n},uTargetColors:{value:new Float32Array(3*n),type:"vec3<f32>",size:n},uTolerance:{value:t.tolerance,type:"f32"}}}}),vs(this,"uniforms"),vs(this,"_replacements",[]),vs(this,"_maxColors"),this._maxColors=n,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=t.replacements}set replacements(e){const t=this.uniforms.uOriginalColors,n=this.uniforms.uTargetColors,i=e.length,s=new de;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);t[i*3]=-1;let o,a,l;for(let h=0;h<i;h++){const f=e[h];s.setValue(f[0]),[o,a,l]=s.toArray(),t[h*3]=o,t[h*3+1]=a,t[h*3+2]=l,s.setValue(f[1]),[o,a,l]=s.toArray(),n[h*3]=o,n[h*3+1]=a,n[h*3+2]=l}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){Z("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return Z("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};vs(ET,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var MT=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,BT=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,RT=Object.defineProperty,IT=(r,e,t)=>e in r?RT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ka=(r,e,t)=>(IT(r,typeof e!="symbol"?e+"":e,t),t);const FT=class mm extends Te{constructor(e){e={...mm.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:BT,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:MT,name:"old-film-filter"});super({gpuProgram:t,glProgram:n,resources:{oldFilmUniforms:{uSepia:{value:e.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ka(this,"uniforms"),Ka(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,e)}apply(e,t,n,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,t,n,i)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}};Ka(FT,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var OT=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,UT=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,kT=Object.defineProperty,DT=(r,e,t)=>e in r?kT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$r=(r,e,t)=>(DT(r,typeof e!="symbol"?e+"":e,t),t);const ju=class Lr extends Te{constructor(...e){let t=e[0]??{};typeof t=="number"&&(Z("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),t={thickness:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.quality=e[2]),e[3]!==void 0&&(t.alpha=e[3]),e[4]!==void 0&&(t.knockout=e[4])),t={...Lr.DEFAULT_OPTIONS,...t};const n=t.quality??.1,i=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:UT,entryPoint:"mainFragment"}}),s=ge.from({vertex:Re,fragment:OT.replace(/\$\{ANGLE_STEP\}/,Lr.getAngleStep(n).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:t.knockout?1:0,type:"f32"}}}}),$r(this,"uniforms"),$r(this,"_thickness"),$r(this,"_quality"),$r(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Lr.getAngleStep(n),this._color=new de,this.color=t.color??0,Object.assign(this,t)}apply(e,t,n,i){this.uniforms.uThickness[0]=this.thickness/t.source.width,this.uniforms.uThickness[1]=this.thickness/t.source.height,e.applyFilter(this,t,n,i)}static getAngleStep(e){return parseFloat((Math.PI*2/Math.max(e*Lr.MAX_SAMPLES,Lr.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,n,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(e){this._quality=e,this.uniforms.uAngleStep=Lr.getAngleStep(e)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};$r(ju,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});$r(ju,"MIN_SAMPLES",1);$r(ju,"MAX_SAMPLES",100);var GT=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,zT=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,LT=Object.defineProperty,NT=(r,e,t)=>e in r?LT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ys=(r,e,t)=>(NT(r,typeof e!="symbol"?e+"":e,t),t);const HT=class gm extends Te{constructor(...e){let t=e[0]??{};if(typeof t=="number"){if(Z("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),t={angle:t},e[1]){const s="x"in e[1]?e[1].x:e[1][0],o="y"in e[1]?e[1].y:e[1][1];t.center={x:s,y:o}}e[2]&&(t.kernelSize=e[2]),e[3]&&(t.radius=e[3])}t={...gm.DEFAULT_OPTIONS,...t};const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:zT,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:GT,name:"radial-blur-filter"});super({gpuProgram:n,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uKernelSize:{value:t.kernelSize,type:"i32"},uRadius:{value:t.radius,type:"f32"}}}}),ys(this,"uniforms"),ys(this,"_angle"),ys(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,t)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}};ys(HT,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var $T=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,WT=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,VT=Object.defineProperty,jT=(r,e,t)=>e in r?VT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Za=(r,e,t)=>(jT(r,typeof e!="symbol"?e+"":e,t),t);const XT=class xm extends Te{constructor(e){e={...xm.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:WT,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:$T,name:"reflection-filter"});super({gpuProgram:t,glProgram:n,resources:{reflectionUniforms:{uMirror:{value:e.mirror?1:0,type:"f32"},uBoundary:{value:e.boundary,type:"f32"},uAmplitude:{value:e.amplitude,type:"vec2<f32>"},uWavelength:{value:e.waveLength,type:"vec2<f32>"},uAlpha:{value:e.alpha,type:"vec2<f32>"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Za(this,"uniforms"),Za(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,e)}apply(e,t,n,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,t,n,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=e?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}};Za(XT,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var YT=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,qT=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,KT=Object.defineProperty,ZT=(r,e,t)=>e in r?KT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,_m=(r,e,t)=>(ZT(r,typeof e!="symbol"?e+"":e,t),t);const QT=class vm extends Te{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(Z("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),t={red:t},e[1]!==void 0&&(t.green=e[1]),e[2]!==void 0&&(t.blue=e[2])),t={...vm.DEFAULT_OPTIONS,...t};const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:qT,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:YT,name:"rgb-split-filter"});super({gpuProgram:n,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}}}}),_m(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,t)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}};_m(QT,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var JT=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,eC=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,tC=Object.defineProperty,rC=(r,e,t)=>e in r?tC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Qa=(r,e,t)=>(rC(r,typeof e!="symbol"?e+"":e,t),t);const ym=class bm extends Te{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(Z("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),t={center:t,...e[1]},e[2]!==void 0&&(t.time=e[2])),t={...bm.DEFAULT_OPTIONS,...t};const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:eC,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:JT,name:"shockwave-filter"});super({gpuProgram:n,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:t.time,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uSpeed:{value:t.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Qa(this,"uniforms"),Qa(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,t)}apply(e,t,n,i){this.uniforms.uTime=this.time,e.applyFilter(this,t,n,i)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}};Qa(ym,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});let qC=ym;var nC=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,iC=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,sC=Object.defineProperty,oC=(r,e,t)=>e in r?sC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,bs=(r,e,t)=>(oC(r,typeof e!="symbol"?e+"":e,t),t);const aC=class Sm extends Te{constructor(...e){let t=e[0]??{};if(t instanceof Q&&(Z("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),t={lightMap:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.alpha=e[2])),t={...Sm.DEFAULT_OPTIONS,...t},!t.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:iC,entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:nC,name:"simple-lightmap-filter"});super({gpuProgram:n,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:t.lightMap.source,uMapSampler:t.lightMap.source.style}}),bs(this,"uniforms"),bs(this,"_color"),bs(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new de,this.color=t.color??0,Object.assign(this,t)}apply(e,t,n,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,n,i)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,n,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};bs(aC,"DEFAULT_OPTIONS",{lightMap:Q.WHITE,color:0,alpha:1});var uC=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uDimensions;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uDimensions - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uDimensions * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,lC=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uDimensions: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uDimensions = tiltShiftUniforms.uDimensions;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uDimensions - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uDimensions * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,cC=Object.defineProperty,hC=(r,e,t)=>e in r?cC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ja=(r,e,t)=>(hC(r,typeof e!="symbol"?e+"":e,t),t);const fC=class Tm extends Te{constructor(e){const{width:t,height:n}=tp.defaultOptions;e={...Tm.DEFAULT_OPTIONS,start:{x:0,y:n/2},end:{x:t,y:n/2},...e};const i=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:lC,entryPoint:"mainFragment"}}),s=ge.from({vertex:Re,fragment:uC,name:"tilt-shift-axis-filter"});super({gpuProgram:i,glProgram:s,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([e.blur,e.gradientBlur]),type:"vec2<f32>"},uStart:{value:e.start,type:"vec2<f32>"},uEnd:{value:e.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([t,n]),type:"vec2<f32>"}}}}),Ja(this,"uniforms"),Ja(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=e.axis}updateDimensions(e){const{uDimensions:t}=this.uniforms;t[0]=e.frame.width,t[1]=e.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const e=this.uniforms.uEnd,t=this.uniforms.uStart,n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:n/s,this.uniforms.uDelta[1]=o?n/s:i/s}};Ja(fC,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var dC=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,pC=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,mC=Object.defineProperty,gC=(r,e,t)=>e in r?mC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Cm=(r,e,t)=>(gC(r,typeof e!="symbol"?e+"":e,t),t);const xC=class wm extends Te{constructor(e){e={...wm.DEFAULT_OPTIONS,...e};const t=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:pC,entryPoint:"mainFragment"}}),n=ge.from({vertex:Re,fragment:dC,name:"twist-filter"});super({gpuProgram:t,glProgram:n,resources:{twistUniforms:{uTwist:{value:[e.radius??0,e.angle??0],type:"vec2<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},...e}),Cm(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}};Cm(xC,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var _C=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,vC=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,yC=Object.defineProperty,bC=(r,e,t)=>e in r?yC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Pm=(r,e,t)=>(bC(r,typeof e!="symbol"?e+"":e,t),t);const SC=class Am extends Te{constructor(e){e={...Am.DEFAULT_OPTIONS,...e};const t=e.maxKernelSize??32,n=me.from({vertex:{source:Ie,entryPoint:"mainVertex"},fragment:{source:vC.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),entryPoint:"mainFragment"}}),i=ge.from({vertex:Re,fragment:_C.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:n,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:e.strength,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Pm(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,e)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}};Pm(SC,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});function eu(){}function TC(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function Em(r){return r()}function fh(){return Object.create(null)}function Fn(r){r.forEach(Em)}function Mm(r){return typeof r=="function"}function KC(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function CC(r){return Object.keys(r).length===0}function ZC(r,e){r.appendChild(e)}function QC(r,e,t){r.insertBefore(e,t||null)}function wC(r){r.parentNode&&r.parentNode.removeChild(r)}function JC(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function ew(r){return document.createElement(r)}function tw(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function Bm(r){return document.createTextNode(r)}function rw(){return Bm(" ")}function nw(){return Bm("")}function iw(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function sw(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function ow(r){return r===""?null:+r}function PC(r){return Array.from(r.childNodes)}function aw(r,e){r.value=e??""}let yi;function or(r){yi=r}function AC(){if(!yi)throw new Error("Function called outside component initialization");return yi}function uw(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const _n=[],dh=[];let Tn=[];const ph=[],EC=Promise.resolve();let tu=!1;function MC(){tu||(tu=!0,EC.then(Xu))}function ru(r){Tn.push(r)}const ma=new Set;let hn=0;function Xu(){if(hn!==0)return;const r=yi;do{try{for(;hn<_n.length;){const e=_n[hn];hn++,or(e),BC(e.$$)}}catch(e){throw _n.length=0,hn=0,e}for(or(null),_n.length=0,hn=0;dh.length;)dh.pop()();for(let e=0;e<Tn.length;e+=1){const t=Tn[e];ma.has(t)||(ma.add(t),t())}Tn.length=0}while(_n.length);for(;ph.length;)ph.pop()();tu=!1,ma.clear(),or(r)}function BC(r){if(r.fragment!==null){r.update(),Fn(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(ru)}}function RC(r){const e=[],t=[];Tn.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Tn=e}const Ss=new Set;let Wr;function IC(){Wr={r:0,c:[],p:Wr}}function FC(){Wr.r||Fn(Wr.c),Wr=Wr.p}function Yu(r,e){r&&r.i&&(Ss.delete(r),r.i(e))}function Rm(r,e,t,n){if(r&&r.o){if(Ss.has(r))return;Ss.add(r),Wr.c.push(()=>{Ss.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function lw(r,e){const t=e.token={};function n(i,s,o,a){if(e.token!==t)return;e.resolved=a;let l=e.ctx;o!==void 0&&(l=l.slice(),l[o]=a);const h=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((p,x)=>{x!==s&&p&&(IC(),Rm(p,1,1,()=>{e.blocks[x]===p&&(e.blocks[x]=null)}),FC())}):e.block.d(1),h.c(),Yu(h,1),h.m(e.mount(),e.anchor),f=!0),e.block=h,e.blocks&&(e.blocks[s]=h),f&&Xu()}if(TC(r)){const i=AC();if(r.then(s=>{or(i),n(e.then,1,e.value,s),or(null)},s=>{if(or(i),n(e.catch,2,e.error,s),or(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,r),!0;e.resolved=r}}function cw(r,e,t){const n=e.slice(),{resolved:i}=r;r.current===r.then&&(n[r.value]=i),r.current===r.catch&&(n[r.error]=i),r.block.p(n,t)}function hw(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function fw(r,e){Rm(r,1,1,()=>{e.delete(r.key)})}function dw(r,e,t,n,i,s,o,a,l,h,f,p){let x=r.length,y=s.length,b=x;const T={};for(;b--;)T[r[b].key]=b;const C=[],P=new Map,F=new Map,B=[];for(b=y;b--;){const m=p(i,s,b),V=t(m);let z=o.get(V);z?B.push(()=>z.p(m,e)):(z=h(V,m),z.c()),P.set(V,C[b]=z),V in T&&F.set(V,Math.abs(b-T[V]))}const O=new Set,W=new Set;function ne(m){Yu(m,1),m.m(a,f),o.set(m.key,m),f=m.first,y--}for(;x&&y;){const m=C[y-1],V=r[x-1],z=m.key,$=V.key;m===V?(f=m.first,x--,y--):P.has($)?!o.has(z)||O.has(z)?ne(m):W.has($)?x--:F.get(z)>F.get($)?(W.add(z),ne(m)):(O.add($),x--):(l(V,o),x--)}for(;x--;){const m=r[x];P.has(m.key)||l(m,o)}for(;y;)ne(C[y-1]);return Fn(B),C}function pw(r){r&&r.c()}function OC(r,e,t){const{fragment:n,after_update:i}=r.$$;n&&n.m(e,t),ru(()=>{const s=r.$$.on_mount.map(Em).filter(Mm);r.$$.on_destroy?r.$$.on_destroy.push(...s):Fn(s),r.$$.on_mount=[]}),i.forEach(ru)}function UC(r,e){const t=r.$$;t.fragment!==null&&(RC(t.after_update),Fn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function kC(r,e){r.$$.dirty[0]===-1&&(_n.push(r),MC(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function mw(r,e,t,n,i,s,o=null,a=[-1]){const l=yi;or(r);const h=r.$$={fragment:null,ctx:[],props:s,update:eu,not_equal:i,bound:fh(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:fh(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(h.root);let f=!1;if(h.ctx=t?t(r,e.props||{},(p,x,...y)=>{const b=y.length?y[0]:x;return h.ctx&&i(h.ctx[p],h.ctx[p]=b)&&(!h.skip_bound&&h.bound[p]&&h.bound[p](b),f&&kC(r,p)),x}):[],h.update(),f=!0,Fn(h.before_update),h.fragment=n?n(h.ctx):!1,e.target){if(e.hydrate){const p=PC(e.target);h.fragment&&h.fragment.l(p),p.forEach(wC)}else h.fragment&&h.fragment.c();e.intro&&Yu(r.$$.fragment),OC(r,e.target,e.anchor),Xu()}or(l)}class gw{constructor(){te(this,"$$");te(this,"$$set")}$destroy(){UC(this,1),this.$destroy=eu}$on(e,t){if(!Mm(t))return eu;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!CC(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const DC="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(DC);export{jC as $,Ix as A,dw as B,Ze as C,Fn as D,Qy as E,WC as F,fw as G,ow as H,aw as I,de as J,nS as K,wx as L,XC as M,Tr as N,St as O,VC as P,LC as Q,Le as R,gw as S,Gu as T,gi as U,Ms as V,ts as W,Wl as X,C0 as Y,qf as Z,Ts as _,NC as a,YC as a0,qC as a1,m_ as a2,x_ as a3,__ as a4,v_ as a5,m2 as a6,Sf as a7,x2 as a8,V2 as a9,$2 as aa,F2 as ab,Rp as ac,O2 as ad,A2 as ae,v2 as af,x0 as ag,f0 as ah,tw as b,sw as c,QC as d,ke as e,FC as f,IC as g,Yu as h,mw as i,wC as j,uw as k,iw as l,hw as m,nw as n,JC as o,eu as p,pw as q,OC as r,KC as s,Rm as t,UC as u,lw as v,ew as w,rw as x,ZC as y,cw as z};
