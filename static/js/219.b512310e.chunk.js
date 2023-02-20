"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[219],{5203:function(e,n,t){t.d(n,{t:function(){return j}});var r=t(5861),a=t(9439),i=t(4687),c=t.n(i),o=t(2791),s=t(9434),l=t(5206),u=t(8792),d=t(1129),x=t(4554),m=t(7665),f=t(6151),h=t(7689),p=t(184),j=function(e){var n=e.editedId,t=(0,s.v9)(d.Af),i=(0,h.s0)(),j=(0,s.I0)(),Z=(0,o.useState)((function(){var e;return null!==(e=localStorage.getItem("name"))&&void 0!==e?e:""})),v=(0,a.Z)(Z,2),g=v[0],b=v[1],y=(0,o.useState)(!1),C=(0,a.Z)(y,2),w=C[0],k=C[1],S=(0,o.useState)((function(){var e;return null!==(e=localStorage.getItem("number"))&&void 0!==e?e:""})),I=(0,a.Z)(S,2),A=I[0],D=I[1],_=(0,o.useState)(!1),F=(0,a.Z)(_,2),z=F[0],P=F[1],W=function(){var e=(0,r.Z)(c().mark((function e(r,a,o){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n||!t.some((function(e){return e.name===a}))){e.next=5;break}return l.Am.warning("".concat(a," is already in contacts.")),k(!0),e.abrupt("return");case 5:if(e.prev=5,!n){e.next=11;break}return e.next=9,j((0,u._n)({id:n,name:a,number:o})).unwrap();case 9:e.next=13;break;case 11:return e.next=13,j((0,u.Dk)({name:a,number:o})).unwrap();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),l.Am.error("Error saving contact");case 18:i("/contacts"),l.Am.success("Contact saved successfully"),E();case 21:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(n,t,r){return e.apply(this,arguments)}}(),E=function(){b(""),D(""),localStorage.removeItem("name"),localStorage.removeItem("number")};return(0,p.jsx)(x.Z,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:(0,p.jsxs)(x.Z,{component:"form",sx:{display:"flex",flexDirection:"column",gap:"16px"},noValidate:!0,autoComplete:"off",onSubmit:function(e){return W(e,g,A)},children:[(0,p.jsx)(x.Z,{display:"flex",flexDirection:"column",children:(0,p.jsx)(m.Z,{error:w,inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},id:"name",label:"Name",variant:"outlined",value:g,type:"text",name:"name",required:!0,autoFocus:!0,onInvalid:function(){return k(!0)},onChange:function(e){var n=e.target.value;localStorage.setItem("name",n),b(n),k(!1)}})}),(0,p.jsx)(x.Z,{display:"flex",flexDirection:"column",children:(0,p.jsx)(m.Z,{error:z,inputProps:{inputMode:"numeric",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"},id:"number",label:"Number",variant:"outlined",value:A,type:"tel",name:"number",required:!0,onInvalid:function(){return P(!0)},onChange:function(e){var n=e.target.value;localStorage.setItem("number",n),D(n),P(!1)}})}),(0,p.jsx)(f.Z,{variant:"contained",type:"submit",children:"Save"})]})})}},1219:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var r=t(4708),a=t(4554),i=t(3239),c=t(3044),o=t(890),s=t(5614),l=t(5527),u=t(9836),d=t(3382),x=t(3994),m=t(9281),f=t(6890),h=t(5855),p=t(9434),j=t(8792),Z=t(1129),v=t(2638),g=t(2791),b=t(9439),y=t(3767),C=t(6520),w=t(3400),k=t(1286),S=t(7247),I=t(6382),A=t(4164),D=t(5861),_=t(4687),F=t.n(_),z=t(6151),P=t(5289),W=t(7123),E=t(9157),N=t(1691),O=t(5661),Q=t(5206),q=t(184),M=function(e){var n=e.id,t=e.open,r=e.setOpen,a=(0,p.I0)(),i=function(){var e=(0,D.Z)(F().mark((function e(n){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a((0,j.GK)(n)).unwrap();case 3:Q.Am.success("Contact deleted"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Q.Am.error("Error deleting contact");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),c=function(){r(!1)};return(0,q.jsxs)(P.Z,{open:t,onClose:c,children:[(0,q.jsx)(O.Z,{id:"alert-dialog-title",children:"Delete from contacts?"}),(0,q.jsx)(E.Z,{children:(0,q.jsx)(N.Z,{id:"alert-dialog-description",children:"This contact will be permanently deleted from this account ."})}),(0,q.jsxs)(W.Z,{children:[(0,q.jsx)(z.Z,{variant:"contained",onClick:c,autoFocus:!0,children:"Cancel"}),(0,q.jsx)(z.Z,{variant:"contained",color:"warning",onClick:function(){return i(n)},children:"Delete"})]})]})},L=t(9823),T=t(5203),B=function(e){var n=e.id,t=e.open,r=e.setOpen,a=function(){localStorage.removeItem("name"),localStorage.removeItem("number"),r(!1)};return(0,q.jsxs)(P.Z,{fullWidth:!0,maxWidth:"xs",open:t,onClose:a,children:[(0,q.jsxs)(y.Z,{direction:"row",justifyContent:"space-between",children:[(0,q.jsx)(O.Z,{children:"Edit contact"}),(0,q.jsx)(O.Z,{children:(0,q.jsx)(w.Z,{"aria-label":"close",onClick:a,children:(0,q.jsx)(L.Z,{})})})]}),(0,q.jsx)(E.Z,{children:(0,q.jsx)(T.t,{editedId:n})})]})},G=function(e){var n=e.columns,t=e.row,r=(0,g.useState)(!1),a=(0,b.Z)(r,2),i=a[0],c=a[1],o=(0,g.useState)(!1),s=(0,b.Z)(o,2),l=s[0],u=s[1];return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(h.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[n.map((function(e){var n=t[e.id];return(0,q.jsx)(x.Z,{align:e.align,children:n},e.id)})),(0,q.jsx)(x.Z,{children:(0,q.jsxs)(y.Z,{direction:"row",justifyContent:"flex-end",spacing:1,children:[(0,q.jsx)(C.Z,{title:"Edit contact",children:(0,q.jsx)(w.Z,{"aria-label":"edit",onClick:function(){u(!0),localStorage.setItem("name",t.name),localStorage.setItem("number",t.number)},children:(0,q.jsx)(k.Z,{fontSize:"small"})})}),(0,q.jsx)(C.Z,{title:"Delete contact",children:(0,q.jsx)(w.Z,{"aria-label":"delete",onClick:function(){c(!0)},children:(0,q.jsx)(S.Z,{fontSize:"small"})})})]})},(0,I.x0)())]},t.id),i&&A.createPortal((0,q.jsx)(M,{id:t.id,open:i,setOpen:c}),document.querySelector("#modal-root")),l&&A.createPortal((0,q.jsx)(B,{id:t.id,open:l,setOpen:u}),document.querySelector("#modal-root"))]})},H=[{id:"name",label:"Name",minWidth:170},{id:"number",label:"Number",minWidth:100,align:"left"}],J=function(){var e=(0,p.v9)(Z.c5),n=(0,p.I0)();(0,g.useEffect)((function(){n((0,j.yF)())}),[n]);var t=(0,p.v9)(Z.DI);return(0,q.jsxs)(q.Fragment,{children:[e===v.Q.loading&&(0,q.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,q.jsx)(i.Z,{})}),e===v.Q.success&&(0,q.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",width:"100%"},children:(0,q.jsx)(l.Z,{sx:{width:"100%"},children:(0,q.jsx)(m.Z,{children:(0,q.jsxs)(u.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,q.jsx)(f.Z,{children:(0,q.jsxs)(h.Z,{children:[H.map((function(e){return(0,q.jsx)(x.Z,{align:e.align,style:{minWidth:e.minWidth,backgroundColor:"grey"},children:e.label},e.id)})),(0,q.jsx)(x.Z,{align:"right",sx:{backgroundColor:"grey"},children:"..."},"edit")]})}),(0,q.jsx)(d.Z,{children:t.map((function(e){return(0,q.jsx)(G,{columns:H,row:e},e.id)}))})]})})})}),e===v.Q.error&&(0,q.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",pt:[2]},children:(0,q.jsx)(o.Z,{children:"Oops! Something went wrong. Please try again."})})]})},K=t(6390),V=t(7665),$=t(736),R=function(){var e=(0,p.v9)($.A),n=(0,p.I0)();return(0,q.jsx)(a.Z,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:(0,q.jsx)(V.Z,{id:"filter",label:"Find contacts by name",variant:"outlined",value:e,type:"text",name:"filter",onChange:function(e){n((0,K.T)(e.target.value))}})})},U=t(9606),X=t(6598);function Y(){var e=(0,p.v9)(U.u);return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(X.Z,{component:"section",maxWidth:"md",children:[(0,q.jsx)(r.ZP,{}),e===v.Q.loading&&(0,q.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",mt:10},children:(0,q.jsx)(i.Z,{size:100})}),e===v.Q.success&&(0,q.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"24px",mx:"auto"},children:[(0,q.jsx)(c.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,q.jsx)(s.Z,{})}),(0,q.jsx)(o.Z,{component:"h1",variant:"h5",textAlign:"center",children:"My Contacts"}),(0,q.jsx)(R,{}),(0,q.jsx)(J,{})]})]})})}},1129:function(e,n,t){t.d(n,{Af:function(){return a},DI:function(){return c},c5:function(){return i}});var r=t(736),a=function(e){return e.contacts.items},i=function(e){return e.contacts.status},c=function(e){var n=a(e),t=(0,r.A)(e);return t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n}},736:function(e,n,t){t.d(n,{A:function(){return r}});var r=function(e){return e.filter}}}]);
//# sourceMappingURL=219.b512310e.chunk.js.map