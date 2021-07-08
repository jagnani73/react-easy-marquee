/*! For license information please see main.532520d7.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-easy-marquee-example"]=this["webpackJsonpreact-easy-marquee-example"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),s=n(4),a=n.n(s),i=(n(11),n(1)),o=n(5),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},j={exports:{}},h={},d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function O(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(c){return!1}})()&&Object.assign;var p=c.a,x=60103;if(h.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var v=Symbol.for;x=v("react.element"),h.Fragment=v("react.fragment")}var f=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function y(e,t,n){var r,c={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)m.call(t,r)&&!g.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:x,type:e,key:s,ref:a,props:c,_owner:f.current}}h.jsx=y,h.jsxs=y;j.exports=h;var w=function(e){var t=e.axis,n=e.reverse,r=e.offset;return j.exports.jsx("style",{children:"\n        @keyframes slide"+r+" {\n          from {\n            transform: translate"+(t||"X")+"("+100*r+"%);\n          }\n          to {\n            transform: translate"+(t||"X")+"("+((n?-100:100)+100*r)+"%);\n          }\n        }\n      "},void 0)},k=function(e){var t=e.axis,n=e.reverse,c=e.align,s=e.background,a=e.duration,i=e.height,o=e.pauseOnHover,h=e.width,d=e.className,b=e.children,u=Object(r.useState)("running"),O=u[0],p=u[1];return j.exports.jsx("div",l({className:d,onMouseEnter:function(){return o&&p("paused")},onMouseLeave:function(){return o&&p("running")},style:{display:"flex",overflow:"hidden",alignItems:"center",position:"relative",backgroundColor:s||"transparent",height:i||"5rem",width:h||"100%"}},{children:[-1,0,1].map((function(e){return j.exports.jsxs("section",l({style:{whiteSpace:"nowrap",overflow:"hidden",position:"absolute",alignItems:"center",display:"flex",minWidth:"100%",minHeight:"100%"}},{children:[j.exports.jsx(w,{reverse:n,offset:e,axis:t},void 0),j.exports.jsx("div",l({style:{width:"100%",height:"100%",whiteSpace:"nowrap",display:"flex",overflow:"hidden",justifyContent:"space-around",animation:"slide"+e+" "+(a||5e3)+"ms linear infinite",animationPlayState:O||"running",flexDirection:"X"===t?n?"row-reverse":"row":"Y"===t?n?"column-reverse":"column":"row",alignItems:"end"===c||"start"===c?"flex-"+c:"center"}},{children:b}),void 0)]}),e)}))}),void 0)},_=n(0),C=function(){var e=Object(r.useState)({duration:5e3,background:"#00DEFB",height:"220px",width:"100%",axis:"X",align:"center",pauseOnHover:!1,reverse:!1}),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(_.jsxs)("main",{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"heading",children:Object(_.jsxs)("a",{href:"https://npmjs.com/package/react-easy-marquee",target:"_blank",rel:"noopener noreferrer",children:[Object(_.jsx)("span",{children:"REACT-EASY-MARQUEE"})," ",Object(_.jsx)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 12 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(_.jsx)("path",{"fill-rule":"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})})]})}),Object(_.jsx)("div",{className:"marquee",children:Object(_.jsxs)(k,Object(i.a)(Object(i.a)({},n),{},{children:[Object(_.jsx)("h1",{children:"I go weee!"}),["https://picsum.photos/200","https://picsum.photos/100"].map((function(e){return Object(_.jsx)("img",{src:e,alt:"picsum"},e)}))]}))}),Object(_.jsxs)("div",{className:"wrapper",children:[Object(_.jsx)("pre",{className:"codeblock",children:Object(_.jsxs)("code",{children:[Object(_.jsx)("span",{className:"text-blue",children:"<Marquee"}),Object.entries(n).map((function(e){return Object(_.jsxs)(r.Fragment,{children:[Object(_.jsx)("br",{}),"  ",Object(_.jsxs)("span",{children:[e[0],"="]}),Object(_.jsxs)("span",{className:"text-green",children:["string"===typeof e[1]?'"':"{","".concat(e[1]),"string"===typeof e[1]?'"':"}"]})]},e[0])})),Object(_.jsx)("br",{}),Object(_.jsx)("span",{className:"text-blue",children:">"}),Object(_.jsx)("br",{}),"  ",Object(_.jsx)("span",{children:"{children}"}),Object(_.jsx)("br",{}),Object(_.jsx)("span",{className:"text-blue",children:"</Marquee>"})]})}),Object(_.jsxs)("div",{className:"settings",children:[Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"duration",children:"Duration"}),Object(_.jsx)("input",{type:"number",name:"duration",value:n.duration,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{duration:+e.target.value}))}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"background",children:"Background"}),Object(_.jsx)("input",{type:"text",name:"background",value:n.background,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{background:e.target.value}))}})]})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"height",children:"Height"}),Object(_.jsx)("input",{type:"text",name:"height",value:n.height,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{height:e.target.value}))}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"width",children:"Width"}),Object(_.jsx)("input",{type:"text",name:"width",value:n.width,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{width:e.target.value}))}})]})]}),Object(_.jsxs)("section",{children:[Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"axis",children:"Axis"}),Object(_.jsxs)("select",{name:"axis",value:n.axis,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{axis:e.target.value}))},children:[Object(_.jsx)("option",{value:"X",children:"X"}),Object(_.jsx)("option",{value:"Y",children:"Y"})]})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"align",children:"Align"}),Object(_.jsxs)("select",{name:"",value:n.align,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{align:e.target.value}))},children:[Object(_.jsx)("option",{value:"center",children:"Center"}),Object(_.jsx)("option",{value:"start",children:"Start"}),Object(_.jsx)("option",{value:"end",children:"End"})]})]})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"pauseOnHover",children:"Reverse"}),Object(_.jsx)("input",{type:"checkbox",name:"reverse",checked:n.reverse,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{reverse:!n.reverse}))}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"pauseOnHover",children:"Pause On Hover"}),Object(_.jsx)("input",{type:"checkbox",name:"pauseOnHover",checked:n.pauseOnHover,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{pauseOnHover:!n.pauseOnHover}))}})]})]})]})]})]})]}),Object(_.jsxs)("footer",{children:[Object(_.jsxs)("p",{children:["View on"," ",Object(_.jsx)("a",{href:"http://github.com/jagnani73/react-easy-marquee",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]}),Object(_.jsx)("span",{children:"|"}),Object(_.jsxs)("p",{children:["Rendered on \u2615 by"," ",Object(_.jsx)("a",{href:"https://github.com/jagnani73",target:"_blank",rel:"noopener noreferrer",children:"jagnani73"})]})]})]})};a.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(C,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.532520d7.chunk.js.map