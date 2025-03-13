---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# List Offers

This endpoint allows you to fetch a list of offers with optional filtering and pagination.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/offers
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/offers
```

  </TabItem>
</Tabs>

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| version | string | Yes | API version |
| network | string | Yes | Network identifier (e.g., 'xch' for mainnet) |

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| count | number | No | 100 | Number of offers to return (max: 100) |
| status | string | No | "ALL" | Filter by offer status (ALL, Active, Pending, Cancelling, Cancelled, Completed, Unknown, Expired) |
| page | number | No | 1 | Page number for pagination |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/offers?count=50&status=Active&page=1" \
     -H "x-api-key: YOUR_API_KEY" \
     -H "version: v1" \
     -H "network: xch"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/offers?count=10&status=Active&page=1" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/offers?count=50&status=Active&page=1" \
     -H "version: v1" \
     -H "network: xch"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.spacescan.io/offers"
headers = {
    "version": "v1",
    "network": "xch"
}
params = {
    "count": 50,
    "status": "Active",
    "page": 1
}

response = requests.get(url, headers=headers, params=params)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const url = new URL("https://api.spacescan.io/offers");
url.searchParams.append("count", "50");
url.searchParams.append("status", "Active");
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
| offer_status | string | Current status of the offer (Active, Pending, Cancelling, Cancelled, Completed, Unknown, Expired) |
| offer | string | Raw offer data |
| offered | array | Array of assets being offered |
| requested | array | Array of assets being requested |
| created | string | Timestamp of offer creation |
| settled | string | Timestamp when offer was settled |
| height | number | Block height of the offer |

#### Asset Object Schema (for offered and requested arrays)

| Field | Type | Description |
|-------|------|-------------|
| type | string | Asset type (NFT1, CAT2, XCH) |
| nft_info | object | NFT information (present if type is NFT1) |
| cat_info | object | CAT information (present if type is CAT2) |
| symbol | string | Asset symbol |
| amount | number | Asset amount |

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
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance |

:::note Cache Information
Responses are cached for 30 seconds to improve performance.
::: 