(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0232":function(t,e,s){"use strict";s("d7ac")},"0cbc":function(t,e,s){},"17c6":function(t,e,s){"use strict";s.r(e);var a=s("7a23");const l={class:"insight"},c=Object(a["f"])("h1",null,"This is an insights page",-1);function i(t,e){return Object(a["o"])(),Object(a["d"])("div",l,[c])}const n={};n.render=i;e["default"]=n},"2df5":function(t,e,s){"use strict";s.r(e);var a=s("7a23");function l(t,e,s,l,c,i){const n=Object(a["v"])("TimelineView");return Object(a["o"])(),Object(a["d"])("main",null,[Object(a["f"])(n,{title:i.getJobTitle(),"timeline-Data":i.getJobs(),"theme-class":s.themeClass,"display-class":s.displayClass},null,8,["title","timeline-Data","theme-class","display-class"]),Object(a["f"])(n,{title:i.getEducationTitle(),"timeline-Data":i.getEducation(),"theme-class":s.themeClass,"display-class":s.displayClass},null,8,["title","timeline-Data","theme-class","display-class"])])}const c=Object(a["C"])("data-v-d4df4bdc");Object(a["r"])("data-v-d4df4bdc");const i=Object(a["f"])("span",null,null,-1);Object(a["p"])();const n=c((t,e,s,l,c,n)=>(Object(a["o"])(),Object(a["d"])("main",{class:["timeline__view",[s.themeClass,s.displayClass]]},[Object(a["f"])("h3",{class:{title__gap:s.title.gap}},Object(a["x"])(s.title.data),3),Object(a["f"])("section",{class:["timeline",[s.themeClass,s.displayClass]]},[Object(a["f"])("ul",null,[(Object(a["o"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(s.timelineData,(t,e)=>(Object(a["o"])(),Object(a["d"])("li",{key:e,class:[{year__gap:t.start&&t.end},s.themeClass,s.displayClass]},[i,Object(a["f"])("div",{class:[s.themeClass,s.displayClass]},Object(a["x"])(t.title),3),Object(a["f"])("div",{class:[s.themeClass,s.displayClass]},Object(a["x"])(t.subtitle),3),Object(a["f"])("div",{class:[s.themeClass,s.displayClass]},Object(a["x"])(t.location),3),Object(a["f"])("div",{class:["year",[s.themeClass,s.displayClass]]},[Object(a["f"])("span",{class:[s.themeClass,s.displayClass]},Object(a["x"])(t.yearEnd),3),Object(a["B"])(Object(a["f"])("span",{class:[s.themeClass,s.displayClass]},Object(a["x"])(t.yearStart),3),[[a["z"],t.start]])],2)],2))),128))])],2)],2)));var o={name:"TimeLine",props:["title","timelineData","themeClass","displayClass"]};s("9f5a");o.render=n,o.__scopeId="data-v-d4df4bdc";var r=o,d=s("5502"),b={name:"PortFolio",components:{TimelineView:r},props:["themeClass","displayClass"],methods:{...Object(d["b"])(["fetchSchools","fetchJobs"]),getEducationTitle(){return{data:"Education",gap:!1}},getEducation(){return this.allSchools},getJobTitle(){return{data:"Experience",gap:!0}},getJobs(){return this.allJobs}},computed:Object(d["c"])(["allSchools","latestSchool","latestDegree","allJobs","latestJob","latestDesignation"]),created(){this.fetchSchools(),this.fetchJobs()}};b.render=l;e["default"]=b},"2ff2":function(t,e,s){"use strict";s.r(e);var a=s("7a23");const l={class:"about"},c=Object(a["f"])("h1",null,"This is an projects page",-1);function i(t,e){return Object(a["o"])(),Object(a["d"])("div",l,[c])}const n={};n.render=i;e["default"]=n},"3e01":function(t,e,s){"use strict";s.r(e);var a=s("7a23");const l=Object(a["f"])("h1",null,"Reading Markdown",-1);function c(t,e,s,c,i,n){return Object(a["o"])(),Object(a["d"])("div",null,[l])}var i={};i.render=c;e["default"]=i},"4fe8":function(t,e,s){"use strict";s.r(e);var a=s("7a23");const l={class:"about"},c=Object(a["f"])("h1",null,"This is an contact page",-1);function i(t,e){return Object(a["o"])(),Object(a["d"])("div",l,[c])}const n={};n.render=i;e["default"]=n},"9f5a":function(t,e,s){"use strict";s("0cbc")},d7ac:function(t,e,s){},f1b6:function(t,e,s){"use strict";s.r(e);var a=s("7a23");function l(t,e,s,l,c,i){const n=Object(a["v"])("blog-nav"),o=Object(a["v"])("blog-feed"),r=Object(a["v"])("blog-post");return Object(a["o"])(),Object(a["d"])("main",{class:["blog",{blog__reading:this.post}]},[Object(a["f"])(n,{content:i.content,filters:i.filters,navs:c.navs},null,8,["content","filters","navs"]),Object(a["f"])(o,{filters:i.filters},null,8,["filters"]),Object(a["f"])(r,{post:s.post},null,8,["post"])],2)}function c(t,e,s,l,c,i){return Object(a["o"])(),Object(a["d"])("h1",null,"Blog Nav")}var i={};i.render=c;var n=i;const o=Object(a["C"])("data-v-1a1c144c");Object(a["r"])("data-v-1a1c144c");const r={class:"preview__details"},d={class:"preview__meta"},b={class:"preview__published"};Object(a["p"])();const u=o((t,e,s,l,c,i)=>{const n=Object(a["v"])("router-link");return Object(a["o"])(),Object(a["d"])("div",null,[Object(a["f"])("ul",{class:["blog__feed",s.displayClass,s.themeClass]},[(Object(a["o"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(t.allBlogs,t=>(Object(a["o"])(),Object(a["d"])("li",{class:["preview",s.displayClass,s.themeClass],key:t._id},[Object(a["f"])("figure",{class:["preview__figure"],style:{backgroundImage:`url(${t.imgUrl})`},onMouseover:e[1]||(e[1]=t=>t.currentTarget.classList.add("hoverList")),onMouseleave:e[2]||(e[2]=t=>t.currentTarget.classList.remove("hoverList"))},[Object(a["f"])("figcaption",r,[Object(a["f"])(n,{class:"preview__title",to:t.markdownLink},{default:o(()=>[Object(a["e"])(Object(a["x"])(t.title),1)]),_:2},1032,["to"]),Object(a["f"])("div",d,[Object(a["f"])("time",b,Object(a["x"])(i.prettyDate(t.createdAt)),1)])])],36)],2))),128))],2)])});var j=s("5502"),O={name:"BlogFeed",props:["themeClass","displayClass"],methods:{...Object(j["b"])(["fetchBlogs"]),prettyDate(t){return new Date(t).toString().split(" ").slice(0,4).join(" ").replace(/( \d+)$/,",$1")}},computed:Object(j["c"])(["allBlogs"]),created(){this.fetchBlogs()}};s("0232");O.render=u,O.__scopeId="data-v-1a1c144c";var f=O;function p(t,e,s,l,c,i){return Object(a["o"])(),Object(a["d"])("h1",null,"Blog Post")}var h={};h.render=p;var g=h,v={name:"blogs",components:{BlogFeed:f,BlogNav:n,BlogPost:g},resource:"Blog",props:{post:String,Tags:String,themeClass:String,displayClass:String},data(){return{navs:0,title:"",labels:{post:"",Tags:""}}},computed:{content(){return{title:this.title,labels:this.labels}},filters(){let t={};return this.post&&(t.post=this.post),this.Tags&&(t.Tags=this.Tags),t}}};v.render=l;e["default"]=v}}]);
//# sourceMappingURL=about.5f5cac31.js.map