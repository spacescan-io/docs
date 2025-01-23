---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get NFT License

This endpoint allows you to fetch the license information/document associated with a specific NFT.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/nfts/{nft_id}/license
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet.spacescan.io/nfts/{nft_id}/license
```

  </TabItem>
</Tabs>

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| nft_id | string | The unique identifier of the NFT |

### Response Headers

| Header | Description |
|--------|-------------|
| Content-Type | The MIME type of the license document (e.g., `application/pdf`, `text/plain`) |
| Content-Length | Size of the response in bytes |
| Cache-Control | Caching directives for the response |

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Your request is invalid |
| 404 | Not Found -- The specified NFT or its license could not be found |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance |

### Notes

- The response is the raw license document data
- No JSON wrapping is applied to the response
- Content-Type header indicates the format of the returned license document
- Common license formats include PDF and plain text
- Consider implementing appropriate timeout handling in your client 