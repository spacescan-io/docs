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

```
GET https://api.spacescan.io/address/transactions/{address}
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| address   | string | The XCH address to fetch transactions for       |

### Live API Test

<a href="https://api.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <CodeBlock language="bash">
    curl -X GET "https://api.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="Python">
    <CodeBlock language="python">
    import requests

    address = "xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"
    url = f"https://api.spacescan.io/address/transactions/{address}"

    response = requests.get(url)
    data = response.json()
    print(data)
    </CodeBlock>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <CodeBlock language="javascript">
    const address = "xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9";
    const url = `https://api.spacescan.io/address/transactions/${address}`;

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    </CodeBlock>
  </TabItem>
</Tabs>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/address/transactions/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" />

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

### Notes

- The API returns the most recent transactions. The total number of transactions is provided in the `rowCount` field.
- All timestamps are returned in ISO 8601 format: `YYYY-MM-DDTHH:mm:ss.sssZ`
- Amounts are returned as strings to preserve precision
- The API does not require authentication for this endpoint
- CAT balance information is provided in the `cat_balance` object, which is empty in this example

For any additional information or support, please contact our API support team or refer to our comprehensive API documentation.
