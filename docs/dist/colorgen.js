!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("colorgen",[],r):"object"==typeof exports?exports.colorgen=r():t.colorgen=r()}(this,(()=>(()=>{"use strict";var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};function e(){return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]}function n(t){let r,e,n;if(Array.isArray(t))r=t[0],e=t[1],n=t[2];else if(Object.keys(t).includes("r")&&Object.keys(t).includes("g")&&Object.keys(t).includes("b"))r=t.r,e=t.g,n=t.b;else if(Object.keys(t).includes("R")&&Object.keys(t).includes("G")&&Object.keys(t).includes("B"))r=t.R,e=t.G,n=t.B;else if("string"==typeof t&&t.startsWith("#")){let o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);r=parseInt(o[1],16),e=parseInt(o[2],16),n=parseInt(o[3],16)}else r=t>>>16&255,e=t>>>8&255,n=255&t;if(void 0===r||void 0===e||void 0===n)throw Error("invalid color!");return[r,e,n]}function o(t,r){t=n(t),r=n(r);let e=(t[0]+r[0])/2,o=t[0]-r[0],a=t[1]-r[1],i=t[2]-r[2];return Math.sqrt((512+e)*o*o/256+4*a*a+(767-e)*i*i/256)}function a(t,r){let e,o,a;return t=n(t),r=n(r),e=t[0]-r[0],o=t[1]-r[1],a=t[2]-r[2],Math.sqrt(e*e+o*o+a*a)}function i(t,r){let e,n,o,a,i,l,u,d,c,f,s,h,M;return e=t[0]*Math.PI*2,n=r[0]*Math.PI*2,i=t[1],l=r[1],o=t[2],a=r[2],u=i*o*Math.cos(e),d=l*a*Math.cos(n),c=i*o*Math.sin(e),f=l*a*Math.sin(n),s=u-d,h=c-f,M=o-a,Math.sqrt(s*s+h*h+M*M)}function l(t,r){let e=((t=n(t))[0]+t[1]+t[2])/3,o=(e+2*Math.random()*r-r)/e;return[t[0]*o,t[1]*o,t[2]*o]}function u(t,r,e){if(0===r)return[255*e,255*e,255*e];if(r<0||r>1||e<0||e>1)throw new Error("Bad HSB Value");t-=Math.floor(t);let n=parseInt(6*t),o=6*t-n,a=e*(1-r),i=e*(1-r*o),l=e*(1-r*(1-o));switch(n){case 0:return B(e,l,a);case 1:return B(i,e,a);case 2:return B(a,e,l);case 3:return B(a,i,e);case 4:return B(l,a,e);case 5:return B(e,a,i);default:throw new Error("impossible to convert hsb to rgb")}}function d(t,r,e){let n,o,a=[0,0,0];if(t<r?(n=t,o=r):(n=r,o=t),e>o?o=e:e<n&&(n=e),a[2]=o/255,a[1]=0==o?0:(o-n)/o,0==a[1])a[0]=0;else{let i=6*(o-n);a[0]=t==o?(r-e)/i:r==o?1/3+(e-t)/i:2/3+(t-r)/i,a[0]<0&&a[0]++}return a}function c(t,r,e,n,o=1,a=1){let i=new Array(t);if(r<0||r>1||e<0||e>1)throw new Error("bad gradient range");if(r>e){let t=r;r=e,e=t}let l=e-r;switch(n){default:throw new Error("unknown gradiendRGB type");case"UR":for(let t=0;t<i.length;t++){let e=r+Math.random()*l;for(;e<0;)e++;e%=1,i[t]=u(e,o,a)}return i;case"G":for(let e=0;e<i.length;e++)i[e]=u(r+e*(l/t),o,a);return i;case"JG":for(let e=0;e<i.length;e++){let n=l/t/2,d=r+e*l/t+(2*Math.random()-1)*n;for(;d<0;)d++;d%=1,i[e]=u(d,o,a)}return i;case"GR":for(let t=0;t<i.length;t++){let e=r+.618033988749895*t%1;for(;e<0;)e++;e%=1,i[t]=u(e,o,a)}return i}}function f(t,r,e,n,o,a=1,i=1,l=0,d=0){void 0===o&&(o=Math.random());let c=new Array(t);for(let t=0;t<c.length;t++){let f=Math.random()*(r+e+n);f<r?f-=r/2:f+=f>=r&&f<r+e?l-e:d-n;let s=f+o;for(;s<0;)s++;s%=1,c[t]=u(s,a,i)}return c}function s(t,r,e,n=1,o=1,a=0,i=0){return void 0===e&&(e=Math.random()),f(t,r,0,0,e,n,o,a,i)}function h(t,r,e,n,o=1,a=1,i=0){return void 0===n&&(n=Math.random()),f(t,r,e,0,n,o,a,.5,i)}function M(t,r,e,n,o,a,i=1,l=1){if(void 0===a&&(a=Math.random()),e>=2*o||n>=2*o)throw new Error("bad ranges for split complementary scheme");return f(t,r,e,n,a,i,l,180-o,180+o)}function m(t,r,e,n,o,a=1,i=1){return void 0===o&&(o=Math.random()),f(t,r,e,n,o,a,i,.33333,.66667)}function g(t,r,e,o){t=n(t),r=n(r),e=n(e);let a=Math.floor(3*Math.random()),i=0==a?Math.random()*o:Math.random(),l=1==a?Math.random()*o:Math.random(),u=2==a?Math.random()*o:Math.random(),d=i+l+u;return i/=d,l/=d,u/=d,[i*t[0]+l*r[0]+u*e[0],i*t[1]+l*r[1]+u*e[1],i*t[2]+l*r[2]+u*e[2]]}function y(t){return(299*(t=n(t))[0]+587*t[1]+114*t[2])/1e3>=128}function p(t){let r,e,o;return t=n(t),r=Math.round(t[0]),e=Math.round(t[1]),o=Math.round(t[2]),r<<=16,e<<=8,r|e|o}function b(t,r,e=!1){t=n(t);let o=Math.round(t[0]),a=Math.round(t[1]),i=Math.round(t[2]),l=255*r;return e?(o<<=24,a<<=16,i<<=8,o|a|i|l):(l<<=24,o<<=16,a<<=8,l|o|a|i)}function w(t,r,e=!1){if(t=n(t),void 0!==r){if(!e)return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${r})`;let n=b(t,r,!0).toString(16);for(;n.length<6;)n="0"+n;return"#"+n}{let r=p(t).toString(16);for(;r.length<6;)r="0"+r;return"#"+r}}function B(t,r,e){return[255*t,255*r,255*e]}return t.r(r),t.d(r,{HSBtoRGB:()=>u,RGBtoHSB:()=>d,analogousColor:()=>s,colorDistance:()=>o,colorDistanceHSB:()=>i,colorDistanceUnweightedRGB:()=>a,complementaryColor:()=>h,gradientRGB:()=>c,parseColor:()=>n,randomOffset:()=>l,randomRGB:()=>e,splitcomplementaryColor:()=>M,standerHarmonyColor:()=>f,to24BitRGB:()=>p,to32BitARGB:()=>b,toCSSString:()=>w,triadColor:()=>m,triadMixing:()=>g,yiq:()=>y}),r})()));