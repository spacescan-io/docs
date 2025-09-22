---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Block By Unix Timestamp

Fetch a block where `extract(EPOCH from time_created)` equals the provided Unix timestamp (in seconds).

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/block/timestamp/{unix_timestamp}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/block/timestamp/{unix_timestamp}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| unix_timestamp | number | Yes | - | Unix timestamp in seconds |
| additions | boolean | No | false | Include additions array |
| removals | boolean | No | false | Include removals array |
| rewards | boolean | No | false | Include rewards array |

::::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
::::

::::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/block/timestamp/{unix_timestamp}" \
     -H "x-api-key: YOUR_API_KEY"
```
::::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/block/timestamp/1758531600" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/block/timestamp/1758531600" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
curl -X GET "https://api.spacescan.io/block/timestamp/1758531600"

# With optional includes
curl -X GET "https://api.spacescan.io/block/timestamp/1758531600?additions=true&rewards=true"
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```bash
curl -X GET "https://api-testnet11.spacescan.io/block/timestamp/1758531600"
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```python
import requests

unix_ts = 1758531600

# Basic request
url = f"https://api.spacescan.io/block/timestamp/{unix_ts}"
response = requests.get(url)
print(response.json())

# With optional includes
url_with_includes = f"https://api.spacescan.io/block/timestamp/{unix_ts}?additions=true&rewards=true"
response = requests.get(url_with_includes)
print(response.json())
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```python
import requests

unix_ts = 1758531600
url = f"https://api-testnet11.spacescan.io/block/timestamp/{unix_ts}"
response = requests.get(url)
print(response.json())
```

      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">

```javascript
const unixTs = 1758531600;

// Basic request
fetch(`https://api.spacescan.io/block/timestamp/${unixTs}`)
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);

// With optional includes
fetch(`https://api.spacescan.io/block/timestamp/${unixTs}?additions=true&rewards=true`)
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

      </TabItem>
      <TabItem value="testnet" label="Testnet">

```javascript
const unixTs = 1758531600;
fetch(`https://api-testnet11.spacescan.io/block/timestamp/${unixTs}`)
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <ApiCallExample endpoint="https://api.spacescan.io/block/timestamp/1758531600" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/block/timestamp/1758531600" />
  </TabItem>
</Tabs>

### Response Schema

The endpoint returns an object with `status` and `data`. The `data` object contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| number | number | Block height |
| hash | string | Hash of the block |
| type | string | "Transaction block" or "Non Transaction block" |
| timestamp | number | Block creation time (Unix seconds) |
| farmer_address | string | Farmer address |
| pool_address | string | Pool address |
| plot | string | Plot size (e.g., "K32") |
| block_reward | number | Total block reward |
| pool_amount | number | Pool reward amount |
| farmer_amount | number | Farmer reward amount |
| transferred_amount | number | Total transferred amount in the block |
| addition_count | number | Number of additions |
| removal_count | number | Number of removals |
| reward_count | number | Number of rewards |

### Error Responses

| HTTP Status Code | Meaning |
|------------------|---------|
| 404 | Not Found — No block at the given timestamp |
| 429 | Too Many Requests — You're requesting too many times |
| 500 | Internal Server Error — We had a problem with our server |
| 503 | Service Unavailable — We're temporarily offline for maintenance |

### Notes

- The timestamp must be in seconds (not milliseconds).
- If multiple blocks share the same second, the highest block height is returned.
- Use the optional query parameters to embed transaction arrays in the response.


