(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();function S(){}function _e(t){return t()}function pe(){return Object.create(null)}function z(t){t.forEach(_e)}function se(t){return typeof t=="function"}function Ve(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function We(t){return Object.keys(t).length===0}function Ke(t,...e){if(t==null)return S;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function x(t,e,l){t.$$.on_destroy.push(Ke(e,l))}const Ge=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in Ge;function a(t,e){t.appendChild(e)}function b(t,e,l){t.insertBefore(e,l||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function A(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function _(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function C(){return U(" ")}function Y(){return U("")}function R(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function le(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Je(t){return Array.from(t.childNodes)}function Z(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e){t.value=e??""}function P(t,e,l){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e){o.selected=!0;return}}(!l||e!==void 0)&&(t.selectedIndex=-1)}function oe(t){const e=t.querySelector(":checked");return e&&e.__value}function Qe(t){const e={};for(const l of t)e[l.name]=l.value;return e}let X;function Q(t){X=t}function Xe(){if(!X)throw new Error("Function called outside component initialization");return X}function Ye(t){Xe().$$.on_mount.push(t)}const j=[],be=[];let D=[];const ge=[],Ze=Promise.resolve();let de=!1;function xe(){de||(de=!0,Ze.then(ze))}function V(t){D.push(t)}const ie=new Set;let H=0;function ze(){if(H!==0)return;const t=X;do{try{for(;H<j.length;){const e=j[H];H++,Q(e),et(e.$$)}}catch(e){throw j.length=0,H=0,e}for(Q(null),j.length=0,H=0;be.length;)be.pop()();for(let e=0;e<D.length;e+=1){const l=D[e];ie.has(l)||(ie.add(l),l())}D.length=0}while(j.length);for(;ge.length;)ge.pop()();de=!1,ie.clear(),Q(t)}function et(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}function tt(t){const e=[],l=[];D.forEach(n=>t.indexOf(n)===-1?e.push(n):l.push(n)),l.forEach(n=>n()),D=e}const lt=new Set;function nt(t,e){t&&t.i&&(lt.delete(t),t.i(e))}const ot=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ot];function it(t,e,l,n){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,l),n||V(()=>{const i=t.$$.on_mount.map(_e).filter(se);t.$$.on_destroy?t.$$.on_destroy.push(...i):z(i),t.$$.on_mount=[]}),r.forEach(V)}function rt(t,e){const l=t.$$;l.fragment!==null&&(tt(l.after_update),z(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function ct(t,e){t.$$.dirty[0]===-1&&(j.push(t),xe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(t,e,l,n,o,r,i,c=[-1]){const f=X;Q(t);const u=t.$$={fragment:null,ctx:[],props:r,update:S,not_equal:o,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:pe(),dirty:c,skip_bound:!1,root:e.target||f.$$.root};i&&i(u.root);let d=!1;if(u.ctx=l?l(t,e.props||{},(s,h,...p)=>{const L=p.length?p[0]:h;return u.ctx&&o(u.ctx[s],u.ctx[s]=L)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](L),d&&ct(t,s)),h}):[],u.update(),d=!0,z(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){const s=Je(e.target);u.fragment&&u.fragment.l(s),s.forEach(g)}else u.fragment&&u.fragment.c();e.intro&&nt(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),ze()}Q(f)}let Be;typeof HTMLElement=="function"&&(Be=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(_e).filter(se);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,l){this[t]=l}disconnectedCallback(){z(this.$$.on_disconnect)}$destroy(){rt(this,1),this.$destroy=S}$on(t,e){if(!se(e))return S;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(e),()=>{const n=l.indexOf(e);n!==-1&&l.splice(n,1)}}$set(t){this.$$set&&!We(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});let ee;const ft=new Uint8Array(16);function st(){if(!ee&&(ee=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ee))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ee(ft)}const y=[];for(let t=0;t<256;++t)y.push((t+256).toString(16).slice(1));function dt(t,e=0){return(y[t[e+0]]+y[t[e+1]]+y[t[e+2]]+y[t[e+3]]+"-"+y[t[e+4]]+y[t[e+5]]+"-"+y[t[e+6]]+y[t[e+7]]+"-"+y[t[e+8]]+y[t[e+9]]+"-"+y[t[e+10]]+y[t[e+11]]+y[t[e+12]]+y[t[e+13]]+y[t[e+14]]+y[t[e+15]]).toLowerCase()}const at=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ve={randomUUID:at};function re(t,e,l){if(ve.randomUUID&&!e&&!t)return ve.randomUUID();t=t||{};const n=t.random||(t.rng||st)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){l=l||0;for(let o=0;o<16;++o)e[l+o]=n[o];return e}return dt(n)}const I=[];function ne(t,e=S){let l;const n=new Set;function o(c){if(Ve(t,c)&&(t=c,l)){const f=!I.length;for(const u of n)u[1](),I.push(u,t);if(f){for(let u=0;u<I.length;u+=2)I[u][0](I[u+1]);I.length=0}}}function r(c){o(c(t))}function i(c,f=S){const u=[c,f];return n.add(u),n.size===1&&(l=e(o)||S),c(t),()=>{n.delete(u),n.size===0&&l&&(l(),l=null)}}return{set:o,update:r,subscribe:i}}const ce=ne(""),te=ne([]),ue=ne(null),fe=ne(null);function ke(t,e,l){const n=t.slice();return n[17]=e[l],n}function ye(t,e,l){const n=t.slice();return n[20]=e[l],n}function we(t,e,l){const n=t.slice();return n[23]=e[l],n}function $e(t,e,l){const n=t.slice();return n[17]=e[l],n}function Fe(t,e,l){const n=t.slice();return n[17]=e[l],n}function Ee(t,e,l){const n=t.slice();return n[23]=e[l],n}function Ce(t,e,l){const n=t.slice();return n[32]=e[l],n}function Le(t){let e,l,n,o,r,i,c,f,u,d,s,h,p,L,B,W,O,K,G,v,w,N,T,J,q=t[6],$=[];for(let m=0;m<q.length;m+=1)$[m]=Se(Ce(t,q,m));let F=t[4]==="File"&&Ne(t),E=t[4]==="Folder"&&Re(t);return{c(){e=_("form"),l=_("table"),n=_("tr"),o=_("td"),o.innerHTML='<label for="fileName">File/Folder Name:</label>',r=C(),i=_("td"),c=_("input"),f=C(),u=_("tr"),d=_("td"),d.innerHTML='<label for="type">Type:</label>',s=C(),h=_("td"),p=_("select");for(let m=0;m<$.length;m+=1)$[m].c();L=C(),F&&F.c(),B=C(),E&&E.c(),W=C(),O=_("tr"),K=_("td"),G=_("button"),G.textContent="Save",v=C(),w=_("td"),N=_("button"),N.textContent="Cancel",c.required=!0,le(c,"placeholder","Enter File/Folder Name"),p.required=!0,t[4]===void 0&&V(()=>t[11].call(p))},m(m,M){b(m,e,M),a(e,l),a(l,n),a(n,o),a(n,r),a(n,i),a(i,c),me(c,t[0]),a(l,f),a(l,u),a(u,d),a(u,s),a(u,h),a(h,p);for(let k=0;k<$.length;k+=1)$[k]&&$[k].m(p,null);P(p,t[4],!0),a(l,L),F&&F.m(l,null),a(l,B),E&&E.m(l,null),a(l,W),a(l,O),a(O,K),a(K,G),a(O,v),a(O,w),a(w,N),T||(J=[R(c,"input",t[10]),R(p,"change",t[11]),R(G,"click",t[7]),R(N,"click",t[8])],T=!0)},p(m,M){if(M[0]&1&&c.value!==m[0]&&me(c,m[0]),M[0]&64){q=m[6];let k;for(k=0;k<q.length;k+=1){const he=Ce(m,q,k);$[k]?$[k].p(he,M):($[k]=Se(he),$[k].c(),$[k].m(p,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=q.length}M[0]&80&&P(p,m[4]),m[4]==="File"?F?F.p(m,M):(F=Ne(m),F.c(),F.m(l,B)):F&&(F.d(1),F=null),m[4]==="Folder"?E?E.p(m,M):(E=Re(m),E.c(),E.m(l,W)):E&&(E.d(1),E=null)},d(m){m&&g(e),A($,m),F&&F.d(),E&&E.d(),T=!1,z(J)}}}function Se(t){let e,l=t[32]+"",n;return{c(){e=_("option"),n=U(l),e.__value=t[32],e.value=e.__value},m(o,r){b(o,e,r),a(e,n)},p:S,d(o){o&&g(e)}}}function Ne(t){let e,l,n,o,r,i,c,f=t[5],u=[];for(let d=0;d<f.length;d+=1)u[d]=Oe(Fe(t,f,d));return{c(){e=_("tr"),l=_("td"),l.innerHTML='<label for="folder">Select Folder:</label>',n=C(),o=_("td"),r=_("select");for(let d=0;d<u.length;d+=1)u[d].c();t[2]===void 0&&V(()=>t[12].call(r))},m(d,s){b(d,e,s),a(e,l),a(e,n),a(e,o),a(o,r);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(r,null);P(r,t[2],!0),i||(c=R(r,"change",t[12]),i=!0)},p(d,s){if(s[0]&32){f=d[5];let h;for(h=0;h<f.length;h+=1){const p=Fe(d,f,h);u[h]?u[h].p(p,s):(u[h]=Oe(p),u[h].c(),u[h].m(r,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=f.length}s[0]&36&&P(r,d[2])},d(d){d&&g(e),A(u,d),i=!1,c()}}}function Te(t){let e,l=t[17].files,n=[];for(let o=0;o<l.length;o+=1)n[o]=Ue(Ee(t,l,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=Y()},m(o,r){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,r);b(o,e,r)},p(o,r){if(r[0]&32){l=o[17].files;let i;for(i=0;i<l.length;i+=1){const c=Ee(o,l,i);n[i]?n[i].p(c,r):(n[i]=Ue(c),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},d(o){A(n,o),o&&g(e)}}}function Me(t){let e,l=t[23].name+"",n,o;return{c(){e=_("option"),n=U(l),e.__value=o=t[23],e.value=e.__value},m(r,i){b(r,e,i),a(e,n)},p(r,i){i[0]&32&&l!==(l=r[23].name+"")&&Z(n,l),i[0]&32&&o!==(o=r[23])&&(e.__value=o,e.value=e.__value)},d(r){r&&g(e)}}}function Ue(t){let e,l=t[23].type==="folder"&&Me(t);return{c(){l&&l.c(),e=Y()},m(n,o){l&&l.m(n,o),b(n,e,o)},p(n,o){n[23].type==="folder"?l?l.p(n,o):(l=Me(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(n){l&&l.d(n),n&&g(e)}}}function Oe(t){let e,l=t[17].name+"",n,o,r,i=t[17].files&&Te(t);return{c(){e=_("option"),n=U(l),i&&i.c(),r=Y(),e.__value=o=t[17],e.value=e.__value},m(c,f){b(c,e,f),a(e,n),i&&i.m(c,f),b(c,r,f)},p(c,f){f[0]&32&&l!==(l=c[17].name+"")&&Z(n,l),f[0]&32&&o!==(o=c[17])&&(e.__value=o,e.value=e.__value),c[17].files?i?i.p(c,f):(i=Te(c),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},d(c){c&&g(e),i&&i.d(c),c&&g(r)}}}function Re(t){let e,l,n,o,r,i,c,f,u=t[5],d=[];for(let s=0;s<u.length;s+=1)d[s]=Ae($e(t,u,s));return{c(){e=_("tr"),l=_("td"),l.innerHTML='<label for="folder">Select Level:</label>',n=C(),o=_("td"),r=_("select"),i=_("option"),i.textContent="At Root";for(let s=0;s<d.length;s+=1)d[s].c();i.__value="At Root",i.value=i.__value,t[3]===void 0&&V(()=>t[13].call(r))},m(s,h){b(s,e,h),a(e,l),a(e,n),a(e,o),a(o,r),a(r,i);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(r,null);P(r,t[3],!0),c||(f=R(r,"change",t[13]),c=!0)},p(s,h){if(h[0]&32){u=s[5];let p;for(p=0;p<u.length;p+=1){const L=$e(s,u,p);d[p]?d[p].p(L,h):(d[p]=Ae(L),d[p].c(),d[p].m(r,null))}for(;p<d.length;p+=1)d[p].d(1);d.length=u.length}h[0]&40&&P(r,s[3])},d(s){s&&g(e),A(d,s),c=!1,f()}}}function Ae(t){let e,l=t[17].name+"",n,o;return{c(){e=_("option"),n=U(l),e.__value=o=t[17],e.value=e.__value},m(r,i){b(r,e,i),a(e,n)},p(r,i){i[0]&32&&l!==(l=r[17].name+"")&&Z(n,l),i[0]&32&&o!==(o=r[17])&&(e.__value=o,e.value=e.__value)},d(r){r&&g(e)}}}function qe(t){let e,l,n,o,r,i,c=t[5],f=[];for(let u=0;u<c.length;u+=1)f[u]=Pe(ke(t,c,u));return{c(){e=_("button"),e.textContent="Back",l=C(),n=_("div"),o=_("ul");for(let u=0;u<f.length;u+=1)f[u].c();le(n,"id","folders")},m(u,d){b(u,e,d),b(u,l,d),b(u,n,d),a(n,o);for(let s=0;s<f.length;s+=1)f[s]&&f[s].m(o,null);r||(i=R(e,"click",t[14]),r=!0)},p(u,d){if(d[0]&32){c=u[5];let s;for(s=0;s<c.length;s+=1){const h=ke(u,c,s);f[s]?f[s].p(h,d):(f[s]=Pe(h),f[s].c(),f[s].m(o,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=c.length}},d(u){u&&g(e),u&&g(l),u&&g(n),A(f,u),r=!1,i()}}}function He(t){let e,l,n=t[17].files,o=[];for(let r=0;r<n.length;r+=1)o[r]=De(ye(t,n,r));return{c(){e=_("ul");for(let r=0;r<o.length;r+=1)o[r].c();l=C()},m(r,i){b(r,e,i);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);a(e,l)},p(r,i){if(i[0]&32){n=r[17].files;let c;for(c=0;c<n.length;c+=1){const f=ye(r,n,c);o[c]?o[c].p(f,i):(o[c]=De(f),o[c].c(),o[c].m(e,l))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(r){r&&g(e),A(o,r)}}}function Ie(t){let e,l=t[20].files,n=[];for(let o=0;o<l.length;o+=1)n[o]=je(we(t,l,o));return{c(){e=_("ul");for(let o=0;o<n.length;o+=1)n[o].c()},m(o,r){b(o,e,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(o,r){if(r[0]&32){l=o[20].files;let i;for(i=0;i<l.length;i+=1){const c=we(o,l,i);n[i]?n[i].p(c,r):(n[i]=je(),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},d(o){o&&g(e),A(n,o)}}}function je(t){let e;return{c(){e=_("li"),e.textContent="file"},m(l,n){b(l,e,n)},p:S,d(l){l&&g(e)}}}function De(t){let e,l=t[20].name+"",n,o,r,i=t[20].files&&Ie(t);return{c(){e=_("li"),n=U(l),o=C(),i&&i.c(),r=Y()},m(c,f){b(c,e,f),a(e,n),b(c,o,f),i&&i.m(c,f),b(c,r,f)},p(c,f){f[0]&32&&l!==(l=c[20].name+"")&&Z(n,l),c[20].files?i?i.p(c,f):(i=Ie(c),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},d(c){c&&g(e),c&&g(o),i&&i.d(c),c&&g(r)}}}function Pe(t){let e,l,n=t[17].name+"",o,r,i,c=t[17].files&&He(t);return{c(){e=_("li"),l=_("span"),o=U(n),r=C(),c&&c.c(),i=Y()},m(f,u){b(f,e,u),a(e,l),a(l,o),b(f,r,u),c&&c.m(f,u),b(f,i,u)},p(f,u){u[0]&32&&n!==(n=f[17].name+"")&&Z(o,n),f[17].files?c?c.p(f,u):(c=He(f),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},d(f){f&&g(e),f&&g(r),c&&c.d(f),f&&g(i)}}}function _t(t){let e,l,n,o=t[1]&&Le(t),r=!t[1]&&qe(t);return{c(){e=_("div"),o&&o.c(),l=C(),n=_("div"),r&&r.c(),this.c=S,le(n,"id","showHierarchy"),le(e,"class","card")},m(i,c){b(i,e,c),o&&o.m(e,null),a(e,l),a(e,n),r&&r.m(n,null)},p(i,c){i[1]?o?o.p(i,c):(o=Le(i),o.c(),o.m(e,l)):o&&(o.d(1),o=null),i[1]?r&&(r.d(1),r=null):r?r.p(i,c):(r=qe(i),r.c(),r.m(n,null))},i:S,o:S,d(i){i&&g(e),o&&o.d(),r&&r.d()}}}function ae(t,e){var l;for(const n of t){if(n.id===e)return n;if(((l=n.files)==null?void 0:l.length)>0){const o=ae(n.files,e);if(o)return o}}return null}function ht(t,e,l){let n,o,r,i;x(t,ue,v=>l(2,n=v)),x(t,fe,v=>l(3,o=v)),x(t,ce,v=>l(4,r=v)),x(t,te,v=>l(5,i=v));let c="",f=["File","Folder"],u=!0;Ye(()=>{const v={id:re(),name:"DefaultFolder",files:[],level:"root",type:"folder"};te.update(w=>(w&&w.length===0&&w.push(v),w))});function d(){c&&r?(l(1,u=!1),r==="File"&&n?s(c):r==="Folder"&&o&&h(c,o==="At Root"?null:o)):L()}function s(v){const w={id:re(),name:v,type:"file"};te.update(N=>{const T=ae(N,n.id);return T&&T.files.push(w),N})}function h(v,w){const N={id:re(),name:v,files:[],level:w===null?"root":w.level==="root"?"first":"second",type:"folder"};te.update(T=>{if(w===null)T.push(N);else{const J=ae(T,w.id);J&&J.files.push(N)}return T})}function p(){L()}function L(){l(0,c=""),ce.set(""),ue.set(null),fe.set(null)}function B(){c=this.value,l(0,c)}function W(){r=oe(this),ce.set(r),l(6,f)}function O(){n=oe(this),ue.set(n)}function K(){o=oe(this),fe.set(o)}return[c,u,n,o,r,i,f,d,p,L,B,W,O,K,()=>{L(),l(1,u=!0)}]}class pt extends Be{constructor(e){super();const l=document.createElement("style");l.textContent=".card{background-color:#b8c0d8;width:fit-content;padding:30px;margin:auto;margin-top:50px;vertical-align:middle}.card input{display:block;width:193px;height:25px}.card select{display:block;width:200px;text-align:center;height:30px}.card #folders{text-align:left;padding:20px 40px 20px 20px}.card table td{padding-bottom:10px}.card button{display:block;margin:auto;width:100px;height:30px}.card button:hover{background-color:#3e67d9;color:black;font-weight:bold;cursor:pointer}",this.shadowRoot.appendChild(l),ut(this,{target:this.shadowRoot,props:Qe(this.attributes),customElement:!0},ht,_t,Ve,{},null,[-1,-1]),e&&e.target&&b(e.target,this,e.anchor)}}customElements.define("folder-component",pt);
