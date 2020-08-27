(function(t){function e(e){for(var n,u,c=e[0],i=e[1],o=e[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&p.push(s[u][0]),s[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},s={app:0},r=[];function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-chat/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var l=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"0701":function(t,e,a){"use strict";var n=a("2a11"),s=a.n(n);s.a},"2a11":function(t,e,a){},5063:function(t,e,a){"use strict";var n=a("800a"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("chat-container")],1)},r=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back"},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:""}},[n("div",[n("img",{attrs:{src:a("6050"),width:"80px",alt:"",height:"70px"}})]),n("b-navbar-brand",{staticClass:"color",attrs:{href:"#"}},[t._v("Vue Chat")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{staticClass:"size",attrs:{href:"#"}},[t._v("Welcome "),n("strong",[t._v(t._s(t.uuid))])])],1)],1)],1)],1)},c=[],i=a("5530"),o=a("2f62"),l=(a("f9e3"),a("2dd8"),{name:"Navbar",components:{},mounted:function(){this.$pnSubscribe({channels:["vueChat"]})},computed:Object(i["a"])({},Object(o["b"])({uuid:"getMyUuid"}))}),f=l,p=(a("ce24"),a("2877")),d=Object(p["a"])(f,u,c,!1,null,"7720c47c",null),b=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat-container"},[a("div",{staticClass:"heading"},[a("h1",[t._v(t._s(t.title+t.uuid))])]),a("div",{staticClass:"body"},[a("div",{staticClass:"table"},[a("chat-log"),a("message-input")],1)])])},h=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chatLogContainer",staticClass:"chat-log"},t._l(t.vueChatMsg,(function(t){return a("message-bubble",{key:t.id,attrs:{uuid:t.message.uuid,text:t.message.text}})})),1)},m=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-bubble",class:t.me},[a("div",{staticClass:"flex"},[a("div",[a("span",{staticClass:"from",class:t.me},[a("strong",[t._v(t._s(t.uuid))])])]),a("div",[a("b-avatar",{attrs:{size:24}}),a("span",[t._v(t._s(""+t.data.toLocaleString()))])],1)]),a("span",{staticClass:"message-text"},[t._v(" "+t._s(t.text))])])},_=[],C={name:"message-bubble",props:["uuid","text"],computed:{me:function(){var t=!1;return this.$store.getters.getMyUuid===this.uuid&&(t=!0),t?"me":""}},data:function(){return{data:new Date}}},x=C,O=(a("63a3"),Object(p["a"])(x,y,_,!1,null,"7c5b9528",null)),j=O.exports;function w(){this.$el.scrollTo(0,this.$el.scrollHeight)}var M={name:"chat-log",components:{MessageBubble:j},data:function(){return{vueChatMsg:this.$pnGetMessage("vueChat")}},watch:{vueChatMsg:function(){this.$nextTick(w)}}},$=M,k=(a("ec60"),Object(p["a"])($,g,m,!1,null,"5b3fc638",null)),P=k.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-input"},[a("textarea",{ref:"messageInput",attrs:{placeholder:"message...",maxlength:"20000"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitMessage(e)}}})])},E=[],U={name:"message-input",data:function(){return{}},methods:{submitMessage:function(t){if(!t.shiftKey&&(t.preventDefault(),0!==t.target.value.length)){var e=this.$store.getters.getMyUuid;this.$pnPublish({channel:"vueChat",message:{text:t.target.value,uuid:e}}),t.target.value=""}}}},T=U,K=(a("0701"),Object(p["a"])(T,S,E,!1,null,"26b19566",null)),N=K.exports,A={name:"chat-container",components:{ChatLog:P,MessageInput:N},data:function(){return{title:"User: "}},mounted:function(){this.$pnSubscribe({channels:["vueChat"]})},computed:Object(i["a"])({},Object(o["b"])({uuid:"getMyUuid"}))},L=A,z=(a("5063"),Object(p["a"])(L,v,h,!1,null,"6d939518",null)),D=z.exports,I={name:"App",components:{ChatContainer:D,Navbar:b}},J=I,B=(a("034f"),Object(p["a"])(J,s,r,!1,null,null,null)),G=B.exports;n["default"].use(o["a"]);var H={me:{}},V={setMe:function(t,e){var a=e.me;t.me=a}},W={getMyUuid:function(t){return t.me.uuid}},q=new o["a"].Store({state:H,getters:W,mutations:V}),F=a("9c6e"),Q=a("5f5b"),R=a("b1e0");n["default"].use(Q["a"]),n["default"].use(R["a"]),n["default"].config.productionTip=!1;var X="pub-c-820bb3c5-eaca-424b-afad-fa42afef2709",Y="sub-c-70a93ca4-d809-11ea-b3f2-c27cb65b13f4";console.log(X),console.log(Y);var Z=at(),tt={uuid:Z};try{if(!X||!Y)throw"PubNub Keys are missing."}catch(nt){console.log(nt)}function et(){this.$store.commit("setMe",{me:tt})}function at(){var t=prompt("wath your nickname?");while(null===t||!t.length)t=prompt("wath your nickname?");return t}n["default"].use(F["a"],{subscribeKey:Y,publishKey:X,ssl:!0},q),new n["default"]({el:"#app",store:q,components:{App:G},template:"<App/>",created:et})},6050:function(t,e,a){t.exports=a.p+"img/2.3a307bb3.jpg"},"63a3":function(t,e,a){"use strict";var n=a("c421"),s=a.n(n);s.a},"800a":function(t,e,a){},"85ec":function(t,e,a){},aac7:function(t,e,a){},c421:function(t,e,a){},ce24:function(t,e,a){"use strict";var n=a("aac7"),s=a.n(n);s.a},d7b1:function(t,e,a){},ec60:function(t,e,a){"use strict";var n=a("d7b1"),s=a.n(n);s.a}});
//# sourceMappingURL=app.79858033.js.map