---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get XCH Price

This endpoint allows you to fetch the XCH price for a specific period and currency.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/stats/price
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/stats/price
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| period | number | No | current time | Unix timestamp for historical price |
| currency | string | No | USD | Currency code (e.g., USD, EUR, GBP) |
| network | string | No | mainnet | Network to query |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/stats/price" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/stats/price" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/stats/price" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
curl -X GET "https://api.spacescan.io/stats/price?currency=USD&period=1677649200"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://api-testnet11.spacescan.io/stats/price?currency=USD&period=1677649200"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```python
import requests

url = "https://api.spacescan.io/stats/price"
params = {
    "currency": "USD",
    "period": 1677649200
}

response = requests.get(url, params=params)
data = response.json()
print(data)
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

url = "https://api-testnet11.spacescan.io/stats/price"
params = {
    "currency": "USD",
    "period": 1677649200
}

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
const url = new URL("https://api.spacescan.io/stats/price");
url.searchParams.append("currency", "USD");
url.searchParams.append("period", "1677649200");

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const url = new URL("https://api-testnet11.spacescan.io/stats/price");
url.searchParams.append("currency", "USD");
url.searchParams.append("period", "1677649200");

fetch(url)
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
  <TabItem value="mainnet" label="Mainnet">
    <ApiCallExample endpoint="https://api.spacescan.io/stats/price" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/stats/price" />
  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| price | number | XCH price in requested currency |

### Notes
- If no period is specified, returns the current price
- Historical prices may not be available for all timestamps
- Supported currencies include USD, EUR, GBP, and others 