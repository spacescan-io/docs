"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7492],{46071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"nft/metadata","title":"Get NFT Metadata","description":"This endpoint allows you to fetch the metadata information of a specific NFT in CHIP-0007 format.","source":"@site/api/nft/metadata.md","sourceDirName":"nft","slug":"/nft/metadata","permalink":"/api/nft/metadata","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"apiSidebar","previous":{"title":"Get NFT Original Data","permalink":"/api/nft/original"},"next":{"title":"Get NFT Events History","permalink":"/api/nft/events"}}');var r=t(74848),i=t(28453),a=t(65537),d=t(79329);t(58069),t(5347);const l={sidebar_position:3},c="Get NFT Metadata",h={},o=[{value:"Endpoint",id:"endpoint",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Live API Test",id:"live-api-test",level:3},{value:"Request Examples",id:"request-examples",level:3},{value:"Response Schema",id:"response-schema",level:3},{value:"Example Response",id:"example-response",level:3},{value:"Response Headers",id:"response-headers",level:3},{value:"Error Responses",id:"error-responses",level:3},{value:"Notes",id:"notes",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"get-nft-metadata",children:"Get NFT Metadata"})}),"\n",(0,r.jsx)(n.p,{children:"This endpoint allows you to fetch the metadata information of a specific NFT in CHIP-0007 format."}),"\n",(0,r.jsx)(n.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(d.A,{value:"mainnet",label:"Mainnet",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"GET https://api.spacescan.io/nfts/{nft_id}/metadata\n"})})}),(0,r.jsx)(d.A,{value:"testnet",label:"Testnet",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"GET https://api-testnet11.spacescan.io/nfts/{nft_id}/metadata\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nft_id"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"The unique identifier of the NFT"})]})})]}),"\n",(0,r.jsx)(n.admonition,{title:"Free API",type:"info",children:(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"api.spacescan.io"})," for free tier access. See our ",(0,r.jsx)(n.a,{href:"https://spacescan.io/apis#plans",children:"API Plans"})," for rate limits and features."]})}),"\n",(0,r.jsxs)(n.admonition,{title:"Pro API",type:"tip",children:[(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"pro-api.spacescan.io"})," with your API key in the ",(0,r.jsx)(n.code,{children:"x-api-key"})," header. See our ",(0,r.jsx)(n.a,{href:"https://spacescan.io/apis#plans",children:"API Plans"})," for details."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://pro-api.spacescan.io/nfts/{nft_id}/metadata" \\\n     -H "x-api-key: YOUR_API_KEY"\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"live-api-test",children:"Live API Test"}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(d.A,{value:"mainnet",label:"Mainnet",children:(0,r.jsx)("a",{href:"https://api.spacescan.io/nfts/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7/metadata",target:"_blank",rel:"noopener noreferrer",className:"api-test-button",children:(0,r.jsx)(n.p,{children:"\ud83d\ude80 Test API in Browser"})})})}),"\n",(0,r.jsx)(n.h3,{id:"request-examples",children:"Request Examples"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(d.A,{value:"curl",label:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://api.spacescan.io/nfts/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7/metadata"\n'})})}),(0,r.jsx)(d.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests\n\nnft_id = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"\nurl = f"https://api.spacescan.io/nfts/{nft_id}/metadata"\n\nresponse = requests.get(url)\ndata = response.json()\nprint(data)\n'})})}),(0,r.jsx)(d.A,{value:"javascript",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const nftId = \"nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7\";\nconst url = `https://api.spacescan.io/nfts/${nftId}/metadata`;\n\nfetch(url)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"format"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'The metadata format (e.g., "CHIP-0007")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"The name of the NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Description of the NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sensitive_content"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Flag indicating if content is sensitive"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Collection information"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"collection.name"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the collection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"collection.id"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Unique identifier of the collection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"collection.attributes"}),(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{children:"Array of collection attributes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attributes"}),(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{children:"Array of NFT attributes/traits"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-response",children:"Example Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "format": "CHIP-0007",\n  "name": "Chia Friends #6707",\n  "description": "10,000 eco-bit NFTs on Chia, from Chia.",\n  "sensitive_content": false,\n  "collection": {\n    "name": "Chia Friends",\n    "id": "517B1E97-F1AF-4824-A7B9-8D85E281D7B8",\n    "attributes": [\n      {\n        "type": "description",\n        "value": "10,000 eco-bit NFTs on Chia, from Chia."\n      },\n      {\n        "type": "twitter",\n        "value": "@chia_friends"\n      },\n      {\n        "type": "website",\n        "value": "https://www.chiafriends.xyz/"\n      }\n    ]\n  },\n  "attributes": [\n    {\n      "trait_type": "Background",\n      "value": "Yak"\n    },\n    {\n      "trait_type": "Body",\n      "value": "Parakeet (Green)"\n    },\n    {\n      "trait_type": "Eyes",\n      "value": "Cyborg"\n    },\n    {\n      "trait_type": "Mouth",\n      "value": "Beak (Small)"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"response-headers",children:"Response Headers"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Header"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Content-Type"}),(0,r.jsx)(n.td,{children:"application/json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache-Control"}),(0,r.jsx)(n.td,{children:"Caching directives for the response"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"error-responses",children:"Error Responses"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"HTTP Status Code"}),(0,r.jsx)(n.th,{children:"Meaning"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Bad Request -- Your request is invalid"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Not Found -- The specified NFT or its metadata could not be found"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"429"}),(0,r.jsx)(n.td,{children:"Too Many Requests -- You're requesting too many times"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Internal Server Error -- We had a problem with our server"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"503"}),(0,r.jsx)(n.td,{children:"Service Unavailable -- We're temporarily offline for maintenance"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The response follows the CHIP-0007 metadata standard"}),"\n",(0,r.jsx)(n.li,{children:"All metadata is returned in JSON format"}),"\n",(0,r.jsx)(n.li,{children:"Collection attributes may vary depending on the NFT collection"}),"\n",(0,r.jsx)(n.li,{children:"NFT attributes/traits are specific to each individual NFT"}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5347:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(96540),r=t(86850),i=t(74848);const a=function(e){let{endpoint:n}=e;const[t,a]=(0,s.useState)(null),[d,l]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{(async()=>{if(!d&&!t){l(!0);try{const e=await fetch(n),t=await e.json();a(JSON.stringify(t,null,2))}catch(e){a(`Error: ${e.message}`)}finally{l(!1)}}})()}),[]),(0,i.jsx)("div",{children:d?(0,i.jsx)("p",{children:"Loading API response..."}):t?(0,i.jsxs)(r.Q,{code:t,children:[(0,i.jsx)(r.w,{}),(0,i.jsx)(r.p1,{}),(0,i.jsx)(r.pA,{})]}):(0,i.jsx)("p",{children:"Failed to load API response. Please try again later."})})}}}]);