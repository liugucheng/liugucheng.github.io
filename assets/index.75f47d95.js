import{d as xe,h as lt,D as De,r as Xt,o as Ee,f as Me,w as wt,a as Z,b as zt,l as Ht,z as Ce,A as Te,_ as Oe}from"./index.afbe2883.js";/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */function Wt(a,t){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),i.push.apply(i,e)}return i}function re(a){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Wt(Object(i),!0).forEach(function(e){_e(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):Wt(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function pt(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pt=function(t){return typeof t}:pt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(a)}function Ne(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Ut(a,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function Ae(a,t,i){return t&&Ut(a.prototype,t),i&&Ut(a,i),a}function _e(a,t,i){return t in a?Object.defineProperty(a,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[t]=i,a}function ne(a){return Re(a)||Se(a)||Ie(a)||ke()}function Re(a){if(Array.isArray(a))return xt(a)}function Se(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Ie(a,t){if(!!a){if(typeof a=="string")return xt(a,t);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return xt(a,t)}}function xt(a,t){(t==null||t>a.length)&&(t=a.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=a[i];return e}function ke(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gt=typeof window<"u"&&typeof window.document<"u",P=gt?window:{},_t=gt&&P.document.documentElement?"ontouchstart"in P.document.documentElement:!1,Rt=gt?"PointerEvent"in P:!1,y="cropper",St="all",oe="crop",se="move",he="zoom",$="e",F="w",Q="s",H="n",it="ne",at="nw",rt="se",nt="sw",Dt="".concat(y,"-crop"),Vt="".concat(y,"-disabled"),_="".concat(y,"-hidden"),jt="".concat(y,"-hide"),Le="".concat(y,"-invisible"),ut="".concat(y,"-modal"),Et="".concat(y,"-move"),st="".concat(y,"Action"),ft="".concat(y,"Preview"),It="crop",ce="move",le="none",Mt="crop",Ct="cropend",Tt="cropmove",Ot="cropstart",Gt="dblclick",Be=_t?"touchstart":"mousedown",Pe=_t?"touchmove":"mousemove",Ye=_t?"touchend touchcancel":"mouseup",$t=Rt?"pointerdown":Be,Ft=Rt?"pointermove":Pe,qt=Rt?"pointerup pointercancel":Ye,Qt="ready",Zt="resize",Kt="wheel",Nt="zoom",Jt="image/jpeg",Xe=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,ze=/^data:/,He=/^data:image\/jpeg;base64,/,We=/^img|canvas$/i,fe=200,de=100,te={viewMode:0,dragMode:It,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:fe,minContainerHeight:de,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Ue='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',Ve=Number.isNaN||P.isNaN;function u(a){return typeof a=="number"&&!Ve(a)}var ee=function(t){return t>0&&t<1/0};function bt(a){return typeof a>"u"}function q(a){return pt(a)==="object"&&a!==null}var je=Object.prototype.hasOwnProperty;function K(a){if(!q(a))return!1;try{var t=a.constructor,i=t.prototype;return t&&i&&je.call(i,"isPrototypeOf")}catch{return!1}}function A(a){return typeof a=="function"}var Ge=Array.prototype.slice;function pe(a){return Array.from?Array.from(a):Ge.call(a)}function E(a,t){return a&&A(t)&&(Array.isArray(a)||u(a.length)?pe(a).forEach(function(i,e){t.call(a,i,e,a)}):q(a)&&Object.keys(a).forEach(function(i){t.call(a,a[i],i,a)})),a}var x=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),n=1;n<i;n++)e[n-1]=arguments[n];return q(t)&&e.length>0&&e.forEach(function(r){q(r)&&Object.keys(r).forEach(function(o){t[o]=r[o]})}),t},$e=/\.\d*(?:0|9){12}\d*$/;function tt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return $e.test(a)?Math.round(a*t)/t:a}var Fe=/^width|height|left|top|marginLeft|marginTop$/;function W(a,t){var i=a.style;E(t,function(e,n){Fe.test(n)&&u(e)&&(e="".concat(e,"px")),i[n]=e})}function qe(a,t){return a.classList?a.classList.contains(t):a.className.indexOf(t)>-1}function O(a,t){if(!!t){if(u(a.length)){E(a,function(e){O(e,t)});return}if(a.classList){a.classList.add(t);return}var i=a.className.trim();i?i.indexOf(t)<0&&(a.className="".concat(i," ").concat(t)):a.className=t}}function B(a,t){if(!!t){if(u(a.length)){E(a,function(i){B(i,t)});return}if(a.classList){a.classList.remove(t);return}a.className.indexOf(t)>=0&&(a.className=a.className.replace(t,""))}}function J(a,t,i){if(!!t){if(u(a.length)){E(a,function(e){J(e,t,i)});return}i?O(a,t):B(a,t)}}var Qe=/([a-z\d])([A-Z])/g;function kt(a){return a.replace(Qe,"$1-$2").toLowerCase()}function At(a,t){return q(a[t])?a[t]:a.dataset?a.dataset[t]:a.getAttribute("data-".concat(kt(t)))}function ht(a,t,i){q(i)?a[t]=i:a.dataset?a.dataset[t]=i:a.setAttribute("data-".concat(kt(t)),i)}function Ze(a,t){if(q(a[t]))try{delete a[t]}catch{a[t]=void 0}else if(a.dataset)try{delete a.dataset[t]}catch{a.dataset[t]=void 0}else a.removeAttribute("data-".concat(kt(t)))}var ue=/\s\s*/,ge=function(){var a=!1;if(gt){var t=!1,i=function(){},e=Object.defineProperty({},"once",{get:function(){return a=!0,t},set:function(r){t=r}});P.addEventListener("test",i,e),P.removeEventListener("test",i,e)}return a}();function k(a,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=i;t.trim().split(ue).forEach(function(r){if(!ge){var o=a.listeners;o&&o[r]&&o[r][i]&&(n=o[r][i],delete o[r][i],Object.keys(o[r]).length===0&&delete o[r],Object.keys(o).length===0&&delete a.listeners)}a.removeEventListener(r,n,e)})}function I(a,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=i;t.trim().split(ue).forEach(function(r){if(e.once&&!ge){var o=a.listeners,s=o===void 0?{}:o;n=function(){delete s[r][i],a.removeEventListener(r,n,e);for(var l=arguments.length,h=new Array(l),c=0;c<l;c++)h[c]=arguments[c];i.apply(a,h)},s[r]||(s[r]={}),s[r][i]&&a.removeEventListener(r,s[r][i],e),s[r][i]=n,a.listeners=s}a.addEventListener(r,n,e)})}function et(a,t,i){var e;return A(Event)&&A(CustomEvent)?e=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0}):(e=document.createEvent("CustomEvent"),e.initCustomEvent(t,!0,!0,i)),a.dispatchEvent(e)}function me(a){var t=a.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var yt=P.location,Ke=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ie(a){var t=a.match(Ke);return t!==null&&(t[1]!==yt.protocol||t[2]!==yt.hostname||t[3]!==yt.port)}function ae(a){var t="timestamp=".concat(new Date().getTime());return a+(a.indexOf("?")===-1?"?":"&")+t}function ot(a){var t=a.rotate,i=a.scaleX,e=a.scaleY,n=a.translateX,r=a.translateY,o=[];u(n)&&n!==0&&o.push("translateX(".concat(n,"px)")),u(r)&&r!==0&&o.push("translateY(".concat(r,"px)")),u(t)&&t!==0&&o.push("rotate(".concat(t,"deg)")),u(i)&&i!==1&&o.push("scaleX(".concat(i,")")),u(e)&&e!==1&&o.push("scaleY(".concat(e,")"));var s=o.length?o.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function Je(a){var t=re({},a),i=0;return E(a,function(e,n){delete t[n],E(t,function(r){var o=Math.abs(e.startX-r.startX),s=Math.abs(e.startY-r.startY),d=Math.abs(e.endX-r.endX),l=Math.abs(e.endY-r.endY),h=Math.sqrt(o*o+s*s),c=Math.sqrt(d*d+l*l),f=(c-h)/h;Math.abs(f)>Math.abs(i)&&(i=f)})}),i}function dt(a,t){var i=a.pageX,e=a.pageY,n={endX:i,endY:e};return t?n:re({startX:i,startY:e},n)}function ti(a){var t=0,i=0,e=0;return E(a,function(n){var r=n.startX,o=n.startY;t+=r,i+=o,e+=1}),t/=e,i/=e,{pageX:t,pageY:i}}function U(a){var t=a.aspectRatio,i=a.height,e=a.width,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",r=ee(e),o=ee(i);if(r&&o){var s=i*t;n==="contain"&&s>e||n==="cover"&&s<e?i=e/t:e=i*t}else r?i=e/t:o&&(e=i*t);return{width:e,height:i}}function ei(a){var t=a.width,i=a.height,e=a.degree;if(e=Math.abs(e)%180,e===90)return{width:i,height:t};var n=e%90*Math.PI/180,r=Math.sin(n),o=Math.cos(n),s=t*o+i*r,d=t*r+i*o;return e>90?{width:d,height:s}:{width:s,height:d}}function ii(a,t,i,e){var n=t.aspectRatio,r=t.naturalWidth,o=t.naturalHeight,s=t.rotate,d=s===void 0?0:s,l=t.scaleX,h=l===void 0?1:l,c=t.scaleY,f=c===void 0?1:c,m=i.aspectRatio,g=i.naturalWidth,b=i.naturalHeight,v=e.fillColor,M=v===void 0?"transparent":v,T=e.imageSmoothingEnabled,D=T===void 0?!0:T,Y=e.imageSmoothingQuality,R=Y===void 0?"low":Y,p=e.maxWidth,w=p===void 0?1/0:p,C=e.maxHeight,S=C===void 0?1/0:C,X=e.minWidth,V=X===void 0?0:X,j=e.minHeight,z=j===void 0?0:j,L=document.createElement("canvas"),N=L.getContext("2d"),G=U({aspectRatio:m,width:w,height:S}),ct=U({aspectRatio:m,width:V,height:z},"cover"),mt=Math.min(G.width,Math.max(ct.width,g)),vt=Math.min(G.height,Math.max(ct.height,b)),Lt=U({aspectRatio:n,width:w,height:S}),Bt=U({aspectRatio:n,width:V,height:z},"cover"),Pt=Math.min(Lt.width,Math.max(Bt.width,r)),Yt=Math.min(Lt.height,Math.max(Bt.height,o)),be=[-Pt/2,-Yt/2,Pt,Yt];return L.width=tt(mt),L.height=tt(vt),N.fillStyle=M,N.fillRect(0,0,mt,vt),N.save(),N.translate(mt/2,vt/2),N.rotate(d*Math.PI/180),N.scale(h,f),N.imageSmoothingEnabled=D,N.imageSmoothingQuality=R,N.drawImage.apply(N,[a].concat(ne(be.map(function(ye){return Math.floor(tt(ye))})))),N.restore(),L}var ve=String.fromCharCode;function ai(a,t,i){var e="";i+=t;for(var n=t;n<i;n+=1)e+=ve(a.getUint8(n));return e}var ri=/^data:.*,/;function ni(a){var t=a.replace(ri,""),i=atob(t),e=new ArrayBuffer(i.length),n=new Uint8Array(e);return E(n,function(r,o){n[o]=i.charCodeAt(o)}),e}function oi(a,t){for(var i=[],e=8192,n=new Uint8Array(a);n.length>0;)i.push(ve.apply(null,pe(n.subarray(0,e)))),n=n.subarray(e);return"data:".concat(t,";base64,").concat(btoa(i.join("")))}function si(a){var t=new DataView(a),i;try{var e,n,r;if(t.getUint8(0)===255&&t.getUint8(1)===216)for(var o=t.byteLength,s=2;s+1<o;){if(t.getUint8(s)===255&&t.getUint8(s+1)===225){n=s;break}s+=1}if(n){var d=n+4,l=n+10;if(ai(t,d,4)==="Exif"){var h=t.getUint16(l);if(e=h===18761,(e||h===19789)&&t.getUint16(l+2,e)===42){var c=t.getUint32(l+4,e);c>=8&&(r=l+c)}}}if(r){var f=t.getUint16(r,e),m,g;for(g=0;g<f;g+=1)if(m=r+g*12+2,t.getUint16(m,e)===274){m+=8,i=t.getUint16(m,e),t.setUint16(m,1,e);break}}}catch{i=1}return i}function hi(a){var t=0,i=1,e=1;switch(a){case 2:i=-1;break;case 3:t=-180;break;case 4:e=-1;break;case 5:t=90,e=-1;break;case 6:t=90;break;case 7:t=90,i=-1;break;case 8:t=-90;break}return{rotate:t,scaleX:i,scaleY:e}}var ci={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,n=this.cropper,r=Number(i.minContainerWidth),o=Number(i.minContainerHeight);O(n,_),B(t,_);var s={width:Math.max(e.offsetWidth,r>=0?r:fe),height:Math.max(e.offsetHeight,o>=0?o:de)};this.containerData=s,W(n,{width:s.width,height:s.height}),O(t,_),B(n,_)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,n=Math.abs(i.rotate)%180===90,r=n?i.naturalHeight:i.naturalWidth,o=n?i.naturalWidth:i.naturalHeight,s=r/o,d=t.width,l=t.height;t.height*s>t.width?e===3?d=t.height*s:l=t.width/s:e===3?l=t.width/s:d=t.height*s;var h={aspectRatio:s,naturalWidth:r,naturalHeight:o,width:d,height:l};this.canvasData=h,this.limited=e===1||e===2,this.limitCanvas(!0,!0),h.width=Math.min(Math.max(h.width,h.minWidth),h.maxWidth),h.height=Math.min(Math.max(h.height,h.minHeight),h.maxHeight),h.left=(t.width-h.width)/2,h.top=(t.height-h.height)/2,h.oldLeft=h.left,h.oldTop=h.top,this.initialCanvasData=x({},h)},limitCanvas:function(t,i){var e=this.options,n=this.containerData,r=this.canvasData,o=this.cropBoxData,s=e.viewMode,d=r.aspectRatio,l=this.cropped&&o;if(t){var h=Number(e.minCanvasWidth)||0,c=Number(e.minCanvasHeight)||0;s>1?(h=Math.max(h,n.width),c=Math.max(c,n.height),s===3&&(c*d>h?h=c*d:c=h/d)):s>0&&(h?h=Math.max(h,l?o.width:0):c?c=Math.max(c,l?o.height:0):l&&(h=o.width,c=o.height,c*d>h?h=c*d:c=h/d));var f=U({aspectRatio:d,width:h,height:c});h=f.width,c=f.height,r.minWidth=h,r.minHeight=c,r.maxWidth=1/0,r.maxHeight=1/0}if(i)if(s>(l?0:1)){var m=n.width-r.width,g=n.height-r.height;r.minLeft=Math.min(0,m),r.minTop=Math.min(0,g),r.maxLeft=Math.max(0,m),r.maxTop=Math.max(0,g),l&&this.limited&&(r.minLeft=Math.min(o.left,o.left+(o.width-r.width)),r.minTop=Math.min(o.top,o.top+(o.height-r.height)),r.maxLeft=o.left,r.maxTop=o.top,s===2&&(r.width>=n.width&&(r.minLeft=Math.min(0,m),r.maxLeft=Math.max(0,m)),r.height>=n.height&&(r.minTop=Math.min(0,g),r.maxTop=Math.max(0,g))))}else r.minLeft=-r.width,r.minTop=-r.height,r.maxLeft=n.width,r.maxTop=n.height},renderCanvas:function(t,i){var e=this.canvasData,n=this.imageData;if(i){var r=ei({width:n.naturalWidth*Math.abs(n.scaleX||1),height:n.naturalHeight*Math.abs(n.scaleY||1),degree:n.rotate||0}),o=r.width,s=r.height,d=e.width*(o/e.naturalWidth),l=e.height*(s/e.naturalHeight);e.left-=(d-e.width)/2,e.top-=(l-e.height)/2,e.width=d,e.height=l,e.aspectRatio=o/s,e.naturalWidth=o,e.naturalHeight=s,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,W(this.canvas,x({width:e.width,height:e.height},ot({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,n=e.naturalWidth*(i.width/i.naturalWidth),r=e.naturalHeight*(i.height/i.naturalHeight);x(e,{width:n,height:r,left:(i.width-n)/2,top:(i.height-r)/2}),W(this.image,x({width:e.width,height:e.height},ot(x({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,n=Number(t.autoCropArea)||.8,r={width:i.width,height:i.height};e&&(i.height*e>i.width?r.height=r.width/e:r.width=r.height*e),this.cropBoxData=r,this.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*n),r.height=Math.max(r.minHeight,r.height*n),r.left=i.left+(i.width-r.width)/2,r.top=i.top+(i.height-r.height)/2,r.oldLeft=r.left,r.oldTop=r.top,this.initialCropBoxData=x({},r)},limitCropBox:function(t,i){var e=this.options,n=this.containerData,r=this.canvasData,o=this.cropBoxData,s=this.limited,d=e.aspectRatio;if(t){var l=Number(e.minCropBoxWidth)||0,h=Number(e.minCropBoxHeight)||0,c=s?Math.min(n.width,r.width,r.width+r.left,n.width-r.left):n.width,f=s?Math.min(n.height,r.height,r.height+r.top,n.height-r.top):n.height;l=Math.min(l,n.width),h=Math.min(h,n.height),d&&(l&&h?h*d>l?h=l/d:l=h*d:l?h=l/d:h&&(l=h*d),f*d>c?f=c/d:c=f*d),o.minWidth=Math.min(l,c),o.minHeight=Math.min(h,f),o.maxWidth=c,o.maxHeight=f}i&&(s?(o.minLeft=Math.max(0,r.left),o.minTop=Math.max(0,r.top),o.maxLeft=Math.min(n.width,r.left+r.width)-o.width,o.maxTop=Math.min(n.height,r.top+r.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=n.width-o.width,o.maxTop=n.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&ht(this.face,st,e.width>=i.width&&e.height>=i.height?se:St),W(this.cropBox,x({width:e.width,height:e.height},ot({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),et(this.element,Mt,this.getData())}},li={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,n=i?this.crossOriginUrl:this.url,r=t.alt||"The image to preview",o=document.createElement("img");if(i&&(o.crossOrigin=i),o.src=n,o.alt=r,this.viewBox.appendChild(o),this.viewBoxImage=o,!!e){var s=e;typeof e=="string"?s=t.ownerDocument.querySelectorAll(e):e.querySelector&&(s=[e]),this.previews=s,E(s,function(d){var l=document.createElement("img");ht(d,ft,{width:d.offsetWidth,height:d.offsetHeight,html:d.innerHTML}),i&&(l.crossOrigin=i),l.src=n,l.alt=r,l.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',d.innerHTML="",d.appendChild(l)})}},resetPreview:function(){E(this.previews,function(t){var i=At(t,ft);W(t,{width:i.width,height:i.height}),t.innerHTML=i.html,Ze(t,ft)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,n=e.width,r=e.height,o=t.width,s=t.height,d=e.left-i.left-t.left,l=e.top-i.top-t.top;!this.cropped||this.disabled||(W(this.viewBoxImage,x({width:o,height:s},ot(x({translateX:-d,translateY:-l},t)))),E(this.previews,function(h){var c=At(h,ft),f=c.width,m=c.height,g=f,b=m,v=1;n&&(v=f/n,b=r*v),r&&b>m&&(v=m/r,g=n*v,b=m),W(h,{width:g,height:b}),W(h.getElementsByTagName("img")[0],x({width:o*v,height:s*v},ot(x({translateX:-d*v,translateY:-l*v},t))))}))}},fi={bind:function(){var t=this.element,i=this.options,e=this.cropper;A(i.cropstart)&&I(t,Ot,i.cropstart),A(i.cropmove)&&I(t,Tt,i.cropmove),A(i.cropend)&&I(t,Ct,i.cropend),A(i.crop)&&I(t,Mt,i.crop),A(i.zoom)&&I(t,Nt,i.zoom),I(e,$t,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&I(e,Kt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&I(e,Gt,this.onDblclick=this.dblclick.bind(this)),I(t.ownerDocument,Ft,this.onCropMove=this.cropMove.bind(this)),I(t.ownerDocument,qt,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&I(window,Zt,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;A(i.cropstart)&&k(t,Ot,i.cropstart),A(i.cropmove)&&k(t,Tt,i.cropmove),A(i.cropend)&&k(t,Ct,i.cropend),A(i.crop)&&k(t,Mt,i.crop),A(i.zoom)&&k(t,Nt,i.zoom),k(e,$t,this.onCropStart),i.zoomable&&i.zoomOnWheel&&k(e,Kt,this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&k(e,Gt,this.onDblclick),k(t.ownerDocument,Ft,this.onCropMove),k(t.ownerDocument,qt,this.onCropEnd),i.responsive&&k(window,Zt,this.onResize)}},di={resize:function(){if(!this.disabled){var t=this.options,i=this.container,e=this.containerData,n=i.offsetWidth/e.width,r=i.offsetHeight/e.height,o=Math.abs(n-1)>Math.abs(r-1)?n:r;if(o!==1){var s,d;t.restore&&(s=this.getCanvasData(),d=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(E(s,function(l,h){s[h]=l*o})),this.setCropBoxData(E(d,function(l,h){d[h]=l*o})))}}},dblclick:function(){this.disabled||this.options.dragMode===le||this.setDragMode(qe(this.dragBox,Dt)?ce:It)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,n=1;this.disabled||(t.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(u(i)&&i!==1||u(e)&&e!==0||t.ctrlKey))){var n=this.options,r=this.pointers,o;t.changedTouches?E(t.changedTouches,function(s){r[s.identifier]=dt(s)}):r[t.pointerId||0]=dt(t),Object.keys(r).length>1&&n.zoomable&&n.zoomOnTouch?o=he:o=At(t.target,st),!!Xe.test(o)&&et(this.element,Ot,{originalEvent:t,action:o})!==!1&&(t.preventDefault(),this.action=o,this.cropping=!1,o===oe&&(this.cropping=!0,O(this.dragBox,ut)))}},cropMove:function(t){var i=this.action;if(!(this.disabled||!i)){var e=this.pointers;t.preventDefault(),et(this.element,Tt,{originalEvent:t,action:i})!==!1&&(t.changedTouches?E(t.changedTouches,function(n){x(e[n.identifier]||{},dt(n,!0))}):x(e[t.pointerId||0]||{},dt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?E(t.changedTouches,function(n){delete e[n.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,J(this.dragBox,ut,this.cropped&&this.options.modal)),et(this.element,Ct,{originalEvent:t,action:i}))}}},pi={change:function(t){var i=this.options,e=this.canvasData,n=this.containerData,r=this.cropBoxData,o=this.pointers,s=this.action,d=i.aspectRatio,l=r.left,h=r.top,c=r.width,f=r.height,m=l+c,g=h+f,b=0,v=0,M=n.width,T=n.height,D=!0,Y;!d&&t.shiftKey&&(d=c&&f?c/f:1),this.limited&&(b=r.minLeft,v=r.minTop,M=b+Math.min(n.width,e.width,e.left+e.width),T=v+Math.min(n.height,e.height,e.top+e.height));var R=o[Object.keys(o)[0]],p={x:R.endX-R.startX,y:R.endY-R.startY},w=function(S){switch(S){case $:m+p.x>M&&(p.x=M-m);break;case F:l+p.x<b&&(p.x=b-l);break;case H:h+p.y<v&&(p.y=v-h);break;case Q:g+p.y>T&&(p.y=T-g);break}};switch(s){case St:l+=p.x,h+=p.y;break;case $:if(p.x>=0&&(m>=M||d&&(h<=v||g>=T))){D=!1;break}w($),c+=p.x,c<0&&(s=F,c=-c,l-=c),d&&(f=c/d,h+=(r.height-f)/2);break;case H:if(p.y<=0&&(h<=v||d&&(l<=b||m>=M))){D=!1;break}w(H),f-=p.y,h+=p.y,f<0&&(s=Q,f=-f,h-=f),d&&(c=f*d,l+=(r.width-c)/2);break;case F:if(p.x<=0&&(l<=b||d&&(h<=v||g>=T))){D=!1;break}w(F),c-=p.x,l+=p.x,c<0&&(s=$,c=-c,l-=c),d&&(f=c/d,h+=(r.height-f)/2);break;case Q:if(p.y>=0&&(g>=T||d&&(l<=b||m>=M))){D=!1;break}w(Q),f+=p.y,f<0&&(s=H,f=-f,h-=f),d&&(c=f*d,l+=(r.width-c)/2);break;case it:if(d){if(p.y<=0&&(h<=v||m>=M)){D=!1;break}w(H),f-=p.y,h+=p.y,c=f*d}else w(H),w($),p.x>=0?m<M?c+=p.x:p.y<=0&&h<=v&&(D=!1):c+=p.x,p.y<=0?h>v&&(f-=p.y,h+=p.y):(f-=p.y,h+=p.y);c<0&&f<0?(s=nt,f=-f,c=-c,h-=f,l-=c):c<0?(s=at,c=-c,l-=c):f<0&&(s=rt,f=-f,h-=f);break;case at:if(d){if(p.y<=0&&(h<=v||l<=b)){D=!1;break}w(H),f-=p.y,h+=p.y,c=f*d,l+=r.width-c}else w(H),w(F),p.x<=0?l>b?(c-=p.x,l+=p.x):p.y<=0&&h<=v&&(D=!1):(c-=p.x,l+=p.x),p.y<=0?h>v&&(f-=p.y,h+=p.y):(f-=p.y,h+=p.y);c<0&&f<0?(s=rt,f=-f,c=-c,h-=f,l-=c):c<0?(s=it,c=-c,l-=c):f<0&&(s=nt,f=-f,h-=f);break;case nt:if(d){if(p.x<=0&&(l<=b||g>=T)){D=!1;break}w(F),c-=p.x,l+=p.x,f=c/d}else w(Q),w(F),p.x<=0?l>b?(c-=p.x,l+=p.x):p.y>=0&&g>=T&&(D=!1):(c-=p.x,l+=p.x),p.y>=0?g<T&&(f+=p.y):f+=p.y;c<0&&f<0?(s=it,f=-f,c=-c,h-=f,l-=c):c<0?(s=rt,c=-c,l-=c):f<0&&(s=at,f=-f,h-=f);break;case rt:if(d){if(p.x>=0&&(m>=M||g>=T)){D=!1;break}w($),c+=p.x,f=c/d}else w(Q),w($),p.x>=0?m<M?c+=p.x:p.y>=0&&g>=T&&(D=!1):c+=p.x,p.y>=0?g<T&&(f+=p.y):f+=p.y;c<0&&f<0?(s=at,f=-f,c=-c,h-=f,l-=c):c<0?(s=nt,c=-c,l-=c):f<0&&(s=it,f=-f,h-=f);break;case se:this.move(p.x,p.y),D=!1;break;case he:this.zoom(Je(o),t),D=!1;break;case oe:if(!p.x||!p.y){D=!1;break}Y=me(this.cropper),l=R.startX-Y.left,h=R.startY-Y.top,c=r.minWidth,f=r.minHeight,p.x>0?s=p.y>0?rt:it:p.x<0&&(l-=c,s=p.y>0?nt:at),p.y<0&&(h-=f),this.cropped||(B(this.cropBox,_),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}D&&(r.width=c,r.height=f,r.left=l,r.top=h,this.action=s,this.renderCropBox()),E(o,function(C){C.startX=C.endX,C.startY=C.endY})}},ui={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&O(this.dragBox,ut),B(this.cropBox,_),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=x({},this.initialImageData),this.canvasData=x({},this.initialCanvasData),this.cropBoxData=x({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(x(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),B(this.dragBox,ut),O(this.cropBox,_)),this},replace:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,E(this.previews,function(e){e.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,B(this.cropper,Vt)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,O(this.cropper,Vt)),this},destroy:function(){var t=this.element;return t[y]?(t[y]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,n=e.left,r=e.top;return this.moveTo(bt(t)?t:n+Number(t),bt(i)?i:r+Number(i))},moveTo:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(u(t)&&(e.left=t,n=!0),u(i)&&(e.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var n=this.options,r=this.canvasData,o=r.width,s=r.height,d=r.naturalWidth,l=r.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&n.zoomable){var h=d*t,c=l*t;if(et(this.element,Nt,{ratio:t,oldRatio:o/d,originalEvent:e})===!1)return this;if(e){var f=this.pointers,m=me(this.cropper),g=f&&Object.keys(f).length?ti(f):{pageX:e.pageX,pageY:e.pageY};r.left-=(h-o)*((g.pageX-m.left-r.left)/o),r.top-=(c-s)*((g.pageY-m.top-r.top)/s)}else K(i)&&u(i.x)&&u(i.y)?(r.left-=(h-o)*((i.x-r.left)/o),r.top-=(c-s)*((i.y-r.top)/s)):(r.left-=(h-o)/2,r.top-=(c-s)/2);r.width=h,r.height=c,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),u(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,u(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(u(i)?i:1,t)},scale:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(u(t)&&(e.scaleX=t,n=!0),u(i)&&(e.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.options,e=this.imageData,n=this.canvasData,r=this.cropBoxData,o;if(this.ready&&this.cropped){o={x:r.left-n.left,y:r.top-n.top,width:r.width,height:r.height};var s=e.width/e.naturalWidth;if(E(o,function(h,c){o[c]=h/s}),t){var d=Math.round(o.y+o.height),l=Math.round(o.x+o.width);o.x=Math.round(o.x),o.y=Math.round(o.y),o.width=l-o.x,o.height=d-o.y}}else o={x:0,y:0,width:0,height:0};return i.rotatable&&(o.rotate=e.rotate||0),i.scalable&&(o.scaleX=e.scaleX||1,o.scaleY=e.scaleY||1),o},setData:function(t){var i=this.options,e=this.imageData,n=this.canvasData,r={};if(this.ready&&!this.disabled&&K(t)){var o=!1;i.rotatable&&u(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(u(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),u(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var s=e.width/e.naturalWidth;u(t.x)&&(r.left=t.x*s+n.left),u(t.y)&&(r.top=t.y*s+n.top),u(t.width)&&(r.width=t.width*s),u(t.height)&&(r.height=t.height*s),this.setCropBoxData(r)}return this},getContainerData:function(){return this.ready?x({},this.containerData):{}},getImageData:function(){return this.sized?x({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&E(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&K(t)&&(u(t.left)&&(i.left=t.left),u(t.top)&&(i.top=t.top),u(t.width)?(i.width=t.width,i.height=t.width/e):u(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,i;return this.ready&&this.cropped&&(i={left:t.left,top:t.top,width:t.width,height:t.height}),i||{}},setCropBoxData:function(t){var i=this.cropBoxData,e=this.options.aspectRatio,n,r;return this.ready&&this.cropped&&!this.disabled&&K(t)&&(u(t.left)&&(i.left=t.left),u(t.top)&&(i.top=t.top),u(t.width)&&t.width!==i.width&&(n=!0,i.width=t.width),u(t.height)&&t.height!==i.height&&(r=!0,i.height=t.height),e&&(n?i.height=i.width/e:r&&(i.width=i.height*e)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,e=ii(this.image,this.imageData,i,t);if(!this.cropped)return e;var n=this.getData(),r=n.x,o=n.y,s=n.width,d=n.height,l=e.width/Math.floor(i.naturalWidth);l!==1&&(r*=l,o*=l,s*=l,d*=l);var h=s/d,c=U({aspectRatio:h,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),f=U({aspectRatio:h,width:t.minWidth||0,height:t.minHeight||0},"cover"),m=U({aspectRatio:h,width:t.width||(l!==1?e.width:s),height:t.height||(l!==1?e.height:d)}),g=m.width,b=m.height;g=Math.min(c.width,Math.max(f.width,g)),b=Math.min(c.height,Math.max(f.height,b));var v=document.createElement("canvas"),M=v.getContext("2d");v.width=tt(g),v.height=tt(b),M.fillStyle=t.fillColor||"transparent",M.fillRect(0,0,g,b);var T=t.imageSmoothingEnabled,D=T===void 0?!0:T,Y=t.imageSmoothingQuality;M.imageSmoothingEnabled=D,Y&&(M.imageSmoothingQuality=Y);var R=e.width,p=e.height,w=r,C=o,S,X,V,j,z,L;w<=-s||w>R?(w=0,S=0,V=0,z=0):w<=0?(V=-w,w=0,S=Math.min(R,s+w),z=S):w<=R&&(V=0,S=Math.min(s,R-w),z=S),S<=0||C<=-d||C>p?(C=0,X=0,j=0,L=0):C<=0?(j=-C,C=0,X=Math.min(p,d+C),L=X):C<=p&&(j=0,X=Math.min(d,p-C),L=X);var N=[w,C,S,X];if(z>0&&L>0){var G=g/s;N.push(V*G,j*G,z*G,L*G)}return M.drawImage.apply(M,[e].concat(ne(N.map(function(ct){return Math.floor(tt(ct))})))),v},setAspectRatio:function(t){var i=this.options;return!this.disabled&&!bt(t)&&(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,n=this.face;if(this.ready&&!this.disabled){var r=t===It,o=i.movable&&t===ce;t=r||o?t:le,i.dragMode=t,ht(e,st,t),J(e,Dt,r),J(e,Et,o),i.cropBoxMovable||(ht(n,st,t),J(n,Dt,r),J(n,Et,o))}return this}},gi=P.Cropper,we=function(){function a(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Ne(this,a),!t||!We.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=x({},te,K(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return Ae(a,[{key:"init",value:function(){var i=this.element,e=i.tagName.toLowerCase(),n;if(!i[y]){if(i[y]=this,e==="img"){if(this.isImg=!0,n=i.getAttribute("src")||"",this.originalUrl=n,!n)return;n=i.src}else e==="canvas"&&window.HTMLCanvasElement&&(n=i.toDataURL());this.load(n)}}},{key:"load",value:function(i){var e=this;if(!!i){this.url=i,this.imageData={};var n=this.element,r=this.options;if(!r.rotatable&&!r.scalable&&(r.checkOrientation=!1),!r.checkOrientation||!window.ArrayBuffer){this.clone();return}if(ze.test(i)){He.test(i)?this.read(ni(i)):this.clone();return}var o=new XMLHttpRequest,s=this.clone.bind(this);this.reloading=!0,this.xhr=o,o.onabort=s,o.onerror=s,o.ontimeout=s,o.onprogress=function(){o.getResponseHeader("content-type")!==Jt&&o.abort()},o.onload=function(){e.read(o.response)},o.onloadend=function(){e.reloading=!1,e.xhr=null},r.checkCrossOrigin&&ie(i)&&n.crossOrigin&&(i=ae(i)),o.open("GET",i,!0),o.responseType="arraybuffer",o.withCredentials=n.crossOrigin==="use-credentials",o.send()}}},{key:"read",value:function(i){var e=this.options,n=this.imageData,r=si(i),o=0,s=1,d=1;if(r>1){this.url=oi(i,Jt);var l=hi(r);o=l.rotate,s=l.scaleX,d=l.scaleY}e.rotatable&&(n.rotate=o),e.scalable&&(n.scaleX=s,n.scaleY=d),this.clone()}},{key:"clone",value:function(){var i=this.element,e=this.url,n=i.crossOrigin,r=e;this.options.checkCrossOrigin&&ie(e)&&(n||(n="anonymous"),r=ae(e)),this.crossOrigin=n,this.crossOriginUrl=r;var o=document.createElement("img");n&&(o.crossOrigin=n),o.src=r||e,o.alt=i.alt||"The image to crop",this.image=o,o.onload=this.start.bind(this),o.onerror=this.stop.bind(this),O(o,jt),i.parentNode.insertBefore(o,i.nextSibling)}},{key:"start",value:function(){var i=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var n=P.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(P.navigator.userAgent),r=function(l,h){x(i.imageData,{naturalWidth:l,naturalHeight:h,aspectRatio:l/h}),i.initialImageData=x({},i.imageData),i.sizing=!1,i.sized=!0,i.build()};if(e.naturalWidth&&!n){r(e.naturalWidth,e.naturalHeight);return}var o=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=o,o.onload=function(){r(o.width,o.height),n||s.removeChild(o)},o.src=e.src,n||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(o))}},{key:"stop",value:function(){var i=this.image;i.onload=null,i.onerror=null,i.parentNode.removeChild(i),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var i=this.element,e=this.options,n=this.image,r=i.parentNode,o=document.createElement("div");o.innerHTML=Ue;var s=o.querySelector(".".concat(y,"-container")),d=s.querySelector(".".concat(y,"-canvas")),l=s.querySelector(".".concat(y,"-drag-box")),h=s.querySelector(".".concat(y,"-crop-box")),c=h.querySelector(".".concat(y,"-face"));this.container=r,this.cropper=s,this.canvas=d,this.dragBox=l,this.cropBox=h,this.viewBox=s.querySelector(".".concat(y,"-view-box")),this.face=c,d.appendChild(n),O(i,_),r.insertBefore(s,i.nextSibling),this.isImg||B(n,jt),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,O(h,_),e.guides||O(h.getElementsByClassName("".concat(y,"-dashed")),_),e.center||O(h.getElementsByClassName("".concat(y,"-center")),_),e.background&&O(s,"".concat(y,"-bg")),e.highlight||O(c,Le),e.cropBoxMovable&&(O(c,Et),ht(c,st,St)),e.cropBoxResizable||(O(h.getElementsByClassName("".concat(y,"-line")),_),O(h.getElementsByClassName("".concat(y,"-point")),_)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),A(e.ready)&&I(i,Qt,e.ready,{once:!0}),et(i,Qt)}}},{key:"unbuild",value:function(){!this.ready||(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),B(this.element,_))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=gi,a}},{key:"setDefaults",value:function(i){x(te,K(i)&&i)}}]),a}();x(we.prototype,ci,li,fi,di,pi,ui);const mi=we;const vi=a=>(Ce("data-v-61a44334"),a=a(),Te(),a),wi={class:"croppers-container"},bi={class:"img-cropper"},yi=["src"],xi=vi(()=>Z("div",{class:"img-preview"},null,-1)),Di={style:{"margin-top":"20px"}},Ei=xe({__name:"index",setup(a){const t=lt(),i=lt("https://img2.baidu.com/it/u=3747114911,414713113&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"),e=lt(),n=lt(null);De(()=>{r()});const r=()=>{n.value=new mi(t.value,{viewMode:1,dragMode:"none",initialAspectRatio:1,background:!0,autoCropArea:.8,aspectRatio:1,preview:".img-preview"})},o=()=>{e.value.click()},s=l=>{const h=l.target.files[0],c=window.URL||window.webkitURL;n.value.replace(c.createObjectURL(h))},d=()=>{n.value.getCroppedCanvas().toBlob(function(l){const h=document.createElement("a");h.href=URL.createObjectURL(l),h.setAttribute("download",""),document.body.appendChild(h),h.click(),document.body.removeChild(h)}),n.value.crop()};return(l,h)=>{const c=Xt("el-button"),f=Xt("el-card");return Ee(),Me(f,{shadow:"hover",header:"cropper \u56FE\u7247\u88C1\u526A"},{default:wt(()=>[Z("div",wi,[Z("div",bi,[Z("img",{ref_key:"imgRef",ref:t,src:i.value},null,8,yi)]),xi]),Z("div",Di,[zt(c,{type:"primary",onClick:o},{default:wt(()=>[Ht("\u9009\u62E9\u56FE\u7247")]),_:1}),zt(c,{type:"primary",onClick:d},{default:wt(()=>[Ht("\u4E0B\u8F7D\u56FE\u7247")]),_:1}),Z("input",{ref_key:"fileRef",ref:e,style:{display:"none"},type:"file",accept:"image/*",onChange:s},null,544)])]),_:1})}}});const Ci=Oe(Ei,[["__scopeId","data-v-61a44334"]]);export{Ci as default};
