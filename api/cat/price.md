---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Token Price

This endpoint allows you to fetch real-time price information for Chia Asset Tokens (CAT)

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/token/price/{asset_id}?currency={currency_code}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/token/price/{asset_id}?currency={currency_code}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter     | Type   | Description                                     | Required |
|--------------|--------|-------------------------------------------------|----------|
| asset_id     | string | The unique identifier (TAIL hash) of the CAT    | Yes      |
| currency     | string | Currency code (e.g., USD, EUR, USD, etc.)       | No       |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/token/price/{asset_id}?currency=USD" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/token/price/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?currency=USD" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/token/price/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?currency=USD" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/token/price/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?currency=USD"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/token/price/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?currency=USD"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        asset_id = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"
        currency = "USD"
        url = f"https://api.spacescan.io/token/price/{asset_id}?currency={currency}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        asset_id = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"
        currency = "USD"
        url = f"https://api-testnet11.spacescan.io/token/price/{asset_id}?currency={currency}"

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
        const assetId = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365";
        const currency = "USD";
        const url = `https://api.spacescan.io/token/price/${assetId}?currency=${currency}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const assetId = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365";
        const currency = "USD";
        const url = `https://api-testnet11.spacescan.io/token/price/${assetId}?currency=${currency}`;

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

<ApiCallExample endpoint="https://api.spacescan.io/token/price/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365?currency=USD" />

### Response Schema

| Field         | Type    | Description                                           |
|--------------|---------|-------------------------------------------------------|
| status       | string  | The status of the API request                         |
| price        | object  | Price information for the CAT                         |

#### Price Object (if requested)

| Field | Type | Description |
|-------|------|-------------|
| [currency] | string | Price in specified currency (e.g., "usd": 0.02624364935709997) |
| xch | string | Price in XCH |


### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid parameters |
| 429 | Too Many Requests -- Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable | 