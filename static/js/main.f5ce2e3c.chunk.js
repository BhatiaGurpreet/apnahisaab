(this["webpackJsonpapna-hisaab-2"]=this["webpackJsonpapna-hisaab-2"]||[]).push([[0],{26:function(e,t,a){e.exports={navbarStyle:"hisaab_navbarStyle__klqje",transactionItems:"hisaab_transactionItems__3op0P",amount:"hisaab_amount__2OASX",date:"hisaab_date__1q4OG"}},77:function(e,t,a){},78:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),s=(a(77),a(78),a(11)),o=a(65),l=a.n(o),d=a(69),b=a(46),j={members:[],transactions:[],toaster:{show:!1,header:"",text:""}};function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var m=function(){var e,t;return(null===(e=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}())||void 0===e||null===(t=e.ls)||void 0===t?void 0:t.hisaab)||j}(),h=Object(b.b)("counter/fetchCount",function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(b.c)({name:"hisaab",initialState:m,reducers:{addMember:function(e,t){var a=e.members.length;t.payload.id=a+1,e.members.push(t.payload)},updateMember:function(e,t){var a=e.members.findIndex((function(e){return e.id==t.payload.id}));e.members[a]=t.payload},removeMember:function(e,t){var a=e.members.findIndex((function(e){return e.id==t.payload.id}));e.members[a].inactive=1},addTransaction:function(e,t){var a=e.transactions.length;t.payload.id=a+1,e.transactions.push(t.payload)},deleteGroup:function(e,t){e.transactions=e.transactions.filter((function(e){return e.groupId!=t.payload}))},setToaster:function(e,t){e.toaster=t.payload}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),x=O.actions,v=x.addMember,p=x.removeMember,f=x.addTransaction,g=x.deleteGroup,y=x.updateMember,N=x.setToaster,w=function(e){var t;return null===e||void 0===e||null===(t=e.hisaab)||void 0===t?void 0:t.value},C=O.reducer,I=a(26),S=a.n(I),k=a(1);function T(){Object(s.c)(w),Object(s.b)();return Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"dsandkns"})})}var L=a(31),B=a(13),E=a(2),M=a(4),_=a(94),G=a(112),A=a(95),z=a(96),D=a(97),F=a(98),H=a(9);function K(){var e=function(){var e=Object(n.useState)([0,0]),t=Object(H.a)(e,2),a=t[0],c=t[1];return Object(n.useLayoutEffect)((function(){function e(){c([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}();return Object(H.a)(e,1)[0]<481}function P(){var e=K(),t=Object(B.g)().pathname.split("/").pop();return Object(k.jsx)(_.a,{fluid:!0,children:Object(k.jsxs)(G.a,{justify:!0,variant:"pills",className:e?S.a.navbarStyle:"top",defaultActiveKey:t||"members",children:[Object(k.jsx)(G.a.Item,{children:Object(k.jsx)(G.a.Link,{as:L.b,to:"/members",eventKey:"members",children:Object(k.jsx)(A.a,{size:25})})}),Object(k.jsx)(G.a.Item,{children:Object(k.jsx)(G.a.Link,{as:L.b,to:"/add-transaction",eventKey:"add-transaction",children:Object(k.jsx)(z.a,{size:25})})}),Object(k.jsx)(G.a.Item,{children:Object(k.jsx)(G.a.Link,{as:L.b,to:"/transactions",eventKey:"transactions",children:Object(k.jsx)(D.a,{size:25})})}),Object(k.jsx)(G.a.Item,{children:Object(k.jsx)(G.a.Link,{as:L.b,to:"/calculations",eventKey:"calculations",children:Object(k.jsx)(F.a,{size:25})})})]})})}var J=a(109),q=a(114),W=a(99),R=a(100),U=a(71),V=a(108);function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fixed",a=["primary","success","danger","warning","info"],n=Math.floor("fixed"==t?e%a.length:Math.random()%a.length),c="bg-"+a[n];return c}var $=a(101),Q=a(102),Y=a(103),Z=a(104);a(107);function ee(e){var t,a,c,r,i,o=Object(s.b)(),l=Object(n.useState)((null===(t=e.data)||void 0===t?void 0:t.member)||{}),d=Object(H.a)(l,2),b=d[0],j=d[1],u=Object(n.useState)((null===(a=e.data.member)||void 0===a?void 0:a.name)||""),m=Object(H.a)(u,2),h=m[0],O=m[1],x=Object(n.useState)((null===(c=e.data.member)||void 0===c?void 0:c.organisation)||""),v=Object(H.a)(x,2),f=v[0],g=v[1],w=Object(n.useState)((null===(r=e.data.member)||void 0===r?void 0:r.email)||""),C=Object(H.a)(w,2),I=C[0],S=C[1],T=Object(n.useState)((null===(i=e.data.member)||void 0===i?void 0:i.mobile)||""),L=Object(H.a)(T,2),B=L[0],M=L[1];Object(n.useEffect)((function(){var t,a,n,c;O((null===(t=e.data.member)||void 0===t?void 0:t.name)||""),S((null===(a=e.data.member)||void 0===a?void 0:a.email)||""),M((null===(n=e.data.member)||void 0===n?void 0:n.mobile)||""),j(e.data.member||{}),g((null===(c=e.data.member)||void 0===c?void 0:c.organisation)||"")}),[e.data.member]);var _=X(b.id);return Object(k.jsxs)(V.a,{show:e.data.show,fullscreen:!0,onHide:e.hide,animation:!1,children:[Object(k.jsx)(V.a.Header,{className:_,closeButton:!0,closeVariant:"white",children:Object(k.jsx)(V.a.Title,{className:"text-light",children:h})}),Object(k.jsx)(V.a.Body,{children:Object(k.jsxs)(J.a,{onSubmit:function(e){e.preventDefault();var t=Object(E.a)(Object(E.a)({},b),{},{name:h,email:I,mobile:B,organisation:f});o(y(t)),o(N({show:!0,text:"Update Successful!"}))},children:[Object(k.jsx)(R.a,{children:Object(k.jsx)(U.a,{children:Object(k.jsx)("span",{className:"fst-italic",children:"Personal Information"})})}),Object(k.jsx)("br",{}),Object(k.jsx)(R.a,{className:"mb-3",children:Object(k.jsxs)(J.a.Group,{as:U.a,controlId:"formGridName",children:[Object(k.jsx)(J.a.Label,{visuallyHidden:!0,children:"Full Name"}),Object(k.jsxs)(q.a,{className:"mb-2",children:[Object(k.jsx)(q.a.Text,{className:"bg-light",children:Object(k.jsx)($.a,{})}),Object(k.jsx)(J.a.Control,{type:"text",placeholder:"FirstName LastName",value:h,onChange:function(e){return O(e.target.value)}})]})]})}),Object(k.jsx)(R.a,{className:"mb-3",children:Object(k.jsxs)(J.a.Group,{as:U.a,controlId:"formGridEmail",children:[Object(k.jsx)(J.a.Label,{visuallyHidden:!0,children:"Email"}),Object(k.jsxs)(q.a,{className:"mb-2",children:[Object(k.jsx)(q.a.Text,{className:"bg-light",children:Object(k.jsx)(Q.a,{})}),Object(k.jsx)(J.a.Control,{type:"email",placeholder:"Enter email",value:I,onChange:function(e){return S(e.target.value)}})]})]})}),Object(k.jsxs)(J.a.Group,{className:"mb-3",controlId:"formGridContact",children:[Object(k.jsx)(J.a.Label,{visuallyHidden:!0,children:"Contact Number"}),Object(k.jsxs)(q.a,{className:"mb-2",children:[Object(k.jsx)(q.a.Text,{className:"bg-light",children:Object(k.jsx)(Y.a,{})}),Object(k.jsx)(J.a.Control,{type:"number",placeholder:"Enter Contact Number",value:B,onChange:function(e){return M(e.target.value)}})]})]}),Object(k.jsxs)(J.a.Group,{className:"mb-3",controlId:"formGridOrg",children:[Object(k.jsx)(J.a.Label,{visuallyHidden:!0,children:"Organisation"}),Object(k.jsxs)(q.a,{className:"mb-2",children:[Object(k.jsx)(q.a.Text,{className:"bg-light",children:Object(k.jsx)(Z.a,{})}),Object(k.jsx)(J.a.Control,{type:"text",placeholder:"Enter Organisation",value:f,onChange:function(e){return g(e.target.value)}})]})]}),Object(k.jsx)("br",{}),Object(k.jsxs)(R.a,{className:"",children:[Object(k.jsx)(U.a,{className:"text-end",children:Object(k.jsx)(W.a,{variant:"primary",type:"submit",children:"Update"})}),Object(k.jsx)(U.a,{className:"text-start",children:Object(k.jsx)(W.a,{variant:"danger",className:"ms-2",onClick:function(t){console.log("trihe"),o(p({id:b.id})),e.hide()},children:"Delete"})})]})]})})]})}var te=a(113),ae=a(105),ne=c.a.memo((function(e){var t=X(e.member.id);Object(s.b)();return Object(k.jsxs)(te.a,{text:"white",style:{height:"100%"},className:"".concat(t," mb-2"),children:[Object(k.jsx)(te.a.Body,{children:Object(k.jsxs)(te.a.Title,{as:"h6",children:[e.member.name.split(" ")[0]," "]})}),Object(k.jsx)(te.a.Footer,{className:"p-1",children:Object(k.jsx)(ae.a,{onClickCapture:e.handleModal,"data-memberid":e.member.id,className:S.a.editButton})})]},e.member.id)}));function ce(e){var t,a=(null===(t=e.transaction)||void 0===t?void 0:t.groupId)||1,c=Object(s.b)(),r=Object(n.useState)(""),i=Object(H.a)(r,2),o=i[0],l=i[1],d=Object(n.useState)(!1),b=Object(H.a)(d,2),j=b[0],u=b[1],m=Object(n.useState)({show:!1,member:{}}),h=Object(H.a)(m,2),O=h[0],x=h[1],p=Object(s.c)((function(t){return t.hisaab.members.filter((function(t){return t.groupId==e.groupId||a&&1!=t.inactive}))}));var f=function(e){x({show:!0,member:p.find((function(t){return t.id==e.currentTarget.dataset.memberid}))})};return Object(k.jsxs)("div",{className:"mb-5",children:[Object(k.jsx)(J.a,{noValidate:!0,onSubmitCapture:function(e){return e.preventDefault()},children:Object(k.jsxs)(q.a,{className:"mb-2",children:[Object(k.jsx)(J.a.Control,{type:"text",placeholder:"Enter Name of Member",value:o,required:!0,onChange:function(e){console.log("handling invalid"),-1==p.findIndex((function(t){return t.name.toLowerCase()==e.target.value.toLowerCase()}))?u(!1):u(!0),l(e.target.value)},isInvalid:j}),Object(k.jsx)(J.a.Control.Feedback,{type:"invalid",children:"Please choose a different name. Member Already Exists!"}),Object(k.jsx)(W.a,{variant:"primary",type:"submit",className:"btn-sm",onClick:function(){o&&-1==p.findIndex((function(e){return e.name==o}))&&(c(v({name:o,groupId:e.groupId||a})),l(""))},children:"Add"})]})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("br",{}),Object(k.jsx)(R.a,{xs:3,md:2,className:"g-4",children:p.map((function(e){return e.name.toLowerCase().includes(o.toLowerCase())&&Object(k.jsx)(U.a,{children:Object(k.jsx)(ne,{member:e,handleModal:f},e.id)},e.id)}))})]}),Object(k.jsx)(ee,{data:O,hide:function(){return x({show:!1})}})]})}var re=a(115),ie=a(106);function se(e){var t=e.groupId||1,a=Object(s.c)((function(e){return e.hisaab.members.filter((function(e){return e.groupId==t}))})),n=Object(s.c)((function(e){return e.hisaab.transactions.filter((function(e){return e.groupId==t})).reverse()}));return Object(k.jsx)("div",{children:Object(k.jsx)(re.a,{children:n.map((function(e){var t;return Object(k.jsx)(re.a.Item,{children:Object(k.jsxs)("div",{className:S.a.transactionItems,children:[Object(k.jsxs)("span",{children:[null===(t=a.find((function(t){return t.id==e.spentBy})))||void 0===t?void 0:t.name," paid for ",e.type,Object(k.jsx)("br",{}),Object(k.jsxs)("span",{children:[Object(k.jsx)(ie.a,{size:10})," ",e.desc]})]}),Object(k.jsxs)("span",{className:S.a.amount,children:[" \u20b9",e.amount]}),Object(k.jsx)("span",{className:S.a.date,children:new Date(e.datetime).toDateString()})]})},e.id)}))})})}var oe=a(72);function le(e){var t,a,c,r,i,o,l,d=(null===(t=e.transaction)||void 0===t?void 0:t.groupId)||1,b=Object(s.b)(),j=Object(n.useState)(null===(a=e.transaction)||void 0===a?void 0:a.amount),u=Object(H.a)(j,2),m=u[0],h=u[1],O=[{type:"Food",id:"1"},{type:"Travel",id:"2"},{type:"Entertainment",id:"3"},{type:"Other",id:"4"}],x=Object(n.useState)((null===(c=e.transaction)||void 0===c?void 0:c.amount)||O[0]),v=Object(H.a)(x,2),p=v[0],g=v[1],y=Object(n.useState)(null===(r=e.transaction)||void 0===r?void 0:r.desc),w=Object(H.a)(y,2),C=w[0],I=w[1],S=(null===(i=e.transaction)||void 0===i?void 0:i.among)||[],T=Object(s.c)((function(e){return e.hisaab.members.filter((function(e){return e.groupId==d&&1!=e.inactive}))})),L=Object(n.useState)((null===(o=e.transaction)||void 0===o?void 0:o.among)||(null===(l=T[0])||void 0===l?void 0:l.id)),B=Object(H.a)(L,2),E=B[0],M=B[1],_=function(e){var t=S.findIndex((function(t){return t.id==e.target.value}));-1==t?S.push({id:e.target.value,isChecked:e.target.checked}):S[t].isChecked=e.target.checked};return Object(k.jsxs)(J.a,{onSubmit:function(e){e.preventDefault(),!isNaN(E)&&S.length>0&&(!function(){var e={groupId:d,type:p.type,datetime:Date.now(),desc:C,amount:m,among:S.filter((function(e){return 1==e.isChecked})).map((function(e){return e.id})),spentBy:E};b(f(e)),b(N({show:!0,text:"Transaction Added!"}))}(),e.target.reset(),h(),I())},className:"mb-5",children:[T.length>=0?Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"input-group",children:[Object(k.jsx)("span",{className:"input-group-text bg-light",children:"\u20b9"}),Object(k.jsx)("input",{type:"number",className:"form-control",value:m,onChange:function(e){return h(e.target.value)},"aria-label":"Dollar amount (with dot and two decimal places)",placeholder:"00.00"}),Object(k.jsx)("span",{className:"input-group-text bg-light",children:"By"}),Object(k.jsx)("select",{value:E,onChange:function(e){return M(e.target.value)},className:"form-select","aria-label":"Paid By",children:T.map((function(e){return Object(k.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"text-center mb-3",children:Object(k.jsx)(oe.a,{controlId:"floatingSelect",label:"For",size:"sm",children:Object(k.jsx)(J.a.Select,{"aria-label":"Floating label select example",onChange:function(e){console.log(e.target.selectedIndex),g(O[e.target.selectedIndex])},children:O.map((function(e){return Object(k.jsx)("option",{value:e.id,children:e.type},e.id)}))})})}),Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("input",{type:"text",className:"form-control",value:p.type,onChange:function(e){g({type:e.target.value,id:0})},"aria-label":"Text input with segmented dropdown button"}),Object(k.jsx)("span",{className:"input-group-text bg-light",children:"@"}),Object(k.jsx)("input",{type:"text",className:"form-control",value:C,onChange:function(e){return I(e.target.value)},"aria-label":"Text input with segmented dropdown button"})]}),Object(k.jsx)("br",{}),Object(k.jsx)("legend",{children:"Split Between?"}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)(R.a,{xs:3,md:2,className:"g-4",children:T.map((function(e){var t;return Object(k.jsx)(U.a,{className:"mt-1 text-start",children:Object(k.jsx)(J.a.Check,{className:"text-dark",inline:!0,type:"checkbox",id:e.id,value:e.id,label:e.name.split(" ")[0],onChange:_,checked:null===(t=S.find((function(t){return t.id==e.id})))||void 0===t?void 0:t.isChecked},"inline-".concat(e.id))},"inline-".concat(e.id))}))}),Object(k.jsx)("div",{className:"mb-3"}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{style:{textAlign:"center",margin:"10"},children:Object(k.jsx)("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Add Expense"})})]}):Object(k.jsx)("div",{style:{textAlign:"center"},children:Object(k.jsx)("span",{children:"Try Adding Members First !"})}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})}function de(e){var t,a=Object(s.b)(),n=(null===(t=e.transaction)||void 0===t?void 0:t.groupId)||1;return Object(k.jsxs)("div",{children:["calculations",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{children:Object(k.jsx)(W.a,{variant:"danger",onClick:function(){return a(g(n))},children:" Reset"})})]})}var be=a(110);function je(e){var t=Object(s.b)(),a=Object(s.c)((function(e){return e.hisaab.toaster}));return Object(k.jsxs)(be.a,{bg:"success",onClose:function(){return t(N({show:!1}))},show:null===a||void 0===a?void 0:a.show,delay:1500,style:{zIndex:"10000",position:"fixed",top:10,left:5},autohide:!0,children:[(null===a||void 0===a?void 0:a.header)&&Object(k.jsx)(be.a.Header,{closeButton:!1,children:Object(k.jsx)("strong",{className:"me-auto",children:null===a||void 0===a?void 0:a.header})}),Object(k.jsx)(be.a.Body,{className:"text-white",children:null===a||void 0===a?void 0:a.text})]})}var ue=["component"],me=function(e){e.children;var t=Object(B.h)(),a=t.path;t.url;return null,Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:" "}),Object(k.jsx)(P,{}),Object(k.jsx)("br",{}),Object(k.jsx)(_.a,{style:{marginBottom:40},children:Object(k.jsxs)(B.d,{children:[Object(k.jsx)(B.b,{exact:!0,path:a,children:Object(k.jsx)(B.a,{to:"members"})}),Object(k.jsx)(B.b,{path:"/members",component:ce}),Object(k.jsx)(B.b,{path:"/transactions",component:se}),Object(k.jsx)(B.b,{path:"/add-transaction",component:le}),Object(k.jsx)(B.b,{path:"/calculations",component:de})]})}),Object(k.jsx)(je,{})]})},he=function(e){var t=e.component,a=Object(M.a)(e,ue);return Object(k.jsx)(B.b,Object(E.a)(Object(E.a)({},a),{},{render:function(e){return Object(k.jsx)(me,{children:Object(k.jsx)(t,Object(E.a)({},e))})}}))};a(111);var Oe=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(L.a,{children:Object(k.jsx)(B.d,{children:Object(k.jsx)(he,{path:"/",component:T})})})})},xe=Object(b.a)({reducer:{hisaab:C}});xe.subscribe((function(){console.log(xe.getState()),ve({ls:xe.getState()})}));var ve=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(s.a,{store:xe,children:Object(k.jsx)(Oe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[89,1,2]]]);
//# sourceMappingURL=main.f5ce2e3c.chunk.js.map