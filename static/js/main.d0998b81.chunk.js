(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(19),s=n.n(a),o=(n(25),n(8)),u=n(9),i=n(11),l=n(10),b=(n(16),n(1)),j=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).state={value:r.props.counter.value,tags:["tag1","tag2","tag3"]},r.formatCount=function(){var t=r.props.counter.value;return 0===t?"Zero":t},r.plus=function(){r.props.counter.value},r.getClassName=function(){return 0===r.props.counter.value?"badge badge-warning m-2":"badge badge-primary m-2"},r}return Object(u.a)(n,[{key:"render",value:function(){var t=this;this.state.value,this.state.tags.map((function(t){return Object(b.jsx)("li",{children:t})}));return Object(b.jsxs)("div",{className:"m-4",children:[Object(b.jsx)("h1",{className:this.getClassName(),children:this.formatCount()}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){t.props.onIncrease(t.props.counter)},children:"Increase"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){t.props.onDelete(t.props.counter.id)},children:"Delete"})]})}}]),n}(r.Component),h=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.counters,n=t.onReset,r=t.onDelete,c=t.onIncrease;return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"btn btn-success m-2",onClick:n,children:"Reset"}),e.map((function(t){return Object(b.jsx)(j,{counter:t,onDelete:r,onIncrease:c},t.id)}))]})}}]),n}(r.Component),d=n(12),p=function(t){var e=t.totalProducts;return Object(b.jsxs)("nav",{className:"navbar sticky-top navbar-light bg-light",children:[Object(b.jsx)(d.b,{to:"/counters",className:"navbar-brand",href:"#",children:"Counters"}),Object(b.jsx)("span",{class:"badge badge-secondary",children:e}),Object(b.jsx)(d.b,{to:"/about",children:"About"}),Object(b.jsx)(d.b,{to:"/shop",children:"Shop"})]})};var v=function(){return Object(b.jsx)("h1",{children:"About"})};var O=function(){return Object(b.jsx)("h1",{children:"Shop"})},f=n(2),m=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={counters:[{id:1,value:3},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},t.deleteCounter=function(e){var n=t.state.counters.filter((function(t){return t.id!==e}));t.setState({counters:n})},t.resetCounter=function(){var e=t.state.counters.map((function(t){return t.value=0,t}));t.setState({counters:e})},t.increaseValue=function(e){var n=t.state.counters,r=n.indexOf(e);n[r].value++,t.setState({counters:n})},t.getTotalProducts=function(){return t.state.counters.filter((function(t){return t.value>0})).length},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p,{totalProducts:this.getTotalProducts()}),Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{path:"/counters",exact:!0,component:h,children:Object(b.jsx)(h,{onDelete:this.deleteCounter,onReset:this.resetCounter,onIncrease:this.increaseValue,counters:this.state.counters})}),Object(b.jsx)(f.a,{path:"/about",exact:!0,component:v,children:Object(b.jsx)(v,{})}),Object(b.jsx)(f.a,{path:"/shop",exact:!0,component:O,children:Object(b.jsx)(O,{})})]})]})}}]),n}(r.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),x()}},[[35,1,2]]]);
//# sourceMappingURL=main.d0998b81.chunk.js.map