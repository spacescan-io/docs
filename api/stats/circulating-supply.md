---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Circulating Supply

This endpoint allows you to fetch the circulating supply of XCH, excluding burned tokens and prefarm balances.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/stats/circulating-supply
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/stats/circulating-supply
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| network | string | No | mainnet | Network to query (mainnet, testnet) |
| explain | boolean | No | false | If true, returns detailed breakdown of locked balances |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/stats/circulating-supply" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/stats/circulating-supply" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/stats/circulating-supply" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```bash
curl -X GET "https://api.spacescan.io/stats/circulating-supply"
```

```bash
curl -X GET "https://api.spacescan.io/stats/circulating-supply?explain=true"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://api-testnet11.spacescan.io/stats/circulating-supply"
```

```bash
curl -X GET "https://api-testnet11.spacescan.io/stats/circulating-supply?explain=true"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```python
import requests

url = "https://api.spacescan.io/stats/circulating-supply"
params = {"explain": "true"}  # Optional: for detailed breakdown

response = requests.get(url, params=params)
data = response.json()
print(data)
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

url = "https://api-testnet11.spacescan.io/stats/circulating-supply"
params = {"explain": "true"}  # Optional: for detailed breakdown

response = requests.get(url, params=params)
data = response.json()
print(data)
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```javascript
const url = "https://api.spacescan.io/stats/circulating-supply";
const params = new URLSearchParams({ explain: "true" }); // Optional: for detailed breakdown

fetch(`${url}?${params}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const url = "https://api-testnet11.spacescan.io/stats/circulating-supply";
const params = new URLSearchParams({ explain: "true" }); // Optional: for detailed breakdown

fetch(`${url}?${params}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="basic" label="Basic Response">

```json
{
  "status": "success",
  "circulating-supply": 123456.789
}
```

  </TabItem>
  <TabItem value="explained" label="With Explanation">

```json
{
  "status": "success",
  "circulating-supply": 123456.789,
  "explanation": {
    "total_supply": 23456789.123,
    "locked_balances": [
      {
        "address": "xch1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqm6ks6e8mvy",
        "type": "burn_address",
        "balance": 1234.567
      },
      {
        "address": "xch1y6krqgs2cjz6mjgz5wy4dd5zqghm3a5pgueccjtudchn2xzcajtsnyzvgy",
        "type": "prefarm_strategic_reserve_1",
        "balance": 5000000.0
      },
      {
        "address": "xch1yxqsmyuyjdlgxw4sqjg4vqlqv5ms2qzex00586nu643jqemmarwslh08yl",
        "type": "prefarm_strategic_reserve_2",
        "balance": 5000000.0
      },
      {
        "address": "xch18hp0afeqmcvn675dqpnxfhk7gggwcpjaa0huc45huu79tkaa28dsuse43w",
        "type": "prefarm_strategic_reserve_3",
        "balance": 5000000.0
      }
    ],
    "total_locked": 15001234.567
  }
}
```

  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| circulating-supply | number | Current circulating supply of XCH |
| explanation | object | (Optional) Detailed breakdown when explain=true |
| explanation.total_supply | number | Total XCH supply including locked balances |
| explanation.locked_balances | array | List of addresses with locked balances |
| explanation.total_locked | number | Total amount of XCH locked |

### Notes
- Circulating supply is calculated as: total_supply - total_locked
- Locked balances include:
  - Burned tokens (sent to dead address)
  - Prefarm balances (3 strategic reserve addresses)
- Response is cached for 2 minutes
- Use explain=true parameter to get detailed breakdown of locked balances