---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Upload Offer

This endpoint allows you to import an offer from Dexie.space into the Spacescan system.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/api/uploadoffer/{offer_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/api/uploadoffer/{offer_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| offer_id | string | Yes | - | The Dexie.space offer identifier to import |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/api/uploadoffer/{offer_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/api/uploadoffer/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/api/uploadoffer/HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

offer_id = "HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf"
url = f"https://api.spacescan.io/api/uploadoffer/{offer_id}"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const offerId = "HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf";
const url = `https://api.spacescan.io/api/uploadoffer/${offerId}`;

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
| data | string | Status of the upload operation ("success" or error message) |

### Example Response

```json
{
  "data": "success"
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid offer ID format |
| 404 | Not Found -- The specified offer could not be found on Dexie.space |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance |

:::note
This endpoint imports offer data from Dexie.space into the Spacescan system. After successful upload, you can use the [Get Offer Information](/docs/api/offers/info) endpoint to retrieve the offer details.
::: 