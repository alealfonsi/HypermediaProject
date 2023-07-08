import{_ as r}from"./ProjectCard.47442e6b.js";import{_ as c,g as s,a as e,F as i,r as d,h as l,o as n,c as p}from"./entry.fa90cc9e.js";import{d as m}from"./component.a875623a.js";import"./nuxt-link.01d701bb.js";const u=m({async asyncData(){return{projects:await $fetch(l().baseURL+"/server/projects/byarea/IT")}}}),_=e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),h=e("div",{class:"IT-pageTop"},[e("h1",{id:"IT-page-title"},"IT Projects"),e("p",{id:"ITproj-page-description"},"On this page we proudly present our portfolio of impactful IT sector projects. Discover the importance of these ventures as they revolutionize the digital landscape and drive technological advancements. From satellite-based routers connecting the unconnected to immersive VR visors and advanced security firmware, these projects embody our commitment to pushing the boundaries of innovation. Join us in exploring these transformative initiatives that are shaping the future of technology and redefining industries.")],-1),f={id:"IT-projects-container"};function g(o,v,j,y,T,x){const a=r;return n(),s(i,null,[_,e("main",null,[h,e("div",f,[(n(!0),s(i,null,d(o.projects,t=>(n(),p(a,{title:t.name,link:"/projects/"+t.name,"img-url":"~/assets/img/projects/"+t.name+"1.jpg",class:"card-element"},null,8,["title","link","img-url"]))),256))])])],64)}const k=c(u,[["render",g]]);export{k as default};
