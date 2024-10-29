---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get NFT Information

This endpoint allows you to fetch detailed information about a specific NFT using its NFT ID.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/nft/info/{nft_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/nft/info/{nft_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| nft_id    | string | The unique NFT ID                               |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/nft/info/{nft_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/nft/info/nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/nft/info/nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="bash">
        curl -X GET "https://api.spacescan.io/nft/info/nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/nft/info/nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        nft_id = "nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u"
        url = f"https://api.spacescan.io/nft/info/{nft_id}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        nft_id = "nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u"
        url = f"https://api-testnet11.spacescan.io/nft/info/{nft_id}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="javascript">
        const nftId = "nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u";
        const url = `https://api.spacescan.io/nft/info/${nftId}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const nftId = "nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u";
        const url = `https://api-testnet11.spacescan.io/nft/info/${nftId}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <ApiCallExample endpoint="https://api.spacescan.io/nft/info/nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/nft/info/nft1qy8twtlun5ppfxmysp6sgvnawmn4ysq4gycz8yzm8rzkzx9mnk2syyza4u" />
  </TabItem>
</Tabs>

### Response Schema

| Field               | Type    | Description                                           |
|--------------------|---------|-------------------------------------------------------|
| status             | string  | The status of the API request                         |
| nft                | object  | Detailed information about the NFT                    |
| nft.nft_id         | string  | The unique identifier of the NFT                      |
| nft.name           | string  | The name of the NFT                                   |
| nft.description    | string  | Description of the NFT                                |
| nft.collection_id  | string  | ID of the collection this NFT belongs to              |
| nft.metadata_uri   | string  | URI to the NFT's metadata                            |
| nft.metadata       | object  | Metadata of the NFT                                   |
| nft.owner          | string  | Current owner's address                               |
| nft.minted_height  | number  | Block height when the NFT was minted                  |
| nft.minted_timestamp | number | Timestamp when the NFT was minted                    |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Your request is invalid.                                                   |
| 404              | Not Found -- The specified NFT could not be found.                                        |
| 429              | Too Many Requests -- You're requesting too many times! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. |