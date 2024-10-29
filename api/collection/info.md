---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Collection Information

This endpoint allows you to fetch detailed information about an collection.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/collection/info/{collection_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/collection/info/{collection_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter      | Type   | Description                                     |
|---------------|--------|-------------------------------------------------|
| collection_id | string | The unique identifier of the NFT collection     |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/collection/info/{collection_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/collection/info/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/collection/info/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/collection/info/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/collection/info/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        collection_id = "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl"
        url = f"https://api.spacescan.io/collection/info/{collection_id}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        collection_id = "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl"
        url = f"https://api-testnet11.spacescan.io/collection/info/{collection_id}"

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
        const collectionId = "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl";
        const url = `https://api.spacescan.io/collection/info/${collectionId}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const collectionId = "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl";
        const url = `https://api-testnet11.spacescan.io/collection/info/${collectionId}`;

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
    <ApiCallExample endpoint="https://api.spacescan.io/collection/info/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/collection/info/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl" />
  </TabItem>
</Tabs>

### Response Schema

| Field                  | Type    | Description                                           |
|-----------------------|---------|-------------------------------------------------------|
| status                | string  | The status of the API request                         |
| collection            | object  | Detailed information about the NFT collection         |
| collection.id         | string  | The unique identifier of the collection               |
| collection.name       | string  | The name of the collection                            |
| collection.description| string  | Description of the collection                         |
| collection.icon_uri   | string  | URI to the collection's icon                         |
| collection.banner_uri | string  | URI to the collection's banner                       |
| collection.nft_count  | number  | Total number of NFTs in the collection               |
| collection.owner_count| number  | Total number of unique owners                        |
| collection.verified   | boolean | Whether the collection is verified                    |
| collection.created_at | string  | Timestamp when the collection was created            |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Your request is invalid.                                                   |
| 404              | Not Found -- The specified collection could not be found.                                 |
| 429              | Too Many Requests -- You're requesting too many times! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. | 