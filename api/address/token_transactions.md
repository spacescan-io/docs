---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Token Transactions

This endpoint allows you to fetch the token (CAT) transaction history for a given address.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/address/token-transaction/{address}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/address/token-transaction/{address}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | The XCH address to fetch token transactions for |
| count | number | No | 100 | Number of transactions to return per type |
| send_cursor | number | No | null | Pagination cursor for sent transactions |
| received_cursor | number | No | null | Pagination cursor for received transactions |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/address/token-transaction/{address}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/address/token-transaction/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/address/token-transaction/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
# Initial request
curl -X GET "https://api.spacescan.io/address/token-transaction/xch1..."

# Paginated request for specific transaction types
curl -X GET "https://api.spacescan.io/address/token-transaction/xch1...?send_cursor=100&received_cursor=50"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://api-testnet11.spacescan.io/address/token-transaction/xch1..."
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
url = f"https://api.spacescan.io/address/token-transaction/{address}"

# Request with parameters
params = {
    "count": 50,
    "send_cursor": 100,
    "received_cursor": 50
}

response = requests.get(url, params=params)
data = response.json()
print(data)
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

address = "xch1..."
url = f"https://api-testnet11.spacescan.io/address/token-transaction/{address}"

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
const url = `https://api.spacescan.io/address/token-transaction/${address}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const address = "xch1...";
const url = `https://api-testnet11.spacescan.io/address/token-transaction/${address}`;

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
    <ApiCallExample endpoint="https://api.spacescan.io/address/token-transaction/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/address/token-transaction/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />
  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| send_transactions.transactions | array | List of sent token transactions |
| send_transactions.transactions[].coin_id | string | Unique identifier for the coin |
| send_transactions.transactions[].time | string | ISO timestamp of the transaction |
| send_transactions.transactions[].height | number | Block height of the transaction |
| send_transactions.transactions[].token_amount | number | Amount of tokens transferred |
| send_transactions.transactions[].asset_id | string | The asset ID of the token |
| send_transactions.transactions[].token_id | string | The token ID in tkn format |
| send_transactions.transactions[].to | string | Recipient address |
| send_transactions.transactions[].memo | string[] | Optional memo array |
| send_transactions.next_cursor | number | Cursor for next page of sent transactions |
| send_transactions.total_count | number | Total count of sent transactions |
| received_transactions.transactions | array | List of received token transactions |
| received_transactions.transactions[].coin_id | string | Unique identifier for the coin |
| received_transactions.transactions[].time | string | ISO timestamp of the transaction |
| received_transactions.transactions[].height | number | Block height of the transaction |
| received_transactions.transactions[].token_amount | number | Amount of tokens transferred |
| received_transactions.transactions[].asset_id | string | The asset ID of the token |
| received_transactions.transactions[].token_id | string | The token ID in tkn format |
| received_transactions.transactions[].from | string | Sender address |
| received_transactions.transactions[].memo | string[] | Optional memo array |
| received_transactions.next_cursor | number | Cursor for next page of received transactions |
| received_transactions.total_count | number | Total count of received transactions |

### Notes
- Each transaction type (sent/received) can be paginated independently
- The token_id is derived from the asset_id using the tkn prefix format 