---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Offers by Asset

This endpoint allows you to fetch all offers that include a specific asset (NFT or CAT) in either their requested or offered assets.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/offers/asset/{asset_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/offers/asset/{asset_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| asset_id | string | Yes | - | NFT or Token or Collection ID or XCH |
| count | number | No | 100 | Number of offers to return (max: 100) |
| page | number | No | 1 | Page number for pagination |

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| version | string | Yes | API version |
| network | string | Yes | Network identifier (e.g., 'xch' for mainnet) |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/offers/asset/{asset_id}?count=50&page=1" \
     -H "x-api-key: YOUR_API_KEY" \
     -H "version: v1" \
     -H "network: xch"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/offers/asset/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?count=20&page=1" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/offers/asset/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365" \
     -H "version: v1" \
     -H "network: xch"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

asset_id = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"
url = f"https://api.spacescan.io/offers/asset/{asset_id}"
headers = {
    "version": "v1",
    "network": "xch"
}
params = {
    "count": 50,
    "page": 1
}

response = requests.get(url, headers=headers, params=params)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const assetId = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365";
const url = new URL(`https://api.spacescan.io/offers/asset/${assetId}`);
url.searchParams.append("count", "50");
url.searchParams.append("page", "1");

fetch(url, {
  headers: {
    "version": "v1",
    "network": "xch"
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Status of the request ("success" or "failed") |
| data | array | Array of offer information objects |

Each offer object in the data array has the following structure:

| Field | Type | Description |
|-------|------|-------------|
| id | string | The unique identifier of the offer |
| offer_status | string | Current status of the offer |
| offer | string | Raw offer data |
| offered | array | Array of assets being offered |
| requested | array | Array of assets being requested |
| created | string | Timestamp of offer creation |
| settled | string | Timestamp when offer was settled |
| height | number | Block height of the offer |

### Example Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "offer1abc...",
      "offer_status": "Active",
      "offer": "raw_offer_data",
      "offered": [
        {
          "type": "NFT1",
          "nft_info": {
            "id": "nft1...",
            "name": "Sample NFT",
            "preview_url": "https://..."
          }
        }
      ],
      "requested": [
        {
          "type": "XCH",
          "symbol": "XCH",
          "amount": 1.5
        }
      ],
      "created": "2023-01-01T00:00:00Z",
      "settled": null,
      "height": 1234567
    }
    // ... more offers
  ]
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 401 | Unauthorized -- Missing required headers |
| 400 | Bad Request -- Invalid asset ID format |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance | 