---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get XCH Balance

This endpoint allows you to fetch the XCH balance for a given address.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/address/xch-balance/{address}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/address/xch-balance/{address}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | The XCH address to fetch balance for |
| include_dust | boolean | No | false | Include dust coins in balance |
| start_block | number | No* | - | Starting block height to fetch balance from |
| end_block | number | No* | - | Ending block height to fetch balance to |
| start_timestamp | number | No* | - | Starting timestamp (Unix timestamp) to fetch balance from |
| end_timestamp | number | No* | - | Ending timestamp (Unix timestamp) to fetch balance to |

*When using block or timestamp filters, both start and end parameters are mandatory. Use either block parameters (start_block & end_block) OR timestamp parameters (start_timestamp & end_timestamp), not both.

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/address/xch-balance/{address}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/address/xch-balance/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9?start_timestamp=1756203572&end_timestamp=1756309813" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser (with timestamp filter)
    </a>
    <br /><br />
    <a href="https://api.spacescan.io/address/xch-balance/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9?start_block=7508362&end_block=7495133" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser (with block filter)
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/address/xch-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
curl -X GET "https://api.spacescan.io/address/xch-balance/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"

# With timestamp filter (both start and end required)
curl -X GET "https://api.spacescan.io/address/xch-balance/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9?start_timestamp=1756203572&end_timestamp=1756309813"

# With block filter (both start and end required)
curl -X GET "https://api.spacescan.io/address/xch-balance/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9?start_block=7508362&end_block=7495133"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://api-testnet11.spacescan.io/address/xch-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```python
import requests

address = "xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"

# Basic request
url = f"https://api.spacescan.io/address/xch-balance/{address}"
response = requests.get(url)
data = response.json()
print(data)

# With timestamp filter (both start and end required)
url_with_timestamp = f"https://api.spacescan.io/address/xch-balance/{address}?start_timestamp=1756203572&end_timestamp=1756309813"
response = requests.get(url_with_timestamp)
data = response.json()
print(data)

# With block filter (both start and end required)
url_with_blocks = f"https://api.spacescan.io/address/xch-balance/{address}?start_block=7508362&end_block=7495133"
response = requests.get(url_with_blocks)
data = response.json()
print(data)
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
url = f"https://api-testnet11.spacescan.io/address/xch-balance/{address}"

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
const address = "xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9";

// Basic request
const url = `https://api.spacescan.io/address/xch-balance/${address}`;
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// With timestamp filter (both start and end required)
const urlWithTimestamp = `https://api.spacescan.io/address/xch-balance/${address}?start_timestamp=1756203572&end_timestamp=1756309813`;
fetch(urlWithTimestamp)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// With block filter (both start and end required)
const urlWithBlocks = `https://api.spacescan.io/address/xch-balance/${address}?start_block=7508362&end_block=7495133`;
fetch(urlWithBlocks)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8";
const url = `https://api-testnet11.spacescan.io/address/xch-balance/${address}`;

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
    <ApiCallExample endpoint="https://api.spacescan.io/address/xch-balance/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/address/xch-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />
  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| xch | number | Balance in XCH |
| mojo | number | Balance in mojo |

### Notes
- The balance includes all unspent coins for the address
- Set include_dust=true to include dust coins in the balance
