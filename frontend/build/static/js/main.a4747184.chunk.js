(this["webpackJsonpweighme-frontend"]=this["webpackJsonpweighme-frontend"]||[]).push([[0],{204:function(e,t,n){},205:function(e,t,n){},297:function(e,t,n){},299:function(e,t,n){},309:function(e,t,n){},327:function(e,t,n){},328:function(e,t,n){},434:function(e,t,n){},435:function(e,t,n){},436:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(23),c=n.n(r),o=(n(297),n(25)),s=n(179),l=n.n(s),d=n(251),u=n(9),j=(n(299),n(27)),h=n(18),b=(n(204),n.p+"static/media/scale.8fe8eb1f.svg"),g=n.p+"static/media/user.c3f44b78.svg",m=[{path:"/",tab:0},{path:"/weighings",tab:1}],p=function(e){var t=e?new Date(e):new Date,n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();i=i<10?"0"+i:i,a=a<10?"0"+a:a;var r=t.getHours(),c=t.getMinutes();return r=r<10?"0"+r:r,c=c<10?"0"+c:c,"".concat(n,"-").concat(a,"-").concat(i,"T").concat(r,":").concat(c)},O=function(e){return e.indexOf(":")===e.lastIndexOf(":")?e:e.substring(0,e.lastIndexOf(":"))},f=["January","February","March","April","May","June","July","August","September","October","November","December"],x=function(e){var t=new Date(e);return f[t.getMonth()]},v=function(e){return/^[\S]{0,12}$/.test(e)},y=function(e){return/^[\S]{0,20}$/.test(e)},w=function(e){return/^[0-9]{0,3}([.]{1}[0-9]{0,2}){0,1}$/.test(e)},S=function(e){return localStorage.setItem("token",e)},k=function(){return localStorage.removeItem("token")},C=function(e){var t="An unexpected error has ocurred.";try{t=e.response.data.msg}finally{return t}},W=function(e,t,n){console.error(e),n(Object(h.a)(Object(h.a)({},t),{},{open:!1})),setTimeout((function(){n({open:!0,message:C(e),severity:"error"})}),150)},F=function(e,t,n){n(Object(h.a)(Object(h.a)({},t),{},{open:!1})),setTimeout((function(){n({open:!0,message:e,severity:"success"})}),150)},T=n(73),N=n(493),A=n(494),D=n(84),z=n(269),M=n(85),B=n(517),I=n(496),V=n(495),L=n(511),P=n(492),H=n(3),R=function(e){var t=e.tabValue,n=e.setTabValue,a=Object(j.g)(),i=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}};return Object(H.jsx)("nav",{style:{backgroundColor:"#a8dac5"},children:Object(H.jsxs)(L.a,{value:t,onChange:function(e,t){a.push(function(e){var t=m.filter((function(t){return t.tab===e}));return t.length?t[0].path:0}(t)),n(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"navbar",children:[Object(H.jsx)(P.a,Object(h.a)({label:"New Weighing"},i(0))),Object(H.jsx)(P.a,Object(h.a)({label:"Weighings"},i(1)))]})})},E=function(e){var t=e.token,n=e.setToken,i=e.alert,r=e.setAlert,c=e.profile,o=e.setProfile,s=e.tabValue,l=e.setTabValue,d=Object(a.useState)(null),m=Object(u.a)(d,2),p=m[0],O=m[1],f=Object(j.g)(),x=function(){return O(null)},v={icon:{width:"1.75rem",marginRight:"0.5rem"},authButton:{color:"#fff",borderColor:"#fff",padding:"0"},buttonLink:{display:"inline-block",color:"inherit",lineHeight:"1rem",textDecoration:"none",padding:"0.4rem 0.8rem"}};return Object(H.jsxs)("div",{style:{position:"fixed",top:0,width:"100%",maxWidth:"900px",zIndex:999},children:[Object(H.jsx)(N.a,{position:"static",children:Object(H.jsxs)(A.a,{children:[Object(H.jsx)("img",{src:b,style:v.icon,alt:"scale"}),Object(H.jsx)("h1",{children:"WeighMe"}),t?c?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(D.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){return O(e.currentTarget)},style:{color:"#fff",textTransform:"none",overflow:"hidden"},children:[Object(H.jsx)("img",{src:g,style:v.icon,alt:"user"}),c.name]}),Object(H.jsx)(z.a,{id:"simple-menu",anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:x,children:Object(H.jsx)(M.a,{onClick:function(){x(),k(),n(null),o(null),f.push("/"),l(0),F("Signed out.",i,r)},style:{padding:"0"},children:Object(H.jsx)("span",{style:Object(h.a)(Object(h.a)({},v.buttonLink),{},{padding:"0.6rem 1.1rem"}),children:"Sign Out"})})})]}):Object(H.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(H.jsx)(V.a,{width:"26px",height:"26px",variant:"circle",style:{backgroundColor:"rgba(203, 213, 224, 0.7)",marginRight:"10px"},children:Object(H.jsx)(B.a,{})}),Object(H.jsx)(V.a,{width:"100px",height:"16px",variant:"rect",style:{backgroundColor:"rgba(203, 213, 224, 0.7)",borderRadius:"2px"}})]}):Object(H.jsxs)(I.a,{variant:"text","aria-label":"authenticate user actions",children:[Object(H.jsx)(D.a,{style:v.authButton,children:Object(H.jsx)(T.b,{to:"/",style:v.buttonLink,children:"Sign In"})}),Object(H.jsx)(D.a,{style:v.authButton,children:Object(H.jsx)(T.b,{to:"/register",style:v.buttonLink,children:"New user"})})]})]})}),t?Object(H.jsx)(R,{tabValue:s,setTabValue:l}):Object(H.jsx)(H.Fragment,{})]})},J=(n(309),n(205),n.p+"static/media/key.e5b44f96.svg"),_=n(155),K=n.n(_),U="https://weighme.herokuapp.com/api",q={headers:{"content-type":"application/json"}},G=function(e,t){return K.a.get(U+t,{headers:Object(h.a)(Object(h.a)({},q.headers),{},{Authorization:"Bearer ".concat(e)})})},$=function(e,t,n){return K.a.post(U+n,t,{headers:Object(h.a)(Object(h.a)({},q.headers),{},{Authorization:"Bearer ".concat(e)})})},Y=function(e,t){return K.a.post(U+t,e,q)},Z=function(e){return G(e,"/profile")},Q=function(e){return G(e,"/weighings")},X=n(497),ee=n(196),te=n(442),ne=function(e){var t=e.setToken,n=e.alert,i=e.setAlert,r=Object(a.useState)(""),c=Object(u.a)(r,2),o=c[0],s=c[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],b=Object(a.useState)(!1),m=Object(u.a)(b,2),p=m[0],O=m[1],f={icon:{width:"1.5rem",margin:"0 0.5rem 0.5rem 0"}};return Object(H.jsxs)("section",{className:"auth-form-section",children:[Object(H.jsxs)("h2",{children:["Sign ",Object(H.jsx)("b",{children:"Me"})," in"]}),Object(H.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(!0);var a={username:o,password:j};(function(e){return Y(e,"/login")})(JSON.stringify(a)).then((function(e){S(e.data.access_token),t(e.data.access_token),F("Signed in!",n,i)})).catch((function(e){return W(e,n,i)})).finally(O(!1))},children:[Object(H.jsx)("div",{style:{marginBottom:"1rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:g,style:f.icon,alt:"user"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{label:"Username",autoComplete:"off",value:o,onChange:function(e){var t=e.target.value;v(t)&&s(t)}})})]})}),Object(H.jsx)("div",{style:{marginBottom:"2rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:J,style:f.icon,alt:"password"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{type:"password",label:"Password",autoComplete:"off",value:j,onChange:function(e){var t=e.target.value;y(t)&&h(t)}})})]})}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",disabled:!o||!j||p,children:p?Object(H.jsx)(te.a,{style:{height:"25px",width:"25px"}}):"Sign In"})]})]})},ae=n.p+"static/media/double-key.c4a15f9f.svg",ie=function(e){var t=e.setToken,n=e.alert,i=e.setAlert,r=Object(a.useState)(""),c=Object(u.a)(r,2),o=c[0],s=c[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],b=Object(a.useState)(""),m=Object(u.a)(b,2),p=m[0],O=m[1],f=Object(a.useState)(!1),x=Object(u.a)(f,2),w=x[0],k=x[1],C={icon:{width:"1.5rem",margin:"0 0.5rem 1.8rem 0"}};return Object(H.jsxs)("section",{className:"auth-form-section",children:[Object(H.jsxs)("h2",{children:["Register ",Object(H.jsx)("b",{children:"Me"})]}),Object(H.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(!0);var a={username:o,password:j,confirmation:p};(function(e){return Y(e,"/register")})(JSON.stringify(a)).then((function(e){S(e.data.access_token),t(e.data.access_token),F("Signed up!",n,i)})).catch((function(e){return W(e,n,i)})).finally(k(!1))},children:[Object(H.jsx)("div",{style:{marginBottom:"1rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:g,style:C.icon,alt:"user"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{label:"Username",helperText:"* Max 12 chars. No spaces.",autoComplete:"off",required:!0,value:o,onChange:function(e){var t=e.target.value;v(t)&&s(t)}})})]})}),Object(H.jsx)("div",{style:{marginBottom:"1rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:J,style:C.icon,alt:"password"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{type:"password",label:"Password",helperText:"* Max 20 chars. No spaces.",autoComplete:"off",required:!0,value:j,onChange:function(e){var t=e.target.value;y(t)&&h(t)}})})]})}),Object(H.jsx)("div",{style:{marginBottom:"1.5rem"},children:Object(H.jsxs)(X.a,{container:!0,alignItems:"flex-end",children:[Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)("img",{src:ae,style:C.icon,alt:"confirm"})}),Object(H.jsx)(X.a,{item:!0,children:Object(H.jsx)(ee.a,{type:"password",label:"Confirm Password",helperText:"* Max 20 chars. No spaces.",autoComplete:"off",required:!0,value:p,onChange:function(e){var t=e.target.value;y(t)&&O(t)}})})]})}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",type:"submit",disabled:!o||!j||!p||w,children:w?Object(H.jsx)(te.a,{style:{height:"25px",width:"25px"}}):"Sign Un"})]})]})},re=(n(327),n.p+"static/media/bg-scale.50ec51df.svg"),ce=n.p+"static/media/add.d3ae5c1f.svg",oe=n.p+"static/media/add-disabled.57abca65.svg",se=n(125),le=n(498),de=n(500),ue=n(501),je=function(e){var t=e.token,n=e.addWeighingToState,i=e.alert,r=e.setAlert,c=Object(a.useState)(""),o=Object(u.a)(c,2),s=o[0],l=o[1],d=Object(a.useState)(p),j=Object(u.a)(d,2),b=j[0],g=j[1],m=Object(a.useState)(!1),f=Object(u.a)(m,2),x=f[0],v=f[1],y={section:{boxShadow:"0px 7px 8px #888888",borderRadius:"60px",backgroundImage:"url(".concat(re,")"),backgroundRepeat:"no-repeat",backgroundSize:"100%",padding:"2rem",width:"300px",height:"300px",boxSizing:"border-box"},form:{paddingTop:"7rem",position:"relative"}};return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("h2",{children:["Let's ",Object(H.jsx)("p",{children:Object(H.jsx)("b",{children:"Weigh Me!"})})]}),Object(H.jsx)("section",{id:"addWeighingForm",style:y.section,children:Object(H.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(!0);var a={weight:s,datetime:b};(function(e,t){return $(e,t,"/add_weighing")})(t,JSON.stringify(a)).then((function(e){a.id=e.data.id,n(Object(h.a)(Object(h.a)({},a),{},{weight:Number(a.weight)})),l(""),g(p),F("Weighing added!",i,r)})).catch((function(e){return W(e,i,r)})).finally(v(!1))},style:y.form,children:[Object(H.jsx)("div",{style:{marginBottom:"1.2rem"},children:Object(H.jsx)(se.a,{children:Object(H.jsx)(le.a,{id:"addWeighingFormWeight",value:s,type:"number",inputProps:{step:.01,min:0,max:999.99},autoComplete:"off",placeholder:"0.00",onChange:function(e){var t=e.target.value;w(t.toString())&&l(t)},onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},endAdornment:Object(H.jsx)(de.a,{position:"end",children:Object(H.jsx)("span",{style:{color:"#fff",fontSize:"1rem",marginTop:"2rem"},children:"Kg"})}),style:{fontSize:"3rem"}})})}),Object(H.jsx)("div",{children:Object(H.jsx)(ee.a,{id:"addWeighingFormDatepicker",label:"When?",type:"datetime-local",autoComplete:"off",value:b,InputLabelProps:{shrink:!0},onChange:function(e){return g(O(e.target.value))}})}),Object(H.jsx)(ue.a,{id:"addWeighingFormAddButton","aria-label":"Add",type:"submit",disabled:!s||!b||x,children:x?Object(H.jsx)(te.a,{style:{height:"25px",width:"25px"}}):Object(H.jsx)("img",{src:s&&b?ce:oe,alt:"Add",style:s&&b&&!x?{width:"100%"}:{width:"100%",opacity:"0.5"}})})]})})]})},he=(n(328),n(509)),be=n(515),ge=n(522),me=n(506),pe=n(513),Oe=n(524),fe=n(520),xe=function(e){var t=e.weighings,n=Object(a.useState)({}),i=Object(u.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)({}),s=Object(u.a)(o,2),l=s[0],d=s[1],j=Object(a.useState)(window.innerWidth),h=Object(u.a)(j,2),b=h[0],g=h[1],m=function(e){return g(e.target.innerWidth)};Object(a.useEffect)((function(){return window.addEventListener("resize",m),function(){return window.removeEventListener("resize",m)}}),[]);var p=t.map((function(e){return{x:new Date(e.datetime),y:e.weight}}));return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(he.a,{width:b,theme:be.a.material,height:300,scale:{x:"time"},domainPadding:{y:20,x:20},containerComponent:Object(H.jsx)(ge.a,{responsive:!0,zoomDimension:"x",zoomDomain:l,onZoomDomainChange:function(e){return c(e)},style:{margin:"auto",width:"90%",height:"260px"},viewBox:"15 100 315 120"}),children:[Object(H.jsx)(me.a,{data:p,animate:{onLoad:{duration:1200}},style:{data:{stroke:"tomato"}}}),Object(H.jsx)(pe.a,{data:p,animate:{onLoad:{duration:1200}},style:{data:{fill:"tomato"}}})]}),Object(H.jsxs)(he.a,{width:b,height:90,scale:{x:"time"},domainPadding:{y:5,x:19},padding:{top:5,left:50,right:50,bottom:30},containerComponent:Object(H.jsx)(Oe.a,{responsive:!0,brushDimension:"x",brushDomain:r,onBrushDomainChange:function(e){return d(e)},style:{margin:"0 auto 3rem auto",width:"90%",height:"90px"}}),children:[Object(H.jsx)(fe.a,{}),Object(H.jsx)(me.a,{data:p,animate:{onLoad:{duration:1200}},style:{data:{stroke:"tomato"}}})]})]})},ve=n(92),ye=n(198),we=n(193),Se=[{label:"is",value:"is",getApplyFilterFn:function(e,t){return e.columnField&&e.value&&e.operatorValue?function(n){var a=t.valueGetter?t.valueGetter(n):n.value;return e.value.indexOf(a)>=0}:null},InputComponent:function(e){var t=e.item,n=e.applyValue;return Object(H.jsxs)(se.a,{children:[Object(H.jsx)(ye.a,{shrink:!0,htmlFor:"custom-months-filter",children:"Select month/s"}),Object(H.jsx)(we.a,{multiple:!0,native:!0,value:t.value,onChange:function(e){for(var a=e.target.options,i=[],r=0,c=a.length;r<c;r+=1)a[r].selected&&i.push(a[r].value);n(Object(h.a)(Object(h.a)({},t),{},{value:i}))},inputProps:{id:"custom-months-filter"},children:f.map((function(e){return Object(H.jsx)("option",{value:e,children:e},e)}))})]})},InputComponentProps:{type:"array"}}],ke=n(45),Ce=Object(ke.a)((function(e){return{root:{flexDirection:"column","& .ant-empty-img-1":{fill:"light"===e.palette.type?"#aeb8c2":"#262626"},"& .ant-empty-img-2":{fill:"light"===e.palette.type?"#f5f5f7":"#595959"},"& .ant-empty-img-3":{fill:"light"===e.palette.type?"#dce0e6":"#434343"},"& .ant-empty-img-4":{fill:"light"===e.palette.type?"#fff":"#1c1c1c"},"& .ant-empty-img-5":{fillOpacity:"light"===e.palette.type?"0.8":"0.08",fill:"light"===e.palette.type?"#f5f5f5":"#fff"}},label:{marginTop:e.spacing(1)}}})),We=function(){var e=Ce();return Object(H.jsxs)(ve.c,{className:e.root,children:[Object(H.jsx)("svg",{width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false",children:Object(H.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(H.jsxs)("g",{transform:"translate(24 31.67)",children:[Object(H.jsx)("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),Object(H.jsx)("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),Object(H.jsx)("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),Object(H.jsx)("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})]}),Object(H.jsx)("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),Object(H.jsxs)("g",{className:"ant-empty-img-4",transform:"translate(149.65 15.383)",children:[Object(H.jsx)("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),Object(H.jsx)("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"})]})]})}),Object(H.jsx)("div",{className:e.label,children:"No weighings yet to show"})]})},Fe=n.p+"static/media/edit.314ec8e2.svg",Te=n(514),Ne=n(505),Ae=n(447),De=Object(ke.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #444",borderRadius:"6px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),backgroundImage:"linear-gradient(#a4dad2, #bce08a)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}})),ze=function(e){var t=e.token,n=e.alert,i=e.setAlert,r=e.id,c=e.weight,o=e.datetime,s=e.editWeighingFromState,l=e.removeWeighingFromState,d=De(),j=Object(a.useState)(!1),b=Object(u.a)(j,2),g=b[0],m=b[1],p=Object(a.useState)(""),f=Object(u.a)(p,2),x=f[0],v=f[1],y=Object(a.useState)(!1),S=Object(u.a)(y,2),k=S[0],C=S[1],T=Object(a.useState)(""),N=Object(u.a)(T,2),A=N[0],z=N[1],M=Object(a.useState)(!1),B=Object(u.a)(M,2),I=B[0],V=B[1],L=Object(a.useState)(!1),P=Object(u.a)(L,2),R=P[0],E=P[1],J=Object(a.useState)(!1),_=Object(u.a)(J,2),K=_[0],U=_[1],q=function(){return m(!1)};return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(D.a,{variant:"contained",color:"primary",size:"small",style:{position:"absolute",right:"1px",top:"3px",minWidth:"0px",padding:"0",borderRadius:"50%"},onClick:function(){return m(!0)},children:Object(H.jsx)("img",{src:Fe,style:{width:"25px"},alt:"edit"})}),Object(H.jsx)(Te.a,{className:d.modal,open:g,onClose:q,closeAfterTransition:!0,BackdropComponent:Ne.a,BackdropProps:{timeout:500},children:Object(H.jsx)(Ae.a,{in:g,children:Object(H.jsxs)("div",{className:d.paper,children:[Object(H.jsx)("h2",{children:"Edit Weighing"}),Object(H.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(H.jsx)("div",{style:{marginBottom:"1.2rem",textAlign:"center"},children:Object(H.jsx)(se.a,{children:Object(H.jsx)(le.a,{id:"addWeighingFormWeight",value:k?x:c,type:"number",inputProps:{step:.01,min:0,max:999.99},autoComplete:"off",placeholder:"0.00",onChange:function(e){var t=e.target.value;w(t.toString())&&(v(t),k||C(!0))},onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},endAdornment:Object(H.jsx)(de.a,{position:"end",children:Object(H.jsx)("span",{style:{fontSize:"1rem",marginTop:"2rem"},children:"Kg"})}),style:{fontSize:"3rem"}})})}),Object(H.jsx)("div",{style:{marginBottom:"3rem",textAlign:"center"},children:Object(H.jsx)(ee.a,{id:"addWeighingFormDatepicker",label:"When?",type:"datetime-local",autoComplete:"off",value:I?A:o,InputLabelProps:{shrink:!0},onChange:function(e){z(O(e.target.value)),I||V(!0)}})}),Object(H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(H.jsx)(D.a,{variant:"contained",color:"secondary",onClick:function(){U(!0);var e={id:r};(function(e,t){return $(e,t,"/delete_weighing")})(t,JSON.stringify(e)).then((function(t){q(),l(e.id),F("Weighing deleted.",n,i)})).catch((function(e){return W(e,n,i)})).finally(U(!1))},disable:K,children:K?Object(H.jsx)(te.a,{style:{height:"25px",width:"25px"}}):"Delete"}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",onClick:function(){E(!0);var e={id:r,weight:k?x.toString():c.toString(),datetime:I?A:o};(function(e,t){return $(e,t,"/update_weighing")})(t,JSON.stringify(e)).then((function(t){q(),s(Object(h.a)(Object(h.a)({},e),{},{weight:Number(e.weight)})),F("Weighing updated.",n,i)})).catch((function(e){return W(e,n,i)})).finally(E(!1))},disabled:!r||!x&&!A||R,children:R?Object(H.jsx)(te.a,{style:{height:"25px",width:"25px"}}):"Update"}),Object(H.jsx)(D.a,{variant:"contained",onClick:q,children:"Cancel"})]})]})]})})})]})},Me=function(e){var t=e.token,n=e.alert,a=e.setAlert,i=e.weighings,r=e.editWeighingFromState,c=e.removeWeighingFromState,o=i.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{datetime:new Date(e.datetime),month:x(e.datetime)})})),s=[{field:"datetime",type:"dateTime",headerName:"Date & Time",flex:1.5,headerClassName:"weighing-grid-th"},{field:"month",type:"string",headerName:"Month",hide:!0,headerClassName:"weighing-grid-th",filterOperators:Se},{field:"weight",type:"string",headerName:"Weight (kg)",flex:1,headerClassName:"weighing-grid-th",renderCell:function(e){return Object(H.jsxs)("div",{style:{textAlign:"center",width:"100%",position:"relative"},children:[e.value,Object(H.jsx)(ze,{token:t,alert:n,setAlert:a,id:e.id,weight:e.value,datetime:p(e.row.datetime),editWeighingFromState:r,removeWeighingFromState:c})]})}}];return Object(H.jsx)(ve.a,{autoHeight:!0,rows:o,rowHeight:35,columns:s,disableColumnMenu:!0,disableColumnSelector:!0,disableSelectionOnClick:!0,components:{NoRowsOverlay:We,Toolbar:function(){return Object(H.jsxs)(ve.d,{children:[Object(H.jsx)(ve.b,{}),Object(H.jsx)(ve.e,{})]})}},pagination:!0,pageSize:25,className:!i.length&&"zero-state-grid"})},Be=function(e){var t=e.token,n=e.alert,a=e.setAlert,i=e.weighings,r=e.editWeighingFromState,c=e.removeWeighingFromState;return Object(H.jsxs)("section",{children:[Object(H.jsx)("h2",{style:{marginBottom:"0"},children:"Chart"}),Object(H.jsx)(xe,{weighings:i}),Object(H.jsx)("h2",{children:"Grid"}),Object(H.jsx)(Me,{weighings:i,token:t,alert:n,setAlert:a,editWeighingFromState:r,removeWeighingFromState:c})]})},Ie=function(e){var t=e.token,n=e.setToken,a=e.alert,i=e.setAlert,r=e.weighings,c=e.addWeighingToState,o=e.editWeighingFromState,s=e.removeWeighingFromState,l=e.tabValue,d=e.setTabValue;return Object(H.jsx)("main",{className:1===l?"weighings":"",style:{paddingTop:function(){var e=document.getElementsByTagName("header")[0],t=document.getElementsByTagName("nav")[0],n=40;return e&&(n+=e.clientHeight),t&&(n+=t.clientHeight),n=Math.max(n,104),"".concat(n,"px")}()},children:t?Object(H.jsxs)(j.d,{children:[Object(H.jsx)(j.b,{path:"/",exact:!0,render:function(e){return Object(H.jsx)(je,Object(h.a)(Object(h.a)({},e),{},{token:t,alert:a,setAlert:i,addWeighingToState:c,setTabValue:d}))}}),Object(H.jsx)(j.b,{path:"/weighings",render:function(e){return Object(H.jsx)(Be,Object(h.a)(Object(h.a)({},e),{},{token:t,alert:a,setAlert:i,weighings:r,editWeighingFromState:o,removeWeighingFromState:s}))}}),Object(H.jsx)(j.a,{to:"/"})]}):Object(H.jsxs)(j.d,{children:[Object(H.jsx)(j.b,{path:"/",exact:!0,render:function(e){return Object(H.jsx)(ne,Object(h.a)(Object(h.a)({},e),{},{setToken:n,alert:a,setAlert:i}))}}),Object(H.jsx)(j.b,{path:"/register",render:function(e){return Object(H.jsx)(ie,Object(h.a)(Object(h.a)({},e),{},{setToken:n,alert:a,setAlert:i}))}}),Object(H.jsx)(j.a,{to:"/"})]})})},Ve=(n(434),function(){return Object(H.jsxs)("footer",{children:[Object(H.jsx)("p",{children:"Developed by Manuel Figueira - 2021"}),Object(H.jsxs)("p",{children:["Icons made by ",Object(H.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(H.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})}),Le=(n(435),n(516)),Pe=n(510),He=function(e){return Object(H.jsx)(Pe.a,Object(h.a)({elevation:6,variant:"filled"},e))},Re=function(e){var t=e.open,n=e.setAlert,a=e.message,i=e.severity,r=function(e,t){"clickaway"!==t&&n({open:!1,message:a,severity:i})};return Object(H.jsx)(Le.a,{open:t,autoHideDuration:4e3,anchorOrigin:{vertical:"bottom",horizontal:"right"},onClose:r,style:{bottom:function(){var e=document.getElementsByTagName("footer")[0],t=12;return e&&(t+=e.clientHeight),console.log(window.screen.width),"".concat(t,"px")}(),position:"fixed"},children:Object(H.jsx)(He,{onClose:r,severity:i,style:{fontSize:"1rem"},children:a})})};var Ee=function(){var e=Object(j.h)(),t=Object(a.useState)(localStorage.getItem("token")),n=Object(u.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)(null),s=Object(u.a)(c,2),h=s[0],b=s[1],g=Object(a.useState)([]),p=Object(u.a)(g,2),O=p[0],f=p[1],x=Object(a.useState)((function(){return function(e){var t=m.filter((function(t){return t.path===e}));return t.length?t[0].tab:0}(e.pathname)})),v=Object(u.a)(x,2),y=v[0],w=v[1],S=Object(a.useState)({open:!1,message:"success",severity:"success"}),C=Object(u.a)(S,2),F=C[0],T=C[1];return Object(a.useEffect)((function(){i&&Object(d.a)(l.a.mark((function e(){var t,n,a,c,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Z(i),n=Q(i),e.next=5,Promise.all([t,n]);case 5:a=e.sent,c=Object(u.a)(a,2),o=c[0],s=c[1],b(o.data),f(s.data),e.next=21;break;case 13:e.prev=13,e.t0=e.catch(0),k(),r(null),b(null),w(0),f([]),W(e.t0,{message:"",severity:"error"},T);case 21:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[i]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(E,{token:i,setToken:r,alert:F,setAlert:T,profile:h,setProfile:b,tabValue:y,setTabValue:w}),Object(H.jsx)(Ie,{token:i,setToken:r,alert:F,setAlert:T,weighings:O,addWeighingToState:function(e){return f((function(t){return[].concat(Object(o.a)(t),[e]).sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)}))}))},editWeighingFromState:function(e){return f(O.map((function(t){return t.id===e.id?e:t})))},removeWeighingFromState:function(e){return f(O.filter((function(t){return t.id!==e})))},tabValue:y,setTabValue:w}),Object(H.jsx)(Ve,{}),Object(H.jsx)(Re,{open:F.open,setAlert:T,message:F.message,severity:F.severity})]})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,525)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(H.jsx)(i.a.StrictMode,{children:Object(H.jsx)(T.a,{children:Object(H.jsx)(Ee,{})})}),document.getElementById("root")),Je()}},[[436,1,2]]]);
//# sourceMappingURL=main.a4747184.chunk.js.map