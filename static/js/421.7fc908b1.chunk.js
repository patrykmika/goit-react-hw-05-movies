"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[421],{421:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(689),a=n(982),c=n(885),u=n(791),i=n(442),o=n(786),s=n(184),p=function(){var t=function(t){var e=(0,u.useState)(null),n=(0,c.Z)(e,2),r=n[0],o=n[1];return(0,u.useEffect)((function(){t&&(0,i.d5)(t).then((function(t){o((0,a.Z)(t))}))}),[t]),{cast:r}}((0,r.UO)().movieId),e=t.cast;return e?(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:e.map((function(t){return(0,s.jsxs)("li",{children:[null===t.profile_path?(0,s.jsx)("p",{style:{fontSize:"80px",margin:"0"},children:"\u2754"}):(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:"".concat(t.name),width:"90"}),(0,s.jsx)("p",{children:t.name}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}):(0,s.jsx)(o.a,{})}},442:function(t,e,n){n.d(e,{Bt:function(){return d},DD:function(){return p},d5:function(){return f},k1:function(){return o},on:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(44),i="18cc3ec683925dedb66d3e6092890eaa",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=421.7fc908b1.chunk.js.map