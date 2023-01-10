!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("colorgen",[],r):"object"==typeof exports?exports.colorgen=r():t.colorgen=r()}(this,(()=>(()=>{"use strict";var t={d:(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};function e(){return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]}function o(t){let r,e,o;if(Array.isArray(t)?(r=t[0],e=t[1],o=t[2]):Object.keys(t).includes("r")&&Object.keys(t).includes("g")&&Object.keys(t).includes("b")?(r=t.r,e=t.g,o=t.b):Object.keys(t).includes("R")&&Object.keys(t).includes("G")&&Object.keys(t).includes("B")?(r=t.R,e=t.G,o=t.B):(r=t>>>16&255,e=t>>>8&255,o=255&t),void 0===r||void 0===e||void 0===o)throw Error("invalid color!");return[r,e,o]}function n(t,r){t=o(t),r=o(r);let e=(t[0]+r[0])/2,n=t[0]-r[0],a=t[1]-r[1],i=t[2]-r[2];return Math.sqrt((512+e)*n*n/256+4*a*a+(767-e)*i*i/256)}function i(t,r){let e,n,a;return t=o(t),r=o(r),e=t[0]-r[0],n=t[1]-r[1],a=t[2]-r[2],Math.sqrt(e*e+n*n+a*a)}function l(t,r){let e,o,n,a,i,l,u,c,d,f,h,s,M;return e=t[0]*Math.PI*2,o=r[0]*Math.PI*2,i=t[1],l=r[1],n=t[2],a=r[2],u=i*n*Math.cos(e),c=l*a*Math.cos(o),d=i*n*Math.sin(e),f=l*a*Math.sin(o),h=u-c,s=d-f,M=n-a,Math.sqrt(h*h+s*s+M*M)}function u(t,r){let e=((t=o(t))[0]+t[1]+t[2])/3,n=(e+2*Math.random()*r-r)/e;return[t[0]*n,t[1]*n,t[2]*n]}function c(t,r,e){if(0===r)return[255*e,255*e,255*e];if(r<0||r>1||e<0||e>1)throw new Error("Bad HSB Value");t-=Math.floor(t);let o=parseInt(6*t),n=6*t-o,a=e*(1-r),i=e*(1-r*n),l=e*(1-r*(1-n));switch(o){case 0:return v(e,l,a);case 1:return v(i,e,a);case 2:return v(a,e,l);case 3:return v(a,i,e);case 4:return v(l,a,e);case 5:return v(e,a,i);default:throw new Error("impossible to convert hsb to rgb")}}function d(t,r,e){let o,n,a=[0,0,0];if(t<r?(o=t,n=r):(o=r,n=t),e>n?n=e:e<o&&(o=e),a[2]=n/255,a[1]=0==n?0:(n-o)/n,0==a[1])a[0]=0;else{let i=6*(n-o);a[0]=t==n?(r-e)/i:r==n?1/3+(e-t)/i:2/3+(t-r)/i,a[0]<0&&a[0]++}return a}function f(t,r,e,o,n=1,a=1){let i=new Array(t);if(r<0||r>1||e<0||e>1)throw new Error("bad gradient range");if(r>e){let t=r;r=e,e=t}let l=e-r;switch(o){default:throw new Error("unknown gradiendRGB type");case"UR":for(let t=0;t<i.length;t++){let e=r+Math.random()*l;for(;e<0;)e++;e%=1,i[t]=c(e,n,a)}return i;case"G":for(let e=0;e<i.length;e++)i[e]=c(r+e*(l/t),n,a);return i;case"JG":for(let e=0;e<i.length;e++){let o=l/t/2,u=r+e*l/t+(2*Math.random()-1)*o;for(;u<0;)u++;u%=1,i[e]=c(u,n,a)}return i;case"GR":for(let t=0;t<i.length;t++){let e=r+.618033988749895*t%1;for(;e<0;)e++;e%=1,i[t]=c(e,n,a)}return i}}function h(t,r,e,o,n,a=1,i=1,l=0,u=0){void 0===n&&(n=Math.random());let d=new Array(t);for(let t=0;t<d.length;t++){let f=Math.random()*(r+e+o);f<r?f-=r/2:f+=f>=r&&f<r+e?l-e:u-o;let h=f+n;for(;h<0;)h++;h%=1,d[t]=c(h,a,i)}return d}function s(t,r,e,o=1,n=1,a=0,i=0){return void 0===e&&(e=Math.random()),h(t,r,0,0,e,o,n,a,i)}function M(t,r,e,o,n=1,a=1,i=0){return void 0===o&&(o=Math.random()),h(t,r,e,0,o,n,a,.5,i)}function m(t,r,e,o,n,a,i=1,l=1){if(void 0===a&&(a=Math.random()),e>=2*n||o>=2*n)throw new Error("bad ranges for split complementary scheme");return h(t,r,e,o,a,i,l,180-n,180+n)}function g(t,r,e,o,n,a=1,i=1){return void 0===n&&(n=Math.random()),h(t,r,e,o,n,a,i,.33333,.66667)}function y(t,r,e,n){t=o(t),r=o(r),e=o(e);let a=Math.floor(3*Math.random()),i=0==a?Math.random()*n:Math.random(),l=1==a?Math.random()*n:Math.random(),u=2==a?Math.random()*n:Math.random(),c=i+l+u;return i/=c,l/=c,u/=c,[i*t[0]+l*r[0]+u*e[0],i*t[1]+l*r[1]+u*e[1],i*t[2]+l*r[2]+u*e[2]]}function b(t){return(299*(t=o(t))[0]+587*t[1]+114*t[2])/1e3>=128}function p(t){let r,e,n;return t=o(t),r=Math.round(t[0]),e=Math.round(t[1]),n=Math.round(t[2]),r<<=16,e<<=8,r|e|n}function B(t,r){t=o(t);let e=Math.round(t[0]),n=Math.round(t[1]),i=Math.round(t[2]);return a<<=24,e<<=16,n<<=8,r|e|n|i}function w(t,r,e=!1){if(t=o(t),void 0!==r){if(!e)return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${r})`;let o=to32BitRGB(t,r).toString(16);for(;o.length<6;)o="0"+o;return"#"+o}{let r=p(t).toString(16);for(;r.length<6;)r="0"+r;return"#"+r}}function v(t,r,e){return[255*t,255*r,255*e]}return t.r(r),t.d(r,{HSBtoRGB:()=>c,RGBtoHSB:()=>d,analogousColor:()=>s,colorDistance:()=>n,colorDistanceHSB:()=>l,colorDistanceUnweightedRGB:()=>i,complementaryColor:()=>M,gradientRGB:()=>f,parseColor:()=>o,randomOffset:()=>u,randomRGB:()=>e,splitcomplementaryColor:()=>m,standerHarmonyColor:()=>h,to24BitRGB:()=>p,to32BitARGB:()=>B,toCSSString:()=>w,triadColor:()=>g,triadMixing:()=>y,yiq:()=>b}),r})()));