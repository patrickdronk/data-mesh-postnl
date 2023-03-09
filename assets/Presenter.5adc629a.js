import{o as _,f as $,g as e,v as y,w as P,x as h,d as B,i as z,a as H,y as k,z as v,s as N,h as s,A,B as I,c as b,b as R,C as D,D as E,E as L,G as F,H as U,m as u,t as W,n as x,I as C,_ as V,p as Z,J as j,K as w,L as q,F as O,M as G,N as J,O as T,P as K,Q,R as X,S as Y,T as ee,U as se,q as M,V as te,W as oe,X as ne,Y as ae,Z as le,k as ce,$ as ie,a0 as re}from"./index.58bda559.js";import{_ as ue}from"./NoteViewer.vue_vue_type_script_setup_true_lang.736e13c9.js";import{_ as _e}from"./DrawingControls.vue_vue_type_script_setup_true_lang.3256a02c.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(n,l){return _(),$("svg",de,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(n,l){return _(),$("svg",fe,we)}const ke={name:"carbon-time",render:ye},$e="/assets/logo-title-horizontal.96c3c915.png";function Se(){const n=y(Date.now()),l=P({interval:1e3}),d=h(()=>{const t=(l.value-n.value)/1e3,a=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${a}`});function m(){n.value=l.value}return{timer:d,resetTimer:m}}const be=B({__name:"NoteStatic",props:{class:null},setup(n){const l=n;z(H);const d=h(()=>{var t,a,o;return(o=(a=(t=k.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:o.note}),m=h(()=>{var t,a,o;return(o=(a=(t=k.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:o.notesHTML});return(t,a)=>(_(),v(ue,{class:N(l.class),note:s(d),"note-html":s(m)},null,8,["class","note","note-html"]))}}),f=n=>(G("data-v-a70c4689"),n=n(),J(),n),Ce={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:$e,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),ze={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),Ne=f(()=>e("div",{class:"context"}," next ",-1)),Pe={class:"grid-section note overflow-auto"},Ae={class:"grid-section bottom"},Ie={class:"progress-bar"},Re=B({__name:"Presenter",setup(n){z(H);const l=y();A(),I(l);const d=b.titleTemplate.replace("%s",b.title||"Slidev");R({title:`Presenter - ${d}`});const{timer:m,resetTimer:t}=Se(),a=y([]),o=h(()=>T.value<K.value?{route:k.value,clicks:T.value+1}:Q.value?{route:X.value,clicks:0}:null);return D(()=>{const S=l.value.querySelector("#slide-content"),i=E(L()),g=F();U(()=>{if(!g.value||ee.value||!se.value)return;const r=S.getBoundingClientRect(),c=(i.x-r.left)/r.width*100,p=(i.y-r.top)/r.height*100;if(!(c<0||c>100||p<0||p>100))return{x:c,y:p}},r=>{Y.cursor=r})}),(S,i)=>{const g=ke,r=he;return _(),$(O,null,[e("div",Ce,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...c)=>s(t)&&s(t)(...c))},[u(g,{class:"absolute"}),u(r,{class:"absolute opacity-0"})]),e("div",ze,W(s(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(s(M))},[u(V,{key:"main",class:"h-full w-full"},{default:C(()=>[u(te,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(s(M))},[s(o)?(_(),v(V,{key:"next",class:"h-full w-full"},{default:C(()=>{var c;return[u(s(ne),{is:(c=s(o).route)==null?void 0:c.component,"clicks-elements":a.value,"onUpdate:clicksElements":i[1]||(i[1]=p=>a.value=p),clicks:s(o).clicks,"clicks-disabled":!1,class:N(s(oe)(s(o).route)),route:s(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):Z("v-if",!0),Ne],4),e("div",Pe,[(_(),v(be,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ae,[u(ae,{persist:!0})]),(_(),v(_e,{key:0}))]),e("div",Ie,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(s(le)-1)/(s(ce)-1)*100}%`})},null,4)])]),u(ie),u(q,{modelValue:s(w),"onUpdate:modelValue":i[2]||(i[2]=c=>j(w)?w.value=c:null)},null,8,["modelValue"])],64)}}});const Fe=re(Re,[["__scopeId","data-v-a70c4689"]]);export{Fe as default};
