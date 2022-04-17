var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,a;function s(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t){a=t}const b=[],y=[],x=[],v=[],k=Promise.resolve();let w=!1;function E(t){x.push(t)}let L=!1;const C=new Set;function S(){if(!L){L=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];_(e),A(e.$$)}for(_(null),b.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while(b.length);for(;v.length;)v.pop()();w=!1,L=!1,C.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const j=new Set;function P(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,k.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(c,l,s,i,u,d,h,p=[-1]){const g=a;_(c);const m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:l.context||[]),callbacks:n(),dirty:p,skip_bound:!1,root:l.target||g.$$.root};h&&h(m.root);let $=!1;if(m.ctx=s?s(c,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),$&&P(c,t)),e})):[],m.update(),$=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();l.intro&&((b=c.$$.fragment)&&b.i&&(j.delete(b),b.i(y))),function(t,n,c,l){const{fragment:a,on_mount:s,on_destroy:i,after_update:u}=t.$$;a&&a.m(n,c),l||E((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(E)}(c,l.target,l.anchor,l.customElement),S()}var b,y;_(g)}function O(t,e,n){const o=t.slice();return o[6]=e[n],o[8]=n,o}function T(t,e,n){const o=t.slice();return o[9]=e[n],o}function B(e){let n,o,r,c=e[9]+"";return{c(){n=h("th"),o=p(c),r=g()},m(t,e){u(t,n,e),i(n,o),i(n,r)},p:t,d(t){t&&f(n)}}}function M(t){let e,n,o,r,c,l,a,d,_,b,y,x,v,k,w,E,L,C,S,A,j,P,N,O,T,B,M=t[8]+1+"",q=t[6].name+"",z=t[6].symbol+"",G=t[6].current_price.toLocaleString()+"",H=t[6].price_change_24h+"",I=t[6].total_volume.toLocaleString()+"";return{c(){e=h("tr"),n=h("td"),o=p(M),r=g(),c=h("td"),l=h("img"),d=g(),_=h("span"),b=p(q),y=g(),x=h("span"),v=p(z),k=g(),w=h("td"),E=p("$"),L=p(G),C=g(),S=h("td"),A=p(H),P=g(),N=h("td"),O=p("$"),T=p(I),B=g(),s(l.src,a=t[6].image)||m(l,"src",a),m(l,"alt","coin"),m(l,"width","5%"),m(x,"class","text-muted text-uppercase"),m(S,"class",j=t[6].price_change_24h>0?"text-success":"text-danger")},m(t,a){u(t,e,a),i(e,n),i(n,o),i(e,r),i(e,c),i(c,l),i(c,d),i(c,_),i(_,b),i(c,y),i(c,x),i(x,v),i(e,k),i(e,w),i(w,E),i(w,L),i(e,C),i(e,S),i(S,A),i(e,P),i(e,N),i(N,O),i(N,T),i(e,B)},p(t,e){1&e&&!s(l.src,a=t[6].image)&&m(l,"src",a),1&e&&q!==(q=t[6].name+"")&&$(b,q),1&e&&z!==(z=t[6].symbol+"")&&$(v,z),1&e&&G!==(G=t[6].current_price.toLocaleString()+"")&&$(L,G),1&e&&H!==(H=t[6].price_change_24h+"")&&$(A,H),1&e&&j!==(j=t[6].price_change_24h>0?"text-success":"text-danger")&&m(S,"class",j),1&e&&I!==(I=t[6].total_volume.toLocaleString()+"")&&$(T,I)},d(t){t&&f(e)}}}function q(e){let n,o,r,c,l,a,s,p,$,_,b,y,x,v,k=e[1],w=[];for(let t=0;t<k.length;t+=1)w[t]=B(T(e,k,t));let E=e[0],L=[];for(let t=0;t<E.length;t+=1)L[t]=M(O(e,E,t));return{c(){n=h("main"),o=h("div"),o.innerHTML='<h2 class="svelte-17wn2zi">GeckoCoin API</h2>',r=g(),c=h("div"),l=h("div"),a=h("input"),s=g(),p=h("table"),$=h("thead"),_=h("tr");for(let t=0;t<w.length;t+=1)w[t].c();b=g(),y=h("tbody");for(let t=0;t<L.length;t+=1)L[t].c();m(o,"class","container"),m(a,"type","text"),m(a,"class","form-control bg-dark text-white border-0 my-4"),m(a,"placeholder","Busca ..."),m(p,"class","table table-dark"),m(l,"class","row"),m(c,"class","container")},m(t,f){u(t,n,f),i(n,o),i(n,r),i(n,c),i(c,l),i(l,a),i(l,s),i(l,p),i(p,$),i($,_);for(let t=0;t<w.length;t+=1)w[t].m(_,null);i(p,b),i(p,y);for(let t=0;t<L.length;t+=1)L[t].m(y,null);var d,h,g,m;x||(d=a,h="keyup",g=e[3],d.addEventListener(h,g,m),v=()=>d.removeEventListener(h,g,m),x=!0)},p(t,[e]){if(2&e){let n;for(k=t[1],n=0;n<k.length;n+=1){const o=T(t,k,n);w[n]?w[n].p(o,e):(w[n]=B(o),w[n].c(),w[n].m(_,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=k.length}if(1&e){let n;for(E=t[0],n=0;n<E.length;n+=1){const o=O(t,E,n);L[n]?L[n].p(o,e):(L[n]=M(o),L[n].c(),L[n].m(y,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=E.length}},i:t,o:t,d(t){t&&f(n),d(w,t),d(L,t),x=!1,v()}}}function z(t,e,n){let o=[],r=[];(async()=>{const t=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_\n\tcap_desc&per_page=100&page=1&sparkline=false"),e=await t.json();o=e,n(0,r=o)})();const c=t=>{const{value:e}=t.target;n(0,r=o.filter((t=>t.name.toLowerCase().includes(e.toLowerCase()))))};return[r,[" #","Coin","Price","Price Change","24hr Valume"],c,t=>c(t)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,z,q,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
