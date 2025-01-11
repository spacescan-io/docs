---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get NFT Original Data

This endpoint allows you to fetch the original raw data/content of a specific NFT.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/nfts/{nft_id}/original
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/nfts/{nft_id}/original
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| nft_id | string | Yes | - | The unique identifier of the NFT |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/nfts/{nft_id}/original" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/nfts/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7/original" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
curl -X GET "https://api.spacescan.io/nfts/nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7/original"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

nft_id = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7"
url = f"https://api.spacescan.io/nfts/{nft_id}/original"

response = requests.get(url)
# For binary data like images
content = response.content
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
const nftId = "nft10lutrplp2mqrp0wg27sjmjeezzluk9a7jgmjpdv6n5qalkpy8kxqrkqag7";
const url = `https://api.spacescan.io/nfts/${nftId}/original`;

fetch(url)
  .then(response => response.blob()) // For binary data like images
  .then(blob => {
    // Handle the binary data
    console.log('Content type:', blob.type);
    console.log('Size:', blob.size);
  })
  .catch(error => console.error('Error:', error));
```

  </TabItem>
</Tabs>

### Response

The endpoint returns the raw binary data of the NFT's original content. The content type will vary depending on the NFT's data format:

- Images: Returns image data (PNG, JPEG, GIF, etc.)
- Documents: Returns document data (PDF, JSON, etc.)
- Audio: Returns audio data (MP3, WAV, etc.)
- Video: Returns video data (MP4, WebM, etc.)

### Response Headers

| Header | Description |
|--------|-------------|
| Content-Type | The MIME type of the returned content (e.g., `image/png`, `application/pdf`) |
| Content-Length | Size of the response in bytes |
| Cache-Control | Caching directives for the response |

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Your request is invalid |
| 404 | Not Found -- The specified NFT or its original data could not be found |
| 429 | Too Many Requests -- You're requesting too many times |
| 500 | Internal Server Error -- We had a problem with our server |
| 503 | Service Unavailable -- We're temporarily offline for maintenance |

### Notes

- The response is the raw binary data of the NFT's original content
- No JSON wrapping is applied to the response
- Content-Type header indicates the format of the returned data
- Large files may take longer to download
- Consider implementing appropriate timeout handling in your client 