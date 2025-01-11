---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get NFT Events History

This endpoint allows you to fetch the complete event history of a specific NFT, including transfers, listings, and other on-chain activities.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/nfts/events/{nft_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/nfts/events/{nft_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| nft_id | string | Yes | - | The unique identifier of the NFT |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/nfts/events/{nft_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/nfts/events/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/nfts/events/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

nft_id = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
url = f"https://api.spacescan.io/nfts/events/{nft_id}"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const nftId = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7";
const url = `https://api.spacescan.io/nfts/events/${nftId}`;

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
| coin_name | string | Unique identifier for the coin |
| nft_id | string | The NFT identifier |
| version_number | number | Version number of the event |
| confirmed_block | string | Block height where event was confirmed |
| confirmed_time | string | Timestamp of confirmation |
| spend_block | string | Block height where coin was spent |
| spend_time | string | Timestamp when coin was spent |
| owner_address | string | Address of the owner |
| owner_did | string | DID of the owner (if applicable) |
| parent_coin | string | Parent coin identifier |
| from_address | string | Source address of the transaction |
| is_ephemeral | boolean | Whether the coin is ephemeral |
| memo | string | Optional memo attached to the transaction |
| spend_tags | array | Array of spend tags |
| confirmed_txn_id | string | Transaction ID of confirmation |
| spend_txn_id | string | Transaction ID of spend |
| is_spend | boolean | Whether the coin has been spent |

### Example Response

```json
[
  {
    "coin_name": "d68dfe7118627cab63768f505285bdb86be78f5e5514b6218a1f0cdf6a4a4e01",
    "nft_id": "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7",
    "version_number": 0,
    "confirmed_block": "6200809",
    "confirmed_time": "2024-11-12T19:00:50.000Z",
    "spend_block": "0",
    "spend_time": null,
    "owner_address": "xch1u7jecspyllxzsz4srfvf0pzv489vr3n3tnd3kx2da3avftaq854s4ndhny",
    "owner_did": "did:chia:1gw3wdgx2rs98x86vj3z9888kfu6jtgv5u39224m42crjk0t2rx2q4v06hh",
    "parent_coin": "a71ce702f29eb59ab716b1f395490c856bb2bacaaafdf78134662cf2ec638598",
    "from_address": "xch1u7jecspyllxzsz4srfvf0pzv489vr3n3tnd3kx2da3avftaq854s4ndhny",
    "is_ephemeral": false,
    "memo": null,
    "spend_tags": null,
    "confirmed_txn_id": "txn1nn8zvkmp0j8g5rqdajc9ps9acuympp9vekp2e3t29pguqw6shqnq2hpcgg",
    "confirmed_txn_type": 3,
    "is_spend": false
  }
]
```

### Response Headers

| Header | Description |
|--------|-------------|
| Content-Type | application/json |
| Cache-Control | Caching directives for the response |

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Your request is invalid |
| 404 | Not Found -- The specified NFT could not be found |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance |

### Notes

- Events are returned in chronological order, with the most recent events first
- Each event represents a state change of the NFT on the blockchain
- The `spend_tags` field can help identify the type of event (transfer, listing, etc.)
- `owner_did` may be null if the owner doesn't have an associated DID 