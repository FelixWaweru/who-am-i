(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1131:function(e,n,t){Promise.resolve().then(t.t.bind(t,7281,23)),Promise.resolve().then(t.t.bind(t,9538,23)),Promise.resolve().then(t.bind(t,8725))},9538:function(){},7281:function(){},8725:function(e,n,t){"use strict";t.r(n),t.d(n,{Analytics:function(){return d},track:function(){return s}});var r=t(9747),o=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function i(){return"undefined"!=typeof window}function a(){return"production"}function c(){let e=i()?window.vam:a();return e||"production"}function u(){return"production"===c()}function l(){return"development"===c()}function s(e,n){var t,r;if(!i()){let e="[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";if(u())console.warn(e);else throw Error(e);return}if(!n){null==(t=window.va)||t.call(window,"event",{name:e});return}try{let t=function(e,n){if(!e)return;let t=e,r=[];for(let[o,i]of Object.entries(e))"object"==typeof i&&null!==i&&(n.strip?t=function(e,{[e]:n,...t}){return t}(o,t):r.push(o));if(r.length>0&&!n.strip)throw Error(`The following properties are not valid: ${r.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);return t}(n,{strip:u()});null==(r=window.va)||r.call(window,"event",{name:e,data:t})}catch(e){e instanceof Error&&l()&&console.error(e)}}function d({beforeSend:e,debug:n=!0,mode:t="auto"}){return(0,r.useEffect)(()=>{!function(e={debug:!0}){var n;if(!i())return;(function(e="auto"){if("auto"===e){window.vam=a();return}window.vam=e})(e.mode),o(),e.beforeSend&&(null==(n=window.va)||n.call(window,"beforeSend",e.beforeSend));let t=l()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${t}"]`))return;let r=document.createElement("script");r.src=t,r.defer=!0,r.setAttribute("data-sdkn","@vercel/analytics"),r.setAttribute("data-sdkv","1.1.1"),r.onerror=()=>{let e=l()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${e}`)},l()&&!1===e.debug&&r.setAttribute("data-debug","false"),document.head.appendChild(r)}({beforeSend:e,debug:n,mode:t})},[e,n,t]),null}}},function(e){e.O(0,[571,720,744],function(){return e(e.s=1131)}),_N_E=e.O()}]);