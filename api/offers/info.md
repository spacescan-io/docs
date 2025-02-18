---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Offer Information

This endpoint allows you to fetch detailed information about a specific offer.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/offer/HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/offer/HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| offer_id | string | Yes | - | The unique identifier of the offer |

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
curl -X GET "https://pro-api.spacescan.io/offer/{offer_id}" \
     -H "x-api-key: YOUR_API_KEY" \
     -H "version: v1" \
     -H "network: xch"
```
:::


### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/offer/HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>


### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/offer/HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf" \
     -H "version: v1" \
     -H "network: xch"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

offer_id = "HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf"
url = f"https://api.spacescan.io/offer/{offer_id}"
headers = {
    "version": "v1",
    "network": "xch"
}

response = requests.get(url, headers=headers)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const offerId = "HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf";
const url = `https://api.spacescan.io/offer/${offerId}`;

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
| data | object | Offer information |
| data.id | string | The unique identifier of the offer |
| data.offer_status | string | Current status of the offer (Active, Pending, Cancelling, Cancelled, Completed, Unknown, Expired) |
| data.offer | string | Raw offer data |
| data.offered | array | Array of assets being offered |
| data.requested | array | Array of assets being requested |
| data.created | string | Timestamp of offer creation |
| data.settled | string | Timestamp when offer was settled |
| data.height | number | Block height of the offer |

#### Asset Object Schema (for offered and requested arrays)

| Field | Type | Description |
|-------|------|-------------|
| type | string | Asset type (NFT1, CAT2, XCH) |
| nft_info | object | NFT information (present if type is NFT1) |
| cat_info | object | CAT information (present if type is CAT1 or CAT2) |
| symbol | string | Asset symbol |
| amount | number | Asset amount |

### Example Response

```json
{
  "status": "success",
  "data": {
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
      },
      {
        "type": "CAT2",
        "cat_info": {
          "asset_id": "cat1...",
          "name": "Sample CAT"
        },
        "symbol": "CAT",
        "amount": 100
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
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 401 | Unauthorized -- Missing required headers |
| 404 | Not Found -- The specified offer could not be found |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance | 