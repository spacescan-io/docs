---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get NFT Information

This endpoint allows you to fetch detailed information about a specific NFT.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/nfts/{nft_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/nfts/{nft_id}
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
curl -X GET "https://pro-api.spacescan.io/nfts/{nft_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/nfts/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/nfts/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

nft_id = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
url = f"https://api.spacescan.io/nfts/{nft_id}"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const nftId = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7";
const url = `https://api.spacescan.io/nfts/${nftId}`;

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
| id | string | The unique identifier of the NFT |
| name | string | The name of the NFT |
| preview_url | string | URL to the NFT's preview image |
| created_height | string | Block height when the NFT was created |
| created_time | string | Timestamp of NFT creation |
| collection | object | Collection information |
| collection.id | string | Collection identifier |
| collection.name | string | Collection name |
| collection.description | string | Collection description |
| collection.preview_url | string | Collection preview image URL |
| price | string | Current listing price |
| creator | object | Creator information including DID and address |
| owner | object | Current owner information including DID and address |
| description | string | NFT description |
| data_url | array | Array of URLs to NFT data |
| metadata_urls | array | Array of URLs to NFT metadata |
| license_urls | array | Array of URLs to license information |
| rarity | number | Rarity score |
| top_bid | string | Highest bid amount |
| last_sale | string | Last sale price |
| current_price | string | Current listing price |
| attributes | array | Array of NFT attributes/traits |

### Example Response

```json
{
  "id": "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7",
  "name": "Chia Friends #6707",
  "preview_url": "https://assets.spacescan.io/nft/95cdc50c1315791cacc318c8d45ebff64863f355ad833bc2144cabb7b47db271.webp",
  "created_height": "2208201",
  "created_time": "2022-07-04T05:01:44.000Z",
  "collection": {
    "id": "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl",
    "name": "Chia Friends",
    "description": "10,000 eco-bit NFTs on Chia, from Chia.",
    "preview_url": "https://assets.spacescan.io/col/a7f7513f445bf620d230d06442ea938cb0703a48ebbd0e16f8113c6472383f04.webp"
  },
  "price": "6.9000000000000",
  "creator": {
    "did": {
      "id": "did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2",
      "name": "Chia Network"
    },
    "address": {
      "address": "xch1mvdvhnl9mmmqdl9e4nvvr6ak329vmv293k0t3hfy2p983t3lj4wqdgqu7j"
    }
  },
  "attributes": [
    {
      "value": "Yak",
      "trait_type": "Background"
    },
    {
      "value": "Parakeet (Green)",
      "trait_type": "Body"
    }
  ]
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Your request is invalid |
| 404 | Not Found -- The specified NFT could not be found |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance |