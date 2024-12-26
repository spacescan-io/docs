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
    <a href="https://api.spacescan.io/token/info/14b40962dfef81d954ac0d92b51ec21ce7acd8c62dd9fef9303aa51c615cb495" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/token/info/14b40962dfef81d954ac0d92b51ec21ce7acd8c62dd9fef9303aa51c615cb495" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
curl -X GET "https://api.spacescan.io/token/info/14b40962dfef81d954ac0d92b51ec21ce7acd8c62dd9fef9303aa51c615cb495"

# With price and supply info
curl -X GET "https://api.spacescan.io/token/info/14b40962dfef81d954ac0d92b51ec21ce7acd8c62dd9fef9303aa51c615cb495?include_price=true&include_supply=true&currency=USD"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

token_id = "14b40962dfef81d954ac0d92b51ec21ce7acd8c62dd9fef9303aa51c615cb495"
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
const tokenId = "14b40962dfef81d954ac0d92b51ec21ce7acd8c62dd9fef9303aa51c615cb495";
const url = `https://api.spacescan.io/token/info/${tokenId}?include_price=true&include_supply=true&currency=USD`;

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
| status | string | Success or failure status |
| info | object | Basic token information |
| info.asset_id | string | The unique identifier of the CAT |
| info.token_id | string | Token ID in tkn format |
| info.name | string | The name of the CAT |
| info.description | string | Description of the CAT |
| info.symbol | string | Trading symbol of the CAT |
| info.preview_url | string | URL to the CAT's logo image |
| info.tags | string | Category tags |
| info.twitter | string | Twitter profile URL (null if not set) |
| info.discord | string | Discord server URL (null if not set) |
| info.website | string | Official website URL (null if not set) |
| info.type | string | Token type (e.g., "CAT2") |
| price | object | Price information (if requested) |
| price.price_[currency] | number | Price in specified currency |
| price.price_xch | number | Price in XCH |
| supply | object | Supply information (if requested) |
| supply.total_supply | number | Total token supply |
| supply.burned | number | Number of tokens burned |
| supply.melted | number | Number of tokens melted |
| supply.circulating_supply | number | Current circulating supply |

### Example Response

```json
{
  "status": "success",
  "info": {
    "asset_id": "14b40962dfef81d954ac0d92b51ec21ce7acd8c62dd9fef9303aa51c615cb495",
    "token_id": "tkn1zj6qjckla7qaj49vpkft28kzrnn6ekxx9hvla7fs82j3cc2ukj2ssa84km",
    "name": "LLC Burn Token",
    "description": "LLC Burn Token can only be acquired by burning a Little Lambo Coin...",
    "symbol": "LLBT",
    "preview_url": "https://assets.spacescan.io/cat/f5cd9dccc98c1fd4f32b599324b6dd938c793c0e50af7581195aee603277bad8.webp",
    "tags": "meme",
    "twitter": "https://twitter.com/LittleLamboCoin",
    "discord": "https://discord.gg/Ew96DzCxc7",
    "website": "https://littlelambocoin.com/llc-burn-token",
    "type": "CAT2"
  },
  "price": {
    "price_usd": 0.02624364935709997,
    "price_xch": 0.001225206519248
  },
  "supply": {
    "total_supply": 1000000000,
    "burned": 1,
    "melted": 0,
    "circulating_supply": 999999999
  }
}
``` 