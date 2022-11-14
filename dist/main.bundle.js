"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),d=t(667),c=t.n(d),s=new URL(t(796),t.b),l=i()(r()),p=c()(s);l.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Tangerine', sans-serif;\n  background: url("+p+") no-repeat center center/ cover;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 20px;\n  background-color: black;\n}\n\nsection {\n  width: 50%;\n  background: #fff;\n  padding: 10px;\n  border-radius: 15px;\n  box-shadow: 0 0 10px;\n}\n\n.header-1 {\n  width: 100%;\n  box-sizing: 0 0 3px;\n  border: 2px solid black;\n  border-left: none;\n  border-right: none;\n}\n\n.header-1 p {\n  text-align: start;\n  font-size: 16px;\n  font-weight: 700;\n  background-image: linear-gradient(45deg, #4d0418, #eb1d1d, rgb(214, 146, 57), #eb1d1d);\n  color: transparent;\n  -webkit-background-clip: text;\n  padding: 10px 0 10px 10px;\n}\n\n#add-task-container,\n.task {\n  width: 100%;\n  border: none;\n  background: #fff;\n  border-bottom: 2px solid #4d0418;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  display: flex;\n  box-shadow: 0 0 3px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ninput,\n.task input {\n  width: 100%;\n  flex: 5;\n  font-size: 1.2rem;\n  margin: 5px;\n  border: none;\n}\n\ninput:hover {\n  border: none;\n}\n\n#add-task {\n  flex: 0.1;\n  transition: 0.3s;\n  font-size: 1.3rem;\n  padding: 5px;\n  background-color: #fff;\n  color: green;\n  border: 2px solid green;\n  border-radius: 10px;\n  margin-right: 5px;\n}\n\n#add-task:hover {\n  background-color: green;\n  color: #fff;\n}\n\n.task {\n  width: 98%;\n  background-color: #fff;\n  box-shadow: 0 0 3px;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task label {\n  flex: 4;\n  font-size: 1.3rem;\n  margin: 5px;\n}\n\n.todo-p {\n  flex: 5;\n  font-size: 16px;\n}\n\n.task button {\n  flex: 0.3;\n  border-radius: 10px;\n  background-color: #fff;\n  cursor: pointer;\n  margin-right: 5px;\n}\n\n.task .checkTask {\n  color: #fff;\n  margin-right: 10px;\n  border: 2px solid orange;\n  font-size: 1.3rem;\n}\n\n.task .editTask {\n  border: black 2px solid;\n  padding: 4px;\n  background-color: rgb(241, 247, 245);\n}\n\n.task .editTask:hover {\n  background-color: #4d0418;\n  color: #fff;\n}\n\n.task .checkTask:hover {\n  color: orange;\n  background-color: orange;\n}\n\n.task .decor {\n  background-color: #fff;\n  color: green;\n  border: 2px solid green;\n}\n\n.task .decor:hover {\n  background-color: green;\n  color: #fff;\n  border: 2px solid green;\n}\n\n.task .deleteTask {\n  color: red;\n  margin-right: 5px;\n  margin-left: 5px;\n  border: 2px solid red;\n  font-size: 1.3rem;\n}\n\n.task .deleteTask:hover {\n  color: #fff;\n  background: red;\n}\n\n.clear-all {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 0;\n  border: 1px solid black;\n  box-shadow: 0 0 3px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background: rgb(254, 241, 241);\n  color: rgb(146, 24, 24);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hide {\n  display: none;\n}\n\n.edit-background {\n  background-color: rgb(243, 243, 176);\n}\n\n@media only screen and (max-width: 768px) {\n  section {\n    width: 80%;\n  }\n}\n",""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=r(f,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},337:(n,e,t)=>{var o=t(379),r=t.n(o),a=t(795),i=t.n(a),d=t(569),c=t.n(d),s=t(565),l=t.n(s),p=t(216),u=t.n(p),f=t(589),g=t.n(f),m=t(426),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,t(796);const b=document.querySelector("#task-container"),x=n=>{const e=document.createElement("div");e.className="task";const t=document.createElement("button");t.className="checkTask";const o=document.createElement("i");o.className="fa-solid fa-check",t.appendChild(o),e.appendChild(t);const r=document.createElement("p");r.textContent=n.description,r.className="todo-p",e.appendChild(r);const a=document.createElement("form");a.classList="edit-me hide";const i=document.createElement("input");i.type="text",i.value=n.description,i.classList="hide",a.appendChild(i),e.appendChild(a);const d=document.createElement("button");d.classList="editTask",d.innerHTML='<i class="fa-solid fa-edit"></i>',e.appendChild(d),d.addEventListener("click",(()=>{e.classList.add("edit-background"),i.classList.add("edit-background"),i.classList.remove("hide"),r.classList.add("hide"),a.classList.remove("hide")}));const c=document.createElement("button");c.className="deleteTask",c.innerHTML='<i class="fa-solid fa-trash-can"></i>',e.appendChild(c),c.addEventListener("click",(()=>{(n=>{let e=JSON.parse(localStorage.getItem("todo"));e=e.filter((e=>e.index!==Number(n)));let t=1;e.forEach((n=>{n.index=t,t+=1})),localStorage.setItem("todo",JSON.stringify(e)),window.location.reload()})(n.index)})),a.addEventListener("change",(e=>{e.preventDefault(),((n,e)=>{const t=JSON.parse(localStorage.getItem("todo"));t.forEach((t=>{t.index===e&&(t.description=n)})),localStorage.setItem("todo",JSON.stringify(t)),window.location.reload()})(i.value,n.index)})),t.addEventListener("click",(()=>{(n=>{const e=JSON.parse(localStorage.getItem("todo"));e.forEach((e=>{e.index===n&&(!0===e.completed?e.completed=!1:e.completed=!0)})),localStorage.setItem("todo",JSON.stringify(e)),window.location.reload()})(n.index)})),n.completed?(t.classList.add("decor"),r.style.textDecoration="line-through"):t.classList.remove("decor"),b.appendChild(e)};class k{constructor(n,e,t){this.description=n,this.completed=e,this.index=t}}const v=JSON.parse(localStorage.getItem("todo")),y=document.querySelector("#task-container"),w=document.querySelector(".clear-all"),S=()=>{y.innerHTML="";const n=v;n.sort(((n,e)=>n.index-e.index)),n.forEach((n=>{x(n)}))},E=document.querySelector("#input-task");document.querySelector("#add-task").addEventListener("click",(()=>{let n=[];if(localStorage.getItem("todo")&&(n=v),""!==E.value){(n=>{let e=[];localStorage.getItem("todo")&&(e=JSON.parse(localStorage.getItem("todo"))),e.push(n),localStorage.setItem("todo",JSON.stringify(e))})(new k(E.value,!1,n.length+1)),S(),E.value=""}})),document.addEventListener("DOMContentLoaded",(()=>{S()})),w.addEventListener("click",(()=>{let n=v;n=n.filter((n=>!1===n.completed));let e=1;n.forEach((n=>{n.index=e,e+=1})),localStorage.setItem("todo",JSON.stringify(n)),window.location.reload()}))},796:(n,e,t)=>{n.exports=t.p+"0f128a08be534970c6dc.jpg"}},n=>{n(n.s=337)}]);