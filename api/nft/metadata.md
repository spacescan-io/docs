---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get NFT Metadata

This endpoint allows you to fetch the metadata information of a specific NFT in CHIP-0007 format.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/nfts/{nft_id}/metadata
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/nfts/{nft_id}/metadata
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
curl -X GET "https://pro-api.spacescan.io/nfts/{nft_id}/metadata" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/nfts/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7/metadata" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/nfts/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7/metadata"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

nft_id = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
url = f"https://api.spacescan.io/nfts/{nft_id}/metadata"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const nftId = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7";
const url = `https://api.spacescan.io/nfts/${nftId}/metadata`;

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
| format | string | The metadata format (e.g., "CHIP-0007") |
| name | string | The name of the NFT |
| description | string | Description of the NFT |
| sensitive_content | boolean | Flag indicating if content is sensitive |
| collection | object | Collection information |
| collection.name | string | Name of the collection |
| collection.id | string | Unique identifier of the collection |
| collection.attributes | array | Array of collection attributes |
| attributes | array | Array of NFT attributes/traits |

### Example Response

```json
{
  "format": "CHIP-0007",
  "name": "Chia Friends #6707",
  "description": "10,000 eco-bit NFTs on Chia, from Chia.",
  "sensitive_content": false,
  "collection": {
    "name": "Chia Friends",
    "id": "517B1E97-F1AF-4824-A7B9-8D85E281D7B8",
    "attributes": [
      {
        "type": "description",
        "value": "10,000 eco-bit NFTs on Chia, from Chia."
      },
      {
        "type": "twitter",
        "value": "@chia_friends"
      },
      {
        "type": "website",
        "value": "https://www.chiafriends.xyz/"
      }
    ]
  },
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Yak"
    },
    {
      "trait_type": "Body",
      "value": "Parakeet (Green)"
    },
    {
      "trait_type": "Eyes",
      "value": "Cyborg"
    },
    {
      "trait_type": "Mouth",
      "value": "Beak (Small)"
    }
  ]
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
| 400 | Bad Request -- Your request is invalid |
| 404 | Not Found -- The specified NFT or its metadata could not be found |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance |

### Notes

- The response follows the CHIP-0007 metadata standard
- All metadata is returned in JSON format
- Collection attributes may vary depending on the NFT collection
- NFT attributes/traits are specific to each individual NFT 