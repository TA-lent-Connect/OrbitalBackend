(this.webpackJsonporbital=this.webpackJsonporbital||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(17),s=a(0),i=a.n(s),o=a(67),l=a(11),u=a(28),j=a.n(u),d=a(2),b=function(e){var t=e.message;return null===t?null:Object(d.jsx)("div",{className:"error",children:t})},m=i.a.forwardRef((function(e,t){var a=Object(s.useState)(!1),n=Object(c.a)(a,2),r=n[0],i=n[1],o={display:r?"none":""},l={display:r?"":"none"},u=function(){i(!r)};return Object(s.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:o,children:Object(d.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(d.jsxs)("div",{style:l,className:"togglableContent",children:[e.children,Object(d.jsx)("button",{onClick:u,children:"cancel"})]})]})}));m.displayName="Togglable";var p=function(e){"bearer ".concat(e)},h=a(23),O=a.n(h),x=a(29),g={login:function(){var e=Object(x.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=a(162),v=a(157),w=a(155),y=a(159),S=a(156),N=a(161),C=a(152),k=a(158),W=a(160),U=a(51),I=a.n(U),D=a(68),F=a(153),q=a(154);function T(){return Object(d.jsxs)(D.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(d.jsx)(C.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var E=Object(F.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),J=function(e){var t=e.setUser,a=e.setErrorMessage,n=E(),r=Object(s.useState)(""),i=Object(c.a)(r,2),o=i[0],l=i[1],u=Object(s.useState)(""),j=Object(c.a)(u,2),b=j[0],m=j[1];Object(s.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var a=JSON.parse(e);t(a),p(a.token)}}),[]);var h=function(){var e=Object(x.a)(O.a.mark((function e(n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,g.login({username:o,password:b});case 4:r=e.sent,p(r.token),window.localStorage.setItem("loggedUser",JSON.stringify(r)),t(r),l(""),m(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),a("Wrong credentials"),setTimeout((function(){a(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(q.a,{component:"main",maxWidth:"xs",children:[Object(d.jsx)(w.a,{}),Object(d.jsxs)("div",{className:n.paper,children:[Object(d.jsx)(f.a,{className:n.avatar,children:Object(d.jsx)(I.a,{})}),Object(d.jsx)(D.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(d.jsxs)("form",{className:n.form,noValidate:!0,onSubmit:h,children:[Object(d.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:o,onChange:function(e){l(e.target.value)}}),Object(d.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:b,onChange:function(e){m(e.target.value)}}),Object(d.jsx)(S.a,{control:Object(d.jsx)(N.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(d.jsx)(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,children:"Sign In"}),Object(d.jsxs)(k.a,{container:!0,children:[Object(d.jsx)(k.a,{item:!0,xs:!0,children:Object(d.jsx)(C.a,{href:"/ForgotPassword",variant:"body2",children:"Forgot password?"})}),Object(d.jsx)(k.a,{item:!0,children:Object(d.jsx)(C.a,{href:"/SignUp",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(d.jsx)(W.a,{mt:8,children:Object(d.jsx)(T,{})})]})},Y={create:function(){var e=Object(x.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.a.post("/api/users",t),e.abrupt("return",a.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function L(){return Object(d.jsxs)(D.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(d.jsx)(C.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var M=Object(F.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),P=function(){var e=M(),t=Object(s.useState)(""),a=Object(c.a)(t,2),n=a[0],r=a[1],i=Object(s.useState)(""),o=Object(c.a)(i,2),l=o[0],u=o[1],j=Object(s.useState)(""),b=Object(c.a)(j,2),m=b[0],p=b[1],h=Object(s.useState)(""),g=Object(c.a)(h,2),S=g[0],N=g[1],U=function(){var e=Object(x.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={name:m+" "+S,username:n,password:l},Y.create(a),p(""),N(""),r(""),u("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(q.a,{component:"main",maxWidth:"xs",children:[Object(d.jsx)(w.a,{}),Object(d.jsxs)("div",{className:e.paper,children:[Object(d.jsx)(f.a,{className:e.avatar,children:Object(d.jsx)(I.a,{})}),Object(d.jsx)(D.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(d.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:U,children:[Object(d.jsxs)(k.a,{container:!0,spacing:2,children:[Object(d.jsx)(k.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(y.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:m,onChange:function(e){p(e.target.value)}})}),Object(d.jsx)(k.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lastName",value:S,onChange:function(e){N(e.target.value)}})}),Object(d.jsx)(k.a,{item:!0,xs:12,children:Object(d.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",value:n,onChange:function(e){r(e.target.value)}})}),Object(d.jsx)(k.a,{item:!0,xs:12,children:Object(d.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l,onChange:function(e){u(e.target.value)}})})]}),Object(d.jsx)(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(d.jsx)(k.a,{container:!0,justify:"flex-end",children:Object(d.jsx)(k.a,{item:!0,children:Object(d.jsx)(C.a,{href:"/",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(d.jsx)(W.a,{mt:5,children:Object(d.jsx)(L,{})})]})},V=function(){var e=Object(s.useState)(null),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(null),i=Object(c.a)(r,2),u=i[0],j=i[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{message:u}),null===a?Object(d.jsx)("div",{className:"loggedOut",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/SignUp",children:Object(d.jsx)(P,{})}),Object(d.jsx)(l.a,{path:"/",children:Object(d.jsx)(J,{setUser:n,setErrorMessage:j})})]})})}):Object(d.jsxs)("div",{className:"loggedIn",children:[Object(d.jsxs)("p",{children:[a.name," logged in"]}),Object(d.jsx)("h1",{children:"My Listings"}),Object(d.jsx)("button",{id:"logout",onClick:function(){window.localStorage.removeItem("loggedUser")},children:"logout"})]})]})};r.a.render(Object(d.jsx)(V,{}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.436ed743.chunk.js.map