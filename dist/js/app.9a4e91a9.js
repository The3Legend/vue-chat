(function(e){function t(t){for(var a,u,i=t[0],c=t[1],o=t[2],f=0,b=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(b.length)b.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},s=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="vue-chat/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0701":function(e,t,n){"use strict";var a=n("2a11"),r=n.n(a);r.a},1039:function(e,t,n){},"1f7b":function(e,t,n){},"2a11":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("chat-container")],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Vue Chat")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{href:"#"}},[e._v("Welcome "),n("strong",[e._v(e._s(e.uuid))])])],1)],1)],1)],1)},i=[],c=n("5530"),o=n("2f62"),l=(n("f9e3"),n("2dd8"),{name:"Navbar",components:{},mounted:function(){this.$pnSubscribe({channels:["vueChat"]})},computed:Object(c["a"])({},Object(o["b"])({uuid:"getMyUuid"}))}),f=l,b=n("2877"),p=Object(b["a"])(f,u,i,!1,null,"017b44ce",null),d=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-container"},[n("div",{staticClass:"heading"},[n("h1",[e._v(e._s(e.title+"- User: "+e.uuid))])]),n("div",{staticClass:"body"},[n("div",{staticClass:"table"},[n("chat-log"),n("message-input")],1)])])},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"chatLogContainer",staticClass:"chat-log"},e._l(e.vueChatMsg,(function(e){return n("message-bubble",{key:e.id,attrs:{uuid:e.message.uuid,text:e.message.text}})})),1)},g=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-bubble",class:e.me},[n("div",{staticClass:"flex"},[n("div",[n("span",{staticClass:"from",class:e.me},[n("strong",[e._v(e._s(e.uuid))])])]),n("div",[n("b-avatar",{attrs:{size:24}})],1)]),n("span",{staticClass:"message-text"},[e._v(" "+e._s(e.text))])])},_=[],C={name:"message-bubble",props:["uuid","text"],computed:{me:function(){var e=!1;return this.$store.getters.getMyUuid===this.uuid&&(e=!0),e?"me":""}},data:function(){return{}}},x=C,O=(n("6cb8"),Object(b["a"])(x,y,_,!1,null,"4097a23e",null)),j=O.exports;function M(){this.$el.scrollTo(0,this.$el.scrollHeight)}var w={name:"chat-log",components:{MessageBubble:j},data:function(){return{vueChatMsg:this.$pnGetMessage("vueChat")}},watch:{vueChatMsg:function(){this.$nextTick(M)}}},$=w,k=(n("ec60"),Object(b["a"])($,m,g,!1,null,"5b3fc638",null)),P=k.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-input"},[n("textarea",{ref:"messageInput",attrs:{placeholder:"message...",maxlength:"20000"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitMessage(t)}}})])},E=[],U={name:"message-input",data:function(){return{}},methods:{submitMessage:function(e){if(!e.shiftKey&&(e.preventDefault(),0!==e.target.value.length)){var t=this.$store.getters.getMyUuid;this.$pnPublish({channel:"vueChat",message:{text:e.target.value,uuid:t}}),e.target.value=""}}}},T=U,K=(n("0701"),Object(b["a"])(T,S,E,!1,null,"26b19566",null)),N=K.exports,A={name:"chat-container",components:{ChatLog:P,MessageInput:N},data:function(){return{title:"Vue Chat "}},mounted:function(){this.$pnSubscribe({channels:["vueChat"]})},computed:Object(c["a"])({},Object(o["b"])({uuid:"getMyUuid"}))},I=A,J=(n("61c1"),Object(b["a"])(I,v,h,!1,null,"810976a2",null)),L=J.exports,V={name:"App",components:{ChatContainer:L,Navbar:d}},z=V,B=(n("034f"),Object(b["a"])(z,r,s,!1,null,null,null)),D=B.exports;a["default"].use(o["a"]);var G={me:{}},H={setMe:function(e,t){var n=t.me;e.me=n}},W={getMyUuid:function(e){return e.me.uuid}},q=new o["a"].Store({state:G,getters:W,mutations:H}),F=n("9c6e"),Q=n("5f5b"),R=n("b1e0");a["default"].use(Q["a"]),a["default"].use(R["a"]),a["default"].config.productionTip=!1;var X="pub-c-820bb3c5-eaca-424b-afad-fa42afef2709",Y="sub-c-70a93ca4-d809-11ea-b3f2-c27cb65b13f4";console.log(X),console.log(Y);var Z=ne(),ee={uuid:Z};try{if(!X||!Y)throw"PubNub Keys are missing."}catch(ae){console.log(ae)}function te(){this.$store.commit("setMe",{me:ee})}function ne(){var e=prompt("wath your nickname?");while(null===e||!e.length)e=prompt("wath your nickname?");return e}a["default"].use(F["a"],{subscribeKey:Y,publishKey:X,ssl:!0},q),new a["default"]({el:"#app",store:q,components:{App:D},template:"<App/>",created:te})},"61c1":function(e,t,n){"use strict";var a=n("1039"),r=n.n(a);r.a},"6cb8":function(e,t,n){"use strict";var a=n("1f7b"),r=n.n(a);r.a},"85ec":function(e,t,n){},d7b1:function(e,t,n){},ec60:function(e,t,n){"use strict";var a=n("d7b1"),r=n.n(a);r.a}});
//# sourceMappingURL=app.9a4e91a9.js.map