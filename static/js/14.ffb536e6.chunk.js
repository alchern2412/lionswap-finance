(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{1147:function(e,n,t){"use strict";t.r(n);t(0);var i,c,r,s,a,l,o,d,j=t(3),b=t(209),x=t.n(b),u=t(31),p=t(183),m=t(20),h=t(17),O=t(8),f=t(106),g=t(2),v=O.e.div(i||(i=Object(h.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=O.e.div(c||(c=Object(h.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),S=O.e.div(r||(r=Object(h.a)(["\n  flex: 1;\n"]))),w=O.e.img(s||(s=Object(h.a)(["\n  border-radius: 50%;\n"]))),F=Object(O.e)(j.S).attrs({as:"h3"})(a||(a=Object(h.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=O.e.div(l||(l=Object(h.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),w,(function(e){return e.theme.mediaQueries.md})),z=O.e.div(o||(o=Object(h.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),w),P=Object(O.e)(j.u)(d||(d=Object(h.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),R=function(e){var n=e.rank,t=e.team,i=Object(m.b)().t,c=Object(g.jsx)(w,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsxs)(P,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(j.Pb,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(S,{children:[Object(g.jsxs)(j.R,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(k,{children:c}),Object(g.jsx)(F,{children:t.name})]}),Object(g.jsx)(j.Pb,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:t.description}),Object(g.jsxs)(j.R,{children:[Object(g.jsxs)(j.R,{children:[Object(g.jsx)(j.Ab,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.Pb,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.R,{ml:"24px",children:[Object(g.jsx)(j.L,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.Pb,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.q,{as:f.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",scale:"sm",children:i("See More")}),Object(g.jsx)(z,{children:c})]})]})},D=t(924);n.default=function(){var e=Object(m.b)().t,n=Object(u.J)(),t=n.teams,i=n.isLoading,c=Object.values(t),r=x()(c,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(p.a,{children:[Object(g.jsx)(D.a,{}),Object(g.jsxs)(j.R,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.S,{scale:"xl",children:e("Teams")}),i&&Object(g.jsx)(j.g,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(R,{rank:n+1,team:e},e.id)}))]})}},894:function(e,n,t){"use strict";var i,c=t(17),r=t(8).e.div(i||(i=Object(c.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=r},924:function(e,n,t){"use strict";t(0);var i=t(3),c=t(31),r=t(20),s=t(894),a=t(106),l=t(2),o=function(){var e=Object(r.b)().t;return Object(l.jsx)(i.u,{mb:"32px",isActive:!0,children:Object(l.jsx)(i.v,{children:Object(l.jsxs)(i.R,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(i.S,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(l.jsx)(i.Pb,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(i.q,{as:a.a,to:"/profile",mt:["16px",null,0],children:e("Set up now")})]})})})};n.a=function(){var e=Object(r.b)().t,n=Object(c.H)(),t=n.isInitialized,a=n.profile,d=t&&!a;return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(o,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.S,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(l.jsx)(i.Pb,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=14.ffb536e6.chunk.js.map