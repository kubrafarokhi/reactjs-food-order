(this["webpackJsonpreact-food-order"]=this["webpackJsonpreact-food-order"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),o=n.n(r),s=n(0),l=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(8),u=n.n(m),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(d).items,m=o.reduce((function(e,t){return e+t.amount}),0),j="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(s.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(s.jsx)("span",{className:u.a.icon,children:Object(s.jsx)(l,{})}),Object(s.jsx)("span",{children:"Your Cart"}),Object(s.jsx)("span",{className:u.a.badge,children:m})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(13),x=n.n(O),p=function(e){return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsxs)("header",{className:x.a.header,children:[Object(s.jsx)("h1",{children:"ReactMeals"}),Object(s.jsx)(j,{onClick:e.onShowCart})]}),Object(s.jsx)("div",{className:x.a["main-image"],children:Object(s.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(15),f=n.n(h),_=function(){return Object(s.jsxs)("section",{className:f.a.summary,children:[Object(s.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(s.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(s.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),N=function(e){return Object(s.jsx)("div",{className:C.a.card,children:e.children})},g=n(2),A=n(17),y=n.n(A),I=o.a.forwardRef((function(e,t){return Object(s.jsxs)("div",{className:y.a.input,children:[Object(s.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(s.jsx)("input",Object(g.a)({ref:t},e.input))]})})),w=n(18),M=n.n(w),k=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(s.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(s.jsx)(I,{ref:o,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(s.jsx)("button",{children:"+ Add"}),!a&&Object(s.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},F=n(10),H=n.n(F),S=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(s.jsxs)("li",{className:H.a.meal,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("div",{className:H.a.description,children:e.description}),Object(s.jsx)("div",{className:H.a.price,children:n})]}),Object(s.jsx)("div",{children:Object(s.jsx)(k,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=n(19),D=n.n(B),E=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],R=function(){var e=E.map((function(e){return Object(s.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(s.jsx)("section",{className:D.a.meals,children:Object(s.jsx)(N,{children:Object(s.jsx)("ul",{children:e})})})},T=function(){return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(R,{})]})},P=n(14),z={items:[],totalAmount:0},U=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(g.a)(Object(g.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(P.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],d=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(g.a)(Object(g.a)({},l),{},{amount:l.amount-1});(o=Object(P.a)(e.items))[s]=m}return{items:o,totalAmount:d}}return z},V=function(e){var t=Object(r.useReducer)(U,z),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(s.jsx)(d.Provider,{value:o,children:e.children})},J=n(11),L=n.n(J),Q=function(e){return Object(s.jsx)("div",{className:L.a.backdrop,onClick:e.onClose})},Y=function(e){return Object(s.jsx)("div",{className:L.a.modal,children:Object(s.jsx)("div",{className:L.a.content,children:e.children})})},q=document.getElementById("overlays"),X=function(e){return Object(s.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(s.jsx)(Q,{onClose:e.onClose}),q),c.a.createPortal(Object(s.jsx)(Y,{children:e.children}),q)]})},Z=n(4),$=n.n(Z),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(s.jsxs)("li",{className:$.a["cart-item"],children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:e.name}),Object(s.jsxs)("div",{className:$.a.summary,children:[Object(s.jsx)("span",{className:$.a.price,children:t}),Object(s.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(s.jsxs)("div",{className:$.a.actions,children:[Object(s.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(s.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(5),W=n.n(K),ee=function(e){var t=Object(r.useContext)(d),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(g.a)(Object(g.a)({},e),{},{amount:1}))},o=Object(s.jsx)("ul",{className:W.a["cart-items"],children:t.items.map((function(e){return Object(s.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(s.jsxs)(X,{onClose:e.onClose,children:[o,Object(s.jsxs)("div",{className:W.a.total,children:[Object(s.jsx)("span",{children:"Total Amount"}),Object(s.jsx)("span",{children:n})]}),Object(s.jsxs)("div",{className:W.a.actions,children:[Object(s.jsx)("button",{className:W.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(s.jsx)("button",{className:W.a.button,children:"Order"})]})]})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(V,{children:[n&&Object(s.jsx)(ee,{onClose:function(){a(!1)}}),Object(s.jsx)(p,{onShowCart:function(){a(!0)}}),Object(s.jsx)("main",{children:Object(s.jsx)(T,{})})]})};c.a.render(Object(s.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.02c39c72.chunk.js.map