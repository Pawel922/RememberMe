(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(44)},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),l=n.n(r),u=(n(27),n(10)),o=function(){return c.a.createElement("footer",null,c.a.createElement("p",{dangerouslySetInnerHTML:{__html:"&copy; Pawe\u0142 Wo\u017aniak"}}))},i=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Do you remember me?"))},s=n(6),m=n(2),f=n(21),E=Object(a.createContext)(),p=n(4),d=n(5),b=(n(33),function(e){var t=e.currentAnswer,n=e.picture,a=e.updateAnswer;return c.a.createElement("div",{className:"question"},c.a.createElement("img",{alt:"face",src:n}),c.a.createElement("p",null,"Your answer:"),c.a.createElement("input",{onChange:function(e){var t=e.target.value;a(t)},type:"text",value:t,placeholder:"type my name"}))}),v=(n(34),c.a.createElement(p.a,{icon:d.a})),h=c.a.createElement(p.a,{icon:d.c}),g=c.a.createElement(p.a,{icon:d.b}),O=function(){var e=Object(a.useContext)(E).guests,t=Object(a.useState)(new Array(e.length).fill("")),n=Object(s.a)(t,2),r=n[0],l=n[1],u=Object(a.useState)(0),o=Object(s.a)(u,2),i=o[0],p=o[1],d=Object(a.useRef)(),O=Object(a.useRef)(),j=Object(a.useRef)(),y=Object(m.e)();return Object(a.useEffect)(function(){O.current.classList.add("inactive"),O.current.disabled=!0},[]),Object(a.useEffect)(function(){0===i?(d.current.classList.add("inactive"),d.current.disabled=!0):i===e.length-1?(j.current.classList.add("inactive"),j.current.disabled=!0):(d.current.classList.remove("inactive"),d.current.disabled=!1,j.current.classList.remove("inactive"),j.current.disabled=!1)},[i]),c.a.createElement("div",{className:"form"},c.a.createElement("h2",null,"Nice to see you again!"),c.a.createElement(b,{currentAnswer:r[i],picture:e[i].picture.large,updateAnswer:function(e){var t=Object(f.a)(r);t[i]=e,-1!==t.indexOf("")?(O.current.classList.add("inactive"),O.current.disabled=!0):(O.current.classList.remove("inactive"),O.current.disabled=!1),l(t)}}),c.a.createElement("button",{onClick:function(){p(function(e){return e-1})},ref:d},v),c.a.createElement("button",{onClick:function(){p(function(e){return e+1})},ref:j},g),c.a.createElement("button",{onClick:function(){y.push({pathname:"/results",state:r})},ref:O},h))},j=(n(37),function(e){var t=e.num,n=e.numPeopleToGuess,r=e.person,l=e.time,u=r.name,o=r.picture,i={animationDuration:"".concat(l,"ms"),animationIterationCount:n},f=Object(a.useState)(),E=Object(s.a)(f,2),p=E[0],d=E[1],b=Object(m.e)();return Object(a.useEffect)(function(){d(function(e){var t=["Hi, I'am ".concat(e),"Hello, I'am ".concat(e),"I'am ".concat(e,", nice to see you!"),"Pleased to see you, I'am ".concat(e),"Welcome to the party, I'am ".concat(e),"I'am ".concat(e,", nice to meet you!")];return t[Math.floor(Math.random()*t.length)]}(u.first)),t===n-1&&setTimeout(function(){return b.push({pathname:"/info",state:{text:"Are you ready to check your memory?",type:"info"}})},l)},[r]),c.a.createElement("div",{className:"guest"},c.a.createElement("h2",null,"Greetings"),c.a.createElement("p",null,"Guest ".concat(t," of ").concat(n)),c.a.createElement("img",{src:o.large,alt:"face"}),c.a.createElement("p",null,p),c.a.createElement("div",{className:"progress"},c.a.createElement("p",{style:i})))}),y=(n(38),function(e){var t=Object(a.useContext)(E),n=t.guests,r=t.lapseOfTime,l=Object(m.e)(),u=Object(m.f)().numOfPeopleToGuess,o=Object(a.useState)(0),i=Object(s.a)(o,2),f=i[0],p=i[1],d=Object(a.useState)(),b=Object(s.a)(d,2),v=b[0],h=b[1];return Object(a.useEffect)(function(){fetch("".concat("https://randomuser.me/api/?nat=us,gb,ca&inc=name,picture&results=").concat(u)).then(function(e){if(e.ok)return e;throw Error()}).then(function(e){return e.json()}).then(function(t){return e.provideDataForMainContext(t.results)}).catch(function(){return l.push({pathname:"info",state:{type:"error",text:"I regret to say that something went wrong. Try to once again later."}})})},[]),Object(a.useEffect)(function(){if("undefined"!==typeof n){var e=0,t=setInterval(function(){h(n[e++]),p(function(e){return e+1})},r);return setTimeout(function(){return clearInterval(t)},(u+1)*r),function(){return clearInterval(t)}}},[n]),c.a.createElement("div",{className:"greetings"},"undefined"!==typeof v?c.a.createElement(j,{num:f,numPeopleToGuess:u,person:v,time:r}):"Please, wait for a while...")}),w=(n(39),c.a.createElement(p.a,{icon:d.a})),C=c.a.createElement(p.a,{icon:d.c}),N=function(e){var t=e.location.state,n=t.text,a=t.type,r=Object(m.e)(),l=function(){return r.push({pathname:"/"})},u=function(){return r.push({pathname:"/form"})};return c.a.createElement("div",{className:"info"},c.a.createElement("p",null,n),function(e){return"info"===e?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:l},w),c.a.createElement("button",{onClick:u},C)):"error"===e?c.a.createElement("button",{onClick:l},w):void 0}(a))},k=(n(40),c.a.createElement(p.a,{icon:d.e})),S=c.a.createElement(p.a,{icon:d.f}),T=c.a.createElement(p.a,{icon:d.g}),x=function(e){var t=e.location.state,n=Object(a.useState)(0),r=Object(s.a)(n,2),l=r[0],u=r[1],o=Object(a.useState)(0),i=Object(s.a)(o,2),f=i[0],p=i[1],d=Object(a.useContext)(E).guests,b=Object(m.e)();return Object(a.useEffect)(function(){!function(){var e=0,n=0;d.map(function(a,c){return a.name.first===t[c]?n+=1:e+=1}),u(e),p(n)}()},[]),c.a.createElement("div",{className:"results"},c.a.createElement("div",{className:"summary"},c.a.createElement("div",null,c.a.createElement("p",null,k),c.a.createElement("p",null,l)),c.a.createElement("div",null,c.a.createElement("p",null,S),c.a.createElement("p",null,f))),c.a.createElement("ul",{className:"answers"},function(){var e="";return d.map(function(n,a){e=n.name.first===t[a]?"yellowgreen":"tomato";var r={borderColor:"".concat(e)};return c.a.createElement("li",{key:a},c.a.createElement("img",{alt:"face",src:n.picture.medium,style:r}),c.a.createElement("p",null,n.name.first),c.a.createElement("p",null,t[a]))})}()),c.a.createElement("button",{onClick:function(){b.push({pathname:"/"})}},T))},I=(n(41),c.a.createElement(p.a,{icon:d.a})),L=c.a.createElement(p.a,{icon:d.c}),R=c.a.createElement(p.a,{icon:d.h}),M=function(e){var t=Object(m.e)(),n=Object(a.useRef)(),r=!1,l=Object(a.useRef)();return c.a.createElement("div",{className:"settings"},c.a.createElement("h2",null,"Settings"),c.a.createElement("div",{className:"explanation"},"Hereunder you can set how long greeting the guest will last."),c.a.createElement("div",{className:"timer"},c.a.createElement("div",{className:"icon"},R),c.a.createElement("div",{className:"strip",onClick:function(t){var a=t.target;"indicator"===a.className&&(a=a.parentElement);var c=a.getBoundingClientRect(),l=c.width;if(r){var u=t.clientX-c.left;u>.15*l&&u<.25*l?(n.current.style="left: 15%",e.provideTimeFromSettings(3e3)):u>.45*l&&u<.55*l?(n.current.style="left: 45%",e.provideTimeFromSettings(5e3)):u>.75*l&&u<.85*l&&(n.current.style="left: 75%",e.provideTimeFromSettings(7e3))}},onMouseMove:function(e){r=!0},ref:l},c.a.createElement("p",{className:"indicator",ref:n}),c.a.createElement("p",null,"3s"),c.a.createElement("p",null,"5s"),c.a.createElement("p",null,"7s"))),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return t.push({pathname:"/"})}},I),c.a.createElement("button",{onClick:function(){return t.push({pathname:"/"})}},L)))},P=(n(42),c.a.createElement(p.a,{icon:d.d})),G=function(e){var t=Object(a.useState)(5),n=Object(s.a)(t,2),r=n[0],l=n[1],u=Object(a.useRef)(),o=Object(a.useRef)(),i=Object(a.useRef)(),f=[u,o,i],E=Object(m.e)(),p=void 0===e.location.state?3e3:e.location.state,d=function(e){var t=e.target.dataset.difficulty;switch(f.forEach(function(e){var n=e.current;n.dataset.difficulty===t?n.classList.add("choosen"):n.classList.remove("choosen")}),t){case"easy":return l(5);case"medium":return l(10);case"hard":return l(15);default:return l(5)}};return c.a.createElement("div",{className:"startPage"},c.a.createElement("div",{className:"description"},c.a.createElement("p",null,"Try to imagine, that you are at the big party. Because of your famous a lot of people want to know you. Are you able to remember their names? Let's check it!")),c.a.createElement("section",{className:"buttons"},c.a.createElement("div",{className:"firstBtnGroup"},c.a.createElement("div",null,c.a.createElement("button",{className:"choosen","data-difficulty":"easy",onClick:d,ref:u},"Easy"),c.a.createElement("p",null,"up to 5")),c.a.createElement("div",null,c.a.createElement("button",{"data-difficulty":"medium",onClick:d,ref:o},"Medium"),c.a.createElement("p",null,"up to 10")),c.a.createElement("div",null,c.a.createElement("button",{"data-difficulty":"hard",onClick:d,ref:i},"Hard"),c.a.createElement("p",null,"up to 15"))),c.a.createElement("div",{className:"secondBtnGroup"},c.a.createElement("button",{onClick:function(){return E.push({pathname:"/settings"})}},P),c.a.createElement("button",{onClick:function(){return E.push({pathname:"/greetings/".concat(r),state:p})}},"Start"))))},A=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(3e3),u=Object(s.a)(l,2),o=u[0],i=u[1],f=function(e){return r(e)},p=function(e){return i(e)};return c.a.createElement("main",null,c.a.createElement(E.Provider,{value:{guests:n,lapseOfTime:o}},c.a.createElement(m.a,{path:"/",exact:!0,component:G}),c.a.createElement(m.a,{path:"/form",component:O}),c.a.createElement(m.a,{path:"/greetings/:numOfPeopleToGuess",render:function(){return c.a.createElement(y,{provideDataForMainContext:f})}}),c.a.createElement(m.a,{path:"/info",component:N}),c.a.createElement(m.a,{path:"/results",component:x}),c.a.createElement(m.a,{path:"/settings",render:function(){return c.a.createElement(M,{provideTimeFromSettings:p})}})))},F=(n(43),function(){return c.a.createElement(u.a,{basename:"/RememberMe"},c.a.createElement("div",{className:"app"},c.a.createElement(i,null),c.a.createElement(A,null),c.a.createElement(o,null)))});l.a.render(c.a.createElement(F,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8f74b51a.chunk.js.map