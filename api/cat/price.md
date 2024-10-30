---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get CAT Price

This endpoint allows you to fetch real-time price information for Chia Asset Tokens (CATs) in various currencies. Track current market prices, exchange rates, and fiat valuations for any CAT in the Chia ecosystem. This data is essential for portfolio tracking, trading decisions, and financial applications built on the Chia blockchain.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/cat/catprice/{asset_id}?currency={currency_code}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/cat/catprice/{asset_id}?currency={currency_code}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter     | Type   | Description                                     | Required |
|--------------|--------|-------------------------------------------------|----------|
| asset_id     | string | The unique identifier (TAIL hash) of the CAT    | Yes      |
| currency     | string | Currency code (e.g., USD, EUR, INR, etc.)       | No       |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/cat/catprice/{asset_id}?currency=INR" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/cat/catprice/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20?currency=INR" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/cat/catprice/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20?currency=INR" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/cat/catprice/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20?currency=INR"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/cat/catprice/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20?currency=INR"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        asset_id = "db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20"
        currency = "INR"
        url = f"https://api.spacescan.io/cat/catprice/{asset_id}?currency={currency}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        asset_id = "db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20"
        currency = "INR"
        url = f"https://api-testnet11.spacescan.io/cat/catprice/{asset_id}?currency={currency}"

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
        const assetId = "db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20";
        const currency = "INR";
        const url = `https://api.spacescan.io/cat/catprice/${assetId}?currency=${currency}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const assetId = "db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20";
        const currency = "INR";
        const url = `https://api-testnet11.spacescan.io/cat/catprice/${assetId}?currency=${currency}`;

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
    <ApiCallExample endpoint="https://api.spacescan.io/cat/catprice/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20?currency=INR" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/cat/catprice/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20?currency=INR" />
  </TabItem>
</Tabs>

### Response Schema

| Field         | Type    | Description                                           |
|--------------|---------|-------------------------------------------------------|
| status       | string  | The status of the API request                         |
| amount_price | number  | Current price in the requested currency               |
| xch_price    | string  | Current price in XCH                                  |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Your request is invalid or unsupported currency.                           |
| 404              | Not Found -- The specified CAT could not be found.                                        |
| 429              | Too Many Requests -- You're requesting too many times! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. | 