"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8801],{31373:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"for-developers/nft_api","title":"NFT API (v1 alpha)","description":"NFT API is a rest API by which individual NFT information can be fetched based on","source":"@site/docs/for-developers/nft_api.md","sourceDirName":"for-developers","slug":"/for-developers/nft_api","permalink":"/docs/for-developers/nft_api","draft":false,"unlisted":false,"editUrl":"https://github.com/spacescan-io/docs/tree/main/docs/for-developers/nft_api.md","tags":[],"version":"current","lastUpdatedBy":"nandhakumar2002","lastUpdatedAt":1735916417000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1}}');var s=i(74848),a=i(28453);const d={sidebar_position:1},c="NFT API (v1 alpha)",o={},r=[{value:"NFT info API endpoint",id:"nft-info-api-endpoint",level:2},{value:"Details about NFT info API each response attribute",id:"details-about-nft-info-api-each-response-attribute",level:2},{value:"NFT Collection info API endpoint",id:"nft-collection-info-api-endpoint",level:2},{value:"Details about NFT Collection info API each response attribute",id:"details-about-nft-collection-info-api-each-response-attribute",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"nft-api-v1-alpha",children:"NFT API (v1 alpha)"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NFT API"})," is a rest API by which individual NFT information can be fetched based on\nthe nft ",(0,s.jsx)(n.code,{children:"nft id"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This API is still under a developing stage, so please try to use this API cautiously ."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"New features or change in attributes will happen in the future. Hence, make sure the scheme\nbefore using the response."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["We are happy to help with more features and parametes under this API. Please contact the spacescan.io team at ",(0,s.jsx)(n.a,{href:"https://discord.com/invite/Bb4sj3Bg9P",children:"discord"}),", ",(0,s.jsx)(n.a,{href:"https://twitter.com/spacescan_io",children:"twitter"})," or at ",(0,s.jsx)(n.code,{children:"spacescan.io@gmail.com"})," for any suggestions or bugs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Info",type:"info",children:(0,s.jsxs)(n.p,{children:["We would appreciate your effort on linking back to ",(0,s.jsx)(n.a,{href:"https://www.spacescan.io/",children:"spacescan.io"})," and this API, if this API is used for building any product or feature on top of it."]})}),"\n",(0,s.jsx)(n.h2,{id:"nft-info-api-endpoint",children:"NFT info API endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["The API endpoint to hit for the nft information response ",(0,s.jsx)(n.code,{children:"https://api2.spacescan.io/api/nft/{nftid}"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This ",(0,s.jsx)(n.code,{children:"nftid"})," in the endpoint needs to be replaced with the nftid that the user needs information about."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response for Spacescan NFT"',children:'{\n    "status": "SUCCESS",\n    "data": [\n        {\n            "nft_id": "nft12l69ttcxm8zdk3jc6z3dlhtvudja270sm4k7cw3rhvhgur9lrntqly5hag  ",\n            "nft_info": {\n                "launcher_id": "0x57f455af06d9c4db4658d0a2dfdd6ce365d579f0dd6dec3a23bb2e8e0cbf1cd6",\n                "owner_did": null,\n                "owner_pubkey": null,\n                "royalty_percentage": null,\n                "royalty_puzzle_hash": null,\n                "data_uris": [\n                    "https://i.ibb.co/jWyPWJJ/spacescan-io-icon.png"\n                ],\n                "data_hash": "0x7eb0ef1ed9054fd271a0baa8c35e827e2a88f9b54fc80469893870db3aba3491",\n                "metadata_uris": [\n                    "https://api.npoint.io/a2ed322367b49cb97077"\n                ],\n                "metadata_hash": "0xa88c892e929d770b0292b236782f8e256e92241ebb3d55ba7648d03612139e6e",\n                "license_uris": [],\n                "license_hash": "0x00",\n                "series_total": 1,\n                "series_number": 1,\n                "updater_puzhash": "0xfe8a4b4e27a2e29a4d3fc7ce9d527adbcaccbab6ada3903ccf3ba9a769d2d78b",\n                "mint_height": 1119426,\n                "supports_did": false,\n                "pending_transaction": false,\n                "launcher_puzhash": "0xeff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9"\n            },\n            "meta_info": {\n                "name": "Spacescan.io 1.4.0",\n                "description": "Testing 1.4.0 with NFT1",\n                "collection_id": "12345678901234567890",\n                "collection_name": "SpaceScan.io Test NFT explorer",\n                "attributes": [\n                    {\n                        "value": "NFT1",\n                        "trait_type": "NFT"\n                    }\n                ]\n            }\n        }\n    ],\n    "history": [\n        {\n            "coin_name": "e1b769a5d4f975eebe15f03016dec82c3a16c6655493da6598471e3c94efa618",\n            "confirmed_index": "1119426",\n            "spent_index": "1119426",\n            "puzzle_hash": "98f23ca5a2d41534fa3485eaf570102dec1bd7b6cec11c5502a374c75f21b63e",\n            "coin_parent": "57f455af06d9c4db4658d0a2dfdd6ce365d579f0dd6dec3a23bb2e8e0cbf1cd6",\n            "amount": "1",\n            "timestamp": "1655348506",\n            "from_puzzle_hash": "eff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Info",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Whenever there is a change in the version, the endpoint for this API will change. This change will be updated here in the docs."}),"\n",(0,s.jsx)(n.li,{children:"The last three old versions will always be supported along with the new version. We would provide two weeks\nnotice prior to the old version decommission date."}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"details-about-nft-info-api-each-response-attribute",children:"Details about NFT info API each response attribute"}),"\n",(0,s.jsx)(n.p,{children:"Each attributes inside the response denotes different information about the NFT."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"status"})," denotes whether the API call is made successfully or not. ",(0,s.jsx)(n.code,{children:"SUCCESS"})," symbolize the call is success, ",(0,s.jsx)(n.code,{children:"FAILURE"})," symbolize the call is not success."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"nft"})," object contains the details about the NFT asset id provided in the endpoint."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the header ",(0,s.jsx)(n.code,{children:"x-api-coin"})," key with the value ",(0,s.jsx)(n.code,{children:"XCH"})," for mainnet and ",(0,s.jsx)(n.code,{children:"TXCH"})," for testnet."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This header ",(0,s.jsx)(n.code,{children:"x-api-coin"})," is used for the user validation, and this would be a mandatory header."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the header ",(0,s.jsx)(n.code,{children:"x-api-version"})," key with the value of current version."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This header ",(0,s.jsx)(n.code,{children:"x-api-version"})," version ",(0,s.jsx)(n.code,{children:"v0.1"})," denotes the alpha version of the API. ",(0,s.jsx)(n.code,{children:"api/nft"})," denotes the NFT present in the chia blockchain."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the header ",(0,s.jsx)(n.code,{children:"x-auth-id"})," key with the value taken from the ",(0,s.jsx)(n.a,{href:"https://www.spacescan.io/",children:"spacescan.io"})," user profile info ",(0,s.jsx)(n.code,{children:"API Key"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This header ",(0,s.jsx)(n.code,{children:"x-auth-id"})," is used for the user validation, and this would be a mandatory header in the future."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"CAT x_auth_id",src:i(50800).A+"",width:"1893",height:"897"})}),"\n",(0,s.jsx)(n.h2,{id:"nft-collection-info-api-endpoint",children:"NFT Collection info API endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["The API endpoint to hit for the individual nft information response ",(0,s.jsx)(n.code,{children:"https://api2.spacescan.io/api/nft/collection/{collectionid}"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This ",(0,s.jsx)(n.code,{children:"collectionid"})," in the endpoint needs to be replaced with the collectionid that the user needs information about."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response for Spacescan Collection NFT"',children:'{\n    "status": "success",\n    "data": [\n        {\n            "count": "2",\n            "nft_id": "nft12l69ttcxm8zdk3jc6z3dlhtvudja270sm4k7cw3rhvhgur9lrntqly5hag  ",\n            "nft_info": {\n                "launcher_id": "0x57f455af06d9c4db4658d0a2dfdd6ce365d579f0dd6dec3a23bb2e8e0cbf1cd6",\n                "owner_did": null,\n                "owner_pubkey": null,\n                "royalty_percentage": null,\n                "royalty_puzzle_hash": null,\n                "data_uris": [\n                    "https://i.ibb.co/jWyPWJJ/spacescan-io-icon.png"\n                ],\n                "data_hash": "0x7eb0ef1ed9054fd271a0baa8c35e827e2a88f9b54fc80469893870db3aba3491",\n                "metadata_uris": [\n                    "https://api.npoint.io/a2ed322367b49cb97077"\n                ],\n                "metadata_hash": "0xa88c892e929d770b0292b236782f8e256e92241ebb3d55ba7648d03612139e6e",\n                "license_uris": [],\n                "license_hash": "0x00",\n                "series_total": 1,\n                "series_number": 1,\n                "updater_puzhash": "0xfe8a4b4e27a2e29a4d3fc7ce9d527adbcaccbab6ada3903ccf3ba9a769d2d78b",\n                "mint_height": 1119426,\n                "supports_did": false,\n                "pending_transaction": false,\n                "launcher_puzhash": "0xeff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9"\n            },\n            "meta_info": {\n                "name": "Spacescan.io 1.4.0",\n                "attributes": [\n                    {\n                        "value": "NFT1",\n                        "trait_type": "NFT"\n                    }\n                ],\n                "description": "Testing 1.4.0 with NFT1",\n                "collection_id": "12345678901234567890",\n                "collection_name": "SpaceScan.io Test NFT explorer"\n            },\n            "last_updated_height": "1119426"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Info",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Whenever there is a change in the version, the endpoint for this API will change. This change will be updated here in the docs."}),"\n",(0,s.jsx)(n.li,{children:"The last three old versions will always be supported along with the new version. We would provide two weeks\nnotice prior to the old version decommission date."}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"details-about-nft-collection-info-api-each-response-attribute",children:"Details about NFT Collection info API each response attribute"}),"\n",(0,s.jsx)(n.p,{children:"Each attributes inside the response denotes different information about the NFT."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"status"})," denotes whether the API call is made successfully or not. ",(0,s.jsx)(n.code,{children:"SUCCESS"})," symbolize the call is success, ",(0,s.jsx)(n.code,{children:"FAILURE"})," symbolize the call is not success."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"nft"})," object contains the details about the NFT asset id provided in the endpoint."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the header ",(0,s.jsx)(n.code,{children:"x-api-coin"})," key with the value ",(0,s.jsx)(n.code,{children:"XCH"})," for mainnet and ",(0,s.jsx)(n.code,{children:"TXCH"})," for testnet."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This header ",(0,s.jsx)(n.code,{children:"x-api-coin"})," is used for the user validation, and this would be a mandatory header."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the header ",(0,s.jsx)(n.code,{children:"x-api-version"})," key with the value of current version."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This header ",(0,s.jsx)(n.code,{children:"x-api-version"})," version ",(0,s.jsx)(n.code,{children:"v0.1"})," denotes the alpha version of the API. ",(0,s.jsx)(n.code,{children:"api/nft/collection"})," denotes the NFT present in the chia blockchain."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the header ",(0,s.jsx)(n.code,{children:"x-auth-id"})," key with the value taken from the ",(0,s.jsx)(n.a,{href:"https://www.spacescan.io/",children:"spacescan.io"})," user profile info ",(0,s.jsx)(n.code,{children:"API Key"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This header ",(0,s.jsx)(n.code,{children:"x-auth-id"})," is used for the user validation, and this would be a mandatory header in the future."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50800:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/token_id-a0175d4996af5ea62790374d4d01e7c0.png"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(96540);const s={},a=t.createContext(s);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);