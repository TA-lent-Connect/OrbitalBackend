(this.webpackJsonporbital=this.webpackJsonporbital||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var c=n(14),i=n.n(c),u=n(4),s=n(2),r=n(3),o=n.n(r),j=n(0),a=function(e){var t=e.module;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:t.moduleCode}),Object(j.jsx)("p",{children:t.title}),Object(j.jsx)("p",{children:t.description})]})},l=function(e){var t=e.listing;return Object(j.jsx)("div",{children:Object(j.jsx)("li",{className:"listing",children:t.module})})},d="/api/listings",b=function(){return o.a.get(d).then((function(e){return e.data}))},O=function(e){return o.a.post(d,e).then((function(e){return e.data}))};var f=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(""),r=Object(u.a)(i,2),d=r[0],f=r[1],h=Object(s.useState)([]),m=Object(u.a)(h,2),x=m[0],p=m[1],v=Object(s.useState)(""),g=Object(u.a)(v,2),C=g[0],S=g[1];Object(s.useEffect)((function(){o.a.get("https://api.nusmods.com/v2/2020-2021/moduleInfo.json").then((function(e){c(e.data)}))}),[]),Object(s.useEffect)((function(){b().then((function(e){p(e)}))}),[]);var E=n.filter((function(e){return e.moduleCode.includes(d)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Listings"}),Object(j.jsx)("ul",{children:x.map((function(e){return Object(j.jsx)(l,{listing:e},e.id)}))}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O({module:C}).then((function(e){p(x.concat(e)),S("")}))},children:[Object(j.jsx)("input",{value:C,onChange:function(e){S(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"save"})]}),Object(j.jsx)("h1",{children:"Modules"}),Object(j.jsx)("form",{children:Object(j.jsxs)("label",{children:["find modules:",Object(j.jsx)("input",{value:d,onChange:function(e){f(e.target.value)}})]})}),Object(j.jsx)("div",{children:E.map((function(e){return Object(j.jsx)(a,{module:e},e.moduleCode)}))})]})};i.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d6722458.chunk.js.map