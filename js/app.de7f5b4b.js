(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],p=0,f=[];p<i.length;p++)c=i[p],a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/koshel/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"app",attrs:{id:"app"}},[n("Table")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))])])},i=[],s={name:"HelloWorld",props:{msg:String}},l=s,u=n("2877"),p=Object(u["a"])(l,c,i,!1,null,null,null);p.options.__file="HelloWorld.vue";p.exports;var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"coin-table"},[t._m(0),n("tbody",t._l(t.data,function(e){return n("tr",{key:e.id,class:"coin "+e.changed},[n("td",[t._v(t._s(e.rank))]),n("td",{staticClass:"coin-name mobile"},[t._v("\n        "+t._s(e.name)+"\n        "),n("span",[t._v(t._s(e.symbol))])]),n("td",{staticClass:"coin-price mobile"},[t._v(t._s(t._f("us")(e.priceUsd)))]),n("td",[t._v("$"+t._s(t._f("shorten")(e.marketCapUsd)))]),n("td",[t._v("$"+t._s(t._f("shorten")(e.volumeUsd24Hr)))]),n("td",{staticClass:"tablet",style:{color:t.calcPercentColor(e.changePercent24Hr)}},[t._v(t._s(t._f("percent")(e.changePercent24Hr))+"%")])])}))])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Rank")]),n("th",{staticClass:"mobile"},[t._v("Name")]),n("th",{staticClass:"mobile"},[t._v("Price")]),n("th",[t._v("Market Cap")]),n("th",[t._v("Volume (24Hr)")]),n("th",{staticClass:"tablet"},[t._v("Change (24Hr)")])])])}],h=(n("456d"),n("ac6a"),{data:function(){return{data:[]}},mounted:function(){var t=this;fetch("https://api.coincap.io/v2/assets?limit=15").then(function(t){return t.json()}).then(function(e){t.data=e.data,t.$watchCoins({onChange:t.changeCoins,coins:e.data.map(function(t){return t.id})})})},methods:{calcPercentColor:function(t){return t>0?"#46bb46":"#ed3a3a"},changeCoins:function(t){var e=this;Object.keys(t).forEach(function(n){e.data.forEach(function(e){e.id===n&&(e.priceUsd<t[n]?e.changed="up":e.changed="down",e.priceUsd=t[n])})})}},filters:{int:function(t){return parseInt(t)},us:function(t){var e=0;return t<1&&(e=8),new Intl.NumberFormat("en-EN",{style:"currency",currency:"USD",minimumFractionDigits:e}).format(t)},percent:function(t){return parseFloat(t).toFixed(2)},shorten:function(t){var e=parseFloat(t);return e<1e3?parseInt(e):e<1e6?"".concat(parseFloat(e/1e3).toFixed(2),"t"):e<1e9?"".concat(parseFloat(e/1e6).toFixed(2),"m"):"".concat(parseFloat(e/1e9).toFixed(2),"b")}}}),v=h,_=Object(u["a"])(v,f,d,!1,null,null,null);_.options.__file="Table.vue";var b=_.exports,m={name:"app",components:{Table:b}},g=m,y=Object(u["a"])(g,a,o,!1,null,null,null);y.options.__file="App.vue";var C=y.exports,w=(n("f27b"),{install:function(t){t.prototype.$watchCoins=function(t){var e=t.onChange,n=t.coins,r=n.join(","),a=j(r);a.onmessage=function(t){e(JSON.parse(t.data))}}}});function j(t){return new WebSocket("wss://ws.coincap.io/prices?assets=".concat(t))}r["a"].config.productionTip=!1,r["a"].use(w),new r["a"]({render:function(t){return t(C)}}).$mount("#app")},f27b:function(t,e,n){}});
//# sourceMappingURL=app.de7f5b4b.js.map