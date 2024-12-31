---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Token Information

This endpoint allows you to fetch detailed information about a specific CAT (Chia Asset Token).

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/token/info/{token_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/token/info/{token_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| token_id | string | Yes | - | The unique identifier of the CAT |
| include_price | boolean | No | false | Include price information |
| include_supply | boolean | No | false | Include supply information |
| currency | string | No | USD | Currency for price conversion |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/token/info/{token_id}?include_price=true&include_supply=true" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/token/info/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?include_price=true&include_supply=true&currency=USD" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/token/info/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
# Basic info
curl -X GET "https://api.spacescan.io/token/info/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"

# With price and supply info
curl -X GET "https://api.spacescan.io/token/info/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?include_price=true&include_supply=true&currency=USD"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

token_id = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"
params = {
    "include_price": "true",
    "include_supply": "true",
    "currency": "USD"
}

url = f"https://api.spacescan.io/token/info/{token_id}"
response = requests.get(url, params=params)
data = response.json()
print(data)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const tokenId = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365";
const url = `https://api.spacescan.io/token/info/${tokenId}?include_price=true&include_supply=true&currency=USD`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

  </TabItem>
</Tabs>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/token/info/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?include_price=true&include_supply=true&currency=USD" />

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | The status of the API request |
| info | object | Token information object |
| price | object | Price information object |
| supply | object | Supply information object |

#### Info Object

| Field | Type | Description |
|-------|------|-------------|
| asset_id | string | The unique identifier of the CAT |
| token_id | string | Token ID in tkn format |
| name | string | The name of the CAT |
| description | string | Description of the CAT |
| symbol | string | Trading symbol of the CAT |
| preview_url | string | URL to the CAT's logo image |
| tags | string | Category tags |
| twitter | string | Twitter profile URL (null if not set) |
| discord | string | Discord server URL (null if not set) |
| website | string | Official website URL (null if not set) |
| type | string | Token type (e.g., "CAT2") |

#### Price Object (if requested)

| Field | Type | Description |
|-------|------|-------------|
| [currency] | string | Price in specified currency (e.g., "usd": 0.02624364935709997) |
| xch | string | Price in XCH |

#### Supply Object (if requested)

| Field | Type | Description |
|-------|------|-------------|
| total_supply | number | Total token supply |
| burned | number | Number of tokens burned |
| melted | number | Number of tokens melted |
| circulating_supply | number | Current circulating supply |
