---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Peak Block

This endpoint allows you to fetch information about the latest (peak) block in the blockchain.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/block/peak
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/block/peak
```

  </TabItem>
</Tabs>

### Parameters

No parameters required for this endpoint.

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/block/peak" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/block/peak" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/block/peak"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.spacescan.io/block/peak"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const url = "https://api.spacescan.io/block/peak";

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| number | string | Block height of the peak block |
| hash | string | Hash of the block |
| type | string | Type of block ("Transaction block" or "Non Transaction block") |
| timestamp | string | Timestamp of block creation (nullable) |
| farmer_address | string | Address of the farmer who created the block |
| pool_address | string | Address of the pool |
| plot | string | Plot size used (e.g., "K32") |
| block_reward | number | Total block reward |
| pool_amount | number | Amount rewarded to pool |
| farmer_amount | number | Amount rewarded to farmer |
| transferred_amount | number | Total amount transferred in the block |

### Example Response

```json
{
  "number": "6555398",
  "hash": "0xb19a4d7fb21b7b92c890c294f6132bfbb059ff7bb713f211d4b18e4204ef18e5",
  "type": "Non Transaction block",
  "timestamp": null,
  "farmer_address": "xch17yszydqqpqd5kk9c86hah7jndvcxcp2u2mhxfyvzf6gucp0c3pzszy8jde",
  "pool_address": "xch182d6s8mf82k9hfmmc8jzla2lmfxt426830d3xq44l0ny8x8jwtxswru4he",
  "plot": "K32",
  "block_reward": 1,
  "pool_amount": 0.875,
  "farmer_amount": 0.125,
  "transferred_amount": 0
}
```

### Response Headers

| Header | Description |
|--------|-------------|
| Content-Type | application/json |
| Cache-Control | Caching directives for the response |

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance |

### Notes

- The peak block represents the latest block in the blockchain
- Block rewards are denominated in XCH
- The timestamp may be null for non-transaction blocks
- The type field indicates whether the block contains transactions 