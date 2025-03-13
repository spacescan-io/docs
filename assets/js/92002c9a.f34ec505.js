"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4777],{44215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"data_layer","title":"Data Layer","description":"Get data layer info","source":"@site/api/data_layer.md","sourceDirName":".","slug":"/data_layer","permalink":"/api/data_layer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"apiSidebar","previous":{"title":"Get Coin ID","permalink":"/api/tools/get_coin_id"},"next":{"title":"Mempool","permalink":"/api/mempool"}}');var n=a(74848),s=a(28453),l=a(65537),o=a(79329),i=a(58069);const u={sidebar_position:9},c="Data Layer",d={},h=[{value:"Get data layer info",id:"get-data-layer-info",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"data-layer",children:"Data Layer"})}),"\n",(0,n.jsx)(t.h2,{id:"get-data-layer-info",children:"Get data layer info"}),"\n",(0,n.jsx)(t.p,{children:"Retrieves data store mirror based on data store id"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://api.spacescan.io/datalayer/mirror\n    ?authkey=your_auth_key\n    &store_id=\n"})}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"Request",label:"Request",default:!0,children:(0,n.jsxs)("table",{border:"0",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{colspan:"10",children:"Params"}),(0,n.jsx)("th",{children:"Details"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{colspan:"10",children:"store_id"}),(0,n.jsx)("td",{children:"Data store ids"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{colspan:"10",children:"network"}),(0,n.jsxs)("td",{children:["Its optional ",(0,n.jsx)("br",{}),"\nPossible values:\nmainnet|testnet10"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{colspan:"10",children:"Version"}),(0,n.jsxs)("td",{children:["Its optional ",(0,n.jsx)("br",{}),"\nDefaults to 1"]})]})]})}),(0,n.jsx)(o.A,{value:"Response",label:"Response",children:(0,n.jsx)(i.A,{language:"jsx",children:'{\n  "status": "SUCCESS"\n}'})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},79329:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:a,children:t})}},65537:(e,t,a)=>{a.d(t,{A:()=>w});var r=a(96540),n=a(34164),s=a(65627),l=a(56347),o=a(50372),i=a(30604),u=a(11861),c=a(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=b({queryString:a,groupId:n}),[f,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),v=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function y(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),n=o[a].value;n!==r&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(t))}}}]);