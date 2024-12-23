---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Total Supply

This endpoint allows you to fetch the total supply of XCH in circulation.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/stats/total-supply
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/stats/total-supply
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| network | string | No | mainnet | Network to query (mainnet, testnet) |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/stats/total-supply" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/stats/total-supply" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/stats/total-supply" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
curl -X GET "https://api.spacescan.io/stats/total-supply"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://api-testnet11.spacescan.io/stats/total-supply"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```python
import requests

url = "https://api.spacescan.io/stats/total-supply"

response = requests.get(url)
data = response.json()
print(data)
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

url = "https://api-testnet11.spacescan.io/stats/total-supply"

response = requests.get(url)
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
const url = "https://api.spacescan.io/stats/total-supply";

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const url = "https://api-testnet11.spacescan.io/stats/total-supply";

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
    <ApiCallExample endpoint="https://api.spacescan.io/stats/total-supply" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/stats/total-supply" />
  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| total-supply | number | Total XCH supply in circulation |

### Notes
- Total supply includes the pre-farm amount (21M) for XCH and ABA networks
- The value is calculated based on current blockchain height and block rewards
- Response is cached for 2 minutes 