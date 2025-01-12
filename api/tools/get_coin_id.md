---
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Coin ID

This endpoint allows you to generate a coin ID from parent coin name, puzzle hash, and amount.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
POST https://api.spacescan.io/tools/get_coin_id
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
POST https://api-testnet11.spacescan.io/tools/get_coin_id
```

  </TabItem>
</Tabs>

### Request Body Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| parent_coin_name | string | Yes | - | Parent coin name (with or without 0x prefix) |
| puzzle_hash | string | Yes | - | Puzzle hash (with or without 0x prefix) |
| amount | number | Yes | - | Amount in XCH |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X POST "https://pro-api.spacescan.io/tools/get_coin_id" \
     -H "x-api-key: YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"parent_coin_name":"0x6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589","puzzle_hash":"0x94c6db00186900418ef7c1f05e127ee1a647cbe6e514ec32c66bd9bb228d96da","amount":1.5}'
```
:::

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X POST "https://api.spacescan.io/tools/get_coin_id" \
     -H "Content-Type: application/json" \
     -d '{
       "parent_coin_name": "0x6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589",
       "puzzle_hash": "0x94c6db00186900418ef7c1f05e127ee1a647cbe6e514ec32c66bd9bb228d96da",
       "amount": 1.5
     }'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests
import json

url = "https://api.spacescan.io/tools/get_coin_id"
payload = {
    "parent_coin_name": "0x6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589",
    "puzzle_hash": "0x94c6db00186900418ef7c1f05e127ee1a647cbe6e514ec32c66bd9bb228d96da",
    "amount": 1.5
}
headers = {"Content-Type": "application/json"}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const payload = {
    parent_coin_name: "0x6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589",
    puzzle_hash: "0x94c6db00186900418ef7c1f05e127ee1a647cbe6e514ec32c66bd9bb228d96da",
    amount: 1.5
};

fetch("https://api.spacescan.io/tools/get_coin_id", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
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
| status | string | Status of the request (success/failure) |
| data | string | The generated coin ID |

### Example Response

```json
{
  "status": "success",
  "data": "0x8b3c547f70d1f2e9b12f302c3a1fa12905152406e7b42f3903f21c1dcd4e6d54"
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid input format or parameters |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance | 