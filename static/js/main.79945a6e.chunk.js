(this["webpackJsonp25-5-clock"]=this["webpackJsonp25-5-clock"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(8),i=n.n(o),s=n(17),l=n(6),a=n(18),d=n(19),u=n.p+"static/media/alarm.372995a9.wav",b=n(1);function j(){var e=Object(r.useState)(5),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(25),i=Object(l.a)(o,2),s=i[0],j=i[1],f=Object(r.useState)(300),h=Object(l.a)(f,2),x=h[0],O=h[1],m=Object(r.useState)(1500),g=Object(l.a)(m,2),p=g[0],k=g[1],y=Object(r.useState)(!1),B=Object(l.a)(y,2),v=B[0],C=B[1],M=Object(r.useState)(!1),S=Object(l.a)(M,2),E=S[0],I=S[1],L={minutes:E?Math.floor(x/60)<10?"0"+Math.floor(x/60):Math.floor(x/60):Math.floor(p/60)<10?"0"+Math.floor(p/60):Math.floor(p/60),seconds:E?Math.floor(x%3600%60)<10?"0"+Math.floor(x%3600%60):Math.floor(x%3600%60):Math.floor(p%3600%60)<10?"0"+Math.floor(p%3600%60):Math.floor(p%3600%60)};function R(e){"B"===e&&n>1&&(c((function(e){return e-1})),O((function(e){return e-60}))),"S"===e&&s>1&&(j((function(e){return e-1})),k((function(e){return e-60})))}function w(e){"B"===e&&n<60&&(c((function(e){return e+1})),O((function(e){return e+60}))),"S"===e&&s<60&&(j((function(e){return e+1})),k((function(e){return e+60})))}return Object(r.useEffect)((function(){if(v&&!E){var e=setInterval((function(){0===p&&(document.getElementById("beep").play(),I(!0),k(60*s)),k((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}}),[v,E,s,p]),Object(r.useEffect)((function(){if(v&&E){var e=setInterval((function(){0===x&&(document.getElementById("beep").play(),I(!1),O(60*n)),O((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}}),[v,E,n,x]),Object(b.jsxs)(a.a,{body:!0,className:"text-center",style:{backgroundColor:"#3B4252"},children:[Object(b.jsx)("h1",{children:"25 + 5 Clock"}),Object(b.jsxs)("div",{id:"length-box",className:"d-flex align-items-center justify-content-around",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{id:"break-label",children:"Break Length"}),Object(b.jsx)(d.a,{id:"break-decrement",style:{border:"none",backgroundColor:"#3B4252"},onClick:function(){R("B")},children:"\u2193"}),Object(b.jsx)("span",{id:"break-length",style:{marginLeft:"15px",marginRight:"15px"},children:n}),Object(b.jsx)(d.a,{id:"break-increment",style:{border:"none",backgroundColor:"#3B4252"},onClick:function(){w("B")},children:"\u2191"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{id:"session-label",children:"Session Length"}),Object(b.jsx)(d.a,{id:"session-decrement",style:{border:"none",backgroundColor:"#3B4252"},onClick:function(){R("S")},children:"\u2193"}),Object(b.jsx)("span",{id:"session-length",style:{marginLeft:"15px",marginRight:"15px"},children:s}),Object(b.jsx)(d.a,{id:"session-increment",style:{border:"none",backgroundColor:"#3B4252"},onClick:function(){w("S")},children:"\u2191"})]})]}),Object(b.jsxs)("div",{id:"session-box",style:{margin:"15px auto",padding:"10px",maxWidth:"200px",border:"7px solid #2E3440",borderRadius:"30px"},children:[Object(b.jsx)("h2",{id:"timer-label",children:E?"Break":"Session"}),Object(b.jsxs)("h2",{id:"time-left",children:[L.minutes,":",L.seconds]})]}),Object(b.jsx)(d.a,{id:"start_stop",style:{marginRight:"10px",border:"none",backgroundColor:"#3B4252"},onClick:function(){C((function(e){return!e}))},children:"\u27a7"}),Object(b.jsx)(d.a,{id:"reset",style:{border:"none",backgroundColor:"#3B4252"},onClick:function(){C(!1),I(!1),c(5),j(25),O(300),k(1500),document.getElementById("beep").load()},children:"\u27f3"}),Object(b.jsx)("audio",{id:"beep",preload:"auto",src:u})]})}var f=function(){return Object(b.jsxs)(s.a,{className:"d-flex flex-column align-items-center justify-content-center",style:{minHeight:"100vh",backgroundColor:"#2E3440",color:"#D8DEE9"},fluid:!0,children:[Object(b.jsx)("div",{style:{minWidth:"500px"},children:Object(b.jsx)(j,{})}),Object(b.jsxs)("small",{style:{marginTop:"10px",color:"#5E81AC"},children:["Designed and coded by",Object(b.jsx)("span",{style:{color:"#BF616A"},children:" Taylor Li"})]})]})};n(15);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.79945a6e.chunk.js.map