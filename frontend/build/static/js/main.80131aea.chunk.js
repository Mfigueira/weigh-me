(this["webpackJsonpweighme-frontend"]=this["webpackJsonpweighme-frontend"]||[]).push([[0],{203:function(e,t,n){},204:function(e,t,n){},295:function(e,t,n){},297:function(e,t,n){},307:function(e,t,n){},325:function(e,t,n){},326:function(e,t,n){},328:function(e,t,n){},433:function(e,t,n){},434:function(e,t,n){},435:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(23),c=n.n(r),o=(n(295),n(25)),s=n(177),l=n.n(s),d=n(250),u=n(9),j=(n(297),n(27)),b=n(16),h=(n(203),n.p+"static/media/scale.8fe8eb1f.svg"),g=n.p+"static/media/user.c3f44b78.svg",m=n(72),O=n(511),p=n(492),x=[{path:"/",tab:0},{path:"/grid",tab:1},{path:"/chart",tab:2}],f=function(e){var t=e?new Date(e):new Date,n=t.getFullYear(),a="".concat(t.getMonth()+1).padStart(2,0),i="".concat(t.getDate()).padStart(2,0),r="".concat(t.getHours()).padStart(2,0),c="".concat(t.getMinutes()).padStart(2,0);return"".concat(n,"-").concat(a,"-").concat(i,"T").concat(r,":").concat(c)},v=function(e){return e.split(":").length>2?e.slice(0,e.lastIndexOf(":")):e},y=["January","February","March","April","May","June","July","August","September","October","November","December"],w=function(e){return/^[\S]{0,12}$/.test(e)},S=function(e){return/^[\S]{0,20}$/.test(e)},k=function(e){return/^[0-9]{0,3}([.]{1}[0-9]{0,2}){0,1}$/.test(e)},C=function(e){return localStorage.setItem("token",e)},W=function(){return localStorage.removeItem("token")},F=function(e){var t,n,a;return null!==(t=null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.msg)&&void 0!==t?t:"An unexpected error ocurred."},T=function(e,t,n){console.error(e),n(Object(b.a)(Object(b.a)({},t),{},{open:!1})),setTimeout((function(){n({open:!0,message:F(e),severity:"error"})}),150)},A=function(e,t,n){n(Object(b.a)(Object(b.a)({},t),{},{open:!1})),setTimeout((function(){n({open:!0,message:e,severity:"success"})}),150)},D=n(3),I=function(e){var t=e.tabValue,n=e.setTabValue,a=Object(j.g)(),i=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}};return Object(D.jsx)("nav",{style:{backgroundColor:"#a8dac5"},children:Object(D.jsxs)(O.a,{value:t,onChange:function(e,t){a.push(function(e){var t,n;return null!==(t=null===(n=x.find((function(t){return t.tab===e})))||void 0===n?void 0:n.path)&&void 0!==t?t:0}(t)),n(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",children:[Object(D.jsx)(p.a,Object(b.a)({label:"Scale"},i(0))),Object(D.jsx)(p.a,Object(b.a)({label:"Grid"},i(1))),Object(D.jsx)(p.a,Object(b.a)({label:"Chart"},i(2)))]})})},N=n(8),z=n(268),B=n(493),M=n(494),P=n(83),L=n(84),R=n(517),H=n(496),J=n(495),V=Object(N.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(D.jsx)(z.a,Object(b.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),E=function(e){var t=e.token,n=e.setToken,i=e.alert,r=e.setAlert,c=e.profile,o=e.setProfile,s=e.tabValue,l=e.setTabValue,d=Object(a.useState)(null),O=Object(u.a)(d,2),p=O[0],x=O[1],f=Object(j.g)(),v=function(){return x(null)},y={icon:{width:"1.75rem",marginRight:"0.5rem"},authButton:{color:"#fff",borderColor:"#fff",padding:"0"},buttonLink:{display:"inline-block",color:"inherit",lineHeight:"1rem",textDecoration:"none",padding:"0.4rem 0.8rem"}};return Object(D.jsxs)("div",{style:{position:"fixed",top:0,width:"100%",maxWidth:"900px",zIndex:999},children:[Object(D.jsx)(B.a,{position:"static",children:Object(D.jsxs)(M.a,{children:[Object(D.jsx)("img",{src:h,style:y.icon,alt:"scale"}),Object(D.jsx)("h1",{children:"WeighMe"}),t?c?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(P.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){return x(e.currentTarget)},style:{color:"#fff",textTransform:"none",overflow:"hidden"},children:[Object(D.jsx)("img",{src:g,style:y.icon,alt:"user"}),c.name]}),Object(D.jsx)(V,{anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:v,children:Object(D.jsx)(L.a,{onClick:function(){v(),W(),n(null),o(null),f.push("/"),l(0),A("Until next time!",i,r)},style:{padding:"0"},children:Object(D.jsx)("span",{style:Object(b.a)(Object(b.a)({},y.buttonLink),{},{padding:"0.6rem 1.1rem"}),children:"Sign Out"})})})]}):Object(D.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(D.jsx)(J.a,{width:"26px",height:"26px",variant:"circle",style:{backgroundColor:"rgba(203, 213, 224, 0.7)",marginRight:"10px"},children:Object(D.jsx)(R.a,{})}),Object(D.jsx)(J.a,{width:"100px",height:"16px",variant:"rect",style:{backgroundColor:"rgba(203, 213, 224, 0.7)",borderRadius:"2px"}})]}):Object(D.jsxs)(H.a,{variant:"text","aria-label":"authenticate user actions",children:[Object(D.jsx)(P.a,{style:y.authButton,children:Object(D.jsx)(m.b,{to:"/",style:y.buttonLink,children:"Sign In"})}),Object(D.jsx)(P.a,{style:y.authButton,children:Object(D.jsx)(m.b,{to:"/register",style:y.buttonLink,children:"New user"})})]})]})}),t?Object(D.jsx)(I,{tabValue:s,setTabValue:l}):Object(D.jsx)(D.Fragment,{})]})},_=(n(307),n(204),n.p+"static/media/key.e5b44f96.svg"),q=n(497),U=n(194),G=n(441),K=n(155),$=n.n(K),Y="https://weighme.herokuapp.com/api",Z={headers:{"content-type":"application/json"}},Q=function(e,t){return $.a.get(Y+t,{headers:Object(b.a)(Object(b.a)({},Z.headers),{},{Authorization:"Bearer ".concat(e)})})},X=function(e,t,n){return $.a.post(Y+n,t,{headers:Object(b.a)(Object(b.a)({},Z.headers),{},{Authorization:"Bearer ".concat(e)})})},ee=function(e,t){return $.a.post(Y+t,e,Z)},te=function(e){return Q(e,"/profile")},ne=function(e){return Q(e,"/weighings")},ae=function(e){var t=e.setToken,n=e.alert,i=e.setAlert,r=Object(a.useState)(""),c=Object(u.a)(r,2),o=c[0],s=c[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),j=d[0],b=d[1],h=Object(a.useState)(!1),m=Object(u.a)(h,2),O=m[0],p=m[1],x={icon:{width:"1.5rem",margin:"0 0.5rem 0.5rem 0"}};return Object(D.jsxs)("section",{className:"auth-form-section",children:[Object(D.jsxs)("h2",{children:["Sign ",Object(D.jsx)("b",{children:"Me"})," in"]}),Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0);var a={username:o,password:j};(function(e){return ee(e,"/login")})(JSON.stringify(a)).then((function(e){C(e.data.access_token),t(e.data.access_token),A("Hi, ".concat(o,"!"),n,i)})).catch((function(e){return T(e,n,i)})).finally(p(!1))},children:[Object(D.jsx)("div",{style:{marginBottom:"1rem"},children:Object(D.jsxs)(q.a,{container:!0,alignItems:"flex-end",children:[Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)("img",{src:g,style:x.icon,alt:"user"})}),Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)(U.a,{label:"Username",autoComplete:"off",value:o,onChange:function(e){return w(e.target.value)&&s(e.target.value)}})})]})}),Object(D.jsx)("div",{style:{marginBottom:"2rem"},children:Object(D.jsxs)(q.a,{container:!0,alignItems:"flex-end",children:[Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)("img",{src:_,style:x.icon,alt:"password"})}),Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)(U.a,{type:"password",label:"Password",autoComplete:"off",value:j,onChange:function(e){return S(e.target.value)&&b(e.target.value)}})})]})}),Object(D.jsx)(P.a,{variant:"contained",color:"primary",type:"submit",disabled:!o||!j||O,children:O?Object(D.jsx)(G.a,{style:{height:"25px",width:"25px"}}):"Sign In"})]})]})},ie=n.p+"static/media/double-key.c4a15f9f.svg",re=function(e){var t=e.setToken,n=e.alert,i=e.setAlert,r=Object(a.useState)(""),c=Object(u.a)(r,2),o=c[0],s=c[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),j=d[0],b=d[1],h=Object(a.useState)(""),m=Object(u.a)(h,2),O=m[0],p=m[1],x=Object(a.useState)(!1),f=Object(u.a)(x,2),v=f[0],y=f[1],k={icon:{width:"1.5rem",margin:"0 0.5rem 1.85rem 0"}};return Object(D.jsxs)("section",{className:"auth-form-section",children:[Object(D.jsxs)("h2",{children:["Register ",Object(D.jsx)("b",{children:"Me"})]}),Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(!0);var a={username:o,password:j,confirmation:O};(function(e){return ee(e,"/register")})(JSON.stringify(a)).then((function(e){C(e.data.access_token),t(e.data.access_token),A("Wellcome, ".concat(o,"!"),n,i)})).catch((function(e){return T(e,n,i)})).finally(y(!1))},children:[Object(D.jsx)("div",{style:{marginBottom:"1rem"},children:Object(D.jsxs)(q.a,{container:!0,alignItems:"flex-end",children:[Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)("img",{src:g,style:k.icon,alt:"user"})}),Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)(U.a,{label:"Username",helperText:"* Max 12 chars. No spaces.",autoComplete:"off",required:!0,value:o,onChange:function(e){return w(e.target.value)&&s(e.target.value)}})})]})}),Object(D.jsx)("div",{style:{marginBottom:"1rem"},children:Object(D.jsxs)(q.a,{container:!0,alignItems:"flex-end",children:[Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)("img",{src:_,style:k.icon,alt:"password"})}),Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)(U.a,{type:"password",label:"Password",helperText:"* Max 20 chars. No spaces.",autoComplete:"off",required:!0,value:j,onChange:function(e){return S(e.target.value)&&b(e.target.value)}})})]})}),Object(D.jsx)("div",{style:{marginBottom:"1.5rem"},children:Object(D.jsxs)(q.a,{container:!0,alignItems:"flex-end",children:[Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)("img",{src:ie,style:k.icon,alt:"confirm"})}),Object(D.jsx)(q.a,{item:!0,children:Object(D.jsx)(U.a,{type:"password",label:"Confirm Password",helperText:"* Max 20 chars. No spaces.",autoComplete:"off",required:!0,value:O,onChange:function(e){return S(e.target.value)&&p(e.target.value)}})})]})}),Object(D.jsx)(P.a,{variant:"contained",color:"primary",type:"submit",disabled:!o||!j||!O||v,children:v?Object(D.jsx)(G.a,{style:{height:"25px",width:"25px"}}):"Sign Un"})]})]})},ce=(n(325),n.p+"static/media/bg-scale.50ec51df.svg"),oe=n.p+"static/media/add.d3ae5c1f.svg",se=n.p+"static/media/add-disabled.57abca65.svg",le=n(125),de=n(498),ue=n(500),je=n(501),be=function(e){var t=e.token,n=e.addWeighingToState,i=e.alert,r=e.setAlert,c=Object(a.useState)(""),o=Object(u.a)(c,2),s=o[0],l=o[1],d=Object(a.useState)(f),j=Object(u.a)(d,2),h=j[0],g=j[1],m=Object(a.useState)(!1),O=Object(u.a)(m,2),p=O[0],x=O[1],y={container:{boxShadow:"0px 7px 8px #888888",borderRadius:"60px",backgroundImage:"url(".concat(ce,")"),backgroundRepeat:"no-repeat",backgroundSize:"100%",padding:"2rem",width:"300px",height:"300px",boxSizing:"border-box"},form:{paddingTop:"7rem",position:"relative"}};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("h2",{children:["Let's"," ",Object(D.jsx)("p",{children:Object(D.jsx)("b",{children:"Weigh Me!"})})]}),Object(D.jsx)("div",{id:"addWeighingForm",style:y.container,children:Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(!0);var a={weight:s,datetime:h};(function(e,t){return X(e,t,"/add_weighing")})(t,JSON.stringify(a)).then((function(e){a.id=e.data.id,n(Object(b.a)(Object(b.a)({},a),{},{weight:+a.weight})),l(""),g(f),A("Weighing added!",i,r)})).catch((function(e){return T(e,i,r)})).finally(x(!1))},style:y.form,children:[Object(D.jsx)("div",{style:{marginBottom:"1.2rem"},children:Object(D.jsx)(le.a,{children:Object(D.jsx)(de.a,{id:"addWeighingFormWeight",value:s,type:"number",inputProps:{step:.01,min:0,max:999.99},autoComplete:"off",placeholder:"0.00",onChange:function(e){return k("".concat(e.target.value))&&l(e.target.value)},onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},endAdornment:Object(D.jsx)(ue.a,{position:"end",children:Object(D.jsx)("span",{style:{color:"#fff",fontSize:"1rem",marginTop:"2rem"},children:"Kg"})}),style:{fontSize:"3rem"}})})}),Object(D.jsx)("div",{children:Object(D.jsx)(U.a,{id:"addWeighingFormDatepicker",label:"When?",type:"datetime-local",autoComplete:"off",value:h,InputLabelProps:{shrink:!0},onChange:function(e){return g(v(e.target.value))}})}),Object(D.jsx)(je.a,{id:"addWeighingFormAddButton","aria-label":"Add",type:"submit",disabled:!s||!h||p,children:p?Object(D.jsx)(G.a,{style:{height:"25px",width:"25px"}}):Object(D.jsx)("img",{src:s&&h?oe:se,alt:"Add",style:s&&h&&!p?{width:"100%"}:{width:"100%",opacity:"0.5"}})})]})})]})},he=(n(326),n.p+"static/media/edit.314ec8e2.svg"),ge=n(45),me=n(514),Oe=n(502),pe=n(442),xe=Object(ge.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #444",borderRadius:"6px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),backgroundImage:"linear-gradient(#a4dad2, #bce08a)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}})),fe=function(e){var t=e.token,n=e.alert,i=e.setAlert,r=e.id,c=e.weight,o=e.datetime,s=e.editWeighingFromState,l=e.removeWeighingFromState,d=xe(),j=Object(a.useState)(!1),h=Object(u.a)(j,2),g=h[0],m=h[1],O=Object(a.useState)(""),p=Object(u.a)(O,2),x=p[0],f=p[1],y=Object(a.useState)(!1),w=Object(u.a)(y,2),S=w[0],C=w[1],W=Object(a.useState)(""),F=Object(u.a)(W,2),I=F[0],N=F[1],z=Object(a.useState)(!1),B=Object(u.a)(z,2),M=B[0],L=B[1],R=Object(a.useState)(!1),H=Object(u.a)(R,2),J=H[0],V=H[1],E=Object(a.useState)(!1),_=Object(u.a)(E,2),q=_[0],K=_[1],$=function(){return m(!1)};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(P.a,{variant:"contained",color:"primary",size:"small",style:{position:"absolute",right:"1px",top:"3px",minWidth:"0px",padding:"0",borderRadius:"50%"},onClick:function(){return m(!0)},children:Object(D.jsx)("img",{src:he,style:{width:"25px"},alt:"edit"})}),Object(D.jsx)(me.a,{className:d.modal,open:g,onClose:$,closeAfterTransition:!0,BackdropComponent:Oe.a,BackdropProps:{timeout:500},children:Object(D.jsx)(pe.a,{in:g,children:Object(D.jsxs)("div",{className:d.paper,children:[Object(D.jsx)("h2",{children:"Edit Weighing"}),Object(D.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(D.jsx)("div",{style:{marginBottom:"1.2rem",textAlign:"center"},children:Object(D.jsx)(le.a,{children:Object(D.jsx)(de.a,{id:"addWeighingFormWeight",value:S?x:c,type:"number",inputProps:{step:.01,min:0,max:999.99},autoComplete:"off",placeholder:"0.00",onChange:function(e){k("".concat(e.target.value))&&(f(e.target.value),!S&&C(!0))},onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},endAdornment:Object(D.jsx)(ue.a,{position:"end",children:Object(D.jsx)("span",{style:{fontSize:"1rem",marginTop:"2rem"},children:"Kg"})}),style:{fontSize:"3rem"}})})}),Object(D.jsx)("div",{style:{marginBottom:"3rem",textAlign:"center"},children:Object(D.jsx)(U.a,{id:"addWeighingFormDatepicker",label:"When?",type:"datetime-local",autoComplete:"off",value:M?I:o,InputLabelProps:{shrink:!0},onChange:function(e){N(v(e.target.value)),!M&&L(!0)}})}),Object(D.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(D.jsx)(P.a,{variant:"contained",color:"secondary",onClick:function(){K(!0);var e={id:r};(function(e,t){return X(e,t,"/delete_weighing")})(t,JSON.stringify(e)).then((function(t){$(),l(e.id),A("Weighing deleted.",n,i)})).catch((function(e){return T(e,n,i)})).finally(K(!1))},disable:q,children:q?Object(D.jsx)(G.a,{style:{height:"25px",width:"25px"}}):"Delete"}),Object(D.jsx)(P.a,{variant:"contained",color:"primary",onClick:function(){V(!0);var e={id:r,weight:"".concat(S?x:c),datetime:M?I:o};(function(e,t){return X(e,t,"/update_weighing")})(t,JSON.stringify(e)).then((function(t){$(),s(Object(b.a)(Object(b.a)({},e),{},{weight:+e.weight})),A("Weighing updated.",n,i)})).catch((function(e){return T(e,n,i)})).finally(V(!1))},disabled:!r||!x&&!I||J,children:J?Object(D.jsx)(G.a,{style:{height:"25px",width:"25px"}}):"Update"}),Object(D.jsx)(P.a,{variant:"contained",onClick:$,children:"Cancel"})]})]})]})})})]})},ve=n.p+"static/media/alert.df96154c.svg",ye=n(92),we=function(){return Object(D.jsxs)(ye.c,{style:{display:"flex",justifyContent:"center"},children:[Object(D.jsx)("img",{src:ve,alt:"alert",style:{marginRight:"10px",width:"50px"}}),Object(D.jsx)("i",{children:"No Weighings to show"})]})},Se=n(196),ke=n(191),Ce=[{label:"is",value:"is",getApplyFilterFn:function(e,t){return e.columnField&&e.value&&e.operatorValue?function(n){var a=t.valueGetter?t.valueGetter(n):n.value;return e.value.indexOf(a)>=0}:null},InputComponent:function(e){var t=e.item,n=e.applyValue;return Object(D.jsxs)(le.a,{children:[Object(D.jsx)(Se.a,{shrink:!0,htmlFor:"custom-months-filter",children:"Select month/s"}),Object(D.jsx)(ke.a,{multiple:!0,native:!0,value:t.value,onChange:function(e){for(var a=e.target.options,i=[],r=0,c=a.length;r<c;r+=1)a[r].selected&&i.push(a[r].value);n(Object(b.a)(Object(b.a)({},t),{},{value:i}))},inputProps:{id:"custom-months-filter"},children:y.map((function(e){return Object(D.jsx)("option",{value:e,children:e},e)}))})]})},InputComponentProps:{type:"array"}}],We=function(e){var t=e.token,n=e.alert,a=e.setAlert,i=e.weighings,r=e.editWeighingFromState,c=e.removeWeighingFromState,o=i.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{datetime:new Date(e.datetime),month:(t=e.datetime,y[new Date(t).getMonth()])});var t})),s=[{field:"datetime",type:"dateTime",headerName:"Date & Time",flex:1.5,headerClassName:"weighing-grid-th"},{field:"month",type:"string",headerName:"Month",hide:!0,headerClassName:"weighing-grid-th",filterOperators:Ce},{field:"weight",type:"string",headerName:"Weight (kg)",flex:1,headerClassName:"weighing-grid-th",renderCell:function(e){return Object(D.jsxs)("div",{style:{textAlign:"center",width:"100%",position:"relative"},children:[e.value,Object(D.jsx)(fe,{token:t,alert:n,setAlert:a,id:e.id,weight:e.value,datetime:f(e.row.datetime),editWeighingFromState:r,removeWeighingFromState:c})]})}}];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{children:"My Weighings"}),Object(D.jsx)(ye.a,{autoHeight:!0,rows:o,rowHeight:35,columns:s,disableColumnMenu:!0,disableColumnSelector:!0,disableSelectionOnClick:!0,components:{NoRowsOverlay:we,Toolbar:function(){return Object(D.jsxs)(ye.d,{children:[Object(D.jsx)(ye.b,{}),Object(D.jsx)(ye.e,{})]})}},pagination:!0,pageSize:25,className:!i.length&&"zero-state-grid"})]})},Fe=(n(328),n.p+"static/media/graph.3ad868e4.svg"),Te=n(509),Ae=n(515),De=n(522),Ie=n(512),Ne=n(506),ze=n(513),Be=n(524),Me=n(520),Pe=function(e){var t=e.weighings,n=Object(a.useState)({}),i=Object(u.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)({}),s=Object(u.a)(o,2),l=s[0],d=s[1],j=Object(a.useState)(window.innerWidth),b=Object(u.a)(j,2),h=b[0],g=b[1],m=function(e){return g(e.target.innerWidth)};Object(a.useEffect)((function(){return window.addEventListener("resize",m),function(){return window.removeEventListener("resize",m)}}),[]);var O=t.map((function(e){return{x:new Date(e.datetime),y:e.weight}}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{style:{marginBottom:"1rem"},children:"Time Graph"}),t.length<2?Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(D.jsx)("img",{src:Fe,alt:"graph",style:{margin:"30px",width:"180px"}}),Object(D.jsx)("i",{style:{lineHeight:"1.5rem"},children:"Add at least 2 Weighings to see the Chart"})]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(Te.a,{width:h,theme:Ae.a.material,height:300,scale:{x:"time"},domainPadding:{y:20,x:20},containerComponent:Object(D.jsx)(De.a,{responsive:!0,zoomDimension:"x",zoomDomain:l,onZoomDomainChange:function(e){return c(e)},style:{width:"100%",height:"275px"}}),children:[Object(D.jsx)(Ie.a,{x:13,y:25,style:{fill:"rgb(69, 90, 100)",fontStyle:"italic"},text:"Weight (kg)"}),Object(D.jsx)(Ne.a,{data:O,animate:{onLoad:{duration:1200}},style:{data:{stroke:"tomato"}}}),Object(D.jsx)(ze.a,{data:O,size:4,animate:{onLoad:{duration:1200}},style:{data:{fill:"tomato"}}})]}),Object(D.jsxs)(Te.a,{width:h,height:90,scale:{x:"time"},domainPadding:{y:5,x:19},padding:{top:5,left:50,right:50,bottom:30},containerComponent:Object(D.jsx)(Be.a,{responsive:!0,brushDimension:"x",brushDomain:r,onBrushDomainChange:function(e){return d(e)},style:{width:"100%",height:"90px"}}),children:[Object(D.jsx)(Me.a,{}),Object(D.jsx)(Ne.a,{data:O,animate:{onLoad:{duration:1200}},style:{data:{stroke:"tomato"}}})]})]})]})},Le=function(e){var t=e.token,n=e.setToken,a=e.alert,i=e.setAlert,r=e.weighings,c=e.addWeighingToState,o=e.editWeighingFromState,s=e.removeWeighingFromState;return Object(D.jsx)("main",{style:{paddingTop:function(){var e,t,n=document.querySelector("header"),a=document.querySelector("nav");return"".concat(Math.max(40+(null!==(e=null===n||void 0===n?void 0:n.clientHeight)&&void 0!==e?e:0)+(null!==(t=null===a||void 0===a?void 0:a.clientHeight)&&void 0!==t?t:0),104),"px")}()},children:t?Object(D.jsxs)(j.d,{children:[Object(D.jsx)(j.b,{path:"/",exact:!0,render:function(e){return Object(D.jsx)(be,Object(b.a)(Object(b.a)({},e),{},{token:t,alert:a,setAlert:i,addWeighingToState:c}))}}),Object(D.jsx)(j.b,{path:"/grid",render:function(e){return Object(D.jsx)(We,Object(b.a)(Object(b.a)({},e),{},{token:t,alert:a,setAlert:i,weighings:r,editWeighingFromState:o,removeWeighingFromState:s}))}}),Object(D.jsx)(j.b,{path:"/chart",render:function(e){return Object(D.jsx)(Pe,Object(b.a)(Object(b.a)({},e),{},{weighings:r}))}}),Object(D.jsx)(j.a,{to:"/"})]}):Object(D.jsxs)(j.d,{children:[Object(D.jsx)(j.b,{path:"/",exact:!0,render:function(e){return Object(D.jsx)(ae,Object(b.a)(Object(b.a)({},e),{},{setToken:n,alert:a,setAlert:i}))}}),Object(D.jsx)(j.b,{path:"/register",render:function(e){return Object(D.jsx)(re,Object(b.a)(Object(b.a)({},e),{},{setToken:n,alert:a,setAlert:i}))}}),Object(D.jsx)(j.a,{to:"/"})]})})},Re=(n(433),function(){return Object(D.jsxs)("footer",{children:[Object(D.jsx)("p",{children:"Developed by Manuel Figueira - 2021"}),Object(D.jsxs)("p",{children:[Object(D.jsx)("span",{children:"Icons made by "}),Object(D.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"}),Object(D.jsx)("span",{children:" from "}),Object(D.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})}),He=(n(434),n(516)),Je=n(510),Ve=function(e){return Object(D.jsx)(Je.a,Object(b.a)({elevation:6,variant:"filled"},e))},Ee=function(e){var t=e.open,n=e.setAlert,a=e.message,i=e.severity,r=function(e,t){"clickaway"!==t&&n({open:!1,message:a,severity:i})};return Object(D.jsx)(He.a,{open:t,autoHideDuration:4e3,anchorOrigin:{vertical:"bottom",horizontal:"right"},onClose:r,style:{bottom:function(){var e,t=document.querySelector("footer");return"".concat(12+(null!==(e=null===t||void 0===t?void 0:t.clientHeight)&&void 0!==e?e:0),"px")}(),position:"fixed"},children:Object(D.jsx)(Ve,{onClose:r,severity:i,style:{fontSize:"1rem"},children:a})})};var _e=function(){var e=Object(j.h)(),t=Object(a.useState)(localStorage.getItem("token")),n=Object(u.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)(null),s=Object(u.a)(c,2),b=s[0],h=s[1],g=Object(a.useState)([]),m=Object(u.a)(g,2),O=m[0],p=m[1],f=Object(a.useState)((function(){return function(e){var t,n;return null!==(t=null===(n=x.find((function(t){return t.path===e})))||void 0===n?void 0:n.tab)&&void 0!==t?t:0}(e.pathname)})),v=Object(u.a)(f,2),y=v[0],w=v[1],S=Object(a.useState)({open:!1,message:"success",severity:"success"}),k=Object(u.a)(S,2),C=k[0],F=k[1];return Object(a.useEffect)((function(){i&&Object(d.a)(l.a.mark((function e(){var t,n,a,c,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=te(i),n=ne(i),e.next=5,Promise.all([t,n]);case 5:a=e.sent,c=Object(u.a)(a,2),o=c[0],s=c[1],h(o.data),p(s.data),e.next=21;break;case 13:e.prev=13,e.t0=e.catch(0),W(),r(null),h(null),w(0),p([]),T(e.t0,{message:"",severity:"error"},F);case 21:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[i]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(E,{token:i,setToken:r,alert:C,setAlert:F,profile:b,setProfile:h,tabValue:y,setTabValue:w}),Object(D.jsx)(Le,{token:i,setToken:r,alert:C,setAlert:F,weighings:O,addWeighingToState:function(e){return p((function(t){return[].concat(Object(o.a)(t),[e]).sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)}))}))},editWeighingFromState:function(e){return p(O.map((function(t){return t.id===e.id?e:t})))},removeWeighingFromState:function(e){return p(O.filter((function(t){return t.id!==e})))}}),Object(D.jsx)(Re,{}),Object(D.jsx)(Ee,{open:C.open,setAlert:F,message:C.message,severity:C.severity})]})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,525)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(m.a,{children:Object(D.jsx)(_e,{})})}),document.getElementById("root")),qe()}},[[435,1,2]]]);
//# sourceMappingURL=main.80131aea.chunk.js.map