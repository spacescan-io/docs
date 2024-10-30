---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get CAT Transactions

This endpoint allows you to fetch transaction history for a specific Chia Asset Token (CAT). Track transfers, trades, and movements of any CAT in the Chia ecosystem, providing valuable insights into token circulation and trading patterns. This is particularly useful for token analytics, market analysis, and tracking token distribution.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/cat/transactions/{asset_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/cat/transactions/{asset_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| asset_id  | string | The unique identifier (TAIL hash) of the CAT    |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/cat/transactions/{asset_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/cat/transactions/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/cat/transactions/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/cat/transactions/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/cat/transactions/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20"
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
        url = f"https://api.spacescan.io/cat/transactions/{asset_id}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        asset_id = "db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20"
        url = f"https://api-testnet11.spacescan.io/cat/transactions/{asset_id}"

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
        const url = `https://api.spacescan.io/cat/transactions/${assetId}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const assetId = "db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20";
        const url = `https://api-testnet11.spacescan.io/cat/transactions/${assetId}`;

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
    <ApiCallExample endpoint="https://api.spacescan.io/cat/transactions/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/cat/transactions/db1a9020d48d9d4ad22631b66ab4b9ebd3637ef7758ad38881348c5d24c38f20" />
  </TabItem>
</Tabs>

### Response Schema

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| status           | string  | The status of the API request                         |
| data             | array   | Array of transaction objects                          |

#### Transaction Object

Each transaction in the data array contains:

| Field             | Type    | Description                                           |
|-------------------|---------|-------------------------------------------------------|
| coin_name         | string  | Unique identifier for the transaction                 |
| coin_parent       | string  | Parent coin identifier                               |
| amount            | string  | Amount of CAT tokens transferred                      |
| type              | string  | Transaction type (e.g., "CAT2")                      |
| timestamp         | number  | Unix timestamp of the transaction                     |
| confirmed_time    | string  | ISO timestamp of confirmation                         |
| spend_time        | string  | ISO timestamp when spent (null if unspent)           |
| confirmed_txn_type| number  | Type of confirmation transaction                      |
| sender            | object  | Information about the sender                          |
| sender.address    | string  | Sender's address                                     |
| receiver          | object  | Information about the receiver                        |
| receiver.address  | string  | Receiver's address                                   |
| cat               | object  | Information about the CAT                            |
| cat.id           | string  | CAT identifier (TAIL hash)                           |
| cat.name         | string  | Name of the CAT                                      |
| cat.symbol       | string  | Symbol/ticker of the CAT                             |
| cat.description  | string  | Description of the CAT                               |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Your request is invalid.                                                   |
| 404              | Not Found -- The specified CAT could not be found.                                        |
| 429              | Too Many Requests -- You're requesting too many times! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. | 