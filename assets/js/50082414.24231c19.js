"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3585],{61229:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"cat/update","title":"Update Token Information","description":"This endpoint allows CAT creators and authorized parties to update metadata for their Chia Asset Tokens (CATs). Maintain accurate and up-to-date token information including name, symbol, description, and branding assets. The endpoint requires cryptographic proof of ownership through Chia wallet signatures to ensure secure and authenticated updates.","source":"@site/api/cat/update.md","sourceDirName":"cat","slug":"/cat/update","permalink":"/api/cat/update","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"apiSidebar","previous":{"title":"Get Token Activities","permalink":"/api/cat/activity"},"next":{"title":"Get NFT Information","permalink":"/api/nft/info"}}');var i=n(74848),d=n(28453),r=n(65537),a=n(79329),c=n(58069);n(5347);const l={sidebar_position:6},o="Update Token Information",h={},p=[{value:"Endpoint",id:"endpoint",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Request Examples",id:"request-examples",level:3},{value:"Response Schema",id:"response-schema",level:3},{value:"Data Object",id:"data-object",level:4},{value:"Example Response",id:"example-response",level:3},{value:"Error Responses",id:"error-responses",level:3},{value:"Important Notes",id:"important-notes",level:3}];function j(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"update-token-information",children:"Update Token Information"})}),"\n",(0,i.jsx)(s.p,{children:"This endpoint allows CAT creators and authorized parties to update metadata for their Chia Asset Tokens (CATs). Maintain accurate and up-to-date token information including name, symbol, description, and branding assets. The endpoint requires cryptographic proof of ownership through Chia wallet signatures to ensure secure and authenticated updates."}),"\n",(0,i.jsx)(s.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(a.A,{value:"mainnet",label:"Mainnet",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"POST https://api.spacescan.io/cat/info/updatecat\n"})})}),(0,i.jsx)(a.A,{value:"testnet",label:"Testnet",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"POST https://api-testnet11.spacescan.io/cat/info/updatecat\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"request-body",children:"Request Body"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "pubkey": "a9cbfe25bf5cb4f94d948575a9c0b9792d0ee6086cdc339665555c5559f7b499535d2e4f021d19d752ebd254ac0b46ec",\n  "signature": "83e88836cc456901c01fd5f382ea8405650471a95e9743821f53b483e3e7ae42b5821ad65d5df081fcba5f695f5c4054021a20de22d09c79497fe093ed3ddf04eabfc24dc0ecd97f11a44e8672190616dafeabb2624eb1ee2e4a5cc98bea070f",\n  "signing_mode": "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002_",\n  "message": "Confirm Sign in to import Tokens from spacescan.io",\n  "address": "xch18fs0vesvarufn82f7nr0lvvtxcha5mmyaj39pdcpftas898k6juse2z5rq",\n  "asset_id": "0172b814964c80a5c9f58f955f7f54b6f80dada38645f0835450daad4adfe041",\n  "asset_name": "Space Test CAT",\n  "description": "tes1t",\n  "cat_symbol": "SPACE",\n  "image_url": "https://spacescan.io/images/spacescan-logo-192.png",\n  "image_data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="\n}\n'})}),"\n",(0,i.jsx)(s.admonition,{title:"Base 64 Image Data",type:"info",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"image_data"})," field is optional and can be used to directly provide the image data in base64 format instead of using the ",(0,i.jsx)(s.code,{children:"image_url"})," field."]})}),"\n",(0,i.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"pubkey"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Public key used for signing"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"signature"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"BLS signature of the message"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"signing_mode"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsxs)(s.td,{children:["Signature scheme (BLS",(0,i.jsxs)(s.em,{children:["SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG",":CHIP-0002"]}),")"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"message"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:'Message that was signed ("Confirm Sign in to import Tokens from spacescan.io")'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"EVE coin puzzle hash/minter address"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"asset_id"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"The unique identifier (TAIL hash) of the CAT"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"asset_name"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Name for the CAT"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"description"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Description for the CAT"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"cat_symbol"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Trading symbol for the CAT"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"image_url"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"URL for the CAT's logo/image"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"image_data"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Base64 encoded image data"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"issuance_type"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Type of issuance"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"tags"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Category tags for the CAT"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"multiplier"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Token multiplier"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"clvm"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"CLVM code"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lisp"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"LISP code"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"extra"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Additional information"})]})]})]}),"\n",(0,i.jsx)(s.admonition,{title:"Free API",type:"info",children:(0,i.jsxs)(s.p,{children:["Use ",(0,i.jsx)(s.code,{children:"api.spacescan.io"})," for free tier access. See our ",(0,i.jsx)(s.a,{href:"https://spacescan.io/apis#plans",children:"API Plans"})," for rate limits and features."]})}),"\n",(0,i.jsxs)(s.admonition,{title:"Pro API",type:"tip",children:[(0,i.jsxs)(s.p,{children:["Use ",(0,i.jsx)(s.code,{children:"pro-api.spacescan.io"})," with your API key in the ",(0,i.jsx)(s.code,{children:"x-api-key"})," header. See our ",(0,i.jsx)(s.a,{href:"https://spacescan.io/apis#plans",children:"API Plans"})," for details."]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'curl -X POST "https://pro-api.spacescan.io/cat/info/updatecat" \\\n     -H "x-api-key: YOUR_API_KEY" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"asset_id": "YOUR_ASSET_ID", ...}\'\n'})})]}),"\n",(0,i.jsx)(s.h3,{id:"request-examples",children:"Request Examples"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(a.A,{value:"curl",label:"cURL",children:(0,i.jsx)(c.A,{language:"bash",children:(0,i.jsxs)(s.p,{children:['curl -X POST "',(0,i.jsx)(s.a,{href:"https://api.spacescan.io/cat/info/updatecat",children:"https://api.spacescan.io/cat/info/updatecat"}),'" ',(0,i.jsx)(s.br,{}),"\n",'-H "Content-Type: application/json" ',(0,i.jsx)(s.br,{}),"\n",'-d  {\n"pubkey": "YOUR_PUBLIC_KEY",\n"signature": "YOUR_SIGNATURE",\n"signing_mode": "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002_",\n"message": "Confirm Sign in to import Tokens from spacescan.io",\n"address": "YOUR_ADDRESS",\n"asset_id": "YOUR_ASSET_ID",\n"asset_name": "Your CAT Name",\n"cat_symbol": "SYMBOL",\n"description": "Your description"\n}']})})}),(0,i.jsx)(a.A,{value:"python",label:"Python",children:(0,i.jsxs)(c.A,{language:"python",children:[(0,i.jsx)(s.p,{children:"import requests\nimport json"}),(0,i.jsxs)(s.p,{children:['url = "',(0,i.jsx)(s.a,{href:"https://api.spacescan.io/cat/info/updatecat",children:"https://api.spacescan.io/cat/info/updatecat"}),'"']}),(0,i.jsx)(s.p,{children:'data =  {\n"pubkey": "YOUR_PUBLIC_KEY",\n"signature": "YOUR_SIGNATURE",\n"signing_mode": "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002_",\n"message": "Confirm Sign in to import Tokens from spacescan.io",\n"address": "YOUR_ADDRESS",\n"asset_id": "YOUR_ASSET_ID",\n"asset_name": "Your CAT Name",\n"cat_symbol": "SYMBOL",\n"description": "Your description"\n}\nresponse = requests.post(url, json=data)\nprint(response.json())'})]})}),(0,i.jsx)(a.A,{value:"javascript",label:"JavaScript",children:(0,i.jsxs)(c.A,{language:"javascript",children:[(0,i.jsxs)(s.p,{children:['const url = "',(0,i.jsx)(s.a,{href:"https://api.spacescan.io/cat/info/updatecat",children:"https://api.spacescan.io/cat/info/updatecat"}),'";']}),(0,i.jsx)(s.p,{children:'const data =  {\n"pubkey": "YOUR_PUBLIC_KEY",\n"signature": "YOUR_SIGNATURE",\n"signing_mode": "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002_",\n"message": "Confirm Sign in to import Tokens from spacescan.io",\n"address": "YOUR_ADDRESS",\n"asset_id": "YOUR_ASSET_ID",\n"asset_name": "Your CAT Name",\n"cat_symbol": "SYMBOL",\n"description": "Your description"\n}'}),(0,i.jsx)(s.p,{children:"fetch(url, {\nmethod: 'POST',\nheaders: {'Content-Type': 'application/json'},\nbody: JSON.stringify(data)\n})\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error('Error:', error));"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"status"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"The status of the API request"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"data"}),(0,i.jsx)(s.td,{children:"object"}),(0,i.jsx)(s.td,{children:"Response data object"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"data-object",children:"Data Object"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"claimed"}),(0,i.jsx)(s.td,{children:"boolean"}),(0,i.jsx)(s.td,{children:"Whether the update was successful"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"message"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Additional information about the update (if any)"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"example-response",children:"Example Response"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "status": "success",\n  "data": {\n    "claimed": true\n  }\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"error-responses",children:"Error Responses"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"HTTP Status Code"}),(0,i.jsx)(s.th,{children:"Meaning"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"400"}),(0,i.jsx)(s.td,{children:"Bad Request -- Invalid parameters"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"429"}),(0,i.jsx)(s.td,{children:"Too Many Requests -- Rate limit exceeded"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"500"}),(0,i.jsx)(s.td,{children:"Internal Server Error"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"503"}),(0,i.jsx)(s.td,{children:"Service Unavailable"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"important-notes",children:"Important Notes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The signature must be generated using the Chia wallet"}),"\n",(0,i.jsx)(s.li,{children:"The address must match the EVE coin puzzle hash or minter address of the CAT"}),"\n",(0,i.jsx)(s.li,{children:'The message must be exactly "Confirm Sign in to import Tokens from spacescan.io"'}),"\n",(0,i.jsx)(s.li,{children:"Image URLs should be publicly accessible and contain appropriate image formats (PNG, JPG, etc.)"}),"\n",(0,i.jsx)(s.li,{children:"Base64 image data can be provided instead of image URL"}),"\n",(0,i.jsx)(s.li,{children:"Updates are limited to 5 times per CAT owner"}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},5347:(e,s,n)=>{n.d(s,{A:()=>r});var t=n(96540),i=n(86850),d=n(74848);const r=function(e){let{endpoint:s}=e;const[n,r]=(0,t.useState)(null),[a,c]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{(async()=>{if(!a&&!n){c(!0);try{const e=await fetch(s),n=await e.json();r(JSON.stringify(n,null,2))}catch(e){r(`Error: ${e.message}`)}finally{c(!1)}}})()}),[]),(0,d.jsx)("div",{children:a?(0,d.jsx)("p",{children:"Loading API response..."}):n?(0,d.jsxs)(i.Q,{code:n,children:[(0,d.jsx)(i.w,{}),(0,d.jsx)(i.p1,{}),(0,d.jsx)(i.pA,{})]}):(0,d.jsx)("p",{children:"Failed to load API response. Please try again later."})})}}}]);