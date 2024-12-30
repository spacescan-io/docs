---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get NFT Statistics

This endpoint provides global statistics about NFTs on the Chia blockchain, including collection counts, total NFTs, trade volumes, and royalty information.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/nft/stats
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/nft/stats
```

  </TabItem>
</Tabs>

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/nft/stats" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/nft/stats" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/nft/stats" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/nft/stats"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/nft/stats"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        url = "https://api.spacescan.io/nft/stats"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        url = "https://api-testnet11.spacescan.io/nft/stats"

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
        const url = "https://api.spacescan.io/nft/stats";

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const url = "https://api-testnet11.spacescan.io/nft/stats";

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response Example

```json
{
  "status": "success",
  "data": {
    "collections_count": 4547,
    "nft_count": 1637021,
    "trades_count": 104329,
    "traded_amount_xch": 4.680786556872335e-8,
    "royalty_amount_xch": 2.202437563733082e-9,
    "traded_amount_fiat": 9.77022e-7,
    "royalty_amount_fiat": 4.5972e-8
  }
}
```

### Response Schema

| Field                | Type    | Description                                           |
|---------------------|---------|-------------------------------------------------------|
| status              | string  | The status of the API request                         |
| data                | object  | Object containing NFT statistics                      |
| collections_count   | number  | Total number of NFT collections                       |
| nft_count          | number  | Total number of NFTs                                  |
| trades_count       | number  | Total number of NFT trades                            |
| traded_amount_xch  | number  | Total amount of XCH traded for NFTs                   |
| royalty_amount_xch | number  | Total amount of XCH collected as royalties            |
| traded_amount_fiat | number  | Total amount traded in fiat currency                  |
| royalty_amount_fiat| number  | Total amount of royalties in fiat currency            |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Your request is invalid.                                                   |
| 429              | Too Many Requests -- You're requesting too many times! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. | 