(this["webpackJsonpmeeting-system"]=this["webpackJsonpmeeting-system"]||[]).push([[14],{263:function(e,t,a){"use strict";a(100);var n=a(42),l=a(0),c=a.n(l),r=a(264),i=a.n(r);var m=function(e){var t=e.type,a=void 0===t?"button":t,l=e.value,r=e.className,m=e.color,o=e.fontSize,s=e.onClick,u=e.loading,d=void 0!==u&&u,E=e.disabled,v=e.size;return c.a.createElement(n.a,{type:"primary",size:v,htmlType:a,loading:d,className:"".concat(i.a.btn," ").concat(r),style:{backgroundColor:m,fontSize:"".concat(o,"px")},onClick:s,disabled:E},l)};a.d(t,"a",(function(){return m}))},264:function(e,t,a){e.exports={btn:"Button_btn__3ows5"}},275:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(276),r=a.n(c);t.a=function(e){var t=e.key,a=e.img,n=e.name;return l.a.createElement("div",{key:t,className:r.a.container},l.a.createElement("img",{src:a,alt:""}),l.a.createElement("div",null,n))}},276:function(e,t,a){e.exports={container:"style_container__3jEYf"}},299:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(275),r=a(300),i=a.n(r),m=a(263),o=a(18);t.a=function(e){var t=e.num,a=void 0===t?"5":t,n=e.guestList,r=(e.callback,Object(o.g)()),s=Object(o.h)().pathname,u=Object(o.i)().meetingId;return l.a.createElement("div",{className:i.a.container},l.a.createElement("div",{className:i.a.header},l.a.createElement("div",{className:i.a.tt},"\u5df2\u5b89\u6392\u5609\u5bbe: ",l.a.createElement("span",null,a),"\u4eba"),l.a.createElement(m.a,{className:i.a.btn,onClick:function(){console.log(s),s.includes("aircraft")?r.push("/detail/airdetail/"+u):s.includes("accommodation")&&r.push("/detail/roomdetail/"+u)},value:"\u67e5\u770b\u8be6\u60c5",color:"rgba(253, 202, 48, 1)"})),l.a.createElement("div",{className:i.a.list},null===n||void 0===n?void 0:n.map((function(e,t){return l.a.createElement(c.a,{key:"guest".concat(t),img:e.img,name:e.name})}))))}},300:function(e,t,a){e.exports={container:"style_container__1sOVw",header:"style_header__z-Qe8",tt:"style_tt__Xe9-h",list:"style_list__6CeUH"}},301:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(302),r=a.n(c),i=function(e){var t=e.list;return l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u623f\u578b"),l.a.createElement("th",null,"\u6570\u91cf"),l.a.createElement("th",null,"\u4ef7\u683c")),null===t||void 0===t?void 0:t.map((function(e,t){return l.a.createElement("tr",{key:"car".concat(t)},l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.num),l.a.createElement("td",null,e.price))})))},m=function(e){var t=e.list;return l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u8f66\u578b"),l.a.createElement("th",null,"\u6570\u91cf")),null===t||void 0===t?void 0:t.map((function(e,t){return l.a.createElement("tr",{key:"car".concat(t)},l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.num))})))};t.a=function(e){e.num;var t=e.type,a=e.list;return l.a.createElement("div",{className:r.a.container},"room"===t&&l.a.createElement("div",null,l.a.createElement("div",{className:r.a.header},l.a.createElement("div",{className:r.a.tt},"\u5269\u4f59\u623f\u95f4: ",l.a.createElement("span",null,"12"),"\u95f4")),l.a.createElement(i,{list:a})),"car"===t&&l.a.createElement("div",null,l.a.createElement("div",{className:r.a.header},l.a.createElement("div",{className:r.a.tt},"\u5269\u4f59\u8f66\u8f86: ",l.a.createElement("span",null,"28"),"\u8f86")),l.a.createElement(m,{list:a})))}},302:function(e,t,a){e.exports={container:"style_container__1vGFf",header:"style_header__2riyv",tt:"style_tt__dTyhT"}},393:function(e,t,a){e.exports={container:"style_container__1R0uR",btn:"style_btn__1ytMM"}},416:function(e,t,a){"use strict";a.r(t);var n=a(116),l=a(0),c=a.n(l),r=a(299),i=a(301),m=a(263),o=a(393),s=a.n(o),u=a(18);t.default=function(e){Object(n.a)(e);var t=Object(u.g)(),a=Object(u.i)().meetingId;return c.a.createElement("div",{className:s.a.container},c.a.createElement(r.a,{num:"6",guestList:[{img:"",name:"zao"},{img:"",name:"zao2"},{img:"",name:"zao3"}]}),c.a.createElement(i.a,{num:"6",type:"room",list:[{type:"\u5355\u95f4",num:"12",price:"188\u5143"}]}),c.a.createElement(m.a,{className:s.a.btn,value:"+\u5bfc\u5165\u8d44\u6e90",color:"rgba(145, 191, 229, 1)",onClick:function(){t.push("/source/"+a,{from:"accommodation"})}}))}}}]);
//# sourceMappingURL=14.0312edd3.chunk.js.map