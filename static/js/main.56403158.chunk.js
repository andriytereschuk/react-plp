(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),u=n(2),l=n(3),i=n(7),m={value:0},s=Object(u.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;switch((arguments.length>1?arguments[1]:void 0).type){case"ADD_TO_CART":return Object(i.a)({},e,{value:++e.value});case"REMOVE_FROM_CART":return Object(i.a)({},e,{value:e.value?--e.value:0});default:return e}}}),v=(n(27),n(13)),d=n(14),b=n(16),f=n(15),O=n(17),E=Object(l.b)(function(e){return{counter:e.counter.value}})(function(e){return r.a.createElement("div",{className:"Counter"},e.counter)}),h=function(e){return r.a.createElement("header",null,r.a.createElement(E,null))},p=Object(l.b)(function(){return{}},function(e){return{addToCart:function(){e({type:"ADD_TO_CART"})},removeFromCart:function(){e({type:"REMOVE_FROM_CART"})}}})(function(e){var t=e.addToCart,n=e.removeFromCart;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t},"add to cart"),r.a.createElement("button",{onClick:n},"remove from cart"))}),w=function(e){function t(){return Object(v.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(p,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=Object(u.c)(s);c.a.render(r.a.createElement(l.a,{store:C},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.56403158.chunk.js.map