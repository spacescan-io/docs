---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get NFT Offers

This endpoint allows you to fetch all current and historical offers for a specific NFT.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/nfts/offers/{nft_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/nfts/offers/{nft_id}
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
curl -X GET "https://pro-api.spacescan.io/nfts/offers/{nft_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/nfts/offers/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/nfts/offers/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

nft_id = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
url = f"https://api.spacescan.io/nfts/offers/{nft_id}"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const nftId = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7";
const url = `https://api.spacescan.io/nfts/offers/${nftId}`;

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
| status | string | API response status ("success" or "error") |
| data | object | Response data object |
| data.nft_id | string | The NFT identifier |
| data.total_offers | number | Total number of offers for this NFT |
| data.total_listings | number | Total number of listings for this NFT |
| data.offers | array | Array of offer objects |
| data.offers[].offer_hash | string | Unique hash of the offer (nullable) |
| data.offers[].hash_base_58 | string | Base58 encoded hash of the offer |
| data.offers[].hash_bech32 | string | Bech32 encoded hash of the offer (nullable) |
| data.offers[].offered_requested_hash | string | Hash of requested offer (nullable) |
| data.offers[].created | string | Timestamp of offer creation |
| data.offers[].settled | string | Timestamp when offer was settled (nullable) |
| data.offers[].height | number | Block height of the offer (nullable) |
| data.offers[].log_time | string | Timestamp of last log update (nullable) |
| data.offers[].offer_status | number | Status code of the offer |
| data.offers[].offered_assets | array | Array of assets being offered |
| data.offers[].offered_type | array | Types of assets being offered |
| data.offers[].listings | array | Array of associated listings |

### Example Response

```json
{
  "status": "success",
  "data": {
    "nft_id": "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7",
    "total_offers": 1,
    "total_listings": 6,
    "offers": [
      {
        "offer_hash": null,
        "hash_base_58": "AZXvtbC5Kx1U9463FDpN6VAuUs55SqsahhbxxmiAFJhg",
        "hash_bech32": null,
        "offered_requested_hash": null,
        "created": "2024-04-20T04:51:24.689Z",
        "settled": null,
        "height": null,
        "log_time": null,
        "offer_status": 0,
        "offered_assets": [],
        "offered_type": ["XCH"],
            }
        "listings": [
          {
            "offer_hash": null,
            "hash_base_58": "H8c3h8hazarpd63pzqCDtQMwJpZtbuk8CFJ7rQsCWviJ",
            "hash_bech32": null,
            "offered_requested_hash": null,
            "created": "2024-04-22T16:14:48.579Z",
            "settled": null,
            "height": null,
            "log_time": null,
            "offer_status": 0,
            "offered_assets": []
          }
        ]
  
    ]
  }
}
```

### Notes

- The `offer_status` values represent:
  - 0: Pending
  - 1: Accepted
  - 2: Cancelled
  - 3: Expired
- `offered_type` indicates the type of assets being offered (e.g., "XCH" for Chia)
- Both offers and listings share similar data structures
- Null values indicate optional or pending information
- Timestamps are in ISO 8601 format

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

- Offers are returned in chronological order, with the most recent offers first
- The `status` field can be one of: PENDING, ACCEPTED, CANCELLED, EXPIRED
- Expired offers are included in the response for historical purposes
- Price is denominated in XCH (Chia) 