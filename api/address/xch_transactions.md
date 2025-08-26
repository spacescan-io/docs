---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get XCH Transactions

This endpoint allows you to fetch the transaction history for a given XCH address with flexible filtering options for different transaction types.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/address/xch-transaction/{address}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/address/xch-transaction/{address}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | The XCH address to fetch transactions for |
| count | number | No | 100 | Number of transactions to return per type |
| include_send | boolean | No | true | Include sent transactions |
| include_received | boolean | No | true | Include received transactions |
| include_send_dust | boolean | No | false | Include dust sent transactions |
| include_received_dust | boolean | No | false | Include dust received transactions |
| include_owned | boolean | No | false | Include unspent coins (is_spend = false) |
| include_spend | boolean | No | false | Include spent coins (is_spend = true) |
| send_cursor | number | No | null | Pagination cursor for sent transactions |
| received_cursor | number | No | null | Pagination cursor for received transactions |
| send_dust_cursor | number | No | null | Pagination cursor for dust sent transactions |
| received_dust_cursor | number | No | null | Pagination cursor for dust received transactions |
| owned_cursor | number | No | null | Pagination cursor for owned (unspent) coins |
| spent_cursor | number | No | null | Pagination cursor for spent coins |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/address/xch-transaction/{address}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/address/xch-transaction/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/address/xch-transaction/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
# Initial request with dust transactions
curl -X GET "https://api.spacescan.io/address/xch-transaction/xch1...?include_send_dust=true&include_received_dust=true"

# Paginated request for specific transaction types
curl -X GET "https://api.spacescan.io/address/xch-transaction/xch1...?send_cursor=100&received_cursor=50"

# Request to get owned (unspent) coins
curl -X GET "https://api.spacescan.io/address/xch-transaction/xch1...?include_owned=true"

# Request to get spent coins
curl -X GET "https://api.spacescan.io/address/xch-transaction/xch1...?include_spend=true"

# Request to get both owned and spent coins with pagination
curl -X GET "https://api.spacescan.io/address/xch-transaction/xch1...?include_owned=true&include_spend=true&owned_cursor=25&spent_cursor=50"

# Request with UNIX timestamps 
curl -X GET "https://api.spacescan.io/address/xch-transaction/xch1...?start_timestamp=1756217142&end_timestamp=1758809142"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://api-testnet11.spacescan.io/address/xch-transaction/xch1..."
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```python
import requests

address = "xch1..."
url = f"https://api.spacescan.io/address/xch-transaction/{address}"

# Request with parameters
params = {
    "include_send_dust": "true",
    "include_received_dust": "true",
    "count": 50
}

response = requests.get(url, params=params)
data = response.json()
print(data)

# Request to get owned (unspent) and spent coins
params_coins = {
    "include_owned": "true",
    "include_spend": "true",
    "count": 50
}

response_coins = requests.get(url, params=params_coins)
data_coins = response_coins.json()
print(data_coins)
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

address = "xch1..."
url = f"https://api-testnet11.spacescan.io/address/xch-transaction/{address}"

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
const address = "xch1...";
const url = `https://api.spacescan.io/address/xch-transaction/${address}`;

// Basic request
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Request with parameters for owned and spent coins
const paramsObj = {
  include_owned: true,
  include_spend: true,
  count: 50
};
const params = new URLSearchParams(paramsObj);
fetch(`${url}?${params}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const address = "xch1...";
const url = `https://api-testnet11.spacescan.io/address/xch-transaction/${address}`;

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
    <ApiCallExample endpoint="https://api.spacescan.io/address/xch-transaction/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/address/xch-transaction/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" />
  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| send_transactions.transactions | array | List of sent transactions |
| send_transactions.transactions[].coin_id | string | Unique identifier for the coin |
| send_transactions.transactions[].time | string | ISO timestamp of the transaction |
| send_transactions.transactions[].height | number | Block height of the transaction |
| send_transactions.transactions[].amount_xch | number | Amount in XCH |
| send_transactions.transactions[].amount_mojo | number | Amount in mojo |
| send_transactions.transactions[].to | string | Recipient address |
| send_transactions.transactions[].memo | string[] | Optional memo array |
| send_transactions.next_cursor | number | Cursor for next page of sent transactions |
| send_transactions.total_count | number | Total count (only in initial request) |
| received_transactions.transactions | array | List of received transactions |
| received_transactions.transactions[].coin_id | string | Unique identifier for the coin |
| received_transactions.transactions[].time | string | ISO timestamp of the transaction |
| received_transactions.transactions[].height | number | Block height of the transaction |
| received_transactions.transactions[].amount_xch | number | Amount in XCH |
| received_transactions.transactions[].amount_mojo | number | Amount in mojo |
| received_transactions.transactions[].from | string | Sender address |
| received_transactions.transactions[].memo | string[] | Optional memo array |
| received_transactions.next_cursor | number | Cursor for next page of received transactions |
| received_transactions.total_count | number | Total count (only in initial request) |
| send_dust_transactions | object | Same structure as send_transactions (only if include_send_dust=true) |
| received_dust_transactions | object | Same structure as received_transactions (only if include_received_dust=true) |
| owned_transactions | object | List of owned (unspent) coins (only if include_owned=true) |
| owned_transactions.transactions | array | List of owned (unspent) coins |
| owned_transactions.transactions[].coin_id | string | Unique identifier for the coin |
| owned_transactions.transactions[].time | string | ISO timestamp of the transaction |
| owned_transactions.transactions[].height | number | Block height of the transaction |
| owned_transactions.transactions[].amount_xch | number | Amount in XCH |
| owned_transactions.transactions[].amount_mojo | number | Amount in mojo |
| owned_transactions.transactions[].from | string | Sender address |
| owned_transactions.transactions[].to | string | Recipient address (this address) |
| owned_transactions.next_cursor | number | Cursor for next page of owned coins |
| owned_transactions.total_count | number | Total count of owned coins |
| spent_transactions | object | List of spent coins (only if include_spend=true) |
| spent_transactions.transactions | array | List of spent coins |
| spent_transactions.transactions[].coin_id | string | Unique identifier for the coin |
| spent_transactions.transactions[].time | string | ISO timestamp of the transaction |
| spent_transactions.transactions[].height | number | Block height of the transaction |
| spent_transactions.transactions[].amount_xch | number | Amount in XCH |
| spent_transactions.transactions[].amount_mojo | number | Amount in mojo |
| spent_transactions.transactions[].from | string | Sender address |
| spent_transactions.transactions[].to | string | Recipient address (this address) |
| spent_transactions.transactions[].spend_time | string | ISO timestamp when the coin was spent |
| spent_transactions.next_cursor | number | Cursor for next page of spent coins |
| spent_transactions.total_count | number | Total count of spent coins |

### Notes
- Each transaction type can be paginated independently
- Dust transactions are excluded by default and must be explicitly requested
- Owned (unspent) coins and spent coins are excluded by default and must be explicitly requested
- Owned coins represent coins where is_spend = false (current balance)
- Spent coins represent coins where is_spend = true (previously owned)
- The response will only include the transaction types that were requested
- Use include_owned=true to get the current balance in individual coins
- Timestamps can be provided as UNIX timestamps (in seconds) using start_timestamp and end_timestamp parameters
