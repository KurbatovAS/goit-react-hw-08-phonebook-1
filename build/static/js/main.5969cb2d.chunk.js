(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{18:function(e,t,n){e.exports={container:"Stats_container__1qtAH",item:"Stats_item__1cWMo",value:"Stats_value__2dtaM",label:"Stats_label__2yRrE"}},31:function(e,t,n){e.exports={item:"Todo_item__3eNMI",completed:"Todo_completed__3uRte Todo_item__3eNMI",text:"Todo_text__1rJrh",checkbox:"Todo_checkbox__3tS9P",button:"Todo_button__2VA_g"}},32:function(e,t,n){e.exports={list:"TodoList_list__3ugOp"}},33:function(e,t,n){e.exports={editor:"TodoEditor_editor__2j18d",textarea:"TodoEditor_textarea__1zcqG",button:"TodoEditor_button__1mzx4"}},34:function(e,t,n){e.exports={filter:"TodoFilter_filter__2t9Mq",label:"TodoFilter_label__3cZLl",input:"TodoFilter_input__2Dtnb"}},40:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3FAPo",content:"Modal_content__1VIbZ"}},54:function(e,t,n){e.exports={container:"Container_container__3RIox"}},55:function(e,t,n){e.exports={button:"IconButton_button__29vBa"}},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),o=n(20),i=n.n(o),s=n(15),l=n(4),u=n(53),d=n(6),b={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},j=function(){return Object(r.jsxs)("nav",{children:[Object(r.jsx)(s.b,{to:"/",exact:!0,style:b.link,activeStyle:b.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(r.jsx)(s.b,{to:"/todos",exact:!0,style:b.link,activeStyle:b.activeLink,children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"})]})},f=n(13),p=n.n(f),h=n(19),O=n(12),m=n.n(O),x=n(2);m.a.defaults.baseURL="https://lpj-tasker.herokuapp.com";var v,g=function(e){m.a.defaults.headers.common.Authorization="Bearer ".concat(e)},y=function(){m.a.defaults.headers.common.Authorization=""},k=Object(x.c)("auth/register",function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,g(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),_=Object(x.c)("auth/login",function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,g(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),w={register:k,logOut:Object(x.c)("auth/logout",Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/logout");case 3:y(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))),logIn:_,fetchCurrentUser:Object(x.c)("auth/refresh",function(){var e=Object(h.a)(p.a.mark((function e(t,n){var r,c,a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){e.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),e.abrupt("return",n.rejectWithValue());case 5:return g(c),e.prev=6,e.next=9,m.a.get("/users/current");case 9:return a=e.sent,o=a.data,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(6);case 16:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}())},C={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name}},T=n(5),S=Object(x.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(v={},Object(T.a)(v,w.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(T.a)(v,w.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(T.a)(v,w.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(T.a)(v,w.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0})),v)}).reducer,I=n.p+"static/media/default-avatar.e44fc4e2.png",N={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}};function L(){var e=Object(l.c)(),t=Object(l.d)(C.getUsername),n=I;return Object(r.jsxs)("div",{style:N.container,children:[Object(r.jsx)("img",{src:n,alt:"",width:"32",style:N.avatar}),Object(r.jsxs)("span",{style:N.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",t]}),Object(r.jsx)("button",{type:"button",onClick:function(){return e(w.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var E={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function A(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(s.b,{to:"/register",exact:!0,style:E.link,activeStyle:E.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(r.jsx)(s.b,{to:"/login",exact:!0,style:E.link,activeStyle:E.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var B={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function D(){var e=Object(l.d)(C.getIsLoggedIn);return Object(r.jsxs)("header",{style:B.header,children:[Object(r.jsx)(j,{}),e?Object(r.jsx)(L,{}):Object(r.jsx)(A,{})]})}var R=n(16),M=n(54),F=n.n(M);function q(e){var t=e.children;return Object(r.jsx)("div",{className:F.a.container,children:t})}var z=n(31),U=n.n(z);function W(e){var t=e.text,n=e.completed,c=e.onToggleCompleted,a=e.onDelete;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"checkbox",className:U.a.checkbox,checked:n,onChange:c}),Object(r.jsx)("p",{className:U.a.text,children:t}),Object(r.jsx)("button",{type:"button",className:U.a.button,onClick:a,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}var P,V,H=Object(x.b)("todos/fetchTodosRequest"),J=Object(x.b)("todos/fetchTodosSuccess"),K=Object(x.b)("todos/fetchTodosError"),Z=Object(x.b)("todos/addTodoRequest"),G=Object(x.b)("todos/addTodoSuccess"),Q=Object(x.b)("todos/addTodoError"),X=Object(x.b)("todos/deleteTodoRequest"),Y=Object(x.b)("todos/deleteTodoSuccess"),$=Object(x.b)("todos/deleteTodoError"),ee=Object(x.b)("todos/toggleCompletedRequest"),te=Object(x.b)("todos/toggleCompletedSuccess"),ne=Object(x.b)("todos/toggleCompletedError"),re=Object(x.b)("todos/changeFilter"),ce={fetchTodos:function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H()),e.prev=1,e.next=4,m.a.get("/tasks");case 4:n=e.sent,r=n.data,t(J(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(K(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},addTodo:function(e){return function(t){var n={description:e,completed:!1};t(Z()),m.a.post("/tasks",n).then((function(e){var n=e.data;return t(G(n))})).catch((function(e){return t(Q(e.message))}))}},deleteTodo:function(e){return function(t){t(X()),m.a.delete("/tasks/".concat(e)).then((function(){return t(Y(e))})).catch((function(e){return t($(e.message))}))}},toggleCompleted:function(e){var t=e.id,n=e.completed;return function(e){var r={completed:n};e(ee()),m.a.patch("/tasks/".concat(t),r).then((function(t){var n=t.data;return e(te(n))})).catch((function(t){return e(ne(t.message))}))}}},ae=n(24),oe=function(e){return e.todos.filter},ie=function(e){return e.todos.items},se=Object(ae.a)([ie],(function(e){return e.reduce((function(e,t){return t.completed?e+1:e}),0)})),le={getLoading:function(e){return e.todos.loading},getFilter:oe,getVisibleTodos:Object(ae.a)([ie,oe],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.description.toLowerCase().includes(n)}))})),getTotalTodoCount:function(e){return ie(e).length},getCompletedTodoCount:se},ue=n(29),de=n(7),be=Object(x.d)([],(P={},Object(T.a)(P,J,(function(e,t){return t.payload})),Object(T.a)(P,G,(function(e,t){var n=t.payload;return[].concat(Object(ue.a)(e),[n])})),Object(T.a)(P,Y,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(T.a)(P,te,(function(e,t){var n=t.payload;return e.map((function(e){return e.id===n.id?n:e}))})),P)),je=Object(x.d)(!1,(V={},Object(T.a)(V,H,(function(){return!0})),Object(T.a)(V,J,(function(){return!1})),Object(T.a)(V,K,(function(){return!1})),Object(T.a)(V,Z,(function(){return!0})),Object(T.a)(V,G,(function(){return!1})),Object(T.a)(V,Q,(function(){return!1})),Object(T.a)(V,X,(function(){return!0})),Object(T.a)(V,Y,(function(){return!1})),Object(T.a)(V,$,(function(){return!1})),Object(T.a)(V,ee,(function(){return!0})),Object(T.a)(V,te,(function(){return!1})),Object(T.a)(V,ne,(function(){return!1})),V)),fe=Object(x.d)("",Object(T.a)({},re,(function(e,t){return t.payload}))),pe=Object(x.d)(null,{}),he=Object(de.c)({items:be,filter:fe,loading:je,error:pe}),Oe=n(32),me=n.n(Oe);function xe(){var e=Object(l.c)(),t=Object(l.d)(le.getVisibleTodos);return Object(r.jsx)("ul",{className:me.a.list,children:t.map((function(t){var n=t.id,c=t.description,a=t.completed;return Object(r.jsx)("li",{className:a?me.a.completed:me.a.item,children:Object(r.jsx)(W,{text:c,completed:a,onToggleCompleted:function(){return function(t){return e(ce.toggleCompleted(t))}({id:n,completed:!a})},onDelete:function(){return function(t){return e(ce.deleteTodo(t))}(n)}})},n)}))})}var ve=n(26),ge=n(27),ye=n(30),ke=n(28),_e=n(33),we=n.n(_e),Ce=function(e){Object(ye.a)(n,e);var t=Object(ke.a)(n);function n(){var e;Object(ve.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){if(t.preventDefault(),""!==e.state.message)return e.props.onSubmit(e.state.message),e.props.onSave(),void e.setState({message:""});alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438.")},e}return Object(ge.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("form",{className:we.a.editor,onSubmit:this.handleSubmit,children:[Object(r.jsx)("textarea",{className:we.a.textarea,value:this.state.message,onChange:this.handleChange}),Object(r.jsx)("button",{type:"submit",className:we.a.button,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(c.Component),Te=Object(l.b)(null,(function(e){return{onSubmit:function(t){return e(ce.addTodo(t))}}}))(Ce),Se=n(34),Ie=n.n(Se);function Ne(){var e=Object(l.c)(),t=Object(l.d)(le.getFilter);return Object(r.jsxs)("div",{className:Ie.a.filter,children:[Object(r.jsx)("p",{className:Ie.a.label,children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443"}),Object(r.jsx)("input",{type:"text",className:Ie.a.input,value:t,onChange:function(t){return e(re(t.target.value))}})]})}var Le=n(18),Ee=n.n(Le);function Ae(){var e=Object(l.d)(le.getTotalTodoCount),t=Object(l.d)(le.getCompletedTodoCount);return Object(r.jsxs)("div",{className:Ee.a.container,children:[Object(r.jsxs)("p",{className:Ee.a.item,children:[Object(r.jsx)("span",{className:Ee.a.value,children:e}),Object(r.jsx)("span",{className:Ee.a.label,children:"\u0412\u0441\u0435\u0433\u043e"})]}),Object(r.jsxs)("p",{className:Ee.a.item,children:[Object(r.jsx)("span",{className:Ee.a.value,children:t}),Object(r.jsx)("span",{className:Ee.a.label,children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"})]})]})}var Be=n(40),De=n.n(Be),Re=document.querySelector("#modal-root"),Me=function(e){Object(ye.a)(n,e);var t=Object(ke.a)(n);function n(){var e;Object(ve.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(ge.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(r.jsx)("div",{className:De.a.backdrop,onClick:this.handleBackdropClick,children:Object(r.jsx)("div",{className:De.a.content,children:this.props.children})}),Re)}}]),n}(c.Component),Fe=n(41),qe=n(57),ze=n(55),Ue=n.n(ze);function We(e){var t=e.children,n=void 0===t?null:t,c=e.onClick,a=void 0===c?function(){return null}:c,o=Object(qe.a)(e,["children","onClick"]);return Object(r.jsx)("button",Object(Fe.a)(Object(Fe.a)({type:"button",className:Ue.a.button,onClick:a},o),{},{children:n}))}function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var He=c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Je=c.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"});function Ke(e,t){var n=e.title,r=e.titleId,a=Ve(e,["title","titleId"]);return c.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,He,Je)}var Ze=c.forwardRef(Ke),Ge=(n.p,{display:"flex",alignItems:"flex-end",marginBottom:20});function Qe(e){var t=Object(l.c)(),n=Object(l.d)(le.getLoading),a=Object(c.useState)(!1),o=Object(R.a)(a,2),i=o[0],s=o[1],u=function(){return s((function(e){return!e}))};return Object(c.useEffect)((function(){return t(ce.fetchTodos())}),[t]),Object(r.jsxs)(q,{children:[Object(r.jsxs)("div",{style:Ge,children:[Object(r.jsx)(Ne,{}),Object(r.jsx)(Ae,{}),Object(r.jsx)(We,{onClick:u,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c todo",children:Object(r.jsx)(Ze,{width:"40",height:"40",fill:"#fff"})}),n&&Object(r.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."})]}),Object(r.jsx)(xe,{}),i&&Object(r.jsx)(Me,{onClose:u,children:Object(r.jsx)(Te,{onSave:u})})]})}var Xe={container:{minHeight:"calc(100vh - 50px)",display:"flex",alignItems:"center",justifyContent:"center"},title:{fontWeight:500,fontSize:48,textAlign:"center"}},Ye=function(){return Object(r.jsx)("div",{style:Xe.container,children:Object(r.jsxs)("h1",{style:Xe.title,children:["\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430"," ",Object(r.jsx)("span",{role:"img","aria-label":"\u0418\u043a\u043e\u043d\u043a\u0430 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f",children:"\ud83d\udc81\u200d\u2640\ufe0f"})]})})},$e={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};function et(){var e=Object(l.c)(),t=Object(c.useState)(""),n=Object(R.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(""),s=Object(R.a)(i,2),u=s[0],d=s[1],b=Object(c.useState)(""),j=Object(R.a)(b,2),f=j[0],p=j[1],h=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return o(r);case"email":return d(r);case"password":return p(r);default:return}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(w.register({name:a,email:u,password:f})),o(""),d(""),p("")},style:$e.form,autoComplete:"off",children:[Object(r.jsxs)("label",{style:$e.label,children:["\u0418\u043c\u044f",Object(r.jsx)("input",{type:"text",name:"name",value:a,onChange:h})]}),Object(r.jsxs)("label",{style:$e.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(r.jsx)("input",{type:"email",name:"email",value:u,onChange:h})]}),Object(r.jsxs)("label",{style:$e.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(r.jsx)("input",{type:"password",name:"password",value:f,onChange:h})]}),Object(r.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}var tt={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};function nt(){var e=Object(l.c)(),t=Object(c.useState)(""),n=Object(R.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(""),s=Object(R.a)(i,2),u=s[0],d=s[1],b=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return o(r);case"password":return d(r);default:return}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(w.logIn({email:a,password:u})),o(""),d("")},style:tt.form,autoComplete:"off",children:[Object(r.jsxs)("label",{style:tt.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(r.jsx)("input",{type:"email",name:"email",value:a,onChange:b})]}),Object(r.jsxs)("label",{style:tt.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(r.jsx)("input",{type:"password",name:"password",value:u,onChange:b})]}),Object(r.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function rt(){var e=Object(l.c)();return Object(c.useEffect)((function(){e(w.fetchCurrentUser())}),[e]),Object(r.jsxs)(q,{children:[Object(r.jsx)(D,{}),Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",component:Ye}),Object(r.jsx)(d.a,{path:"/register",component:et}),Object(r.jsx)(d.a,{path:"/login",component:nt}),Object(r.jsx)(d.a,{path:"/todos",component:Qe})]})]})}var ct=n(17),at=n(56),ot=n.n(at),it=Object(ue.a)(Object(x.f)({serializableCheck:{ignoredActions:[ct.a,ct.f,ct.b,ct.c,ct.d,ct.e]}})),st={key:"auth",storage:ot.a,whitelist:["token"]},lt=Object(x.a)({reducer:{auth:Object(ct.g)(st,S),todos:he},middleware:it,devTools:!1}),ut=Object(ct.h)(lt);n(93),n(94);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{store:lt,children:Object(r.jsx)(u.a,{loading:null,persistor:ut,children:Object(r.jsx)(s.a,{children:Object(r.jsx)(rt,{})})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.5969cb2d.chunk.js.map