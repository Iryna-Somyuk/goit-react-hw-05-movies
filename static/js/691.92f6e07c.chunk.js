"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{9729:function(n,e,r){r.d(e,{Df:function(){return l},L2:function(){return p},fh:function(){return d},fk:function(){return f},q5:function(){return x},yo:function(){return h}});var t=r(5861),a=r(4687),o=r.n(a),i=r(1912),c=r(9014),s="https://api.themoviedb.org/3/",u="e146a7a5146c0f8a3c3cd99167c5b659",p="https://image.tmdb.org/t/p/w300",l=function(){var n=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"trending/movie/day?"),{params:{api_key:u,page:1}});case 3:if(e=n.sent){n.next=6;break}throw new Error;case 6:return n.abrupt("return",e.data.results);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),c.ZP.error("We're sorry, something's wrong. Please try again later!");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"search/movie?"),{params:{api_key:u,language:"en-uk",query:"".concat(e),page:1,include_adult:!1}});case 3:if(r=n.sent){n.next=6;break}throw new Error;case 6:return n.abrupt("return",r.data.results);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),c.ZP.error("We're sorry, something's wrong. Please try again later!");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(e,"?"),{params:{api_key:u,language:"en-US"}});case 3:if(r=n.sent,console.log(r.data),r){n.next=7;break}throw new Error;case 7:return n.abrupt("return",r.data);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0),c.ZP.error("We're sorry, something's wrong. Please try again later!");case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(e,"/credits?"),{params:{api_key:u,language:"en-US"}});case 3:if(r=n.sent){n.next=6;break}throw new Error;case 6:return n.abrupt("return",r.data.cast);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),c.ZP.error("We're sorry, something's wrong. Please try again later!");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(e,"/reviews?"),{params:{language:"en-US",api_key:u}});case 3:if(r=n.sent){n.next=6;break}throw new Error;case 6:return n.abrupt("return",r.data.results);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),c.ZP.error("We're sorry, something's wrong. Please try again later!");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},854:function(n,e,r){r.d(e,{a:function(){return o}});var t=r(8593),a=r(184),o=function(){return(0,a.jsx)(t.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},4672:function(n,e,r){r.d(e,{O:function(){return m}});var t,a,o,i,c=r(1087),s=r(7689),u=r(9729),p=r(168),l=r(3237),f=l.Z.ul(t||(t=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 16px;\n  \n"]))),d=l.Z.li(a||(a=(0,p.Z)(["\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),h=l.Z.img(o||(o=(0,p.Z)(["\n  border-radius: 4px;\n"]))),x=l.Z.h2(i||(i=(0,p.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  font-size: 25px;\n  &:hover {\n    color: orange;\n  }\n"]))),g=r(184),m=function(n){var e=n.movies,r=(0,s.TH)();return(0,g.jsx)(f,{children:e.map((function(n){return(0,g.jsx)(d,{children:(0,g.jsxs)(c.OL,{to:"/movies/".concat(n.id),state:{from:r},children:[(0,g.jsx)(h,{src:u.L2+n.poster_path,alt:""}),(0,g.jsx)(x,{children:n.title})]})},n.id)}))})}},4691:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t,a,o,i,c=r(9439),s=r(1087),u=r(2791),p=r(9729),l=r(4672),f=r(854),d=r(9e3),h=r(168),x=r(3237),g=x.Z.div(t||(t=(0,h.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 10px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=x.Z.form(a||(a=(0,h.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }"]))),v=x.Z.button(o||(o=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),b=x.Z.input(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  border-radius: 5px 0 0 5px;\n  border-color: #3a8095;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=r(9014),w=r(184),Z=function(){var n=(0,u.useState)(""),e=(0,c.Z)(n,2),r=e[0],t=e[1],a=(0,u.useState)(!1),o=(0,c.Z)(a,2),i=o[0],h=o[1],x=(0,s.lr)(),Z=(0,c.Z)(x,2),k=Z[0],j=Z[1],P=(0,u.useState)([]),_=(0,c.Z)(P,2),S=_[0],q=_[1];(0,u.useEffect)((function(){var n=k.get("query");n&&(0,p.fk)(n).then(q).finally((function(){h(!1),t(n)}))}),[k]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{children:(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault(),r?(h(!0),j({query:r})):y.ZP.error("Sorry, there are no images matching your search query. Please enter something!",{duration:4e3})},children:[(0,w.jsx)(b,{type:"text",name:"query",autoComplete:"off",placeholder:"Search...",value:r,onChange:function(n){t(n.target.value)}}),(0,w.jsx)(v,{type:"submit",children:(0,w.jsx)(d.Vph,{size:40})})]})}),i&&(0,w.jsx)(f.a,{}),(0,w.jsx)(l.O,{movies:S}),(0,w.jsx)(y.x7,{position:"top-center",reverseOrder:!0})]})}}}]);
//# sourceMappingURL=691.92f6e07c.chunk.js.map