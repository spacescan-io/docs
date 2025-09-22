---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Block Transactions

Fetch grouped transactions for a given block height. You can optionally include dust, token (CAT), NFT, DID, and DataLayer (DL) coins.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/block/transactions/{block_height}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/block/transactions/{block_height}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| block_height | number | Yes | - | Block height to fetch |
| include_dust | boolean | No | false | Include dust standard coins |
| include_token | boolean | No | false | Include CAT token coins |
| include_nft | boolean | No | false | Include NFT coins |
| include_did | boolean | No | false | Include DID coins |
| include_dl | boolean | No | false | Include DataLayer coins |

::::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
::::

::::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/block/transactions/{block_height}" \
     -H "x-api-key: YOUR_API_KEY"
```
::::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/block/transactions/7500000?include_token=true&include_nft=true" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/block/transactions/2000000" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
# Basic request
curl -X GET "https://api.spacescan.io/block/transactions/7500000"

# With optional includes
curl -X GET "https://api.spacescan.io/block/transactions/7500000?include_dust=true&include_token=true&include_nft=true&include_did=true&include_dl=true"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://api-testnet11.spacescan.io/block/transactions/2000000?include_token=true"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```python
import requests

block_height = 7500000

# Basic
url = f"https://api.spacescan.io/block/transactions/{block_height}"
print(requests.get(url).json())

# With includes
url2 = f"https://api.spacescan.io/block/transactions/{block_height}?include_token=true&include_nft=true"
print(requests.get(url2).json())
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

block_height = 2000000
url = f"https://api-testnet11.spacescan.io/block/transactions/{block_height}"
print(requests.get(url).json())
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```javascript
const h = 7500000;
fetch(`https://api.spacescan.io/block/transactions/${h}?include_token=true&include_nft=true`)
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const h = 2000000;
fetch(`https://api-testnet11.spacescan.io/block/transactions/${h}`)
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response

Depending on the block type:
- If the block does not exist: `{ "status": "failed", "message": "Block not found" }` (HTTP 404)
- If the block exists but is not a transaction block:

```json
{
  "status": "success",
  "is_transaction_block": false
}
```

- If the block is a transaction block (optional groups appear only if included):

```json
{
  "status": "success",
  "is_transaction_block": true,
  "confirmed_transactions": {
    "standard_coins": [ /* ... */ ],
    "dust_coins": [ /* ... if include_dust */ ],
    "token_coins": [ /* ... if include_token */ ],
    "nft_coins": [ /* ... if include_nft */ ],
    "did_coins": [ /* ... if include_did */ ],
    "dl_coins": [ /* ... if include_dl */ ]
  },
  "spent_transactions": {
    "standard_coins": [ /* ... */ ],
    "dust_coins": [ /* ... if include_dust */ ],
    "token_coins": [ /* ... if include_token */ ],
    "nft_coins": [ /* ... if include_nft */ ],
    "did_coins": [ /* ... if include_did */ ],
    "dl_coins": [ /* ... if include_dl */ ]
  },
  "reward_coins": [ /* confirmed standard coins with coinbase=true */ ]
}
```

### Item Shapes (high-level)

- Standard/Dust coin:
  - `coin_name`, `confirmed_block`, `spend_block`, `parent_coin`, `coin_mod`, `owner_address`, `confirmed_time`, `spend_time`, `from_address`, `memo`, `amount`, `amount_mojo`, `coinbase`
- Token (CAT) coin:
  - Standard fields plus `token`, `asset_info { asset_id, name, symbol, preview_url }`, `amount`, `amount_mojo`
- NFT coin:
  - Standard subset plus `nft_id`, `nft_info`
- DID coin:
  - Standard subset plus `did_id`
- DataLayer (DL) coin:
  - Standard subset; owner/from are puzzle hashes; includes `store_id`

### Error Responses

| HTTP Status Code | Meaning |
|------------------|---------|
| 404 | Not Found — Block not found |
| 429 | Too Many Requests — You're requesting too many times |
| 500 | Internal Server Error — We had a problem with our server |
| 503 | Service Unavailable — We're temporarily offline for maintenance |


