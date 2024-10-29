---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Block Information

## Retrieve Block Details

This endpoint allows you to fetch detailed information about a specific block using its height or hash.

### Endpoint

```
GET https://api.spacescan.io/block/info/{block_identifier}
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| block_identifier | string | The block height or block hash |

### Live API Test

<a href="https://api.spacescan.io/block/info/3000000" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <CodeBlock language="bash">
    curl -X GET "https://api.spacescan.io/block/info/3000000"
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="Python">
    <CodeBlock language="python">
    import requests

    block_identifier = "3000000"
    url = f"https://api.spacescan.io/block/info/{block_identifier}"

    response = requests.get(url)
    data = response.json()
    print(data)
    </CodeBlock>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <CodeBlock language="javascript">
    const blockIdentifier = "3000000";
    const url = `https://api.spacescan.io/block/info/${blockIdentifier}`;

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    </CodeBlock>
  </TabItem>
</Tabs>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/block/info/3000000" />

### Response Schema

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| status           | string  | The status of the API request                         |
| block            | object  | Detailed information about the requested block        |
| block.height     | number  | The height of the block                               |
| block.timestamp  | string  | The timestamp when the block was created              |
| block.weight     | number  | The weight of the block                               |
| block.prev_hash  | string  | The hash of the previous block                        |
| block.farmer_puzzle_hash | string | The puzzle hash of the farmer who created the block |
| block.fees       | string  | The total fees in the block                           |
| block.transactions_count | number | The number of transactions in the block        |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Your request is invalid.                                                   |
| 404              | Not Found -- The specified block could not be found.                                      |
| 429              | Too Many Requests -- You're requesting too many blocks! Slow down!                        |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. |

### Notes

- You can use either block height or block hash as the block identifier.
- All timestamps are returned in ISO 8601 format: `YYYY-MM-DDTHH:mm:ss.sssZ`
- The API does not require authentication for this endpoint

For any additional information or support, please contact our API support team or refer to our comprehensive API documentation.
