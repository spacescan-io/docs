---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Address Transactions

This endpoint allows you to fetch the transaction history for a given XCH address.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/address/transactions/{address}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/address/transactions/{address}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| address   | string | The XCH address to fetch transactions for       |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/address/transactions/{address}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        address = "xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"
        url = f"https://api.spacescan.io/address/transactions/{address}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        address = "xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"
        url = f"https://api-testnet11.spacescan.io/address/transactions/{address}"

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
        const address = "xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9";
        const url = `https://api.spacescan.io/address/transactions/${address}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const address = "xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9";
        const url = `https://api-testnet11.spacescan.io/address/transactions/${address}`;

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
    <ApiCallExample endpoint="https://api.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" />
  </TabItem>
</Tabs>

### Response Schema

| Field           | Type   | Description                                |
|-----------------|--------|--------------------------------------------|
| status          | string | The status of the API request              |
| data            | object | Contains the transaction data              |
| data.coins      | array  | List of coin transactions                  |
| data.rowCount   | number | Total number of transactions               |
| data.cat_balance| object | CAT (Chia Asset Token) balance information |

#### Coin Transaction Object

Each coin in the `data.coins` array contains the following fields:

| Field             | Type    | Description                                           |
|-------------------|---------|-------------------------------------------------------|
| coin_name         | string  | Unique identifier for the coin                        |
| confirmed_block   | string  | Block number where the transaction was confirmed      |
| spend_block       | string  | Block number where the coin was spent (null if unspent)|
| parent_coin       | string  | Identifier of the parent coin                         |
| coin_mod          | string  | Coin modification type (e.g., "STND" for standard)    |
| owner_address     | string  | Address of the coin owner                             |
| confirmed_time    | string  | Timestamp of confirmation (ISO 8601 format)           |
| spend_time        | string  | Timestamp of spending (ISO 8601 format, null if unspent) |
| from_address      | string  | Address of the sender                                 |
| memo              | string  | Transaction memo (null if not provided)               |
| amount            | string  | Transaction amount in XCH                             |
| amount_mojo       | string  | Transaction amount in mojo (smallest unit)            |
| spend_txn_type    | string  | Type of spending transaction (null if unspent)        |
| timestamp         | number  | Unix timestamp of the transaction                     |
| id                | string  | Transaction ID (null in this example)                 |
| coinbase          | boolean | Indicates if this is a coinbase transaction           |
| confirmed_txn_id  | string  | ID of the confirmation transaction                    |
| spend_txn_id      | string  | ID of the spending transaction (null if unspent)      |
| type              | string  | Type of the transaction (e.g., "NAN" for standard)    |
