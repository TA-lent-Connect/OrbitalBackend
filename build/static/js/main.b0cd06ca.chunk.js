(this.webpackJsonporbital=this.webpackJsonporbital||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(12),i=a(0),s=a.n(i),l=a(75),o=a(14),u=a(29),j=a.n(u),d=a(2),b=s.a.forwardRef((function(e,t){var a=Object(i.useState)(!1),n=Object(c.a)(a,2),r=n[0],s=n[1],l={display:r?"none":""},o={display:r?"":"none"},u=function(){s(!r)};return Object(i.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:l,children:Object(d.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(d.jsxs)("div",{style:o,className:"togglableContent",children:[e.children,Object(d.jsx)("button",{onClick:u,children:"cancel"})]})]})}));b.displayName="Togglable";var m=function(e){"bearer ".concat(e)},O=a(23),p=a.n(O),h=a(30),x={login:function(){var e=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=a(178),g=a(170),f=a(168),y=a(172),S=a(169),w=a(175),C=a(166),N=a(171),I=a(173),T=a(56),k=a.n(T),U=a(77),W=a(165),A=a(167),D=a(57),M=a(177),q=a(174);function F(e){return Object(d.jsx)(q.a,Object(D.a)({elevation:6,variant:"filled"},e))}var E=Object(W.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),P=function(e){var t=e.alert,a=e.setAlert,n=e.errorMessage,r=E(),c=function(e,t){"clickaway"!==t&&a(!1)};return Object(d.jsx)("div",{className:r.root,children:Object(d.jsx)(M.a,{open:t,autoHideDuration:5e3,onClose:c,children:Object(d.jsx)(F,{onClose:c,severity:"error",children:n})})})};function J(){return Object(d.jsxs)(U.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(d.jsx)(C.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var L=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Y=function(e){var t=e.setUser,a=L(),n=Object(i.useState)(""),r=Object(c.a)(n,2),s=r[0],l=r[1],o=Object(i.useState)(""),u=Object(c.a)(o,2),j=u[0],b=u[1],O=Object(i.useState)(!1),T=Object(c.a)(O,2),W=T[0],D=T[1];Object(i.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var a=JSON.parse(e);t(a),m(a.token)}}),[]);var M=function(){var e=Object(h.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,x.login({username:s,password:j});case 4:n=e.sent,m(n.token),window.localStorage.setItem("loggedUser",JSON.stringify(n)),t(n),l(""),b(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),D(!0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(d.jsx)(P,{alert:W,setAlert:D,errorMessage:"Invalid Username or Password"}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:a.paper,children:[Object(d.jsx)(v.a,{className:a.avatar,children:Object(d.jsx)(k.a,{})}),Object(d.jsx)(U.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(d.jsxs)("form",{className:a.form,noValidate:!0,onSubmit:M,children:[Object(d.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:s,onChange:function(e){l(e.target.value)}}),Object(d.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:function(e){b(e.target.value)}}),Object(d.jsx)(S.a,{control:Object(d.jsx)(w.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(d.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Sign In"}),Object(d.jsx)(N.a,{container:!0,children:Object(d.jsx)(N.a,{item:!0,children:Object(d.jsx)(C.a,{href:"/SignUp",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),Object(d.jsx)(I.a,{mt:8,children:Object(d.jsx)(J,{})})]})},H={create:function(){var e=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.a.post("/api/users",t),e.abrupt("return",a.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=a(179);function B(e){return Object(d.jsx)(q.a,Object(D.a)({elevation:6,variant:"filled"},e))}var R=Object(W.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),z=function(e){var t=e.alert,a=e.setAlert,n=e.successMessage,r=R(),c=function(e,t){"clickaway"!==t&&a(!1)};return Object(d.jsx)("div",{className:r.root,children:Object(d.jsx)(M.a,{open:t,autoHideDuration:5e3,onClose:c,children:Object(d.jsx)(B,{onClose:c,severity:"success",children:n})})})};function G(){return Object(d.jsxs)(U.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(d.jsx)(C.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var K=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),Q=function(){var e=K(),t=Object(i.useState)(""),a=Object(c.a)(t,2),n=a[0],r=a[1],s=Object(i.useState)(""),l=Object(c.a)(s,2),o=l[0],u=l[1],j=Object(i.useState)(""),b=Object(c.a)(j,2),m=b[0],O=b[1],x=Object(i.useState)(""),S=Object(c.a)(x,2),w=S[0],T=S[1],W=Object(i.useState)(""),D=Object(c.a)(W,2),M=D[0],q=D[1],F=Object(i.useState)(""),E=Object(c.a)(F,2),J=E[0],L=E[1],Y=Object(i.useState)(null),B=Object(c.a)(Y,2),R=B[0],Q=B[1],X=Object(i.useState)(null),Z=Object(c.a)(X,2),$=Z[0],_=Z[1],ee=Object(i.useState)(null),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],re=Object(i.useState)(null),ce=Object(c.a)(re,2),ie=ce[0],se=ce[1],le=Object(i.useState)(null),oe=Object(c.a)(le,2),ue=oe[0],je=oe[1],de=Object(i.useState)(null),be=Object(c.a)(de,2),me=be[0],Oe=be[1],pe=Object(i.useState)(null),he=Object(c.a)(pe,2),xe=he[0],ve=he[1],ge=Object(i.useState)(!1),fe=Object(c.a)(ge,2),ye=fe[0],Se=fe[1],we=Object(i.useState)(!1),Ce=Object(c.a)(we,2),Ne=Ce[0],Ie=Ce[1],Te=Object(i.useState)(!1),ke=Object(c.a)(Te,2),Ue=ke[0],We=ke[1],Ae=function(){var e=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(ye),""===m.trim()?(_("Invalid First Name"),We(!0)):_(""),""===w.trim()?(ne("Invalid Last Name"),We(!0)):ne(""),""===n.trim()?(se("Invalid Username"),We(!0)):se(""),""===o.trim()?(je("Invalid Password"),We(!0)):je(""),""===M.trim()?(Oe("Invalid Email"),We(!0)):Oe(""),""===J?(ve("Invalid Account Type"),We(!0)):ve(""),""===m.trim()||""===w.trim()||""===n.trim()||""===o.trim()||""===M.trim()||""===J){e.next=22;break}return e.prev=9,a={name:m+" "+w,username:n,password:o,email:M,accountType:J},e.next=13,H.create(a);case 13:e.sent,Se(!0),Ie(!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(9),Q("Username already taken"),We(!0);case 22:case"end":return e.stop()}}),e,null,[[9,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(d.jsx)(P,{alert:Ue,setAlert:We,errorMessage:R||"Invalid Field(s)"}),Object(d.jsx)(z,{alert:Ne,setAlert:Ie,successMessage:"User Successfully Created"}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:e.paper,children:[Object(d.jsx)(v.a,{className:e.avatar,children:Object(d.jsx)(k.a,{})}),Object(d.jsx)(U.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(d.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:Ae,children:[Object(d.jsxs)(N.a,{container:!0,spacing:2,children:[Object(d.jsx)(N.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(y.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,error:"Invalid First Name"===$,helperText:$,value:m,onChange:function(e){O(e.target.value)},disabled:ye})}),Object(d.jsx)(N.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lastName",error:"Invalid Last Name"===ae,helperText:ae,value:w,onChange:function(e){T(e.target.value)},disabled:ye})}),Object(d.jsx)(N.a,{item:!0,xs:12,children:Object(d.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",error:"Invalid Username"===ie,helperText:ie,value:n,onChange:function(e){r(e.target.value)},disabled:ye})}),Object(d.jsx)(N.a,{item:!0,xs:12,children:Object(d.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:"Invalid Password"===ue,helperText:ue,value:o,onChange:function(e){u(e.target.value)},disabled:ye})}),Object(d.jsx)(N.a,{item:!0,xs:12,children:Object(d.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"email",label:"Email",id:"email",autoComplete:"email",error:"Invalid Email"===me,helperText:me,value:M,onChange:function(e){q(e.target.value)},disabled:ye})}),Object(d.jsx)(N.a,{item:!0,xs:12,children:Object(d.jsxs)(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"accountType",label:"Account Type",select:!0,value:J,id:"accountType",error:"Invalid Account Type"===xe,helperText:xe,onChange:function(e){L(e.target.value)},disabled:ye,children:[Object(d.jsx)(V.a,{value:"Student",children:"Student"}),Object(d.jsx)(V.a,{value:"Module Coordinator",children:"Module Coordinator"})]})})]}),Object(d.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,href:ye?"/":"",children:ye?"Account created | Back to Sign In":"Sign up"}),Object(d.jsx)(N.a,{container:!0,children:Object(d.jsx)(N.a,{item:!0,children:Object(d.jsx)(C.a,{href:"/",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(d.jsx)(I.a,{mt:5,children:Object(d.jsx)(G,{})})]})},X=function(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),a=t[0],n=t[1],r=function(){window.localStorage.removeItem("loggedUser")};return console.log(a),Object(d.jsx)("div",{className:"App",children:null===a?Object(d.jsx)("div",{className:"loggedOut",children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/SignUp",children:Object(d.jsx)(Q,{})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(Y,{setUser:n})})]})})}):Object(d.jsx)("div",{className:"loggedIn",children:"Module Coordinator"===a.accountType?Object(d.jsxs)("div",{className:"ModuleCoordinator",children:[Object(d.jsxs)("p",{children:[a.name," logged in"]}),Object(d.jsxs)("p",{children:["Access: ",a.accountType]}),Object(d.jsx)("button",{id:"logout",onClick:r,children:"logout"})]}):Object(d.jsxs)("div",{className:"Student",children:[Object(d.jsxs)("p",{children:[a.name," logged in"]}),Object(d.jsxs)("p",{children:["Access: ",a.accountType]}),Object(d.jsx)("button",{id:"logout",onClick:r,children:"logout"})]})})})};r.a.render(Object(d.jsx)(X,{}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.b0cd06ca.chunk.js.map