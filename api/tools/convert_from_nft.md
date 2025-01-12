---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Convert From NFT ID

This endpoint allows you to convert an NFT ID to a puzzle hash.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/tools/convert_from_nft/{nft_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/tools/convert_from_nft/{nft_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| nft_id | string | Yes | - | NFT ID starting with 'nft' |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/tools/convert_from_nft/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/tools/convert_from_nft/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/tools/convert_from_nft/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

nft_id = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
url = f"https://api.spacescan.io/tools/convert_from_nft/{nft_id}"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const nftId = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7";
const url = `https://api.spacescan.io/tools/convert_from_nft/${nftId}`;

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
| 400 | Bad Request -- Invalid NFT ID format |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance | 