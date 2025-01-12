---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Convert From Address

This endpoint allows you to convert a Chia address to a puzzle hash.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/tools/convert_from_address/{address}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/tools/convert_from_address/{address}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | Chia address starting with 'xch' |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/tools/convert_from_address/xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/tools/convert_from_address/xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/tools/convert_from_address/xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

address = "xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45"
url = f"https://api.spacescan.io/tools/convert_from_address/{address}"

response = requests.get(url)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const address = "xch13x0kjwy9wcvgjc6r97khgjyvljeyl3054y4m88fc4j3fxr30u6asasxq45";
const url = `https://api.spacescan.io/tools/convert_from_address/${address}`;

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
  "data": "0x899f69388576188963432fad74488cfcb24fc5f4a92bb39d38aca2930e2fe6bb"
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid address format |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance | 