(this.webpackJsonporbital=this.webpackJsonporbital||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n.n(a),c=n(58),r=n(59),s=n(61),o=n(60),l=n(0),u=n.n(l),j=n(24),d=n(151),b=n(145),m=n(148),h=n(146),O=n(150),f=n(46),p=n.n(f),x=n(115),v=n(141),g=n(143),C=n(5);var y=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function w(){var e=y(),t=Object(l.useState)(""),n=Object(j.a)(t,2),a=n[0],i=n[1],c=Object(l.useState)(""),r=Object(j.a)(c,2),s=r[0],o=r[1];return Object(C.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(b.a,{}),Object(C.jsxs)("div",{className:e.paper,children:[Object(C.jsx)(d.a,{className:e.avatar,children:Object(C.jsx)(p.a,{})}),Object(C.jsx)(x.a,{component:"h1",variant:"h5",children:"Welcome to TA-Lent Connect!"}),Object(C.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var t=!1;t="admin"===a&&"password"===s,function(e){e}(t)},children:[Object(C.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:a,onChange:function(e){i(e.target.value)}}),Object(C.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:s,onChange:function(e){o(e.target.value)}}),Object(C.jsx)(h.a,{control:Object(C.jsx)(O.a,{value:"remember",color:"primary"}),label:"Remember me"})]})]})]})}var S=n(35),k=n.n(S),I=function(e){var t=e.module;return Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:t.moduleCode}),Object(C.jsx)("p",{children:t.title}),Object(C.jsx)("p",{children:t.description})]})},E=function(e){var t=e.listing;return Object(C.jsx)("div",{children:Object(C.jsx)("li",{className:"listing",children:t.module})})},N="/api/listings",W=function(){return k.a.get(N).then((function(e){return e.data}))},D=function(e){return k.a.post(N,e).then((function(e){return e.data}))};var F=function(){var e=Object(l.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(l.useState)(""),c=Object(j.a)(i,2),r=c[0],s=c[1],o=Object(l.useState)([]),u=Object(j.a)(o,2),d=u[0],b=u[1],m=Object(l.useState)(""),h=Object(j.a)(m,2),O=h[0],f=h[1];Object(l.useEffect)((function(){k.a.get("https://api.nusmods.com/v2/2020-2021/moduleInfo.json").then((function(e){a(e.data)}))}),[]),Object(l.useEffect)((function(){W().then((function(e){b(e)}))}),[]);var p=n.filter((function(e){return e.moduleCode.includes(r)}));return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Listings"}),Object(C.jsx)("ul",{children:d.map((function(e){return Object(C.jsx)(E,{listing:e},e.id)}))}),Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),D({module:O}).then((function(e){b(d.concat(e)),f("")}))},children:[Object(C.jsx)("input",{value:O,onChange:function(e){f(e.target.value)}}),Object(C.jsx)("button",{type:"submit",children:"save"})]}),Object(C.jsx)("h1",{children:"Modules"}),Object(C.jsx)("form",{children:Object(C.jsxs)("label",{children:["find modules:",Object(C.jsx)("input",{value:r,onChange:function(e){s(e.target.value)}})]})}),Object(C.jsx)("div",{children:p.map((function(e){return Object(C.jsx)(I,{module:e},e.moduleCode)}))})]})},T=n(147),q=n(149),A=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleClick=function(){e.setState({admin:!0}),console.log(e.state.admin)},e.state={admin:!1},e}return Object(r.a)(n,[{key:"render",value:function(){return console.log(this.state.admin),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{children:this.state.admin?Object(C.jsx)(F,{}):Object(C.jsx)(w,{})}),Object(C.jsx)("div",{children:this.state.admin?Object(C.jsx)("h5",{}):Object(C.jsx)(q.a,{display:"flex",width:1225,height:80,alignItems:"center",justifyContent:"center",children:Object(C.jsx)(T.a,{onClick:this.handleClick,type:"submit",displayFlex:"justify",variant:"contained",color:"primary",children:"Sign In"})})})]})}}]),n}(u.a.Component);i.a.render(Object(C.jsx)(A,{}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.fe298f75.chunk.js.map