"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1749],{11185:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"nft/stats","title":"Get NFT Statistics","description":"This endpoint provides global statistics about NFTs on the Chia blockchain, including collection counts, total NFTs, trade volumes, and royalty information.","source":"@site/api/nft/stats.md","sourceDirName":"nft","slug":"/nft/stats","permalink":"/api/nft/stats","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"apiSidebar","previous":{"title":"Get NFT Information","permalink":"/api/nft/info"},"next":{"title":"Get Collection Information","permalink":"/api/collection/info"}}');var r=t(74848),a=t(28453),i=t(11470),l=t(19365),c=t(21432);t(64400);const d={sidebar_position:2},o="Get NFT Statistics",h={},p=[{value:"Endpoint",id:"endpoint",level:3},{value:"Live API Test",id:"live-api-test",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3},{value:"Response Schema",id:"response-schema",level:3},{value:"Error Responses",id:"error-responses",level:3}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"get-nft-statistics",children:"Get NFT Statistics"})}),"\n",(0,r.jsx)(s.p,{children:"This endpoint provides global statistics about NFTs on the Chia blockchain, including collection counts, total NFTs, trade volumes, and royalty information."}),"\n",(0,r.jsx)(s.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"mainnet",label:"Mainnet",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"GET https://api.spacescan.io/nft/stats\n"})})}),(0,r.jsx)(l.A,{value:"testnet",label:"Testnet",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"GET https://api-testnet11.spacescan.io/nft/stats\n"})})})]}),"\n",(0,r.jsx)(s.admonition,{title:"Free API",type:"info",children:(0,r.jsxs)(s.p,{children:["Use ",(0,r.jsx)(s.code,{children:"api.spacescan.io"})," for free tier access. See our ",(0,r.jsx)(s.a,{href:"https://spacescan.io/apis#plans",children:"API Plans"})," for rate limits and features."]})}),"\n",(0,r.jsxs)(s.admonition,{title:"Pro API",type:"tip",children:[(0,r.jsxs)(s.p,{children:["Use ",(0,r.jsx)(s.code,{children:"pro-api.spacescan.io"})," with your API key in the ",(0,r.jsx)(s.code,{children:"x-api-key"})," header. See our ",(0,r.jsx)(s.a,{href:"https://spacescan.io/apis#plans",children:"API Plans"})," for details."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X GET "https://pro-api.spacescan.io/nft/stats" \\\n     -H "x-api-key: YOUR_API_KEY"\n'})})]}),"\n",(0,r.jsx)(s.h3,{id:"live-api-test",children:"Live API Test"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"mainnet",label:"Mainnet",children:(0,r.jsx)("a",{href:"https://api.spacescan.io/nft/stats",target:"_blank",rel:"noopener noreferrer",className:"api-test-button",children:(0,r.jsx)(s.p,{children:"\ud83d\ude80 Test API in Browser"})})}),(0,r.jsx)(l.A,{value:"testnet",label:"Testnet",children:(0,r.jsx)("a",{href:"https://api-testnet11.spacescan.io/nft/stats",target:"_blank",rel:"noopener noreferrer",className:"api-test-button",children:(0,r.jsx)(s.p,{children:"\ud83d\ude80 Test API in Browser"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"request-example",children:"Request Example"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"curl",label:"cURL",children:(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"mainnet",label:"Mainnet",children:(0,r.jsx)(c.A,{language:"bash",children:(0,r.jsxs)(s.p,{children:['curl -X GET "',(0,r.jsx)(s.a,{href:"https://api.spacescan.io/nft/stats",children:"https://api.spacescan.io/nft/stats"}),'"']})})}),(0,r.jsx)(l.A,{value:"testnet",label:"Testnet",children:(0,r.jsx)(c.A,{language:"bash",children:(0,r.jsxs)(s.p,{children:['curl -X GET "',(0,r.jsx)(s.a,{href:"https://api-testnet11.spacescan.io/nft/stats",children:"https://api-testnet11.spacescan.io/nft/stats"}),'"']})})})]})}),(0,r.jsx)(l.A,{value:"python",label:"Python",children:(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"mainnet",label:"Mainnet",children:(0,r.jsxs)(c.A,{language:"python",children:[(0,r.jsx)(s.p,{children:"import requests"}),(0,r.jsxs)(s.p,{children:['url = "',(0,r.jsx)(s.a,{href:"https://api.spacescan.io/nft/stats",children:"https://api.spacescan.io/nft/stats"}),'"']}),(0,r.jsx)(s.p,{children:"response = requests.get(url)\ndata = response.json()\nprint(data)"})]})}),(0,r.jsx)(l.A,{value:"testnet",label:"Testnet",children:(0,r.jsxs)(c.A,{language:"python",children:[(0,r.jsx)(s.p,{children:"import requests"}),(0,r.jsxs)(s.p,{children:['url = "',(0,r.jsx)(s.a,{href:"https://api-testnet11.spacescan.io/nft/stats",children:"https://api-testnet11.spacescan.io/nft/stats"}),'"']}),(0,r.jsx)(s.p,{children:"response = requests.get(url)\ndata = response.json()\nprint(data)"})]})})]})}),(0,r.jsx)(l.A,{value:"javascript",label:"JavaScript",children:(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"mainnet",label:"Mainnet",children:(0,r.jsxs)(c.A,{language:"javascript",children:[(0,r.jsxs)(s.p,{children:['const url = "',(0,r.jsx)(s.a,{href:"https://api.spacescan.io/nft/stats",children:"https://api.spacescan.io/nft/stats"}),'";']}),(0,r.jsx)(s.p,{children:"fetch(url)\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error('Error:', error));"})]})}),(0,r.jsx)(l.A,{value:"testnet",label:"Testnet",children:(0,r.jsxs)(c.A,{language:"javascript",children:[(0,r.jsxs)(s.p,{children:['const url = "',(0,r.jsx)(s.a,{href:"https://api-testnet11.spacescan.io/nft/stats",children:"https://api-testnet11.spacescan.io/nft/stats"}),'";']}),(0,r.jsx)(s.p,{children:"fetch(url)\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error('Error:', error));"})]})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"response-example",children:"Response Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "status": "success",\n  "data": {\n    "collections_count": 4547,\n    "nft_count": 1637021,\n    "trades_count": 104329,\n    "traded_amount_xch": 4.680786556872335e-8,\n    "royalty_amount_xch": 2.202437563733082e-9,\n    "traded_amount_fiat": 9.77022e-7,\n    "royalty_amount_fiat": 4.5972e-8\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"The status of the API request"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data"}),(0,r.jsx)(s.td,{children:"object"}),(0,r.jsx)(s.td,{children:"Object containing NFT statistics"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"collections_count"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Total number of NFT collections"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nft_count"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Total number of NFTs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"trades_count"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Total number of NFT trades"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"traded_amount_xch"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Total amount of XCH traded for NFTs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"royalty_amount_xch"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Total amount of XCH collected as royalties"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"traded_amount_fiat"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Total amount traded in fiat currency"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"royalty_amount_fiat"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Total amount of royalties in fiat currency"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"error-responses",children:"Error Responses"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"HTTP Status Code"}),(0,r.jsx)(s.th,{children:"Meaning"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"400"}),(0,r.jsx)(s.td,{children:"Bad Request -- Your request is invalid."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"429"}),(0,r.jsx)(s.td,{children:"Too Many Requests -- You're requesting too many times! Slow down!"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500"}),(0,r.jsx)(s.td,{children:"Internal Server Error -- We had a problem with our server. Try again later."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"503"}),(0,r.jsx)(s.td,{children:"Service Unavailable -- We're temporarily offline for maintenance. Please try again later."})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},64400:(e,s,t)=>{t.d(s,{A:()=>i});var n=t(96540),r=t(86850),a=t(74848);const i=function(e){let{endpoint:s}=e;const[t,i]=(0,n.useState)(null),[l,c]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{(async()=>{if(!l&&!t){c(!0);try{const e=await fetch(s),t=await e.json();i(JSON.stringify(t,null,2))}catch(e){i(`Error: ${e.message}`)}finally{c(!1)}}})()}),[]),(0,a.jsx)("div",{children:l?(0,a.jsx)("p",{children:"Loading API response..."}):t?(0,a.jsxs)(r.Q,{code:t,children:[(0,a.jsx)(r.w,{}),(0,a.jsx)(r.p1,{}),(0,a.jsx)(r.pA,{})]}):(0,a.jsx)("p",{children:"Failed to load API response. Please try again later."})})}}}]);