---
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Coin Information

## Retrieve Coin Details

This endpoint allows you to fetch detailed information about a specific coin (transaction) using its unique identifier.

### Endpoint

```
GET https://api.spacescan.io/coin/info/{coin_id}
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| coin_id   | string | The unique identifier of the coin (transaction) |

### Live API Test

<a href="https://api.spacescan.io/coin/info/0x554c7cdc91269736fca8216dfbfa01841185bad4d1097ec899d2b18f2e558789" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <CodeBlock language="bash">
    curl -X GET "https://api.spacescan.io/coin/info/0x554c7cdc91269736fca8216dfbfa01841185bad4d1097ec899d2b18f2e558789"
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="Python">
    <CodeBlock language="python">
    import requests

    coin_id = "0x554c7cdc91269736fca8216dfbfa01841185bad4d1097ec899d2b18f2e558789"
    url = f"https://api.spacescan.io/coin/info/{coin_id}"

    response = requests.get(url)
    data = response.json()
    print(data)
    </CodeBlock>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <CodeBlock language="javascript">
    const coinId = "0x554c7cdc91269736fca8216dfbfa01841185bad4d1097ec899d2b18f2e558789";
    const url = `https://api.spacescan.io/coin/info/${coinId}`;

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    </CodeBlock>
  </TabItem>
</Tabs>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/coin/info/0x554c7cdc91269736fca8216dfbfa01841185bad4d1097ec899d2b18f2e558789" />

### Response Schema

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| status           | string  | The status of the API request                         |
| coin             | object  | Detailed information about the requested coin         |
| coin.coin_name   | string  | The unique identifier of the coin                     |
| coin.coinbase    | boolean | Indicates if this is a coinbase transaction           |
| coin.confirmed_block | string | The block number where this coin was confirmed     |
| coin.spent_block | string  | The block number where this coin was spent (if applicable) |
| coin.amount      | string  | The amount of the coin in XCH                         |
| coin.amount_mojo | string  | The amount of the coin in mojo (smallest unit)        |
| coin.confirmed_time | string | The timestamp when the coin was confirmed           |
| coin.sender      | object  | Information about the sender of the coin              |
| coin.receiver    | object  | Information about the receiver of the coin            |
| coin.type        | string  | The type of the coin (e.g., "STND" for standard)      |
| coin.timestamp   | number  | Unix timestamp of the transaction                     |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Your request is invalid.                                                   |
| 404              | Not Found -- The specified coin could not be found.                                       |
| 429              | Too Many Requests -- You're requesting too many coins! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. |

### Notes

- All timestamps are returned in ISO 8601 format: `YYYY-MM-DDTHH:mm:ss.sssZ`
- Amounts are returned as strings to preserve precision
- The API does not require authentication for this endpoint

For any additional information or support, please contact our API support team or refer to our comprehensive API documentation.
