---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get XCH Historical Balance

This endpoint allows you to fetch the XCH balance for a given address at a specific point in time (block number or timestamp). This is useful for calculating balances at historical points, such as for tax reporting or balance snapshots.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://pro-api.spacescan.io/address/xch-historical-balance/{address}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://pro-api-testnet11.spacescan.io/address/xch-historical-balance/{address}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | The XCH address to fetch historical balance for |
| block | number | No* | - | Block number to calculate balance at (takes priority over timestamp) |
| timestamp | number | No* | - | Unix timestamp to calculate balance at |
| include_dust | boolean | No | false | Include dust coins in balance calculation |

*Either `block` or `timestamp` is required (but not both). If both are provided, `block` takes priority.

:::info Pro API Only
This endpoint is only available through the Pro API. You must use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/address/xch-historical-balance/{address}?timestamp=1758605442" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### How It Works

The historical balance is calculated as:
- **Balance = Sum(received coins up to point) - Sum(spent coins up to point)**

Where:
- **Received coins**: All coins confirmed (received) on or before the specified block/timestamp
- **Spent coins**: All coins spent on or before the specified block/timestamp

This gives you the exact balance that existed at that point in time, regardless of what happened after.

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://pro-api.spacescan.io/address/xch-historical-balance/xch1dxtt3xsyehywmc4dhzlevvvtex9y0g9djtyw6r5j0k5l9xs47jwqxxse3d?timestamp=1758605442&include_dust=true" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser (with timestamp)
    </a>
    <br /><br />
    <a href="https://pro-api.spacescan.io/address/xch-historical-balance/xch1dxtt3xsyehywmc4dhzlevvvtex9y0g9djtyw6r5j0k5l9xs47jwqxxse3d?block=5000000&include_dust=true" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser (with block)
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://pro-api-testnet11.spacescan.io/address/xch-historical-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8?timestamp=1758605442" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
# With timestamp (Unix timestamp)
curl -X GET "https://pro-api.spacescan.io/address/xch-historical-balance/xch1dxtt3xsyehywmc4dhzlevvvtex9y0g9djtyw6r5j0k5l9xs47jwqxxse3d?timestamp=1758605442&include_dust=true" \
     -H "x-api-key: YOUR_API_KEY"

# With block number
curl -X GET "https://pro-api.spacescan.io/address/xch-historical-balance/xch1dxtt3xsyehywmc4dhzlevvvtex9y0g9djtyw6r5j0k5l9xs47jwqxxse3d?block=5000000&include_dust=true" \
     -H "x-api-key: YOUR_API_KEY"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://pro-api-testnet11.spacescan.io/address/xch-historical-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8?timestamp=1758605442" \
     -H "x-api-key: YOUR_API_KEY"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```python
import requests

address = "xch1dxtt3xsyehywmc4dhzlevvvtex9y0g9djtyw6r5j0k5l9xs47jwqxxse3d"
api_key = "YOUR_API_KEY"
headers = {"x-api-key": api_key}

# With timestamp (Unix timestamp)
url = f"https://pro-api.spacescan.io/address/xch-historical-balance/{address}?timestamp=1758605442&include_dust=true"
response = requests.get(url, headers=headers)
data = response.json()
print(data)

# With block number
url_with_block = f"https://pro-api.spacescan.io/address/xch-historical-balance/{address}?block=5000000&include_dust=true"
response = requests.get(url_with_block, headers=headers)
data = response.json()
print(data)
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
api_key = "YOUR_API_KEY"
headers = {"x-api-key": api_key}
url = f"https://pro-api-testnet11.spacescan.io/address/xch-historical-balance/{address}?timestamp=1758605442"

response = requests.get(url, headers=headers)
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
const address = "xch1dxtt3xsyehywmc4dhzlevvvtex9y0g9djtyw6r5j0k5l9xs47jwqxxse3d";
const apiKey = "YOUR_API_KEY";

// With timestamp (Unix timestamp)
const url = `https://pro-api.spacescan.io/address/xch-historical-balance/${address}?timestamp=1758605442&include_dust=true`;
fetch(url, {
  headers: {
    'x-api-key': apiKey
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// With block number
const urlWithBlock = `https://pro-api.spacescan.io/address/xch-historical-balance/${address}?block=5000000&include_dust=true`;
fetch(urlWithBlock, {
  headers: {
    'x-api-key': apiKey
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8";
const apiKey = "YOUR_API_KEY";
const url = `https://pro-api-testnet11.spacescan.io/address/xch-historical-balance/${address}?timestamp=1758605442`;

fetch(url, {
  headers: {
    'x-api-key': apiKey
  }
})
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
    <ApiCallExample endpoint="https://pro-api.spacescan.io/address/xch-historical-balance/xch1dxtt3xsyehywmc4dhzlevvvtex9y0g9djtyw6r5j0k5l9xs47jwqxxse3d?timestamp=1758605442&include_dust=true" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://pro-api-testnet11.spacescan.io/address/xch-historical-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8?timestamp=1758605442" />
  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| xch | number | Historical balance in XCH at the specified point in time |
| mojo | number | Historical balance in mojo at the specified point in time |
| block | number \| null | Block number used for calculation (if provided) |
| timestamp | number \| null | Timestamp used for calculation (if provided) |
| include_dust | boolean | Whether dust coins were included in the calculation |

### Example Response

```json
{
  "status": "success",
  "xch": 0.000448405,
  "mojo": 448405000,
  "block": null,
  "timestamp": 1758605442,
  "include_dust": true
}
```

### Notes

- **Historical Balance Calculation**: This endpoint calculates the balance that existed at a specific point in time by summing all coins received up to that point and subtracting all coins spent up to that point.

- **Block vs Timestamp**: 
  - Use `block` for block-height-based queries (faster, more precise for blockchain analysis)
  - Use `timestamp` for time-based queries (useful for tax reporting, balance snapshots at specific dates)
  - If both are provided, `block` takes priority

- **Dust Coins**: Set `include_dust=true` to include dust coins (small value transactions) in the balance calculation.

- **Use Cases**:
  - Tax reporting: Calculate balance at end of tax year
  - Balance snapshots: Get balance at specific dates
  - Historical analysis: Track balance changes over time
  - Audit trails: Verify balances at specific points in blockchain history

### Difference from Regular Balance Endpoint

| Feature | `/xch-balance` | `/xch-historical-balance` |
|---------|----------------|---------------------------|
| **Current Balance** | ✅ Shows current unspent balance | ❌ |
| **Historical Balance** | ❌ | ✅ Shows balance at specific point in time |
| **Timestamp Filter** | Filters coins received in window (current state) | Calculates balance at that point in time |
| **Use Case** | Current balance, balance in time window | Historical balance, tax reporting, snapshots |

### Error Responses

```json
{
  "status": "failed",
  "message": "Either 'block' or 'timestamp' query parameter is required (block takes priority if both are provided)"
}
```

```json
{
  "status": "failed",
  "message": "Invalid address"
}
```

