---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# List All Tokens

This endpoint allows you to fetch a comprehensive list of all Chia Asset Tokens (CATs) in the Chia ecosystem.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/tokens
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/tokens
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| include_price | boolean | No | false | Include price information |
| currency | string | No | USD | Currency for price conversion (e.g., USD, EUR) |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/tokens?include_price=true&currency=USD" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/tokens" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/tokens" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="bash">
        curl -X GET "https://api.spacescan.io/tokens"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/tokens"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        url = "https://api.spacescan.io/tokens"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        url = "https://api-testnet11.spacescan.io/tokens"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="javascript">
        const url = "https://api.spacescan.io/tokens";

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const url = "https://api-testnet11.spacescan.io/tokens";

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <ApiCallExample endpoint="https://api.spacescan.io/tokens?count=10" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/tokens?count=10" />
  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| cats | array | Array of CAT objects |

#### CAT Object Fields

| Field | Type | Description |
|-------|------|-------------|
| asset_id | string | The unique identifier of the CAT |
| token_id | string | Token ID in tkn format |
| name | string | The name of the CAT |
| description | string | Description of the CAT |
| symbol | string | Trading symbol of the CAT |
| preview_url | string | URL to the CAT's logo image |
| tags | array | Array of category tags |
| twitter | string | Twitter profile URL (null if not set) |
| discord | string | Discord server URL (null if not set) |
| website | string | Official website URL (null if not set) |
| price_xch | number | Price in XCH (only if include_price=true) |
| price_[currency] | number | Price in specified currency (only if include_price=true) |

### Example Response

```json
{
  "status": "success",
  "cats": [
    {
      "asset_id": "a628c1c2c6fcb74d53746157e438e108eab5c0bb3e5c80ff9b1910b3e4832913",
      "token_id": "tkn1c2c6fcb74d53746157e438e108eab5c0bb3e5c80ff9b1910b3e4832913",
      "name": "Example Token",
      "description": "An example CAT token",
      "symbol": "EXT",
      "preview_url": "https://assets.spacescan.io/cat/example-token.png",
      "tags": ["defi", "gaming"],
      "twitter": "https://twitter.com/exampletoken",
      "discord": "https://discord.gg/exampletoken",
      "website": "https://example.com",
      "price_xch": 0.5,
      "price_usd": 25.50
    }
  ]
}
```

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid parameters |
| 429 | Too Many Requests -- Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable | 