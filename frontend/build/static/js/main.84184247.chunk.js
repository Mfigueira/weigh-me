(this["webpackJsonpweighme-frontend"]=this["webpackJsonpweighme-frontend"]||[]).push([[0],{204:function(e,t,n){},205:function(e,t,n){},297:function(e,t,n){},299:function(e,t,n){},309:function(e,t,n){},327:function(e,t,n){},328:function(e,t,n){},434:function(e,t,n){},435:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(23),c=n.n(r),o=(n(297),n(25)),s=n(179),l=n.n(s),d=n(251),u=n(10),j=(n(299),n(27)),b=n(18),h=(n(204),n.p+"static/media/scale.8fe8eb1f.svg"),g=n.p+"static/media/user.c3f44b78.svg",m=[{path:"/",tab:0},{path:"/weighings",tab:1}],p=function(e){var t=e?new Date(e):new Date,n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();i=i<10?"0"+i:i,a=a<10?"0"+a:a;var r=t.getHours(),c=t.getMinutes();return r=r<10?"0"+r:r,c=c<10?"0"+c:c,"".concat(n,"-").concat(a,"-").concat(i,"T").concat(r,":").concat(c)},f=function(e){return e.indexOf(":")===e.lastIndexOf(":")?e:e.substring(0,e.lastIndexOf(":"))},O=["January","February","March","April","May","June","July","August","September","October","November","December"],x=function(e){var t=new Date(e);return O[t.getMonth()]},v=function(e){return/^[\S]{0,12}$/.test(e)},y=function(e){return/^[\S]{0,20}$/.test(e)},w=function(e){return/^[0-9]{0,3}([.]{1}[0-9]{0,2}){0,1}$/.test(e)},S=function(e){return localStorage.setItem("token",e)},k=function(){return localStorage.removeItem("token")},C=function(e){var t="An unexpected error has ocurred.";try{t=e.response.data.msg}finally{return t}},W=function(e,t,n){console.error(e),n(Object(b.a)(Object(b.a)({},t),{},{open:!1})),setTimeout((function(){n({open:!0,message:C(e),severity:"error"})}),150)},F=function(e,t,n){n(Object(b.a)(Object(b.a)({},t),{},{open:!1})),setTimeout((function(){n({open:!0,message:e,severity:"success"})}),150)},T=n(73),N=n(492),A=n(493),D=n(84),z=n(269),M=n(85),B=n(516),I=n(495),V=n(494),L=n(510),P=n(491),H=n(3),E=function(e){var t=e.tabValue,n=e.setTabValue,a=Object(j.g)(),i=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}};return Object(H.jsx)("nav",{children:Object(H.jsxs)(L.a,{value:t,onChange:function(e,t){a.push(function(e){var t=m.filter((function(t){return t.tab===e}));return t.length?t[0].path:0}(t)),n(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"navbar",children:[Object(H.jsx)(P.a,Object(b.a)({label:"New Weighing"},i(0))),Object(H.jsx)(P.a,Object(b.a)({label:"Weighings"},i(1)))]})})},R=function(e){var t=e.token,n=e.setToken,i=e.alert,r=e.setAlert,c=e.profile,o=e.setProfile,s=e.tabValue,l=e.setTabValue,d=Object(a.useState)(null),m=Object(u.a)(d,2),p=m[0],f=m[1],O=Object(j.g)(),x=function(){return f(null)},v={icon:{width:"1.75rem",marginRight:"0.5rem"},authButton:{color:"#fff",borderColor:"#fff",padding:"0"},buttonLink:{display:"inline-block",color:"inherit",lineHeight:"1rem",textDecoration:"none",padding:"0.4rem 0.8rem"}};return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(N.a,{position:"static",children:Object(H.jsxs)(A.a,{children:[Object(H.jsx)("img",{src:h,style:v.icon,alt:"scale"}),Object(H.jsx)("h1",{children:"WeighMe"}),t?c?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(D.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){return f(e.currentTarget)},style:{color:"#fff",textTransform:"none",overflow:"hidden"},children:[Object(H.jsx)("img",{src:g,style:v.icon,alt:"user"}),c.name]}),Object(H.jsx)(z.a,{id:"simple-menu",anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:x,children:Object(H.jsx)(M.a,{onClick:function(){x(),k(),n(null),o(null),O.push("/"),l(0),F("Signed out.",i,r)},style:{padding:"0"},children:Object(H.jsx)("span",{style:Object(b.a)(Object(b.a)({},v.buttonLink),{},{padding:"0.6rem 1.1rem"}),children:"Sign Out"})})})]}):Object(H.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(H.jsx)(V.a,{width:"26px",height:"26px",variant:"circle",style:{backgroundColor:"rgba(203, 213, 224, 0.7)",marginRight:"10px"},children:Object(H.jsx)(B.a,{})}),Object(H.jsx)(V.a,{width:"100px",height:"16px",variant:"rect",style:{backgroundColor:"rgba(203, 213, 224, 0.7)",borderRadius:"2px"}})]}):Object(H.jsxs)(I.a,{variant:"text","aria-label":"authenticate user actions",children:[Object(H.jsx)(D.a,{style:v.authButton,children:Object(H.jsx)(T.b,{to:"/",style:v.buttonLink,children:"Sign In"})}),Object(H.jsx)(D.a,{style:v.authButton,children:Object(H.jsx)(T.b,{to:"/register",style:v.buttonLink,children:"New user"})})]})]})}),t?Object(H.jsx)(E,{tabValue:s,setTabValue:l}):Object(H.jsx)(H.Fragment,{})]})},J=(n(309),n(205),n.p+"static/media/key.e5b44f96.svg"),_=n(155),K=n.n(_),U="https://weighme.herokuapp.com/api",q={headers:{"content-type":"application/json"}},G=function(e,t){return K.a.get(U+t,{headers:Object(b.a)(Object(b.a)({},q.headers),{},{Authorization:"Bearer ".concat(e)})})},$=function(e,t,n){return K.a.post(U+n,t,{headers:Object(b.a)(Object(b.a)({},q.headers),{},{Authorization:"Bearer ".concat(e)})})},Y=function(e,t){return K.a.post(U+t,e,q)},Z=function(e){return G(e,"/profile")},Q=function(e){return G(e,"/weighings")},X=n(496),ee=n(196),te=function(e){var t=e.setToken,n=e.alert,i=e.setAlert,r=Object(a.useState)(""),c=Object(u.a)(r,2),o=c[0],s=c[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),j=d[0],b=d[1],h={icon:{width:"1.5rem",margin:"0 0.5rem 0.5rem 0"}};return Object(H.jsxs)("section",{className:"auth-form-section",children:[Object(H.jsxs)("h2",{children:["Sign ",Object(H.jsx)("b",{children:"Me"})," in"]}),Object(H.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={username:o,password:j};(function(e){return Y(e,"/login")})(JSON.stringify(a)).then((function(e){S(e.data.access_token),t(e.data.access_token),F("Signed in!",n,i)})).catch((function(e){return W(e,n,i)}))},children:[Object(H.jsx)("div",{style:{marginBottom:"1rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:g,style:h.icon,alt:"user"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{label:"Username",autoComplete:"off",value:o,onChange:function(e){var t=e.target.value;v(t)&&s(t)}})})]})}),Object(H.jsx)("div",{style:{marginBottom:"2rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:J,style:h.icon,alt:"password"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{type:"password",label:"Password",autoComplete:"off",value:j,onChange:function(e){var t=e.target.value;y(t)&&b(t)}})})]})}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",disabled:!o||!j,children:"Sign In"})]})]})},ne=n.p+"static/media/double-key.c4a15f9f.svg",ae=function(e){var t=e.setToken,n=e.alert,i=e.setAlert,r=Object(a.useState)(""),c=Object(u.a)(r,2),o=c[0],s=c[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),j=d[0],b=d[1],h=Object(a.useState)(""),m=Object(u.a)(h,2),p=m[0],f=m[1],O={icon:{width:"1.5rem",margin:"0 0.5rem 1.8rem 0"}};return Object(H.jsxs)("section",{className:"auth-form-section",children:[Object(H.jsxs)("h2",{children:["Register ",Object(H.jsx)("b",{children:"Me"})]}),Object(H.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={username:o,password:j,confirmation:p};(function(e){return Y(e,"/register")})(JSON.stringify(a)).then((function(e){S(e.data.access_token),t(e.data.access_token),F("Signed up!",n,i)})).catch((function(e){return W(e,n,i)}))},children:[Object(H.jsx)("div",{style:{marginBottom:"1rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:g,style:O.icon,alt:"user"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{label:"Username",helperText:"* Max 12 chars. No spaces.",autoComplete:"off",required:!0,value:o,onChange:function(e){var t=e.target.value;v(t)&&s(t)}})})]})}),Object(H.jsx)("div",{style:{marginBottom:"1rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:J,style:O.icon,alt:"password"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{type:"password",label:"Password",helperText:"* Max 20 chars. No spaces.",autoComplete:"off",required:!0,value:j,onChange:function(e){var t=e.target.value;y(t)&&b(t)}})})]})}),Object(H.jsx)("div",{style:{marginBottom:"1.5rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:ne,style:O.icon,alt:"confirm"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{type:"password",label:"Confirm Password",helperText:"* Max 20 chars. No spaces.",autoComplete:"off",required:!0,value:p,onChange:function(e){var t=e.target.value;y(t)&&f(t)}})})]})}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",disabled:!o||!j||!p,children:"Sign Up"})]})]})},ie=(n(327),n.p+"static/media/bg-scale.50ec51df.svg"),re=n.p+"static/media/add.d3ae5c1f.svg",ce=n.p+"static/media/add-disabled.57abca65.svg",oe=n(125),se=n(497),le=n(499),de=n(500),ue=function(e){var t=e.token,n=e.addWeighingToState,i=e.alert,r=e.setAlert,c=Object(a.useState)(""),o=Object(u.a)(c,2),s=o[0],l=o[1],d=Object(a.useState)(p),j=Object(u.a)(d,2),h=j[0],g=j[1],m={section:{boxShadow:"0px 7px 8px #888888",borderRadius:"60px",backgroundImage:"url(".concat(ie,")"),backgroundRepeat:"no-repeat",backgroundSize:"100%",padding:"2rem",width:"300px",height:"300px",boxSizing:"border-box"},form:{paddingTop:"7rem",position:"relative"}};return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("h2",{children:["Let's ",Object(H.jsx)("p",{children:Object(H.jsx)("b",{children:"Weigh Me!"})})]}),Object(H.jsx)("section",{id:"addWeighingForm",style:m.section,children:Object(H.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={weight:s,datetime:h};(function(e,t){return $(e,t,"/add_weighing")})(t,JSON.stringify(a)).then((function(e){a.id=e.data.id,n(Object(b.a)(Object(b.a)({},a),{},{weight:Number(a.weight)})),l(""),g(p),F("Weighing added!",i,r)})).catch((function(e){return W(e,i,r)}))},style:m.form,children:[Object(H.jsx)("div",{style:{marginBottom:"1.2rem"},children:Object(H.jsx)(oe.a,{children:Object(H.jsx)(se.a,{id:"addWeighingFormWeight",value:s,type:"number",inputProps:{step:.01,min:0,max:999.99},autoComplete:"off",placeholder:"0.00",onChange:function(e){var t=e.target.value;w(t.toString())&&l(t)},onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},endAdornment:Object(H.jsx)(le.a,{position:"end",children:Object(H.jsx)("span",{style:{color:"#fff",fontSize:"1rem",marginTop:"2rem"},children:"Kg"})}),style:{fontSize:"3rem"}})})}),Object(H.jsx)("div",{children:Object(H.jsx)(ee.a,{id:"addWeighingFormDatepicker",label:"When?",type:"datetime-local",autoComplete:"off",value:h,InputLabelProps:{shrink:!0},onChange:function(e){return g(f(e.target.value))}})}),Object(H.jsx)(de.a,{id:"addWeighingFormAddButton","aria-label":"Add",type:"submit",disabled:!s||!h,children:Object(H.jsx)("img",{src:s&&h?re:ce,alt:"Add",style:s&&h?{width:"100%"}:{width:"100%",opacity:"0.5"}})})]})})]})},je=(n(328),n(508)),be=n(514),he=n(521),ge=n(505),me=n(512),pe=n(523),fe=n(519),Oe=function(e){var t=e.weighings,n=Object(a.useState)({}),i=Object(u.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)({}),s=Object(u.a)(o,2),l=s[0],d=s[1],j=Object(a.useState)(window.innerWidth),b=Object(u.a)(j,2),h=b[0],g=b[1],m=function(e){return g(e.target.innerWidth)};Object(a.useEffect)((function(){return window.addEventListener("resize",m),function(){return window.removeEventListener("resize",m)}}),[]);var p=t.map((function(e){return{x:new Date(e.datetime),y:e.weight}}));return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(je.a,{width:h,theme:be.a.material,height:300,scale:{x:"time"},domainPadding:{y:20,x:20},containerComponent:Object(H.jsx)(he.a,{responsive:!0,zoomDimension:"x",zoomDomain:l,onZoomDomainChange:function(e){return c(e)},style:{margin:"auto",width:"90%",height:"300px"}}),children:[Object(H.jsx)(ge.a,{data:p,animate:{onLoad:{duration:1200}},style:{data:{stroke:"tomato"}}}),Object(H.jsx)(me.a,{data:p,animate:{onLoad:{duration:1200}},style:{data:{fill:"tomato"}}})]}),Object(H.jsxs)(je.a,{width:h,height:90,scale:{x:"time"},domainPadding:{y:5,x:19},padding:{top:5,left:50,right:50,bottom:30},containerComponent:Object(H.jsx)(pe.a,{responsive:!0,brushDimension:"x",brushDomain:r,onBrushDomainChange:function(e){return d(e)},style:{margin:"0 auto 3rem auto",width:"90%",height:"90px"}}),children:[Object(H.jsx)(fe.a,{}),Object(H.jsx)(ge.a,{data:p,animate:{onLoad:{duration:1200}},style:{data:{stroke:"tomato"}}})]})]})},xe=n.p+"static/media/edit.314ec8e2.svg",ve=n(92),ye=n(198),we=n(193),Se=[{label:"is",value:"is",getApplyFilterFn:function(e,t){return e.columnField&&e.value&&e.operatorValue?function(n){var a=t.valueGetter?t.valueGetter(n):n.value;return e.value.indexOf(a)>=0}:null},InputComponent:function(e){var t=e.item,n=e.applyValue;return Object(H.jsxs)(oe.a,{children:[Object(H.jsx)(ye.a,{shrink:!0,htmlFor:"custom-months-filter",children:"Select month/s"}),Object(H.jsx)(we.a,{multiple:!0,native:!0,value:t.value,onChange:function(e){for(var a=e.target.options,i=[],r=0,c=a.length;r<c;r+=1)a[r].selected&&i.push(a[r].value);n(Object(b.a)(Object(b.a)({},t),{},{value:i}))},inputProps:{id:"custom-months-filter"},children:O.map((function(e){return Object(H.jsx)("option",{value:e,children:e},e)}))})]})},InputComponentProps:{type:"array"}}],ke=n(45),Ce=Object(ke.a)((function(e){return{root:{flexDirection:"column","& .ant-empty-img-1":{fill:"light"===e.palette.type?"#aeb8c2":"#262626"},"& .ant-empty-img-2":{fill:"light"===e.palette.type?"#f5f5f7":"#595959"},"& .ant-empty-img-3":{fill:"light"===e.palette.type?"#dce0e6":"#434343"},"& .ant-empty-img-4":{fill:"light"===e.palette.type?"#fff":"#1c1c1c"},"& .ant-empty-img-5":{fillOpacity:"light"===e.palette.type?"0.8":"0.08",fill:"light"===e.palette.type?"#f5f5f5":"#fff"}},label:{marginTop:e.spacing(1)}}})),We=function(){var e=Ce();return Object(H.jsxs)(ve.c,{className:e.root,children:[Object(H.jsx)("svg",{width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false",children:Object(H.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(H.jsxs)("g",{transform:"translate(24 31.67)",children:[Object(H.jsx)("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),Object(H.jsx)("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),Object(H.jsx)("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),Object(H.jsx)("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})]}),Object(H.jsx)("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),Object(H.jsxs)("g",{className:"ant-empty-img-4",transform:"translate(149.65 15.383)",children:[Object(H.jsx)("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),Object(H.jsx)("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"})]})]})}),Object(H.jsx)("div",{className:e.label,children:"No weighings yet to show"})]})},Fe=n(513),Te=n(504),Ne=n(446),Ae=Object(ke.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #444",borderRadius:"6px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),backgroundImage:"linear-gradient(#a4dad2, #bce08a)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}})),De=function(e){var t=e.open,n=e.setOpen,a=e.token,i=e.alert,r=e.setAlert,c=e.id,o=e.weight,s=e.setEditWeight,l=e.datetime,d=e.setEditDateTime,u=e.editWeighingFromState,j=e.removeWeighingFromState,h=Ae(),g=function(){n(!1)};return Object(H.jsx)(Fe.a,{className:h.modal,open:t,onClose:g,closeAfterTransition:!0,BackdropComponent:Te.a,BackdropProps:{timeout:500},children:Object(H.jsx)(Ne.a,{in:t,children:Object(H.jsxs)("div",{className:h.paper,children:[Object(H.jsx)("h2",{children:"Edit Weighing"}),Object(H.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(H.jsx)("div",{style:{marginBottom:"1.2rem",textAlign:"center"},children:Object(H.jsx)(oe.a,{children:Object(H.jsx)(se.a,{id:"addWeighingFormWeight",value:o,type:"number",inputProps:{step:.01,min:0,max:999.99},autoComplete:"off",onChange:function(e){var t=e.target.value;w(t.toString())&&s(t)},onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},endAdornment:Object(H.jsx)(le.a,{position:"end",children:Object(H.jsx)("span",{style:{fontSize:"1rem",marginTop:"2rem"},children:"Kg"})}),style:{fontSize:"3rem"}})})}),Object(H.jsx)("div",{style:{marginBottom:"3rem",textAlign:"center"},children:Object(H.jsx)(ee.a,{id:"addWeighingFormDatepicker",label:"When?",type:"datetime-local",autoComplete:"off",value:l,InputLabelProps:{shrink:!0},onChange:function(e){return d(f(e.target.value))}})}),Object(H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(H.jsx)(D.a,{variant:"contained",color:"secondary",onClick:function(){var e={id:c};(function(e,t){return $(e,t,"/delete_weighing")})(a,JSON.stringify(e)).then((function(t){j(e.id),g(),F("Weighing deleted.",i,r)})).catch((function(e){return W(e,i,r)}))},children:Object(H.jsx)("b",{children:"Delete"})}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",onClick:function(){var e={id:c,weight:o.toString(),datetime:l};(function(e,t){return $(e,t,"/update_weighing")})(a,JSON.stringify(e)).then((function(t){u(Object(b.a)(Object(b.a)({},e),{},{weight:Number(e.weight)})),g(),F("Weighing updated.",i,r)})).catch((function(e){return W(e,i,r)}))},disabled:!c||!o||!l,children:Object(H.jsx)("b",{children:"Update"})}),Object(H.jsx)(D.a,{variant:"contained",onClick:g,children:Object(H.jsx)("b",{children:"Cancel"})})]})]})]})})})},ze=function(e){var t=e.weighings,n=e.editWeighingFromState,i=e.removeWeighingFromState,r=e.token,c=e.alert,o=e.setAlert,s=Object(a.useState)(!1),l=Object(u.a)(s,2),d=l[0],j=l[1],h=Object(a.useState)(""),g=Object(u.a)(h,2),m=g[0],f=g[1],O=Object(a.useState)(""),v=Object(u.a)(O,2),y=v[0],w=v[1],S=Object(a.useState)(""),k=Object(u.a)(S,2),C=k[0],W=k[1],F=t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{datetime:new Date(e.datetime),month:x(e.datetime)})})),T=[{field:"datetime",type:"dateTime",headerName:"Date & Time",flex:1.5,headerClassName:"weighing-grid-th"},{field:"month",type:"string",headerName:"Month",hide:!0,headerClassName:"weighing-grid-th",filterOperators:Se},{field:"weight",type:"string",headerName:"Weight (kg)",flex:1,headerClassName:"weighing-grid-th",renderCell:function(e){return Object(H.jsxs)("div",{style:{textAlign:"center",width:"100%",position:"relative"},children:[e.value,Object(H.jsx)(D.a,{variant:"contained",color:"primary",size:"small",style:{position:"absolute",right:"1px",top:"3px",minWidth:"0px",padding:"0",borderRadius:"50%"},onClick:function(){return t=e.id,n=e.value,a=e.row.datetime,f(t),w(n),W(p(a)),void j(!0);var t,n,a},children:Object(H.jsx)("img",{src:xe,style:{width:"25px"},alt:"edit"})})]})}}];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ve.a,{autoHeight:!0,rows:F,rowHeight:35,columns:T,disableColumnMenu:!0,disableColumnSelector:!0,disableSelectionOnClick:!0,components:{NoRowsOverlay:We,Toolbar:function(){return Object(H.jsxs)(ve.d,{children:[Object(H.jsx)(ve.b,{}),Object(H.jsx)(ve.e,{})]})}},pagination:!0,pageSize:25,className:!t.length&&"zero-state-grid"}),Object(H.jsx)(De,{open:d,setOpen:j,id:m,weight:y,setEditWeight:w,datetime:C,setEditDateTime:W,token:r,alert:c,setAlert:o,editWeighingFromState:n,removeWeighingFromState:i})]})},Me=function(e){var t=e.weighings,n=e.editWeighingFromState,a=e.removeWeighingFromState,i=e.token,r=e.alert,c=e.setAlert;return Object(H.jsxs)("section",{children:[Object(H.jsx)("h2",{style:{marginBottom:"0"},children:"Chart"}),Object(H.jsx)(Oe,{weighings:t}),Object(H.jsx)("h2",{children:"Grid"}),Object(H.jsx)(ze,{weighings:t,token:i,alert:r,setAlert:c,editWeighingFromState:n,removeWeighingFromState:a})]})},Be=function(e){var t=e.token,n=e.setToken,a=e.alert,i=e.setAlert,r=e.weighings,c=e.addWeighingToState,o=e.editWeighingFromState,s=e.removeWeighingFromState,l=e.tabValue,d=e.setTabValue;return Object(H.jsx)("main",{className:1===l?"weighings":"",children:t?Object(H.jsxs)(j.d,{children:[Object(H.jsx)(j.b,{path:"/",exact:!0,render:function(e){return Object(H.jsx)(ue,Object(b.a)(Object(b.a)({},e),{},{token:t,alert:a,setAlert:i,addWeighingToState:c,setTabValue:d}))}}),Object(H.jsx)(j.b,{path:"/weighings",render:function(e){return Object(H.jsx)(Me,Object(b.a)(Object(b.a)({},e),{},{token:t,alert:a,setAlert:i,weighings:r,editWeighingFromState:o,removeWeighingFromState:s}))}}),Object(H.jsx)(j.a,{to:"/"})]}):Object(H.jsxs)(j.d,{children:[Object(H.jsx)(j.b,{path:"/",exact:!0,render:function(e){return Object(H.jsx)(te,Object(b.a)(Object(b.a)({},e),{},{setToken:n,alert:a,setAlert:i}))}}),Object(H.jsx)(j.b,{path:"/register",render:function(e){return Object(H.jsx)(ae,Object(b.a)(Object(b.a)({},e),{},{setToken:n,alert:a,setAlert:i}))}}),Object(H.jsx)(j.a,{to:"/"})]})})},Ie=(n(434),function(){return Object(H.jsxs)("footer",{children:[Object(H.jsx)("p",{children:"Developed by Manuel Figueira - 2021"}),Object(H.jsxs)("p",{children:["Icons made by ",Object(H.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(H.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})}),Ve=n(515),Le=n(509),Pe=function(e){return Object(H.jsx)(Le.a,Object(b.a)({elevation:6,variant:"filled"},e))},He=function(e){var t=e.open,n=e.setAlert,a=e.message,i=e.severity,r=function(e,t){"clickaway"!==t&&n({open:!1,message:a,severity:i})};return Object(H.jsx)(Ve.a,{open:t,autoHideDuration:4e3,anchorOrigin:{vertical:"bottom",horizontal:"right"},onClose:r,style:{bottom:function(){var e=document.getElementsByTagName("footer")[0],t=10;return e&&(t+=e.clientHeight),"".concat(t,"px")}(),position:"absolute"},children:Object(H.jsx)(Pe,{onClose:r,severity:i,style:{fontSize:"1rem"},children:a})})};var Ee=function(){var e=Object(j.h)(),t=Object(a.useState)(localStorage.getItem("token")),n=Object(u.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)(null),s=Object(u.a)(c,2),b=s[0],h=s[1],g=Object(a.useState)([]),p=Object(u.a)(g,2),f=p[0],O=p[1],x=Object(a.useState)((function(){return function(e){var t=m.filter((function(t){return t.path===e}));return t.length?t[0].tab:0}(e.pathname)})),v=Object(u.a)(x,2),y=v[0],w=v[1],S=Object(a.useState)({open:!1,message:"success",severity:"success"}),C=Object(u.a)(S,2),F=C[0],T=C[1];return Object(a.useEffect)((function(){i&&Object(d.a)(l.a.mark((function e(){var t,n,a,c,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Z(i),n=Q(i),e.next=5,Promise.all([t,n]);case 5:a=e.sent,c=Object(u.a)(a,2),o=c[0],s=c[1],h(o.data),O(s.data),e.next=21;break;case 13:e.prev=13,e.t0=e.catch(0),k(),r(null),h(null),w(0),O([]),W(e.t0,{message:"",severity:"error"},T);case 21:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[i]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(R,{token:i,setToken:r,alert:F,setAlert:T,profile:b,setProfile:h,tabValue:y,setTabValue:w}),Object(H.jsx)(Be,{token:i,setToken:r,alert:F,setAlert:T,weighings:f,addWeighingToState:function(e){return O((function(t){return[].concat(Object(o.a)(t),[e])}))},editWeighingFromState:function(e){return O(f.map((function(t){return t.id===e.id?e:t})))},removeWeighingFromState:function(e){return O(f.filter((function(t){return t.id!==e})))},tabValue:y,setTabValue:w}),Object(H.jsx)(Ie,{}),Object(H.jsx)(He,{open:F.open,setAlert:T,message:F.message,severity:F.severity})]})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,524)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(H.jsx)(i.a.StrictMode,{children:Object(H.jsx)(T.a,{children:Object(H.jsx)(Ee,{})})}),document.getElementById("root")),Re()}},[[435,1,2]]]);
//# sourceMappingURL=main.84184247.chunk.js.map