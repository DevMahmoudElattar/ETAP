(this["webpackJsonpexpenses-calculator"]=this["webpackJsonpexpenses-calculator"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(8),a=n.n(i),r=(n(13),n(3)),o=n(7),l=n(4),d=(n(14),n(15),n(16),n(0));var j=function(){var t=Object(c.useContext)(O),e=Object(c.useState)(0),n=Object(r.a)(e,2),s=n[0],i=n[1],a=Object(c.useState)(""),o=Object(r.a)(a,2),l=o[0],j=o[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.trans_modify({type:"Add",payload:{id:Math.floor(1e6*Math.random()),Activity:l,Amount:parseInt(s)}}),i(0),j("")},children:[Object(d.jsx)("h3",{children:"Make Transaction"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"transaction_body",children:[Object(d.jsx)("div",{className:"transaction_body-input",children:Object(d.jsx)("input",{style:{width:"100%",height:"35%"},type:"text",placeholder:"Activity",value:l,onChange:function(t){j((function(e){return t.target.value}))}})}),Object(d.jsxs)("div",{className:"transaction_body-input",children:[Object(d.jsx)("input",{style:{width:"100%",height:"35%"},type:"number",placeholder:"Amount",value:s,onChange:function(t){i((function(e){return t.target.value}))}}),Object(d.jsx)("div",{style:{color:"red"},children:"put (+) for incom and (-) for cost before number"})]}),Object(d.jsx)("div",{className:"transaction_body-input-button",children:Object(d.jsx)("button",{className:"transaction_body-input-button-itself",type:"submit",children:"Make Transaction"})})]})]})})};n(18);var u=function(){var t=Object(c.useContext)(O),e=function(e){window.confirm("ARE YOU SURE YOU WANT TO DELTE THIS ITEM")&&t.trans_modify({type:"Remove",payload:Number(e.target.value)})};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"History"}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"ul_list",children:t.trans_item.transList.map((function(t){return Object(d.jsxs)("div",{className:t.Amount>0?"Positive_History_list":"Negative_History_list",onMouseEnter:function(){return function(t){for(var e=document.getElementsByClassName("hide_history_button"),n=0;n<e.length;n++)Number(e[n].value)===t&&(console.log(e[n].value,t),e[n].classList.add("show_history_button"))}(t.id)},onMouseLeave:function(){return function(t){for(var e=document.getElementsByClassName("hide_history_button"),n=0;n<e.length;n++)Number(e[n].value)===t&&(console.log(e[n].value,t),e[n].classList.remove("show_history_button"))}(t.id)},children:[Object(d.jsx)("div",{className:"history_list_li_div",children:Object(d.jsxs)("li",{className:"History_list-li",children:[t.Activity," - Amount : ",t.Amount,"$"]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"hide_history_button btn_effect",value:t.id,onClick:e,children:" X "})})]},t.id)}))})]})};n(19);var b=function(){var t=Object(c.useContext)(O).trans_item.transList;console.log(t);for(var e=0,n=0,s=0;s<t.length;s++)t[s].Amount>0?e+=t[s].Amount:t[s].Amount<=0&&(n+=t[s].Amount);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:e+n>0?"header_container_p":"header_container_n",children:"Balance"}),Object(d.jsxs)("h1",{className:e+n>0?"header_container_p":"header_container_n",children:[e+n,"$"]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"Balance_detail_container",children:[Object(d.jsxs)("div",{className:"income",children:[Object(d.jsx)("div",{className:"income_head",children:Object(d.jsx)("h4",{children:"INCOME"})}),Object(d.jsx)("div",{className:"income_body",children:Object(d.jsxs)("h3",{children:["$",e]})})]}),Object(d.jsxs)("div",{className:"cost",children:[Object(d.jsx)("div",{className:"cost_head",children:Object(d.jsx)("h4",{children:"EXPENSES"})}),Object(d.jsx)("div",{className:"cost_body",children:Object(d.jsxs)("h3",{children:["-$",Math.abs(n)]})})]})]})]})};n(20);var h=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{style:{color:"rgb(117, 115, 250)"},children:"EXPENSES TRACKER"})})},O=s.a.createContext();var m=function(){var t=Object(c.useReducer)((function(t,e){switch(e.type){case"Add":return Object(l.a)(Object(l.a)({},t),{},{transList:[].concat(Object(o.a)(t.transList),[e.payload])});case"Remove":return Object(l.a)(Object(l.a)({},t),{},{transList:Object(o.a)(t.transList.filter((function(t){return t.id!==e.payload})))});default:return t}}),{transList:[{id:1,Activity:"PAYPAL",Amount:500},{id:3,Activity:"PS5",Amount:-500}]}),e=Object(r.a)(t,2),n=e[0],s=e[1];return Object(d.jsx)(O.Provider,{value:{trans_item:n,trans_modify:s},children:Object(d.jsxs)("div",{className:"app-main",children:[Object(d.jsx)(h,{}),Object(d.jsx)(b,{}),Object(d.jsx)(u,{}),Object(d.jsx)(j,{})]})})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.fcc2aee8.chunk.js.map