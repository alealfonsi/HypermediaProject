import{_ as p}from"./nuxt-link.01d701bb.js";import{o as l,g as d,b as i,w as m,a,t as s,_ as u,d as o,F as g,u as h,h as n}from"./entry.fa90cc9e.js";import{d as j}from"./component.a875623a.js";const v={class:"small-circle-container"},f={class:"small-circle"},b=["src"],y={class:"circle-title"},$={__name:"SmallCircleContainer",props:["title","link","imgUrl"],setup(t){return(e,_)=>{const c=p;return l(),d("div",v,[i(c,{to:t.link,class:"circle-link"},{default:m(()=>[a("div",f,[a("img",{src:t.imgUrl,alt:"Immagine del topic"},null,8,b)]),a("p",y,s(t.title),1)]),_:1},8,["to"])])}}};const k=j({async asyncData(){const t=h(),e=[];return e[0]=await $fetch(n().baseURL+"/server/projects/"+t.params.id),e[1]=await $fetch(n().baseURL+"/server/projects/"+t.params.id+"/area"),e[2]=await $fetch(n().baseURL+"/server/projects/"+t.params.id+"/supervisor"),{data:e}}}),C=a("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),w={class:"project-presentation-page"},S={class:"project-info-container"},N={id:"project-name",class:"data-name"},P={id:"project-presentation",class:"data-presentation"},R=a("span",{class:"data-category"}," Project presentation:",-1),U={id:"project-location",class:"data-location"},L=a("span",{class:"data-category"},"Project location:",-1),B={id:"project-date",class:"data-timestamp"},V=a("span",{class:"data-category"},"Project date:",-1),D={id:"project-startup",class:"data-startup"},F=a("span",{class:"data-category"},"Startup managing the project:",-1),A={id:"project-product",class:"data-product"},E=a("span",{class:"data-category"},"Product offered:",-1),I={id:"cv"},T={class:"bubbles-container"},q={class:"supervisor-bubble"},z={class:"area-bubble"},G={class:"project-images"},H=["src"],J=["src"],K=["src"],M=["src"];function O(t,e,_,c,Q,W){const r=$;return l(),d(g,null,[C,a("main",null,[a("div",w,[a("div",S,[a("h1",N,[a("span",null,s(t.data[0].name),1)]),a("p",P,[R,o(" "+s(t.data[0].presentation),1)]),a("p",U,[L,o(" "+s(t.data[0].location),1)]),a("p",B,[V,o(" "+s(t.data[0].date),1)]),a("p",D,[F,o(" "+s(t.data[0].start_up),1)]),a("p",A,[E,o(" "+s(t.data[0].product_service),1)]),a("p",I,s(t.data[0].cv),1)]),a("div",T,[a("div",q,[i(r,{title:"Supervisor: "+t.data[2].person_name,link:"/team/"+t.data[2].person_name,"img-url":"~/assets/img/team/"+t.data[2].person_name+".jpeg"},null,8,["title","link","img-url"])]),a("div",z,[i(r,{title:"Project Area: "+t.data[1].area_name,link:"/areas/"+t.data[1].area_name,"img-url":"~/assets/img/"+t.data[1].area_name+"_area/"+t.data[1].area_name+"1.jpg"},null,8,["title","link","img-url"])])])]),a("div",G,[a("img",{class:"image",src:"~/assets/img/projects/"+t.data[0].name+"1.jpg"},null,8,H),a("img",{class:"image",src:"~/assets/img/projects/"+t.data[0].name+"2.jpg"},null,8,J),a("img",{class:"image",src:"~/assets/img/projects/"+t.data[0].name+"3.jpg"},null,8,K),a("img",{class:"image",src:"~/assets/img/projects/"+t.data[0].name+"4.jpg"},null,8,M)])])],64)}const x=u(k,[["render",O]]);export{x as default};
