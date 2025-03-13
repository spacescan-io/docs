"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[260],{32368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"mempool","title":"Mempool","description":"Get min fees","source":"@site/api/mempool.md","sourceDirName":".","slug":"/mempool","permalink":"/api/mempool","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"apiSidebar","previous":{"title":"Data Layer","permalink":"/api/data_layer"},"next":{"title":"Coin Information","permalink":"/api/coins"}}');var a=r(74848),s=r(28453),l=r(65537),o=r(79329),i=r(58069);const u={sidebar_position:8},c="Mempool",d={},p=[{value:"Get min fees",id:"get-min-fees",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"mempool",children:"Mempool"})}),"\n",(0,a.jsx)(t.h2,{id:"get-min-fees",children:"Get min fees"}),"\n",(0,a.jsx)(t.p,{children:"Retrieve min fees needed to push standard transaction into next block"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"https://api.spacescan.io/mempool/minfee\n    ?authkey=your_auth_key\n"})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(o.A,{value:"Request",label:"Request",default:!0,children:(0,a.jsxs)("table",{border:"0",children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{colspan:"10",children:"Params"}),(0,a.jsx)("th",{children:"Details"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{colspan:"10",children:"network"}),(0,a.jsxs)("td",{children:["Its optional ",(0,a.jsx)("br",{}),"\nPossible values:\nmainnet|testnet10"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{colspan:"10",children:"Version"}),(0,a.jsxs)("td",{children:["Its optional ",(0,a.jsx)("br",{}),"\nDefaults to 1"]})]})]})}),(0,a.jsx)(o.A,{value:"Response",label:"Response",children:(0,a.jsx)(i.A,{language:"jsx",children:'{\n  "status": "SUCCESS"\n}'})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},79329:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},65537:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),s=r(65627),l=r(56347),o=r(50372),i=r(30604),u=r(11861),c=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==n&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}}}]);