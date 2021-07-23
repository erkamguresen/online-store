(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],{104:function(t,e,r){"use strict";r.r(e);var c=r(1),n=r(22),a=r.n(n),o=r(116),i=r(118),s=r(66),j=r(109),d=r(110),u=r(111),b=r(112),h=r(113),l=r(105),O=r(106),p=r(14),x=r(15),m=r(17),v=r(16),f=r(19),y="CHANGE_CATEGORY",g="GET_CATEGORIES_SUCCESS",C="GET_PRODUCTS_SUCCESS",N="ADD_TO_CART",k="REMOVE_FROM_CART";function w(t){return{type:N,payload:t}}function E(t){return{type:k,payload:t}}var P=r(120),S=r(121),T=r(122),_=r(107),F=r(108),A=r(12),D=r(20),U=r(27),R=r.n(U),I=r(2),q=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(x.a)(r,[{key:"removeFromCart",value:function(t){this.props.actions.removeFromCart(t),R.a.error(t.productName+" has been removed from the cart")}},{key:"renderEmpty",value:function(){return Object(I.jsx)(l.a,{children:Object(I.jsx)(O.a,{children:"Your cart is empty"})})}},{key:"renderSummary",value:function(){var t=this;return Object(I.jsxs)(P.a,{nav:!0,inNavbar:!0,children:[Object(I.jsxs)(S.a,{nav:!0,caret:!0,children:["Cart Details",Object(I.jsx)("i",{class:"fa fa-shopping-cart fs-4  text-primary ms-2"})]}),Object(I.jsxs)(T.a,{right:!0,children:[this.props.cart.map((function(e){return Object(I.jsxs)(_.a,{className:"d-flex justify-content-between",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(F.a,{color:"danger",className:"bg-danger me-2",onClick:function(){return t.removeFromCart(e.product)},children:"X"}),e.product.productName]}),Object(I.jsx)(F.a,{color:"primary",className:"bg-primary",children:e.quantity})]},e.product.id)})),Object(I.jsx)(_.a,{divider:!0}),Object(I.jsx)(_.a,{children:Object(I.jsx)(D.b,{to:"/cart",children:"Go To The Cart"})})]})]})}},{key:"render",value:function(){return Object(I.jsx)("div",{children:this.props.cart.length>0?this.renderSummary():this.renderEmpty()})}}]),r}(c.Component);var G=Object(f.b)((function(t){return{cart:t.cart}}),(function(t){return{actions:{removeFromCart:Object(A.b)(E,t)}}}))(q),M=function(t){var e=Object(c.useState)(!1),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(I.jsx)("div",{children:Object(I.jsxs)(j.a,{color:"light",light:!0,expand:"md",children:[Object(I.jsx)(d.a,{children:Object(I.jsx)(D.b,{to:"/online-store/",children:"My Web Shop"})}),Object(I.jsx)(u.a,{onClick:function(){return a(!n)}}),Object(I.jsx)(b.a,{isOpen:n,navbar:!0,className:"justify-content-end",children:Object(I.jsxs)(h.a,{className:"mr-auto",navbar:!0,children:[Object(I.jsx)(l.a,{children:Object(I.jsx)(O.a,{})}),Object(I.jsx)(G,{})]})})]})})},X=r(119),L=r(114),Y=r(115);function B(t){return{type:y,payload:t}}function J(){return function(t){return fetch("https://webhooks.mongodb-realm.com/api/client/v2.0/app/online-shop-bwkwe/service/online-shop-categories/incoming_webhook/webhook-get-categories").then((function(t){return t.json()})).then((function(e){return t({type:g,payload:e})}))}}r(46),r(64);function Q(t){return function(e){var r="https://webhooks.mongodb-realm.com/api/client/v2.0/app/online-shop-bwkwe/service/online-shop-products/incoming_webhook/webhook-get-products";return t&&(r+="?categoryId="+t),fetch(r).then((function(t){var e=t.json();return console.log(e),e})).then((function(t){return e({type:C,payload:t})}))}}var V=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(x.a)(r,[{key:"componentDidMount",value:function(){this.props.actions.getCategories()}},{key:"selectCategory",value:function(t){this.props.actions.changeCategory(t),this.props.actions.getProducts(t.id)}},{key:"render",value:function(){var t=this;return Object(I.jsxs)("div",{className:"m-1",children:[Object(I.jsx)("h3",{children:Object(I.jsx)(F.a,{className:"badge bg-warning text-dark",children:"Categories"})}),Object(I.jsx)(L.a,{children:this.props.categories.map((function(e){return Object(I.jsx)(Y.a,{active:e.id===t.props.currentCategory.id,onClick:function(){return t.selectCategory(e)},children:e.categoryName},e.id)}))})]})}}]),r}(c.Component);var H=Object(f.b)((function(t){return{currentCategory:t.currentCategory,categories:t.categoriesArray}}),(function(t){return{actions:{getCategories:Object(A.b)(J,t),changeCategory:Object(A.b)(B,t),getProducts:Object(A.b)(Q,t)}}}))(V),W=r(117),z=r(61),K=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){var t;Object(p.a)(this,r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).addToCart=function(e){t.props.actions.addToCart({quantity:1,product:e}),R.a.success(e.productName+" has been added to cart")},t}return Object(x.a)(r,[{key:"componentDidMount",value:function(){this.props.actions.getProducts()}},{key:"render",value:function(){var t=this;return Object(I.jsxs)(o.a,{className:"m-1 ",children:[Object(I.jsxs)("h3",{children:[Object(I.jsx)(F.a,{color:"warning",className:"badge bg-warning text-dark me-3",children:"Products"}),Object(I.jsx)(F.a,{color:"success",className:"badge bg-success",children:this.props.currentCategory.categoryName})]}),Object(I.jsx)("div",{className:"",children:Object(I.jsxs)(W.a,{children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"#"}),Object(I.jsx)("th",{children:"Product Name"}),Object(I.jsx)("th",{children:"Unit Price"}),Object(I.jsx)("th",{children:"Quantity Per Unit"}),Object(I.jsx)("th",{children:"Units In Stock"}),Object(I.jsx)("th",{children:"Add to Cart"})]})}),Object(I.jsx)("tbody",{children:this.props.products.map((function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{scope:"row",children:e.id}),Object(I.jsx)("td",{children:Object(I.jsx)(D.b,{to:"/saveproduct/"+e.id,children:e.productName})}),Object(I.jsx)("td",{children:e.unitPrice}),Object(I.jsx)("td",{children:e.quantityPerUnit}),Object(I.jsx)("td",{children:e.unitsInStock}),Object(I.jsx)("td",{children:Object(I.jsx)(z.a,{color:"primary",onClick:function(){return t.addToCart(e)},children:"+"})})]},e.id)}))})]})})]})}}]),r}(c.Component);var Z=Object(f.b)((function(t){return{currentCategory:t.currentCategory,products:t.products}}),(function(t){return{actions:{getProducts:Object(A.b)(Q,t),addToCart:Object(A.b)(w,t)}}}))(K),$=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(x.a)(r,[{key:"render",value:function(){return Object(I.jsx)(o.a,{children:Object(I.jsxs)(i.a,{children:[Object(I.jsx)(X.a,{xs:"3",children:Object(I.jsx)(H,{})}),Object(I.jsx)(X.a,{xs:"9",children:Object(I.jsx)(Z,{})})]})})}}]),r}(c.Component),tt=r(10),et=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(x.a)(r,[{key:"removeFromCart",value:function(t){this.props.actions.removeFromCart(t),R.a.error(t.productName+" has been removed from the cart")}},{key:"render",value:function(){var t=this;return Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"Your Cart"}),Object(I.jsx)("div",{className:"",children:Object(I.jsxs)(W.a,{children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"#"}),Object(I.jsx)("th",{children:"Product Name"}),Object(I.jsx)("th",{children:"Unit Price"}),Object(I.jsx)("th",{children:"Quantity "}),Object(I.jsx)("th",{})]})}),Object(I.jsx)("tbody",{children:this.props.cart.map((function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{scope:"row",children:e.product.id}),Object(I.jsx)("td",{children:e.product.productName}),Object(I.jsx)("td",{children:e.product.unitPrice}),Object(I.jsx)("td",{children:e.quantity}),Object(I.jsx)("td",{children:Object(I.jsx)(z.a,{color:"danger",onClick:function(){return t.removeFromCart(e.product)},children:"X"})})]},e.id)}))})]})})]})}}]),r}(c.Component);var rt=Object(f.b)((function(t){return{cart:t.cart}}),(function(t){return{actions:{removeFromCart:Object(A.b)(E,t)}}}))(et),ct=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(x.a)(r,[{key:"render",value:function(){return Object(I.jsx)("div",{className:"mt-5 text-center",children:Object(I.jsx)("h2",{className:"my-5",children:"Page Not Found"})})}}]),r}(c.Component);var nt=function(){return Object(I.jsxs)(o.a,{className:"p-2",children:[Object(I.jsx)(i.a,{className:"m-1",children:Object(I.jsx)(M,{})}),Object(I.jsx)(i.a,{className:"m-1",children:Object(I.jsxs)(tt.c,{children:[Object(I.jsx)(tt.a,{path:"/",exact:!0,component:$}),Object(I.jsx)(tt.a,{path:"/products",exact:!0,component:$}),Object(I.jsx)(tt.a,{path:"/cart",exact:!0,component:rt}),Object(I.jsx)(tt.a,{path:"/online-store/",exact:!0,component:$}),Object(I.jsx)(tt.a,{exact:!0,component:ct})]})})]})},at=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,123)).then((function(e){var r=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;r(t),c(t),n(t),a(t),o(t)}))},ot=(r(100),r(101),r(102),r(103),{currentCategory:{categoryName:"Empty"},categories:[],products:[],cart:[],savedProduct:{}});var it=r(68),st=r(67);var jt=Object(A.c)({currentCategory:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot.currentCategory,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return e.payload;default:return t}},categoriesArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot.categories,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return e.payload;default:return t}},products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot.products,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return e.payload;default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot.cart,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:var r=t.find((function(t){return t.product.id===e.payload.product.id}));if(r){var c=t.map((function(t){return t.product.id===e.payload.product.id?Object.assign({},r,{quantity:r.quantity+1}):t}));return c}return[].concat(Object(st.a)(t),[Object(it.a)({},e.payload)]);case k:var n=t.filter((function(t){return t.product.id!==e.payload.id}));return n;default:return t}}}),dt=r(65);var ut=function(){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d;return Object(A.e)(jt,t(Object(A.a)(dt.a)))}();a.a.render(Object(I.jsx)(D.a,{children:Object(I.jsx)(f.a,{store:ut,children:Object(I.jsx)(nt,{})})}),document.getElementById("root")),at()}},[[104,1,2]]]);
//# sourceMappingURL=main.14b42b78.chunk.js.map