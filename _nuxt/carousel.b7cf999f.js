import{j as Q,k as h,l as O,m as s,p as y,q as w,s as ye,v as xe,x as Ae,y as ve,z as J,A as fe,F as Te}from"./entry.fa90cc9e.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const d={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},me={itemsToShow:{default:d.itemsToShow,type:Number},itemsToScroll:{default:d.itemsToScroll,type:Number},wrapAround:{default:d.wrapAround,type:Boolean},throttle:{default:d.throttle,type:Number},snapAlign:{default:d.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:d.transition,type:Number},breakpoints:{default:d.breakpoints,type:Object},autoplay:{default:d.autoplay,type:Number},pauseAutoplayOnHover:{default:d.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:d.mouseDrag,type:Boolean},touchDrag:{default:d.touchDrag,type:Boolean},dir:{default:d.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:d.i18n,type:Object},settings:{default(){return{}},type:Object}};function ke({config:e,slidesCount:a}){const{snapAlign:n,wrapAround:o,itemsToShow:l=1}=e;if(o)return Math.max(a-1,0);let r;switch(n){case"start":r=a-l;break;case"end":r=a-1;break;case"center":case"center-odd":r=a-Math.ceil((l-.5)/2);break;case"center-even":r=a-Math.ceil(l/2);break;default:r=0;break}return Math.max(r,0)}function _e({config:e,slidesCount:a}){const{wrapAround:n,snapAlign:o,itemsToShow:l=1}=e;let r=0;if(n||l>a)return r;switch(o){case"start":r=0;break;case"end":r=l-1;break;case"center":case"center-odd":r=Math.floor((l-1)/2);break;case"center-even":r=Math.floor((l-2)/2);break;default:r=0;break}return r}function K({val:e,max:a,min:n}){return a<n?e:Math.min(Math.max(e,n),a)}function Ce({config:e,currentSlide:a,slidesCount:n}){const{snapAlign:o,wrapAround:l,itemsToShow:r=1}=e;let p=a;switch(o){case"center":case"center-odd":p-=(r-1)/2;break;case"center-even":p-=(r-2)/2;break;case"end":p-=r-1;break}return l?p:K({val:p,max:n-r,min:0})}function ge(e){return e?e.reduce((a,n)=>{var o;return n.type===Te?[...a,...ge(n.children)]:((o=n.type)===null||o===void 0?void 0:o.name)==="CarouselSlide"?[...a,n]:a},[]):[]}function R({val:e,max:a,min:n=0}){return e>a?R({val:e-(a+1),max:a,min:n}):e<n?R({val:e+(a+1),max:a,min:n}):e}function Oe(e,a){let n;return a?function(...o){const l=this;n||(e.apply(l,o),n=!0,setTimeout(()=>n=!1,a))}:e}function je(e,a){let n;return function(...o){n&&clearTimeout(n),n=setTimeout(()=>{e(...o),n=null},a)}}function he(e="",a={}){return Object.entries(a).reduce((n,[o,l])=>n.replace(`{${o}}`,String(l)),e)}var Me=Q({name:"ARIA",setup(){const e=h("config",O(Object.assign({},d))),a=h("currentSlide",s(0)),n=h("slidesCount",s(0));return()=>y("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},he(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:n.value}))}}),Ee=Q({name:"Carousel",props:me,setup(e,{slots:a,emit:n,expose:o}){var l;const r=s(null),p=s([]),v=s(0),m=s(0),i=O(Object.assign({},d));let S=Object.assign({},d),x;const c=s((l=e.modelValue)!==null&&l!==void 0?l:0),V=s(0),Z=s(0),_=s(0),j=s(0);let C,X;w("config",i),w("slidesCount",m),w("currentSlide",c),w("maxSlide",_),w("minSlide",j),w("slideWidth",v);function B(){x=Object.assign({},e.breakpoints),S=Object.assign(Object.assign(Object.assign({},S),e),{i18n:Object.assign(Object.assign({},S.i18n),e.i18n),breakpoints:void 0}),ee(S)}function E(){if(!x||!Object.keys(x).length)return;const t=Object.keys(x).map(u=>Number(u)).sort((u,b)=>+b-+u);let f=Object.assign({},S);t.some(u=>{const b=window.matchMedia(`(min-width: ${u}px)`).matches;return b&&(f=Object.assign(Object.assign({},f),x[u])),b}),ee(f)}function ee(t){Object.entries(t).forEach(([f,u])=>i[f]=u)}const te=je(()=>{E(),M()},16);function M(){if(!r.value)return;const t=r.value.getBoundingClientRect();v.value=t.width/i.itemsToShow}function $(){m.value<=0||(Z.value=Math.ceil((m.value-1)/2),_.value=ke({config:i,slidesCount:m.value}),j.value=_e({config:i,slidesCount:m.value}),i.wrapAround||(c.value=K({val:c.value,max:_.value,min:j.value})))}ye(()=>{xe(()=>M()),setTimeout(()=>M(),1e3),E(),re(),window.addEventListener("resize",te,{passive:!0}),n("init")}),Ae(()=>{X&&clearTimeout(X),C&&clearInterval(C),window.removeEventListener("resize",te,{passive:!0})});let g=!1;const D={x:0,y:0},I={x:0,y:0},A=O({x:0,y:0}),L=s(!1),Y=s(!1),Se=()=>{L.value=!0},be=()=>{L.value=!1};function ne(t){["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(g=t.type==="touchstart",g||t.preventDefault(),!(!g&&t.button!==0||T.value)&&(D.x=g?t.touches[0].clientX:t.clientX,D.y=g?t.touches[0].clientY:t.clientY,document.addEventListener(g?"touchmove":"mousemove",ae,!0),document.addEventListener(g?"touchend":"mouseup",ie,!0)))}const ae=Oe(t=>{Y.value=!0,I.x=g?t.touches[0].clientX:t.clientX,I.y=g?t.touches[0].clientY:t.clientY;const f=I.x-D.x,u=I.y-D.y;A.y=u,A.x=f},i.throttle);function ie(){const t=i.dir==="rtl"?-1:1,f=Math.sign(A.x)*.4,u=Math.round(A.x/v.value+f)*t;if(u&&!g){const b=W=>{W.stopPropagation(),window.removeEventListener("click",b,!0)};window.addEventListener("click",b,!0)}k(c.value-u),A.x=0,A.y=0,Y.value=!1,document.removeEventListener(g?"touchmove":"mousemove",ae,!0),document.removeEventListener(g?"touchend":"mouseup",ie,!0)}function re(){!i.autoplay||i.autoplay<=0||(C=setInterval(()=>{i.pauseAutoplayOnHover&&L.value||P()},i.autoplay))}function oe(){C&&(clearInterval(C),C=null),re()}const T=s(!1);function k(t){const f=i.wrapAround?t:K({val:t,max:_.value,min:j.value});c.value===f||T.value||(n("slide-start",{slidingToIndex:t,currentSlideIndex:c.value,prevSlideIndex:V.value,slidesCount:m.value}),T.value=!0,V.value=c.value,c.value=f,X=setTimeout(()=>{if(i.wrapAround){const u=R({val:f,max:_.value,min:0});u!==c.value&&(c.value=u,n("loop",{currentSlideIndex:c.value,slidingToIndex:t}))}n("update:modelValue",c.value),n("slide-end",{currentSlideIndex:c.value,prevSlideIndex:V.value,slidesCount:m.value}),T.value=!1,oe()},i.transition))}function P(){k(c.value+i.itemsToScroll)}function H(){k(c.value-i.itemsToScroll)}const le={slideTo:k,next:P,prev:H};w("nav",le),w("isSliding",T);const se=ve(()=>Ce({config:i,currentSlide:c.value,slidesCount:m.value}));w("slidesToScroll",se);const we=ve(()=>{const t=i.dir==="rtl"?-1:1,f=se.value*v.value*t;return{transform:`translateX(${A.x-f}px)`,transition:`${T.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${m.value*v.value}px`:"",width:"100%"}});function ue(){B(),E(),$(),M(),oe()}Object.keys(me).forEach(t=>{["modelValue"].includes(t)||J(()=>e[t],ue)}),J(()=>e.modelValue,t=>{t!==c.value&&k(Number(t))}),J(m,$),n("before-init"),B();const ce={config:i,slidesCount:m,slideWidth:v,next:P,prev:H,slideTo:k,currentSlide:c,maxSlide:_,minSlide:j,middleSlide:Z};o({updateBreakpointsConfigs:E,updateSlidesData:$,updateSlideWidth:M,initDefaultConfigs:B,restartCarousel:ue,slideTo:k,next:P,prev:H,nav:le,data:ce});const U=a.default||a.slides,z=a.addons,de=O(ce);return()=>{const t=ge(U==null?void 0:U(de)),f=(z==null?void 0:z(de))||[];t.forEach((F,G)=>F.props.index=G);let u=t;if(i.wrapAround){const F=t.map((q,N)=>fe(q,{index:-t.length+N,isClone:!0,key:`clone-before-${N}`})),G=t.map((q,N)=>fe(q,{index:t.length+N,isClone:!0,key:`clone-after-${N}`}));u=[...F,...t,...G]}p.value=t,m.value=Math.max(t.length,1);const b=y("ol",{class:"carousel__track",style:we.value,onMousedownCapture:i.mouseDrag?ne:null,onTouchstartPassiveCapture:i.touchDrag?ne:null},u),W=y("div",{class:"carousel__viewport"},b);return y("section",{ref:r,class:{carousel:!0,"is-sliding":T.value,"is-dragging":Y.value,"is-hover":L.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:Se,onMouseleave:be},[W,f,y(Me)])}}}),pe;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(pe||(pe={}));const De=()=>{const e=h("config",O(Object.assign({},d))),a=h("maxSlide",s(1)),n=h("minSlide",s(1)),o=h("currentSlide",s(1)),l=h("nav",{}),r=v=>R({val:o.value,max:a.value,min:0})===v,p=[];for(let v=n.value;v<a.value+1;v++){const m=y("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(v)},"aria-label":he(e.i18n.ariaNavigateToSlide,{slideNumber:v+1}),onClick:()=>l.slideTo(v)}),i=y("li",{class:"carousel__pagination-item",key:v},m);p.push(i)}return y("ol",{class:"carousel__pagination"},p)};var Ie=Q({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const n=h("config",O(Object.assign({},d))),o=h("currentSlide",s(0)),l=h("slidesToScroll",s(0)),r=h("isSliding",s(!1)),p=()=>e.index===o.value,v=()=>e.index===o.value-1,m=()=>e.index===o.value+1,i=()=>{const S=Math.floor(l.value),x=Math.ceil(l.value+n.itemsToShow-1);return e.index>=S&&e.index<=x};return()=>{var S;return y("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":i(),"carousel__slide--active":p(),"carousel__slide--prev":v(),"carousel__slide--next":m(),"carousel__slide--sliding":r.value},"aria-hidden":!i()},(S=a.default)===null||S===void 0?void 0:S.call(a))}}});export{Ee as C,De as P,Ie as S};
