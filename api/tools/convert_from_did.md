---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Convert From DID

This endpoint allows you to convert a DID ID to a puzzle hash.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/tools/convert_from_did/{did}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/tools/convert_from_did/{did}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| did | string | Yes | - | DID ID starting with 'did:chia:' |
| network | string | No | xch | Network type (xch, txch11, aba) |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/tools/convert_from_did/did:chia:10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqjd0xwd" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/tools/convert_from_did/did:chia:10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqjd0xwd" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/tools/convert_from_did/did:chia:10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqjd0xwd"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

did = "did:chia:10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqjd0xwd"
url = f"https://api.spacescan.io/tools/convert_from_did/{did}"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const did = "did:chia:10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqjd0xwd";
const url = `https://api.spacescan.io/tools/convert_from_did/${did}`;

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
| status | string | Status of the request (success/failure) |
| data | string | The converted puzzle hash |

### Example Response

```json
{
  "status": "success",
  "data": "0x7ff8b187e156c030bdc857a12dcb3910bfcb17be923720b59a9d01dfd8243d8c"
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid DID format |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance | 