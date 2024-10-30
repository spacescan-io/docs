---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Update CAT Information

This endpoint allows CAT creators and authorized parties to update metadata for their Chia Asset Tokens (CATs). Maintain accurate and up-to-date token information including name, symbol, description, and branding assets. The endpoint requires cryptographic proof of ownership through Chia wallet signatures to ensure secure and authenticated updates.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
POST https://api.spacescan.io/cat/info/updatecat
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
POST https://api-testnet11.spacescan.io/cat/info/updatecat
```

  </TabItem>
</Tabs>

### Request Body

```json
{
  "pubkey": "a9cbfe25bf5cb4f94d948575a9c0b9792d0ee6086cdc339665555c5559f7b499535d2e4f021d19d752ebd254ac0b46ec",
  "signature": "83e88836cc456901c01fd5f382ea8405650471a95e9743821f53b483e3e7ae42b5821ad65d5df081fcba5f695f5c4054021a20de22d09c79497fe093ed3ddf04eabfc24dc0ecd97f11a44e8672190616dafeabb2624eb1ee2e4a5cc98bea070f",
  "signing_mode": "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002_",
  "message": "Confirm Sign in to import Tokens from spacescan.io",
  "address": "xch18fs0vesvarufn82f7nr0lvvtxcha5mmyaj39pdcpftas898k6juse2z5rq",
  "asset_id": "0172b814964c80a5c9f58f955f7f54b6f80dada38645f0835450daad4adfe041",
  "asset_name": "Space Test CAT",
  "description": "tes1t",
  "cat_symbol": "SPACE",
  "image_url": "https://spacescan.io/images/spacescan-logo-192.png"
}
```

### Parameters

| Parameter     | Type   | Description                                                |
|--------------|--------|------------------------------------------------------------|
| pubkey       | string | Public key used for signing                                |
| signature    | string | BLS signature of the message                               |
| signing_mode | string | Signature scheme used (typically BLS)                      |
| message      | string | Message that was signed                                    |
| address      | string | EVE coin puzzle hash/minter address                        |
| asset_id     | string | The unique identifier (TAIL hash) of the CAT               |
| asset_name   | string | New name for the CAT                                       |
| description  | string | New description for the CAT                                |
| cat_symbol   | string | New trading symbol for the CAT                             |
| image_url    | string | New URL for the CAT's logo/image                          |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.
:::

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <CodeBlock language="bash">
    curl -X POST "https://api.spacescan.io/cat/info/updatecat" \
         -H "Content-Type: application/json" \
         -d "@request.json"
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="Python">
    <CodeBlock language="python">
    import requests
    import json

    url = "https://api.spacescan.io/cat/info/updatecat"

    with open('request.json') as f:
        data = json.load(f)

    response = requests.post(url, headers=headers, json=data)
    print(response.json())
    </CodeBlock>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <CodeBlock language="javascript">
    const fs = require('fs');
    const url = "https://api.spacescan.io/cat/info/updatecat";
    const headers = &#123; "Content-Type": "application/json"&#125;;

    const data = JSON.parse(fs.readFileSync('request.json'));

    fetch(url,  &#123;
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    &#125;)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
    </CodeBlock>
  </TabItem>
</Tabs>

### Response Schema

| Field   | Type    | Description                                     |
|---------|---------|------------------------------------------------|
| status  | string  | The status of the API request                   |
| message | string  | Success or error message                        |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Invalid request body or signature                                          |
| 401              | Unauthorized -- Invalid signature or address doesn't match CAT minter                      |
| 404              | Not Found -- The specified CAT could not be found                                         |
| 429              | Too Many Requests -- You're requesting too many times! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later                |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later   |

### Notes

- The signature must be generated using the Chia wallet
- The address must match the EVE coin puzzle hash or minter address of the CAT
- The message must be exactly "Confirm Sign in to import Tokens from spacescan.io"
- Image URLs should be publicly accessible and contain appropriate image formats (PNG, JPG, etc.)