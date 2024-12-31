---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Update Token Information

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
  "image_url": "https://spacescan.io/images/spacescan-logo-192.png",
  "image_data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
}
```

:::info Base 64 Image Data
The `image_data` field is optional and can be used to directly provide the image data in base64 format instead of using the `image_url` field.
:::

### Parameters

| Parameter     | Type   | Required | Description                                                                    |
| ------------- | ------ | -------- | ------------------------------------------------------------------------------ |
| pubkey        | string | Yes      | Public key used for signing                                                    |
| signature     | string | Yes      | BLS signature of the message                                                   |
| signing_mode  | string | Yes      | Signature scheme (BLS*SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002*)       |
| message       | string | Yes      | Message that was signed ("Confirm Sign in to import Tokens from spacescan.io") |
| address       | string | Yes      | EVE coin puzzle hash/minter address                                            |
| asset_id      | string | Yes      | The unique identifier (TAIL hash) of the CAT                                   |
| asset_name    | string | Yes      | Name for the CAT                                                               |
| description   | string | No       | Description for the CAT                                                        |
| cat_symbol    | string | Yes      | Trading symbol for the CAT                                                     |
| image_url     | string | No       | URL for the CAT's logo/image                                                   |
| image_data    | string | No       | Base64 encoded image data                                                      |
| issuance_type | string | No       | Type of issuance                                                               |
| tags          | string | No       | Category tags for the CAT                                                      |
| multiplier    | string | No       | Token multiplier                                                               |
| clvm          | string | No       | CLVM code                                                                      |
| lisp          | string | No       | LISP code                                                                      |
| extra         | string | No       | Additional information                                                         |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X POST "https://pro-api.spacescan.io/cat/info/updatecat" \
     -H "x-api-key: YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"asset_id": "YOUR_ASSET_ID", ...}'
```

:::

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">
        <CodeBlock language="bash">
        curl -X POST "https://api.spacescan.io/cat/info/updatecat" \
             -H "Content-Type: application/json" \
             -d  &#123;
               "pubkey": "YOUR_PUBLIC_KEY",
               "signature": "YOUR_SIGNATURE",
               "signing_mode": "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002_",
               "message": "Confirm Sign in to import Tokens from spacescan.io",
               "address": "YOUR_ADDRESS",
               "asset_id": "YOUR_ASSET_ID",
               "asset_name": "Your CAT Name",
               "cat_symbol": "SYMBOL",
               "description": "Your description"
             &#125;
        </CodeBlock>
  </TabItem>
  <TabItem value="python" label="Python">
    <CodeBlock language="python">
    import requests
    import json

    url = "https://api.spacescan.io/cat/info/updatecat"

    data =  &#123;
               "pubkey": "YOUR_PUBLIC_KEY",
               "signature": "YOUR_SIGNATURE",
               "signing_mode": "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002_",
               "message": "Confirm Sign in to import Tokens from spacescan.io",
               "address": "YOUR_ADDRESS",
               "asset_id": "YOUR_ASSET_ID",
               "asset_name": "Your CAT Name",
               "cat_symbol": "SYMBOL",
               "description": "Your description"
             &#125;
    response = requests.post(url, json=data)
    print(response.json())
    </CodeBlock>

  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <CodeBlock language="javascript">
    const url = "https://api.spacescan.io/cat/info/updatecat";
    
    const data =  &#123;
               "pubkey": "YOUR_PUBLIC_KEY",
               "signature": "YOUR_SIGNATURE",
               "signing_mode": "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_AUG:CHIP-0002_",
               "message": "Confirm Sign in to import Tokens from spacescan.io",
               "address": "YOUR_ADDRESS",
               "asset_id": "YOUR_ASSET_ID",
               "asset_name": "Your CAT Name",
               "cat_symbol": "SYMBOL",
               "description": "Your description"
             &#125;

    fetch(url, &#123;
        method: 'POST',
        headers: &#123;'Content-Type': 'application/json'&#125;,
        body: JSON.stringify(data)
    &#125;)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    </CodeBlock>

  </TabItem>
</Tabs>

### Response Schema

| Field   | Type    | Description                                      |
| ------- | ------- | ------------------------------------------------ |
| status  | string  | The status of the API request                    |
| data    | object  | Response data object                             |

#### Data Object

| Field   | Type    | Description                                      |
| ------- | ------- | ------------------------------------------------ |
| claimed | boolean | Whether the update was successful                |
| message | string  | Additional information about the update (if any) |

### Example Response

```json
{
  "status": "success",
  "data": {
    "claimed": true
  }
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid parameters |
| 429 | Too Many Requests -- Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable | 

### Important Notes

- The signature must be generated using the Chia wallet
- The address must match the EVE coin puzzle hash or minter address of the CAT
- The message must be exactly "Confirm Sign in to import Tokens from spacescan.io"
- Image URLs should be publicly accessible and contain appropriate image formats (PNG, JPG, etc.)
- Base64 image data can be provided instead of image URL
- Updates are limited to 5 times per CAT owner
