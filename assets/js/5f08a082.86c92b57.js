"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7179],{92088:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tools/convert_from_address","title":"Convert From Address","description":"This endpoint allows you to convert a Chia address to a puzzle hash.","source":"@site/api/tools/convert_from_address.md","sourceDirName":"tools","slug":"/tools/convert_from_address","permalink":"/api/tools/convert_from_address","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"apiSidebar","previous":{"title":"Convert To Address","permalink":"/api/tools/convert_to_address"},"next":{"title":"Convert To NFT ID","permalink":"/api/tools/convert_to_nft"}}');var t=r(74848),a=r(28453),d=r(65537),l=r(79329);r(58069),r(5347);const i={sidebar_position:2},c="Convert From Address",o={},h=[{value:"Endpoint",id:"endpoint",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Live API Test",id:"live-api-test",level:3},{value:"Request Examples",id:"request-examples",level:3},{value:"Response Schema",id:"response-schema",level:3},{value:"Example Response",id:"example-response",level:3},{value:"Error Responses",id:"error-responses",level:3}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"convert-from-address",children:"Convert From Address"})}),"\n",(0,t.jsx)(s.p,{children:"This endpoint allows you to convert a Chia address to a puzzle hash."}),"\n",(0,t.jsx)(s.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(l.A,{value:"mainnet",label:"Mainnet",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"GET https://api.spacescan.io/tools/convert_from_address/{address}\n"})})}),(0,t.jsx)(l.A,{value:"testnet",label:"Testnet",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"GET https://api-testnet11.spacescan.io/tools/convert_from_address/{address}\n"})})})]}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"address"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"}),(0,t.jsx)(s.td,{children:"Chia address starting with 'xch'"})]})})]}),"\n",(0,t.jsx)(s.admonition,{title:"Free API",type:"info",children:(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"api.spacescan.io"})," for free tier access. See our ",(0,t.jsx)(s.a,{href:"https://spacescan.io/apis#plans",children:"API Plans"})," for rate limits and features."]})}),"\n",(0,t.jsxs)(s.admonition,{title:"Pro API",type:"tip",children:[(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"pro-api.spacescan.io"})," with your API key in the ",(0,t.jsx)(s.code,{children:"x-api-key"})," header. See our ",(0,t.jsx)(s.a,{href:"https://spacescan.io/apis#plans",children:"API Plans"})," for details."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl -X GET "https://pro-api.spacescan.io/tools/convert_from_address/xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45" \\\n     -H "x-api-key: YOUR_API_KEY"\n'})})]}),"\n",(0,t.jsx)(s.h3,{id:"live-api-test",children:"Live API Test"}),"\n",(0,t.jsx)(d.A,{children:(0,t.jsx)(l.A,{value:"mainnet",label:"Mainnet",children:(0,t.jsx)("a",{href:"https://api.spacescan.io/tools/convert_from_address/xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45",target:"_blank",rel:"noopener noreferrer",className:"api-test-button",children:(0,t.jsx)(s.p,{children:"\ud83d\ude80 Test API in Browser"})})})}),"\n",(0,t.jsx)(s.h3,{id:"request-examples",children:"Request Examples"}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(l.A,{value:"curl",label:"cURL",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl -X GET "https://api.spacescan.io/tools/convert_from_address/xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45"\n'})})}),(0,t.jsx)(l.A,{value:"python",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import requests\n\naddress = "xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45"\nurl = f"https://api.spacescan.io/tools/convert_from_address/{address}"\n\nresponse = requests.get(url)\ndata = response.json()\nprint(data)\n'})})}),(0,t.jsx)(l.A,{value:"javascript",label:"JavaScript",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"const address = \"xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45\";\nconst url = `https://api.spacescan.io/tools/convert_from_address/${address}`;\n\nfetch(url)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n"})})})]}),"\n",(0,t.jsx)(s.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"status"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Status of the request (success/failure)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"data"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"The converted puzzle hash"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"example-response",children:"Example Response"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "status": "success",\n  "data": "0x899f69388576188963432fad74488cfcb24fc5f4a92bb39d38aca2930e2fe6bb"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"error-responses",children:"Error Responses"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"HTTP Status Code"}),(0,t.jsx)(s.th,{children:"Meaning"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"400"}),(0,t.jsx)(s.td,{children:"Bad Request -- Invalid address format"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"429"}),(0,t.jsx)(s.td,{children:"Too Many Requests -- You're requesting too many times"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"500"}),(0,t.jsx)(s.td,{children:"Internal Server Error -- We had a problem with our server"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"503"}),(0,t.jsx)(s.td,{children:"Service Unavailable -- We're temporarily offline for maintenance"})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},5347:(e,s,r)=>{r.d(s,{A:()=>d});var n=r(96540),t=r(86850),a=r(74848);const d=function(e){let{endpoint:s}=e;const[r,d]=(0,n.useState)(null),[l,i]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{(async()=>{if(!l&&!r){i(!0);try{const e=await fetch(s),r=await e.json();d(JSON.stringify(r,null,2))}catch(e){d(`Error: ${e.message}`)}finally{i(!1)}}})()}),[]),(0,a.jsx)("div",{children:l?(0,a.jsx)("p",{children:"Loading API response..."}):r?(0,a.jsxs)(t.Q,{code:r,children:[(0,a.jsx)(t.w,{}),(0,a.jsx)(t.p1,{}),(0,a.jsx)(t.pA,{})]}):(0,a.jsx)("p",{children:"Failed to load API response. Please try again later."})})}}}]);