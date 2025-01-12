---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Convert To Address

This endpoint allows you to convert a puzzle hash to a Chia address.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/tools/convert_to_address/{hash}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/tools/convert_to_address/{hash}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hash | string | Yes | - | Puzzle hash (with or without 0x prefix) |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/tools/convert_to_address/0x899f69388576188963432fad74488cfcb24fc5f4a92bb39d38aca2930e2fe6bb" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/tools/convert_to_address/0x899f69388576188963432fad74488cfcb24fc5f4a92bb39d38aca2930e2fe6bb" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/tools/convert_to_address/0x899f69388576188963432fad74488cfcb24fc5f4a92bb39d38aca2930e2fe6bb"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

hash = "0x899f69388576188963432fad74488cfcb24fc5f4a92bb39d38aca2930e2fe6bb"
url = f"https://api.spacescan.io/tools/convert_to_address/{hash}"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const hash = "0x899f69388576188963432fad74488cfcb24fc5f4a92bb39d38aca2930e2fe6bb";
const url = `https://api.spacescan.io/tools/convert_to_address/${hash}`;

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
| data | string | The converted Chia address |

### Example Response

```json
{
  "status": "success",
  "data": "xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45"
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid puzzle hash format |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance | 